import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft, Github, Instagram, Mail, MessageCircle, Send, Youtube } from "lucide-react";
import { SITE, SOCIAL } from "@/lib/site";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/LINKS")({ component: LinksPage });

const ICONS = {
  instagram: Instagram,
  youtube: Youtube,
  telegram: Send,
  bot: MessageCircle,
  github: Github,
  email: Mail,
} as const;

function LinksPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-wash" />
        <div className="relative mx-auto max-w-lg px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <img src="/logo-face.png" alt="MYK" width={256} height={256} className="size-28" />
            <img src="/logo-wordmark.png" alt="" width={344} height={129} className="mt-4 h-8 w-auto" />
            <h1 className="mt-6 text-3xl font-semibold">{SITE.fullName}</h1>
            <p className="mt-3 max-w-sm text-sm leading-8 text-muted-foreground">{SITE.tagline}</p>
            <p className="mt-2 font-display text-xs tracking-[0.3em] text-primary" dir="ltr">
              /LINKS
            </p>
          </div>

          <ul className="mt-10 space-y-3">
            {SOCIAL.map((s) => {
              const Icon = ICONS[s.key];
              return (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="pressable flex items-center justify-between rounded-2xl border border-border bg-card/40 px-4 py-4"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-5 text-primary" />
                      <span>
                        <strong className="block text-sm">{s.name}</strong>
                        <em className="text-xs text-muted-foreground not-italic" dir="ltr">
                          {s.handle}
                        </em>
                      </span>
                    </span>
                    <ArrowUpLeft className="size-4 text-muted-foreground" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
