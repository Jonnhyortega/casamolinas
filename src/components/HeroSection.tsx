"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0b2227]">
      {/* Background Image - High-end wine tasting scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity transform scale-105 transition-all duration-1000"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      />

      {/* Rich Dark Gradient Overlay for legibility & mood */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2227] via-[#0b2227]/90 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2227] via-transparent to-[#0b2227]/70 z-0" />

      {/* 3D Interactive Canvas Layer */}
      <Hero3D />

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-8 md:px-16 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-block"
          >
            <div className="badge-pill">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E54D52] shadow-sm shadow-[#E54D52]" />
              <span>CLUB DE VINOS EXCLUSIVOS</span>
            </div>
          </motion.div>

          {/* Main Title: Casa Molinas */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Casa Molinas
          </motion.h1>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[#f8f4ef]/90 font-light leading-relaxed mb-10"
          >
            Ediciones mensuales de vino argentino con intención, curaduría y criterio.
            Porque el vino se disfruta más cuando descubrís algo nuevo cada vez que abrís una botella.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a 
              href="#ediciones" 
              className="btn-primary"
              style={{ padding: '14px 30px', fontSize: '1rem', borderRadius: '10px' }}
            >
              Explorar Ediciones
            </a>

            <a 
              href="#como-funciona" 
              className="btn-outline"
              style={{ padding: '14px 30px', fontSize: '1rem', borderRadius: '10px' }}
            >
              Cómo funciona
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#d8caaa]/80 hover:text-[#d8caaa] transition-colors cursor-pointer">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">DESCUBRÍ MÁS</span>
        <div className="w-5 h-8 border border-[#d8caaa]/50 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-2 bg-[#d8caaa] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
