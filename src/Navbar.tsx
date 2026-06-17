import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("#", ""));

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track active section for nav highlighting
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Track scroll position to toggle the floating background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-2 py-2 transition-all duration-300 ${
            scrolled
              ? "border border-white/10 bg-black/70 backdrop-blur-md shadow-lg shadow-black/20"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 px-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
            <span className="font-mono text-lg">
              <span className="font-medium text-white">am</span>
              <span className="font-normal text-white/60">.dev</span>
            </span>
          </a>

          {/* Center nav pill (desktop) */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-700 px-2 py-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Contact us (desktop) */}
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full border border-gray-700 px-5 py-2 text-sm text-white/80 transition-colors duration-300 hover:text-white lg:flex"
          >
            Contactar
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 p-2 text-white/80 transition-colors duration-300 hover:text-white lg:hidden"
          >
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/95 backdrop-blur-md lg:hidden"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`px-6 py-3 text-2xl font-medium transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </motion.a>
              );
            })}

            <motion.a
              href="#contacto"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: NAV_LINKS.length * 0.05 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-lg text-white/80 transition-colors duration-300 hover:text-white"
            >
              Contactar
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
