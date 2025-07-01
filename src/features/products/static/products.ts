import type { ImageMetadata } from "astro";
import BCAA_211 from "./../assets/bcaa_211.webp";
import BLANKED from "./../assets/blanket.webp";
import BLUETOOTH_HEADPHONES from "./../assets/bluetooth-headphones.webp";
import ENERGY_BARS from "./../assets/energy-bars.webp";
import ESPRESSO_MACHINE from "./../assets/espresso-machine.webp";
import OUTDOOR_BACKPACK from "./../assets/outdoor-backpack.webp";
import RUNNING_SHOES from "./../assets/running-shoes.webp";
import SMARTWATCH from "./../assets/smartwatch.webp";
import SPORTS_SHIRT from "./../assets/sports-shirt.webp";
import SUNGLASSES from "./../assets/sunglasses.webp";
import SUPPLEMENT_2 from "./../assets/supplement-product-2.webp";
import SUPPLEMENT from "./../assets/supplement-product.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewsCount: number;
  category: string;
  imageUrl: ImageMetadata;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "12345",
    name: "Proteína Whey Premium",
    description:
      "Proteína de suero de alta calidad para el desarrollo muscular.",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    rating: 4.8,
    reviewsCount: 124,
    category: "Suplementos",
    imageUrl: SUPPLEMENT,
    inStock: true,
  },
  {
    id: "12346",
    name: "BCAA 2:1:1",
    description:
      "Aminoácidos ramificados para mejorar el rendimiento en entrenamientos.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.5,
    reviewsCount: 80,
    category: "Suplementos",
    imageUrl: BCAA_211,
    inStock: true,
  },
  {
    id: "12347",
    name: "Multivitamínico Plus",
    description:
      "Suplemento vitamínico completo para mejorar la salud general.",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    rating: 4.7,
    reviewsCount: 50,
    category: "Suplementos",
    imageUrl: SUPPLEMENT_2,
    inStock: true,
  },
  {
    id: "12348",
    name: "Barra Energética de Chocolate",
    description:
      "Barra energética ideal para recuperarte después de un entrenamiento intenso.",
    price: 2.99,
    originalPrice: 3.99,
    discount: 25,
    rating: 4.6,
    reviewsCount: 210,
    category: "Snacks",
    imageUrl: ENERGY_BARS,
    inStock: true,
  },
  {
    id: "12349",
    name: "Manta Polar Reversible",
    description: "Manta suave y cálida para el invierno, reversible.",
    price: 35.99,
    originalPrice: 45.99,
    discount: 22,
    rating: 4.3,
    reviewsCount: 112,
    category: "Hogar",
    imageUrl: BLANKED,
    inStock: true,
  },
  {
    id: "12350",
    name: "Lentes de Sol UV400",
    description:
      "Lentes de sol con protección UV400 para el cuidado de tus ojos.",
    price: 19.99,
    originalPrice: 25.99,
    discount: 23,
    rating: 4.4,
    reviewsCount: 175,
    category: "Accesorios",
    imageUrl: SUNGLASSES,
    inStock: false,
  },
  {
    id: "12351",
    name: "Auriculares Bluetooth",
    description:
      "Auriculares inalámbricos con tecnología Bluetooth y cancelación de ruido.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 3.9,
    reviewsCount: 320,
    category: "Electrónica",
    imageUrl: BLUETOOTH_HEADPHONES,
    inStock: true,
  },
  {
    id: "12352",
    name: "Reloj Inteligente Deportivo",
    description:
      "Reloj inteligente con monitorización de actividades físicas y notificaciones.",
    price: 99.99,
    originalPrice: 149.99,
    discount: 33,
    rating: 4.7,
    reviewsCount: 250,
    category: "Electrónica",
    imageUrl: SMARTWATCH,
    inStock: true,
  },
  {
    id: "12353",
    name: "Zapatillas Running Air",
    description:
      "Zapatillas deportivas para correr, con tecnología de amortiguación avanzada.",
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.6,
    reviewsCount: 180,
    category: "Calzado",
    imageUrl: RUNNING_SHOES,
    inStock: true,
  },
  {
    id: "12354",
    name: "Camiseta Deportiva Transpirable",
    description:
      "Camiseta para deportes, fabricada con tela transpirable y de secado rápido.",
    price: 14.99,
    originalPrice: 19.99,
    discount: 25,
    rating: 3.5,
    reviewsCount: 150,
    category: "Ropa",
    imageUrl: SPORTS_SHIRT,
    inStock: true,
  },
  {
    id: "12355",
    name: "Mochila Outdoor",
    description:
      "Mochila resistente al agua para actividades al aire libre y trekking.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 5.0,
    reviewsCount: 90,
    category: "Accesorios",
    imageUrl: OUTDOOR_BACKPACK,
    inStock: true,
  },
  {
    id: "12356",
    name: "Cafetera Espresso Automática",
    description:
      "Cafetera de alta gama para preparar espresso con un solo botón.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.7,
    reviewsCount: 80,
    category: "Electrodomésticos",
    imageUrl: ESPRESSO_MACHINE,
    inStock: false,
  },
];
