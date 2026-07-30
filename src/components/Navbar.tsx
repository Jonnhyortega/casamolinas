"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b2227]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-xl"
          : "bg-gradient-to-b from-[#0b2227]/90 via-[#0b2227]/40 to-transparent py-6 md:py-8"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-full border border-[#d8caaa]/50 flex items-center justify-center bg-black/30 group-hover:border-[#d8caaa] transition-colors flex-shrink-0">
            <svg
              className="w-5 h-5 text-[#d8caaa]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 22h8" />
              <path d="M12 15v7" />
              <path d="M12 15a5 5 0 0 0 5-5V3H7v7a5 5 0 0 0 5 5Z" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white leading-none">
              CASA MOLINAS
            </span>
            <span className="text-[10px] tracking-[0.28em] text-[#d8caaa] uppercase font-light mt-1">
              CLUB DE VINOS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-medium tracking-wider uppercase text-white/90">
          <a href="#ediciones" className="hover:text-[#d8caaa] transition-colors">
            Ediciones
          </a>
          <a href="#como-funciona" className="hover:text-[#d8caaa] transition-colors">
            Cómo Funciona
          </a>
          <a href="#tienda" className="hover:text-[#d8caaa] transition-colors">
            Tienda
          </a>
          <a href="#nosotros" className="hover:text-[#d8caaa] transition-colors">
            Nosotros
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#unirse"
            className="btn-primary"
            style={{ padding: '12px 26px', fontSize: '0.875rem', borderRadius: '9999px' }}
          >
            Unirme al Club
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b2227]/98 backdrop-blur-xl border-b border-white/10 px-8 py-6 space-y-4 flex flex-col shadow-2xl">
          <a
            href="#ediciones"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#d8caaa] text-lg font-medium transition-colors"
          >
            Ediciones
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#d8caaa] text-lg font-medium transition-colors"
          >
            Cómo Funciona
          </a>
          <a
            href="#tienda"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#d8caaa] text-lg font-medium transition-colors"
          >
            Tienda
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-[#d8caaa] text-lg font-medium transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#unirse"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-center justify-center w-full"
          >
            Unirme al Club
          </a>
        </div>
      )}
    </header>
  );
}
