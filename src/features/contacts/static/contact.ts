import { Clock, Mail, Marker, Phone } from "@/core/assets/icons";

export const CONTACT_INFO = [
  {
    title: "Dirección",
    values: ["Calle Fitness 123", "28001 Madrid, España"],
    action: "Ver en Maps",
    redirect:
      "https://www.google.com/maps?q=Calle+Fitness+123,+28001+Madrid,+España",
    icon: Marker,
  },
  {
    title: "Teléfono",
    values: ["+34 123 456 789", "+34 987 654 321"],
    action: "Llamar ahora",
    redirect: "tel:+34123456789",
    icon: Phone,
  },
  {
    title: "Email",
    values: ["contacto@empresa.com", "info@empresa.com"],
    action: "Enviar Email",
    redirect: "mailto:contacto@empresa.com",
    icon: Mail,
  },
  {
    title: "Horarios",
    values: ["Lunes a Viernes: 9:00 - 18:00", "Sábado a Domingo: Cerrado"],
    action: "Ver Clases",
    redirect: "https://www.ejemplo.com/clases",
    icon: Clock,
  },
];
