import type { ComponentPropsWithoutRef, CSSProperties } from "react";

import { themeConfig } from "@/config/theme";

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
    "--badge-background": themeConfig.colors.surface,
    "--badge-border": themeConfig.colors.border,
    "--badge-foreground": themeConfig.colors.mutedText,
    "--badge-radius": themeConfig.radius,
    ...style,
  };

  return (
    <span {...props} className={classes} style={badgeStyle}>
      {children}
    </span>
  );
}
