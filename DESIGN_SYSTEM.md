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

## 14. Default demo skin / Art Direction

A demonstração default do Core adota a direção **WARM MONOCHROME EDITORIAL**:

- **PAPER** (`#F0E6D8` / `primaryContrast` / `background`) — base orgânica, clara e aquecida; fornece conforto, calor, humanidade e espaço negativo. Decisão congelada e única grande fonte de calor constante.
- **SURFACE** (`#E5DDD2` / `surface`) — campo tonal neutro-aquecido para superfícies, transições editoriais e estados funcionais; sem aparência cinza fria.
- **INK** (`#171512` / `primary` / `text`) — contraste tipográfico firme e presença estrutural nítida, quase neutro em tom espresso profundo.
- **ACCENT** (`#633E32` / `secondary`) — acento gráfico profundo e altamente restrito (~3% max), aplicado em regras editoriais, índices numéricos e microdetalhes funcionais.
- **MUTED** (`#685F57` / `mutedText`) — texto secundário, eyebrows neutros e metadata.
- **BORDER** (`#CDC1B3` / `border`) — divisores e regras estruturais discretas em harmonia com o papel.
- **DARK FIELD (futuro)** (`#182024` ou `#171512`) — registrado para exploração futura em fechamentos narrativos, Final CTA ou Footer. Não implementado nesta etapa.

### Tabela de contraste WCAG 2.1:

| Par cromático | Ratio medido | Status WCAG |
| :--- | :--- | :--- |
| **INK** (`#171512`) sobre **PAPER** (`#F0E6D8`) | 14.76:1 | AAA (Normal Text >= 7.0:1) |
| **INK** (`#171512`) sobre **SURFACE** (`#E5DDD2`) | 13.54:1 | AAA (Normal Text >= 7.0:1) |
| **ACCENT** (`#633E32`) sobre **PAPER** (`#F0E6D8`) | 7.51:1 | AAA (Normal Text >= 7.0:1) |
| **ACCENT** (`#633E32`) sobre **SURFACE** (`#E5DDD2`) | 6.89:1 | AA (Normal Text >= 4.5:1) |
| **MUTED** (`#685F57`) sobre **PAPER** (`#F0E6D8`) | 5.06:1 | AA (Normal Text >= 4.5:1) |
| **MUTED** (`#685F57`) sobre **SURFACE** (`#E5DDD2`) | 4.64:1 | AA (Normal Text >= 4.5:1) |
| `::selection` (**PAPER** sobre **ACCENT**) | 7.51:1 | AAA (Normal Text >= 7.0:1) |

### Diretrizes da Art Direction:

1. **Distribuição cromática (97% / 3%)**: PAPER, SURFACE e INK compõem ~97% da área visual da interface; SECONDARY atua em no máximo ~3% como detalhe estrutural e de foco, sem dominar a cena.
2. **Composição editorial aberta no Hero**: o Hero abandona o formato de card ou rail com fundo sólido. A descrição e as ações integram-se diretamente à malha da página sobre o PAPER, estruturadas por uma regra gráfica refinada, assimetria ótica e um fólio editorial decorativo (`01`).
3. **Ações hierarquizadas**: o botão primário é INK sólido com texto PAPER; o secundário adota tratamento leve (ghost textual com seta indicativa), criando contraste de peso visual sem parecer um segundo botão concorrente.
4. **Textura tátil do PAPER**: aplicação global de uma microtextura fractal monocromática via CSS (~2% de opacidade), quebrando a esterilidade da tela digital plana sem degradar legibilidade ou performance.
5. **Ritmo de cenas do primeiro ato**:
   - **Header**: PAPER discreto (marca Geist/sans, navegação neutra, microinterações funcionais).
   - **Hero**: momento forte, aberto e assimétrico com H1 dominante e rail tipográfico.
   - **About**: momento silencioso (somente PAPER, INK e MUTED; Newsreader fornece identidade).
   - **Services**: momento estruturado com índices editoriais e divisores nítidos.
   - **Benefits**: repouso visual e ritmo sequencial sóbrio (índices em MUTED).
   - **Gallery**: futuro momento visual de forte protagonismo.
6. **Movimento de entrada funcional**:
   - Hero com suave transição de entrada CSS (opacidade e pequeno deslocamento vertical, 600–700ms com curva suave ease-out).
   - Desativação completa sob `prefers-reduced-motion: reduce`.
   - Sections seguintes mantidas estáticas nesta etapa, preparando a Gallery para movimento narrativo posterior.
7. **Separação de estrutura e identidade**: a paleta e os detalhes editoriais são a pele padrão do Core; clientes futuros podem personalizar cores e tipografia mantendo toda a arquitetura intacta.
8. **Tipografia contrastante**: o Core utiliza `Geist` para o corpo (`font-body`), marca, navegação e botões, e `Newsreader` para elementos editoriais e display (`font-display`), com tracking refinado e proporções confortáveis.
