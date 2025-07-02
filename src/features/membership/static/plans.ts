import { Crown, People, Thunderbolt } from "@/core/assets/icons";

export interface MembershipPlan {
  name: string;
  description: string;
  price: string;
  oldPrice: string | null;
  billingCycle: string;
  savings: string | null;
  isPopular: boolean;
  features: string[];
  excludedFeatures?: string[];
  characteristics: string[];
  cta: string;
  icon: any;
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    name: "Básico",
    description: "Perfecto para comenzar tu journey fitness",
    price: "€29.99",
    oldPrice: null,
    billingCycle: "/mes",
    characteristics: [
      "Acceso básico",
      "Horario extendido",
      "Evaluación gratis",
    ],
    savings: null,
    isPopular: false,
    features: [
      "Acceso al gimnasio",
      "Vestuarios y duchas",
      "Evaluación inicial",
      "Horario: 6:00 - 22:00",
    ],
    excludedFeatures: [
      "Clases grupales",
      "Entrenador personal",
      "Acceso a piscina",
      "Invitados",
      "Nutricionista",
      "App móvil premium",
    ],
    cta: "Elegir Plan",
    icon: People,
  },
  {
    name: "Premium",
    description: "La opción más completa para resultados serios",
    price: "€49.99",
    oldPrice: "€59.99",
    billingCycle: "/mes",
    characteristics: [
      "Acceso 24/7",
      "Clases ilimitadas",
      "Entrenador incluido",
      "Piscina",
    ],
    savings: "Ahorra €10.00",
    isPopular: true,
    features: [
      "Acceso al gimnasio",
      "Vestuarios y duchas",
      "Evaluación inicial",
      "Horario: 24/7",
      "Clases grupales ilimitadas",
      "2 sesiones entrenador personal",
      "Acceso a piscina",
      "2 invitados al mes",
      "Consulta nutricional",
      "App móvil premium",
    ],
    cta: "Elegir Plan Popular",
    icon: Thunderbolt,
  },
  {
    name: "VIP Elite",
    description: "Experiencia premium con servicios exclusivos",
    price: "€89.99",
    oldPrice: "€109.99",
    billingCycle: "/mes",
    characteristics: [
      "Todo incluido",
      "Servicios premium",
      "Sin límites",
      "Área VIP",
    ],
    savings: "Ahorra €20.00",
    isPopular: false,
    features: [
      "Acceso al gimnasio",
      "Vestuarios y duchas premium",
      "Evaluación médica completa",
      "Horario: 24/7",
      "Clases grupales ilimitadas",
      "Entrenador personal ilimitado",
      "Acceso a todas las instalaciones",
      "Invitados ilimitados",
      "Nutricionista personal",
      "App móvil premium + wearables",
    ],
    cta: "Elegir Plan",
    icon: Crown,
  },
];
