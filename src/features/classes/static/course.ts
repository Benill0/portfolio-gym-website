import type { ImageMetadata } from "astro";

import BOX from "@/features/classes/assets/box.webp";
import CARDIO_KICKBOXING from "@/features/classes/assets/cardio-kickboxing.webp";
import CROSSFIT from "@/features/classes/assets/crossfit.webp";
import FUNCTIONAL_TRAINING from "@/features/classes/assets/functional-training.webp";
import INTENSE_HIIT from "@/features/classes/assets/intense-hiit.webp";
import PILATES from "@/features/classes/assets/pilates.webp";
import SPINNING from "@/features/classes/assets/spinning.webp";
import STRETCHING from "@/features/classes/assets/stretching.webp";
import TAI_CHI from "@/features/classes/assets/tai-chi.webp";
import YOGA_FLOW from "@/features/classes/assets/yoga-flow.webp";
import YOGA_RELAX from "@/features/classes/assets/yoga-relax.webp";
import ZUMBA from "@/features/classes/assets/zumba.webp";

export interface GymCourse {
  name: string;
  category: "Cardio" | "Flexibilidad" | "Fuerza" | "Yoga";
  price: number;
  rating: number;
  instructor: string;
  description: string;
  duration: string;
  participants: string;
  benefits: string[];
  difficulty: "Baja" | "Media" | "Alta";
  imageUrl: ImageMetadata;
  nextSessions: {
    date: string;
    availability: "Disponible" | "Completo";
  }[];
}

