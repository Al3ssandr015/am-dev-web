import React from "react";
import {
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  FileText,
  Wifi,
  Server,
  Layers,
} from "lucide-react";
import Reveal from "./Reveal";

const techs = [
  { icon: Smartphone, label: "Flutter" },
  { icon: Cloud, label: "Firebase" },
  { icon: Database, label: "Firestore" },
  { icon: Layers, label: "Android / iOS" },
  { icon: FileText, label: "Reportes PDF" },
  { icon: ShieldCheck, label: "Autenticación segura" },
  { icon: Wifi, label: "Modo offline" },
  { icon: Server, label: "APIs REST" },
];

const TechnologiesSection: React.FC = () => {
  return (
    <section
      id="tecnologias"
      className="relative bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Tecnologías
          </span>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Con qué construyo tu sistema
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Herramientas modernas, estables y escalables para que tu app o
            sistema crezca junto con tu negocio.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.label} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {tech.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
