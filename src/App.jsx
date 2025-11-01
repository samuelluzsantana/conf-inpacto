import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";

function MainContent() {
  return (
    <>
      {/* Seção: INÍCIO */}
      <section
        id="inicio"
        className="from-inpacto-orange to-inpacto-pink flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br sm:scroll-mt-20"
      >
        <div className="px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            INÍCIO
          </h1>
          <p className="text-lg sm:text-xl">Bem-vindo à conferência</p>
        </div>
      </section>

      {/* Seção: A CONFERÊNCIA */}
      <section
        id="conferencia"
        className="from-inpacto-pink to-inpacto-magenta flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br sm:scroll-mt-20"
      >
        <div className="px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            A CONFERÊNCIA
          </h1>
          <p className="text-lg sm:text-xl">Informações sobre o evento</p>
        </div>
      </section>

      {/* Seção: BANDAS */}
      <section
        id="bandas"
        className="from-inpacto-magenta to-inpacto-purple flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br sm:scroll-mt-20"
      >
        <div className="px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            BANDAS
          </h1>
          <p className="text-lg sm:text-xl">Conheça as bandas que vão tocar</p>
        </div>
      </section>

      {/* Seção: CONVIDADOS */}
      <section
        id="convidados"
        className="from-inpacto-purple to-inpacto-sky flex min-h-screen scroll-mt-16 items-center justify-center bg-gradient-to-br sm:scroll-mt-20"
      >
        <div className="px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            CONVIDADOS
          </h1>
          <p className="text-lg sm:text-xl">
            Palestrantes e convidados especiais
          </p>
        </div>
      </section>

      {/* Seção: PROGRAME-SE */}
      <section
        id="programe-se"
        className="bg-inpacto-gradient flex min-h-screen scroll-mt-16 items-center justify-center sm:scroll-mt-20"
      >
        <div className="px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            PROGRAME-SE
          </h1>
          <p className="text-lg sm:text-xl">Confira a programação completa</p>
        </div>
      </section>

      {/* Seção: LOCALIZAÇÃO */}
      <div id="localizacao" className="scroll-mt-16 sm:scroll-mt-20">
        <LocationSection />
      </div>

      {/* Seção: FAQ */}
      <div id="faq" className="scroll-mt-16 sm:scroll-mt-20">
        <FAQSection />
      </div>
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
    </Router>
  );
}

export default App;
