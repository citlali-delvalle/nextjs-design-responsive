import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heading } from "@/components/ui/Heading";
import { IconButton } from "@/components/ui/IconButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import type { LinkedProject } from "@/components/types";

export function GridTile({ title, tagline, category, image, alt, href, linkLabel }: LinkedProject) {
  return (
    <MediaFrame
      as="article"
      className="reveal group aspect-[4/5] bg-surface sm:aspect-auto sm:h-[560px]"
    >
      <ParallaxImage
        src={image}
        alt={alt}
        sizes="(min-width: 640px) 50vw, 100vw"
        className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <GlassCard
        radius="sm"
        className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 py-4 pr-4 pl-5"
      >
        <div className="min-w-0">
          <Eyebrow size="xs">{category}</Eyebrow>
          <Heading as="h3" size="card">
            {title}
          </Heading>
          <p className="truncate text-[15px] text-foreground/80">{tagline}</p>
        </div>
        <IconButton href={href} label={linkLabel} className="shrink-0 text-xl">
          <span aria-hidden>›</span>
        </IconButton>
      </GlassCard>
    </MediaFrame>
  );
}
