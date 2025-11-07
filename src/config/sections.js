/**
 * Configuração de seções do site
 * Defina como `true` para habilitar ou `false` para desabilitar cada seção
 *
 * IMPORTANTE: Os nomes aqui devem corresponder aos slugs usados no código:
 * - inicio (seção inicial)
 * - conferencia (A Conferência)
 * - bandas (Bandas)
 * - convidados (Convidados/Palestrantes)
 * - programe-se (Programação)
 * - localizacao (Localização)
 * - faq (Perguntas Frequentes)
 * - footer (Rodapé)
 */
export const sectionsConfig = {
  inicio: true,
  conferencia: true,
  bandas: false,
  convidados: false,
  "programe-se": false, // Note o hífen
  localizacao: true,
  faq: true,
  footer: true,
};

/**
 * Verifica se uma seção está habilitada
 * @param {string} sectionName - Nome da seção (deve corresponder às chaves em sectionsConfig)
 * @returns {boolean}
 */
export const isSectionEnabled = (sectionName) => {
  return sectionsConfig[sectionName] ?? false;
};
