import LogosJuntas from "../../assets/logos/3 logo branco.png";
import casaColorida from "../../assets/elementos/26_casa.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white py-20 text-white sm:py-32 lg:py-40">
      {/* Gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            #f85660 25%,
            #FA1462 50%,
            #6f00ff 75%,
            transparent 100%
          )`,
        }}
      />

      {/* Casa colorida posicionada embaixo */}
      <div className="absolute bottom-[-1em] left-0 w-full">
        <img
          src={casaColorida}
          alt="Casa colorida"
          className="h-auto w-full object-cover blur-md"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Logo Inpacto - Reduzida */}
        <div className="mb-3 flex items-center justify-center sm:mb-4">
          <img
            src={LogosJuntas}
            alt="Logo Inpacto"
            className="h-auto w-full max-w-[300px] opacity-90 sm:max-w-[280px] md:max-w-[450px]"
          />
        </div>

        {/* Área inferior */}
        <div>
          {/* Redes Sociais - Centralizadas */}
          <div className="mb-2 flex justify-center sm:mb-3">
            <div className="flex gap-2 sm:gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/conferencia.inpacto/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 active:scale-95 sm:p-2.5"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4 fill-white sm:h-5 sm:w-5"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 active:scale-95 sm:p-2.5"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4 fill-white sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 active:scale-95 sm:p-2.5"
                aria-label="YouTube"
              >
                <svg
                  className="h-4 w-4 fill-white sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20 active:scale-95 sm:p-2.5"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-4 w-4 fill-white sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Linha */}
          <div className="mb-3 h-px w-full bg-white/30" />

          {/* Direitos */}
          <div className="pb-2">
            <p className="text-center text-[10px] leading-relaxed text-white/80 sm:text-xs md:text-sm">
              ©2026 Todos os direitos reservados à Igreja Presbiteriana de
              Pinheiros
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
              Desenvolvido por{" "}
              <a
                href="https://github.com/samuelluzsantana/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative font-semibold text-white transition-colors"
              >
                <span className="relative">
                  Samuel Luz
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
