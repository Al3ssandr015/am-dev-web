import React from "react";
import {
  Smartphone,
  Building2,
  Truck,
  Workflow,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "./siteConfig";

const services = [
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description:
      "Aplicaciones Android e iOS diseñadas para optimizar procesos y gestionar operaciones desde cualquier lugar.",
  },
  {
    icon: Building2,
    title: "Sistemas Empresariales",
    description:
      "Control de inventarios, ventas, clientes, gastos y reportes en sistemas desarrollados a medida.",
  },
  {
    icon: Truck,
    title: "Logística y Flotillas",
    description:
      "Soluciones para monitorear vehículos, grúas, proyectos, operadores y recursos en tiempo real.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Digitalización de procesos manuales para reducir errores y aumentar la productividad de tu negocio.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicios"
      className="relative bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Servicios
          </span>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Soluciones digitales para impulsar tu negocio
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Desarrollo software personalizado para empresas que buscan mejorar
            el control, la eficiencia y la productividad de sus operaciones.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05]">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon className="h-7 w-7 text-cyan-400" />
                    </div>

                    <h3 className="mb-4 text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mb-6 leading-relaxed text-white/70">
                      {service.description}
                    </p>

                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:gap-3"
                      type="button"
                    >
                      Más información
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.1} className="mt-20 text-center">
          <a
            href={whatsappLink(
              "Hola, quiero solicitar una cotización para un proyecto digital."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            Solicitar una cotización
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
