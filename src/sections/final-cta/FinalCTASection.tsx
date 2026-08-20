import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FinalCTAContent } from "@/types/final-cta";

export type FinalCTASectionProps = {
  content: FinalCTAContent;
  id?: string;
};

export function FinalCTASection({
  content,
  id,
}: FinalCTASectionProps) {
  const {
    description,
    eyebrow,
    primaryAction,
    secondaryAction,
    title,
  } = content;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} id={id}>
      <Container>
        <div className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-20 xl:py-20 2xl:px-24 2xl:py-24">
          <SectionTitle
            className="min-w-0 break-words xl:max-w-4xl"
            description={description}
            eyebrow={eyebrow}
            headingId={headingId}
            title={title}
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center xl:mt-10 xl:gap-4">
            <Button
              className="w-full min-w-0 max-w-full whitespace-normal break-words text-center sm:w-auto xl:min-h-14 xl:px-8 xl:text-lg"
              href={primaryAction.href}
              size="lg"
            >
              {primaryAction.label}
            </Button>

            {secondaryAction ? (
              <Button
                className="w-full min-w-0 max-w-full whitespace-normal break-words text-center sm:w-auto xl:min-h-14 xl:px-8 xl:text-lg"
                href={secondaryAction.href}
                size="lg"
                variant="secondary"
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
