import Image, { type StaticImageData } from "next/image";
import { cx } from "@/components/ui/cx";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

type ParallaxImageProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
};

/* A blur-placeholder photo that fills its MediaFrame and drifts as the page scrolls */
export function ParallaxImage({ src, alt, sizes, className }: ParallaxImageProps) {
  return (
    <ParallaxLayer>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        fill
        sizes={sizes}
        className={cx("object-cover", className)}
      />
    </ParallaxLayer>
  );
}
