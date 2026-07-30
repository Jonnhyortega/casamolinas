import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import EditionSection from "@/components/EditionSection";
import ProductsSection from "@/components/ProductsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { getTiendanubeProducts } from "@/lib/tiendanube";

export default async function Home() {
  const { products, isLive } = await getTiendanubeProducts();

  return (
    <main className="min-h-screen bg-[#0b2227] text-[#f8f4ef] w-full flex flex-col items-center justify-center gap-15 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Manifiesto / Filosofía */}
      <ManifestoSection />

      {/* Section 3: ¿Qué es una Edición? */}
      <EditionSection />

      {/* Section 4: Catálogo & Tienda Integrada con Tiendanube */}
      {/* <ProductsSection products={products} isLive={isLive} /> */}

      {/* Section 5: La experiencia Casa Molinas / Cómo Funciona */}
      <ExperienceSection />

      <footer className="py-12 border-t border-[#d8caaa]/20 text-center text-sm text-[#f8f4ef]/50">
        <p>© {new Date().getFullYear()} Casa Molinas - Club de Vinos. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

