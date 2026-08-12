# SITE CORE — Project Definition

## 1. Objetivo

Construir um Core reutilizável para criação rápida de sites comerciais de alta qualidade visual.

O projeto deve permitir criar sites diferentes para clientes diferentes sem reconstruir a aplicação do zero e sem fazer todos os clientes parecerem variações do mesmo template.

O Core deve priorizar:

- qualidade visual;
- responsividade;
- velocidade;
- simplicidade de manutenção;
- reutilização real;
- SEO básico;
- acessibilidade;
- geração de leads;
- integração simples com WhatsApp;
- facilidade para adaptar identidade visual e conteúdo.

## 2. Casos de uso iniciais

O desenvolvimento será validado em três cenários, nesta ordem:

1. Serviços / beleza
   - site institucional;
   - serviços;
   - galeria;
   - avaliações;
   - FAQ;
   - localização;
   - agendamento ou contato por WhatsApp.

2. Catálogo / loja de motos
   - catálogo;
   - cards de produtos;
   - detalhes;
   - filtros;
   - financiamento;
   - CTA de interesse;
   - contato por WhatsApp.

3. Produto personalizado / canecas
   - catálogo;
   - personalização;
   - upload de imagem;
   - prévia;
   - carrinho;
   - pedido ou checkout.

Os casos 2 e 3 não devem ser implementados na primeira versão.

## 3. Escopo da V1

A V1 deverá conter somente o necessário para construir um excelente site de serviços.

Incluído:

- configuração global do site;
- tema configurável;
- navegação;
- Header;
- Hero;
- Sobre;
- Serviços;
- Benefícios;
- Galeria;
- Avaliações;
- FAQ;
- Localização;
- CTA;
- Footer;
- botão/CTA de WhatsApp;
- estrutura SEO;
- layout responsivo.

Fora da V1:

- autenticação;
- login;
- painel administrativo;
- banco de dados;
- carrinho;
- checkout;
- pagamento;
- upload de arquivos;
- estoque;
- CMS;
- sistema de usuários;
- backend sem necessidade concreta.

## 4. Princípio central

O Core fornece estrutura e comportamento.

O cliente fornece identidade.

Um site de estética e um site de motos podem compartilhar componentes internos, mas não devem aparentar ser o mesmo site com cores diferentes.

## 5. Stack

Base:

- Next.js com App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- Lucide para ícones, quando necessário.

Bibliotecas adicionais só serão adicionadas quando houver necessidade concreta.

Animações devem começar simples. Uma biblioteca de animação poderá ser introduzida posteriormente caso agregue valor real.

## 6. Regras de produto

1. Mobile é obrigatório, não secundário.
2. O site deve continuar bom sem animações.
3. Nenhum componente genérico deve conter informações fixas de um cliente.
4. Conteúdo deve vir de configuração, dados ou propriedades.
5. O Core não deve conhecer o segmento do cliente.
6. Funcionalidades específicas devem virar módulos.
7. Não criar abstrações antes de existir necessidade comprovada.
8. Não criar backend por precaução.
9. Não adicionar dependências por conveniência.
10. A experiência final deve parecer feita sob medida.

## 7. Fluxo de desenvolvimento

Para cada etapa:

1. analisar;
2. planejar;
3. implementar somente o escopo solicitado;
4. executar validações;
5. revisar;
6. corrigir;
7. registrar a mudança;
8. seguir para a próxima etapa.

Evitar tarefas do tipo:

> Crie o site inteiro.

Preferir:

> Implemente somente o Header conforme a arquitetura existente.

## 8. Estratégia de validação

### Caso 1 — Serviços / beleza

Valida:

- Core;
- layout;
- componentes;
- conteúdo configurável;
- galeria;
- prova social;
- WhatsApp;
- localização.

Depois deste caso, refatorar o Core.

### Caso 2 — Loja de motos

Valida:

- reutilização em outro segmento;
- catálogo;
- componentes de produto;
- filtros;
- CTA por item.

Depois deste caso, refatorar novamente o Core.

### Caso 3 — Canecas personalizadas

Valida:

- funcionalidades de e-commerce;
- personalização;
- upload;
- prévia;
- pedido/checkout.

## 9. Definição de sucesso

O Core será considerado bem estruturado quando:

- um novo cliente puder ser criado sem copiar e editar dezenas de componentes;
- alterações no Core não exigirem mudanças específicas em cada cliente;
- o conteúdo do cliente puder ser substituído sem tocar na estrutura interna dos componentes;
- os três segmentos puderem ter identidades visualmente distintas;
- a maior parte da infraestrutura seja reutilizada;
- o código continue legível e fácil de manter.
