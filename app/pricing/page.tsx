import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PricingExperience } from "@/components/sections/PricingExperience";

export const metadata: Metadata = {
  title: "Pricing"
};

export default function PricingPage() {
  return (
    <main>
      <PricingExperience />
      <CTASection title="Need something custom?" text="Complex platforms, retained product teams, and multi-market launches deserve a scoped conversation." compact />
    </main>
  );
}
