import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nombre, telefono, email, servicio, mensaje } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "mail.cdlpartner.cl",
      port: 465,
      secure: true,
      auth: {
        user: "daniela@cdlpartner.cl",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"CDL Partner Web" <daniela@cdlpartner.cl>',
      to: "daniela@cdlpartner.cl",
      subject: `Nuevo contacto desde web: ${nombre}`,
      html: `
        <h2 style="color: #0891b2;">Nuevo mensaje desde CDL Partner Web</h2>
        <hr />
        <h3>Datos del cliente:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono}</p>
        <p><strong>Servicio de interes:</strong> ${servicio}</p>
        <h3>Mensaje:</h3>
        <p>${mensaje}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}