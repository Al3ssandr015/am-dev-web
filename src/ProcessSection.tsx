import React from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Conversamos sobre tu operación y definimos qué necesita resolver el sistema.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description:
      "Defino pantallas, flujos y estructura de datos antes de escribir una sola línea de código.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollo",
    description:
      "Construyo el sistema en avances visibles, con entregas que puedes probar.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega y soporte",
    description:
      "Lanzamos, capacito a tu equipo y queda disponible para ajustes futuros.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section
      id="proceso"
      className="relative bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Proceso
          </span>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Cómo trabajamos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Un proceso claro, sin sorpresas, desde el primer mensaje hasta el
            sistema en tus manos.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05]">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <span className="mb-6 block text-4xl font-bold text-white/10">
                      {step.number}
                    </span>

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

                    <p className="text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
