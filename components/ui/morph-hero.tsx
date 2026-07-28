"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShaderBackground } from "@/components/ShaderBackground";
import { projects } from "@/lib/data";
import { heroReveal, staggerContainer, staggerChild } from "@/lib/motion";
import { cn } from "@/lib/utils";

const disciplines = ["AI", "Design", "Engineering", "Growth"];

export function MorphHero() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastWheelAt = useRef(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.4 });
  const visualX = useTransform(springX, [-0.5, 0.5], reducedMotion ? [0, 0] : [-18, 18]);
  const visualY = useTransform(springY, [-0.5, 0.5], reducedMotion ? [0, 0] : [-12, 12]);
  const rotateX = useTransform(springY, [-0.5, 0.5], reducedMotion ? [0, 0] : [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], reducedMotion ? [0, 0] : [-8, 8]);

  const slides = useMemo(
    () =>
      projects.slice(0, 5).map((project, index) => ({
        ...project,
        kicker: ["Fintech Platform", "AI SaaS", "Healthcare Dashboard", "Mobile Product", "Analytics Portal"][index] ?? project.category
      })),
    []
  );

  const goTo = useCallback(
    (next: number) => {
      const normalized = (next + slides.length) % slides.length;
      setDirection(normalized > active || (active === slides.length - 1 && normalized === 0) ? 1 : -1);
      setActive(normalized);
    },
    [active, slides.length]
  );

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setActive((value) => (value + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [reducedMotion, slides.length]);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onWheel = (event: React.WheelEvent<HTMLElement>) => {
    if (Math.abs(event.deltaY) < 18) return;
    const now = performance.now();
    if (now - lastWheelAt.current < 650) return;
    lastWheelAt.current = now;
    goTo(active + (event.deltaY > 0 ? 1 : -1));
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      goTo(active + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  const activeSlide = slides[active];

  return (
    <section
      aria-label="Neuro Agency project morph hero"
      tabIndex={0}
      onPointerMove={onPointerMove}
      onWheel={onWheel}
      onKeyDown={onKeyDown}
      className="relative isolate min-h-[calc(100vh-2rem)] overflow-hidden px-4 pb-12 pt-28 outline-none focus-visible:ring-2 focus-visible:ring-accent md:pt-32"
    >
      <ShaderBackground intensity={0.08} mouseReactive className="-z-30" />
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div className="soft-grid pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="section-shell-wide grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={staggerChild}>
            <Badge variant="glass">Design-led product studio</Badge>
          </motion.div>
          <motion.h1
            variants={heroReveal}
            className="display-heading mt-6 max-w-5xl text-balance text-[clamp(3.2rem,8vw,7.5rem)] font-black leading-[0.92] tracking-[-0.075em]"
          >
            We build products people remember.
          </motion.h1>
          <motion.p variants={staggerChild} className="mt-6 max-w-2xl text-pretty text-base leading-8 text-graphite md:text-xl md:leading-9">
            Category-defining digital experiences for ambitious teams who need strategy, interface craft, AI fluency, and engineering precision in one room.
          </motion.p>

          <motion.div variants={staggerChild} className="mt-8 flex flex-wrap gap-2">
            {disciplines.map((discipline, index) => (
              <span
                key={discipline}
                className={cn(
                  "rounded-full border border-line bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-ink shadow-sm transition-colors",
                  index === active % disciplines.length && "border-accent/30 bg-accent-soft text-accent"
                )}
              >
                {discipline}.
              </span>
            ))}
          </motion.div>

          <motion.div variants={staggerChild} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="accent" className="shine-sweep shadow-glow hover:bg-accent-hover">
              <Link href="/contact">
                Start a project <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass" className="liquid-glass">
              <Link href="/work">Explore the work</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div style={{ x: visualX, y: visualY, rotateX, rotateY, transformPerspective: 1200 }} className="relative mx-auto h-[480px] w-full max-w-3xl sm:h-[560px] lg:h-[650px]">
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute inset-0 rounded-[3rem] glass-crystal shadow-editorial" />

          {slides.map((slide, index) => {
            const offset = (index - active + slides.length) % slides.length;
            const isActive = index === active;
            const depth = offset === 0 ? 0 : offset === 1 ? 1 : offset === slides.length - 1 ? -1 : 2;
            const hidden = Math.abs(depth) > 1;

            return (
              <motion.article
                key={slide.slug}
                aria-hidden={!isActive}
                className={cn(
                  "absolute overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-editorial",
                  isActive ? "inset-x-3 bottom-8 top-5 z-30 sm:inset-x-6 md:inset-x-8" : "z-20"
                )}
                initial={false}
                animate={{
                  x: isActive ? 0 : depth > 0 ? 90 : -70,
                  y: isActive ? 0 : depth > 0 ? 60 : 90,
                  rotate: isActive ? 0 : depth > 0 ? 4 : -5,
                  scale: isActive ? 1 : 0.78,
                  opacity: hidden ? 0 : isActive ? 1 : 0.62,
                  filter: hidden ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ type: "spring", stiffness: 160, damping: 26, mass: 0.8 }}
              >
                <div className="relative h-full min-h-[380px]">
                  <Image
                    src={slide.featuredImage ?? slide.image}
                    alt={`${slide.name} — ${slide.kicker} project preview`}
                    fill
                    priority={index === 0}
                    unoptimized
                    sizes="(min-width: 1024px) 52vw, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-white/10" />
                  {isActive ? (
                    <motion.div
                      key={slide.slug}
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="liquid-glass absolute inset-x-4 bottom-4 rounded-[1.6rem] p-4 sm:inset-x-6 sm:bottom-6 sm:p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="accent">{slide.kicker}</Badge>
                        <Badge variant="glass">{slide.result}</Badge>
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-black leading-none tracking-[-0.06em] text-ink sm:text-4xl">{slide.name}</h2>
                          <p className="mt-2 text-xs leading-6 text-graphite sm:text-sm sm:leading-7">{slide.description}</p>
                        </div>
                        <Button asChild variant="default" size="icon" className="hidden shrink-0 md:inline-flex">
                          <Link href={`/work/${slide.slug}`} aria-label={`Open ${slide.name} case study`}>
                            <ArrowUpRight className="size-5" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}

          <div className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-line bg-white/80 p-2 shadow-neo-sm backdrop-blur-xl">
            <Button type="button" variant="ghost" size="icon" onClick={() => goTo(active - 1)} aria-label="Previous hero project">
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex items-center gap-1.5" aria-label={`Project ${active + 1} of ${slides.length}`}>
              {slides.map((slide, index) => (
                <button
                  key={slide.slug}
                  type="button"
                  aria-label={`Show ${slide.name}`}
                  className={cn("h-2 rounded-full transition-all", index === active ? "w-8 bg-accent" : "w-2 bg-ink/15 hover:bg-ink/30")}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <Button type="button" variant="ghost" size="icon" onClick={() => goTo(active + 1)} aria-label="Next hero project">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing project {active + 1} of {slides.length}: {activeSlide.name} - {activeSlide.result}
      </div>

      <div className="section-shell-wide mt-6 flex flex-col gap-4 border-t border-line pt-5 text-xs font-black uppercase tracking-[0.16em] text-muted md:flex-row md:items-center md:justify-between">
        <span className="flex items-center gap-2">
          <MousePointer2 className="size-4 text-accent" />
          Scroll, drag your eye, or use arrow keys to morph work
        </span>
        <span>Virtual project reel · {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
