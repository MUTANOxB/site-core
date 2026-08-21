import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { AboutContent } from "@/types/about";

export type AboutSectionProps = AboutContent & {
  id?: string;
  /**
   * A mídia deve fornecer sua própria descrição acessível ou ser decorativa.
   */
  media?: ReactNode;
};

export function AboutSection({
  description,
  eyebrow,
  id,
  media,
  paragraphs,
  title,
}: AboutSectionProps) {
  const hasMedia = Boolean(media);
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} density="regular" id={id}>
      <Container>
        {eyebrow ? (
          <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-text sm:mb-8 lg:mb-10">
            {eyebrow}
          </p>
        ) : null}

        <div className="grid grid-cols-4 gap-y-8 sm:grid-cols-8 sm:items-start sm:gap-x-6 sm:gap-y-0 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          <div className="col-span-4 sm:col-span-4 lg:col-span-6 xl:col-span-6">
            <h2
              className="break-words font-display text-3xl font-bold leading-[1.15] tracking-tight text-text sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.12] xl:text-5xl xl:leading-[1.12] 2xl:text-6xl 2xl:leading-[1.1]"
              id={headingId}
            >
              {title}
            </h2>
          </div>

          <div className="col-span-4 pl-4 sm:col-span-4 sm:col-start-5 sm:pl-0 lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
            {description ? (
              <p className="text-lg font-medium leading-relaxed text-text sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-8">
                {description}
              </p>
            ) : null}

            {paragraphs?.length ? (
              <div
                className={[
                  "space-y-4 text-base leading-7 text-muted-text sm:text-base sm:leading-7 lg:text-lg lg:leading-8",
                  description ? "mt-6 sm:mt-6 lg:mt-8" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {paragraphs.map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>

          {hasMedia ? (
            <div className="col-span-4 mt-10 min-w-0 sm:col-span-8 sm:mt-12 lg:col-span-12 lg:mt-16 xl:mt-20">
              {media}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
