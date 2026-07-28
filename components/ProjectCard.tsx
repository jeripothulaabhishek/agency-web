"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { TiltCard } from "@/components/TiltCard";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
      <TiltCard className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-neo hairline">
        <Link href={`/work/${project.slug}`} className="block">
          <div className="relative aspect-[1.2] overflow-hidden rounded-[1.45rem] bg-mist">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              unoptimized
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="shine-sweep translate-y-3 rounded-full bg-accent px-4 py-2 text-sm font-black text-white shadow-glow transition-transform duration-300 group-hover:translate-y-0">
                View Case Study →
              </span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-black tracking-[-0.05em]">{project.name}</h3>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-accent">
                {project.category}
              </span>
            </div>
            <p className="mt-3 text-sm font-bold text-muted">{project.result}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-graphite">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.article>
  );
}
