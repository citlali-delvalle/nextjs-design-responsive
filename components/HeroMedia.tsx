import { HeroVideo, type HeroVideoProps } from "@/components/HeroVideo";
import { Badge } from "@/components/ui/Badge";
import { MediaFrame } from "@/components/ui/MediaFrame";

type HeroMediaProps = {
  video: HeroVideoProps;
  caption: string;
};

export function HeroMedia({ video, caption }: HeroMediaProps) {
  return (
    <div className="reveal mx-auto mt-12 w-full max-w-[1440px] px-3 md:mt-16 md:px-6">
      <MediaFrame radius="xl" className="aspect-[4/5] bg-surface sm:aspect-[16/9]">
        <HeroVideo {...video} />
        <Badge className="absolute bottom-4 left-4 md:bottom-6 md:left-6">{caption}</Badge>
      </MediaFrame>
    </div>
  );
}
