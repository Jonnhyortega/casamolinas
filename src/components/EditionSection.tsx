"use client";

import { motion } from "framer-motion";

export default function EditionSection() {
  const cards = [
    {
      title: "Curaduría",
      description: "Vinos seleccionados con intención, no por moda ni por precio.",
    },
    {
      title: "Contenido",
      description: "Cada botella viene acompañada de contexto y recomendaciones para disfrutarla mejor.",
    },
    {
      title: "Criterio",
      description: "El objetivo es que termines eligiendo mejor por tu cuenta, cada vez.",
    },
  ];

  return (
    <section
      id="edicion"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pt-20 pb-36 sm:pt-28 sm:pb-44 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Background Subtle Ambient Glow / Wine Crimson Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#781622]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-10 sm:gap-14">
        {/* Header Section Centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center  text-center gap-5 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight text-center">
            ¿Qué es una Edición?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#f8f4ef]/85 leading-relaxed font-normal max-w-3xl text-center">
            Cada mes, diseñamos una selección de vinos argentinos con un hilo conductor. No es un combo. Es una invitación a descubrir algo nuevo, con contexto, historia y criterio.
          </p>
        </motion.div>

        {/* 3 Burgundy Wine Cards Grid Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full p-2"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative bg-[#741825] border border-[#9b2a3a]/60 hover:border-[#bd3349] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center justify-between shadow-lg shadow-[#000000]/30 hover:shadow-[#741825]/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight text-center">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/90 leading-relaxed font-light text-center">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
