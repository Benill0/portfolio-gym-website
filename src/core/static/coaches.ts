// Trainer type definition
export interface Trainer {
  name: string;
  category: string;
  description: string;
  yearsOfExperience: number;
  clientsCount: number;
  certifications: string[];
  gender: "Male" | "Female";
  rating: number;
  imageUrl: string;
}

export const TRAINERS: Trainer[] = [
  {
    name: "Carlos Mendoza",
    category: "Entrenamiento Funcional",
    description:
      "Especialista en entrenamiento funcional y preparación física. Certificado en CrossFit y entrenamiento de alta intensidad.",
    yearsOfExperience: 8,
    clientsCount: 150,
    certifications: ["CrossFit Level 2", "NASM-CPT"],
    gender: "Male",
    rating: 4.9,
    imageUrl: "/images/coach-1.webp",
  },
  {
    name: "Paula Sánchez",
    category: "Entrenamiento Funcional",
    description:
      "Especialista en entrenamientos funcionales y HIIT, con un enfoque en mejorar la movilidad y flexibilidad.",
    yearsOfExperience: 4,
    clientsCount: 130,
    certifications: ["CrossFit Level 1", "HIIT Trainer"],
    gender: "Female",
    rating: 4.6,
    imageUrl: "/images/coach-2.webp",
  },
  {
    name: "Daniel Rodríguez",
    category: "Entrenamiento de fuerza",
    description:
      "Entrenador especializado en levantamiento de pesas y entrenamiento de fuerza. Certificado en powerlifting y fuerza funcional.",
    yearsOfExperience: 5,
    clientsCount: 120,
    certifications: ["Powerlifting Certified", "Personal Trainer"],
    gender: "Male",
    rating: 4.7,
    imageUrl: "/images/coach-3.webp",
  },
  {
    name: "Javier Pérez",
    category: "CrossFit",
    description:
      "Entrenador de CrossFit con más de 6 años de experiencia en entrenamientos de alta intensidad.",
    yearsOfExperience: 6,
    clientsCount: 200,
    certifications: ["CrossFit Level 1", "CrossFit Level 2"],
    gender: "Male",
    rating: 5.0,
    imageUrl: "/images/coach-4.webp",
  },
  {
    name: "Laura Gómez",
    category: "Pilates",
    description:
      "Entrenadora especializada en Pilates y tonificación muscular. Certificada en Pilates reformer y entrenamiento funcional.",
    yearsOfExperience: 7,
    clientsCount: 170,
    certifications: ["Pilates Reformer", "Certified Personal Trainer"],
    gender: "Female",
    rating: 4.8,
    imageUrl: "/images/coach-5.webp",
  },
  {
    name: "Juan Martínez", // Nombre masculino
    category: "Entrenamiento Personalizado",
    description:
      "Entrenador especializado en rutinas personalizadas para objetivos específicos de pérdida de peso y tonificación.",
    yearsOfExperience: 9,
    clientsCount: 220,
    certifications: ["NASM-CPT", "Nutrition Coach"],
    gender: "Male", // Género masculino
    rating: 4.9,
    imageUrl: "/images/coach-6.webp",
  },
];
