import { cx } from "@/components/ui/cx";

const sizes = {
  sm: "text-sm",
  xs: "text-xs",
};

type EyebrowProps = {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

/* Small muted label above a title, e.g. a category */
export function Eyebrow({ size = "sm", className, children }: EyebrowProps) {
  return <p className={cx(sizes[size], "font-semibold text-muted", className)}>{children}</p>;
}
