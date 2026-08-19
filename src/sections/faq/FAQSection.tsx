import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { FAQContent } from "@/types/faq";

export type FAQSectionProps = {
  content: FAQContent;
  id?: string;
};

export function FAQSection({ content, id }: FAQSectionProps) {
  const { description, eyebrow, items, title } = content;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} id={id}>
      <Container>
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            className="min-w-0 break-words"
            description={description}
            eyebrow={eyebrow}
            headingId={headingId}
            title={title}
          />

          {items.length ? (
            <ul className="mt-10 list-none border-t border-border xl:mt-14">
              {items.map((item, index) => (
                <li
                  className="min-w-0 border-b border-border"
                  key={`${item.question}-${index}`}
                >
                  <details className="group min-w-0">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-5 text-left font-display text-lg font-semibold tracking-tight text-text transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none sm:min-h-20 sm:py-6 sm:text-xl xl:min-h-24 xl:py-8 xl:text-2xl [&::-webkit-details-marker]:hidden">
                      <span className="min-w-0 break-words">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center overflow-hidden text-2xl font-light leading-none text-primary xl:size-10 xl:text-3xl"
                      >
                        <span className="block transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">
                          +
                        </span>
                      </span>
                    </summary>

                    <p className="max-w-3xl break-words pb-6 pr-12 text-base leading-7 text-muted-text sm:pb-8 sm:text-lg sm:leading-8 xl:pb-10 xl:pr-16 xl:text-xl xl:leading-9">
                      {item.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
