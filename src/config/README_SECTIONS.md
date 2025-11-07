# Configuração de Seções

Este arquivo permite habilitar ou desabilitar seções do site de forma simples.

**IMPORTANTE:** Quando você desabilita uma seção, ela será:

- ✅ Removida do conteúdo da página
- ✅ Removida automaticamente do menu de navegação (Header)
- ✅ Oculta em todas as visualizações (desktop e mobile)

## Como usar

1. Abra o arquivo `src/config/sections.js`
2. Mude o valor de `true` para `false` para desabilitar uma seção
3. Mude o valor de `false` para `true` para habilitar uma seção

## Exemplo

```javascript
export const sectionsConfig = {
  inicio: true, // ✅ Seção INÍCIO está visível (e no menu)
  conferencia: false, // ❌ Seção A CONFERÊNCIA está oculta (e removida do menu)
  bandas: false, // ❌ Seção BANDAS está oculta (e removida do menu)
  convidados: false, // ❌ Seção CONVIDADOS está oculta (e removida do menu)
  "programe-se": false, // ❌ Seção PROGRAME-SE está oculta (e removida do menu)
  localizacao: false, // ❌ Seção LOCALIZAÇÃO está oculta (e removida do menu)
  faq: false, // ❌ Seção FAQ está oculta (e removida do menu)
  footer: true, // ✅ Footer está visível
};
```

## Desenvolvimento Incremental

Você pode ir habilitando seções conforme desenvolve:

**Semana 1:** Apenas `inicio` e `footer`

```javascript
inicio: true, footer: true
// Menu mostrará apenas: INÍCIO
```

**Semana 2:** Adicionar conferência

```javascript
inicio: true, conferencia: true, footer: true
// Menu mostrará: INÍCIO | A CONFERÊNCIA
```

**Semana 3:** Adicionar bandas

```javascript
inicio: true, conferencia: true, bandas: true, footer: true
// Menu mostrará: INÍCIO | A CONFERÊNCIA | BANDAS
```

E assim por diante...

## Seções Disponíveis

- **inicio** - Seção inicial com gradiente e imagem de fundo
- **conferencia** - Informações sobre a conferência
- **bandas** - Informações sobre as bandas
- **convidados** - Grid de palestrantes/convidados
- **programe-se** - Programação do evento (note o hífen!)
- **localizacao** - Mapa e informações de localização
- **faq** - Perguntas frequentes
- **footer** - Rodapé com logos e redes sociais

## Observações Importantes

⚠️ **Atenção ao nome "programe-se"** - Este deve incluir o hífen: `"programe-se": false`

✅ O Header se ajusta automaticamente - apenas links de seções habilitadas aparecem

✅ Mantém funcionalidade de scroll e navegação - tudo continua funcionando perfeitamente
