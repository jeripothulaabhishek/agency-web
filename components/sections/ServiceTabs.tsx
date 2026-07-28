"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/data";
import { ShaderBackground } from "@/components/ShaderBackground";
import { cn } from "@/lib/utils";

export function ServiceTabs() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((service) => service.slug === activeSlug) ?? services[0];

  return (
    <div className="relative overflow-hidden rounded-[2rem] p-3 shadow-neo hairline">
      <ShaderBackground color={active.tint} intensity={0.12} className="rounded-[2rem]" />
      <div className="relative rounded-[1.7rem] bg-white/72 p-4 backdrop-blur-2xl md:p-7">
        <div className="flex flex-col gap-2 rounded-[1.4rem] bg-white/80 p-2 hairline md:flex-row">
          {services.map((service) => (
            <button
              key={service.slug}
              type="button"
              className={cn(
                "relative flex-1 rounded-[1.1rem] px-5 py-4 text-left text-sm font-black transition-colors",
                active.slug === service.slug ? "text-white" : "text-muted hover:text-ink"
              )}
              onClick={() => setActiveSlug(service.slug)}
            >
              {active.slug === service.slug ? (
                <motion.span layoutId="service-pill" className="absolute inset-0 rounded-[1.1rem] bg-accent" />
              ) : null}
              <span className="relative">{service.shortTitle}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="grid gap-8 py-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-12"
          >
            <div>
              <div className="grid size-16 place-items-center rounded-[1.3rem] bg-accent-soft text-3xl text-accent shadow-inset">
                {active.icon}
              </div>
              <h2 className="mt-7 text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">{active.title}</h2>
              <p className="mt-5 text-base leading-8 text-muted md:text-lg">{active.description}</p>
              <div className="mt-7 grid gap-3">
                {active.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-graphite hairline">
                    <span className="grid size-7 place-items-center rounded-full bg-accent-soft text-accent">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[360px] rounded-[1.8rem] bg-white p-6 shadow-inset hairline">
              <motion.div
                className="absolute left-[12%] top-[18%] h-16 w-56 rounded-3xl bg-accent/10"
                animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute right-[14%] top-[34%] size-28 rounded-[2rem] bg-white shadow-neo-sm hairline"
                animate={{ rotate: [0, 7, 0], y: [0, 12, 0] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <svg className="absolute inset-x-8 bottom-10 h-56" viewBox="0 0 520 260" fill="none" aria-hidden="true">
                <motion.path
                  d="M28 188C96 88 176 70 268 136C344 190 412 154 492 70"
                  stroke="#2457FF"
                  strokeWidth="18"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <path d="M50 214H470" stroke="#0A0A0A" strokeOpacity=".08" strokeWidth="2" />
                <path d="M90 40V226M230 40V226M370 40V226" stroke="#0A0A0A" strokeOpacity=".06" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
