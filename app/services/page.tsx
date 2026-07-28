import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ServiceTabs } from "@/components/sections/ServiceTabs";
import { faqs, techLogos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <main className="pt-32">
      <section className="section-shell pb-16">
        <p className="eyebrow">Services</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(4.2rem,11vw,8rem)] font-black">What We Do</h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
          Strategy, design, development, and analytics shaped as one calm delivery system.
        </p>
        <div className="mt-9 text-sm font-black uppercase tracking-[0.18em] text-muted">Scroll to explore ↓</div>
      </section>

      <ParallaxSection className="section-shell py-12">
        <ServiceTabs />
      </ParallaxSection>

      <ParallaxSection className="section-shell py-20">
        <SectionHeading eyebrow="Process" title="From fuzzy idea to shipped system." />
        <div className="mt-10">
          <ProcessTimeline />
        </div>
      </ParallaxSection>

      <div className="section-shell">
        <Marquee items={techLogos} direction="right" label="Technology stack marquee" />
      </div>

      <ParallaxSection className="section-shell grid gap-8 py-20 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow="FAQ" title="A few answers before the first workshop." />
        <Accordion items={faqs.general} />
      </ParallaxSection>

      <CTASection compact />
    </main>
  );
}
