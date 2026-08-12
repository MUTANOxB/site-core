import type { ComponentPropsWithoutRef, CSSProperties } from "react";

type BadgeStyle = CSSProperties & {
  "--badge-background": string;
  "--badge-border": string;
  "--badge-foreground": string;
  "--badge-radius": string;
};

export type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ children, className, style, ...props }: BadgeProps) {
  const classes = [
    "inline-flex w-fit items-center whitespace-nowrap border px-3 py-1 text-xs font-semibold leading-none [background-color:var(--badge-background)] [border-color:var(--badge-border)] [border-radius:var(--badge-radius)] [color:var(--badge-foreground)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const badgeStyle: BadgeStyle = {
    "--badge-background": "var(--color-surface)",
    "--badge-border": "var(--color-border)",
    "--badge-foreground": "var(--color-muted-text)",
    "--badge-radius": "var(--radius-md)",
    ...style,
  };

  return (
    <span {...props} className={classes} style={badgeStyle}>
      {children}
    </span>
  );
}
