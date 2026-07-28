import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge variant="glass">{eyebrow}</Badge> : null}
      <h2 className="display-heading mt-5 text-balance text-4xl font-black text-ink md:text-6xl">{title}</h2>
      {text ? <p className={cn("mt-5 max-w-2xl text-pretty text-base leading-8 text-muted md:text-lg", align === "center" && "mx-auto")}>{text}</p> : null}
    </div>
  );
}
