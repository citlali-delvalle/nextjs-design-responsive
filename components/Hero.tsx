import { ButtonGroup } from "@/components/ButtonGroup";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import type { LinkItem } from "@/components/types";

type HeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  actions: LinkItem[];
};

export function Hero({ badge, title, subtitle, actions }: HeroProps) {
  return (
    <section className="flex flex-col items-center px-6 pt-32 text-center md:pt-40">
      <Badge size="sm" className="text-muted">
        {badge}
      </Badge>
      <Heading as="h1" size="display" className="mt-5 max-w-4xl">
        {title}
      </Heading>
      <p className="mt-3 max-w-xl text-[21px] leading-snug text-muted md:text-[28px]">{subtitle}</p>
      <ButtonGroup actions={actions} className="mt-7" />
    </section>
  );
}
