"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest("a, button, [role='button'], input, textarea, select, [tabindex='0']");
      setIsPointer(interactive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!mounted || reducedMotion || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Ambient Spotlight Layer following mouse */}
      <motion.div
        className="absolute size-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[90px]"
        style={{ left: cursorX, top: cursorY }}
      />
      {/* Inner Precision Cursor Ring */}
      <motion.div
        className="absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 bg-white/30 backdrop-blur-md shadow-glow transition-transform duration-200"
        style={{
          left: cursorX,
          top: cursorY,
          scale: isPointer ? 1.6 : 1
        }}
      />
    </div>
  );
}
