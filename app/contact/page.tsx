import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { MultiStepForm } from "@/components/MultiStepForm";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ShaderBackground } from "@/components/ShaderBackground";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="section-shell relative overflow-hidden rounded-[2rem] p-6 md:p-10">
        <ShaderBackground intensity={0.1} className="rounded-[2rem]" />
        <div className="relative z-10 max-w-4xl py-14">
          <p className="eyebrow">Contact</p>
          <h1 className="display-heading mt-6 text-[clamp(4.2rem,11vw,8rem)] font-black">Let&apos;s Build Something</h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-muted">
            A quieter shader zone, a guided form, and a clear route into the project conversation.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-6 py-16 lg:grid-cols-[1fr_0.82fr]">
        <MultiStepForm />
        <aside className="grid gap-5">
          <div className="rounded-[2rem] bg-white p-7 shadow-neo hairline">
            <p className="eyebrow">Book a Call</p>
            <h2 className="mt-6 text-4xl font-black leading-none tracking-[-0.07em]">Prefer a real conversation?</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Use this placeholder calendar CTA to route into your booking tool of choice.
            </p>
            <a href="#" className="mt-7 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-black text-white shadow-glow">
              Open calendar
            </a>
          </div>
          <div className="rounded-[2rem] bg-mist p-7 shadow-inset hairline">
            <div className="relative mx-auto h-52 max-w-sm">
              <div className="absolute left-10 top-12 h-28 w-24 rounded-[1.4rem] bg-white shadow-neo-sm" />
              <div className="absolute left-28 top-5 h-36 w-28 rounded-[1.4rem] bg-white shadow-neo-sm" />
              <div className="absolute right-8 top-20 grid size-20 place-items-center rounded-full bg-accent text-3xl text-white shadow-glow">⌖</div>
            </div>
            <p className="text-center text-sm font-black uppercase tracking-[0.14em] text-muted">Remote studio · one business day response</p>
          </div>
        </aside>
      </section>

      <ParallaxSection className="section-shell py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Email", "hello@example.studio"],
            ["Social", "@neuro-placeholder"],
            ["Phone", "+1 (000) 000-0000"]
          ].map(([label, value]) => (
            <a key={label} href="#" className="rounded-[2rem] bg-white p-6 shadow-neo-sm transition-transform hover:-translate-y-1 hairline">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">{label}</p>
              <p className="mt-4 text-xl font-black tracking-[-0.05em]">{value}</p>
            </a>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection className="section-shell grid gap-8 py-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact FAQ</p>
          <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">A little clarity before you hit send.</h2>
        </div>
        <Accordion items={faqs.contact} />
      </ParallaxSection>
    </main>
  );
}
