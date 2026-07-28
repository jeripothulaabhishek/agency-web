"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

const story = [
  {
    title: "We begin by removing the fog.",
    text: "Before visual exploration, we clarify the decision the page, product, or system needs to help a person make.",
    icon: "✦"
  },
  {
    title: "Then we build a language.",
    text: "Type, spacing, states, motion, and content rhythm become a shared kit, not a pile of one-off screens.",
    icon: "◇"
  },
  {
    title: "The interface gets a body.",
    text: "Subtle depth, soft shadows, and restrained parallax create dimension without stealing focus.",
    icon: "◌"
  },
  {
    title: "Finally, the system learns.",
    text: "We connect the experience to analytics so teams can keep improving after launch.",
    icon: "↗"
  }
];

export function StudioStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".story-card");
      const icons = gsap.utils.toArray<HTMLElement>(".story-icon");
      gsap.set(cards.slice(1), { autoAlpha: 0, y: 36 });
      gsap.set(icons, { rotate: -8, scale: 0.92 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 12%",
          end: "+=1500",
          scrub: 0.9,
          pin: true
        }
      });

      cards.forEach((card, index) => {
        timeline.to(card, { autoAlpha: 1, y: 0, duration: 0.55 }, index);
        timeline.to(icons[index], { rotate: 0, scale: 1, duration: 0.55 }, index);
        if (index < cards.length - 1) {
          timeline.to(card, { autoAlpha: 0, y: -28, duration: 0.45 }, index + 0.65);
        }
      });
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={ref} className="section-shell grid min-h-[75vh] gap-8 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div>
        <p className="eyebrow">Studio Story</p>
        <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">
          The method is calm. The output has pulse.
        </h2>
        <p className="mt-5 text-base leading-8 text-muted">
          This pinned narrative is designed to feel like a sequence of physical cards passing through the same light.
        </p>
      </div>
      <div className="relative min-h-[420px]">
        {story.map((item) => (
          <article key={item.title} className="story-card absolute inset-0 grid place-items-center rounded-[2rem] bg-white p-8 shadow-neo hairline">
            <div>
              <div className="story-icon grid size-20 place-items-center rounded-[1.6rem] bg-accent-soft text-4xl text-accent shadow-inset">
                {item.icon}
              </div>
              <h3 className="mt-8 text-3xl font-black leading-none tracking-[-0.06em] md:text-5xl">{item.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
