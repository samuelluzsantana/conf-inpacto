import PropTypes from "prop-types";
import logoIcon from "../assets/logos/logo sem tipo.svg";
import logoFull from "../assets/logos/Logo vetorizado-branco-01.svg";

const LogoIcon = ({ color = "white", size = "default", icon = false }) => {
  // Define os tamanhos
  const sizeClasses = {
    small: "h-6",
    default: "h-8",
    large: "h-12",
    xlarge: "h-16",
  };

  const heightClass = sizeClasses[size] || sizeClasses.default;

  // Se icon=true, mostra apenas o ícone
  if (icon) {
    return (
      <img
        src={logoIcon}
        alt="Logo Icon"
        className={`${heightClass} w-auto`}
        style={{
          filter:
            color !== "white"
              ? `brightness(0) saturate(100%) invert(${color === "black" ? "0" : "1"})`
              : "none",
        }}
      />
    );
  }

  // Desktop: mostra logo completo
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon - visível sempre */}
      <img
        src={logoIcon}
        alt="Logo Icon"
        className={`${heightClass} w-auto`}
        style={{
          filter:
            color !== "white"
              ? `brightness(0) saturate(100%) invert(${color === "black" ? "0" : "1"})`
              : "none",
          marginRight: "1rem",
        }}
      />

      {/* Logo Full - apenas desktop */}
      <img
        src={logoFull}
        alt="Logo"
        className={`${heightClass} hidden w-[8em] lg:block`}
        style={{
          filter:
            color !== "white"
              ? `brightness(0) saturate(100%) invert(${color === "black" ? "0" : "1"})`
              : "none",
        }}
      />
    </div>
  );
};

LogoIcon.propTypes = {
  color: PropTypes.oneOf(["white", "black"]),
  size: PropTypes.oneOf(["small", "default", "large", "xlarge"]),
  icon: PropTypes.bool,
};

export default LogoIcon;
