import type { Variants } from "framer-motion";

export const motionDurations = {
  fast: 0.18,
  medium: 0.36,
  slow: 0.72,
  page: 0.9,
  hover: 0.24
} as const;

export const eases = {
  premium: [0.22, 1, 0.36, 1],
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1]
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: motionDurations.slow, ease: eases.premium } }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: motionDurations.slow, ease: eases.premium } }
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: motionDurations.slow, ease: eases.premium } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: motionDurations.slow, ease: eases.premium } }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

export const staggerChildren = staggerContainer;
export const staggerChild: Variants = fadeUp;

export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: eases.premium }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: motionDurations.medium } }
};

export const scrollFade: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: motionDurations.slow, ease: eases.premium } }
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.6, ease: eases.premium } }
};

export const magneticButton = {
  rest: { scale: 1 },
  hover: { scale: 1.035, y: -2, transition: { duration: motionDurations.hover, ease: eases.out } },
  tap: { scale: 0.985 }
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 20px 60px rgba(16, 24, 40, 0.08)" },
  hover: {
    y: -8,
    boxShadow: "0 32px 90px rgba(16, 24, 40, 0.14)",
    transition: { duration: motionDurations.hover, ease: eases.out }
  }
};
