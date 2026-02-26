# Prime Imóveis

Landing page de alto padrão para imobiliária no litoral catarinense.
Stack: React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui.

## Requisitos
- Node.js 18+
- npm 9+

## Instalação
```bash
cd app
npm install
```

## Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:5173

## Build para produção
```bash
npm run build
```
Os arquivos de saída ficam em `app/dist/`.

## Preview local do build
```bash
npm run preview
```

## Variáveis de ambiente
Copie `.env.example` para `.env.local` e preencha os valores se necessário.
Atualmente o projeto não requer variáveis de ambiente obrigatórias (dados são JSON estáticos).

## Deploy — Vercel
1. Conecte o repositório no painel da Vercel
2. Defina o diretório raiz como `app/`
3. Framework: Vite (detectado automaticamente)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Adicione as variáveis de ambiente do `.env.example` no painel da Vercel (se houver)

## Estrutura de dados
Os dados de imóveis, corretores, depoimentos e blog estão em `src/data/` como JSON estático.
Para atualizar conteúdo, edite os arquivos JSON diretamente.

## SEO
- Meta tags configuradas em `index.html`
- Sitemap em `public/sitemap.xml`
- Robots em `public/robots.txt`
- Substitua `public/og-image.jpg` por uma imagem real (1200x630px) antes do deploy

## Contato / WhatsApp
Número e mensagens centralizados em `src/lib/constants.ts` (ou hardcoded nos componentes — ver STRUCTURE.md).
