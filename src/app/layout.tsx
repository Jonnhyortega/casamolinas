import type { Metadata } from "next";
import { Lexend, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Molinas | Club de Vinos",
  description: "Ediciones mensuales de vino argentino con intención, curaduría y criterio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lexend.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-wine-dark text-wine-cream font-sans antialiased selection:bg-wine-burgundy selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
