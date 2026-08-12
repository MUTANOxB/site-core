import { siteConfig } from "@/config/site";
import { AboutSection } from "@/sections/about/AboutSection";
import { HeroSection } from "@/sections/hero/HeroSection";

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
    </main>
  );
}
