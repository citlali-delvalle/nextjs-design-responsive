import { Button } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import type { LinkItem } from "@/components/types";

type ButtonGroupProps = {
  actions: LinkItem[];
  className?: string;
};

export function ButtonGroup({ actions, className }: ButtonGroupProps) {
  return (
    <div className={cx("flex gap-3", className)}>
      {actions.map((action) => (
        <Button key={action.label} href={action.href} variant={action.primary ? "primary" : "secondary"}>
          {action.label}
        </Button>
      ))}
    </div>
  );
}
