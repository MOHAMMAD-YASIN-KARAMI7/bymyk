import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { NAV, SITE, SOCIAL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="خانه MYK">
            <BrandLogo />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-8 text-muted-foreground">{SITE.fullName}</p>
          <p className="mt-2 max-w-xs text-sm leading-8 text-muted-foreground">{SITE.tagline}</p>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.28em] text-primary">صفحات</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xs tracking-[0.28em] text-primary">رسانه‌ها</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SOCIAL.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
