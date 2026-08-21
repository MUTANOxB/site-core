import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { GalleryContent } from "@/types/gallery";

export type GallerySectionProps = {
  content: GalleryContent;
  id?: string;
};

type SlotConfig = {
  aspectClass: string;
  offsetClass?: string;
  sizes: string;
  spanClass: string;
};

/**
 * Deterministic editorial mosaic cycle (repeats for every 4 items):
 *
 * Desktop (12 cols):
 *   Slot 0: col-span-8 | aspect-3/2 | Protagonist
 *   Slot 1: col-span-4 | aspect-4/5 | Secondary companion (+1rem offset)
 *   Slot 2: col-span-5 | aspect-1/1 | Secondary anchor
 *   Slot 3: col-span-7 | aspect-4/3 | Counter-protagonist
 *   Pairs: (8 + 4 = 12), (5 + 7 = 12)
 *
 * Tablet (8 cols):
 *   Slot 0: col-span-5 | Slot 1: col-span-3 (5 + 3 = 8)
 *   Slot 2: col-span-3 | Slot 3: col-span-5 (3 + 5 = 8)
 *
 * Mobile (1 col):
 *   Alternating aspects: 4/3 → 1/1 → 4/5 → 3/2
 */
const slotConfigs: SlotConfig[] = [
  {
    aspectClass: "aspect-[4/3] lg:aspect-[3/2]",
    sizes:
      "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(62.5vw - 2.5rem), (max-width: 1279px) calc(66.667vw - 3.5rem), (max-width: 1535px) 56rem, 70rem",
    spanClass: "sm:col-span-5 lg:col-span-8",
  },
  {
    aspectClass: "aspect-square lg:aspect-[4/5]",
    offsetClass: "lg:translate-y-4",
    sizes:
      "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(37.5vw - 2rem), (max-width: 1279px) calc(33.333vw - 2.5rem), (max-width: 1535px) 28rem, 35rem",
    spanClass: "sm:col-span-3 lg:col-span-4",
  },
  {
    aspectClass: "aspect-[4/5] lg:aspect-square",
    sizes:
      "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(37.5vw - 2rem), (max-width: 1279px) calc(41.667vw - 2.5rem), (max-width: 1535px) 35rem, 44rem",
    spanClass: "sm:col-span-3 lg:col-span-5",
  },
  {
    aspectClass: "aspect-[3/2] lg:aspect-[4/3]",
    sizes:
      "(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(62.5vw - 2.5rem), (max-width: 1279px) calc(58.333vw - 3rem), (max-width: 1535px) 49rem, 61rem",
    spanClass: "sm:col-span-5 lg:col-span-7",
  },
];

export function GallerySection({ content, id }: GallerySectionProps) {
  const { description, eyebrow, items, title } = content;
  const headingId = id ? `${id}-title` : undefined;
  const hasItems = Array.isArray(items) && items.length > 0;

  return (
    <Section
      aria-labelledby={headingId}
      className="border-y border-border bg-surface"
      density="regular"
      id={id}
    >
      {/* ── Intro (Contained within 90rem standard container) ───────── */}
      <Container>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-8 sm:items-end sm:gap-x-6 sm:gap-y-0 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          <div className="sm:col-span-5 lg:col-span-8">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-text sm:mb-4">
                {eyebrow}
              </p>
            ) : null}

            <h2
              className="break-words font-display text-3xl font-semibold leading-[1.12] tracking-tight text-text sm:text-4xl sm:leading-[1.1] lg:text-5xl lg:leading-[1.08] xl:text-[3.25rem]"
              id={headingId}
            >
              {title}
            </h2>
          </div>

          {description ? (
            <div className="sm:col-span-3 sm:col-start-6 lg:col-span-4 lg:col-start-9">
              <p className="break-words text-base leading-7 text-muted-text sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                {description}
              </p>
            </div>
          ) : null}
        </div>
      </Container>

      {/* ── Image Field (Local breakout up to ~105rem on large desktop) ─ */}
      {hasItems ? (
        <div
          className="mx-auto mt-10 w-full px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20 xl:px-10"
          style={{ maxWidth: "105rem" }}
        >
          {items.length === 1 ? (
            <div className="mx-auto max-w-5xl">
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[3/2]">
                <Image
                  alt={items[0].alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1535px) 64rem, 80rem"
                  src={items[0].src}
                />
              </div>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-8 sm:gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10">
              {items.map((item, index) => {
                const slot = index % 4;
                const config = slotConfigs[slot];

                return (
                  <li
                    className={`min-w-0 ${config.spanClass} ${config.offsetClass ?? ""}`}
                    key={`${item.src}-${index}`}
                  >
                    <div
                      className={`relative overflow-hidden ${config.aspectClass}`}
                    >
                      <Image
                        alt={item.alt}
                        className="object-cover"
                        fill
                        sizes={config.sizes}
                        src={item.src}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}
    </Section>
  );
}
