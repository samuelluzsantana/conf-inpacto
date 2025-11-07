import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Footer,
  HomeSection,
  ConferenceSection,
  LocationSection,
  FAQSection,
  SpeakersSection,
  ScrollToTop,
} from "./components";
import { isSectionEnabled } from "./config/sections";

function MainContent() {
  return (
    <>
      {/* Seção: INÍCIO */}
      {isSectionEnabled("inicio") && <HomeSection />}

      {/* Seção: A CONFERÊNCIA */}
      {isSectionEnabled("conferencia") && <ConferenceSection />}

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
      {isSectionEnabled("convidados") && <SpeakersSection />}

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

      {/* Seção: LOCALIZAÇÃO */}
      {isSectionEnabled("localizacao") && (
        <div id="localizacao" className="scroll-mt-16 sm:scroll-mt-20">
          <LocationSection />
        </div>
      )}

      {/* Seção: FAQ */}
      {isSectionEnabled("faq") && (
        <div id="faq" className="scroll-mt-16 sm:scroll-mt-20">
          <FAQSection />
        </div>
      )}

      {/* Footer */}
      {isSectionEnabled("footer") && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      {/* Offset content for fixed header (mobile-first) */}
      <div className="pt-14 sm:pt-16 lg:pt-[1em]">
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
