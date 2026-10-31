import { cx } from "@/components/ui/cx";

const radii = {
  lg: "rounded-[28px]",
  /* 28px on phones, 36px from the md breakpoint */
  xl: "rounded-[28px] md:rounded-[36px]",
};

type MediaFrameProps = {
  as?: "div" | "article";
  radius?: keyof typeof radii;
  /** Size the frame here (aspect ratio or height); add `reveal` for the scroll fade-up */
  className?: string;
  children: React.ReactNode;
};

/* Rounded clipping frame for media. Put a ParallaxImage (or a ParallaxLayer) inside. */
export function MediaFrame({ as: Tag = "div", radius = "lg", className, children }: MediaFrameProps) {
  return (
    <Tag className={cx("parallax relative overflow-hidden", radii[radius], className)}>{children}</Tag>
  );
}
