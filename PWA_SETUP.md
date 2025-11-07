# 📱 PWA (Progressive Web App) - Configuração InPacto 2026

## O que foi criado?

### 1. `public/manifest.json`

Arquivo de configuração do Progressive Web App que define como a aplicação se comporta quando instalada em dispositivos.

### 2. Meta tags no `index.html`

Meta tags necessárias para PWA, SEO e redes sociais.

---

## 📋 Recursos do Manifest

### Informações Básicas

- **name**: Nome completo da aplicação
- **short_name**: Nome curto (até 12 caracteres) para uso em ícones
- **description**: Descrição da conferência

### Configuração Visual

- **theme_color**: `#1a1a1a` (cor do tema)
- **background_color**: `#ffffff` (cor de fundo padrão)
- **display**: `standalone` (sem barras do navegador)
- **orientation**: `portrait-primary` (modo retrato)

### Ícones

Define ícones em diferentes tamanhos:

- **192x192**: Para home screen (padrão)
- **512x512**: Para splash screen
- **Maskable icons**: Para suporte a diferentes formas em dispositivos modernos

### Atalhos (Shortcuts)

Acesso rápido no menu de contexto:

1. ✏️ **Fazer Inscrição** - Direto para formulário
2. ℹ️ **Informações** - Detalhes da conferência
3. ❓ **FAQ** - Perguntas frequentes

### Share Target

Permite compartilhar conteúdo para a app via Web Share API

### Screenshots

Imagens do app para diferentes tamanhos de tela (narrow/wide)

---

## 🎯 Como Usar

### Para Desktop (Chrome, Edge, Firefox)

1. Abra o site: https://conf-inpacto.vercel.app
2. Clique em "Instalar" (ícone no canto da barra de endereço)
3. A app abre em janela própria

### Para Mobile (Android)

1. Abra em Chrome
2. Menu → "Instalar app"
3. Ícone atalho é criado na home screen

### Para iOS (Safari)

1. Abra em Safari
2. Compartilhar → "Adicionar à Tela de Início"
3. Funciona como web app

---

## 🖼️ Ícones Necessários

Você precisa gerar/adicionar os seguintes ícones à pasta `public/`:

### Ícones Principais (obrigatórios)

```
icon-192.png       (192x192 px)
icon-512.png       (512x512 px)
```

### Ícones Maskable (moderno)

```
icon-maskable-192.png    (192x192 px)
icon-maskable-512.png    (512x512 px)
```

### Screenshots

```
screenshot-540.png       (540x720 px - mobile)
screenshot-1280.png      (1280x720 px - desktop)
screenshot-540-dark.png  (modo escuro)
screenshot-1280-dark.png (modo escuro)
```

### Atalhos

```
shortcut-inscricao-192.png
shortcut-info-192.png
shortcut-faq-192.png
```

### Open Graph (para redes sociais)

```
og-image.png  (1200x630 px recomendado)
```

---

## 🎨 Como Gerar Ícones

### Ferramenta Recomendada: Favicon Generator

https://www.favicon-generator.org/ ou https://realfavicongenerator.net/

### Usando AI/Ferramentas Online

1. Midjourney / DALL-E: Gere uma imagem do logo
2. Upload para: https://www.pwa-asset-generator.firebaseapp.com/
3. Baixe todos os ícones automaticamente

### Requisitos Técnicos

- **Formato**: PNG com transparência
- **Cores**: Devem ser visíveis em fundo claro E escuro
- **Padding**: Deixe ~10% de padding nos ícones maskable
- **Logo**: Centralize o logo dentro do ícone

---

## ✅ Checklist de Implementação

### PWA Setup

- [x] `manifest.json` criado
- [x] Meta tags adicionadas ao `index.html`
- [ ] Ícones gerados e adicionados à `public/`
- [ ] Service Worker criado (opcional mas recomendado)
- [ ] Teste PWA com DevTools (F12 → Application → Manifest)

### SEO & Social Media

- [x] Meta tags og: (Open Graph)
- [x] Twitter Card adicionado
- [x] Canonical URL configurado
- [x] Keywords inseridas
- [x] Description meta tag
- [ ] og-image.png criada e otimizada

### Testing

- [ ] Teste "Instalar" em Chrome Desktop
- [ ] Teste em Android Chrome
- [ ] Teste em iOS Safari
- [ ] Valide manifest.json: https://www.pwabuilder.com/
- [ ] Teste PageSpeed Insights

---

## 📱 Service Worker (Opcional mas Recomendado)

Para funcionalidade completa de PWA, você pode criar um Service Worker:

```javascript
// public/sw.js
const CACHE_NAME = "inpacto-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
```

E adicione no `index.html`:

```html
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
</script>
```

---

## 🔗 Validação

### Ferramentas de Validação

1. **PWA Builder**: https://www.pwabuilder.com/
2. **Lighthouse**: Chrome DevTools (F12)
3. **Web.dev**: https://web.dev/measure/
4. **Manifest Validator**: https://manifest-validator.appspot.com/

---

## 📊 Benefícios do PWA

✅ Instalável em home screen
✅ Funciona offline (com Service Worker)
✅ Notificações push
✅ Acesso à câmera, localização, etc
✅ Melhor performance
✅ Seguro (HTTPS obrigatório)
✅ Melhor SEO
✅ Melhor compartilhamento em redes sociais

---

## 🚀 Deploy

O Vercel suporta automaticamente PWA:

1. Certifique-se que está com HTTPS ✓ (Vercel fornece)
2. Manifest.json está em `public/` ✓
3. Ícones estão em `public/` (pendente)
4. Meta tags estão em `index.html` ✓
5. Deploy: `git push` + configure no Vercel

O site já está pronto para funcionar como PWA!

---

## 📝 Próximos Passos

1. Gerar/adicionar ícones à pasta `public/`
2. Criar og-image.png para redes sociais
3. (Opcional) Criar Service Worker
4. Testar com Lighthouse
5. Deploy e monitorar instalações

---

**Status**: 70% Completo ✓
**Data**: November 7, 2025
**Próxima ação**: Adicionar ícones e images
