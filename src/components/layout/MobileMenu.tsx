"use client";

import { useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { NavigationItem } from "@/types/navigation";

interface MobileMenuProps {
  items: NavigationItem[];
  cta: NavigationItem;
}

const navigationLinkClasses =
  "flex min-h-11 items-center rounded-md px-3 py-2 font-medium text-muted-text transition-colors hover:bg-surface hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none";

export function MobileMenu({ cta, items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 64rem)");

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    desktopMediaQuery.addEventListener("change", handleBreakpointChange);

    return () =>
      desktopMediaQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={
          isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
        }
        className="inline-flex size-11 items-center justify-center rounded-md text-text transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
        onClick={() => setIsOpen((currentState) => !currentState)}
        type="button"
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M6 6 18 18M18 6 6 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>

      <div
        className={[
          "absolute inset-x-0 top-full border-b border-border bg-background shadow-default lg:hidden",
          isOpen ? "block" : "hidden",
        ].join(" ")}
        id={menuId}
      >
        <Container className="py-4">
          <nav aria-label="Navegação principal">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    className={navigationLinkClasses}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button className="w-full" href={cta.href} onClick={closeMenu}>
                  {cta.label}
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
}
