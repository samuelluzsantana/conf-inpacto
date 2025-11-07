import maoEsquerda from "../../assets/elementos/mao-esquerda.png";
import maoDireita from "../../assets/elementos/mao-direita.png";

const HomeBackground = () => {
  return (
    <>
      {/* Mão Direita - Canto Superior Direito */}
      <div className="pointer-events-none absolute right-0 top-[-1rem] -z-10 md:top-[-1rem] lg:top-[3rem]">
        <img
          src={maoDireita}
          alt="Mão direita"
          className="h-[25em] w-auto object-contain sm:h-40 md:h-[28em] lg:h-[32em] xl:h-[36em]"
        />
      </div>
      {/* Mão Esquerda - Canto Inferior Esquerdo */}
      <div className="pointer-events-none absolute bottom-[-3em] left-[-10em] -z-10 md:bottom-0">
        <img
          src={maoEsquerda}
          alt="Mão esquerda"
          className="h-[25em] w-auto object-contain sm:h-40 md:h-[28em] lg:h-[32em] xl:h-[36em]"
        />
      </div>
    </>
  );
};

export default HomeBackground;
