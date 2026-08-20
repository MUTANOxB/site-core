# SITE CORE — Design System Principles

## 1. Objetivo

Criar uma base visual profissional sem forçar todos os clientes a terem a mesma aparência.

O Design System deve padronizar qualidade, não personalidade.

A direção visual vigente é **Editorial Comercial Modular**: composições editoriais variadas sobre uma infraestrutura comercial compartilhada.

## 2. Princípios

1. Hierarquia visual clara.
2. Espaçamento consistente.
3. Tipografia legível.
4. CTA evidente.
5. Imagens com importância real.
6. Mobile-first.
7. Contraste adequado.
8. Animações discretas.
9. Menos elementos decorativos sem função.
10. Identidade adaptável por cliente.
11. Responsividade não significa apenas caber em telas menores. O layout também deve escalar adequadamente para telas maiores, utilizando o espaço disponível sem comprometer legibilidade, hierarquia ou consistência.

## 3. Evitar aparência de template genérico

Evitar repetição automática de:

- mesmos Heros;
- mesmos cards;
- mesmos gradientes;
- mesmas distribuições;
- mesmas animações;
- mesma estética SaaS para todos os segmentos.

Cada site pode reorganizar e variar Sections mantendo a mesma infraestrutura.

## 4. Tokens

O tema deverá prever tokens para:

- cor principal;
- contraste da cor principal;
- hover da cor principal;
- cor secundária;
- fundo;
- superfície;
- texto;
- texto secundário;
- borda;
- raio;
- sombra;
- largura de conteúdo;
- espaçamento.

Evitar valores arbitrários repetidos quando um token resolver.

`primaryContrast` explicita o par de contraste de `primary`, permitindo seu uso seguro como foreground ou background sem pressupor que `background` seja a cor contrastante. Seu default é `#ffffff`. O token prepara grandes campos, como Final CTA e Footer, sem implicar redesign desses componentes agora.

`primaryHover` define o hover de `primary` sem acoplá-lo a `secondary`, que permanece semanticamente independente. Seu default é `#525252`.

O token `spacing` é preservado, embora ainda não participe globalmente do layout. Sua integração fica para avaliação futura.

### Bordas

Usar border para regras editoriais, transições funcionais, separação entre itens e delimitação necessária por contraste.

Evitar contornar automaticamente toda mídia, aplicar `border + surface + radius` em toda unidade ou combinar bordas externa e interna sem função.

### Surface

`surface` pode representar o campo tonal de um ato, dropdown, área realmente contida ou estado funcional.

Não é background automático de card, tratamento obrigatório de cada item nem decoração padrão.

### Radius

Os tokens `sm`, `md` e `lg` derivam do mesmo radius-base, para que controles interativos respondam ao tema em conjunto. `pill` permanece funcional em `9999px`.

Mídia estrutural não recebe radius automaticamente, breakout normalmente não usa radius e cards só o recebem quando a unidade realmente justificar. Evitar borda externa e interna simultâneas sem função.

## 5. Tipografia

Papéis tipográficos:

- **DISPLAY** — H1, headline de fechamento e marca grande quando necessário;
- **EDITORIAL HEADING** — H2, H3 e quote focal; pode usar `font-display`;
- **BODY** — descrições, parágrafos, FAQ e conteúdo;
- **LABEL** — botão, navegação e ações;
- **EYEBROW / META** — contexto curto, índice e microcopy.

A infraestrutura `font-display` e `font-body` é suficiente por enquanto. Os papéis não exigem cinco famílias ou variáveis CSS diferentes.

Eyebrow não é obrigatória: usar uppercase somente quando curta e sentence case quando longa. Não deve repetir informação óbvia e pode desaparecer quando não agregar contexto.

A escolha da fonte pode variar por cliente.

A escala tipográfica deve progredir de forma responsiva entre mobile, tablet e desktop, preservando a hierarquia em cada faixa.

## 6. Botões

Ter poucos estilos bem definidos.

Inicialmente:

- primary;
- secondary;
- ghost/link.

Todo botão deve possuir:

- estado hover;
- estado focus;
- estado disabled quando aplicável;
- área de toque adequada no mobile.

## 7. Containers

Usar largura máxima coerente.

O Container base preserva o limite de `90rem`.

Evitar conteúdo encostado nas laterais em telas pequenas.

O Container de conteúdo pode ser amplo, com limite definido, enquanto textos corridos mantêm uma measure independente e confortável.

## 8. Sections

Sections usam três densidades transversais:

- `compact`: `py-10 sm:py-12 lg:py-14 xl:py-16 2xl:py-20`;
- `regular`: `py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32` — default e ritmo atual;
- `immersive`: `py-20 sm:py-24 lg:py-28 xl:py-32 2xl:py-36`.

Não criar tokens de espaçamento por Section. A composição específica continua sob responsabilidade de cada Section.

Nem todas precisam usar o mesmo fundo ou layout.

Em mobile e tablet, as composições devem ser recompostas, em vez de apenas empilhar a versão desktop.

Novas composições podem usar os dados `eyebrow`, `title` e `description` sem necessariamente renderizar o primitive `SectionTitle` completo. Sua API permanece inalterada até que repetição real justifique novas variantes.

Toda composição deve ser validada também em desktop grande, incluindo 1920 px, e não apenas quanto à ausência de overflow.

## 9. Cards

Cards são opcionais.

Não transformar toda informação em um card.

Quando usados:

- hierarquia clara;
- conteúdo objetivo;
- interação previsível.

## 10. Imagens

Priorizar fotografia quando ela vender melhor o serviço/produto.

Evitar imagens apenas decorativas ocupando espaço.

Imagens importantes devem:

- ter proporção coerente;
- não deformar;
- possuir texto alternativo quando necessário;
- carregar de forma adequada.

## 11. Animações

Animação é acabamento, não estrutura.

Nenhuma dependência de motion é obrigatória.

Inicialmente preferir:

- transições;
- fade;
- movimento leve;
- feedback de interação.

Evitar:

- excesso de parallax;
- elementos pulando;
- delays longos;
- animações que dificultem navegação.

## 12. Acessibilidade

Obrigatório:

- navegação por teclado nos elementos interativos;
- foco visível;
- HTML semântico;
- labels apropriados;
- contraste suficiente;
- respeito a preferências de redução de movimento quando aplicável.

## 13. Identidade por segmento

### Serviços / beleza

Pode utilizar:

- maior espaço em branco;
- fotografia;
- tipografia elegante;
- composição editorial;
- foco em confiança e resultado.

### Motos

Pode utilizar:

- contraste forte;
- imagens grandes;
- informações rápidas;
- CTA direto;
- sensação de desempenho/produto.

### Produtos personalizados

Pode utilizar:

- produto em destaque;
- visual amigável;
- etapas claras;
- forte orientação à ação.

Esses exemplos não são templates obrigatórios.
