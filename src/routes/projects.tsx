import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/projects")({ component: Page });

function Page() {
  return (
    <SectionPage kicker="PROJECTS" title="پروژه‌ها" path="/projects" body="نمونه کارها و پروژه‌های MYK اینجا جمع می‌شود." />
  );
}
