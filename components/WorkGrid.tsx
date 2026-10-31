import { GridTile } from "@/components/GridTile";
import type { LinkedProject } from "@/components/types";

type WorkGridProps = {
  id: string;
  /** Visually hidden section heading */
  heading: string;
  projects: LinkedProject[];
};

/* 1 column on phones, 2 on tablet and up */
export function WorkGrid({ id, heading, projects }: WorkGridProps) {
  return (
    <section id={id} className="scroll-mt-20 px-3 pt-3 md:px-6 md:pt-6">
      <h2 className="sr-only">{heading}</h2>
      <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <GridTile key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
