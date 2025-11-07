import maoEsquerda from "../../assets/elementos/mao-esquerda.png";
import maoDireita from "../../assets/elementos/mao-direita.png";

const HomeBackground = () => {
  return (
    <>
      {/* Mão Esquerda - Canto Inferior Esquerdo */}
      <div className="pointer-events-none absolute bottom-[-8em] left-0 -z-10 md:bottom-[1em]">
        <img
          src={maoEsquerda}
          alt="Mão esquerda"
          className="h-[32em] w-auto object-contain sm:h-40 md:h-[28em] lg:h-56 xl:h-64"
        />
      </div>

      {/* Mão Direita - Canto Superior Direito */}
      <div className="pointer-events-none absolute right-0 top-[-5rem] -z-10 md:top-[1rem]">
        <img
          src={maoDireita}
          alt="Mão direita"
          className="h-[32em] w-auto object-contain sm:h-40 md:h-[28em] lg:h-56 xl:h-64"
        />
      </div>
    </>
  );
};

export default HomeBackground;
