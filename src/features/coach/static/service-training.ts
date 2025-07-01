import { People, Sonnar, Thunderbolt } from "@/core/assets/icons";

export const TRAINING_OPTIONS = [
  {
    title: "Entrenamiento Personal",
    description: "Sesiones 1:1 completamente personalizadas",
    features: [
      "Plan personalizado",
      "Seguimiento continuo",
      "Flexibilidad horaria",
      "Resultados garantizados",
    ],
    priceRange: "€50-80",
    unit: "/sesión",
    icon: People,
  },
  {
    title: "Entrenamiento Semi-Personal",
    description: "Grupos pequeños de 2-4 personas",
    features: [
      "Atención personalizada",
      "Motivación grupal",
      "Precio reducido",
      "Ambiente social",
    ],
    priceRange: "€30-40",
    unit: "/sesión",
    icon: Sonnar,
  },
  {
    title: "Consultoría Online",
    description: "Asesoramiento virtual personalizado",
    features: [
      "Plan de entrenamiento",
      "Seguimiento semanal",
      "Videollamadas",
      "Flexibilidad total",
    ],
    priceRange: "€80-120",
    unit: "/mes",
    icon: Thunderbolt,
  },
];
