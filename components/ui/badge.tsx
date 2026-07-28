import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.13em] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-ink text-white",
        accent: "bg-accent-soft text-accent",
        outline: "border border-line bg-white text-graphite",
        glass: "border border-white/60 bg-white/70 text-graphite backdrop-blur-xl"
      }
    },
    defaultVariants: {
      variant: "accent"
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
