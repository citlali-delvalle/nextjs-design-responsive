import { StatCard, type StatCardProps } from "@/components/StatCard";
import { Heading } from "@/components/ui/Heading";

type AboutProps = {
  id: string;
  headline: string;
  body: string;
  stats: StatCardProps[];
};

export function About({ id, headline, body, stats }: AboutProps) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="reveal mx-auto max-w-[980px]">
        <Heading as="p" size="statement">
          {headline} <span className="text-muted">{body}</span>
        </Heading>
        <dl className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
