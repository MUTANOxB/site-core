import { siteConfig } from "@/config/site";
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
    </main>
  );
}
