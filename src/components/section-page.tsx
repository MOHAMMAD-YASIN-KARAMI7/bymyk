import { SiteShell } from "@/components/layout/site-shell";

export function SectionPage({
  kicker,
  title,
  path,
  body,
}: {
  kicker: string;
  title: string;
  path: string;
  body: string;
}) {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-wash" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-28">
          <p className="font-display text-xs tracking-[0.35em] text-primary">{kicker}</p>
          <h1 className="mt-4 text-4xl font-semibold">{title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-muted-foreground">{body}</p>
          <p className="mt-3 font-display text-xs tracking-[0.3em] text-primary" dir="ltr">
            {path}
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
