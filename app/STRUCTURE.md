# Prime Imóveis - Documentação do Projeto

## 1. Visão Geral do Projeto

**Prime Imóveis** é uma landing page premium para uma imobiliária de alto padrão baseada em Balneário Camboriú, SC, Brasil. O projeto foi desenvolvido como peça de portfólio para a agência **Global Landing**.

### Objetivo
Criar uma experiência digital luxuosa e sofisticada para apresentar imóveis de alto padrão do litoral catarinense, com foco em conversão e geração de leads qualificados.

### Público-Alvo
- Compradores de classe A/B
- Investidores imobiliários
- Estrangeiros buscando imóveis de luxo no Brasil

---

## 2. Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| React | 18.x | Framework UI |
| TypeScript | 5.x | Tipagem estática |
| Vite | 7.x | Build tool |
| Tailwind CSS | 3.4.x | Estilização |
| GSAP | 3.12.x | Animações |
| Swiper | 11.x | Carrosséis |
| yet-another-react-lightbox | 3.x | Galeria de imagens |
| Lucide React | 0.4.x | Ícones |

---

## 3. Estrutura de Pastas

```
prime-imoveis/
├── public/                    # Arquivos estáticos
│   ├── robots.txt            # Configuração de crawlers
│   └── sitemap.xml           # Sitemap para SEO
├── src/
│   ├── components/
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.tsx    # Cabeçalho com navegação
│   │   │   ├── Footer.tsx    # Rodapé com informações
│   │   │   └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
│   │   ├── ui/               # Componentes de UI reutilizáveis
│   │   │   ├── SectionWrapper.tsx  # Wrapper de seções com animações
│   │   │   ├── PropertyCard.tsx    # Card de imóvel
│   │   │   ├── SearchBar.tsx       # Barra de busca com filtros
│   │   │   └── Badge.tsx           # Badges de status
│   │   └── sections/         # Seções da página
│   │       ├── HeroSection.tsx
│   │       ├── FeaturedProperties.tsx
│   │       ├── DifferentialsSection.tsx
│   │       ├── ImmersiveGallery.tsx
│   │       ├── PropertiesCatalog.tsx
│   │       ├── NewLaunchesSection.tsx
│   │       ├── OffPlanSection.tsx
│   │       ├── RegionsMap.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── AgentsSection.tsx
│   │       ├── CtaFormSection.tsx
│   │       └── BlogSection.tsx
│   ├── data/                 # Dados JSON
│   │   ├── properties.json   # 55 imóveis fictícios
│   │   ├── agents.json       # 6 corretores
│   │   ├── testimonials.json # 4 depoimentos
│   │   ├── blog.json         # 5 artigos
│   │   └── regions.json      # 6 regiões
│   ├── lib/                  # Utilitários e tipos
│   │   ├── types.ts          # Definições TypeScript
│   │   ├── utils.ts          # Funções utilitárias
│   │   └── animations.ts     # Configurações GSAP
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Entry point
│   └── index.css             # Estilos globais
├── index.html                # HTML principal
├── tailwind.config.js        # Configuração Tailwind
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
└── package.json              # Dependências
```

---

## 4. Design System

### Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| Gold Champagne | `#C8B89A` | Acento primário, CTAs |
| Gold Light | `#D4C5A9` | Hover states |
| Gold Dark | `#A89880` | Bordas sutis |
| Black Deep | `#0A0A0A` | Background principal |
| Black Secondary | `#111111` | Background alternativo |
| Charcoal | `#1A1A1A` | Cards, inputs |
| Off White | `#F5F0E8` | Texto principal |
| Gray Text | `#8A8580` | Texto secundário |

### Tipografia

| Elemento | Fonte | Pesos |
|----------|-------|-------|
| Display/Headings | Cormorant Garamond | 300, 400, 500, 600 |
| Body/UI | DM Sans | 300, 400, 500 |

### Animações

| Nome | Duração | Easing |
|------|---------|--------|
| fade-up | 1.4s | power3.out |
| fade-in | 0.6s | power3.out |
| shimmer | 2s | linear |
| pulse-gold | 2s | ease-in-out |

