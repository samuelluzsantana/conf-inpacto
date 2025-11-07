import { useState, useEffect } from "react";
import GlassSurface from "./GlassSurface";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <GlassSurface
            width="60px"
            height="60px"
            borderRadius={22}
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
            className="glass-scroll-to-top"
            style={{ padding: "1em, 2em" }}
          >
            <div className="flex h-full w-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-8 w-8 text-white drop-shadow-[0_0_10px_rgba(250,20,98,0.5)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          </GlassSurface>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
