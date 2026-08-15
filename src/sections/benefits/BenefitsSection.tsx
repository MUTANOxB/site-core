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
    <Section aria-labelledby={headingId} id={id}>
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
                  className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-4 border-b border-border py-6 sm:gap-x-6 sm:py-8 xl:gap-x-8 xl:py-10"
                  key={`${item.title}-${index}`}
                >
                  <span
                    aria-hidden="true"
                    className="pt-1 font-display text-sm font-semibold tabular-nums tracking-[0.12em] text-muted-text xl:pt-2 xl:text-base"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="break-words font-display text-xl font-semibold tracking-tight text-text sm:text-2xl xl:text-3xl">
                      {item.title}
                    </h3>

                    {item.description ? (
                      <p className="mt-3 break-words text-base leading-7 text-muted-text xl:text-lg xl:leading-8">
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
