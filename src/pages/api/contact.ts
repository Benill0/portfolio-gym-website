import type { APIRoute } from "astro";
import { Resend } from "resend";

const resendToken = import.meta.env.RESEND_API_KEY;
const resend = new Resend(resendToken);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const dataEmail = Object.fromEntries(formData.entries());

  const htmlMessage = `
    <h1>Nueva Solicitud de Contacto</h1>
    <p><strong>Nombre:</strong> ${dataEmail.form}</p>
    <p><strong>Correo:</strong> ${dataEmail.email}</p>
    <p><strong>Celular:</strong> ${dataEmail.phone}</p>
    <p><strong>Asunto:</strong> ${dataEmail.subject}</p>
    <p><strong>Mensaje:</strong> ${dataEmail.description}</p>
  `;

  const { data, error } = await resend.emails.send({
    from: "SolvedCode <example@solvedcode.com>",
    to: [`${dataEmail.email}`],
    subject: `Formulario recibido ${dataEmail.name}`,
    html: htmlMessage,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }

  return new Response(
    JSON.stringify({ message: "Email enviado exitosamente", data }),
    { status: 200 }
  );
};
