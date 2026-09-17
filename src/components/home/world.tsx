import { Link } from "@tanstack/react-router";
import { WORLD } from "@/lib/site";

export function World() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <p className="font-display text-xs tracking-[0.28em] text-primary">WORLD</p>
      <h2 className="mt-3 text-2xl font-semibold">از کجا شروع کنیم</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {WORLD.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="pressable rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/50"
          >
            <p className="font-display text-[11px] tracking-[0.28em] text-primary">{item.kicker}</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
