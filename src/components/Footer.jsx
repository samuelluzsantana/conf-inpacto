export default function Footer() {
  return (
    <footer className="relative bg-[#1a3d3a] pt-32">
      {/* Gradient overlay from transparent to solid */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent to-[#1a3d3a]" />

      <div className="relative z-10 px-4 pb-8 sm:px-6">
        {/* Logo and sponsors section */}
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center justify-center gap-8">
          {/* InPacto Logo */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg
                className="h-16 w-16 sm:h-20 sm:w-20"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10C50 10 35 25 35 40C35 50 42 58 50 58C58 58 65 50 65 40C65 25 50 10 50 10Z"
                  stroke="#FF8F44"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M50 30C50 30 42 38 42 45C42 50 45 54 50 54C55 54 58 50 58 45C58 38 50 30 50 30Z"
                  stroke="#FF8F44"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="50" cy="70" r="5" fill="#FF8F44" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              InPacto
            </h2>
          </div>

          {/* Sponsors logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-white/10" />
              <span className="text-xs text-white/80 sm:text-sm">
                Igreja Presbiteriana
                <br />
                de Pinheiros
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-white/10" />
              <span className="text-xs text-white/80 sm:text-sm">Mocidade</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/60 sm:text-sm">
            ©2025 Todos os direitos reservados à Igreja Presbiteriana de
            Pinheiros. Desenvolvido por{" "}
            <a
              href="https://tenois.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white/80"
            >
              Tenois Criativa
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
