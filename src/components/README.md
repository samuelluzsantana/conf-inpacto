# Estrutura de Componentes

Esta pasta contém todos os componentes React do projeto, organizados por categoria.

## 📁 Estrutura de Pastas

```
components/
├── layout/              # Componentes de estrutura da página
│   ├── Header.jsx      # Cabeçalho com navegação
│   └── Footer.jsx      # Rodapé com redes sociais
│
├── sections/           # Componentes de seções da página
│   ├── HomeSection.jsx         # Seção inicial (hero)
│   ├── FAQSection.jsx          # Perguntas frequentes
│   ├── LocationSection.jsx     # Localização e mapa
│   ├── SpeakersSection.jsx     # Grade de palestrantes
│   ├── SpeakersGrid.jsx        # Grid layout dos speakers
│   └── SpeakersSwiper.jsx      # Carrossel dos speakers
│
├── ui/                 # Componentes reutilizáveis de interface
│   ├── GradientButton.jsx      # Botão com gradiente animado
│   ├── ButtonInscricoes.jsx    # Botão de inscrições
│   └── Logo.jsx                # Componente de logo
│
├── carousel/           # Componentes de carrossel (Embla)
│   ├── EmblaCarousel.jsx
│   ├── EmblaCarouselArrowButtons.jsx
│   ├── EmblaCarouselDotButton.jsx
│   └── embla.css
│
├── hooks/             # Custom React hooks
│   ├── useDotButton.js
│   └── usePrevNextButtons.js
│
└── index.js           # Arquivo de exportação centralizado
```

## 🎯 Uso

### Importação Simplificada

Use o arquivo `index.js` para importações mais limpas:

```javascript
// ✅ Recomendado - usando o index.js
import { Header, Footer, HomeSection, GradientButton } from "./components";

// ❌ Evite - importações diretas individuais
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
```

### Importação Direta

Quando necessário, você pode importar diretamente:

```javascript
import HomeSection from "./components/sections/HomeSection";
import GradientButton from "./components/ui/GradientButton";
```

## 📋 Categorias

### Layout Components

Componentes que definem a estrutura principal da página (Header, Footer)

### Section Components

Componentes que representam seções completas do site

### UI Components

Componentes reutilizáveis de interface (botões, ícones, etc)

### Carousel Components

Componentes relacionados ao carrossel Embla

### Hooks

Custom hooks para lógica reutilizável

## 🔧 Convenções

- Nomes de componentes em **PascalCase**
- Nomes de arquivos devem corresponder ao nome do componente
- Um componente por arquivo
- Props documentadas quando necessário
- Componentes devem ser o mais reutilizáveis possível
