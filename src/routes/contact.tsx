import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-wash" />
        <div className="relative mx-auto max-w-xl px-4 py-16 md:py-24">
          <p className="font-display text-xs tracking-[0.35em] text-primary">CONTACT</p>
          <h1 className="mt-4 text-4xl font-semibold">تماس</h1>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">
            برای همکاری، پیشنهاد یا پیام مستقیم، فرم را پر کنید یا از ربات تلگرام استفاده کنید.
          </p>

          {sent ? (
            <p className="mt-10 rounded-2xl border border-primary/40 bg-primary/10 px-4 py-6 text-sm leading-8">
              پیام آماده ارسال است. اگر کلاینت ایمیل باز نشد، مستقیم به
              {" "}
              <a className="text-primary" href="mailto:officialbymyk@proton.me">
                officialbymyk@proton.me
              </a>
              {" "}
              بنویسید.
            </p>
          ) : (
            <form
              className="mt-10 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("name") ?? "");
                const email = String(data.get("email") ?? "");
                const message = String(data.get("message") ?? "");
                const body = encodeURIComponent(`از: ${name}\nایمیل: ${email}\n\n${message}`);
                window.location.href = `mailto:officialbymyk@proton.me?subject=${encodeURIComponent("پیام از سایت MYK")}&body=${body}`;
                setSent(true);
              }}
            >
              <label className="grid gap-2 text-sm">
                نام
                <input
                  name="name"
                  required
                  className="rounded-xl border border-border bg-card/50 px-4 py-3 outline-none focus:border-primary/60"
                />
              </label>
              <label className="grid gap-2 text-sm">
                ایمیل
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-border bg-card/50 px-4 py-3 outline-none focus:border-primary/60"
                />
              </label>
              <label className="grid gap-2 text-sm">
                پیام
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="rounded-xl border border-border bg-card/50 px-4 py-3 outline-none focus:border-primary/60"
                />
              </label>
              <button
                type="submit"
                className="pressable rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                ارسال پیام
              </button>
            </form>
          )}

          <a
            href="https://t.me/mykofficialbot"
            target="_blank"
            rel="noreferrer"
            className="pressable mt-6 inline-flex rounded-full border border-border px-5 py-2.5 text-sm"
          >
            ربات تلگرام
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
