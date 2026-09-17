import { Brain, Target, TrendingUp, Trophy, UserRound } from "lucide-react";
import { PILLARS } from "@/lib/site";

const ICONS = {
  focus: Target,
  growth: TrendingUp,
  mindset: Brain,
  discipline: UserRound,
  success: Trophy,
} as const;

export function PosterArt() {
  return (
    <figure className="poster-art" dir="ltr">
      <div className="poster-glow" />
      <svg className="poster-corners" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M0 12 L12 0" />
        <path d="M0 0 L18 0 M0 0 L0 18" />
        <path d="M88 100 L100 88" />
        <path d="M82 100 L100 82" />
        <path d="M100 100 L100 86 M100 100 L86 100" />
      </svg>

      <img
        src="/hero-circle.jpg"
        alt="محمد یاسین کرمی"
        className="poster-figure"
        width={900}
        height={900}
      />

      <ul className="poster-pillars">
        {PILLARS.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <li key={p.en}>
              <span className="poster-icon">
                <Icon strokeWidth={1.6} />
              </span>
              <span>
                <strong>{p.en}</strong>
                <em>{p.hint}</em>
              </span>
            </li>
          );
        })}
      </ul>

      <blockquote className="poster-quote">
        <span className="poster-mark">“</span>
        <p>
          THE BEST
          <br />
          INVESTMENT
          <br />
          <span>YOU CAN MAKE</span>
        </p>
        <div className="poster-rule">
          <i />
          <b>IS IN</b>
          <i />
        </div>
        <p className="poster-yourself">YOURSELF</p>
        <cite>Yasin</cite>
      </blockquote>
    </figure>
  );
}
