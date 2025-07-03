import { Clock, People, Sonnar } from "@/core/assets/icons";

type SupplementItem = {
  name: string;
  supplements: string[];
  timing?: string; // Solo se usa en "Timing"
};

export interface BuyingGuideSection {
  title: string;
  icon: any;
  items: SupplementItem[];
}

export const BUYING_GUIDE: BuyingGuideSection[] = [
  {
    title: "Objetivos",
    icon: Sonnar,
    items: [
      {
        name: "Ganar Masa",
        supplements: ["Proteína", "Creatina", "Carbohidratos"],
      },
      {
        name: "Perder Peso",
        supplements: ["Proteína", "L-Carnitina", "Termogénico"],
      },
      {
        name: "Definir",
        supplements: ["Proteína", "BCAA", "CLA"],
      },
      {
        name: "Resistencia",
        supplements: ["Pre-entreno", "Electrolitos"],
      },
    ],
  },
  {
    title: "Timing",
    icon: Clock,
    items: [
      {
        name: "Pre-entreno",
        supplements: [],
        timing: "30-45 min antes",
      },
      {
        name: "Post-entreno",
        supplements: [],
        timing: "Inmediatamente después",
      },
      {
        name: "Proteína",
        supplements: [],
        timing: "Entre comidas o antes de dormir",
      },
      {
        name: "Creatina",
        supplements: [],
        timing: "Cualquier momento del día",
      },
    ],
  },
  {
    title: "Nivel",
    icon: People,
    items: [
      {
        name: "Principiante",
        supplements: ["Proteína básica", "Multivitamínico"],
      },
      {
        name: "Intermedio",
        supplements: ["Creatina", "Pre-entreno"],
      },
      {
        name: "Avanzado",
        supplements: ["Stack completo personalizado"],
      },
      {
        name: "Profesional",
        supplements: ["Suplementación específica"],
      },
    ],
  },
];
