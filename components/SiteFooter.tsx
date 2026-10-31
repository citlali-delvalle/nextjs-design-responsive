import type { LinkItem } from "@/components/types";

type SiteFooterProps = {
  copyright: string;
  links: LinkItem[];
};

export function SiteFooter({ copyright, links }: SiteFooterProps) {
  return (
    <footer className="px-6 pb-8 text-xs text-muted">
      <div className="mx-auto flex max-w-[980px] flex-col gap-2 border-t border-hairline pt-5 sm:flex-row sm:justify-between">
        <p>{copyright}</p>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
