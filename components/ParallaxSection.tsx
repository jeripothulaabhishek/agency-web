"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  pin?: boolean;
};

export function ParallaxSection({ children, className, intensity = 12, pin = false, ...props }: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: intensity, opacity: 0.88, rotateX: 2 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "bottom 55%",
            scrub: 0.8,
            pin,
            pinSpacing: pin
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [intensity, pin, reducedMotion]);

  return (
    <section ref={ref} className={cn("relative transform-gpu", className)} {...props}>
      {children}
    </section>
  );
}
