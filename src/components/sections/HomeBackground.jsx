import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import maoEsquerda from "../../assets/elementos/mao-esquerda.png";
import maoDireita from "../../assets/elementos/mao-direita.png";
import paperBg from "../../assets/backgrounds/paper.webp";

gsap.registerPlugin(ScrollTrigger);

const HomeBackground = () => {
  const maoDireitaRef = useRef(null);
  const maoEsquerdaRef = useRef(null);

  useEffect(() => {
    // Efeito de paralax para a mão direita (move para baixo no scroll)
    gsap.to(maoDireitaRef.current, {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: maoDireitaRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Efeito de paralax para a mão esquerda (move para cima no scroll)
    gsap.to(maoEsquerdaRef.current, {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: maoEsquerdaRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      {/* Fundo de papel fixo apenas na seção Home */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${paperBg})` }}
      />

      {/* Mão Direita - Canto Superior Direito */}
      <div
        ref={maoDireitaRef}
        className="pointer-events-none absolute right-0 top-[-1rem] -z-10 md:top-[-1rem] lg:top-[3rem] xl:top-[12rem]"
      >
        <img
          src={maoDireita}
          alt="Mão direita"
          className="h-[25em] w-auto object-contain sm:h-40 md:h-[28em] lg:h-[32em] xl:h-[36em]"
        />
      </div>

      {/* Mão Esquerda - Canto Inferior Esquerdo */}
      <div
        ref={maoEsquerdaRef}
        className="pointer-events-none absolute bottom-[-3em] left-[-10em] -z-10 md:bottom-0"
      >
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
