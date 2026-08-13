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
- [ ] FAQ;
- [ ] Localização;
- [ ] CTA final;
- [ ] Footer.

## Etapa 10 — WhatsApp

- [ ] normalização de telefone;
- [ ] geração de URL;
- [ ] mensagem configurável;
- [ ] CTA global;
- [ ] CTA contextual.

## Etapa 11 — Template de serviços

- [ ] composição das Sections;
- [ ] configuração;
- [ ] dados;
- [ ] SEO;
- [ ] mobile;
- [ ] acessibilidade;
- [ ] performance.

## Etapa 12 — Primeiro caso real: beleza

- [ ] coletar conteúdo;
- [ ] definir identidade;
- [ ] criar configuração;
- [ ] selecionar Sections;
- [ ] implementar;
- [ ] revisar;
- [ ] publicar demo.

## Etapa 13 — Refatoração 1

- [ ] identificar acoplamentos;
- [ ] remover decisões específicas do caso;
- [ ] revisar APIs;
- [ ] documentar aprendizado.

## Etapa 14 — Catálogo

- [ ] módulo catalog;
- [ ] ProductCard;
- [ ] catálogo;
- [ ] detalhes;
- [ ] filtros;
- [ ] busca;
- [ ] CTA contextual;
- [ ] financiamento.

## Etapa 15 — Segundo caso real: loja de motos

- [ ] conteúdo;
- [ ] identidade;
- [ ] catálogo;
- [ ] WhatsApp por item;
- [ ] localização;
- [ ] demo.

## Etapa 16 — Refatoração 2

- [ ] validar independência do Core;
- [ ] revisar módulos;
- [ ] consolidar padrões.

## Etapa 17 — Produtos personalizados

- [ ] catálogo;
- [ ] upload;
- [ ] personalização;
- [ ] preview;
- [ ] carrinho;
- [ ] checkout/pedido.

## Etapa 18 — Terceiro caso real: canecas

- [ ] fluxo completo;
- [ ] usabilidade mobile;
- [ ] compra/pedido;
- [ ] validação real.

## Etapa 19 — Automação

Somente depois de o Core estar validado:

- [ ] schema de cliente;
- [ ] comando `create-client`;
- [ ] seleção de template;
- [ ] geração de configuração;
- [ ] scaffolding de assets;
- [ ] validação automática.
