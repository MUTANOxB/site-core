import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { BenefitsContent } from "@/types/benefits";

export type BenefitsSectionProps = {
  content: BenefitsContent;
  id?: string;
};

export function BenefitsSection({ content, id }: BenefitsSectionProps) {
  const { description, eyebrow, items, title } = content;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} density="regular" id={id}>
      <Container>
        <div
          className={
            items.length
              ? "grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-24 2xl:gap-32"
              : undefined
          }
        >
          <SectionTitle
            className="min-w-0 break-words"
            description={description}
            eyebrow={eyebrow}
            headingId={headingId}
            title={title}
          />

          {items.length ? (
            <ul className="min-w-0 border-t border-border">
              {items.map((item, index) => (
                <li
                  className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-4 border-b border-border py-5 sm:gap-x-6 sm:py-6 lg:py-7 xl:gap-x-8 xl:py-8"
                  key={`${item.title}-${index}`}
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 font-display text-xs font-semibold tabular-nums tracking-[0.14em] text-muted-text sm:text-sm xl:pt-1.5 xl:text-base"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="break-words font-display text-lg font-semibold tracking-tight text-text sm:text-xl xl:text-2xl">
                      {item.title}
                    </h3>

                    {item.description ? (
                      <p className="mt-2 break-words text-sm leading-6 text-muted-text sm:mt-2.5 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