export const GYM_COURSES: GymCourse[] = [
  {
    name: "HIIT Intenso",
    category: "Cardio",
    price: 15,
    rating: 4.8,
    instructor: "Paula Sánchez",
    description:
      "Entrenamiento de alta intensidad para quemar grasa, mejorar resistencia y tonificar el cuerpo. Ideal para aquellos que buscan un desafío físico.",
    duration: "45 minutos",
    participants: "18/20 participantes",
    benefits: ["Quema grasa", "Mejora cardiovascular", "Tonificación"],
    difficulty: "Alta",
    imageUrl: INTENSE_HIIT,
    nextSessions: [
      { date: "Lunes 07:00", availability: "Disponible" },
      { date: "Miércoles 18:00", availability: "Completo" },
    ],
  },
  {
    name: "Yoga Flow",
    category: "Flexibilidad",
    price: 12,
    rating: 4.9,
    instructor: "Laura Gómez",
    description:
      "Secuencias fluidas de yoga enfocadas en la flexibilidad, relajación y equilibrio. Perfecto para quienes buscan aliviar el estrés y mejorar su movilidad.",
    duration: "60 minutos",
    participants: "12/15 participantes",
    benefits: ["Flexibilidad", "Relajación", "Equilibrio"],
    difficulty: "Media",
    imageUrl: YOGA_FLOW,
    nextSessions: [
      { date: "Martes 09:00", availability: "Disponible" },
      { date: "Jueves 19:00", availability: "Disponible" },
    ],
  },
  {
    name: "Pilates",
    category: "Flexibilidad",
    price: 13,
    rating: 4.7,
    instructor: "Laura Gómez",
    description:
      "Entrenamiento centrado en el control corporal, fortalecimiento muscular y mejora de la postura. Ideal para quienes buscan tonificar y alinear el cuerpo.",
    duration: "50 minutos",
    participants: "10/15 participantes",
    benefits: ["Mejora postura", "Aumenta flexibilidad"],
    difficulty: "Baja",
    imageUrl: PILATES,
    nextSessions: [
      { date: "Lunes 18:00", availability: "Disponible" },
      { date: "Viernes 09:00", availability: "Disponible" },
    ],
  },
  {
    name: "Spinning",
    category: "Cardio",
    price: 14,
    rating: 4.6,
    instructor: "Carlos Mendoza",
    description:
      "Clases intensas de ciclismo en grupo que ayudan a quemar calorías rápidamente, mejorar la resistencia cardiovascular y tonificar las piernas.",
    duration: "45 minutos",
    participants: "15/20 participantes",
    benefits: ["Quema grasa", "Resistencia cardiovascular"],
    difficulty: "Alta",
    imageUrl: SPINNING,
    nextSessions: [
      { date: "Martes 08:00", availability: "Disponible" },
      { date: "Jueves 17:00", availability: "Disponible" },
    ],
  },
  {
    name: "Zumba",
    category: "Cardio",
    price: 11,
    rating: 4.5,
    instructor: "Paula Sánchez",
    description:
      "Sesiones de baile con música latina y movimientos que mejoran la coordinación, aumentan la energía y ayudan a perder calorías mientras te diviertes.",
    duration: "40 minutos",
    participants: "20/20 participantes",
    benefits: ["Quema calorías", "Mejora coordinación"],
    difficulty: "Media",
    imageUrl: ZUMBA,
    nextSessions: [
      { date: "Lunes 09:00", availability: "Disponible" },
      { date: "Miércoles 19:00", availability: "Completo" },
    ],
  },
  {
    name: "Entrenamiento Funcional",
    category: "Fuerza",
    price: 18,
    rating: 4.9,
    instructor: "Juan Martínez",
    description:
      "Entrenamiento basado en movimientos funcionales que mejoran la fuerza, equilibrio y resistencia. Perfecto para quienes buscan mejorar su rendimiento físico general.",
    duration: "60 minutos",
    participants: "12/15 participantes",
    benefits: ["Aumenta fuerza", "Mejora rendimiento físico"],
    difficulty: "Alta",
    imageUrl: FUNCTIONAL_TRAINING,
    nextSessions: [
      { date: "Martes 07:00", availability: "Disponible" },
      { date: "Jueves 18:00", availability: "Disponible" },
    ],
  },
  {
    name: "Boxeo",
    category: "Fuerza",
    price: 16,
    rating: 4.8,
    instructor: "Daniel Rodríguez",
    description:
      "Entrenamiento de boxeo para mejorar la fuerza física, resistencia y agilidad. Ideal para aquellos que buscan un reto físico mientras aprenden técnicas de defensa personal.",
    duration: "45 minutos",
    participants: "10/15 participantes",
    benefits: ["Fortalece músculos", "Mejora agilidad"],
    difficulty: "Alta",
    imageUrl: BOX,
    nextSessions: [
      { date: "Lunes 19:00", availability: "Disponible" }, // cambiado para evitar conflicto con Pilates
      { date: "Viernes 17:00", availability: "Disponible" },
    ],
  },
  {
    name: "Stretching",
    category: "Flexibilidad",
    price: 10,
    rating: 4.4,
    instructor: "Laura Gómez",
    description:
      "Clases centradas en estiramientos para mejorar la flexibilidad, reducir tensiones y mejorar el rango de movimiento de las articulaciones.",
    duration: "30 minutos",
    participants: "15/15 participantes",
    benefits: ["Mejora flexibilidad", "Reducción de estrés"],
    difficulty: "Baja",
    imageUrl: STRETCHING,
    nextSessions: [
      { date: "Miércoles 08:00", availability: "Disponible" },
      { date: "Viernes 16:00", availability: "Completo" },
    ],
  },
  {
    name: "Crossfit",
    category: "Fuerza",
    price: 20,
    rating: 5.0,
    instructor: "Javier Pérez",
    description:
      "Entrenamiento de alta intensidad que combina levantamiento de pesas, cardio y ejercicios funcionales. Perfecto para quienes buscan superar sus límites físicos.",
    duration: "60 minutos",
    participants: "8/10 participantes",
    benefits: ["Mejora fuerza y resistencia", "Aumenta masa muscular"],
    difficulty: "Alta",
    imageUrl: CROSSFIT,
    nextSessions: [
      { date: "Lunes 08:00", availability: "Disponible" }, // cambiado para evitar conflicto con HIIT
      { date: "Miércoles 20:00", availability: "Disponible" }, // cambiado para evitar conflicto con HIIT
    ],
  },
  {
    name: "Yoga Relax",
    category: "Yoga",
    price: 12,
    rating: 4.7,
    instructor: "Juan Martínez",
    description:
      "Secuencias de yoga diseñadas para relajar el cuerpo y la mente, reducir el estrés y mejorar la respiración. Ideal para quienes buscan tranquilidad y equilibrio.",
    duration: "50 minutos",
    participants: "15/20 participantes",
    benefits: ["Relajación", "Mejora respiración"],
    difficulty: "Baja",
    imageUrl: YOGA_RELAX,
    nextSessions: [
      { date: "Martes 20:00", availability: "Disponible" },
      { date: "Jueves 08:00", availability: "Disponible" },
    ],
  },
  {
    name: "Cardio Kickboxing",
    category: "Cardio",
    price: 17,
    rating: 4.6,
    instructor: "Carlos Mendoza",
    description:
      "Combinación de cardio y boxeo para mejorar la resistencia, tonificar el cuerpo y aumentar la fuerza mientras aprendes técnicas de lucha.",
    duration: "45 minutos",
    participants: "16/20 participantes",
    benefits: ["Quema grasa", "Aumenta resistencia"],
    difficulty: "Alta",
    imageUrl: CARDIO_KICKBOXING,
    nextSessions: [
      { date: "Lunes 20:00", availability: "Disponible" }, // cambiado para evitar conflicto con Boxeo
      { date: "Miércoles 17:00", availability: "Disponible" },
    ],
  },
  {
    name: "Tai Chi",
    category: "Yoga",
    price: 14,
    rating: 4.5,
    instructor: "Antonio Ruiz",
    description:
      "Prácticas suaves de Tai Chi que ayudan a mejorar el equilibrio, la concentración y la relajación. Ideal para quienes buscan mejorar su bienestar general.",
    duration: "60 minutos",
    participants: "14/15 participantes",
    benefits: ["Equilibrio", "Relajación mental"],
    difficulty: "Baja",
    imageUrl: TAI_CHI,
    nextSessions: [
      { date: "Martes 10:00", availability: "Disponible" },
      { date: "Viernes 18:00", availability: "Disponible" },
    ],
  },
];
