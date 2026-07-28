import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  label?: string;
};

export function Marquee({ items, direction = "left", label }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <section aria-label={label ?? "Logo marquee"} className="overflow-hidden py-6">
      <div className="group marquee-mask flex overflow-hidden rounded-[2rem] bg-white py-3 hairline">
        <div
          className={cn(
            "flex min-w-max gap-3 px-3 group-hover:[animation-play-state:paused]",
            direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
          )}
        >
          {row.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex h-16 min-w-40 items-center justify-center rounded-2xl bg-mist px-7 text-sm font-black uppercase tracking-[0.18em] text-muted grayscale transition-all duration-300 hover:bg-white hover:text-accent hover:grayscale-0 hover:shadow-neo-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
