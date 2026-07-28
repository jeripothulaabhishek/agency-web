"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PricingTier } from "@/lib/data";
import { formatCurrency, cn } from "@/lib/utils";
import { TiltCard } from "@/components/TiltCard";

export function PricingCard({ tier, billing }: { tier: PricingTier; billing: "monthly" | "one-time" }) {
  const price = billing === "monthly" ? tier.monthly : tier.oneTime;

  return (
    <TiltCard
      maxTilt={5}
      className={cn(
        "relative h-full rounded-[2rem] p-1",
        tier.highlighted ? "bg-gradient-to-br from-accent via-accent/70 to-accent/20 shadow-glow" : "bg-transparent"
      )}
    >
      <article className={cn("relative h-full rounded-[1.8rem] bg-white p-6 shadow-neo hairline", tier.highlighted && "md:-translate-y-4")}>
        {tier.highlighted ? (
          <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
            Most Popular
          </div>
        ) : null}
        <h3 className="text-2xl font-black tracking-[-0.05em]">{tier.name}</h3>
        <p className="mt-3 min-h-14 text-sm leading-7 text-muted">{tier.description}</p>
        <div className="mt-8 flex items-end gap-2">
          <motion.span
            key={`${tier.name}-${billing}-${price}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black tracking-[-0.08em]"
          >
            {formatCurrency(price)}
          </motion.span>
          <span className="pb-2 text-sm font-bold text-muted">{billing === "monthly" ? "/mo" : "once"}</span>
        </div>
        <Link
          href="/contact"
          className={cn(
            "mt-7 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-black",
            tier.highlighted ? "bg-accent text-white shadow-glow" : "bg-ink text-white"
          )}
        >
          Choose {tier.name}
        </Link>
        <ul className="mt-7 space-y-3">
          {tier.features.map((feature, index) => (
            <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-graphite">
              <svg className="mt-0.5 size-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <motion.path
                  d="M5 12.5l4.2 4.2L19.5 6.8"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.06 }}
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </article>
    </TiltCard>
  );
}
