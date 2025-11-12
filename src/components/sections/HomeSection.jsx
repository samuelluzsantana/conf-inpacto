import { memo } from "react";
import bannerMobile from "../../assets/backgrounds/mobile.png";
import bannerDesktop from "../../assets/backgrounds/desk.png";

const HomeSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex h-svh w-full scroll-mt-16 overflow-hidden bg-center bg-no-repeat sm:scroll-mt-20"
    >
      {/* Mobile */}
      <div className="relative h-full w-full md:hidden">
        <img
          src={bannerMobile}
          alt="Banner Mobile"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1080}
          height={1920}
        />
      </div>

      {/* Desktop */}
      <div className="relative hidden h-full w-full md:block">
        <img
          src={bannerDesktop}
          alt="Banner Desktop"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default memo(HomeSection);
