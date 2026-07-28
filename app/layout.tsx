import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Neuro Agency — Design-Led Product & Engineering Studio",
    template: "%s — Neuro Agency"
  },
  description:
    "Design-led digital product studio crafting category-defining web applications, enterprise dashboards, AI interfaces, and brand systems.",
  metadataBase: new URL("https://neuro-agency.local"),
  keywords: ["Design Studio", "Next.js 14", "Product Strategy", "UI/UX Design", "WebGL", "TypeScript"],
  openGraph: {
    title: "Neuro Agency — Design-Led Product Studio",
    description: "Category-defining digital products, enterprise interfaces, and web applications.",
    url: "https://neuro-agency.local",
    siteName: "Neuro Agency",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuro Agency — Design-Led Product Studio",
    description: "Category-defining digital products, enterprise interfaces, and web applications."
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neuro Agency",
  url: "https://neuro-agency.local",
  logo: "https://neuro-agency.local/logo.png",
  description: "Design-led digital product studio crafting category-defining web applications, enterprise dashboards, AI interfaces, and brand systems.",
  sameAs: [
    "https://linkedin.com/company/neuro-agency",
    "https://twitter.com/neuro-agency",
    "https://github.com/neuro-agency"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400;1,8..60,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-ink bg-white selection:bg-accent/15 selection:text-ink">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
