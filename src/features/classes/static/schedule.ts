type Weekday = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";

export type ScheduleMap = {
  [hour in string]?: Partial<Record<Weekday, string>>;
};

// Lista ordenada de todas las horas que aparecen
export const hours: string[] = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export const scheduleMap: ScheduleMap = {
  "07:00": {
    Lunes: "Cardio",
    Martes: "Fuerza",
  },
  "08:00": {
    Lunes: "Fuerza", // Crossfit
    Martes: "Cardio", // Spinning
    Miércoles: "Flexibilidad", // Stretching
    Jueves: "Yoga", // Yoga Relax
  },
  "09:00": {
    Lunes: "Cardio", // Zumba
    Martes: "Flexibilidad", // Yoga Flow
    Viernes: "Flexibilidad", // Pilates
  },
  "10:00": {
    Martes: "Yoga", // Tai Chi
  },
  "16:00": {
    Viernes: "Flexibilidad", // Stretching
  },
  "17:00": {
    Miércoles: "Cardio", // Cardio Kickboxing
    Jueves: "Cardio", // Spinning
    Viernes: "Fuerza", // Boxeo
  },
  "18:00": {
    Lunes: "Flexibilidad", // Pilates
    Miércoles: "Cardio", // HIIT Intenso
    Jueves: "Fuerza", // Entrenamiento Funcional
    Viernes: "Yoga", // Tai Chi
  },
  "19:00": {
    Lunes: "Fuerza", // Boxeo
    Miércoles: "Cardio", // Zumba
    Jueves: "Flexibilidad", // Yoga Flow
  },
  "20:00": {
    Lunes: "Cardio", // Cardio Kickboxing
    Martes: "Yoga", // Yoga Relax
    Miércoles: "Fuerza", // Crossfit
  },
};
