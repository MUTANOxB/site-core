import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Section>
        <Container>
          <p>{siteConfig.name}</p>
        </Container>
      </Section>
    </main>
  );
}
