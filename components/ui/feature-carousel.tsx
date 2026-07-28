"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const labels = [
  "Fintech Platform",
  "AI SaaS",
  "Healthcare Dashboard",
  "Restaurant Website",
  "Real Estate Platform",
  "Mobile Banking App"
];

export function FeatureCarousel() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = useMemo(
    () =>
      projects.map((project, slideIndex) => ({
        ...project,
        label: labels[slideIndex] ?? project.category
      })),
    []
  );

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setIndex((value) => (value + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(interval);
  }, [reducedMotion, slides.length]);

  const active = slides[index];
  const go = (next: number) => {
    setDirection(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section className="section-shell-wide py-20 md:py-28" aria-labelledby="feature-showcase-title">
      <div className="grid gap-8 px-0 md:grid-cols-[0.78fr_1.22fr] md:items-end">
        <div>
          <Badge variant="outline">Portfolio System</Badge>
          <h2 id="feature-showcase-title" className="display-heading mt-5 max-w-3xl text-5xl font-black md:text-7xl">
            Work that behaves like product, not presentation.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            A rotating showcase of dashboards, SaaS surfaces, mobile flows, and brand platforms. Each case study is wired into the work archive.
          </p>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <Button type="button" variant="outline" size="icon" onClick={() => go(index - 1)} aria-label="Previous featured project">
            <ChevronLeft className="size-4" />
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={() => go(index + 1)} aria-label="Next featured project">
            <ChevronRight className="size-4" />
          </Button>
          <Button asChild variant="accent">
            <Link href="/work">
              All work <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="relative min-h-[480px] sm:min-h-[580px] overflow-hidden rounded-[2.6rem] border border-line bg-white shadow-editorial">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={active.slug}
              custom={direction}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[480px] sm:min-h-[580px] w-full"
            >
              <Image
                src={active.featuredImage ?? active.image}
                alt={`${active.name} ${active.label} interface preview`}
                fill
                unoptimized
                sizes="(min-width: 1024px) 72vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-white/10" />
              <div className="liquid-glass absolute inset-x-4 bottom-4 rounded-[1.8rem] p-5 md:inset-x-7 md:bottom-7 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{active.label}</Badge>
                  <Badge variant="glass">{active.result}</Badge>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                  <div>
                    <h3 className="text-3xl font-black leading-none tracking-[-0.07em] text-ink md:text-5xl">{active.name}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-graphite md:text-base md:leading-8">{active.description}</p>
                  </div>
                  <Button asChild variant="default" size="lg" className="shine-sweep shadow-glow hover:bg-accent-hover">
                    <Link href={`/work/${active.slug}`}>
                      Case study <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid gap-3">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.slug}
              type="button"
              onClick={() => go(slideIndex)}
              className={cn(
                "group grid grid-cols-[88px_1fr] gap-4 rounded-[1.6rem] border p-2 text-left transition-all outline-none focus-visible:ring-2 focus-visible:ring-accent",
                slideIndex === index
                  ? "border-accent/35 bg-accent-soft shadow-neo-sm"
                  : "border-line bg-white hover:-translate-y-0.5 hover:shadow-neo-sm"
              )}
            >
              <span className="relative block aspect-square overflow-hidden rounded-[1.2rem] bg-mist">
                <Image src={slide.image} alt={`${slide.name} thumbnail`} fill unoptimized sizes="88px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </span>
              <span className="flex min-w-0 flex-col justify-center">
                <span className="truncate text-sm font-black text-ink">{slide.label}</span>
                <span className="mt-1 truncate text-xs font-bold uppercase tracking-[0.12em] text-muted">{slide.name}</span>
                <span className="mt-2 text-xs font-black text-accent">{slide.result}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
