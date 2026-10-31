import { cx } from "@/components/ui/cx";

const radii = {
  sm: "rounded-[22px]",
  md: "rounded-[24px]",
  lg: "rounded-[28px]",
  xl: "rounded-[36px]",
  full: "rounded-full",
};

type GlassCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "nav" | "ul" | "p";
  radius?: keyof typeof radii;
};

/* The Liquid Glass material on any element. Padding, layout and position come from `className`. */
export function GlassCard({ as: Tag = "div", radius = "lg", className, ...props }: GlassCardProps) {
  return <Tag className={cx("glass", radii[radius], className)} {...props} />;
}
