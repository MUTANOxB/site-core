import type { NavigationConfig } from "@/types/navigation";

export const navigationConfig: NavigationConfig = {
  items: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
  ],
  cta: { label: "Contato", href: "#cta-final" },
};
