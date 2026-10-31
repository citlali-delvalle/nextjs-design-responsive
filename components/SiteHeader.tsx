import { MobileMenu } from "@/components/MobileMenu";
import { GlassCard } from "@/components/ui/GlassCard";
import type { LinkItem } from "@/components/types";

type SiteHeaderProps = {
  brand: LinkItem;
  links: LinkItem[];
  /** Accessible name for the mobile menu toggle */
  menuLabel: string;
};

/* Floating Liquid Glass nav */
export function SiteHeader({ brand, links, menuLabel }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <GlassCard
        as="nav"
        radius="full"
        className="mx-auto flex h-12 max-w-[680px] items-center justify-between pr-2 pl-5 text-sm"
      >
        <a href={brand.href} className="font-semibold tracking-tight">
          {brand.label}
        </a>
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-full px-4 py-2 text-foreground/80 transition-colors hover:bg-white/60 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <MobileMenu links={links} label={menuLabel} className="sm:hidden" />
      </GlassCard>
    </header>
  );
}
