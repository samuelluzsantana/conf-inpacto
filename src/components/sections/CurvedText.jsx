import { useEffect, useState } from "react";
import CurvedMarquee from "./CurvedMarquee";

function CurvedText() {
  const [fontSize, setFontSize] = useState(6);

  const text =
    "Conferência Inpacto ✦ 2026 ✦ SATURADOS ✦ 2026 ✦ Conferência Inpacto";

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
      className="relative h-[20em] overflow-hidden sm:h-[18em] lg:h-[18.5em]"
    >
      {/* Texto curvado no topo */}
      <div className="absolute left-0 right-0 top-[10em] z-20 flex w-full justify-center pt-0 sm:pt-2 lg:pt-4">
        <CurvedMarquee
          marqueeText={text}
          speed={1.2}
          curveAmount={180}
          direction="left"
          interactive={true}
          fontSize={fontSize}
          className="curved-text-gradient"
        />
      </div>
    </section>
  );
}

export default CurvedText;
