# Neuro Agency

Premium white-theme agency website built from the provided master prompt.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Three.js + React Three Fiber shader backgrounds
- GSAP ScrollTrigger parallax helpers
- Framer Motion UI micro-interactions

## Routes

- `/`
- `/about`
- `/services`
- `/pricing`
- `/work`
- `/work/[slug]`
- `/resources`
- `/resources/[slug]`
- `/contact`

## Run

```bash
npm install
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```

Note: `npm audit` currently reports high-severity advisories against the Next.js 14 package line. The automatic fix upgrades to Next.js 16, so this project stays on the requested Next.js 14 stack unless you decide to relax that requirement.
