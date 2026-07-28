import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTASection } from "@/components/CTASection";
import { Marquee } from "@/components/Marquee";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { HomeHero } from "@/components/sections/HomeHero";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { clientLogos, projects, services, stats } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <div className="section-shell">
        <Marquee items={clientLogos} label="Client logo strip" />
      </div>

      <ParallaxSection className="section-shell py-12">
        <div className="grid gap-4 rounded-[2rem] bg-white p-4 shadow-neo hairline md:grid-cols-4 md:p-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-mist p-6">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                className="text-5xl font-black tracking-[-0.08em] text-ink"
              />
              <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <div id="featured-work">
        <FeatureCarousel />
      </div>

      <ParallaxSection className="section-shell py-20" intensity={16}>
        <SectionHeading
          eyebrow="Operating System"
          title="A precise studio model for ambitious digital teams."
          text="No generic feature tiles: strategy, design, engineering, and measurement are treated as one product operating system."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.slug} className="group rounded-[2rem] bg-white p-7 shadow-neo hairline">
              <div className="grid size-16 animate-float place-items-center rounded-[1.3rem] bg-accent-soft text-3xl text-accent shadow-inset" style={{ animationDelay: `${index * 0.35}s` }}>
                {service.icon}
              </div>
              <h3 className="mt-8 text-3xl font-black tracking-[-0.06em]">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.summary}</p>
            </article>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="section-shell py-20">
        <SectionHeading
          eyebrow="How We Help"
          title="Strategy, interface craft, and code under one roof."
          text="Each service tile is intentionally quiet: raised surfaces, tiny looping icons, and enough whitespace for the message to breathe."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </ParallaxSection>

      <CTASection />

      <ParallaxSection className="section-shell grid gap-8 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <SectionHeading
          eyebrow="Testimonials"
          title="The handoff feels as designed as the interface."
          text="Auto-rotating quote cards with a restrained 3D flip transition."
        />
        <TestimonialCarousel />
      </ParallaxSection>
    </main>
  );
}
