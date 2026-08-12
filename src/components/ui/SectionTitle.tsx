import type { ComponentPropsWithoutRef, CSSProperties } from "react";

export type SectionTitleAlign = "left" | "center";

export type SectionTitleProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "children" | "title"
> & {
  align?: SectionTitleAlign;
  description?: string;
  eyebrow?: string;
  headingId?: string;
  title: string;
};

type SectionTitleStyle = CSSProperties & {
  "--section-title-accent": string;
  "--section-title-font": string;
  "--section-title-muted": string;
  "--section-title-text": string;
};

export function SectionTitle({
  align = "left",
  className,
  description,
  eyebrow,
  headingId,
  style,
  title,
  ...props
}: SectionTitleProps) {
  const classes = [
    "max-w-2xl",
    align === "center" ? "mx-auto text-center" : "text-left",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const sectionTitleStyle: SectionTitleStyle = {
    "--section-title-accent": "var(--color-primary)",
    "--section-title-font": "var(--font-display)",
    "--section-title-muted": "var(--color-muted-text)",
    "--section-title-text": "var(--color-text)",
    ...style,
  };

  return (
    <div {...props} className={classes} style={sectionTitleStyle}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] [color:var(--section-title-accent)]">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className="text-3xl font-bold tracking-tight [color:var(--section-title-text)] [font-family:var(--section-title-font)] sm:text-4xl"
        id={headingId}
      >
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 [color:var(--section-title-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
