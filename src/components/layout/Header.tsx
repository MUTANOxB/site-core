import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { resolveWhatsAppUrl } from "@/lib/whatsapp";

const navigationLinkClasses =
  "relative inline-flex min-h-10 items-center whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-text transition-colors hover:text-text after:absolute after:inset-x-3 after:bottom-1 after:h-px after:scale-x-0 after:bg-secondary after:transition-transform hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:after:transition-none lg:min-h-11 lg:px-4 lg:text-base";

export function Header() {
  const globalCta = {
    ...navigationConfig.cta,
    href: resolveWhatsAppUrl({
      phone: siteConfig.contact.whatsapp,
      message: siteConfig.contact.whatsappMessage,
      fallbackHref: navigationConfig.cta.href,
    }),
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <a
        className="absolute left-4 top-2 z-10 -translate-y-16 rounded-md bg-text px-4 py-2 text-sm font-semibold text-primary-contrast transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
        href="#main-content"
      >
        Pular para o conteúdo
      </a>

      {/* Mobile / Tablet: flex layout com marca + hamburger */}
      <Container className="flex min-h-16 items-center justify-between gap-4 lg:hidden">
        <Link
          aria-label={siteConfig.name + " — página inicial"}
          className="min-w-0 rounded-sm font-sans text-lg font-semibold tracking-tight text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          href="/"
        >
          <span className="block break-words">{siteConfig.name}</span>
        </Link>

        <MobileMenu cta={globalCta} items={navigationConfig.items} />
      </Container>

      {/* Desktop lg+: grid editorial de 12 colunas compartilhado com Hero */}
      <Container className="hidden min-h-20 items-center lg:grid lg:grid-cols-12 lg:gap-x-6 2xl:min-h-24 2xl:gap-x-8">
        {/* Marca: cols 1–3 */}
        <div className="col-span-3 flex min-w-0 items-center">
          <Link
            aria-label={siteConfig.name + " — página inicial"}
            className="min-w-0 rounded-sm font-sans text-xl font-semibold tracking-tight text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary 2xl:text-2xl"
            href="/"
          >
            <span className="block break-words">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Nav: cols 4–10 — centralizada no campo */}
        <nav
          aria-label="Navegação principal"
          className="col-span-7 flex justify-center"
        >
          <ul className="flex items-center gap-1 2xl:gap-2">
            {navigationConfig.items.map((item) => (
              <li key={item.href}>
                <a className={navigationLinkClasses} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA: cols 11–12 — alinhado à direita */}
        <div className="col-span-2 flex items-center justify-end">
          <Button
            className="lg:px-5 lg:text-base 2xl:min-h-12 2xl:px-6"
            href={globalCta.href}
            size="md"
          >
            {globalCta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
