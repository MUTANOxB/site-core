import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const navigationLinkClasses =
  "inline-flex min-h-10 items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-muted-text transition-colors hover:bg-surface hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none lg:min-h-11 lg:px-4 lg:text-base";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        className="absolute left-4 top-2 z-10 -translate-y-16 rounded-md bg-text px-4 py-2 text-sm font-semibold text-background transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
        href="#main-content"
      >
        Pular para o conteúdo
      </a>

      <Container className="flex min-h-16 items-center justify-between gap-4 lg:min-h-20 lg:gap-8 2xl:min-h-24 2xl:gap-10">
        <Link
          aria-label={siteConfig.name + " - página inicial"}
          className="min-w-0 rounded-sm font-display text-lg font-semibold tracking-tight text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:text-xl 2xl:text-2xl"
          href="/"
        >
          <span className="block truncate">{siteConfig.name}</span>
        </Link>

        <div className="hidden shrink-0 items-center gap-6 lg:flex lg:gap-8 2xl:gap-10">
          <nav aria-label="Navegação principal">
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

          <Button
            className="lg:px-5 lg:text-base 2xl:min-h-12 2xl:px-6"
            href={navigationConfig.cta.href}
            size="md"
          >
            {navigationConfig.cta.label}
          </Button>
        </div>

        <MobileMenu
          cta={navigationConfig.cta}
          items={navigationConfig.items}
        />
      </Container>
    </header>
  );
}
