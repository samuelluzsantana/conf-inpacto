import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, ScrollToTop } from "./components";
import { isSectionEnabled } from "./config/sections";

// Lazy load dos componentes pesados
const Footer = lazy(() => import("./components/layout/Footer"));
const HomeSection = lazy(() => import("./components/sections/HomeSection"));
const ConferenceSection = lazy(
  () => import("./components/sections/ConferenceSection"),
);
const LocationSection = lazy(
  () => import("./components/sections/LocationSection"),
);
const FAQSection = lazy(() => import("./components/sections/FAQSection"));
const SpeakersSection = lazy(
  () => import("./components/sections/SpeakersSection"),
);
const CurvedText = lazy(() => import("./components/sections/CurvedText"));
const CountDays = lazy(() => import("./components/sections/CountDays"));

// Loading component simples e leve
const SectionLoader = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-inpacto-purple border-t-transparent"></div>
  </div>
);

function MainContent() {
  return (
    <Suspense fallback={<SectionLoader />}>
      {/* Seção: INÍCIO */}
      {isSectionEnabled("inicio") && (
        <Suspense fallback={<SectionLoader />}>
          <HomeSection />
        </Suspense>
      )}

      {/* Seção: A CONFERÊNCIA */}
      {isSectionEnabled("conferencia") && (
        <Suspense fallback={<SectionLoader />}>
          <ConferenceSection />
        </Suspense>
      )}

      {/* Seção: BANDAS */}
      {isSectionEnabled("bandas") && (
        <section
          id="bandas"
          className="flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br from-inpacto-magenta to-inpacto-purple sm:scroll-mt-20"
        >
          <div className="px-4 text-center text-white sm:px-6">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              BANDAS
            </h1>
            <p className="text-lg sm:text-xl">
              Conheça as bandas que vão tocar
            </p>
          </div>
        </section>
      )}

      {/* Seção: CONVIDADOS */}
      {isSectionEnabled("convidados") && (
        <Suspense fallback={<SectionLoader />}>
          <SpeakersSection />
        </Suspense>
      )}

      {/* Seção: PROGRAME-SE */}
      {isSectionEnabled("programe-se") && (
        <section
          id="programe-se"
          className="flex min-h-screen scroll-mt-16 items-center justify-center bg-inpacto-gradient sm:scroll-mt-20"
        >
          <div className="px-4 text-center text-white sm:px-6">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              PROGRAME-SE
            </h1>
            <p className="text-lg sm:text-xl">Confira a programação completa</p>
          </div>
        </section>
      )}

      {/* Seção: CONTAGEM DE DIAS */}
      <Suspense fallback={<SectionLoader />}>
        <CountDays />
      </Suspense>

      {/* Seção: FAQ */}
      {isSectionEnabled("faq") && (
        <Suspense fallback={<SectionLoader />}>
          {/* Seção: CURVED TEXT */}
          <CurvedText fontSize={2} />

          <div id="faq" className="scroll-mt-16 sm:scroll-mt-20">
            <FAQSection />
          </div>
        </Suspense>
      )}

      {/* Seção: LOCALIZAÇÃO */}
      {isSectionEnabled("localizacao") && (
        <Suspense fallback={<SectionLoader />}>
          <div id="localizacao" className="scroll-mt-16 sm:scroll-mt-20">
            <LocationSection />
          </div>
        </Suspense>
      )}

      {/* Footer */}
      {isSectionEnabled("footer") && (
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      )}
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <Header />
      {/* Offset content for fixed header (mobile-first) */}
      <div className="pt-14 sm:pt-16 lg:pt-[4em]">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/conferencia" element={<MainContent />} />
          <Route path="/bandas" element={<MainContent />} />
          <Route path="/convidados" element={<MainContent />} />
          <Route path="/programe-se" element={<MainContent />} />
          <Route path="/localizacao" element={<MainContent />} />
          <Route path="/faq" element={<MainContent />} />
        </Routes>
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
