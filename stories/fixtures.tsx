import type { Decorator } from '@storybook/nextjs-vite';

import { Aurora } from '@/components/ui/Aurora';
import { MediaFrame } from '@/components/ui/MediaFrame';
import type { LinkedProject, LinkItem, Project } from '@/components/types';

import lioness from '@/public/portfolio/lioness.jpg';
import basecamp from '@/public/portfolio/basecamp.jpg';
import valley from '@/public/portfolio/valley.jpg';
import skyline from '@/public/portfolio/skyline.jpg';
import harvest from '@/public/portfolio/harvest.jpg';
import essentials from '@/public/portfolio/essentials.jpg';
import studio from '@/public/portfolio/studio.jpg';
import fjord from '@/public/portfolio/fjord.jpg';

export const images = { lioness, basecamp, valley, skyline, harvest, essentials, studio, fjord };

/** Lets the Controls panel swap a StaticImageData prop for another photo */
export const imageArgType = {
  control: 'select',
  options: Object.keys(images),
  mapping: images,
} as const;

export const navLinks: LinkItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const brand: LinkItem = { label: 'Portfolio', href: '#' };

export const actions: LinkItem[] = [
  { label: 'See the work', href: '#work', primary: true },
  { label: 'Get in touch', href: '#contact' },
];

export const project: Project = {
  title: 'Basecamp',
  tagline: 'Altitude, quietly.',
  category: 'Expedition',
  image: basecamp,
  alt: 'Yellow tents in the snow below a Himalayan peak',
};

export const linkedProject: LinkedProject = {
  ...project,
  href: '#contact',
  linkLabel: 'View Basecamp',
};

export const linkedProjects: LinkedProject[] = [
  linkedProject,
  {
    title: 'Valley',
    tagline: 'Granite and still water.',
    category: 'Landscape',
    image: valley,
    alt: 'Granite cliffs rising above pine trees and a calm river',
    href: '#contact',
    linkLabel: 'View Valley',
  },
  {
    title: 'Skyline',
    tagline: 'The city at golden hour.',
    category: 'Urban',
    image: skyline,
    alt: 'Aerial view of a downtown skyline at sunset beside a lake',
    href: '#contact',
    linkLabel: 'View Skyline',
  },
  {
    title: 'Harvest',
    tagline: 'Color you can taste.',
    category: 'Food',
    image: harvest,
    alt: 'Crates filled with ripe red strawberries',
    href: '#contact',
    linkLabel: 'View Harvest',
  },
];

export const video = {
  src: '/portfolio/lake.mp4',
  poster: '/portfolio/lake-poster.jpg',
  label: 'Aerial drone shot drifting over a mountain lake beneath low clouds and forested ridges',
  playLabel: 'Play video',
  pauseLabel: 'Pause video',
};

/** Soft color field behind the story so Liquid Glass has something to refract */
export const withAurora: Decorator = (Story) => (
  <div className="relative isolate min-h-[480px] overflow-hidden">
    {/* Fade out at the bottom so the color doesn't end in a hard edge */}
    <Aurora className="[mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
    <Story />
  </div>
);

/** Wraps the story in a plain container, e.g. to give a tile a column to fill */
export function inContainer(className: string, as: 'div' | 'dl' = 'div'): Decorator {
  const Tag = as;
  const InContainer: Decorator = (Story) => (
    <Tag className={className}>
      <Story />
    </Tag>
  );
  return InContainer;
}

/** Wraps the story in a MediaFrame, for components that fill a parallax frame (images, video) */
export function inMediaFrame(className: string): Decorator {
  const InMediaFrame: Decorator = (Story) => (
    <MediaFrame className={className}>
      <Story />
    </MediaFrame>
  );
  return InMediaFrame;
}
