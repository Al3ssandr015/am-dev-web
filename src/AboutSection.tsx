import React from "react";
import { Code2, Layers, Gauge } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo a medida",
    description:
      "Apps y sistemas diseñados desde cero según el flujo real de tu negocio, no plantillas genéricas.",
  },
  {
    icon: Layers,
    title: "Visión completa",
    description:
      "Desde la base de datos hasta la interfaz, cuidando que cada pieza del sistema se conecte bien.",
  },
  {
    icon: Gauge,
    title: "Enfoque en resultados",
    description:
      "Sistemas pensados para reducir errores, ahorrar tiempo y dar visibilidad real de tu operación.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="relative bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Sobre mí
          </span>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Desarrollador de apps y sistemas para negocios
          </h2>

          <p className="mt-6 text-base text-white/70 sm:text-lg">
            Me dedico a construir aplicaciones móviles y sistemas de gestión
            que ayudan a negocios a controlar sus operaciones: ventas,
            inventarios, flotillas, proyectos y reportes, todo en un solo
            lugar y accesible desde cualquier dispositivo.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
