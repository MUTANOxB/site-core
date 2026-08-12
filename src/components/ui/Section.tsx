import type { ComponentPropsWithoutRef } from "react";

export type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ children, className, ...props }: SectionProps) {
  const classes = ["py-16 sm:py-20 lg:py-24", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section {...props} className={classes}>
      {children}
    </section>
  );
}
