export type Service = {
  slug: "design" | "development" | "data";
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: string;
  benefits: string[];
  tint: string;
};

export type Project = {
  slug: string;
  name: string;
  category: "Enterprise" | "Ecommerce" | "Startup" | "UI-UX" | "Development";
  result: string;
  tags: string[];
  image: string;
  featuredImage: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: Array<{ label: string; value: string }>;
};

export type Post = {
  slug: string;
  title: string;
  category: "Design" | "Development" | "Strategy" | "Data";
  excerpt: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  body: Array<{ heading: string; paragraphs: string[] }>;
};

const svgToUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const projectImages = {
  fintech: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#0B132B'/>
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='#1C2541' stroke='#3A506B' stroke-width='2'/>
      <text x='100' y='115' fill='#6FFFE9' font-family='sans-serif' font-size='14' font-weight='800'>ORBIT FINTECH PORTAL</text>
      <rect x='100' y='150' width='660' height='540' rx='20' fill='#0B132B'/>
      <path d='M140 550 Q280 320 420 420 T700 240' stroke='#6FFFE9' stroke-width='5' fill='none'/>
      <rect x='780' y='150' width='330' height='540' rx='20' fill='#0B132B'/>
      <text x='810' y='195' fill='#5BC0BE' font-family='sans-serif' font-size='14' font-weight='700'>UPTIME SLA TARGET</text>
      <text x='810' y='240' fill='#FFFFFF' font-family='sans-serif' font-size='42' font-weight='900'>99.99%</text>
      <rect x='810' y='280' width='270' height='12' rx='6' fill='#1C2541'/>
      <rect x='810' y='280' width='260' height='12' rx='6' fill='#6FFFE9'/>
    </svg>
  `),
  dashboard: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <style>
        @keyframes pulseDot { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        .pulse { animation: pulseDot 3s ease-in-out infinite; }
      </style>
      <rect width='1200' height='800' fill='#0B0F19'/>
      <rect x='40' y='40' width='1120' height='720' rx='24' fill='#111827' stroke='#1F2937' stroke-width='2'/>
      <rect x='60' y='60' width='220' height='680' rx='16' fill='#1F2937' opacity='0.5'/>
      <circle cx='95' cy='95' r='14' fill='#2457FF' className='pulse'/>
      <rect x='120' y='88' width='90' height='14' rx='7' fill='#E5E7EB'/>
      <rect x='300' y='60' width='840' height='60' rx='16' fill='#1F2937' opacity='0.3'/>
      <rect x='300' y='140' width='380' height='200' rx='20' fill='#1F2937'/>
      <text x='330' y='180' fill='#9CA3AF' font-family='sans-serif' font-size='14' font-weight='600'>REALTIME METRICS</text>
      <text x='330' y='225' fill='#FFFFFF' font-family='sans-serif' font-size='36' font-weight='800'>$2,849,200</text>
      <path d='M330 290 Q400 240 480 270 T640 210' stroke='#2457FF' stroke-width='4' fill='none'/>
      <rect x='700' y='140' width='440' height='200' rx='20' fill='#1F2937'/>
      <text x='730' y='180' fill='#9CA3AF' font-family='sans-serif' font-size='14' font-weight='600'>WORKFLOW EFFICIENCY</text>
      <text x='730' y='225' fill='#34D399' font-family='sans-serif' font-size='36' font-weight='800'>+240% Speed</text>
      <rect x='300' y='360' width='840' height='360' rx='20' fill='#1F2937'/>
    </svg>
  `),
  saas: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <style>
        @keyframes glowRing { 0%, 100% { opacity: 0.12; transform: scale(1); } 50% { opacity: 0.24; transform: scale(1.05); } }
        .glow { transform-origin: center; animation: glowRing 4s ease-in-out infinite; }
      </style>
      <rect width='1200' height='800' fill='#0A0E17'/>
      <circle cx='600' cy='400' r='350' fill='#2457FF' className='glow'/>
      <rect x='80' y='60' width='1040' height='680' rx='28' fill='#131A29' stroke='#2457FF' stroke-width='2' stroke-opacity='0.4'/>
      <rect x='120' y='95' width='220' height='26' rx='13' fill='#2457FF' opacity='0.25'/>
      <text x='140' y='113' fill='#60A5FA' font-family='sans-serif' font-size='12' font-weight='800'>NEURO AI ENGINE v4.2</text>
      <rect x='120' y='150' width='960' height='120' rx='20' fill='#1E293B' stroke='#334155'/>
      <text x='150' y='195' fill='#94A3B8' font-family='sans-serif' font-size='16'>&gt; Generate multi-region infrastructure deployment with zero-downtime target...</text>
      <rect x='930' y='175' width='120' height='46' rx='12' fill='#2457FF'/>
      <text x='960' y='203' fill='#FFFFFF' font-family='sans-serif' font-size='14' font-weight='700'>EXECUTE</text>
      <rect x='120' y='295' width='600' height='410' rx='20' fill='#0F172A'/>
      <rect x='740' y='295' width='340' height='410' rx='20' fill='#1E293B'/>
      <text x='770' y='340' fill='#E2E8F0' font-family='sans-serif' font-size='16' font-weight='700'>ACCELERATION SCORE</text>
      <text x='770' y='400' fill='#34D399' font-family='sans-serif' font-size='48' font-weight='900'>99.94%</text>
    </svg>
  `),
  mobile: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#0F172A'/>
      <rect x='280' y='60' width='300' height='680' rx='44' fill='#1E293B' stroke='#334155' stroke-width='4'/>
      <rect x='300' y='80' width='260' height='640' rx='36' fill='#090D16'/>
      <circle cx='340' cy='160' r='20' fill='#2457FF'/>
      <text x='375' y='166' fill='#FFFFFF' font-family='sans-serif' font-size='16' font-weight='800'>Fjord Mobile</text>
      <rect x='620' y='100' width='300' height='640' rx='44' fill='#1E293B' stroke='#2457FF' stroke-width='4'/>
      <rect x='640' y='120' width='260' height='600' rx='36' fill='#0F172A'/>
      <text x='660' y='200' fill='#94A3B8' font-family='sans-serif' font-size='12' font-weight='700'>TOTAL BALANCE</text>
      <text x='660' y='240' fill='#FFFFFF' font-family='sans-serif' font-size='32' font-weight='900'>$84,120.00</text>
    </svg>
  `),
  engineering: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#18181B'/>
      <rect x='50' y='50' width='1100' height='700' rx='24' fill='#27272A' stroke='#3F3F46' stroke-width='2'/>
      <text x='90' y='105' fill='#FAFAFA' font-family='sans-serif' font-size='22' font-weight='800'>KINLAB DESIGN SYSTEM</text>
      <rect x='90' y='140' width='140' height='100' rx='16' fill='#2457FF'/>
      <rect x='250' y='140' width='140' height='100' rx='16' fill='#0A0A0A'/>
      <rect x='410' y='140' width='140' height='100' rx='16' fill='#3F3F46'/>
      <rect x='90' y='270' width='460' height='430' rx='20' fill='#18181B'/>
      <rect x='580' y='270' width='530' height='430' rx='20' fill='#18181B'/>
    </svg>
  `),
  platform: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#0B132B'/>
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='#1C2541' stroke='#3A506B' stroke-width='2'/>
      <text x='100' y='115' fill='#6FFFE9' font-family='sans-serif' font-size='14' font-weight='800'>ENTERPRISE BRAND PLATFORM</text>
      <rect x='100' y='150' width='980' height='540' rx='20' fill='#0B132B'/>
    </svg>
  `),
  product: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#F9FAFB'/>
      <rect x='60' y='50' width='1080' height='700' rx='28' fill='#FFFFFF' stroke='#E5E7EB' stroke-width='2'/>
      <rect x='100' y='85' width='140' height='20' rx='10' fill='#0A0A0A'/>
      <rect x='1000' y='75' width='100' height='40' rx='20' fill='#2457FF'/>
      <rect x='100' y='140' width='1000' height='240' rx='24' fill='#EEF3FF'/>
      <text x='140' y='210' fill='#2457FF' font-family='sans-serif' font-size='14' font-weight='800'>SIGNAL STOREFRONT</text>
      <text x='140' y='260' fill='#0A0A0A' font-family='sans-serif' font-size='42' font-weight='900'>High-Conversion Storyfront</text>
    </svg>
  `),
  analytics: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#0F172A'/>
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='#1E293B' stroke='#334155' stroke-width='2'/>
      <text x='100' y='115' fill='#38BDF8' font-family='sans-serif' font-size='14' font-weight='800'>REALTIME ANALYTICAL STREAM</text>
      <rect x='100' y='150' width='980' height='540' rx='20' fill='#0F172A'/>
    </svg>
  `),
  studio: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#0A0A0A'/>
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='#171717' stroke='#262626' stroke-width='2'/>
      <text x='100' y='115' fill='#2457FF' font-family='sans-serif' font-size='14' font-weight='800'>NEURO STUDIO PRACTICE</text>
    </svg>
  `),
  launch: svgToUri(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800' fill='none'>
      <rect width='1200' height='800' fill='#020617'/>
      <rect x='60' y='60' width='1080' height='680' rx='28' fill='#0F172A' stroke='#1E293B' stroke-width='2'/>
      <text x='100' y='115' fill='#38BDF8' font-family='sans-serif' font-size='14' font-weight='800'>STARTUP LAUNCH SYSTEM</text>
    </svg>
  `)
};

