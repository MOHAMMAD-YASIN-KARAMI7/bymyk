import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/promptlibrary")({ component: Page });

function Page() {
  return (
    <SectionPage
      kicker="PROMPT LIBRARY"
      title="کتابخانه پرامپت"
      path="/promptlibrary"
      body="منتخب پرامپت‌هایی که با آن‌ها کار می‌کنم — مهندسی پرامپت و لوپ، به زبان ساده."
    />
  );
}
