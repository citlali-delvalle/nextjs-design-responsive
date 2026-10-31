import { cx } from "@/components/ui/cx";
import { GlassCard } from "@/components/ui/GlassCard";

const sizes = {
  sm: "py-1.5",
  md: "py-2",
};

type BadgeProps = {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

/* Small glass label, e.g. a category chip or a caption over media */
export function Badge({ size = "md", className, children }: BadgeProps) {
  return (
    <GlassCard as="p" radius="full" className={cx("px-4 text-sm font-medium", sizes[size], className)}>
      {children}
    </GlassCard>
  );
}
