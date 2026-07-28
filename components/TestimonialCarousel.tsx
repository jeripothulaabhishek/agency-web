"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, reducedMotion ? 7000 : 4200);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const active = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-neo hairline md:p-9">
      <div className="absolute -right-20 -top-20 size-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative min-h-64">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active.quote}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, rotateY: -18, y: 20 }}
            animate={{ opacity: 1, rotateY: 0, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, rotateY: 18, y: -20 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid min-h-64 content-between"
            style={{ transformStyle: "preserve-3d" }}
          >
            <blockquote className="text-2xl font-black leading-tight tracking-[-0.05em] text-ink md:text-4xl">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-between gap-4">
              <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-muted">{active.role}</span>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-black text-accent">
                {index + 1}/{testimonials.length}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
