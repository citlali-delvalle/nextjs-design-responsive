import Image, { type StaticImageData } from "next/image";
import { HeroVideo } from "@/components/HeroVideo";

import lioness from "@/public/portfolio/lioness.jpg";
import basecamp from "@/public/portfolio/basecamp.jpg";
import valley from "@/public/portfolio/valley.jpg";
import skyline from "@/public/portfolio/skyline.jpg";
import harvest from "@/public/portfolio/harvest.jpg";
import essentials from "@/public/portfolio/essentials.jpg";
import studio from "@/public/portfolio/studio.jpg";

type Project = {
  title: string;
  tagline: string;
  category: string;
  image: StaticImageData;
  alt: string;
};

const featured: Project = {
  title: "Wild",
  tagline: "Eye to eye. Nothing in between.",
  category: "Wildlife",
  image: lioness,
  alt: "Close-up portrait of a lioness staring into the camera",
};

const projects: Project[] = [
  {
    title: "Basecamp",
    tagline: "Altitude, quietly.",
    category: "Expedition",
    image: basecamp,
    alt: "Yellow tents in the snow below a Himalayan peak",
  },
  {
    title: "Valley",
    tagline: "Granite and still water.",
    category: "Landscape",
    image: valley,
    alt: "Granite cliffs rising above pine trees and a calm river",
  },
  {
    title: "Skyline",
    tagline: "The city at golden hour.",
    category: "Urban",
    image: skyline,
    alt: "Aerial view of a downtown skyline at sunset beside a lake",
  },
  {
    title: "Harvest",
    tagline: "Color you can taste.",
    category: "Food",
    image: harvest,
    alt: "Crates filled with ripe red strawberries",
  },
  {
    title: "Essentials",
    tagline: "Everything in its place.",
    category: "Still life",
    image: essentials,
    alt: "Flat lay of a wallet, sunglasses, watch, phone and headphones on grey",
  },
  {
    title: "Studio",
    tagline: "Where the work happens.",
    category: "Lifestyle",
    image: studio,
    alt: "Laptop on a wooden table in a softly lit kitchen",
  },
];

const navLinks = ["Work", "About", "Contact"];

/* Soft color fields behind the page so the glass always has something to refract */
function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-40 left-[8%] h-[520px] w-[520px] rounded-full bg-[#a8d8ff] opacity-50 blur-[120px]" />
      <div className="absolute -top-20 right-[6%] h-[460px] w-[460px] rounded-full bg-[#ffc9e4] opacity-50 blur-[120px]" />
      <div className="absolute top-40 left-[40%] h-[380px] w-[380px] rounded-full bg-[#d9ccff] opacity-40 blur-[120px]" />
    </div>
  );
}

function GlassLink({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`glass glass-pill inline-flex h-10 items-center justify-center rounded-full px-5 text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        primary ? "bg-none bg-[#0071e3]/90 text-white" : "text-foreground"
      }`}
    >
      {children}
    </a>
  );
}

