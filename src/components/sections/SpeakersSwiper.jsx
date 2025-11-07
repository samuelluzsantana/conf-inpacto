import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import PropTypes from "prop-types";

// Importar estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpeakersSwiper = ({ speakers }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
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

                  <div className="card-info absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4 text-center transition-opacity duration-500">
                    <div className="mx-auto flex h-24 w-full max-w-[30em] flex-col items-center justify-center rounded-lg border-2 border-white/30 bg-white/15 px-4 py-3 backdrop-blur-[10px]">
                      <h3 className="line-clamp-1 text-lg font-bold text-white sm:text-xl">
                        {speaker.name || "Nome do Palestrante"}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-white/80 sm:text-base">
                        {speaker.role || "Cargo"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação personalizados */}
      <div ref={prevRef} className="swiper-button-prev-custom">
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
      <div ref={nextRef} className="swiper-button-next-custom">
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

        /* Mobile: Botões ao lado da paginação */
        @media (max-width: 640px) {
          .speakers-swiper {
            padding: 20px 0 70px;
          }

          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            top: auto;
            bottom: 15px;
            transform: translateY(0);
            width: 36px;
            height: 36px;
          }

          .swiper-button-prev-custom:hover,
          .swiper-button-next-custom:hover {
            transform: scale(1.1);
          }
          
          .swiper-button-prev-custom svg,
          .swiper-button-next-custom svg {
            width: 18px;
            height: 18px;
          }

          .swiper-button-prev-custom {
            left: 20px;
          }

          .swiper-button-next-custom {
            left: 65px;
            right: auto;
          }

          .speakers-swiper .swiper-pagination {
            bottom: 20px;
            left: auto;
            right: 20px;
            transform: none;
            width: auto;
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
