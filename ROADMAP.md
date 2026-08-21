# SITE CORE — Roadmap

## Etapa 1 — Definição

- [x] objetivo do projeto;
- [x] casos de uso;
- [x] escopo inicial;
- [x] filosofia do Core;
- [x] stack base;
- [x] fluxo com Codex.

## Etapa 2 — Governança e arquitetura

- [x] PROJECT.md;
- [x] ARCHITECTURE.md;
- [x] DESIGN_SYSTEM.md;
- [x] CODEX_RULES.md;
- [x] ROADMAP.md.

## Etapa 3 — Bootstrap técnico

- [ ] criar/inicializar projeto Next.js;
- [ ] TypeScript;
- [ ] Tailwind CSS;
- [ ] ESLint;
- [ ] estrutura base de pastas;
- [ ] aliases de import;
- [ ] configuração mínima;
- [ ] confirmar lint;
- [ ] confirmar build.

## Etapa 4 — Configuração base

- [ ] `siteConfig`;
- [ ] `themeConfig`;
- [ ] `navigationConfig`;
- [ ] tipos essenciais;
- [ ] dados de exemplo neutros.

## Etapa 5 — UI primitives

- [x] Container;
- [x] Section;
- [x] SectionTitle;
- [x] Button;
- [x] Badge;
- [ ] primitives adicionais somente se necessárias.

## Etapa 6 — Layout base

- [x] estrutura global;
- [x] fontes;
- [x] metadata;
- [x] estilos globais;
- [x] tokens essenciais.

## Etapa 7 — Header

- [x] desktop;
- [x] mobile;
- [x] navegação;
- [x] CTA;
- [x] acessibilidade;
- [x] responsividade.

## Etapa 8 — Hero

- [x] estrutura;
- [x] conteúdo configurável;
- [x] CTA principal;
- [x] CTA secundário;
- [x] mídia;
- [x] responsividade.

## Etapa 9 — Sections V1

- [x] Sobre;
- [x] Serviços;
- [x] Benefícios;
- [x] Galeria;
- [x] Avaliações;
- [x] auditoria de escala desktop;
- [x] FAQ;
- [x] Localização;
- [x] CTA final;
- [x] Footer.

## Etapa 10 — WhatsApp

- [x] normalização de telefone;
- [x] geração de URL;
- [x] mensagem configurável;
- [x] CTA global;
- [x] CTA contextual.

## Etapa 11 — Redesign visual do Core

- [x] auditoria visual;
- [x] blueprint compositivo;
- [x] Design System mínimo;
- [x] Header + Hero;
- [x] About;
- [x] Services + Benefits;
- [x] Art direction / identidade visual;
- [x] Gallery;
- [ ] Testimonials;
- [ ] FAQ + Location;
- [ ] Final CTA + Footer;
- [ ] auditoria responsiva e stress.

## Etapa 12 — Auditoria de segurança

- [ ] dependências e vulnerabilidades;
- [ ] secrets e arquivos sensíveis;
- [ ] headers HTTP;
- [ ] CSP;
- [ ] clickjacking;
- [ ] URLs externas;
- [ ] XSS e conteúdo configurável;
- [ ] build de produção;
- [ ] testes dinâmicos.

## Etapa 13 — Template de serviços

- [ ] composição das Sections;
- [ ] configuração;
- [ ] dados;
- [ ] SEO;
- [ ] mobile;
- [ ] acessibilidade;
- [ ] performance.

## Etapa 14 — Primeiro caso real: beleza

- [ ] coletar conteúdo;
- [ ] definir identidade;
- [ ] criar configuração;
- [ ] selecionar Sections;
- [ ] implementar;
- [ ] revisar;
- [ ] publicar demo.

## Etapa 15 — Refatoração 1

- [ ] identificar acoplamentos;
- [ ] remover decisões específicas do caso;
- [ ] revisar APIs;
- [ ] documentar aprendizado.

## Etapa 16 — Catálogo

- [ ] módulo catalog;
- [ ] ProductCard;
- [ ] catálogo;
- [ ] detalhes;
- [ ] filtros;
- [ ] busca;
- [ ] CTA contextual;
- [ ] financiamento.

## Etapa 17 — Segundo caso real: loja de motos

- [ ] conteúdo;
- [ ] identidade;
- [ ] catálogo;
- [ ] WhatsApp por item;
- [ ] localização;
- [ ] demo.

## Etapa 18 — Refatoração 2

- [ ] validar independência do Core;
- [ ] revisar módulos;
- [ ] consolidar padrões.

## Etapa 19 — Produtos personalizados

- [ ] catálogo;
- [ ] upload;
- [ ] personalização;
- [ ] preview;
- [ ] carrinho;
- [ ] checkout/pedido.

## Etapa 20 — Terceiro caso real: canecas

- [ ] fluxo completo;
- [ ] usabilidade mobile;
- [ ] compra/pedido;
- [ ] validação real.

## Etapa 21 — Automação

Somente depois de o Core estar validado:

- [ ] schema de cliente;
- [ ] comando `create-client`;
- [ ] seleção de template;
- [ ] geração de configuração;
- [ ] scaffolding de assets;
- [ ] validação automática.
