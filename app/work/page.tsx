import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work"
};

export default function WorkPage() {
  const spotlight = projects[0];

  return (
    <main className="pt-32">
      <section className="section-shell pb-16">
        <p className="eyebrow">Selected Work</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(4.2rem,11vw,8rem)] font-black">Selected Work</h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
          Placeholder projects with FLIP-style filtering, image reveals, and result-led cards.
        </p>
        <div className="mt-9">
          <WorkGallery />
        </div>
      </section>

      <ParallaxSection className="section-shell py-16">
        <article className="grid overflow-hidden rounded-[2rem] bg-white p-3 shadow-neo hairline md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] bg-mist">
            <Image src={spotlight.image} alt={spotlight.name} fill unoptimized sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
          </div>
          <div className="p-6 md:p-10">
            <p className="eyebrow">Spotlight</p>
            <h2 className="mt-6 text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">{spotlight.name}</h2>
            <p className="mt-5 text-base leading-8 text-muted">{spotlight.description}</p>
            <Link href={`/work/${spotlight.slug}`} className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-black text-white shadow-glow hover:bg-accent-hover transition-colors">
              Open case study
            </Link>
          </div>
        </article>
      </ParallaxSection>

      <section className="section-shell py-8">
        <div className="grid gap-4 rounded-[2rem] bg-mist p-6 text-center hairline">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Archive Integrity</p>
          <p className="text-xl font-black tracking-[-0.04em]">6 Production Case Studies Shipped Across Enterprise, Ecommerce, Startup & UI-UX</p>
        </div>
      </section>

      <CTASection compact />
    </main>
  );
}
