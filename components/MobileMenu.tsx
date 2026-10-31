import { cx } from "@/components/ui/cx";
import { GlassCard } from "@/components/ui/GlassCard";
import { MenuIcon } from "@/components/ui/icons";
import type { LinkItem } from "@/components/types";

type MobileMenuProps = {
  links: LinkItem[];
  /** Accessible name for the toggle */
  label: string;
  /** Visibility is up to the parent, e.g. `sm:hidden` to show it only on phones */
  className?: string;
};

/* Menu toggle built on <details>, so it works without JavaScript. Position it inside a relative parent. */
export function MobileMenu({ links, label, className }: MobileMenuProps) {
  return (
    <details className={cx("group", className)}>
      <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full [&::-webkit-details-marker]:hidden">
        <span className="sr-only">{label}</span>
        <MenuIcon />
      </summary>
      <GlassCard
        as="ul"
        radius="md"
        className="absolute inset-x-0 top-14 flex flex-col p-3 text-[22px] font-semibold"
      >
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="block rounded-2xl px-4 py-2 hover:bg-white/60">
              {link.label}
            </a>
          </li>
        ))}
      </GlassCard>
    </details>
  );
}
