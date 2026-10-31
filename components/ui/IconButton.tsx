import { Button, type ButtonProps } from "@/components/ui/Button";

type IconButtonProps = {
  /** Accessible name. The button has no visible text, so this is required. */
  label: string;
  /** The glyph, usually an SVG icon */
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
};

/* Round glass button for a single glyph. A link when given an `href`, otherwise a <button>. */
export function IconButton({ label, href, onClick, ...props }: IconButtonProps) {
  return href !== undefined ? (
    <Button size="icon" aria-label={label} href={href} onClick={onClick} {...props} />
  ) : (
    <Button size="icon" aria-label={label} onClick={onClick} {...props} />
  );
}