export type PricingTier = {
  name: "Starter" | "Growth" | "Enterprise";
  description: string;
  monthly: number;
  oneTime: number;
  highlighted?: boolean;
  features: string[];
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/resources", label: "Insights" },
  { href: "/contact", label: "Contact" }
];

export const clientLogos = [
  "NOVA-01",
  "VECTOR",
  "PULSE",
  "ATLAS",
  "KINLAB",
  "ORBIT",
  "FJORD",
  "MONO"
];

export const techLogos = [
  "Next.js",
  "TypeScript",
  "R3F",
  "Three.js",
  "GSAP",
  "Framer",
  "Tailwind",
  "Analytics",
  "CMS",
  "Cloud"
];

export const stats = [
  { label: "Projects shipped", value: 128, suffix: "+" },
  { label: "Years active", value: 9, suffix: "" },
  { label: "Avg rating", value: 4.9, suffix: "/5", decimals: 1 },
  { label: "Countries served", value: 18, suffix: "" }
];

export const services: Service[] = [
  {
    slug: "design",
    title: "Experience Design",
    shortTitle: "Design",
    summary: "Premium product strategy, brand systems, and UI that feels crisp before a line of code is written.",
    description:
      "We shape product narratives, visual systems, and interaction models that make complex ideas feel obvious. The result is a polished interface language your team can build on.",
    icon: "✦",
    benefits: ["Product UX systems", "Interactive prototypes", "Conversion-ready landing pages"],
    tint: "#2457FF"
  },
  {
    slug: "development",
    title: "Web Development",
    shortTitle: "Development",
    summary: "Next.js builds, CMS integrations, dashboards, and conversion surfaces with performance baked in.",
    description:
      "We turn ambitious design into production-grade frontends: fast, accessible, maintainable, and animated with restraint.",
    icon: "◇",
    benefits: ["App Router architecture", "Design-system components", "Performance optimization"],
    tint: "#2457FF"
  },
  {
    slug: "data",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    summary: "Measurement plans, clean dashboards, and insight loops that help teams see what to improve next.",
    description:
      "We instrument the customer journey, translate noisy events into useful signals, and package the findings into dashboards people actually use.",
    icon: "◌",
    benefits: ["Event taxonomy", "Funnel dashboards", "Experiment reporting"],
    tint: "#2457FF"
  }
];

