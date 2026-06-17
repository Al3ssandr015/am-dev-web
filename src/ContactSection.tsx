import React from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink, CONTACT_EMAIL } from "./siteConfig";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Contacto
          </span>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            ¿Tienes un proceso que sigue funcionando "a mano"?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Cuéntame qué necesita tu negocio y te muestro cómo se vería
            digitalizado.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(
                "Hola, quiero solicitar una cotización para un proyecto digital."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-cyan-400 md:px-8 md:py-4 md:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Escribir por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-cyan-400 hover:text-white md:px-8 md:py-4 md:text-base"
            >
              <Mail className="h-4 w-4" />
              Enviar un correo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
