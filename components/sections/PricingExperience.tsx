"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Accordion } from "@/components/Accordion";
import { PricingCard } from "@/components/PricingCard";
import { comparisonRows, faqs, pricingTiers } from "@/lib/data";

export function PricingExperience() {
  const [billing, setBilling] = useState<"monthly" | "one-time">("monthly");
  const [compare, setCompare] = useState(false);

  return (
    <>
      <section className="section-shell pb-10 pt-32 md:pb-16 md:pt-40">
        <p className="eyebrow">Pricing</p>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="display-heading max-w-4xl text-[clamp(4rem,9vw,7.8rem)] font-black">Transparent Pricing</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              Pick a direction, then we will shape scope around the outcomes, timeline, and complexity.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-white p-1 shadow-neo-sm hairline">
            {(["monthly", "one-time"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={`relative rounded-full px-5 py-3 text-sm font-black capitalize ${billing === item ? "text-white" : "text-muted"}`}
                onClick={() => setBilling(item)}
              >
                {billing === item ? <motion.span layoutId="billing" className="absolute inset-0 rounded-full bg-accent" /> : null}
                <span className="relative">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-5 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} billing={billing} />
        ))}
      </section>

      <section className="section-shell py-14">
        <button
          type="button"
          className="w-full rounded-full bg-ink px-6 py-4 text-sm font-black text-white"
          onClick={() => setCompare((value) => !value)}
          aria-expanded={compare}
        >
          {compare ? "Hide feature comparison" : "Compare all features"}
        </button>
        <AnimatePresence>
          {compare ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-5 overflow-x-auto rounded-[2rem] bg-white shadow-neo-sm hairline">
                <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="sticky left-0 bg-white p-5 font-black">Feature</th>
                      <th className="p-5 font-black">Starter</th>
                      <th className="p-5 font-black">Growth</th>
                      <th className="p-5 font-black">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-b border-line last:border-b-0">
                        {row.map((cell, index) => (
                          <td key={cell} className={`${index === 0 ? "sticky left-0 bg-white font-black text-ink" : "text-muted"} p-5`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>

      <section className="section-shell grid gap-8 py-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Pricing FAQ</p>
          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">Useful answers before the call.</h2>
        </div>
        <Accordion items={faqs.pricing} />
      </section>
    </>
  );
}
