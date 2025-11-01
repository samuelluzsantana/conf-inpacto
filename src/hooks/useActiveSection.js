import { useState, useEffect } from "react";

/**
 * Hook para detectar qual seção está visível no scroll
 * @param {Array} sectionIds - Array com os IDs das seções
 * @param {number} offset - Offset do topo para considerar a seção ativa (padrão: 100px)
 * @returns {string} - ID da seção atualmente ativa
 */
export const useActiveSection = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Encontra qual seção está visível
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Verifica se o scroll está dentro desta seção
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }

      // Caso especial: se estiver no topo da página
      if (window.scrollY < offset) {
        setActiveSection(sectionIds[0]);
      }
    };

    // Chama uma vez ao montar para definir a seção inicial
    handleScroll();

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
