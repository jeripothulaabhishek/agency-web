import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { FloatingShapes } from "@/components/FloatingShapes";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ShaderBackground } from "@/components/ShaderBackground";
import { TiltCard } from "@/components/TiltCard";
import { CultureGallery } from "@/components/sections/CultureGallery";
import { StudioStory } from "@/components/sections/StudioStory";
import { milestones, teamMembers, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Neuro Agency—our design philosophy, technical craft, leadership, and studio timeline."
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="section-shell grid gap-8 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="eyebrow">About the Studio</p>
          <h1 className="display-heading mt-6 text-[clamp(3.8rem,9vw,7.4rem)] font-black">
            The people behind the pixels.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
            Neuro Agency is a design-led product studio built on one conviction: digital products achieve category dominance when strategy, interface craft, dimensional motion, and frontend engineering move as one system.
          </p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-neo hairline bg-mist">
          <ShaderBackground intensity={0.14} className="rounded-[2rem]" />
          <FloatingShapes className="z-10" />
          <div className="relative z-20 grid h-full min-h-[420px] place-items-center p-8">
            <div className="rounded-[2rem] bg-white/75 p-8 text-center backdrop-blur-2xl hairline shadow-editorial max-w-xs">
              <p className="text-6xl font-black tracking-[-0.08em] text-accent">3D &amp; GL</p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-graphite">Interactive Shaders &amp; Dimensional Canvas</p>
            </div>
          </div>
        </div>
      </section>

      <StudioStory />

      <ParallaxSection className="section-shell py-16">
        <SectionHeading eyebrow="Values" title="A studio temperament with practical edges." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <TiltCard key={value} className="rounded-[2rem] bg-white p-6 shadow-neo-sm hairline">
              <div className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-lg font-black text-accent">{index + 1}</div>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.055em]">{value}</h3>
            </TiltCard>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="section-shell py-16">
        <SectionHeading eyebrow="Team" title="A compact team built for focused momentum." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {teamMembers.map((member) => (
            <TiltCard key={member.name} className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-neo-sm hairline">
              <div className="relative aspect-[0.86] overflow-hidden rounded-[1.5rem] bg-mist">
                <Image src={member.image} alt={member.name} fill unoptimized sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
                <div className="absolute inset-x-4 bottom-4 translate-y-4 rounded-2xl bg-white/82 p-3 opacity-0 backdrop-blur-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">Social links</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xl font-black tracking-[-0.05em]">{member.name}</h3>
                <p className="mt-1 text-sm font-bold text-muted">{member.role}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="section-shell py-16">
        <SectionHeading eyebrow="Timeline" title="Milestones, side-scrolling like a studio wall." />
        <div className="scrollbar-none mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="min-w-[78%] snap-center rounded-[2rem] bg-white p-7 shadow-neo-sm hairline sm:min-w-[42%] lg:min-w-[320px]">
              <p className="text-6xl font-black tracking-[-0.08em] text-accent">{milestone.year}</p>
              <h3 className="mt-7 text-2xl font-black tracking-[-0.05em]">{milestone.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{milestone.text}</p>
            </article>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="section-shell py-16">
        <SectionHeading eyebrow="Culture" title="Behind the scenes, but still composed." />
        <div className="mt-10">
          <CultureGallery />
        </div>
      </ParallaxSection>

      <CTASection compact />
    </main>
  );
}
