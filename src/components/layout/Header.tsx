import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const navigationLinkClasses =
  "inline-flex min-h-10 items-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-muted-text transition-colors hover:bg-surface hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none";

export function Header() {
  return (
    <header className="relative z-50 border-b border-border bg-background">
      <a
        className="absolute left-4 top-2 z-10 -translate-y-16 rounded-md bg-text px-4 py-2 text-sm font-semibold text-background transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
        href="#main-content"
      >
        Pular para o conteúdo
      </a>

      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          aria-label={siteConfig.name + " - página inicial"}
          className="min-w-0 rounded-sm font-display text-lg font-semibold tracking-tight text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href="/"
        >
          <span className="block truncate">{siteConfig.name}</span>
        </Link>

        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-1">
              {navigationConfig.items.map((item) => (
                <li key={item.href}>
                  <a className={navigationLinkClasses} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button href={navigationConfig.cta.href} size="sm">
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
