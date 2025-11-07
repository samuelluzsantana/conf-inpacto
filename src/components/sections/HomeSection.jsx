import HomeBackground from "./HomeBackground";
import GradientText from "../ui/GradientText";

const HomeSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen scroll-mt-16 overflow-hidden bg-cover bg-center bg-no-repeat sm:scroll-mt-20"
    >
      {/* Background com as mãos */}
      <HomeBackground />

      {/* 🔹 Bloco superior esquerdo */}
      <div className="absolute left-4 top-16 z-20 flex w-auto max-w-[92%] flex-col text-[#2d2d2d] sm:left-8 sm:top-28 md:left-12 md:top-36 lg:left-16 lg:top-56">
        {/* Título */}
        <div className="flex w-full flex-wrap justify-between text-lg font-extrabold uppercase sm:text-2xl md:text-3xl lg:text-4xl">
          <p>Conferência</p>
          <p className="ml-2 text-right">Inpacto</p>
        </div>

        {/* Data */}
        <GradientText
          colors={["#FA1462", "#E23973", "#9952ec"]}
          animationSpeed={3}
          className="mt-1 flex w-full flex-wrap justify-between text-base font-extrabold uppercase sm:mt-2 sm:text-xl md:text-2xl lg:text-3xl"
        >
          <p>01 e 02 de maio</p>
          <p className="ml-2 text-right">2026</p>
        </GradientText>

        {/* Local */}
        <div className="mt-3 w-full text-[0.75rem] font-medium uppercase tracking-widest text-[#444] sm:text-sm md:text-[1.5rem] lg:text-[1.5rem]">
          Presbiteriana de Pinheiros
        </div>
      </div>

      {/* 🔹 Bloco inferior direito */}
      <div className="absolute bottom-16 right-4 z-20 text-right text-[#2d2d2d] sm:bottom-20 sm:right-8 md:bottom-24 md:right-12 lg:bottom-32 lg:right-16">
        <GradientText
          colors={["#FA1462", "#9952ec"]}
          animationSpeed={3}
          className="valor-ingresso flex flex-wrap items-baseline justify-end text-lg font-extrabold uppercase sm:text-2xl md:text-3xl lg:text-4xl"
        >
          <p className="mr-1">Ingresso</p>
          <p>R$:198</p>
        </GradientText>

        <div className="parcela mt-1 text-[#444] lg:text-[2rem]">
          (em até 6x s/juros)
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