---

## 5. Camada de Dados

### Como Atualizar Dados

#### Adicionar um Novo Imóvel

1. Abra `src/data/properties.json`
2. Adicione um novo objeto seguindo a interface `Property`:

```typescript
{
  "id": "prop-XXX",           // ID único
  "title": "Título do Imóvel",
  "type": "apartamento",      // "apartamento" | "casa" | "cobertura"
  "badge": "exclusividade",   // "exclusividade" | "lancamento" | "alto-padrao" | "na-planta"
  "city": "Nome da Cidade",
  "neighborhood": "Bairro",
  "price": 1000000,           // Preço em reais
  "area": 100,                // Área em m²
  "rooms": 3,
  "bathrooms": 2,
  "parkingSpots": 2,
  "floor": 10,                // Opcional
  "description": "Descrição detalhada",
  "features": ["Feature 1", "Feature 2"],
  "images": ["url1", "url2"],
  "featured": false,          // Destacar na home
  "isNewLaunch": false,       // É lançamento
  "isOffPlan": false,         // É na planta
  "agent": "agent-001"        // ID do corretor
}
```

#### Adicionar um Novo Corretor

1. Abra `src/data/agents.json`
2. Adicione um novo objeto seguindo a interface `Agent`:

```typescript
{
  "id": "agent-XXX",
  "name": "Nome Completo",
  "role": "Cargo",
  "region": "Região de Atuação",
  "specialty": "Especialidade",
  "creci": "SC-XXXXX",
  "experience": "X anos de experiência",
  "description": "Descrição profissional",
  "whatsapp": "5547999999999",
  "whatsappMessage": "Mensagem pré-definida",
  "image": "URL da foto",
  "propertiesSold": 50,
  "totalValue": "R$ XXM"
}
```

---

## 6. Referência de Componentes

### PropertyCard

**Props:**
- `property: Property` - Dados do imóvel
- `size?: 'large' | 'medium' | 'small'` - Tamanho do card
- `className?: string` - Classes adicionais

**Variantes:**
- `large` - Aspecto 4/5, min-height 520px (destaques)
- `medium` - Aspecto 3/4, min-height 400px (catálogo)
- `small` - Aspecto 16/9, min-height 220px (relacionados)

### SearchBar

**Props:**
- `onSearch?: (filters: SearchFilters) => void` - Callback de busca
- `className?: string`

**Comportamento:**
- Inicia colapsado com botão "Buscar Imóvel"
- Expande em painel glass com 5 filtros
- Ao submeter, rola para o catálogo e aplica filtros

### SectionWrapper

**Props:**
- `id?: string` - ID para navegação
- `className?: string`
- `dark?: boolean` - Usa background #111111
- `children: ReactNode`
- `number?: string` - Número decorativo de seção

**Funcionalidades:**
- Animação fade-up automática em elementos com `data-animate="fade-up"`
- Linha decorativa dourada em seções dark

---

## 7. Animações

### GSAP + ScrollTrigger

Todas as animações de scroll usam GSAP com ScrollTrigger:

```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animação fade-up
gsap.fromTo(
  element,
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  }
);
```

### Como Desabilitar Animações

