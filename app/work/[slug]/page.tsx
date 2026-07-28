import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? project.name : "Case Study",
    description: project?.description
  };
}

export default function WorkDetailPage({ params }: Params) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="pt-32">
      <section className="section-shell pb-12">
        <p className="eyebrow">{project.category}</p>
        <h1 className="display-heading mt-6 max-w-5xl text-[clamp(4rem,10vw,8rem)] font-black">{project.name}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">{project.description}</p>
      </section>

      <section className="section-shell">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-mist shadow-neo hairline">
          <Image src={project.image} alt={`${project.name} hero preview`} fill unoptimized priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="section-shell grid gap-6 py-14 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-[2rem] bg-white p-7 shadow-neo-sm hairline">
            <p className="text-5xl font-black tracking-[-0.08em] text-accent">{metric.value}</p>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-muted">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="section-shell grid gap-5 py-10 md:grid-cols-2">
        <article className="rounded-[2rem] bg-white p-7 shadow-neo-sm hairline">
          <h2 className="text-3xl font-black tracking-[-0.06em]">Challenge</h2>
          <p className="mt-5 text-base leading-8 text-muted">{project.challenge}</p>
        </article>
        <article className="rounded-[2rem] bg-white p-7 shadow-neo-sm hairline">
          <h2 className="text-3xl font-black tracking-[-0.06em]">Solution</h2>
          <p className="mt-5 text-base leading-8 text-muted">{project.solution}</p>
        </article>
      </section>

      <section className="section-shell py-14">
        <h2 className="text-4xl font-black tracking-[-0.07em]">Related work</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>

      <CTASection compact />
    </main>
  );
}
