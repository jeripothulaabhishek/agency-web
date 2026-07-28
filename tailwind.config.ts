import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        graphite: "#2F343D",
        muted: "#4B5565",
        whisper: "#F9FAFB",
        mist: "#F5F5F7",
        paper: "#FAFAFA",
        line: "rgba(10, 10, 10, 0.09)",
        accent: {
          DEFAULT: "#2457FF",
          hover: "#1A46E3",
          soft: "#EEF3FF",
          glass: "rgba(36, 87, 255, 0.11)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: [
          "var(--font-body)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem"
      },
      boxShadow: {
        neo: "18px 18px 44px rgba(16, 24, 40, 0.10), -18px -18px 44px rgba(255, 255, 255, 0.95)",
        "neo-sm": "10px 10px 24px rgba(16, 24, 40, 0.08), -10px -10px 24px rgba(255, 255, 255, 0.95)",
        inset: "inset 9px 9px 18px rgba(16, 24, 40, 0.06), inset -9px -9px 18px rgba(255, 255, 255, 0.95)",
        glow: "0 22px 70px rgba(36, 87, 255, 0.20)",
        editorial: "0 40px 120px rgba(10, 10, 10, 0.16)"
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" }
        },
        marqueeReverse: {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        chevron: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.55" },
          "50%": { transform: "translateY(7px)", opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marqueeReverse 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        chevron: "chevron 1.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
