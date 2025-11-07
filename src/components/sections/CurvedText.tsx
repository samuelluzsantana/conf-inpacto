import CurvedLoop from "./CurvedLoop";
import casaColorida from "../../assets/elementos/26_casa.png";

function CurvedText() {
  return (
    <section
      id="curved-text"
      className="relative flex min-h-[18em] flex-col items-center justify-start pt-10 sm:min-h-[20em] sm:pt-12"
    >
      {/* Texto curvado no topo */}
      <div className="flex w-full justify-center">
        <CurvedLoop
          marqueeText="Conferência Inpacto ✦ 2026 ✦ DOPAMINA ✦ SATURADOS ✦ 2026 ✦"
          speed={1.2}
          curveAmount={100}
          direction="left"
          interactive={true}
          fontSize={2.6}
          className="curved-text-gradient"
        />
      </div>

      {/* Imagem logo abaixo */}
      <div className="mt-6 flex w-full justify-center">
        <img
          src={casaColorida}
          alt="Casa colorida"
          className="h-[12rem] w-auto object-contain sm:h-[14rem] md:h-[16rem]"
        />
      </div>
    </section>
  );
}

export default CurvedText;
