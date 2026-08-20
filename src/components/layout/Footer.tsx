import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const footerLinkClasses =
  "inline-flex min-h-11 max-w-full items-center whitespace-normal rounded-md px-3 py-2 text-sm font-medium text-muted-text [overflow-wrap:anywhere] transition-colors hover:bg-background hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none md:text-right";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14 lg:py-16 2xl:py-20">
        <div className="grid min-w-0 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24">
          <div className="min-w-0 max-w-xl">
            <Link
              className="inline-block max-w-full rounded-sm font-display text-xl font-semibold tracking-tight text-text [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-2xl"
              href="/"
            >
              {siteConfig.name}
            </Link>

            {siteConfig.description ? (
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-text [overflow-wrap:anywhere] sm:text-base sm:leading-7">
                {siteConfig.description}
              </p>
            ) : null}
          </div>

          {navigationConfig.items.length > 0 ? (
            <nav
              aria-label="Navegação do rodapé"
              className="w-full min-w-0 md:max-w-md md:justify-self-end"
            >
              <ul className="flex min-w-0 flex-col items-start gap-1 md:items-end">
                {navigationConfig.items.map((item) => (
                  <li className="max-w-full" key={item.href}>
                    <a className={footerLinkClasses} href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="mt-10 border-t border-border pt-6 sm:mt-12 lg:mt-14 lg:pt-8">
          <p className="min-w-0 text-sm leading-6 text-muted-text [overflow-wrap:anywhere]">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
