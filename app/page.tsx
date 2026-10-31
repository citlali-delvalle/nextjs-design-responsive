import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeatureTile } from "@/components/FeatureTile";
import { Hero } from "@/components/Hero";
import { HeroMedia } from "@/components/HeroMedia";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkGrid } from "@/components/WorkGrid";
import { Aurora } from "@/components/ui/Aurora";
import type { LinkedProject, LinkItem, Project } from "@/components/types";

import lioness from "@/public/portfolio/lioness.jpg";
import basecamp from "@/public/portfolio/basecamp.jpg";
import valley from "@/public/portfolio/valley.jpg";
import skyline from "@/public/portfolio/skyline.jpg";
import harvest from "@/public/portfolio/harvest.jpg";
import essentials from "@/public/portfolio/essentials.jpg";
import studio from "@/public/portfolio/studio.jpg";

/* All page content lives here; the components in `components/` only render props. */

const brand: LinkItem = { label: "Portfolio", href: "#" };

const menuLabel = "Menu";

const navLinks: LinkItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const hero = {
  badge: "Photography · 2026",
  title: "Through the lens.",
  subtitle: "Landscapes, cities and the quiet details in between.",
  actions: [
    { label: "See the work", href: "#work", primary: true },
    { label: "Get in touch", href: "#contact" },
  ],
};

const heroVideo = {
  src: "/portfolio/lake.mp4",
  poster: "/portfolio/lake-poster.jpg",
  label: "Aerial drone shot drifting over a mountain lake beneath low clouds and forested ridges",
  playLabel: "Play video",
  pauseLabel: "Pause video",
};

const heroCaption = "Mountain lake · Film";

const featured: Project & { actions: LinkItem[] } = {
  title: "Wild",
  tagline: "Eye to eye. Nothing in between.",
  category: "Wildlife",
  image: lioness,
  alt: "Close-up portrait of a lioness staring into the camera",
  actions: [
    { label: "View series", href: "#work", primary: true },
    { label: "Get prints", href: "#contact" },
  ],
};

const projects: LinkedProject[] = [
  {
    title: "Basecamp",
    tagline: "Altitude, quietly.",
    category: "Expedition",
    image: basecamp,
    alt: "Yellow tents in the snow below a Himalayan peak",
    href: "#contact",
    linkLabel: "View Basecamp",
  },
  {
    title: "Valley",
    tagline: "Granite and still water.",
    category: "Landscape",
    image: valley,
    alt: "Granite cliffs rising above pine trees and a calm river",
    href: "#contact",
    linkLabel: "View Valley",
  },
  {
    title: "Skyline",
    tagline: "The city at golden hour.",
    category: "Urban",
    image: skyline,
    alt: "Aerial view of a downtown skyline at sunset beside a lake",
    href: "#contact",
    linkLabel: "View Skyline",
  },
  {
    title: "Harvest",
    tagline: "Color you can taste.",
    category: "Food",
    image: harvest,
    alt: "Crates filled with ripe red strawberries",
    href: "#contact",
    linkLabel: "View Harvest",
  },
  {
    title: "Essentials",
    tagline: "Everything in its place.",
    category: "Still life",
    image: essentials,
    alt: "Flat lay of a wallet, sunglasses, watch, phone and headphones on grey",
    href: "#contact",
    linkLabel: "View Essentials",
  },
  {
    title: "Studio",
    tagline: "Where the work happens.",
    category: "Lifestyle",
    image: studio,
    alt: "Laptop on a wooden table in a softly lit kitchen",
    href: "#contact",
    linkLabel: "View Studio",
  },
];

const work = {
  heading: "Selected work",
  projects,
};

const about = {
  headline: "Every frame starts with patience.",
  body: "I travel slowly, wait for the light, and let the place tell its own story — from fjords and base camps to city rooftops and kitchen tables.",
  stats: [
    { value: "8", label: "Featured series" },
    { value: "14", label: "Countries photographed" },
    { value: "1", label: "Camera, always" },
  ],
};

const contact = {
  title: "Let’s make something.",
  description: "Available for commissions, editorial work and print sales.",
  action: { label: "Get in touch", href: "mailto:hello@example.com", primary: true },
};

const copyright = "Copyright © 2026 Portfolio. All rights reserved.";

export default function Home() {
  return (
    <div className="font-display relative isolate flex flex-1 flex-col bg-background text-foreground antialiased">
      <Aurora className="h-[900px]" />

      <SiteHeader brand={brand} links={navLinks} menuLabel={menuLabel} />

      <main>
        <Hero {...hero} />
        <HeroMedia video={heroVideo} caption={heroCaption} />

        <div className="mt-3 md:mt-6">
          <FeatureTile {...featured} />
        </div>

        <WorkGrid id="work" {...work} />
        <About id="about" {...about} />
        <Contact id="contact" {...contact} />
      </main>

      <SiteFooter copyright={copyright} links={navLinks} />
    </div>
  );
}
