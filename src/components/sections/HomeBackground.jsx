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
    // Efeito de parallax para a mão direita (move para baixo e ligeiramente para a direita)
    gsap.to(maoDireitaRef.current, {
      y: 300,
      x: 50,
      rotation: 5,
      scale: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: maoDireitaRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Efeito de parallax para a mão esquerda (move para cima e ligeiramente para a esquerda)
    gsap.to(maoEsquerdaRef.current, {
      y: -200,
      x: -50,
      rotation: -5,
      scale: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: maoEsquerdaRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
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

      {/* Mão Direita - Sempre no Topo da Página */}
      <div
        ref={maoDireitaRef}
        className="pointer-events-none absolute right-0 top-[0.95em] z-10 will-change-transform sm:top-14 md:top-16 lg:top-20 xl:top-24"
      >
        <img
          src={maoDireita}
          alt="Mão direita"
          className="h-[18rem] w-auto object-contain sm:h-[22rem] md:h-[26rem] lg:h-[30rem] xl:h-[34rem]"
        />
      </div>

      {/* Mão Esquerda - Sempre na Parte de Baixo */}
      <div
        ref={maoEsquerdaRef}
        className="pointer-events-none absolute bottom-0 left-0 z-10 will-change-transform sm:left-0 md:left-0 lg:left-0"
      >
        <img
          src={maoEsquerda}
          alt="Mão esquerda"
          className="h-[18rem] w-auto translate-x-[-40%] object-contain sm:h-[22rem] sm:translate-x-[-35%] md:h-[26rem] md:translate-x-[-30%] lg:h-[30rem] lg:translate-x-[-25%] xl:h-[34rem] xl:translate-x-[-20%]"
        />
      </div>
    </>
  );
};

export default HomeBackground;
