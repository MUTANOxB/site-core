import { siteConfig } from "@/config/site";
import { AboutSection } from "@/sections/about/AboutSection";
import { HeroSection } from "@/sections/hero/HeroSection";
import { ServicesSection } from "@/sections/services/ServicesSection";
import type { ServicesContent } from "@/types/services";

const servicesContent: ServicesContent = {
  eyebrow: "Serviços",
  title: "Soluções adaptadas a diferentes necessidades",
  description:
    "Uma estrutura flexível para apresentar serviços de forma clara e objetiva.",
  items: [
    {
      title: "Planejamento",
      description:
        "Estruturação da experiência e organização das informações.",
    },
    {
      title: "Implementação",
      description:
        "Construção de interfaces rápidas, responsivas e acessíveis.",
    },
    {
      title: "Personalização",
      description:
        "Adaptação visual e estrutural para diferentes identidades.",
    },
    {
      title: "Evolução",
      description:
        "Base preparada para receber novas funcionalidades quando necessário.",
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection
        description={siteConfig.description}
        id="inicio"
        title={siteConfig.name}
        variant="centered"
      />
      <AboutSection
        description="Uma estrutura reutilizável para criar experiências digitais consistentes sem limitar a identidade de cada projeto."
        eyebrow="Sobre"
        id="sobre"
        media={
          <div
            aria-hidden="true"
            className="aspect-[4/3] w-full rounded-lg border border-border bg-surface"
          />
        }
        paragraphs={[
          "Cada projeto pode combinar conteúdo e identidade visual próprios sobre uma fundação clara, responsiva e acessível.",
          "A estrutura acompanha novas necessidades sem antecipar complexidade ou comprometer a manutenção.",
        ]}
        title="Uma base construída para evoluir"
      />
      <ServicesSection content={servicesContent} id="servicos" />
    </main>
  );
}
