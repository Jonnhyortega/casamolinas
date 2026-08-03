"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden bg-[#0b2227] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-24">
      {/* Background Image - High-end wine tasting scene */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      />

      {/* Dark Radial & Linear Gradients for Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0b2227]/70 via-[#0b2227]/90 to-[#0b2227] z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2227] via-transparent to-[#0b2227] z-0" />

      {/* 3D Interactive Canvas Layer */}
      <Hero3D />

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-3xl mx-auto flex flex-col items-center text-center pt-16 sm:pt-20">

        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex justify-center"
        >
          <div className="badge-pill-custom">
            <span className="w-2 h-2 rounded-full bg-[#E54D52] animate-pulse shrink-0" />
            <span>CLUB DE VINOS EXCLUSIVOS</span>
          </div>
        </motion.div>

        {/* Main Title: Casa Molinas */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
        >
          Casa Molinas
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-[#f8f4ef]/90 font-light leading-relaxed mb-8 max-w-lg mx-auto"
        >
          Ediciones mensuales de vino argentino con intención, curaduría y criterio.
          Porque el vino se disfruta más cuando descubrís algo nuevo cada vez que abrís una botella.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="https://casamolinas.mitiendanube.com/productos/" className="btn-primary-custom">
            Explorar Ediciones
          </a>

          <a href="#como-funciona" className="btn-outline-custom">
            Cómo funciona
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#d8caaa]/80 hover:text-[#d8caaa] transition-colors cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">DESCUBRÍ MÁS</span>
        <div className="w-4 h-7 border border-[#d8caaa]/50 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-[#d8caaa] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
