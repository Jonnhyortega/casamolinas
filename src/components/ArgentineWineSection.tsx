"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ArgentineWineSection() {
  const cards = [
    {
      title: "Explorar sin presión",
      description:
        "No necesitás ser experto para disfrutar el vino. Solo necesitás curiosidad y ganas de descubrir.",
    },
    {
      title: "Con criterio, sin snobismo",
      description:
        "Hablamos de vino de forma clara, honesta y conversacional. Sin tecnicismos innecesarios.",
    },
    {
      title: "Cada botella, una historia",
      description:
        "Los vinos que seleccionamos tienen una razón de estar ahí. Siempre te contamos cuál es.",
    },
  ];

  return (
    <section
      id="vino-argentino"
      className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24 lg:py-32 overflow-hidden text-white"
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[500px] bg-[#e54d52]/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Vineyard Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[620px] w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
        >
          <Image
            src="/images/vineyard-sunset.jpg"
            alt="Viñedos argentinos al atardecer"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
          {/* Subtle Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2227]/60 via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Right Side: Text Content & Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center gap-6 sm:gap-8"
        >
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              El vino argentino, desde la curiosidad
            </h2>
            <p className="text-base sm:text-lg text-[#f8f4ef]/80 leading-relaxed font-light">
              Argentina tiene una diversidad de vinos que pocos países pueden igualar.
              Malbec, Bonarda, Cabernet Franc, blends... cada botella cuenta una historia
              de lugar, de clima, de personas.
            </p>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-4 sm:gap-5 mt-2">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="relative bg-[#13282d]/80 backdrop-blur-sm border border-white/5 border-l-4 border-l-[#e54d52] rounded-xl p-5 sm:p-6 shadow-lg hover:border-white/10 hover:border-l-[#e54d52] hover:bg-[#162e34] transition-all duration-300 group"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-[#f8f4ef]">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/75 leading-relaxed font-light">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
