import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { ServicesContent } from "@/types/services";

export type ServicesSectionProps = {
  content: ServicesContent;
  id?: string;
};

export function ServicesSection({ content, id }: ServicesSectionProps) {
  const { description, eyebrow, items, title } = content;
  const headingId = id ? `${id}-title` : undefined;

  return (
    <Section aria-labelledby={headingId} id={id}>
      <Container>
        <SectionTitle
          className="break-words"
          description={description}
          eyebrow={eyebrow}
          headingId={headingId}
          title={title}
        />

        {items.length ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li
                className="min-w-0 rounded-lg border border-border bg-surface p-6"
                key={`${item.title}-${index}`}
              >
                <h3 className="break-words font-display text-xl font-semibold tracking-tight text-text">
                  {item.title}
                </h3>

                {item.description ? (
                  <p className="mt-3 break-words text-base leading-7 text-muted-text">
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </Section>
  );
}
