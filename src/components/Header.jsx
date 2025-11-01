import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "./Logo";
import {
  useDocumentTitle,
  getTitleFromPath,
} from "../hooks/useDocumentTitle.ts";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrollDirection } from "../hooks/useScrollDirection";

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

  // Detecta a seção ativa baseada no scroll
  const sectionIds = navLinks.map((link) => link.slug);
  const activeSectionId = useActiveSection(sectionIds, 150);

  // Atualiza o activeLink e o título quando a seção ativa mudar no scroll
  useEffect(() => {
    const currentIndex = navLinks.findIndex(
      (link) => link.slug === activeSectionId,
    );

    if (currentIndex !== -1 && currentIndex !== activeLink) {
      setPrevIndex(activeLink);
      setActiveLink(currentIndex);

      // Atualiza a URL sem fazer scroll
      const newPath = navLinks[currentIndex].path;
      if (location.pathname !== newPath) {
        navigate(newPath, { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSectionId]);

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

  // Smart scroll header visibility: visible at top or when scrolling up; hidden on scroll down
  const { direction, isTop } = useScrollDirection({
    topThreshold: 100,
    delta: 2,
  });
  const isHeaderVisible = isTop || direction === "up" || isMobileMenuOpen;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-gray-900/95 shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out will-change-transform ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8 lg:py-12"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href="/"
            onClick={(e) => scrollToSection(e, navLinks[0], 0)}
            className="-m-1.5 p-1.5 transition-opacity hover:opacity-80"
          >
            <LogoIcon color="white" size="default" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="-m-2 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400 transition-all hover:bg-gray-800 hover:text-white active:scale-95"
            aria-label="Abrir menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className="h-6 w-6"
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
        <div className="relative hidden lg:flex lg:gap-x-4" ref={navRef}>
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

      {/* Mobile menu (portal to escape header transform) */}
      {isMobileMenuOpen &&
        createPortal(
          <div className="lg:hidden">
            {/* Backdrop with slide-in animation */}
            <div
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <div className="fixed inset-y-0 right-0 z-[61] flex w-full max-w-sm">
              <div className="relative flex w-full flex-col overflow-y-auto bg-gray-900 shadow-2xl">
                {/* Header do menu mobile */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-800 bg-gray-900/95 px-4 py-4 backdrop-blur-sm sm:px-6">
                  <a
                    href="/"
                    onClick={(e) => scrollToSection(e, navLinks[0], 0)}
                    className="-m-1.5 p-1.5 transition-opacity hover:opacity-80"
                  >
                    <LogoIcon color="white" size="default" icon={true} />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="-m-2 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400 transition-all hover:bg-gray-800 hover:text-white active:scale-95"
                    aria-label="Fechar menu"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 sm:px-6">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={(e) => scrollToSection(e, link, index)}
                        className={`active:scale-98 flex items-center rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                          activeLink === index
                            ? "bg-indigo-500/20 text-indigo-400 shadow-sm ring-1 ring-indigo-500/30"
                            : "text-gray-100 hover:bg-gray-800/60 hover:text-white active:bg-gray-800"
                        }`}
                      >
                        <span>{link.name}</span>
                        {activeLink === index && (
                          <svg
                            className="ml-auto h-5 w-5 text-indigo-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          ></svg>
                        )}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Footer do menu (opcional) */}
                <div className="border-t border-gray-800 p-4 sm:p-6">
                  <p className="text-center text-sm text-gray-500">
                    Conferência Inpacto 2025
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
};

export default Header;
