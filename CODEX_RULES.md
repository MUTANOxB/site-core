# SITE CORE — Codex Rules

Estas regras devem ser lidas antes de qualquer tarefa de implementação.

## 1. Regra principal

Implemente somente o escopo solicitado.

Não avance automaticamente para a próxima etapa.

## 2. Antes de modificar

Sempre:

1. leia os arquivos relevantes;
2. entenda a arquitetura existente;
3. procure componentes ou utilitários reutilizáveis;
4. identifique possíveis impactos;
5. só então altere o código.

## 3. Não fazer sem solicitação

Não:

- reorganizar a arquitetura inteira;
- renomear pastas por preferência;
- trocar stack;
- instalar bibliotecas sem necessidade;
- adicionar banco;
- criar backend;
- adicionar autenticação;
- criar CMS;
- criar painel;
- implementar funcionalidades futuras;
- refatorar áreas não relacionadas à tarefa;
- alterar design fora do escopo.

## 4. Componentes

Antes de criar um componente:

- procure se já existe algo equivalente;
- confirme a responsabilidade correta;
- mantenha a API simples.

Não duplicar componentes.

Não criar abstração genérica só para evitar três linhas repetidas.

## 5. Dados do cliente

Nunca codificar informações específicas do cliente dentro de componentes genéricos.

Errado:

```tsx
<h1>Emylene</h1>
```

Certo:

```tsx
<h1>{siteConfig.name}</h1>
```

## 6. Tipagem

Evitar `any`.

Criar tipos somente quando melhorarem clareza ou segurança.

Não transformar tipos simples em sistemas excessivamente complexos.

## 7. Dependências

Antes de instalar uma dependência:

1. verifique se a necessidade pode ser resolvida com o que já existe;
2. explique brevemente por que a dependência é necessária;
3. não instale bibliotecas para funções triviais.

## 8. CSS e UI

Respeitar o Design System.

Evitar:

- valores arbitrários repetidos;
- estilos inline sem razão;
- duplicação de classes extensas;
- responsividade improvisada;
- efeitos visuais excessivos.

## 9. Mobile

Toda tarefa de UI deve ser considerada incompleta se quebrar em telas pequenas.

## 10. Acessibilidade

Usar:

- HTML semântico;
- foco adequado;
- `button` para ações;
- `a` para navegação;
- labels e aria quando necessários.

Não usar `div` clicável quando existir elemento semântico apropriado.

## 11. Performance

Evitar:

- JavaScript desnecessário no cliente;
- componentes client sem necessidade;
- imagens não otimizadas;
- dependências grandes por conveniência.

Preferir Server Components quando não houver necessidade de interação no cliente.

## 12. Alterações

Modificar o menor conjunto de arquivos necessário para cumprir a tarefa.

Não fazer limpeza geral durante feature específica.

## 13. Validação

Antes de considerar uma tarefa concluída:

- executar lint;
- executar verificação de tipos quando disponível;
- executar build quando razoável;
- executar testes existentes;
- reportar erros encontrados.

Não esconder erro já existente.

Diferenciar:

- erro criado pela alteração;
- erro preexistente.

## 14. Resultado da tarefa

Ao finalizar, informar de forma curta:

1. o que foi alterado;
2. quais arquivos principais foram modificados;
3. quais validações foram executadas;
4. qualquer pendência real.

## 15. Commits

Não criar commit automaticamente, salvo solicitação explícita.

Quando solicitado, usar mensagem objetiva e coerente com a mudança.

## 16. Regra de ouro

Se a tarefa for:

> implemente o Header

não implemente:

- Hero;
- Footer;
- Services;
- tema avançado;
- animações globais;
- módulos futuros.

Faça o Header muito bem e pare.
