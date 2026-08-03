"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, ShieldCheck, RefreshCw, Crown, Percent } from "lucide-react";

export default function WhySubscribeSection() {
  const benefits = [
    {
      title: "10% OFF adicional en cada Edición",
      desc: "Descuento directo exclusivo para miembros del club.",
      icon: Percent,
    },
    {
      title: "Recepción automática mes a mes",
      desc: "Tu selección mensual sin trámites ni demoras.",
      icon: RefreshCw,
    },
    {
      title: "Primera elección en ediciones limitadas",
      desc: "Acceso prioritario a botellas de partidas reducidas.",
      icon: Crown,
    },
    {
      title: "Cancelás cuando quieras",
      desc: "Sin permanencia ni penalizaciones.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="suscripcion"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-24 lg:py-32 overflow-hidden text-white flex flex-col items-center justify-center text-center"
    >
      {/* Background Ambient Glow tailored for mobile screens */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[450px] bg-gradient-to-tr from-[#741825]/30 via-[#9b2a3a]/20 to-[#d8caaa]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-14 w-full max-w-5xl mx-auto">
        
        {/* Header Section (Mobile Optimized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-3.5 sm:gap-5 w-full px-2"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d8caaa]/10 border border-[#d8caaa]/30 backdrop-blur-md text-[#d8caaa] text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MOLINAS CLUB</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-serif text-center">
            ¿Por qué suscribirte?
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-[#f8f4ef]/85 leading-relaxed font-light text-center max-w-2xl px-1">
            La suscripción es la forma más simple de no perderte ninguna Edición. Recibís cada selección mensual de forma automática, con un{" "}
            <span className="inline-block font-semibold text-[#d8caaa] bg-[#d8caaa]/10 px-2 py-0.5 rounded border border-[#d8caaa]/30 my-0.5">
              10% de descuento adicional
            </span>{" "}
            y la tranquilidad de tener siempre algo nuevo para descubrir.
          </p>
        </motion.div>

        {/* Mobile First Stacked Cards */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
          
          {/* Card 1: Con suscripción (Mobile First Styling) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="w-full lg:col-span-7 relative group rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#13282d]/95 via-[#0e1d21]/98 to-[#091619]/99 border border-white/10 p-5 sm:p-8 md:p-10 shadow-xl backdrop-blur-xl flex flex-col justify-between items-center text-center overflow-hidden hover:border-[#d8caaa]/40 transition-all duration-300"
          >
            {/* Ambient inner card accent */}
            <div className="absolute -top-20 -right-20 w-44 h-44 sm:w-64 sm:h-64 bg-[#741825]/25 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="w-full flex flex-col items-center text-center gap-5 sm:gap-6">
              
              {/* Card Header */}
              <div className="flex flex-col items-center text-center gap-2 pb-4 sm:pb-6 border-b border-white/10 w-full">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br from-[#741825] to-[#a82338] flex items-center justify-center shadow-md shadow-[#741825]/40 border border-white/20 mb-1">
                  <Crown className="w-5.5 h-5.5 text-[#f8f4ef]" />
                </div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d8caaa] font-semibold">
                  Beneficios Exclusivos
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Con suscripción
                </h3>
              </div>

              {/* Mobile First Benefits Rows */}
              <div className="flex flex-col gap-3 sm:gap-4 w-full">
                {benefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileTap={{ scale: 0.98 }}
                      className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#d8caaa]/30 transition-colors flex items-start text-left gap-3.5"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#d8caaa]/10 flex items-center justify-center text-[#d8caaa] flex-shrink-0 mt-0.5">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#f8f4ef]/70 font-light leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Badge inside Card */}
              <div className="mt-4 pt-4 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-xs text-[#f8f4ef]/70 font-light">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#d8caaa]" /> Proceso 100% automatizado
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="text-[#d8caaa] font-medium">Sin costos ocultos</span>
              </div>

            </div>
          </motion.div>

          {/* Card 2: Sin compromiso & CTA (Mobile First Styling) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:col-span-5 relative group rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#741825]/45 via-[#180a0e]/85 to-[#0b2227]/95 border border-[#9b2a3a]/50 p-5 sm:p-8 md:p-10 shadow-xl backdrop-blur-xl flex flex-col justify-between items-center text-center overflow-hidden hover:border-[#e54d52]/60 transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-16 -left-16 w-44 h-44 sm:w-56 sm:h-56 bg-[#e54d52]/25 rounded-full blur-[70px] pointer-events-none" />

            <div className="w-full flex flex-col items-center text-center gap-5 sm:gap-6">
              
              {/* Badge & Icon Centered */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#d8caaa] shadow-md mb-0.5">
                  <ShieldCheck className="w-5.5 h-5.5 text-[#d8caaa]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-[10px] sm:text-xs font-semibold tracking-wide border border-white/10 backdrop-blur-md">
                  Flexibilidad Total
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5 max-w-sm my-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Sin compromiso
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#f8f4ef]/85 leading-relaxed font-light">
                  La suscripción es flexible. Podés pausar o cancelar cuando quieras, sin preguntas incómodas. Es una herramienta para vos, no una obligación.
                </p>
              </div>

              {/* CTA Section Optimized for Mobile Thumb Press */}
              <div className="mt-4 sm:mt-6 flex flex-col items-center text-center gap-2.5 w-full">
                <motion.a
                  href="#unirse"
                  whileTap={{ scale: 0.96 }}
                  className="relative group/btn w-full sm:max-w-xs py-3.5 px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#741825] via-[#a82338] to-[#e54d52] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#741825]/50 border border-white/20 flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-300"
                >
                  <span className="tracking-wide">Suscribirme</span>
                  <ArrowRight className="w-4.5 h-4.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.a>

                <p className="text-center text-[11px] sm:text-xs text-[#f8f4ef]/55 font-light">
                  Cancelación con 1 clic en cualquier momento
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
