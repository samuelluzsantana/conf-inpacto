import { forwardRef } from "react";

const BotaoInicial = forwardRef(
  (
    {
      texto = "Iniciar",
      icone,
      carregando = false,
      tamanho = "md",
      className = "",
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || carregando;

    const tamanhoStyles = {
      sm: "padding: 6px 10px; font-size: 0.85rem; border-radius: 6px;",
      md: "padding: 10px 14px; font-size: 1rem; border-radius: 8px;",
      lg: "padding: 14px 18px; font-size: 1.125rem; border-radius: 10px;",
    };

    const baseStyle =
      "display: inline-flex; align-items: center; gap: 8px; border: none; cursor: pointer; font-weight: 600;";
    const enabledStyle =
      "background: linear-gradient(90deg, #4f46e5, #06b6d4); color: white; box-shadow: 0 4px 14px rgba(0,0,0,0.1);";
    const disabledStyle = "background: #e5e7eb; color: #9ca3af; cursor: not-allowed; box-shadow: none;";

    return (
      <button
        ref={ref}
        type="button"
        aria-disabled={isDisabled}
        disabled={isDisabled}
        className={className}
        style={{
          ...parseStyleString(tamanhoStyles[tamanho]),
          ...(isDisabled ? parseStyleString(disabledStyle) : parseStyleString(enabledStyle)),
          ...parseStyleString(baseStyle),
        }}
        {...rest}
      >
        {carregando ? (
          <Spinner aria-hidden="true" />
        ) : (
          icone ?? null
        )}
        <span style={{ display: "inline-block", lineHeight: 1 }}>
          {children ?? texto}
        </span>
      </button>
    );
  }
);

BotaoInicial.displayName = "BotaoInicial";

/** Pequeno spinner SVG usado no estado de carregamento */
function Spinner(props) {
  return (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
      style={{ marginRight: 4 }}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".25" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

/**
 * Utility: transforma uma string de estilos CSS em um objeto de estilo inline.
 * Exemplo: "padding: 4px; color: red;" => { padding: "4px", color: "red" }
 *
 * Nota: simples parser — adequado para uso com as strings definidas neste arquivo.
 */
function parseStyleString(styleStr) {
  const style = {};
  styleStr.split(";").forEach((rule) => {
    const [rawKey, rawValue] = rule.split(":").map((s) => s && s.trim());
    if (!rawKey || !rawValue) return;
    // converte keys em camelCase simples
    const key = rawKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    style[key] = rawValue;
  });
  return style;
}

export default BotaoInicial;
