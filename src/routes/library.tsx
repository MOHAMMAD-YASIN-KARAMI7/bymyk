import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/library")({ component: Page });

function Page() {
  return (
    <SectionPage kicker="LIBRARY" title="کتابخانه" path="/library" body="منابع و کتاب‌هایی که مسیر ساختن را شکل می‌دهند." />
  );
}
