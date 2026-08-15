import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { TestimonialsContent } from "@/types/testimonials";

export type TestimonialsSectionProps = {
  content: TestimonialsContent;
  id?: string;
};

export function TestimonialsSection({
  content,
  id,
}: TestimonialsSectionProps) {
  const { description, eyebrow, items, title } = content;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} id={id}>
      <Container>
        <SectionTitle
          className="min-w-0 break-words"
          description={description}
          eyebrow={eyebrow}
          headingId={headingId}
          title={title}
        />

        {items.length ? (
          <ul className="mt-10 grid border-t border-border lg:grid-cols-2 lg:gap-x-16 xl:mt-14 xl:gap-x-24 2xl:gap-x-32">
            {items.map((item, index) => (
              <li
                className="min-w-0 border-b border-border py-8 sm:py-10 xl:py-12"
                key={`${item.name}-${index}`}
              >
                <figure className="min-w-0">
                  <blockquote className="min-w-0">
                    <span
                      aria-hidden="true"
                      className="block font-display text-4xl leading-none text-primary xl:text-5xl"
                    >
                      “
                    </span>

                    <p className="mt-4 break-words font-display text-2xl font-semibold leading-snug tracking-tight text-text sm:text-3xl xl:text-4xl xl:leading-tight">
                      {item.quote}
                    </p>
                  </blockquote>

                  <figcaption className="mt-8 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between xl:mt-10">
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-text xl:text-lg">
                        {item.name}
                      </p>

                      {item.role ? (
                        <p className="mt-1 break-words text-sm leading-6 text-muted-text xl:text-base">
                          {item.role}
                        </p>
                      ) : null}
                    </div>

                    {item.rating !== undefined ? (
                      <span className="shrink-0 text-sm font-semibold tabular-nums text-muted-text xl:text-base">
                        <span aria-hidden="true">{item.rating}/5</span>
                        <span className="sr-only">
                          Avaliação: {item.rating} de 5
                        </span>
                      </span>
                    ) : null}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </Section>
  );
}