export const processSteps = [
  {
    title: "Discover",
    text: "We map the business context, audience pressure, and the exact user moments that need to feel effortless."
  },
  {
    title: "Design",
    text: "We create a high-fidelity experience system with motion notes, responsive behavior, and content hierarchy."
  },
  {
    title: "Build",
    text: "We assemble the production app with typed components, accessible patterns, and performance guardrails."
  },
  {
    title: "Launch",
    text: "We run QA passes, polish edge states, and ship with analytics events ready for decision-making."
  },
  {
    title: "Grow",
    text: "We keep improving with experiments, user insights, and a roadmap your team can trust."
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Focused launch pages and small product moments.",
    monthly: 4800,
    oneTime: 14000,
    features: ["Strategy sprint", "3 core sections", "Responsive build", "Basic analytics", "Launch QA"]
  },
  {
    name: "Growth",
    description: "A polished web system for teams ready to scale.",
    monthly: 9200,
    oneTime: 28000,
    highlighted: true,
    features: [
      "Product narrative",
      "Design system starter",
      "6-8 custom sections",
      "Animation direction",
      "Advanced analytics",
      "CMS-ready patterns"
    ]
  },
  {
    name: "Enterprise",
    description: "High-touch product, platform, and experimentation work.",
    monthly: 18000,
    oneTime: 64000,
    features: [
      "Multi-team workshops",
      "Component library",
      "Complex integrations",
      "Experiment roadmap",
      "Accessibility audit",
      "Priority support"
    ]
  }
];

