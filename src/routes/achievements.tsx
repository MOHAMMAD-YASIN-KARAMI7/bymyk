import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/achievements")({ component: Page });

function Page() {
  return (
    <SectionPage kicker="ACHIEVEMENTS" title="دستاوردها" path="/achievements" body="مسیر، نه لیست. دستاوردها اینجا ثبت می‌شوند." />
  );
}
