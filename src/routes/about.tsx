import { createFileRoute } from "@tanstack/react-router";
import { ABOUT } from "@/lib/about";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-wash" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 md:py-24">
          <p className="font-display text-xs tracking-[0.35em] text-primary">{ABOUT.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold">{ABOUT.title}</h1>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">{ABOUT.lead}</p>
          <div className="mt-8 space-y-5">
            {ABOUT.intro.map((p) => (
              <p key={p} className="text-sm leading-8 text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-14 space-y-12">
            {ABOUT.chapters.map((ch) => (
              <article key={ch.kicker}>
                <p className="font-display text-xs tracking-[0.28em] text-primary">{ch.kicker}</p>
                <h2 className="mt-2 text-2xl font-semibold">{ch.title}</h2>
                <div className="mt-4 space-y-4">
                  {ch.paragraphs.map((p) => (
                    <p key={p} className="text-sm leading-8 text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
