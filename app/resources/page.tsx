import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { InsightsIndex } from "@/components/sections/InsightsIndex";

export const metadata: Metadata = {
  title: "Insights"
};

export default function ResourcesPage() {
  return (
    <main>
      <InsightsIndex />
      <CTASection
        title="Get the useful notes."
        text="A compact newsletter band for design, frontend craft, measurement, and launches."
        compact
      />
    </main>
  );
}
