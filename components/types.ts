import type { StaticImageData } from "next/image";

export type LinkItem = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  title: string;
  tagline: string;
  category: string;
  image: StaticImageData;
  alt: string;
};

export type LinkedProject = Project & {
  href: string;
  /** Accessible name for the tile's arrow link */
  linkLabel: string;
};
