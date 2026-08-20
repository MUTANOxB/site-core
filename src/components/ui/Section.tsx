import type { ComponentPropsWithoutRef } from "react";

export type SectionDensity = "compact" | "regular" | "immersive";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  density?: SectionDensity;
};

const densityClasses: Record<SectionDensity, string> = {
  compact: "py-10 sm:py-12 lg:py-14 xl:py-16 2xl:py-20",
  regular: "py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32",
  immersive: "py-20 sm:py-24 lg:py-28 xl:py-32 2xl:py-36",
};

export function Section({
  children,
  className,
  density = "regular",
  ...props
}: SectionProps) {
  const classes = [densityClasses[density], className]
    .filter(Boolean)
    .join(" ");

  return (
    <section {...props} className={classes}>
      {children}
    </section>
  );
}
