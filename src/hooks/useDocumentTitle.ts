import { useEffect } from "react";

/**
 * Hook personalizado para atualizar o título do documento
 * @param title - O título da página atual
 * @param suffix - Sufixo a ser adicionado (padrão: "InPacto 2026")
 */
export const useDocumentTitle = (
  title: string,
  suffix: string = "Conferência InPacto",
): void => {
  useEffect(() => {
    const previousTitle = document.title;

    if (title) {
      document.title = `${title} | ${suffix}`;
    } else {
      document.title = suffix;
    }

    // Cleanup: restaura o título anterior quando o componente desmonta
    return () => {
      document.title = previousTitle;
    };
  }, [title, suffix]);
};

/**
 * Mapeamento de slugs para títulos de página
 */
export const PAGE_TITLES: Record<string, string> = {
  inicio: "Início",
  conferencia: "A Conferência",
  bandas: "Bandas",
  convidados: "Convidados",
  "programe-se": "Programe-se",
  localizacao: "Localização",
  faq: "FAQ",
};

/**
 * Obtém o título da página baseado no pathname ou slug
 * @param pathname - O pathname da rota atual ou slug da seção
 * @returns O título correspondente
 */
export const getTitleFromPath = (pathname: string): string => {
  // Remove a barra inicial do pathname
  const cleanPath = pathname.replace(/^\//, "") || "inicio";

  return PAGE_TITLES[cleanPath] || PAGE_TITLES.inicio;
};
