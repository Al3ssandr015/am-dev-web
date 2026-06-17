import React from "react";

const projects = [
  {
    tag: "Flutter • Firebase",
    title: "Industrial Crane Manager",
    description:
      "Sistema empresarial para gestión de flotillas de grúas industriales, control de proyectos, asignación de equipos, gastos operativos, reportes PDF y monitoreo del estado de las operaciones en tiempo real.",
  },
  {
    tag: "Sistema Empresarial",
    title: "Sistema de Inventario y Ventas",
    description:
      "Control de stock, ventas, clientes y movimientos de inventario desde una sola plataforma, accesible desde celular o computadora, con filtros avanzados y reportes detallados.",
  },
  {
    tag: "Flutter • ESP32 • IoT",
    title: "Sistema de Control Inteligente ESP32",
    description:
      "Aplicación móvil desarrollada en Flutter para monitoreo y control remoto mediante ESP32. Incluye transmisión de video en tiempo real, control de relés y servomotores, lectura RFID y comunicación inalámbrica para proyectos de automatización y control industrial.",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="proyectos"
      className="bg-black px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
            Proyectos
          </span>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Proyectos Destacados
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Soluciones desarrolladas para optimizar operaciones, mejorar el
            control empresarial y automatizar procesos mediante software
            personalizado.
          </p>
        </div>

        {/* Lista de proyectos */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.05] md:p-10"
            >
              <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                {project.tag}
              </span>

              <h3 className="mt-6 text-2xl font-semibold text-white md:text-3xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-4xl leading-relaxed text-white/70">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;