export const comparisonRows = [
  ["Strategy workshop", "1 session", "2 sessions", "Custom"],
  ["Custom sections", "3", "8", "Unlimited scope"],
  ["Design system", "Starter tokens", "Components + states", "Full library"],
  ["Analytics", "Basic", "Funnels + events", "Warehouse-ready"],
  ["Support", "14 days", "45 days", "Dedicated channel"]
];

export const projects: Project[] = [
  {
    slug: "signal-commerce-refresh",
    name: "Signal Commerce Refresh",
    category: "Ecommerce",
    result: "+38% product discovery",
    tags: ["Ecommerce", "UI-UX", "Development"],
    image: projectImages.product,
    featuredImage: projectImages.product,
    description:
      "A calm, high-conversion storefront system built around speed, editorial product storytelling, and shopper confidence.",
    challenge:
      "The existing storefront was visually busy and buried key buying signals below competing interface elements.",
    solution:
      "We rebuilt the hierarchy, introduced guided collection pages, and created a modular component system for launches.",
    metrics: [
      { label: "Discovery lift", value: "38%" },
      { label: "Checkout speed", value: "1.7s" },
      { label: "Reusable modules", value: "24" }
    ]
  },
  {
    slug: "atlas-enterprise-dashboard",
    name: "Atlas Enterprise Dashboard",
    category: "Enterprise",
    result: "2.4× faster workflows",
    tags: ["Enterprise", "Data", "UI-UX"],
    image: projectImages.dashboard,
    featuredImage: projectImages.analytics,
    description:
      "A reporting interface that reduced decision friction by turning nested operational data into guided summaries.",
    challenge:
      "Teams had the data they needed, but the dashboard required too many context switches to reach an answer.",
    solution:
      "We designed progressive disclosure, prioritized exception states, and built reusable visualization cards.",
    metrics: [
      { label: "Workflow speed", value: "2.4×" },
      { label: "Dashboard views", value: "12" },
      { label: "Training time", value: "-31%" }
    ]
  },
  {
    slug: "nova-startup-launch",
    name: "Nova Startup Launch",
    category: "Startup",
    result: "12-week launch cycle",
    tags: ["Startup", "Strategy", "Development"],
    image: projectImages.launch,
    featuredImage: projectImages.saas,
    description:
      "A venture-ready launch system with product storytelling, lead capture, and investor-friendly proof points.",
    challenge:
      "The team needed to explain a technical product to buyers, candidates, and investors without diluting the message.",
    solution:
      "We built a narrative architecture, visual language, and high-performance Next.js site with measurable funnels.",
    metrics: [
      { label: "Launch cycle", value: "12wk" },
      { label: "Lead quality", value: "+44%" },
      { label: "Pages shipped", value: "16" }
    ]
  },
  {
    slug: "kinlab-product-system",
    name: "Kinlab Product System",
    category: "UI-UX",
    result: "54 components unified",
    tags: ["UI-UX", "Design System"],
    image: projectImages.saas,
    featuredImage: projectImages.engineering,
    description:
      "A design system consolidation that gave a growing team one consistent visual and interaction language.",
    challenge:
      "Product squads were duplicating patterns and shipping inconsistent states across core user flows.",
    solution:
      "We audited the interface, consolidated tokens, and documented accessible component patterns with usage notes.",
    metrics: [
      { label: "Components", value: "54" },
      { label: "Duplicate states", value: "-62%" },
      { label: "Adoption", value: "91%" }
    ]
  },
  {
    slug: "orbit-analytics-portal",
    name: "Orbit Analytics Portal",
    category: "Development",
    result: "99.9% uptime target",
    tags: ["Development", "Data"],
    image: projectImages.fintech,
    featuredImage: projectImages.platform,
    description:
      "A fast analytics portal with role-aware views, data quality states, and guided exports.",
    challenge:
      "Customers needed trustworthy reporting without waiting on manual exports from the internal team.",
    solution:
      "We built a typed frontend, resilient loading states, and clear data freshness indicators throughout.",
    metrics: [
      { label: "Uptime target", value: "99.9%" },
      { label: "Manual exports", value: "-47%" },
      { label: "Core views", value: "9" }
    ]
  },
  {
    slug: "fjord-brand-platform",
    name: "Fjord Brand Platform",
    category: "Enterprise",
    result: "3 markets activated",
    tags: ["Enterprise", "Design", "Development"],
    image: projectImages.platform,
    featuredImage: projectImages.mobile,
    description:
      "A flexible brand platform that supports regional storytelling without fragmenting the core identity.",
    challenge:
      "Regional teams needed speed, but the central brand team needed consistency and quality control.",
    solution:
      "We created modular page recipes, tokenized brand rules, and editorial components for market-specific pages.",
    metrics: [
      { label: "Markets", value: "3" },
      { label: "Template reuse", value: "78%" },
      { label: "Review cycles", value: "-28%" }
    ]
  }
];

