import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { SiteShell } from "@/components/layout/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "MYK";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "محمد یاسین کرمی | MYK" },
      { name: "theme-color", content: "#070b14" },
      {
        name: "description",
        content: "وب‌سایت شخصی محمد یاسین کرمی؛ مهندسی پرامپت، تکنولوژی، کسب‌وکار و رشد فردی.",
      },
      { name: "author", content: "Mohammad Yasin Karami" },
      { name: "apple-mobile-web-app-title", content: APP_NAME },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Great+Vibes&family=Vazirmatn:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => (
    <SiteShell>
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <p className="font-display text-xs tracking-[0.35em] text-primary">۴۰۴</p>
        <h1 className="mt-3 text-3xl font-semibold">این صفحه پیدا نشد</h1>
        <p className="mt-3 text-sm text-muted-foreground">مسیر را بررسی کنید یا از منو به خانه برگردید.</p>
      </section>
    </SiteShell>
  ),
});

function RootDocument() {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
