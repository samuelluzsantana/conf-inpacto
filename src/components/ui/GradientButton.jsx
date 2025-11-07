const GradientButton = ({ text = "INSCREVA-SE", onClick, href }) => {
  const buttonClasses = `
    bg-gradient-to-r from-[#FF8F44] via-[#FA1462] via-[#35126A] to-[#4DC1E7]
    text-white uppercase font-semibold tracking-wide
    px-10 py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)]
    transition-all duration-500 bg-[length:200%_auto]
    hover:bg-right-center hover:scale-105 active:scale-95
    cursor-pointer
  `;

  // Se tiver href, renderiza como link
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {text}
      </a>
    );
  }

  // Caso contrário, renderiza como botão
  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default GradientButton;
