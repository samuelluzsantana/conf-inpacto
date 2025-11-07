import { memo } from "react";
import bannerMobile from "../../assets/backgrounds/saturados_bannermobile.png";
import bannerDesktop from "../../assets/backgrounds/saturados_bannerdesk.png";

const HomeSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex w-full scroll-mt-16 overflow-hidden bg-center bg-no-repeat sm:scroll-mt-20 md:mt-[2em] lg:mt-[5em]"
    >
      {/* Fundo responsivo - Mobile e Desktop */}
      {/* Mobile background */}
      <div className="relative w-full md:hidden">
        <img
          src={bannerMobile}
          alt="Banner Mobile"
          className="h-auto w-full object-contain"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1080"
          height="1920"
        />
      </div>

      {/* Desktop background */}
      <div className="relative hidden w-full md:block">
        <img
          src={bannerDesktop}
          alt="Banner Desktop"
          className="h-auto w-full object-contain"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
      </div>
    </section>
  );
};

export default memo(HomeSection);
