# MYK Telegram RAR Extractor

Accepts a direct HTTP/HTTPS archive URL in Telegram, downloads it to the server, extracts it with 7-Zip, and sends extracted files back to Telegram.

## Deploy

Use a Docker-capable VPS or container host such as Railway, Render, Fly.io, etc. This is not suitable for Vercel Serverless Functions because multi-gigabyte downloads/extraction need temporary disk and longer execution time.

For a 2 GB archive, allocate at least 4-6 GB of temporary disk space.

Set BOT_TOKEN, WEBHOOK_SECRET, MAX_DOWNLOAD_BYTES and optionally WORK_DIR.

After deployment, set the Telegram webhook to your deployed /webhook endpoint using Telegram's setWebhook API and the same WEBHOOK_SECRET.

Then send /start or a direct archive URL to the bot.

The service removes the temporary job directory after processing.
