import { useState, useEffect, useRef, memo } from "react";
import confetti from "canvas-confetti";
import Aurora from "./Aurora";
// @ts-ignore - GlassSurface is a JSX component without TypeScript definitions
import GlassSurface from "../ui/GlassSurface";

const TimeBox = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <GlassSurface
      width={"auto" as any}
      height={"auto" as any}
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
      className="min-w-[100px] sm:min-w-[140px]"
      style={{ padding: "1.5em", display: "block" }}
    >
      <div className="mb-2 bg-gradient-to-r from-[#FA1462] to-[#6F00FF] bg-clip-text font-mono text-5xl font-bold text-transparent sm:text-7xl">
        {String(value).padStart(2, "0")}
      </div>
    </GlassSurface>
    <div className="mt-3 text-sm font-semibold uppercase tracking-wider text-gray-700 sm:text-lg">
      {label}
    </div>
  </div>
));

TimeBox.displayName = "TimeBox";

const CountDays = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const confettiTriggered = useRef(false);

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent("Conferência InPacto 2026 - Saturados");
    const details = encodeURIComponent(
      "NO LIMITE DA DOPAMINA\n\n" +
        "Nunca sentimos tanto e nunca estivemos tão vazios. Vivemos viciados em estímulos, sempre conectados e sempre cansados.\n\n" +
        "A Conferência InPacto 2026 é um convite para desacelerar, silenciar o excesso e redescobrir a vida que só existe em Cristo.\n\n" +
        '"Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede." - João 6:35',
    );
    const location = encodeURIComponent("A definir - Informações em breve");
    const start = "20260501T090000Z"; // 01 de Maio de 2026, 09:00 UTC
    const end = "20260501T180000Z"; // 01 de Maio de 2026, 18:00 UTC

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2026-05-01T00:00:00");
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // Trigger confetti when event date is reached
        if (!confettiTriggered.current) {
          confettiTriggered.current = true;
          triggerConfetti();
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 6,
        spread: 90,
        startVelocity: 45,
        ticks: 200,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ["#ff006e", "#8338ec", "#3a86ff", "#fb5607", "#ffbe0b"],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <section
      id="count-days"
      className="relative flex min-h-screen items-center justify-center bg-white p-4"
    >
      <div className="relative z-10 text-center">
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-[#FA1462] via-[#E23973] to-[#6F00FF] bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
            Contagem Regressiva
          </h1>
          <p className="text-xl font-light text-gray-700 sm:text-2xl">
            01 de Maio de 2026
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          <TimeBox value={timeLeft.days} label="Dias" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Minutos" />
          <TimeBox value={timeLeft.seconds} label="Segundos" />
        </div>

        <div className="mt-12">
          <button
            onClick={handleAddToGoogleCalendar}
            className="inline-block rounded-full border-2 border-purple-500/30 bg-white/80 px-8 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-xl"
          >
            <p className="text-sm text-gray-800 sm:text-base">
              📅 Adicionar à Agenda
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(CountDays);
