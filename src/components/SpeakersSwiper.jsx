import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";

// Importar estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpeakersSwiper = ({ speakers }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="speakers-swiper"
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={index}>
            <div className="group flex flex-col items-center pb-12 text-center">
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação personalizados */}
      <div className="swiper-button-prev-custom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="swiper-button-next-custom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      <style>{`
        .speakers-swiper {
          padding: 20px 0 60px;
          position: relative;
        }

        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
          color: white;
          background: rgba(255, 255, 255, 0.15);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .swiper-button-prev-custom.swiper-button-disabled,
        .swiper-button-next-custom.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .swiper-button-prev-custom {
          left: 10px;
        }

        .swiper-button-next-custom {
          right: 10px;
        }

        .swiper-button-prev-custom svg,
        .swiper-button-next-custom svg {
          width: 24px;
          height: 24px;
        }

        .speakers-swiper .swiper-pagination {
          bottom: 20px;
        }

        .speakers-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 10px;
          height: 10px;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .speakers-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.3);
          width: 24px;
          border-radius: 5px;
        }

        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }
          
          .swiper-button-prev-custom svg,
          .swiper-button-next-custom svg {
            width: 20px;
            height: 20px;
          }

          .swiper-button-prev-custom {
            left: 5px;
          }

          .swiper-button-next-custom {
            right: 5px;
          }
        }
      `}</style>
    </div>
  );
};

SpeakersSwiper.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default SpeakersSwiper;