export const testimonials = [
  {
    quote:
      "The work felt calm, intentional, and unusually complete. Every interaction had a clear purpose, and the engineering match to design was flawless without the usual compromises.",
    role: "VP of Product, Signal Commerce"
  },
  {
    quote:
      "Neuro Agency translated a complex AI product narrative into a high-converting web platform our executive team can proudly present to investors and enterprise buyers.",
    role: "Co-Founder & CEO, Atlas Enterprise Systems"
  },
  {
    quote:
      "The systemic thinking was extraordinary. We didn't just get static pages; we received a reusable design system and codebase that our internal team builds on every week.",
    role: "Director of Growth, Nova AI Technologies"
  }
];

export const teamMembers = [
  {
    name: "Marcus Vance",
    role: "Managing Director & Strategy Lead",
    image: svgToUri(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' fill='none'>
        <rect width='400' height='400' fill='#111827'/>
        <circle cx='200' cy='160' r='60' fill='#2457FF'/>
        <path d='M100 340 C100 240, 300 240, 300 340 Z' fill='#374151'/>
      </svg>
    `)
  },
  {
    name: "Elena Rostova",
    role: "Principal Product & Systems Designer",
    image: svgToUri(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' fill='none'>
        <rect width='400' height='400' fill='#0F172A'/>
        <circle cx='200' cy='160' r='60' fill='#60A5FA'/>
        <path d='M100 340 C100 240, 300 240, 300 340 Z' fill='#1E293B'/>
      </svg>
    `)
  },
  {
    name: "David Chen",
    role: "Head of Web Engineering",
    image: svgToUri(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' fill='none'>
        <rect width='400' height='400' fill='#18181B'/>
        <circle cx='200' cy='160' r='60' fill='#34D399'/>
        <path d='M100 340 C100 240, 300 240, 300 340 Z' fill='#27272A'/>
      </svg>
    `)
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Product Analytics",
    image: svgToUri(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' fill='none'>
        <rect width='400' height='400' fill='#0B132B'/>
        <circle cx='200' cy='160' r='60' fill='#6FFFE9'/>
        <path d='M100 340 C100 240, 300 240, 300 340 Z' fill='#1C2541'/>
      </svg>
    `)
  }
];

export const values = [
  "Clarity before spectacle",
  "Motion with a job",
  "Systems over one-offs",
  "Sharp craft, soft handoffs",
  "Accessible by default",
  "Measure what matters"
];

export const milestones = [
  { year: "2017", title: "Studio foundation", text: "A small remote-first studio begins with design systems and launch pages." },
  { year: "2019", title: "Product depth", text: "The practice expands into dashboards, customer portals, and complex SaaS flows." },
  { year: "2022", title: "Measurement layer", text: "Analytics and experimentation become part of the default delivery model." },
  { year: "2026", title: "Dimensional web", text: "The studio leans into subtle 3D, shader systems, and refined motion." }
];

