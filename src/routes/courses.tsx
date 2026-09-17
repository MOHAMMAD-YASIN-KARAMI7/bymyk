import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/courses")({ component: Page });

function Page() {
  return (
    <SectionPage kicker="COURSES" title="دوره‌ها" path="/courses" body="مسیرهای یادگیری برای ساختن مهارت، نه جمع کردن مدرک." />
  );
}
