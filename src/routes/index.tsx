import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { World } from "@/components/home/world";
import { SiteShell } from "@/components/layout/site-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />
      <World />
    </SiteShell>
  );
}
