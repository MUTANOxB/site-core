import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { LocationContent } from "@/types/location";

export type LocationSectionProps = {
  content: LocationContent;
  id?: string;
  /**
   * A mídia deve fornecer sua própria descrição acessível ou ser decorativa.
   */
  media?: ReactNode;
};

export function LocationSection({
  content,
  id,
  media,
}: LocationSectionProps) {
  const { address, description, directions, eyebrow, title } = content;
  const hasMedia = Boolean(media);
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section
      aria-labelledby={headingId}
      className="border-y border-border bg-surface"
      id={id}
    >
      <Container>
        <SectionTitle
          className="min-w-0 break-words"
          description={description}
          eyebrow={eyebrow}
          headingId={headingId}
          title={title}
        />

        <div
          className={[
            "mt-10 xl:mt-14",
            hasMedia
              ? "grid items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24 2xl:gap-32"
              : "max-w-3xl",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="min-w-0 border-y border-border py-8 sm:py-10 lg:py-12 xl:py-14">
            <address className="max-w-xl whitespace-pre-line break-words font-display text-2xl font-semibold leading-snug tracking-tight text-text not-italic sm:text-3xl xl:text-4xl xl:leading-tight">
              {address}
            </address>

            {directions ? (
              <div className="mt-8 xl:mt-10">
                <Button
                  className="w-full max-w-full whitespace-normal break-words text-center sm:w-auto"
                  href={directions.href}
                  size="lg"
                >
                  {directions.label}
                </Button>
              </div>
            ) : null}
          </div>

          {hasMedia ? (
            <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg border border-border bg-background [&>*]:h-full [&>*]:w-full [&>*]:max-w-full [&>iframe]:border-0 [&>img]:object-cover">
              {media}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
