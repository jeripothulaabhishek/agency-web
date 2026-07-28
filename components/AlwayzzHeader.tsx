"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

export function AlwayzzHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { label: "Projects", href: "/work" },
    { label: "Plans", href: "/pricing" },
    { label: "Team", href: "/about" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Get in Touch", href: "/contact" }
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 py-[19px] sm:px-[36px]">
        <div className="flex w-full max-w-[1200px] items-center justify-between">
          <Link href="/" className="flex items-baseline gap-0.5 group">
            <span className="serif text-[30px] font-semibold italic tracking-[-0.08em] text-[#0a0a0a]">
              Alwayzz
            </span>
            <sup className="font-sans text-[14px] font-semibold text-[#0a0a0a] select-none">®</sup>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="flex items-center gap-1.5 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-[14px] font-medium text-white shadow-sm transition-transform active:scale-95"
          >
            <span>Menu</span>
            {isOpen ? <ChevronUp className="size-[16px]" /> : <ChevronDown className="size-[16px]" />}
          </button>
        </div>
      </header>

      {/* Full-screen drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] flex flex-col justify-between bg-white px-6 pb-10 pt-32 sm:px-12"
          >
            <nav aria-label="Drawer menu" className="my-auto flex flex-col items-center gap-6 text-center">
              {menuLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-[32px] font-medium tracking-[-0.04em] text-[#0a0a0a] transition-opacity hover:opacity-60 sm:text-[48px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <footer className="text-center font-sans text-xs font-medium text-[#6b6b6b]">
              © {new Date().getFullYear()} Alwayzz Inc. All rights reserved.
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
