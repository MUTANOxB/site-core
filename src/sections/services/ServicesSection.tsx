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
    <Section
      aria-labelledby={headingId}
      className="border-y border-border bg-surface"
      density="regular"
      id={id}
    >
      <Container>
        <SectionTitle
          className="break-words"
          description={description}
          eyebrow={eyebrow}
          headingId={headingId}
          title={title}
        />

        {items.length ? (
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:mt-16 lg:gap-x-12 lg:gap-y-14 xl:mt-20 xl:gap-x-16 xl:gap-y-16 2xl:gap-x-20">
            {items.map((item, index) => (
              <li
                className="min-w-0 border-t border-border pt-6 sm:pt-7 xl:pt-8"
                key={`${item.title}-${index}`}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-secondary sm:text-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 break-words font-display text-xl font-semibold tracking-tight text-text sm:mt-4 sm:text-2xl xl:text-3xl">
                  {item.title}
                </h3>

                {item.description ? (
                  <p className="mt-2 break-words text-base leading-7 text-muted-text sm:mt-3 xl:text-lg xl:leading-8">
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
