export default function LocationSection() {
  return (
    <section className="to-inpacto-purple/5 min-h-screen bg-gradient-to-br from-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Content Grid */}
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Location Info */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-inpacto-purple text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              LOCALIZAÇÃO
            </h1>

            <h2 className="text-inpacto-magenta text-lg font-semibold leading-snug sm:text-xl md:text-2xl">
              IGREJA PRESBITERIANA DE PINHEIROS
            </h2>

            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
              Av. Dra. Ruth Cardoso, 6151 - Pinheiros, São Paulo - SP, 05463-030
            </p>

            {/* Link para abrir no Google Maps */}
            <a
              href="https://maps.google.com/?q=Av.+Dra.+Ruth+Cardoso,+6151+-+Pinheiros,+São+Paulo+-+SP,+05463-030"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inpacto-pink hover:text-inpacto-magenta inline-block text-base font-semibold transition-colors hover:underline sm:text-lg"
            >
              Abrir no Google Maps →
            </a>

            {/* Como Chegar */}
            <div className="pt-2 sm:pt-4">
              <h3 className="text-inpacto-purple mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
                Como Chegar
              </h3>

              <div className="space-y-2.5 text-base text-gray-700 sm:space-y-3 sm:text-lg">
                <p>
                  <span className="font-semibold">Metrô:</span> Linha 4-Amarela
                  - Estação Butantã
                </p>

                <p>
                  <span className="font-semibold">Ônibus:</span> Diversas linhas
                  passam pela Av. Ruth Cardoso
                </p>

                <p className="text-sm text-gray-600 sm:text-base">
                  Estacionamento disponível no local
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="h-[400px] w-full sm:h-[450px] md:h-[500px] lg:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977287442897!2d-46.70227!3d-23.56389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5791b7d6b7d7%3A0x7e8b8b8b8b8b8b8b!2sAv.%20Dra.%20Ruth%20Cardoso%2C%206151%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005463-030!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Igreja Presbiteriana de Pinheiros"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
