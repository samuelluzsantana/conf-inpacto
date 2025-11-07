import PropTypes from "prop-types";

const SpeakersGrid = ({ speakers }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center"
          >
            {/* Container da imagem com overlay */}
            <div className="relative mb-4 w-full overflow-hidden rounded-2xl bg-gray-100">
              <div className="aspect-[3/4] w-full">
                <img
                  src={
                    speaker.image ||
                    `https://picsum.photos/300/400?random=${index}`
                  }
                  alt={speaker.name || "Palestrante"}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-150"
                />
                {/* Overlay com cor da paleta */}
                <div className="absolute inset-0 bg-indigo-900 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"></div>
              </div>
            </div>

            {/* Informações do palestrante */}
            <h3 className="text-lg font-bold text-white sm:text-xl">
              {speaker.name || "Nome do Palestrante"}
            </h3>
            <p className="mt-1 text-sm text-white/80 sm:text-base">
              {speaker.role || "Cargo"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

SpeakersGrid.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default SpeakersGrid;
