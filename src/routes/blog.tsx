import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/blog")({ component: Page });

function Page() {
  return (
    <SectionPage kicker="BLOG" title="بلاگ" path="/blog" body="یادداشت‌ها و نوشته‌ها اینجا منتشر می‌شود." />
  );
}
