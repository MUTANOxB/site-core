import { siteConfig } from "@/config/site";
import { AboutSection } from "@/sections/about/AboutSection";
import { BenefitsSection } from "@/sections/benefits/BenefitsSection";
import { FAQSection } from "@/sections/faq/FAQSection";
import { GallerySection } from "@/sections/gallery/GallerySection";
import { HeroSection } from "@/sections/hero/HeroSection";
import { LocationSection } from "@/sections/location/LocationSection";
import { ServicesSection } from "@/sections/services/ServicesSection";
import { TestimonialsSection } from "@/sections/testimonials/TestimonialsSection";
import type { BenefitsContent } from "@/types/benefits";
import type { FAQContent } from "@/types/faq";
import type { GalleryContent } from "@/types/gallery";
import type { LocationContent } from "@/types/location";
import type { ServicesContent } from "@/types/services";
import type { TestimonialsContent } from "@/types/testimonials";

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

const benefitsContent: BenefitsContent = {
  eyebrow: "Benefícios",
  title: "Uma estrutura pensada para crescer com o projeto",
  description:
    "Decisões simples na base ajudam a manter qualidade, consistência e liberdade para evoluir.",
  items: [
    {
      title: "Estrutura flexível",
      description:
        "Componentes podem ser combinados sem reconstruir toda a experiência.",
    },
    {
      title: "Experiência consistente",
      description:
        "Padrões de interface ajudam a manter navegação e leitura previsíveis.",
    },
    {
      title: "Evolução gradual",
      description:
        "Novas funcionalidades entram somente quando existe necessidade real.",
    },
    {
      title: "Manutenção simples",
      description:
        "Responsabilidades bem separadas facilitam ajustes e futuras melhorias.",
    },
  ],
};

const galleryContent: GalleryContent = {
  eyebrow: "Galeria",
  title: "Uma visão do trabalho em diferentes contextos",
  description:
    "Uma estrutura visual preparada para destacar imagens com clareza e consistência.",
  items: [
    {
      src: "/gallery/gallery-01.svg",
      alt: "Composição abstrata com blocos e círculo em tons terrosos neutros",
    },
    {
      src: "/gallery/gallery-02.svg",
      alt: "Composição abstrata com formas triangulares e círculo claro",
    },
    {
      src: "/gallery/gallery-03.svg",
      alt: "Composição abstrata com faixas diagonais e círculo central",
    },
    {
      src: "/gallery/gallery-04.svg",
      alt: "Composição abstrata com círculos sobrepostos em tons de cinza",
    },
  ],
};

const testimonialsContent: TestimonialsContent = {
  eyebrow: "Avaliações",
  title: "Experiências que ajudam a construir confiança",
  description:
    "A estrutura está preparada para receber relatos reais de clientes de forma clara e responsável.",
  items: [
    {
      quote:
        "Espaço reservado para um depoimento real sobre atendimento, experiência ou resultado.",
      name: "Cliente exemplo",
      role: "Depoimento de demonstração",
    },
    {
      quote:
        "Este bloco demonstra como avaliações reais poderão aparecer sem competir com o restante do conteúdo.",
      name: "Cliente exemplo 02",
    },
  ],
};

const faqContent: FAQContent = {
  eyebrow: "Perguntas frequentes",
  title: "Informações importantes em um só lugar",
  description:
    "Uma estrutura simples para esclarecer dúvidas recorrentes antes do contato.",
  items: [
    {
      question: "Como as informações deste site podem ser atualizadas?",
      answer:
        "O conteúdo é mantido separado dos componentes para facilitar futuras alterações sem reconstruir a interface.",
    },
    {
      question: "O site funciona em celulares e tablets?",
      answer:
        "A interface é desenvolvida de forma responsiva e validada em diferentes larguras de tela.",
    },
    {
      question: "Novas funcionalidades podem ser adicionadas depois?",
      answer:
        "A estrutura foi preparada para evoluir gradualmente conforme novas necessidades surgirem.",
    },
    {
      question: "É necessário utilizar todas as seções disponíveis?",
      answer:
        "Não. Cada projeto pode utilizar apenas as seções e funcionalidades adequadas ao seu contexto.",
    },
  ],
};

const locationContent: LocationContent = {
  eyebrow: "Localização",
  title: "Um ponto de referência para o atendimento",
  description:
    "Esta área pode apresentar o endereço e facilitar o acesso às informações de localização.",
  address: "Endereço demonstrativo · Centro · Cidade — UF",
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
      <BenefitsSection content={benefitsContent} id="beneficios" />
      <GallerySection content={galleryContent} id="galeria" />
      <TestimonialsSection content={testimonialsContent} id="avaliacoes" />
      <FAQSection content={faqContent} id="faq" />
      <LocationSection
        content={locationContent}
        id="localizacao"
        media={
          <div
            aria-hidden="true"
            className="flex items-center justify-center p-8 text-center text-sm font-medium leading-6 text-muted-text sm:text-base"
          >
            Área para mapa ou referência visual
          </div>
        }
      />
    </main>
  );
}
