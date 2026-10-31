/* Joins class names, skipping falsy values. Callers must not pass conflicting utilities (e.g. two `rounded-*`). */
export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
