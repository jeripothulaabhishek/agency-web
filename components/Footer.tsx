"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-line bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] md:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="grid size-10 place-items-center rounded-full bg-ink text-sm font-black text-white">
              N
            </span>
            <span className="text-lg font-black tracking-[-0.05em]">Neuro Agency</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            A white-theme, design-led development studio concept built with dimensional motion, soft WebGL, and restrained polish.
          </p>
          {subscribed ? (
            <div className="mt-6 flex max-w-sm items-center gap-2 rounded-full bg-accent-soft p-3 text-xs font-black text-accent hairline">
              ✓ Subscribed! You will receive our monthly design notes.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-sm gap-2 rounded-full bg-mist p-1 hairline" aria-label="Newsletter signup">
              <input
                required
                className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm font-semibold outline-none placeholder:text-muted focus:ring-2 focus:ring-accent"
                type="email"
                placeholder="Email for studio notes"
                aria-label="Email address"
              />
              <button className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent" type="submit">
                Join
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-ink">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-muted">
            {navItems.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.14em] text-ink">Social</h2>
          <ul className="mt-5 space-y-3 text-sm font-semibold text-muted">
            {["LinkedIn", "Dribbble", "X / Twitter", "GitHub"].map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors hover:text-ink">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] bg-mist p-6 hairline">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">Availability</p>
          <p className="mt-4 text-2xl font-black tracking-[-0.05em]">Two project slots open</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Ideal for launches, product refreshes, and design-system-backed web builds.
          </p>
        </div>
      </div>
      <div className="section-shell flex flex-col gap-3 border-t border-line py-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between">
        <p>© 2026 Neuro Agency. Placeholder studio concept.</p>
        <p>White mode only · Electric blue accent</p>
      </div>
    </footer>
  );
}
