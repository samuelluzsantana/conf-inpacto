import SpeakersSwiper from "./SpeakersSwiper";

const SpeakersSection = () => {
  // Dados dos convidados
  const convidados = [
    {
      name: "Lena Steiner",
      role: "VP of Customer Success",
      image: "https://picsum.photos/400/500?random=1",
    },
    {
      name: "João Silva",
      role: "Palestrante Principal",
      image: "https://picsum.photos/400/500?random=2",
    },
    {
      name: "Maria Santos",
      role: "Líder de Adoração",
      image: "https://picsum.photos/400/500?random=3",
    },
    {
      name: "Pedro Costa",
      role: "Pastor Convidado",
      image: "https://picsum.photos/400/500?random=4",
    },
    {
      name: "Ana Oliveira",
      role: "Ministério Infantil",
      image: "https://picsum.photos/400/500?random=5",
    },
    {
      name: "Lucas Ferreira",
      role: "Coordenador de Jovens",
      image: "https://picsum.photos/400/500?random=6",
    },
    {
      name: "Carla Mendes",
      role: "Ministra de Louvor",
      image: "https://picsum.photos/400/500?random=7",
    },
    {
      name: "Rafael Almeida",
      role: "Conferencista",
      image: "https://picsum.photos/400/500?random=8",
    },
  ];

  return (
    <section
      id="convidados"
      className="from-inpacto-purple to-inpacto-sky flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br sm:scroll-mt-20"
    >
      <div className="w-full px-4 py-16 sm:px-6">
        <div className="mb-12 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            CONVIDADOS
          </h1>
          <p className="text-lg sm:text-xl">
            Palestrantes e convidados especiais
          </p>
        </div>
        <SpeakersSwiper speakers={convidados} />
      </div>
    </section>
  );
};

export default SpeakersSection;
