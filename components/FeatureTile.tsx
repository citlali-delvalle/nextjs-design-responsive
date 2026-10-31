import { ButtonGroup } from "@/components/ButtonGroup";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import type { LinkItem, Project } from "@/components/types";

type FeatureTileProps = Project & {
  actions: LinkItem[];
};

export function FeatureTile({ title, tagline, category, image, alt, actions }: FeatureTileProps) {
  return (
    <section className="px-3 md:px-6">
      <MediaFrame radius="xl" className="reveal mx-auto h-[620px] max-w-[1392px] md:h-[760px]">
        <ParallaxImage src={image} alt={alt} sizes="(min-width: 1440px) 1392px, 100vw" />
        <div className="absolute inset-x-3 bottom-3 flex justify-center md:bottom-8">
          <GlassCard radius="lg" className="w-full max-w-md px-6 py-6 text-center md:px-10 md:py-8">
            <Eyebrow>{category}</Eyebrow>
            <Heading as="h2" size="title" className="mt-1">
              {title}
            </Heading>
            <p className="mt-1 text-[19px] leading-snug md:text-[21px]">{tagline}</p>
            <ButtonGroup actions={actions} className="mt-5 justify-center" />
          </GlassCard>
        </div>
      </MediaFrame>
    </section>
  );
}
