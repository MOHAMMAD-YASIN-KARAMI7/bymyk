import asyncio
import os
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urlparse

import httpx
from fastapi import FastAPI, Request, HTTPException

BOT_TOKEN = os.environ["BOT_TOKEN"]
WEBHOOK_SECRET = os.environ.get("WEBHOOK_SECRET", "")
MAX_DOWNLOAD_BYTES = int(os.environ.get("MAX_DOWNLOAD_BYTES", str(4 * 1024**3)))
TELEGRAM_MAX_BYTES = 49 * 1024**2
BASE_DIR = Path(os.environ.get("WORK_DIR", "/tmp/rarbot"))
BASE_DIR.mkdir(parents=True, exist_ok=True)

app = FastAPI(title="Telegram RAR Extractor")

def safe_url(url: str) -> bool:
    p = urlparse(url)
    return p.scheme in {"http", "https"} and bool(p.netloc)

async def tg(method: str, data: dict):
    async with httpx.AsyncClient(timeout=120) as client:
        r = await client.post(f"https://api.telegram.org/bot{BOT_TOKEN}/{method}", data=data)
        r.raise_for_status()
        return r.json()

async def send_text(chat_id: int, text: str):
    await tg("sendMessage", {"chat_id": chat_id, "text": text})

async def send_file(chat_id: int, path: Path, caption: str = ""):
    async with httpx.AsyncClient(timeout=180) as client:
        with path.open("rb") as f:
            r = await client.post(
                f"https://api.telegram.org/bot{BOT_TOKEN}/sendDocument",
                data={"chat_id": str(chat_id), "caption": caption[:1024]},
                files={"document": (path.name, f, "application/octet-stream")},
            )
            r.raise_for_status()

async def download(url: str, out: Path):
    total = 0
    async with httpx.AsyncClient(follow_redirects=True, timeout=httpx.Timeout(60, read=120)) as client:
        async with client.stream("GET", url, headers={"User-Agent": "MYK-RAR-Extractor/1.0"}) as r:
            r.raise_for_status()
            length = r.headers.get("content-length")
            if length and int(length) > MAX_DOWNLOAD_BYTES:
                raise ValueError("File is larger than MAX_DOWNLOAD_BYTES.")
            with out.open("wb") as f:
                async for chunk in r.aiter_bytes(1024 * 1024):
                    total += len(chunk)
                    if total > MAX_DOWNLOAD_BYTES:
                        raise ValueError("Download exceeded MAX_DOWNLOAD_BYTES.")
                    f.write(chunk)
    return total

def extract_archive(archive: Path, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ["7z", "x", "-y", f"-o{out_dir}", str(archive)],
        capture_output=True,
        text=True,
        timeout=60 * 30,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr[-2000:] or result.stdout[-2000:])

def files_under(path: Path):
    return [p for p in path.rglob("*") if p.is_file()]

async def process(chat_id: int, url: str):
    job = Path(tempfile.mkdtemp(prefix="job-", dir=BASE_DIR))
    archive = job / "archive"
    extracted = job / "extracted"
    try:
        await send_text(chat_id, "⬇️ دانلود فایل شروع شد...")
        size = await download(url, archive)
        await send_text(chat_id, f"📦 دانلود شد: {size / 1024**2:.1f} MB\n⏳ در حال استخراج...")
        await asyncio.to_thread(extract_archive, archive, extracted)

        outputs = files_under(extracted)
        if not outputs:
            await send_text(chat_id, "⚠️ آرشیو استخراج شد ولی فایل قابل ارسالی پیدا نشد.")
            return

        await send_text(chat_id, f"✅ استخراج شد. {len(outputs)} فایل پیدا شد.")
        for p in outputs:
            size = p.stat().st_size
            if size > TELEGRAM_MAX_BYTES:
                await send_text(
                    chat_id,
                    f"⚠️ {p.name} حدود {size / 1024**2:.1f}MB است و برای ارسال مستقیم ربات بزرگ است؛ ارسال نشد."
                )
                continue
            await send_file(chat_id, p, f"📁 {p.name}")
    except Exception as e:
        await send_text(chat_id, f"❌ خطا: {str(e)[:1500]}")
    finally:
        shutil.rmtree(job, ignore_errors=True)

@app.get("/")
async def health():
    return {"ok": True, "service": "MYK Telegram RAR Extractor"}

@app.post("/webhook")
async def webhook(request: Request):
    if WEBHOOK_SECRET and request.headers.get("X-Telegram-Bot-Api-Secret-Token") != WEBHOOK_SECRET:
        raise HTTPException(status_code=403, detail="Invalid webhook secret")

    update = await request.json()
    message = update.get("message") or {}
    chat = message.get("chat") or {}
    chat_id = chat.get("id")
    text = (message.get("text") or "").strip()

    if not chat_id:
        return {"ok": True}

    if text.startswith("/start"):
        await send_text(chat_id, "سلام 👋\nلینک مستقیم RAR/ZIP را بفرست تا روی سرور دانلود و Extract کنم.")
        return {"ok": True}

    if safe_url(text):
        asyncio.create_task(process(chat_id, text))
        return {"ok": True}

    await send_text(chat_id, "🔗 یک لینک مستقیم HTTP/HTTPS برای فایل بفرست.")
    return {"ok": True}
