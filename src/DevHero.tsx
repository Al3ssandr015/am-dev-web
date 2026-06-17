import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { whatsappLink } from "./siteConfig";

// ---------------------------------------------
// ShinyText component
// ---------------------------------------------
interface ShinyTextProps {
  text: string;
  className?: string;
  baseColor?: string;
  shineColor?: string;
  speed?: number; // seconds
  spread?: number; // degrees
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = "",
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  speed = 3,
  spread = 100,
}) => {
  const gradient = `linear-gradient(${spread}deg, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%)`;

  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
};

// ---------------------------------------------
// Hero Section
// ---------------------------------------------
const DevHero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden bg-black font-sans"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.65)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Center hero content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs uppercase tracking-tight text-white/80 sm:text-sm"
          >
            Cupos disponibles para nuevos proyectos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="tracking-tighter"
            style={{ lineHeight: 0.85 }}
          >
            <span className="block text-5xl font-medium text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Digitaliza tu
            </span>
            <span className="block text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <ShinyText
                text="Sistema Ideal."
                baseColor="#64CEFB"
                shineColor="#ffffff"
                speed={3}
                spread={100}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-sm text-white/85 sm:text-base md:text-lg"
          >
            Apps móviles y sistemas personalizados para ventas, inventarios,
            logística, flotillas, reportes y control operativo.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            href={whatsappLink(
              "Hola, quiero solicitar una cotización para un proyecto digital."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            Solicitar Cotización
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90"
          >
            <span>✓ Apps Móviles</span>
            <span>✓ Sistemas Empresariales</span>
            <span>✓ Software Personalizado</span>
            <span>✓ Soporte Continuo</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#sobre-mi"
          aria-label="Ir a la siguiente sección"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 transition-colors duration-300 hover:text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.a>
      </div>
    </section>
  );
};

export default DevHero;
