import Link from "next/link";
import { ShaderBackground } from "@/components/ShaderBackground";

export function CTASection({
  title = "Ready to make the web feel lighter?",
  text = "Tell us what you are building. We will send back a clear next step, not a maze.",
  compact = false
}: {
  title?: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <section className={`section-shell relative overflow-hidden rounded-[2rem] ${compact ? "my-12" : "my-20"} p-6 md:p-10`}>
      <ShaderBackground intensity={0.13} className="rounded-[2rem]" />
      <div className="liquid-glass relative grid gap-8 rounded-[1.7rem] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-9">
        <div>
          <p className="eyebrow">Start a Project</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl text-ink">{title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-graphite">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link href="/contact" className="shine-sweep rounded-full bg-accent px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-glow transition-all hover:bg-accent-hover hover:-translate-y-0.5">
            Book a call
          </Link>
          <form className="flex min-w-72 gap-2 rounded-full bg-white p-1 hairline">
            <input
              type="email"
              aria-label="Email"
              placeholder="you@studio.com"
              className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm font-semibold outline-none"
            />
            <button type="submit" className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
