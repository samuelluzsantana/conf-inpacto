# Atualização Dinâmica do Título da Página

## Funcionalidade

O título da aba do navegador é atualizado dinamicamente conforme o usuário navega entre as seções do site.

## Formato do Título

```
<Nome da seção> | InPacto 2026
```

## Exemplos

| Seção         | Título Exibido              |
| ------------- | --------------------------- |
| HOME          | Home \| InPacto 2026        |
| A CONFERÊNCIA | Conferência \| InPacto 2026 |
| BANDAS        | Bandas \| InPacto 2026      |
| CONVIDADOS    | Convidados \| InPacto 2026  |
| PROGRAME-SE   | Programação \| InPacto 2026 |
| LOCALIZAÇÃO   | Localização \| InPacto 2026 |
| FAQ           | FAQ \| InPacto 2026         |

## Implementação

### Hook Customizado: `useDocumentTitle`

Localizado em: `src/hooks/useDocumentTitle.ts`

Este hook gerencia a atualização do `document.title` de forma automática e eficiente.

**Funcionalidades:**

- Atualiza o título quando a rota muda
- Restaura o título anterior quando o componente desmonta
- Suporta personalização do sufixo (padrão: "InPacto 2026")

**Funções auxiliares:**

- `PAGE_TITLES`: Objeto que mapeia slugs das rotas para títulos amigáveis
- `getTitleFromPath()`: Função que retorna o título baseado no pathname da URL

### Integração no Header

O componente `Header` usa o hook para atualizar automaticamente o título:

```jsx
const currentTitle = getTitleFromPath(location.pathname);
useDocumentTitle(currentTitle);
```

## Comportamento

- ✅ **Clique no menu**: Título atualizado imediatamente
- ✅ **URL direta**: Título correto ao acessar via URL
- ✅ **Navegação do navegador**: Funciona com botões voltar/avançar
- ✅ **Scroll**: Título permanece consistente durante scroll

## Personalização

Para adicionar novas seções ou modificar títulos, edite o objeto `PAGE_TITLES` em `src/hooks/useDocumentTitle.ts`:

```typescript
export const PAGE_TITLES: Record<string, string> = {
  inicio: "Home",
  conferencia: "Conferência",
  // Adicione novas seções aqui
  novaSessao: "Nova Seção",
};
```
