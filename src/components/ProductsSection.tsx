"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedProduct } from "@/lib/tiendanube";

interface ProductsSectionProps {
  products: FormattedProduct[];
  isLive?: boolean;
}

export default function ProductsSection({ products, isLive = false }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  // Obtener categorías únicas
  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="tienda"
      className="relative w-full pt-20 pb-32 sm:pt-28 sm:pb-40 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Glow ambiental verde/dorado de fondo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#d8caaa]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d8caaa]/10 border border-[#d8caaa]/30 text-[#d8caaa] text-xs font-semibold uppercase tracking-widest w-fit">
              <span className="w-2 h-2 rounded-full bg-[#d8caaa] animate-pulse" />
              Nuestra Tienda & Catálogo
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Botellas con Criterio
            </h2>
            <p className="text-base sm:text-lg text-[#f8f4ef]/85 leading-relaxed font-normal">
              Explorá nuestra selección actual de etiquetas únicas, ediciones limitadas y cajas curatoriales disponibles para envío a todo el país.
            </p>
          </motion.div>

          {/* Estado de sincronización */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-[#f8f4ef]/50 flex items-center gap-2 bg-[#0b2227]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#d8caaa]/15 self-start md:self-end"
          >
            <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            {isLive ? 'Sincronizado en vivo con Tiendanube' : 'Catálogo preliminar (Modo Vista Previa)'}
          </motion.div>
        </div>

        {/* Filtros de Categoría */}
        {categories.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#d8caaa] text-[#0b2227] font-semibold shadow-md shadow-[#d8caaa]/20"
                    : "bg-[#741825]/20 text-[#f8f4ef]/70 hover:bg-[#741825]/40 hover:text-white border border-[#9b2a3a]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}

        {/* Grid de Productos */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#0e2c33]/80 border border-[#d8caaa]/20 hover:border-[#d8caaa]/60 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-sm transition-all duration-300"
              >
                {/* Imagen del Vino */}
                <div className="relative w-full h-64 overflow-hidden bg-[#07171a]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2c33] via-transparent to-transparent opacity-80" />

                  {/* Badges superiores */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.isNew && (
                      <span className="bg-[#741825] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        Novedad
                      </span>
                    )}
                    {product.category && (
                      <span className="bg-[#0b2227]/90 text-[#d8caaa] border border-[#d8caaa]/30 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md">
                        {product.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Info del Producto */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#d8caaa] transition-colors leading-snug">
                      {product.title}
                    </h3>
                    {product.description && (
                      <p className="text-xs text-[#f8f4ef]/70 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>

                  {/* Precio y Acción */}
                  <div className="pt-4 border-t border-[#d8caaa]/10 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#f8f4ef]/50 uppercase tracking-widest">Precio</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-[#d8caaa]">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#f8f4ef]/40 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#741825] hover:bg-[#8e1d2e] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-md hover:shadow-[#741825]/50 transition-all duration-300 border border-[#9b2a3a]/60 active:scale-95"
                    >
                      <span>Comprar</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer / CTA a Tiendanube completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-8 rounded-2xl bg-gradient-to-r from-[#741825]/40 via-[#0e2c33] to-[#741825]/40 border border-[#d8caaa]/20 text-center flex flex-col items-center gap-4 shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">¿Querés ver el catálogo completo?</h3>
          <p className="text-sm text-[#f8f4ef]/80 max-w-xl">
            Explorá todas nuestras colecciones, cajas especiales y accesorios directamente en la tienda oficial de Tiendanube.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_TIENDANUBE_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-3 bg-[#d8caaa] hover:bg-[#e4d7b8] text-[#0b2227] font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#d8caaa]/20 hover:scale-105 active:scale-95"
          >
            <span>Ir a la Tiendanube Oficial</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
