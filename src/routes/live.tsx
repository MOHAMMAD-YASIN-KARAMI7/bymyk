import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/live")({ component: Page });

function Page() {
  return (
    <SectionPage
      kicker="LIVE"
      title="لایو و وبینار"
      path="/live"
      body="جلسه‌های زنده برای رشد، تکنولوژی و کسب‌وکار."
    />
  );
}
