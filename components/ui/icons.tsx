export function PlayIcon() {
  return (
    // ml-0.5 optically centers the triangle in a round button
    <svg aria-hidden viewBox="0 0 16 16" className="ml-0.5 size-4 fill-current">
      <path d="M4.5 2.9v10.2a.9.9 0 0 0 1.37.77l8.2-5.1a.9.9 0 0 0 0-1.54l-8.2-5.1a.9.9 0 0 0-1.37.77Z" />
    </svg>
  );
}

export function PauseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4 fill-current">
      <rect x="3.5" y="2.5" width="3" height="11" rx="1" />
      <rect x="9.5" y="2.5" width="3" height="11" rx="1" />
    </svg>
  );
}

/* Two bars that cross into an X while the surrounding `details.group` is open */
export function MenuIcon() {
  return (
    <span aria-hidden className="flex w-4 flex-col gap-[5px]">
      <span className="h-px bg-foreground transition-transform group-open:translate-y-[3px] group-open:rotate-45" />
      <span className="h-px bg-foreground transition-transform group-open:-translate-y-[3px] group-open:-rotate-45" />
    </span>
  );
}
