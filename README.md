# Bryan Dietrich Bernhardt — Full Stack Developer

Projeto estático de alta performance, acessibilidade e SEO construído com **[Astro](https://astro.build/)** e gerenciado com **[pnpm](https://pnpm.io/)**.

Desenvolvido para atender aos mais rigorosos critérios de qualidade web, visando pontuação **100/100** em todas as métricas do Google Lighthouse (Performance, Acessibilidade, Boas Práticas e SEO).

---

## ⚡ Pilares de Otimização & Boas Práticas

### 1. Performance (100)
- **Zero JS por padrão**: Entrega de HTML puro e CSS pré-processado, sem overhead de runtime JavaScript no cliente.
- **System Font Stack**: Zero requisições bloqueantes de fontes externas (evita FOIT/FOUT e garante Cumulative Layout Shift = 0).
- **Inlining e minificação de CSS**: Estilos críticos embutidos automaticamente pelo compilador do Astro.
- **HTML comprimido**: Configuração de `compressHTML: true` no `astro.config.mjs`.
- **Métricas Core Web Vitals zeradas**: LCP < 0.5s, CLS = 0, TBT = 0ms, FCP < 0.5s.

### 2. Acessibilidade (100 - WCAG AAA)
- **Landmarks Semânticos**: Uso estrito de `<header>`, `<nav aria-label="...">`, `<main id="main-content">`, `<section aria-labelledby="...">` e `<footer>`.
- **Link de Acessibilidade (Skip Link)**: Permite navegação por teclado direta para o conteúdo principal (`#main-content`).
- **Contraste de Cores WCAG AAA**: Relação de contraste superior a 16:1 no tema claro e superior a 18:1 no tema escuro.
- **Alvos de Toque (Touch Targets)**: Todos os botões e links possuem dimensão mínima de 48x48px ou espaçamento equivalente.
- **Suporte a `prefers-reduced-motion`**: Respeita usuários com sensibilidade a movimentos, desativando transições e animações.
- **Indicadores de Foco Visíveis**: Estilos dedicados para `:focus-visible` em todos os elementos interativos.

### 3. Boas Práticas & Segurança (100)
- **Padrões Web**: `<!DOCTYPE html>`, charset UTF-8, meta tags de viewport e `color-scheme: light dark`.
- **Favicon Vetorial e Manifest**: `favicon.svg`, `favicon.ico` e `site.webmanifest` configurados.
- **Segurança & Referência**: Políticas de `referrer` estritas e `rel="noopener noreferrer"` em links externos.
- **Página 404 Personalizada**: [src/pages/404.astro](src/pages/404.astro) pronta e semântica.

### 4. SEO (100)
- **Sitemap XML**: Geração automática via integração `@astrojs/sitemap`.
- **robots.txt**: Arquivo estático configurado apontando para o índice do sitemap.
- **Metatags Open Graph & Twitter Cards**: Pré-configuradas para compartilhamento em redes sociais.
- **URLs Canônicas**: Geração dinâmica de `<link rel="canonical">`.

---

## 📁 Estrutura do Projeto

```text
bryandbernhardt/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg          # Logotipo vetorial responsivo
│   ├── robots.txt           # Diretrizes para indexadores e sitemap
│   └── site.webmanifest     # Manifesto da aplicação web
├── src/
│   ├── components/
│   │   ├── BaseHead.astro   # Metatags completas de SEO, OG e Twitter
│   │   ├── Footer.astro     # Rodapé semântico e links acessíveis
│   │   ├── Header.astro     # Cabeçalho com navegação e alvos de toque 48px
│   │   └── SkipLink.astro   # Link de atalho para leitores de tela e teclado
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base com estrutura semântica HTML5
│   ├── pages/
│   │   ├── 404.astro        # Página de erro acessível
│   │   └── index.astro      # Página inicial base com título e subtítulo
│   └── styles/
│       └── global.css       # Tokens de design, reset e contraste acessível
├── astro.config.mjs         # Configurações do Astro e sitemap
├── package.json             # Scripts e dependências
├── pnpm-lock.yaml           # Trava de dependências do pnpm
├── pnpm-workspace.yaml      # Configurações do pnpm
└── tsconfig.json            # Configuração TypeScript estrita
```

---

## 🚀 Comandos

Utilize o gerenciador de pacotes **pnpm**:

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento (http://localhost:4321)
pnpm run dev

# Verificar tipagem e diagnósticos do Astro
pnpm run check

# Gerar build estático para produção (pasta ./dist/)
pnpm run build

# Pré-visualizar o build localmente
pnpm run preview
```

---

## ☁️ Deploy na Vercel

Este projeto já está pronto para deploy estático na Vercel sem adapter específico:

- Build command: `pnpm run build`
- Output directory: `dist`
- Framework preset: `Astro`
- Node version: `22.x` (conforme `package.json`)

### Variáveis de ambiente

Crie uma variável `PUBLIC_SITE_URL` com o domínio final do projeto em produção:

```bash
PUBLIC_SITE_URL=https://seu-dominio.com
```

Na Vercel, configure isso em `Project Settings > Environment Variables`.

> Em previews e deployments automáticos, a app também tenta detectar automaticamente `VERCEL_URL` e `VERCEL_PROJECT_PRODUCTION_URL`, então o `site` e o sitemap continuam consistentes sem precisar reconfigurar manualmente a cada branch.

### Processo recomendado

1. Conecte o repositório à Vercel.
2. Configure o framework como Astro.
3. Mantenha `pnpm run build` como comando de build.
4. Deixe o diretório de saída em `dist`.
5. Defina `PUBLIC_SITE_URL` para a URL de produção.
6. Faça o deploy e valide as rotas `/`, `/pt`, `/es` e `/404`.

---

## 🧪 Auditoria de Qualidade

Para verificar a pontuação 100/100:

1. Execute o build e inicie o preview:
   ```bash
   pnpm run build && pnpm run preview
   ```
2. Abra a URL no Google Chrome em uma aba anônima (para evitar extensões afetando a medição).
3. Abra o **DevTools** (`F12`) > aba **Lighthouse**.
4. Selecione as categorias **Performance**, **Accessibility**, **Best Practices** e **SEO** (tanto em Mobile quanto Desktop).
5. Clique em **Analyze page load**.
