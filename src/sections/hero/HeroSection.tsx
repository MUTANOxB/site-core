import type { ReactNode } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { HeroContent, HeroVariant } from "@/types/hero";

export type HeroSectionProps = HeroContent & {
  id?: string;
  /**
   * A mídia deve fornecer sua própria descrição acessível ou ser decorativa.
   */
  media?: ReactNode;
  variant?: HeroVariant;
};

export function HeroSection({
  description,
  eyebrow,
  id,
  media,
  primaryAction,
  secondaryAction,
  title,
  variant = "centered",
}: HeroSectionProps) {
  const hasActions = primaryAction || secondaryAction;
  const hasMedia = Boolean(media);
  const isCentered = variant === "centered";

  return (
    <Section id={id}>
      <Container>
        <div
          className={[
            "grid items-center gap-10 lg:gap-16",
            variant === "split" && hasMedia ? "lg:grid-cols-2" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
              hasMedia ? "min-w-0" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow ? (
              <Badge className="max-w-full">
                <span className="min-w-0 whitespace-normal break-words text-left leading-5">
                  {eyebrow}
                </span>
              </Badge>
            ) : null}

            <h1
              className={[
                "break-words font-display text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl",
                eyebrow ? "mt-5" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {title}
            </h1>

            {description ? (
              <p
                className={[
                  "mt-5 max-w-2xl text-lg leading-8 text-muted-text sm:text-xl",
                  isCentered ? "mx-auto" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {description}
              </p>
            ) : null}

            {hasActions ? (
              <div
                className={[
                  "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
                  isCentered ? "sm:justify-center" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {primaryAction ? (
                  <Button
                    className="w-full sm:w-auto"
                    href={primaryAction.href}
                    rel={
                      primaryAction.external ? "noopener noreferrer" : undefined
                    }
                    size="lg"
                    target={primaryAction.external ? "_blank" : undefined}
                  >
                    {primaryAction.label}
                    {primaryAction.external ? (
                      <>
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(abre em nova aba)</span>
                      </>
                    ) : null}
                  </Button>
                ) : null}

                {secondaryAction ? (
                  <Button
                    className="w-full sm:w-auto"
                    href={secondaryAction.href}
                    rel={
                      secondaryAction.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    size="lg"
                    target={secondaryAction.external ? "_blank" : undefined}
                    variant="secondary"
                  >
                    {secondaryAction.label}
                    {secondaryAction.external ? (
                      <>
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(abre em nova aba)</span>
                      </>
                    ) : null}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {hasMedia ? (
            <div
              className={
                isCentered ? "mx-auto w-full max-w-4xl" : "min-w-0"
              }
            >
              {media}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
