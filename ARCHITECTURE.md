# SITE CORE — Architecture

## 1. Estrutura alvo

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── sections/
│   ├── hero/
│   ├── about/
│   ├── services/
│   ├── benefits/
│   ├── gallery/
│   ├── testimonials/
│   ├── faq/
│   ├── location/
│   └── cta/
├── modules/
│   └── whatsapp/
├── templates/
│   └── service/
├── config/
│   ├── site.ts
│   ├── theme.ts
│   └── navigation.ts
├── data/
│   ├── services.ts
│   ├── testimonials.ts
│   ├── gallery.ts
│   └── faq.ts
├── lib/
├── types/
└── styles/
```

A estrutura pode evoluir quando um caso real demonstrar necessidade. Não reorganizar por preferência pessoal.

## 2. Responsabilidade de cada camada

### `app/`

Responsável por:

- rotas;
- layouts;
- metadata;
- composição final das páginas.

Não deve conter grandes blocos de UI diretamente quando eles puderem ser representados por Sections ou Components.

### `components/ui/`

Componentes pequenos e genéricos.

Exemplos:

- Button;
- Badge;
- Card;
- Container;
- Section;
- SectionTitle.

Não conhecem o cliente.

Não conhecem o segmento.

### `components/layout/`

Elementos estruturais.

Exemplos:

- Header;
- Footer;
- MobileMenu.

### `components/shared/`

Componentes reutilizáveis que não são primitives de UI nem elementos globais de layout.

### `sections/`

Blocos completos de página.

Exemplos:

- HeroSection;
- AboutSection;
- ServicesSection;
- TestimonialsSection.

Sections podem combinar componentes menores.

Sections recebem dados; não devem ser bancos de conteúdo estático específico do cliente.

### `modules/`

Funcionalidades com lógica própria.

Exemplo inicial:

```text
modules/whatsapp/
```

Futuramente:

```text
modules/catalog/
modules/product-customizer/
modules/cart/
modules/checkout/
```

Módulos devem ser independentes sempre que possível.

### `templates/`

Define a composição de Sections para determinado tipo de experiência.

Na V1:

```text
templates/service/
```

O template não deve conter conteúdo específico da empresa.

### `config/`

Configuração do site.

Exemplo:

```ts
export const siteConfig = {
  name: "",
  description: "",
  contact: {
    whatsapp: "",
    instagram: "",
    email: "",
  },
  address: {
    label: "",
    city: "",
    state: "",
  },
}
```

### `data/`

Coleções de conteúdo.

Exemplos:

- lista de serviços;
- avaliações;
- itens da galeria;
- FAQ.

### `lib/`

Funções utilitárias que tenham lógica reutilizável.

Exemplo:

- normalização de telefone;
- geração de URL do WhatsApp;
- helpers de SEO.

### `types/`

Tipos compartilhados.

Evitar criar tipos globais para coisas usadas em apenas um arquivo.

## 3. Fluxo de dependência

Preferência:

```text
app
↓
templates
↓
sections
↓
components
↓
lib / types
```

Módulos podem ser usados por Sections e Templates.

Evitar dependência circular.

## 4. Regra de dados

Proibido:

```tsx
<h1>Empresa X</h1>
```

em componente genérico.

Preferido:

```tsx
<h1>{siteConfig.name}</h1>
```

ou:

```tsx
<HeroSection title={hero.title} />
```

## 5. Configuração vs dados

Use `config/` para informações globais e relativamente únicas:

- nome;
- contatos;
- endereço;
- tema;
- navegação.

Use `data/` para coleções:

- serviços;
- produtos;
- avaliações;
- perguntas;
- galeria.

## 6. Reutilização

Não generalizar cedo demais.

Critério:

- apareceu uma vez: pode ser local;
- apareceu duas vezes: observar;
- apareceu três vezes ou há uma abstração óbvia: considerar componente compartilhado.

## 7. Variantes visuais

Componentes genéricos podem aceitar variantes controladas.

Exemplo conceitual:

```ts
variant: "default" | "minimal" | "featured"
```

Evitar dezenas de booleanos como:

```ts
rounded
dark
big
shadow
centered
compact
```

Quando a combinação representar um estilo coerente, preferir uma variante explícita.

## 8. Responsividade

Toda implementação deve considerar pelo menos:

- celular;
- tablet;
- desktop.

Não criar primeiro para desktop e “consertar” celular depois.

## 9. Assets

Imagens não devem ser espalhadas arbitrariamente.

Usar uma convenção consistente.

Quando assets forem específicos de um cliente, manter clara separação entre:

- assets do Core;
- assets do cliente.

## 10. Futuro

Somente após validação dos casos reais considerar:

- gerador de novo cliente;
- schema de configuração;
- CMS;
- banco de dados;
- painel;
- sistema de temas avançado;
- pacotes compartilhados;
- multi-tenant.

Não implementar antecipadamente.
