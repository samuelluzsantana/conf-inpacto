import { useEffect, useState } from "react";
import CurvedMarquee from "./CurvedMarquee";
import casaColorida from "../../assets/elementos/26_casa.png";

function CurvedText() {
  const [fontSize, setFontSize] = useState(6); // mobile por padrão

  useEffect(() => {
    const handleResize = () => {
      // lg breakpoint é 1024px
      if (window.innerWidth >= 1024) {
        setFontSize(3); // web
      } else {
        setFontSize(6); // mobile
      }
    };

    handleResize(); // chamar na montagem
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="curved-text"
      className="relative h-[30em] overflow-hidden sm:h-[38em] lg:h-[75em]"
    >
      {/* Texto curvado no topo */}
      <div className="absolute left-0 right-0 top-[10em] z-20 flex w-full justify-center pt-0 sm:pt-2 lg:pt-4">
        <CurvedMarquee
          marqueeText="Conferência Inpacto ✦ 2026 ✦ DOPAMINA ✦ SATURADOS ✦ 2026 ✦"
          speed={1.2}
          curveAmount={180}
          direction="left"
          interactive={true}
          fontSize={fontSize}
          className="curved-text-gradient"
        />
      </div>

      {/* Imagem de ponta a ponta */}
      <div className="absolute inset-x-0 bottom-[-1em] z-10 w-full">
        <img
          src={casaColorida}
          alt="Casa colorida"
          className="h-auto w-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}

export default CurvedText;
