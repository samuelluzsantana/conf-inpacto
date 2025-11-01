import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function MainContent() {
  return (
    <>
      {/* Seção: INÍCIO */}
      <section
        id="inicio"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">INÍCIO</h1>
          <p className="text-xl">Bem-vindo à conferência</p>
        </div>
      </section>

      {/* Seção: A CONFERÊNCIA */}
      <section
        id="conferencia"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">A CONFERÊNCIA</h1>
          <p className="text-xl">Informações sobre o evento</p>
        </div>
      </section>

      {/* Seção: BANDAS */}
      <section
        id="bandas"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-500 to-red-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">BANDAS</h1>
          <p className="text-xl">Conheça as bandas que vão tocar</p>
        </div>
      </section>

      {/* Seção: CONVIDADOS */}
      <section
        id="convidados"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 to-orange-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">CONVIDADOS</h1>
          <p className="text-xl">Palestrantes e convidados especiais</p>
        </div>
      </section>

      {/* Seção: PROGRAME-SE */}
      <section
        id="programe-se"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">PROGRAME-SE</h1>
          <p className="text-xl">Confira a programação completa</p>
        </div>
      </section>

      {/* Seção: LOCALIZAÇÃO */}
      <section
        id="localizacao"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-500 to-green-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">LOCALIZAÇÃO</h1>
          <p className="text-xl">Como chegar ao evento</p>
        </div>
      </section>

      {/* Seção: FAQ */}
      <section
        id="faq"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-500 to-blue-500"
      >
        <div className="px-4 text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">FAQ</h1>
          <p className="text-xl">Perguntas frequentes</p>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/conferencia" element={<MainContent />} />
        <Route path="/bandas" element={<MainContent />} />
        <Route path="/convidados" element={<MainContent />} />
        <Route path="/programe-se" element={<MainContent />} />
        <Route path="/localizacao" element={<MainContent />} />
        <Route path="/faq" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