function FeatureTile({ project }: { project: Project }) {
  return (
    <section className="px-3 md:px-6">
      <div className="reveal parallax relative mx-auto h-[620px] max-w-[1392px] overflow-hidden rounded-[28px] md:h-[760px] md:rounded-[36px]">
        <div className="parallax-layer">
          <Image
            src={project.image}
            alt={project.alt}
            placeholder="blur"
            fill
            sizes="(min-width: 1440px) 1392px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-3 bottom-3 flex justify-center md:bottom-8">
          <div className="glass w-full max-w-md rounded-[28px] px-6 py-6 text-center md:px-10 md:py-8">
            <p className="text-sm font-semibold text-muted">{project.category}</p>
            <h2 className="mt-1 text-[40px] font-semibold leading-[1.1] tracking-[-0.015em] md:text-[56px]">
              {project.title}
            </h2>
            <p className="mt-1 text-[19px] leading-snug md:text-[21px]">{project.tagline}</p>
            <div className="mt-5 flex justify-center gap-3">
              <GlassLink href="#work" primary>
                View series
              </GlassLink>
              <GlassLink href="#contact">Get prints</GlassLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GridTile({ project }: { project: Project }) {
  return (
    <article className="reveal parallax group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface sm:aspect-auto sm:h-[560px]">
      <div className="parallax-layer">
        <Image
          src={project.image}
          alt={project.alt}
          placeholder="blur"
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="glass absolute inset-x-3 bottom-3 flex items-center justify-between gap-4 rounded-[22px] py-4 pr-4 pl-5">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-muted">{project.category}</p>
          <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.01em] md:text-[28px]">
            {project.title}
          </h3>
          <p className="truncate text-[15px] text-foreground/80">{project.tagline}</p>
        </div>
        <a
          href="#contact"
          aria-label={`View ${project.title}`}
          className="glass glass-pill flex size-11 shrink-0 items-center justify-center rounded-full text-xl"
        >
          <span aria-hidden>›</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="font-display relative isolate flex flex-1 flex-col bg-background text-foreground antialiased">
      <Aurora className="h-[900px]" />

      {/* Floating Liquid Glass nav */}
      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <nav className="glass mx-auto flex h-12 max-w-[680px] items-center justify-between rounded-full pr-2 pl-5 text-sm">
          <a href="#" className="font-semibold tracking-tight">
            Portfolio
          </a>
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block rounded-full px-4 py-2 text-foreground/80 transition-colors hover:bg-white/60 hover:text-foreground"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <details className="group sm:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex w-4 flex-col gap-[5px]">
                <span className="h-px bg-foreground transition-transform group-open:translate-y-[3px] group-open:rotate-45" />
                <span className="h-px bg-foreground transition-transform group-open:-translate-y-[3px] group-open:-rotate-45" />
              </span>
            </summary>
            <ul className="glass absolute inset-x-0 top-14 flex flex-col rounded-[24px] p-3 text-[22px] font-semibold">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="block rounded-2xl px-4 py-2 hover:bg-white/60">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="flex flex-col items-center px-6 pt-32 text-center md:pt-40">
          <p className="glass rounded-full px-4 py-1.5 text-sm font-medium text-muted">
            Photography · 2026
          </p>
          <h1 className="mt-5 max-w-4xl text-[48px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[80px]">
            Through the lens.
          </h1>
          <p className="mt-3 max-w-xl text-[21px] leading-snug text-muted md:text-[28px]">
            Landscapes, cities and the quiet details in between.
          </p>
          <div className="mt-7 flex gap-3">
            <GlassLink href="#work" primary>
              See the work
            </GlassLink>
            <GlassLink href="#contact">Get in touch</GlassLink>
          </div>
        </section>
        <div className="reveal mx-auto mt-12 w-full max-w-[1440px] px-3 md:mt-16 md:px-6">
          <div className="parallax relative aspect-[4/5] overflow-hidden rounded-[28px] bg-surface sm:aspect-[16/9] md:rounded-[36px]">
            <HeroVideo
              src="/portfolio/lake.mp4"
              poster="/portfolio/lake-poster.jpg"
              label="Aerial drone shot drifting over a mountain lake beneath low clouds and forested ridges"
            />
            <p className="glass absolute bottom-4 left-4 rounded-full px-4 py-2 text-sm font-medium md:bottom-6 md:left-6">
              Mountain lake · Film
            </p>
          </div>
        </div>

        <div className="mt-3 md:mt-6">
          <FeatureTile project={featured} />
        </div>

        {/* Work grid: 1 column on phones, 2 on tablet and up */}
        <section id="work" className="scroll-mt-20 px-3 pt-3 md:px-6 md:pt-6">
          <h2 className="sr-only">Selected work</h2>
          <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <GridTile key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 px-6 py-24 md:py-32">
          <div className="reveal mx-auto max-w-[980px]">
            <p className="text-[28px] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[48px]">
              Every frame starts with patience.{" "}
              <span className="text-muted">
                I travel slowly, wait for the light, and let the place tell its own story — from
                fjords and base camps to city rooftops and kitchen tables.
              </span>
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["8", "Featured series"],
                ["14", "Countries photographed"],
                ["1", "Camera, always"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col-reverse rounded-[28px] bg-surface p-7">
                  <dt className="mt-2 text-[17px] text-muted">{label}</dt>
                  <dd className="text-[56px] font-semibold leading-none tracking-[-0.03em] md:text-[64px]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact: glass card floating over soft color */}
        <section id="contact" className="relative isolate scroll-mt-20 overflow-hidden px-3 py-24 md:py-32">
          <Aurora className="[mask-image:linear-gradient(transparent,black_35%,black_65%,transparent)]" />
          <div className="reveal glass mx-auto flex max-w-xl flex-col items-center rounded-[36px] px-6 py-14 text-center md:px-12">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.015em] md:text-[56px]">
              Let’s make something.
            </h2>
            <p className="mt-3 text-[19px] text-muted md:text-[21px]">
              Available for commissions, editorial work and print sales.
            </p>
            <div className="mt-8">
              <GlassLink href="mailto:hello@example.com" primary>
                Get in touch
              </GlassLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-8 text-xs text-muted">
        <div className="mx-auto flex max-w-[980px] flex-col gap-2 border-t border-hairline pt-5 sm:flex-row sm:justify-between">
          <p>Copyright © 2026 Portfolio. All rights reserved.</p>
          <ul className="flex gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
