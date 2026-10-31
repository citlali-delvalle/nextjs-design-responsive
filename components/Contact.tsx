import { Aurora } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Heading } from "@/components/ui/Heading";
import type { LinkItem } from "@/components/types";

type ContactProps = {
  id: string;
  title: string;
  description: string;
  action: LinkItem;
};

/* Glass card floating over soft color */
export function Contact({ id, title, description, action }: ContactProps) {
  return (
    <section id={id} className="relative isolate scroll-mt-20 overflow-hidden px-3 py-24 md:py-32">
      <Aurora className="[mask-image:linear-gradient(transparent,black_35%,black_65%,transparent)]" />
      <GlassCard
        radius="xl"
        className="reveal mx-auto flex max-w-xl flex-col items-center px-6 py-14 text-center md:px-12"
      >
        <Heading as="h2" size="title">
          {title}
        </Heading>
        <p className="mt-3 text-[19px] text-muted md:text-[21px]">{description}</p>
        <div className="mt-8">
          <Button href={action.href} variant={action.primary ? "primary" : "secondary"}>
            {action.label}
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
