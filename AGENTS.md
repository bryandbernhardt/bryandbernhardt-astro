# CLAUDE.md

## Visão geral do projeto

Este repositório é um site pessoal/portfólio em Astro, focado em performance, acessibilidade, SEO e suporte multilíngue.

Estrutura atual do projeto:
- `src/pages/` — páginas do site e rotas por idioma
- `src/components/` — cabeçalho, rodapé, layout e conteúdo principal
- `src/layouts/` — layout base da aplicação
- `src/lib/siteContent.ts` — textos, metadados e conteúdos por idioma
- `src/styles/global.css` — estilos globais e tokens visuais
- `public/` — arquivos públicos e manifestos
- `astro.config.mjs` — configuração do Astro, sitemap e i18n

## Stack atual

- Astro 7
- Vite
- Tailwind CSS
- TypeScript
- @astrojs/sitemap
- Node >= 22.12.0

## Estado atual validado

As verificações recentes do projeto foram concluídas com sucesso:
- `astro check` -> 0 erros, 0 warnings, 0 hints
- `astro build` -> build estático concluído com sucesso
- Rotas geradas: `/`, `/pt`, `/es`, `/404`

## Comandos principais

```bash
pnpm install
pnpm run dev
pnpm run check
pnpm run build
pnpm run preview
```

## Deploy na Vercel

Este site é estático e compatível com a Vercel sem necessidade de adapter adicional.

### Configuração recomendada
- Build command: `pnpm run build`
- Output directory: `dist`
- Node.js: `22.x`
- Variável de ambiente em produção: `PUBLIC_SITE_URL=https://seu-dominio.com`

### Observações importantes
- O arquivo `astro.config.mjs` usa `PUBLIC_SITE_URL` como prioridade; quando isso não está definido em deploys da Vercel, ele faz fallback para `VERCEL_PROJECT_PRODUCTION_URL` e `VERCEL_URL`.
- Isso mantém URLs canônicas, sitemap e i18n consistentes em produção e preview.
- O projeto segue rotas `en`, `pt` e `es` e não exige ajustes adicionais para deploy na Vercel.

## Estrutura funcional

- `BaseLayout.astro` monta o template base com `BaseHead`, `Header`, `Footer` e slot principal.
- `HomePage.astro` renderiza as seções de hero, sobre, projetos e contato.
- `siteContent.ts` centraliza os textos em `en`, `pt` e `es`.
- `Header.astro` controla menu mobile, idioma e redirecionamento por locale.
- `Footer.astro` exibe links sociais com acessibilidade e comportamento seguro para novas abas.
- `404.astro` usa o mesmo padrão visual do site e respeita o idioma atual.

## Multilíngue e rotas

O site oferece suporte para:
- `/` — inglês
- `/pt` — português
- `/es` — espanhol

A lógica de idioma usa `localStorage` e detecção do navegador para encaminhar o usuário ao locale apropriado.

## SEO e acessibilidade

O projeto prioriza:
- metatags Open Graph e Twitter
- canonical e hreflang
- sitemap via `@astrojs/sitemap`
- `robots.txt`
- HTML semântico, foco visível, contraste e touch targets de 48px
- suporte a `prefers-reduced-motion`

## Regras para agentes e automações

### 1. Leitura e consulta de código com Graphify
Este projeto possui um grafo de conhecimento em `graphify-out/`.

Antes de abrir arquivos brutos ou fazer buscas amplas, prefira:
- `graphify query "<pergunta>"`
- `graphify path "<ComponenteA>" "<ComponenteB>" --undirected`
- `graphify explain "<simbolo>"`

### 2. Navegação estrutural
Use `graphify-out/wiki/index.md` como ponto de entrada para entender melhor a arquitetura antes de mudar qualquer módulo sensível.

### 3. Atualização do grafo
Após alterar arquivos de código, execute:

```bash
graphify update .
```

### 4. Validação mínima antes de fechar tarefas
Quando uma mudança impactar layout, páginas ou conteúdo multilíngue, valide com:

```bash
pnpm run check
pnpm run build
```

## Documentação auxiliar

- Astro docs: https://docs.astro.build
- Routing: https://docs.astro.build/en/guides/routing/
- Components: https://docs.astro.build/en/basics/astro-components/
- Styling: https://docs.astro.build/en/guides/styling/
- Images and assets: https://docs.astro.build/en/guides/images/

## Observações importantes

- O projeto usa Tailwind como base visual principal.
- O conteúdo textual é centralizado para manter consistência entre locales.
- Mudanças em `Header`, `HomePage`, `siteContent` e `404.astro` devem preservar o padrão visual e a tradução correta.
- Não remova suporte a `en`, `pt` e `es` sem ajustar as rotas e os textos do site.
