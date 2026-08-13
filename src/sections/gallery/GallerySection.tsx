import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { GalleryContent } from "@/types/gallery";

export type GallerySectionProps = {
  content: GalleryContent;
  id?: string;
};

export function GallerySection({ content, id }: GallerySectionProps) {
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
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {items.map((item, index) => (
              <li className="min-w-0" key={`${item.src}-${index}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
                  <Image
                    alt={item.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.25rem), (max-width: 1152px) calc(33vw - 2rem), 22rem"
                    src={item.src}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </Section>
  );
}
