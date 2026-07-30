"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const steps = [
    {
      title: "Expectativa",
      description: "Anticipación antes de recibir la Edición",
    },
    {
      title: "Curiosidad",
      description: "Abrir la Edición y descubrir el contenido",
    },
    {
      title: "Descubrir",
      description: "Degustar cada vino con contexto e intención",
    },
    {
      title: "Confianza",
      description: "Incorporar lo aprendido para elegir mejor",
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden text-white flex flex-col items-center justify-center text-center"
    >
      {/* Background Subtle Radial Glow / Ambient Texture */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-35">
        <div className="w-[1000px] h-[600px] bg-[#e54d52]/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:gap-0 sm:gap-16 items-center justify-center">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-md border border-[#e54d52]/70 bg-[#e54d52]/10 text-[#e54d52] text-xs font-semibold tracking-widest uppercase">
            CÓMO FUNCIONA
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight text-center">
            La experiencia Casa Molinas
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#f8f4ef]/80 leading-relaxed font-normal max-w-3xl text-center">
            Cada interacción con Casa Molinas está pensada para que el vino tenga más sentido en tu vida. No es solo recibir botellas. Es construir criterio paso a paso.
          </p>
        </motion.div>

        {/* --- DESKTOP WAVE FLOW (> md screens) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex justify-center items-center w-full max-w-6xl mx-auto my-6"
        >
          {/* Large, Centered SVG Wave + Embedded Text via foreignObject */}
          <svg
            className="w-full h-auto overflow-visible select-none drop-shadow-[0_0_15px_rgba(229,77,82,0.15)]"
            viewBox="0 0 1200 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crimson Sinusoidal Wave Path - Exactly Centered at X=600 */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              d="
                M 80 220 
                H 140
                C 140 40, 360 40, 390 220
                C 390 400, 610 400, 640 220
                C 640 40, 860 40, 890 220
                C 890 400, 1060 400, 1115 200
                H 1120
              "
              stroke="#e54d52"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Red Origin Dot at far left */}
            <circle cx="80" cy="220" r="8" fill="#e54d52" />
            <circle cx="80" cy="220" r="14" fill="#e54d52" opacity="0.3" />

            {/* Arrow 1: Descending from Peak 1 */}
            <g transform="translate(390, 220) rotate(58)">
              <path
                d="M -14 -9 L 0 0 L -14 9"
                stroke="#e54d52"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Arrow 2: Ascending from Trough 1 */}
            <g transform="translate(640, 220) rotate(-58)">
              <path
                d="M -14 -9 L 0 0 L -14 9"
                stroke="#e54d52"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Arrow 3: Descending from Peak 2 */}
            <g transform="translate(890, 220) rotate(58)">
              <path
                d="M -14 -9 L 0 0 L -14 9"
                stroke="#e54d52"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* Arrow 4: Final Right-pointing Arrow at the end */}
            <g transform="translate(1115, 200) rotate(-35)">
              <path
                d="M -14 -9 L 0 0 L -14 9"
                stroke="#e54d52"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* --- Embedded HTML Foreign Objects Centered on Waves --- */}

            {/* Step 1: Expectativa (Bajo la Cresta 1) */}
            <foreignObject x="135" y="160" width="260" height="150">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                  Expectativa
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/85 font-normal leading-relaxed">
                  Anticipación antes de recibir la Edición
                </p>
              </div>
            </foreignObject>

            {/* Step 2: Curiosidad (Sobre el Valle 1) */}
            <foreignObject x="385" y="130" width="260" height="150">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                  Curiosidad
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/85 font-normal leading-relaxed">
                  Abrir la Edición y descubrir el contenido
                </p>
              </div>
            </foreignObject>

            {/* Step 3: Descubrir (Bajo la Cresta 2) */}
            <foreignObject x="635" y="160" width="260" height="150">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                  Descubrir
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/85 font-normal leading-relaxed">
                  Degustar cada vino con contexto e intención
                </p>
              </div>
            </foreignObject>

            {/* Step 4: Confianza (Sobre el Valle 2) */}
            <foreignObject x="875" y="130" width="260" height="150">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                  Confianza
                </h3>
                <p className="text-sm sm:text-base text-[#f8f4ef]/85 font-normal leading-relaxed">
                  Incorporar lo aprendido para elegir mejor
                </p>
              </div>
            </foreignObject>
          </svg>
        </motion.div>

        {/* --- MOBILE VERTICAL TIMELINE (< md screens) --- */}
        <div className="md:hidden relative border-l-2 border-[#e54d52]/50 pl-6 ml-auto mr-auto max-w-sm flex flex-col gap-9 py-4 text-left">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative"
            >
              {/* Point Node on Timeline */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#e54d52] border-4 border-[#0b2227] shadow-[0_0_12px_#e54d52]" />

              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#f8f4ef]/85 font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Text / Concluding Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 sm:pt-12 border-t border-[#f8f4ef]/10 text-center w-full flex flex-col items-center justify-center"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#f8f4ef]/90 font-normal leading-relaxed max-w-4xl mx-auto text-center">
            La experiencia no termina cuando se vacía la botella. Termina cuando incorporás algo nuevo a tu manera de disfrutar el vino.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
