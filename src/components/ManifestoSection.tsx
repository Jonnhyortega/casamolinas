"use client";

import { motion } from "framer-motion";
import { Sparkles, Wine, Compass, Award, Quote } from "lucide-react";

export default function ManifestoSection() {
  const pillars = [
    {
      icon: Wine,
      title: "Más que una vinoteca",
      description: "Sin catálogos infinitos ni elecciones a ciegas. Cada etiqueta es seleccionada con intención.",
      accent: "bg-[#741825]/20 text-[#E54D52] border-[#9b2a3a]/40",
    },
    {
      icon: Compass,
      title: "Exploración con Criterio",
      description: "Recorremos terruños y pequeños productores para conectar con la riqueza del vino argentino.",
      accent: "bg-[#d8caaa]/15 text-[#d8caaa] border-[#d8caaa]/30",
    },
    {
      icon: Award,
      title: "Tu Propia Experiencia",
      description: "Sin esnobismos. Te brindamos herramientas para que disfrutes más cada botella con tu propia voz.",
      accent: "bg-[#741825]/20 text-[#E54D52] border-[#9b2a3a]/40",
    },
  ];

  return (
    <section
      id="manifiesto"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Resplandor ambiental de fondo optimizado para móviles */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-[#741825]/15 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-48 sm:w-80 h-48 sm:h-80 bg-[#d8caaa]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center gap-8 sm:gap-14">

        {/* Badge Header - Optimizado Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 p-[2rem] rounded-full bg-[#0b2227]/90 border border-[#d8caaa]/30 backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E54D52]" />
            <span className="tracking-[0.18em] font-semibold text-[11px] sm:text-xs text-[#d8caaa] uppercase">
              Nuestra Filosofía
            </span>
          </div>
        </motion.div>

        {/* Manifiesto Principal - Texto Limpio y Centrado (Sin Card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 px-4 py-2"
        >
          {/* Ícono de Cita */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#741825]/30 border border-[#9b2a3a]/50 flex items-center justify-center text-[#E54D52]">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          {/* Frase Destacada */}
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#f8f4ef] font-medium leading-snug tracking-tight text-center">
            &quot;El vino se disfruta más cuando se comparte... y cuando te divertís en el camino.&quot;
          </h2>

          <div className="w-16 h-0.5 bg-[#d8caaa]/30 rounded-full" />

          {/* Texto Manifiesto */}
          <p className="text-sm sm:text-lg md:text-xl text-[#f8f4ef]/85 leading-relaxed font-light text-center">
            <span className="text-white font-medium">Casa Molinas no es una vinoteca ni un e-commerce convencional.</span> Es una propuesta que diseña{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#E54D52] via-[#f8f4ef] to-[#d8caaa] font-semibold">
              experiencias para descubrir el vino argentino
            </strong>
            . Cada Edición tiene un propósito: construir tu propio criterio y disfrutar más cada botella que abrís.
          </p>
        </motion.div>

        {/* 3 Pilares en Móvil - Cards Compactas & Táctiles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex flex-col items-center justify-between gap-5 w-full"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#0e2c33]/60 hover:bg-[#0e2c33]/90 border border-white/10 hover:border-[#d8caaa]/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-md active:scale-[0.99] w-[95%] "
              >
                <div className="flex flex-col items-center gap-3 p-5">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center ${pillar.accent}`}>
                    <Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#d8caaa] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f8f4ef]/75 text-center leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
