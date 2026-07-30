"use client";

import { motion } from "framer-motion";
import { Sparkles, Wine, Compass, Award } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section
      id="manifiesto"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-28 sm:py-36 lg:py-44 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E54D52]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#d8caaa]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d8caaa_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-12 sm:gap-16">

        {/* Section Pill Header Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center w-full"
        >
          <div className="badge-pill px-6 py-2.5 shadow-lg border border-[#d8caaa]/30 bg-[#0b2227]/80 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#E54D52]" />
            <span className="tracking-[0.2em] font-semibold text-xs sm:text-sm">NUESTRA FILOSOFÍA</span>
          </div>
        </motion.div>

        {/* Highlight Quote Card (Centrada con Glassmorphic Glow y Línea de Acento) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative group w-full flex justify-center"
        >
          {/* Glowing Ambient Aura */}
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#E54D52]/30 via-[#d8caaa]/20 to-[#E54D52]/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700" /> */}

          <div className="relative w-full  rounded-3xl p-8 sm:p-14 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden">

            {/* Top Accent Line in Glowing Coral */}
            {/* <div className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-transparent via-[#E54D52] to-transparent rounded-full shadow-[0_0_20px_rgba(229,77,82,0.9)] mb-8 sm:mb-10" /> */}

            <div className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto">
              <span className="text-5xl sm:text-7xl font-serif text-[#E54D52]/40 select-none leading-none mb-2">“</span>
              <p className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#f8f4ef] font-medium leading-relaxed tracking-tight text-center -mt-4 sm:-mt-6">
                &quot;El vino se disfruta más cuando se comparte... y cuando te divertís en el camino.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Manifesto Body Text Card Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full  p-8 sm:p-12 md:p-14 text-center  flex justify-center items-center"
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-[#f8f4ef]/90 leading-relaxed font-light text-center max-w-4xl mx-auto">
            <span className="text-white font-normal">Casa Molinas no es una vinoteca. No es un e-commerce.</span> Es una marca que diseña{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#E54D52] via-[#f8f4ef] to-[#d8caaa] font-semibold underline decoration-[#E54D52]/40 underline-offset-8">
              experiencias para descubrir el vino argentino
            </strong>
            . Cada Edición tiene una intención: que construyas tu propio criterio y disfrutes más cada botella que abrís.
          </p>
        </motion.div>

        {/* 3 Modern Feature Cards Centered & Spaced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full pt-4 pb-8"
        >
          {/* Card 1 */}
          {/* <div className="group relative bg-[#0b2227]/70 border border-white/10 hover:border-[#E54D52]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E54D52]/10 flex flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E54D52]/15 border border-[#E54D52]/30 flex items-center justify-center text-[#E54D52] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Wine className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif text-[#f8f4ef] font-semibold mb-3">Más que una Vinoteca</h3>
              <p className="text-sm sm:text-base text-[#f8f4ef]/75 leading-relaxed font-light">
                Sin e-commerce tradicional ni ventas masivas. Cada botella es seleccionada con intención para sorprenderte.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-center text-xs tracking-widest uppercase text-[#d8caaa] font-semibold">
              <span>Experiencia Curada</span>
            </div>
          </div> */}

          {/* Card 2 */}
          {/* <div className="group relative bg-[#0b2227]/70 border border-white/10 hover:border-[#E54D52]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E54D52]/10 flex flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#d8caaa]/15 border border-[#d8caaa]/30 flex items-center justify-center text-[#d8caaa] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif text-[#f8f4ef] font-semibold mb-3">Descubrimiento Argentino</h3>
              <p className="text-sm sm:text-base text-[#f8f4ef]/75 leading-relaxed font-light">
                Recorremos terruños, historias de autor y bodegas boutique para conectar con la verdadera riqueza del vino nacional.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-center text-xs tracking-widest uppercase text-[#d8caaa] font-semibold">
              <span>Exploración Sensorial</span>
            </div>
          </div> */}

          {/* Card 3 */}
          {/* <div className="group relative bg-[#0b2227]/70 border border-white/10 hover:border-[#E54D52]/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#E54D52]/10 flex flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E54D52]/15 border border-[#E54D52]/30 flex items-center justify-center text-[#E54D52] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif text-[#f8f4ef] font-semibold mb-3">Tu Propio Criterio</h3>
              <p className="text-sm sm:text-base text-[#f8f4ef]/75 leading-relaxed font-light">
                Sin pretensiones ni esnobismos. Te brindamos herramientas para que te diviertas y disfrutes con tu propia voz.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-center text-xs tracking-widest uppercase text-[#d8caaa] font-semibold">
              <span>Autonomía & Disfrute</span>
            </div>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
}
