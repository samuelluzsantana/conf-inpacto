import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import maoEsquerda from "../../assets/elementos/mao-esquerda.png";
import maoDireita from "../../assets/elementos/mao-direita.png";
import paperBg from "../../assets/backgrounds/paper.webp";

gsap.registerPlugin(ScrollTrigger);

const HomeBackground = () => {
  const maoEsquerdaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax suave na mão esquerda
      gsap.to(maoEsquerdaRef.current, {
        y: -80, // movimento sutil para cima
        x: -30,
        rotation: -3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: maoEsquerdaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Fundo fixo de papel */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${paperBg})` }}
      />

      {/* Mão Direita - Fixa, sem parallax */}
      <div className="pointer-events-none absolute right-0 top-[0.95em] z-10 sm:top-[-1em] md:top-[-1em] lg:top-20 xl:top-24">
        <img
          src={maoDireita}
          alt="Mão direita"
          className="h-[18rem] w-auto object-contain sm:h-[22rem] md:h-[26rem] lg:h-[30rem] xl:h-[34rem]"
        />
      </div>

      {/* Mão Esquerda - Com parallax */}
      <div
        ref={maoEsquerdaRef}
        className="pointer-events-none absolute bottom-[-4em] left-0 z-10 sm:left-0 md:left-0 lg:left-0"
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
