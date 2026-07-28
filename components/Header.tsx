"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          "section-shell flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-5",
          isScrolled || isOpen ? "liquid-glass shadow-editorial" : "bg-white/40 backdrop-blur-md border border-white/60"
        )}
      >
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Neuro Agency home">
          <span className="grid size-9 place-items-center rounded-full bg-ink text-xs font-black text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            N
          </span>
          <span className="text-sm font-black tracking-[-0.04em] text-ink">Neuro Agency</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full bg-white/70 p-1 hairline md:flex backdrop-blur-xl">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent-soft border border-accent/20"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="shine-sweep hidden rounded-full bg-accent px-5 py-2.5 text-sm font-extrabold text-white shadow-glow transition-all hover:bg-accent-hover hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-accent md:inline-flex"
          >
            Start a Project
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-white text-ink hairline md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="relative h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition-transform",
                  isOpen && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-ink transition-opacity",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-ink transition-transform",
                  isOpen && "-translate-y-1.5 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile navigation"
            className="section-shell mt-3 overflow-hidden rounded-[1.7rem] bg-white p-3 shadow-neo md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-extrabold tracking-[-0.03em] text-ink hover:bg-accent-soft"
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
