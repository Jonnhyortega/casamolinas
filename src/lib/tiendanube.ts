export interface ProductImage {
  id: number;
  src: string;
  alt: string[];
}

export interface ProductVariant {
  id: number;
  price: string;
  promotional_price: string | null;
  stock: number | null;
  sku: string | null;
}

export interface TiendanubeProduct {
  id: number;
  name: {
    es?: string;
    [key: string]: string | undefined;
  } | string;
  description: {
    es?: string;
    [key: string]: string | undefined;
  } | string;
  handle: {
    es?: string;
    [key: string]: string | undefined;
  } | string;
  images: ProductImage[];
  variants: ProductVariant[];
  categories: { id: number; name: { es?: string } | string }[];
  canonical_url: string;
  published: boolean;
  free_shipping: boolean;
}

export interface FormattedProduct {
  id: number;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  isNew?: boolean;
  isPopular?: boolean;
  inStock: boolean;
  description?: string;
}

// Datos de prueba (Mock) representativos de Casa Molinas para cuando aún no hay API Key activa
export const MOCK_PRODUCTS: FormattedProduct[] = [
  {
    id: 101,
    title: "Gran Reserva Malbec 2020",
    category: "Vinos Tintos",
    price: "$28.500",
    originalPrice: "$32.000",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: true,
    isPopular: true,
    inStock: true,
    description: "Cosecha seleccionada de Valle de Uco. Crianza en barrica de roble francés durante 18 meses."
  },
  {
    id: 102,
    title: "Edición Limitada Cabernet Franc 2021",
    category: "Ediciones Especiales",
    price: "$34.000",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: true,
    isPopular: false,
    inStock: true,
    description: "Notas de pimiento rojo asado y especias. Exclusivo para miembros del club."
  },
  {
    id: 103,
    title: "Blend de Blancos Altamira",
    category: "Vinos Blancos",
    price: "$22.000",
    originalPrice: "$25.000",
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: false,
    isPopular: true,
    inStock: true,
    description: "Chardonnay y Sauvignon Blanc. Frescura mineral con excelente acidez en boca."
  },
  {
    id: 104,
    title: "Caja Colección #52 - Cepas Raras",
    category: "Cajas Selección",
    price: "$56.000",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: false,
    isPopular: true,
    inStock: true,
    description: "Selección especial de 3 botellas con etiquetas de pequeños productores boutique."
  },
  {
    id: 105,
    title: "Pinot Noir Patagonia Norte",
    category: "Vinos Tintos",
    price: "$26.800",
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: false,
    isPopular: false,
    inStock: true,
    description: "Elegancia pura de clima frío. Aromas a frutos rojos silvestres y sotobosque."
  },
  {
    id: 106,
    title: "Rosado de Criolla Centenaria",
    category: "Ediciones Especiales",
    price: "$19.500",
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=800&auto=format&fit=crop",
    url: "#",
    isNew: true,
    isPopular: false,
    inStock: true,
    description: "Vides antiguas recuperadas de Luján de Cuyo. Edición limitada de 1.200 botellas."
  }
];

export async function getTiendanubeProducts(): Promise<{
  products: FormattedProduct[];
  isLive: boolean;
}> {
  const userId = process.env.TIENDANUBE_USER_ID;
  const accessToken = process.env.TIENDANUBE_ACCESS_TOKEN;
  const storeUrl = process.env.TIENDANUBE_STORE_URL || "#";

  if (!userId || !accessToken) {
    return {
      products: MOCK_PRODUCTS,
      isLive: false
    };
  }

  try {
    const res = await fetch(`https://api.tiendanube.com/v1/${userId}/products?published=true`, {
      headers: {
        "Authentication": `bearer ${accessToken}`,
        "User-Agent": "CasaMolinas (info@casamolinas.com.ar)"
      },
      next: { revalidate: 1800 } // Caché de 30 minutos
    });

    if (!res.ok) {
      console.warn(`Tiendanube API Error: ${res.statusText}`);
      return { products: MOCK_PRODUCTS, isLive: false };
    }

    const data: TiendanubeProduct[] = await res.json();

    const formatted: FormattedProduct[] = data.map((item) => {
      const title = typeof item.name === "string" ? item.name : (item.name?.es || "Vino Casa Molinas");
      const desc = typeof item.description === "string" ? item.description : (item.description?.es || "");
      const mainImage = item.images?.[0]?.src || MOCK_PRODUCTS[0].image;
      
      const variant = item.variants?.[0];
      const rawPrice = variant?.price ? parseFloat(variant.price) : 0;
      const rawPromoPrice = variant?.promotional_price ? parseFloat(variant.promotional_price) : null;
      
      const formattedPrice = rawPromoPrice && rawPromoPrice < rawPrice
        ? `$${rawPromoPrice.toLocaleString("es-AR")}`
        : `$${rawPrice.toLocaleString("es-AR")}`;
        
      const formattedOriginalPrice = rawPromoPrice && rawPromoPrice < rawPrice
        ? `$${rawPrice.toLocaleString("es-AR")}`
        : undefined;

      const mainCategory = item.categories?.[0]
        ? (typeof item.categories[0].name === "string" ? item.categories[0].name : item.categories[0].name?.es || "Catálogo")
        : "Vinos Seleccionados";

      const handleStr = typeof item.handle === "string" ? item.handle : (item.handle?.es || "");
      const productUrl = item.canonical_url || (storeUrl !== "#" ? `${storeUrl}/productos/${handleStr}` : "#");

      return {
        id: item.id,
        title,
        category: mainCategory,
        price: formattedPrice,
        originalPrice: formattedOriginalPrice,
        image: mainImage,
        url: productUrl,
        inStock: variant?.stock === null || (variant?.stock !== undefined && variant.stock > 0),
        description: desc.replace(/<[^>]*>?/gm, "").slice(0, 110) + "..."
      };
    });

    return {
      products: formatted.length > 0 ? formatted : MOCK_PRODUCTS,
      isLive: true
    };
  } catch (error) {
    console.error("Error cargando productos de Tiendanube:", error);
    return {
      products: MOCK_PRODUCTS,
      isLive: false
    };
  }
}
