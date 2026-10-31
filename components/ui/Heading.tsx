import { cx } from "@/components/ui/cx";

const sizes = {
  display: "text-[48px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[80px]",
  title: "text-[40px] font-semibold leading-[1.1] tracking-[-0.015em] md:text-[56px]",
  statement: "text-[28px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[48px]",
  card: "text-[24px] font-semibold leading-tight tracking-[-0.01em] md:text-[28px]",
};

type HeadingProps = {
  /** The element to render, chosen for document structure; `size` controls the look */
  as?: "h1" | "h2" | "h3" | "p";
  size: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Heading({ as: Tag = "h2", size, className, children }: HeadingProps) {
  return <Tag className={cx(sizes[size], className)}>{children}</Tag>;
}