Para usuários com `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Como Adicionar um Novo Imóvel

### Passo a Passo

1. **Prepare as imagens**
   - Use imagens do Unsplash ou fotos profissionais
   - Formato: 1200px de largura mínima
   - Relação de aspecto: 4:3 ou 16:9

2. **Edite o arquivo de dados**
   - Abra `src/data/properties.json`
   - Adicione o novo imóvel no final do array
   - Use um ID único (ex: "prop-056")

3. **Preencha todos os campos obrigatórios**
   - id, title, type, badge, city, neighborhood
   - price, area, rooms, bathrooms, parkingSpots
   - description, features, images
   - featured, isNewLaunch, isOffPlan
   - agent (ID do corretor responsável)

4. **Para imóveis na planta**
   - Adicione `deliveryDate` (ex: "Dezembro 2026")
   - Adicione `constructionProgress` (0-100)

5. **Teste localmente**
   - Execute `npm run dev`
   - Verifique se o imóvel aparece corretamente
   - Teste filtros e busca

6. **Deploy**
   - Execute `npm run build`
   - Faça deploy da pasta `dist/`

---

## 9. Como Adicionar um Novo Corretor

1. **Prepare a foto**
   - Foto profissional, preferencialmente 400x400px
   - Use Unsplash ou foto real

2. **Edite `src/data/agents.json`**
   - Adicione o novo corretor no final do array
   - Use um ID único (ex: "agent-007")

3. **Preencha todos os campos**
   - id, name, role, region, specialty
   - creci, experience, description
   - whatsapp (formato: 5547999999999)
   - whatsappMessage (mensagem pré-definida)
   - image (URL da foto)
   - propertiesSold, totalValue

4. **Teste o botão de WhatsApp**
   - Clique no botão do corretor
   - Verifique se a mensagem pré-definida aparece

---

## 10. Integração WhatsApp

### Números Configurados

- **Central:** 5547991230000
- **Corretores:** Cada corretor tem seu próprio número

### Como Atualizar

1. **Número central:**
   - Edite `src/components/layout/WhatsAppButton.tsx`
   - Altere a constante `WHATSAPP_CENTRAL`

2. **Mensagem padrão:**
   - Edite `WHATSAPP_MESSAGE` no mesmo arquivo

3. **Corretores:**
   - Edite `src/data/agents.json`
   - Atualize os campos `whatsapp` e `whatsappMessage`

### Formato da URL

```typescript
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`
```

---

## 11. Deploy

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

### Deploy na Vercel

1. Instale a CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Deploy em Outros Serviços

- **Netlify:** Arraste a pasta `dist/` para o dashboard
- **AWS S3:** Faça upload dos arquivos da pasta `dist/`
- **GitHub Pages:** Use a branch `gh-pages` com o conteúdo de `dist/`

---

## 12. Guia de Customização

### Alterar Cores

Edite `src/index.css` e `tailwind.config.js`:

```css
:root {
  --gold: #NOVA_COR;
  --gold-light: #NOVA_COR_LIGHT;
  --gold-dark: #NOVA_COR_DARK;
}
```

### Alterar Fontes

1. Importe as novas fontes em `src/index.css`
2. Atualize as variáveis CSS
3. Atualize `tailwind.config.js`

### Alterar Textos

Todos os textos visíveis estão nos componentes em `src/components/sections/`. 
Edite diretamente os arquivos .tsx.

---

## 13. SEO

### Meta Tags

As meta tags estão configuradas em `index.html`:

```html
<title>Prime Imóveis | Imóveis de Alto Padrão em Balneário Camboriú</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
```

### Open Graph

```html
<meta property="og:title" content="Prime Imóveis | O Luxo Tem Endereço">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
```

### Geo Tags

```html
<meta name="geo.region" content="BR-SC">
<meta name="geo.placename" content="Balneário Camboriú">
<meta name="geo.position" content="-26.9906;-48.6348">
```

---

## 14. Performance

### Otimizações Implementadas

- Imagens lazy loading
- Animações com GPU acceleration
- Code splitting por seção
- Fontes com `font-display: swap`
- CSS variables para temas

### Métricas Alvo

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## 15. Acessibilidade

### Recursos

- Navegação por teclado
- ARIA labels em elementos interativos
- Contraste de cores adequado
- Suporte a `prefers-reduced-motion`
- Estrutura semântica HTML5

### Testes

Use as ferramentas:
- Lighthouse (Chrome DevTools)
- axe DevTools
- WAVE Evaluation Tool

---

## 16. Suporte

Para dúvidas ou suporte técnico:

**Global Landing**
- Website: https://globallanding.com.br
- Email: contato@globallanding.com.br

---

*Documentação criada em Janeiro de 2025*
*Prime Imóveis - Todos os direitos reservados*
