import type { ReactNode } from "react";

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

  /* ------------------------------------------------------------------ */
  /* VARIANTE SPLIT — composição editorial assimétrica                   */
  /*                                                                     */
  /* Única malha CSS Grid responsiva com exatamente UM ÚNICO <h1>:       */
  /*                                                                     */
  /* Mobile (< sm / < 640px): 4 colunas                                  */
  /*   - H1: col-span-4 (linha 1, largura útil completa)                 */
  /*   - Rail: col-span-4 pl-4 (linha 2, abaixo com leve inset)          */
  /*                                                                     */
  /* Tablet (sm / 640px–1023px): 8 colunas                               */
  /*   - H1: sm:col-span-5                                               */
  /*   - Rail: sm:col-span-3 sm:col-start-6 sm:pl-0                      */
  /*                                                                     */
  /* Desktop (lg+ / 1024px+): 12 colunas                                 */
  /*   - H1: lg:col-span-7 xl:col-span-8                                 */
  /*   - Rail: lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9 */
  /*                                                                     */
  /* Sem mídia: densidade regular evita vazio excessivo inferior.        */
  /* Com mídia: densidade immersive para acomodar a mídia naturalmente.  */
  /* ------------------------------------------------------------------ */
  if (!isCentered) {
    return (
      <Section
        className={
          hasMedia
            ? undefined
            : "pb-14 sm:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28"
        }
        density={hasMedia ? "immersive" : "regular"}
        id={id}
      >
        <Container>
          {/* Grid editorial aberto com assimetria intencional */}
          <div className="grid grid-cols-4 gap-y-10 sm:grid-cols-8 sm:items-start sm:gap-x-8 sm:gap-y-0 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
            {/* Campo do H1 dominante — ocupa a maior parte da malha */}
            <div className="col-span-4 animate-hero-heading sm:col-span-5 lg:col-span-7 xl:col-span-8">
              {eyebrow ? (
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-text sm:mb-6 lg:mb-8">
                  {eyebrow}
                </p>
              ) : null}

              <h1 className="break-words font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.04] xl:text-[4.5rem] xl:leading-[1.02] 2xl:text-[5.25rem]">
                {title}
              </h1>
            </div>

            {/* Rail editorial integrado — sem caixa/card, estruturado por regra e assimetria */}
            <div className="col-span-4 animate-hero-rail pt-2 sm:col-span-3 sm:col-start-6 sm:pt-4 lg:col-span-5 lg:col-start-8 lg:pt-6 xl:col-span-4 xl:col-start-9 xl:pt-8">
              {/* Regra gráfica e índice editorial decorativo */}
              <div
                aria-hidden="true"
                className="mb-5 border-t border-border pt-3 sm:mb-6 sm:pt-4"
              >
                <span className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-muted-text">
                  01
                </span>
              </div>

              {description ? (
                <p className="max-w-md text-base leading-relaxed text-muted-text sm:text-lg sm:leading-8">
                  {description}
                </p>
              ) : null}

              {hasActions ? (
                <div
                  className={[
                    "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
                    description ? "mt-6 sm:mt-8" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {primaryAction ? (
                    <Button
                      className="w-full sm:w-auto sm:whitespace-nowrap"
                      href={primaryAction.href}
                      rel={
                        primaryAction.external
                          ? "noopener noreferrer"
                          : undefined
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
                      className="inline-flex w-full items-center justify-center gap-1.5 sm:w-auto sm:whitespace-nowrap"
                      href={secondaryAction.href}
                      rel={
                        secondaryAction.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      size="lg"
                      target={secondaryAction.external ? "_blank" : undefined}
                      variant="ghost"
                    >
                      <span>{secondaryAction.label}</span>
                      {secondaryAction.external ? (
                        <>
                          <span aria-hidden="true">↗</span>
                          <span className="sr-only">(abre em nova aba)</span>
                        </>
                      ) : (
                        <span aria-hidden="true">→</span>
                      )}
                    </Button>
                  ) : null}
                </div>
              ) : null}

              {/* Mídia no rail desktop (lg+) */}
              {hasMedia ? (
                <div className="mt-8 hidden min-w-0 lg:block">{media}</div>
              ) : null}
            </div>

            {/* Mídia abaixo das ações no mobile/tablet (< lg) */}
            {hasMedia ? (
              <div className="col-span-4 min-w-0 sm:col-span-8 lg:hidden">
                {media}
              </div>
            ) : null}
          </div>
        </Container>
      </Section>
    );
  }

  /* ------------------------------------------------------------------ */
  /* VARIANTE CENTERED — preservada sem alteração estrutural             */
  /* ------------------------------------------------------------------ */
  return (
    <Section id={id}>
      <Container>
        <div className="grid items-center gap-10 lg:gap-16 lg:py-8 xl:gap-20 xl:py-12 2xl:gap-24 2xl:py-16">
          <div
            className={[
              "mx-auto max-w-5xl text-center animate-hero-heading",
              hasMedia ? "min-w-0" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow ? (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-text">
                {eyebrow}
              </p>
            ) : null}

            <h1
              className={[
                "break-words font-display text-4xl font-semibold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl",
                "xl:text-7xl xl:leading-[1.04]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {title}
            </h1>

            {description ? (
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-text sm:text-xl xl:mt-6 xl:max-w-3xl">
                {description}
              </p>
            ) : null}

            {hasActions ? (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap xl:mt-10 xl:gap-4">
                {primaryAction ? (
                  <Button
                    className="w-full sm:w-auto sm:whitespace-nowrap xl:min-h-14 xl:px-8 xl:text-lg"
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
                    className="inline-flex w-full items-center justify-center gap-1.5 sm:w-auto sm:whitespace-nowrap xl:min-h-14 xl:px-8 xl:text-lg"
                    href={secondaryAction.href}
                    rel={
                      secondaryAction.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    size="lg"
                    target={secondaryAction.external ? "_blank" : undefined}
                    variant="ghost"
                  >
                    <span>{secondaryAction.label}</span>
                    {secondaryAction.external ? (
                      <>
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(abre em nova aba)</span>
                      </>
                    ) : (
                      <span aria-hidden="true">→</span>
                    )}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          {hasMedia ? (
            <div className="mx-auto w-full max-w-6xl min-w-0">{media}</div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
