import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "./Logo";
import {
  useDocumentTitle,
  getTitleFromPath,
} from "../hooks/useDocumentTitle.ts";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [prevIndex, setPrevIndex] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Atualiza o título da página dinamicamente
  const currentTitle = getTitleFromPath(location.pathname);
  useDocumentTitle(currentTitle);

  const navLinks = [
    { name: "INÍCIO", href: "#inicio", path: "/", slug: "inicio" },
    {
      name: "A CONFERÊNCIA",
      href: "#conferencia",
      path: "/conferencia",
      slug: "conferencia",
    },
    { name: "BANDAS", href: "#bandas", path: "/bandas", slug: "bandas" },
    {
      name: "CONVIDADOS",
      href: "#convidados",
      path: "/convidados",
      slug: "convidados",
    },
    {
      name: "PROGRAME-SE",
      href: "#programe-se",
      path: "/programe-se",
      slug: "programe-se",
    },
    {
      name: "LOCALIZAÇÃO",
      href: "#localizacao",
      path: "/localizacao",
      slug: "localizacao",
    },
    { name: "FAQ", href: "#faq", path: "/faq", slug: "faq" },
  ];

  // Atualiza o link ativo baseado na URL atual
  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = navLinks.findIndex(
      (link) => link.path === currentPath,
    );

    if (currentIndex !== -1) {
      setPrevIndex(activeLink);
      setActiveLink(currentIndex);
    } else {
      setPrevIndex(activeLink);
      setActiveLink(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Scroll automático ao carregar a página com uma rota específica
  useEffect(() => {
    const currentPath = location.pathname;
    const link = navLinks.find((link) => link.path === currentPath);

    if (link && link.slug) {
      setTimeout(() => {
        const element = document.getElementById(link.slug);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Atualiza a posição e largura do underline
  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.children[activeLink];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setUnderlineStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [activeLink]);

  const scrollToSection = useCallback(
    (e, link, index) => {
      e.preventDefault();

      // Atualiza o estado anterior
      setPrevIndex(activeLink);
      setActiveLink(index);

      // Atualiza a URL
      navigate(link.path);

      // Scroll suave para a seção
      const element = document.getElementById(link.slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Fecha o menu mobile
      setIsMobileMenuOpen(false);
    },
    [activeLink, navigate],
  );

  // Determina a direção da animação
  const getTransitionClass = () => {
    return activeLink > prevIndex
      ? "transition-all duration-300 ease-out"
      : "transition-all duration-300 ease-out";
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href="/"
            onClick={(e) => scrollToSection(e, navLinks[0], 0)}
            className="-m-1.5 p-1.5"
          >
            <LogoIcon color="white" size="default" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 transition-colors hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="relative hidden lg:flex lg:gap-x-8" ref={navRef}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link, index)}
              className={`relative px-1 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeLink === index
                  ? "text-indigo-400"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Animated underline */}
          <span
            className={`absolute bottom-0 h-0.5 bg-indigo-400 ${getTransitionClass()}`}
            style={underlineStyle}
          />
        </div>

        {/* Empty div for flex spacing */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a
                  href="/"
                  onClick={(e) => scrollToSection(e, navLinks[0], 0)}
                  className="-m-1.5 p-1.5"
                >
                  <LogoIcon color="white" size="default" icon={true} />
                </a>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6">
                    {navLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={(e) => scrollToSection(e, link, index)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-colors ${
                          activeLink === index
                            ? "bg-white/5 text-indigo-400"
                            : "text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
