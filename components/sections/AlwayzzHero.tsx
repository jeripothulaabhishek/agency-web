"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const bgImageUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260626_041422_4a459e05-abce-4150-9fb7-4ededc423cd1.png&w=1280&q=85";

const avatarUrl = "https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png";

const tickerItems = ["Brand Identity", "App Development", "Visual Design", "Creative Video", "Iconography"];

const trustedLogos = [
  { name: "Airbnb", style: { fontFamily: "cursive, serif", fontWeight: 700 } },
  { name: "Shopify", style: { fontFamily: "system-ui, sans-serif", fontWeight: 800 } },
  { name: "Notion", style: { fontFamily: "Georgia, serif", fontWeight: 500 } },
  { name: "Linear", style: { fontFamily: "Inter, sans-serif", fontWeight: 600 } },
  { name: "Webflow", style: { fontFamily: "Inter, sans-serif", fontWeight: 700 } },
  { name: "Figma", style: { fontFamily: "system-ui, sans-serif", fontWeight: 600 } },
  { name: "Slack", style: { fontFamily: "Georgia, serif", fontWeight: 700 } },
  { name: "Stripe", style: { fontFamily: "system-ui, sans-serif", fontWeight: 800 } },
  { name: "Vercel", style: { fontFamily: "Inter, sans-serif", fontWeight: 600 } },
  { name: "Framer", style: { fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600 } }
];

export function AlwayzzHero() {
  const lineIndices = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);

  return (
    <div className="relative w-full overflow-hidden bg-white text-[#0a0a0a]">
      {/* Hero Section Container */}
      <section className="relative isolate flex min-h-[760px] md:min-h-[850px] w-full flex-col items-center justify-center px-6 py-[120px] pb-[96px] md:px-[36px] md:py-[160px]">
        {/* Background Image Layer */}
        <div
          className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat transition-transform duration-700 max-[810px]:rotate-90 max-[810px]:scale-125"
          style={{ backgroundImage: `url("${bgImageUrl}")` }}
          aria-hidden="true"
        />

        {/* Decorative Curved Lines (Desktop: Left/Right 20 lines; Mobile: Top Horizontal 20 lines) */}
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          {/* Left Side Lines (Desktop <810px hidden) */}
          <div className="hidden min-[810px]:block absolute left-0 top-1/2 -translate-y-1/2">
            {lineIndices.map((i) => (
              <div
                key={`left-${i}`}
                className="absolute top-1/2 -translate-y-1/2 rounded-r-[80%] border-y-[2.5px] border-r-[2.5px] border-[#FCFAF8]"
                style={{
                  height: `${320 + i * 20}px`,
                  width: `${60 + i * 10}px`,
                  left: 0,
                  animation: "line-pulse 5s ease-in-out infinite",
                  animationDelay: `${i * 0.25}s`
                }}
              />
            ))}
          </div>

          {/* Right Side Lines (Desktop <810px hidden) */}
          <div className="hidden min-[810px]:block absolute right-0 top-1/2 -translate-y-1/2">
            {lineIndices.map((i) => (
              <div
                key={`right-${i}`}
                className="absolute top-1/2 -translate-y-1/2 rounded-l-[80%] border-y-[2.5px] border-l-[2.5px] border-[#FCFAF8]"
                style={{
                  height: `${320 + i * 20}px`,
                  width: `${60 + i * 10}px`,
                  right: 0,
                  animation: "line-pulse 5s ease-in-out infinite",
                  animationDelay: `${i * 0.25}s`
                }}
              />
            ))}
          </div>

          {/* Mobile Top Horizontal Lines (<810px visible) */}
          <div className="block min-[810px]:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full">
            {lineIndices.map((i) => (
              <div
                key={`top-${i}`}
                className="absolute left-1/2 -translate-x-1/2 rounded-b-[80%] border-x-[2.5px] border-b-[2.5px] border-[#FCFAF8]"
                style={{
                  width: `${240 + i * 16}px`,
                  height: `${40 + i * 8}px`,
                  top: 0,
                  animation: "line-pulse 5s ease-in-out infinite",
                  animationDelay: `${i * 0.25}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Stack */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Ticker Row */}
          <div
            className="w-full max-w-[500px] h-[36px] overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)"
            }}
          >
            <div
              className="flex w-max items-center gap-2"
              style={{ animation: "marquee-left 30s linear infinite" }}
            >
              {[0, 1, 2, 3].flatMap((loopIdx) =>
                tickerItems.map((item, itemIdx) => (
                  <span
                    key={`${loopIdx}-${itemIdx}`}
                    className="whitespace-nowrap rounded-full bg-[rgb(251,251,251)] px-[14px] py-[6px] text-[13px] font-medium text-[#6b6b6b] border border-black/5"
                  >
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>

          {/* Main Hero Title */}
          <h1 className="mt-6 max-w-[550px] font-sans text-[44px] sm:text-[60px] md:text-[82px] font-semibold leading-[1.03] tracking-[-0.07em] text-[#0a0a0a]">
            Premium creative{" "}
            <span className="serif italic font-semibold tracking-[-0.08em]">alwayzz</span>
            <sup className="font-sans text-[20px] sm:text-[24px] font-semibold align-super ml-0.5">®</sup>{" "}
            on demand.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-[476px] font-sans text-[15px] sm:text-[17px] font-normal leading-[1.45] text-[#6b6b6b]">
            A flexible design partnership for founders, brands, and agencies who want top craft delivered on their timeline.
          </p>

          {/* CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <Link
              href="/pricing"
              className="flex h-[56px] w-full sm:w-auto items-center justify-center rounded-full bg-[#0a0a0a] px-[30px] py-[18px] text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] active:scale-95"
            >
              View Plans
            </Link>

            {/* Book Button */}
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-full bg-white border-[4px] border-[rgb(248,248,248)] p-2 pr-6 shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 w-full sm:w-auto justify-center"
            >
              <div className="relative size-[40px] overflow-hidden rounded-full shrink-0">
                <Image
                  src={avatarUrl}
                  alt="Schedule a chat avatar"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[14px] font-semibold text-[#0a0a0a] leading-tight">
                  Chat for 15 minutes
                </span>
                <span className="flex items-center gap-1.5 text-[12px] font-medium text-[rgb(152,152,152)] leading-tight mt-0.5">
                  <span className="size-[8px] rounded-full bg-[rgb(29,204,93)] shrink-0" />
                  Pick a slot
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Progressive Blur Layer */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[178px]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 40%, #ffffff 100%)"
          }}
          aria-hidden="true"
        />
      </section>

      {/* TrustedBy Section */}
      <section className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-[36px] md:flex-row md:items-center md:justify-between">
        {/* Left Label */}
        <p className="max-w-[163px] font-sans text-[14px] font-medium text-[#6b6b6b] leading-snug">
          Partnered with top-tier companies globally
        </p>

        {/* Right Marquee */}
        <div
          className="flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)"
          }}
        >
          <div
            className="flex w-max items-center gap-10"
            style={{ animation: "marquee-left 30s linear infinite" }}
          >
            {[0, 1, 2, 3].flatMap((loopIdx) =>
              trustedLogos.map((logo, logoIdx) => (
                <span
                  key={`${loopIdx}-${logoIdx}`}
                  style={logo.style}
                  className="whitespace-nowrap text-[16px] text-[#0a0a0a] opacity-85 hover:opacity-100 transition-opacity"
                >
                  {logo.name}
                </span>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
