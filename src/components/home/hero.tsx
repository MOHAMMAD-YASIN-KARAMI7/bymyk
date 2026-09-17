import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";
import { PosterArt } from "./poster-art";

export function Hero() {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => {
      el.style.transform = "rotateY(0deg) rotateX(0deg)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-wash" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div>
          <img
            src="/logo-wordmark.png"
            alt="MYK"
            width={344}
            height={129}
            className="rise h-8 w-auto sm:h-10"
          />
          <h1 className="rise stagger-2 mt-4 text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-gold-gradient">{SITE.fullName}</span>
          </h1>
          <p className="rise stagger-3 mt-5 max-w-xl text-sm leading-8 text-muted-foreground md:text-base">
            {SITE.tagline}
          </p>

          <blockquote className="rise stagger-4 mt-8 max-w-md border-r-2 border-primary pr-4">
            <p className="font-display text-lg leading-relaxed text-gold-soft md:text-xl">{SITE.quoteEn}</p>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.quote}</p>
          </blockquote>

          <div className="rise stagger-5 mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="pressable group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              داستان من
              <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </Link>
            <Link
              to="/promptlibrary"
              className="pressable inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50"
            >
              کتابخانه پرامپت
            </Link>
            <Link
              to="/LINKS"
              className="pressable inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50"
            >
              لینک‌ها
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl" style={{ perspective: "1400px" }}>
          <div
            ref={frame}
            className="float-soft relative transition-transform duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <PosterArt />
          </div>
        </div>
      </div>
    </section>
  );
}
