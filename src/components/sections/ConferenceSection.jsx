import LiquidChrome from "../LiquidChrome";

function ConferenceSection() {
  return (
    <section
      id="conferencia"
      className="relative flex min-h-screen scroll-mt-16 items-center justify-center overflow-hidden bg-black sm:scroll-mt-20"
    >
      {/* 💧 Fundo LiquidChrome com efeito chromático */}
      <div className="absolute inset-0 overflow-hidden">
        <LiquidChrome
          colors={[" #FA1462", "#E23973", "#6F00FF"]}
          speed={0.35}
          amplitude={0.6}
          frequencyX={3}
          frequencyY={2}
          interactive={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Título Principal */}
        <h1 className="mb-4 text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_30px_rgba(250,20,98,0.5)] sm:text-7xl lg:text-8xl">
          Saturados no limite
          <span className="from-pink via-magenta to-purple block bg-gradient-to-r bg-clip-text text-transparent">
            da dopamina
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mb-8 text-xl font-semibold text-gray-300 sm:text-2xl">
          O mundo promete prazer sem limites
        </p>

        {/* Texto Principal */}
        <div className="mx-auto mb-10 max-w-3xl space-y-6 text-base leading-relaxed text-gray-200 sm:text-lg">
          <p className="font-light">
            Nunca sentimos tanto e nunca estivemos tão vazios. Vivemos viciados
            em estímulos, sempre conectados e sempre cansados. A rotina virou
            espetáculo, e nossa mente se tornou um campo de{" "}
            <span className="font-semibold text-white">ruído constante</span>.
          </p>

          <p className="font-light">
            Mas o problema não é só cultural,{" "}
            <span className="text-magenta font-bold">é espiritual</span>.
            Buscamos dopamina quando o que falta é{" "}
            <span className="text-pink font-bold">propósito</span>. Fomos feitos
            para mais do que recompensas instantâneas.
          </p>

          <p className="text-lg font-medium text-white sm:text-xl">
            Jesus nos chama a um descanso que o mundo não pode dar.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mx-auto max-w-2xl space-y-6">
          <p className="text-lg font-semibold text-gray-100 sm:text-xl">
            A Conferência InPacto 2026 é um convite para{" "}
            <span className="text-pink">desacelerar</span>,{" "}
            <span className="text-magenta">silenciar o excesso</span> e{" "}
            <span className="text-purple">redescobrir a vida</span> que só
            existe em Cristo.
          </p>

          <p className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
            No limite da dopamina,
            <span className="from-pink via-magenta to-purple block bg-gradient-to-r bg-clip-text text-transparent">
              começa a verdadeira saciedade
            </span>
          </p>

          {/* Versículo */}
          <blockquote className="border-pink mt-8 border-l-4 pl-6 text-left italic text-gray-300">
            <p className="text-base sm:text-lg">
              &ldquo;Eu sou o pão da vida; aquele que vem a mim não terá fome, e
              quem crê em mim nunca terá sede.&rdquo;
            </p>
            <footer className="text-pink mt-2 text-sm font-semibold">
              — João 6:35
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default ConferenceSection;
