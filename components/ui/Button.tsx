import { cx } from "@/components/ui/cx";

type ButtonOwnProps = {
  variant?: "primary" | "secondary";
  /** `icon` is a round 44px target for a single glyph; see IconButton */
  size?: "md" | "icon";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof ButtonOwnProps> & { href: string };

type ButtonAsButton = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "glass glass-pill items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes = {
  md: "inline-flex h-10 px-5 text-[15px] font-medium",
  icon: "flex size-11",
};

// A solid-colored glass button needs `bg-none` to drop the glass tint (see .glass in globals.css)
const variants = {
  primary: "bg-none bg-[#0071e3]/90 text-white",
  secondary: "text-foreground",
};

/* Liquid Glass pill. Renders an <a> when given an `href`, otherwise a <button>. */
export function Button({ variant = "secondary", size = "md", className, ...props }: ButtonProps) {
  const classes = cx(base, sizes[size], variants[variant], className);

  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }
  return <button type="button" {...props} className={classes} />;
}