export const posts: Post[] = [
  {
    slug: "designing-motion-that-earns-its-place",
    title: "Designing Motion That Earns Its Place",
    category: "Design",
    excerpt:
      "How to make animation feel premium by tying every movement to comprehension, feedback, or pacing.",
    readTime: "5 min",
    author: "Neuro Editorial",
    date: "2026-05-18",
    image: projectImages.engineering,
    body: [
      {
        heading: "Motion is a hierarchy tool",
        paragraphs: [
          "Premium motion is rarely about doing more. It is about making attention move through an interface with less friction.",
          "A useful motion system names where movement belongs: transitions, feedback, reveal, continuity, and delight."
        ]
      },
      {
        heading: "Set strict ranges",
        paragraphs: [
          "Constrain distance, easing, and duration so each animation feels like part of the same physical world.",
          "When a team has ranges instead of vibes, the product keeps its polish as new surfaces are added."
        ]
      }
    ]
  },
  {
    slug: "what-a-high-performing-launch-page-needs",
    title: "What a High-Performing Launch Page Needs",
    category: "Strategy",
    excerpt:
      "A practical framework for balancing narrative, proof, friction, and speed on a launch surface.",
    readTime: "7 min",
    author: "Neuro Editorial",
    date: "2026-04-09",
    image: projectImages.launch,
    body: [
      {
        heading: "Lead with the job",
        paragraphs: [
          "The first screen should tell the visitor what changed for them, not only what the product is.",
          "Good launch pages reduce uncertainty quickly: category, audience, result, and next step."
        ]
      },
      {
        heading: "Proof should arrive early",
        paragraphs: [
          "Testimonials, metrics, and product evidence work best when they support the promise immediately around them.",
          "A thin proof layer across the page often outperforms one oversized proof section near the bottom."
        ]
      }
    ]
  },
  {
    slug: "building-frontends-that-stay-fast",
    title: "Building Frontends That Stay Fast",
    category: "Development",
    excerpt:
      "Performance choices that survive beyond the first launch: component boundaries, image strategy, and animation budgets.",
    readTime: "6 min",
    author: "Neuro Editorial",
    date: "2026-03-22",
    image: projectImages.product,
    body: [
      {
        heading: "Performance is a system habit",
        paragraphs: [
          "A fast site is not only a Lighthouse score. It is the result of repeatable defaults for images, scripts, rendering, and motion.",
          "Teams move faster when the component library makes the performant path the obvious path."
        ]
      },
      {
        heading: "Animation needs a budget",
        paragraphs: [
          "Transform and opacity are the workhorses. Heavy visual effects should be isolated, paused offscreen, and disabled for reduced motion.",
          "The more expressive the hero gets, the calmer the rest of the page should become."
        ]
      }
    ]
  },
  {
    slug: "analytics-that-designers-can-use",
    title: "Analytics That Designers Can Use",
    category: "Data",
    excerpt:
      "A simple event taxonomy for turning product behavior into decisions instead of dashboard theater.",
    readTime: "4 min",
    author: "Neuro Editorial",
    date: "2026-02-16",
    image: projectImages.analytics,
    body: [
      {
        heading: "Name the decision first",
        paragraphs: [
          "If an event does not help the team decide something, it is probably telemetry noise.",
          "Start from the product questions, then instrument the smallest set of signals that answer them."
        ]
      },
      {
        heading: "Make quality visible",
        paragraphs: [
          "Dashboards should expose freshness, sampling, and known gaps so teams trust the numbers they are using.",
          "Useful analytics has as much to do with confidence as it does with charts."
        ]
      }
    ]
  }
];

export const faqs = {
  general: [
    {
      question: "Do you work with existing brand systems?",
      answer:
        "Yes. We can extend what already exists, tidy the weak spots, and define new interaction rules without forcing a full rebrand."
    },
    {
      question: "Can you collaborate with an internal engineering team?",
      answer:
        "Absolutely. We often design and prototype the system, then pair with internal teams on production patterns and handoff documentation."
    },
    {
      question: "How do you keep the motion accessible?",
      answer:
        "We keep motion subtle, respect reduced-motion preferences, and make sure critical meaning is never communicated by animation alone."
    }
  ],
  pricing: [
    {
      question: "Can packages be customized?",
      answer:
        "Yes. The tiers are useful starting points, but scope is finalized after we understand the goals, integrations, and timeline."
    },
    {
      question: "Do monthly retainers include development?",
      answer:
        "They can. Retainers usually combine design, frontend implementation, analytics, experiments, and ongoing optimization."
    },
    {
      question: "What happens after launch?",
      answer:
        "We offer a support window for fixes and can move into an optimization sprint or monthly growth partnership."
    }
  ],
  contact: [
    {
      question: "How quickly do you respond?",
      answer: "Most project inquiries receive a thoughtful response within one business day."
    },
    {
      question: "What should I include in the message?",
      answer:
        "A short overview, rough timeline, budget range, and any existing product or brand links are plenty to start."
    }
  ]
};
