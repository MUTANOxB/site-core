import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
    <Section aria-labelledby={headingId} id={id}>
      <Container>
        <div
          className={[
            "grid items-center gap-10 lg:gap-16 xl:gap-24",
            hasMedia
              ? "lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={hasMedia ? "min-w-0" : "max-w-3xl"}>
            <SectionTitle
              description={description}
              eyebrow={eyebrow}
              headingId={headingId}
              title={title}
            />

            {paragraphs?.length ? (
              <div className="mt-6 space-y-4 break-words text-base leading-7 text-muted-text sm:text-lg xl:mt-8 xl:space-y-5 xl:text-xl xl:leading-8">
                {paragraphs.map((paragraph, index) => (
                  <p key={`${index}-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>

          {hasMedia ? <div className="min-w-0">{media}</div> : null}
        </div>
      </Container>
    </Section>
  );
}
