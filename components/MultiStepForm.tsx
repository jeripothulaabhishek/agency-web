"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projectTypes = [
  { label: "Brand Site", icon: "✦" },
  { label: "Product UI", icon: "◇" },
  { label: "Dashboard", icon: "◌" }
];

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState(projectTypes[0].label);
  const [budget, setBudget] = useState(40);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] bg-white p-8 shadow-neo hairline text-center py-16">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-accent-soft text-accent text-3xl font-black">
          ✓
        </div>
        <h2 className="mt-6 text-3xl font-black tracking-[-0.05em] text-ink">Inquiry Received</h2>
        <p className="mt-3 max-w-md mx-auto text-base leading-7 text-muted">
          Thank you for reaching out regarding your {type.toLowerCase()} project (${budget}k budget). Our team will review your notes and respond within 1 business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
          }}
          className="mt-8 rounded-full bg-mist px-6 py-3 text-sm font-black text-ink hover:bg-white hairline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 shadow-neo hairline md:p-7">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.14em] text-muted">
          <span>Project fit</span>
          <span>Step {step + 1}/3</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-mist">
          <motion.div
            className="h-2 rounded-full bg-accent"
            animate={{ width: `${((step + 1) / 3) * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 ? (
          <motion.div key="type" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <h2 className="text-2xl font-black tracking-[-0.05em]">What are we building?</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {projectTypes.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setType(item.label)}
                  className={cn(
                    "rounded-3xl p-4 text-left transition-all hairline",
                    type === item.label ? "bg-accent text-white shadow-glow" : "bg-mist text-ink hover:bg-white"
                  )}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="mt-4 block text-sm font-black">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}

        {step === 1 ? (
          <motion.div key="budget" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <h2 className="text-2xl font-black tracking-[-0.05em]">Rough budget range</h2>
            <p className="mt-3 text-sm leading-7 text-muted">This helps us recommend the right engagement shape.</p>
            <label className="mt-7 block text-sm font-black text-ink" htmlFor="budget">
              Around ${budget}k
            </label>
            <input
              id="budget"
              type="range"
              min="12"
              max="120"
              value={budget}
              onChange={(event) => setBudget(Number(event.target.value))}
              className="mt-4 w-full accent-accent"
            />
            <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-[0.12em] text-muted">
              <span>$12k</span>
              <span>$120k+</span>
            </div>
          </motion.div>
        ) : null}

        {step === 2 ? (
          <motion.div key="details" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <h2 className="text-2xl font-black tracking-[-0.05em]">Tell us the shape of it</h2>
            <div className="mt-5 grid gap-3">
              <input required className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold outline-none hairline focus:ring-2 focus:ring-accent" placeholder="Name" aria-label="Name" />
              <input
                required
                className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold outline-none hairline focus:ring-2 focus:ring-accent"
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
              <textarea
                required
                className="min-h-36 rounded-2xl bg-mist px-4 py-3 text-sm font-semibold outline-none hairline focus:ring-2 focus:ring-accent"
                placeholder={`A little context about your ${type.toLowerCase()} project...`}
                aria-label="Project details"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          className="rounded-full bg-mist px-5 py-3 text-sm font-black text-ink disabled:cursor-not-allowed disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(value - 1, 0))}
        >
          Back
        </button>
        {step < 2 ? (
          <button type="button" className="rounded-full bg-accent px-6 py-3 text-sm font-black text-white shadow-glow" onClick={() => setStep(step + 1)}>
            Continue
          </button>
        ) : (
          <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-black text-white shadow-glow">
            Send inquiry
          </button>
        )}
      </div>
    </form>
  );
}
