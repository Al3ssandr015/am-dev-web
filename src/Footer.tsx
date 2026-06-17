import React from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { whatsappLink, CONTACT_EMAIL } from "./siteConfig";
import { NAV_LINKS } from "./Navbar";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black px-6 py-12 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
              <span className="h-3 w-3 rounded-full bg-white" />
            </span>
            <span className="font-mono text-base">
              <span className="font-medium text-white">am</span>
              <span className="font-normal text-white/60">.dev</span>
            </span>
          </a>
          <p className="max-w-xs text-sm text-white/60">
            Apps móviles y sistemas a medida para negocios que quieren digitalizar
            sus operaciones.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Navegación
          </span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Contacto
          </span>
          <a
            href={whatsappLink("Hola, quiero más información sobre tus servicios.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-cyan-400"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-cyan-400"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © {year} am.dev. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
