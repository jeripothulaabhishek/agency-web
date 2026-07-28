"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <svg className="pointer-events-none absolute left-8 right-8 top-16 z-0 hidden h-6 w-[calc(100%-4rem)] md:block" viewBox="0 0 1000 40" fill="none">
        <motion.path
          d="M10 20H990"
          stroke="#2457FF"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
      <div className="scrollbar-none relative z-10 flex snap-x gap-4 overflow-x-auto pb-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="min-w-[78%] snap-center rounded-[2rem] bg-white p-6 shadow-neo-sm hairline sm:min-w-[48%] lg:min-w-[270px]"
          >
            <div className="grid size-14 place-items-center rounded-full bg-accent text-lg font-black text-white shadow-glow">
              {index + 1}
            </div>
            <h3 className="mt-8 text-3xl font-black tracking-[-0.06em]">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
