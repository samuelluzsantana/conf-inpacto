import LiquidChrome from "../LiquidChrome";
import GlassSurface from "../ui/GlassSurface";
import { InteractiveHoverButton } from "../ui/InteractiveHoverButton";

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
      <div className="relative z-10 w-full max-w-5xl px-4 py-[8em] text-center sm:px-6 lg:px-8">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={32}
          brightness={15}
          opacity={0.15}
          blur={20}
          displace={8}
          backgroundOpacity={0.05}
          saturation={1.4}
          distortionScale={-150}
          redOffset={5}
          greenOffset={12}
          blueOffset={20}
          mixBlendMode="screen"
          className="w-full"
          style={{ padding: "2em", display: "block" }}
        >
          <div className="space-y-8">
            {/* Título Principal */}
            <h1 className="text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_30px_rgba(250,20,98,0.5)] sm:text-6xl lg:text-7xl">
              Saturados
            </h1>

            {/* Subtítulo */}
            <p className="mb-8 text-xl font-semibold text-gray-300 sm:text-2xl">
              NO LIMITE DA DOPAMINA
            </p>

            {/* Texto Principal */}
            <div className="mx-auto mb-10 max-w-3xl space-y-6 text-justify text-base leading-relaxed text-gray-200 sm:text-lg">
              <p className="font-light">
                Nunca sentimos tanto e nunca estivemos tão vazios. Vivemos
                viciados em estímulos, sempre conectados e sempre cansados. A
                rotina virou espetáculo, e nossa mente se tornou um campo de{" "}
                <span className="font-semibold text-white">
                  ruído constante
                </span>
                .
              </p>

              <p className="font-light">
                Mas o problema não é só cultural,{" "}
                <span className="text-magenta font-bold">é espiritual</span>.
                Buscamos dopamina quando o que falta é{" "}
                <span className="text-pink font-bold">propósito</span>. Fomos
                feitos para mais do que recompensas instantâneas.
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
                existe em Cristo
              </p>

              <blockquote className="border-pink border-l-4 pl-6 text-justify italic text-gray-300">
                <p className="text-base sm:text-lg">
                  &ldquo;Eu sou o pão da vida; aquele que vem a mim não terá
                  fome, e quem crê em mim nunca terá sede.&rdquo;
                </p>
                <footer className="text-pink mt-2 text-sm font-semibold">
                  — João 6:35
                </footer>
              </blockquote>

              <div className="mt-8 flex justify-center">
                <InteractiveHoverButton>COMPRE AGORA</InteractiveHoverButton>
              </div>
            </div>
          </div>
        </GlassSurface>
      </div>
    </section>
  );
}

export default ConferenceSection;
