"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "Enterprise", "Ecommerce", "Startup", "UI-UX", "Development"] as const;

export function WorkGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(() => (filter === "All" ? projects : projects.filter((project) => project.category === filter || project.tags.includes(filter))), [filter]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={cn("relative rounded-full px-4 py-2 text-sm font-black transition-colors hairline", filter === item ? "text-white" : "bg-white text-muted")}
            onClick={() => setFilter(item)}
          >
            {filter === item ? <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-accent" /> : null}
            <span className="relative">{item}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
