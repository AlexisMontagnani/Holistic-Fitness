import { NextResponse } from "next/server";
import transporter from "../../src/lib/transporter";
export async function POST(request) {
  const {
    lastName,
    firstName,
    email,
    tel,
    object,
    ortherObject,
    message,
  } = await request.json();

  const mailOptions = {
    from: email,
    to: `${process.env.USER_RECEIVES_MAIL}`,
    subject: `Nouveaux message de ${lastName} ${firstName}`,
    text: `
      Nom: ${lastName}
      Prénom: ${firstName}
      Email: ${email}
      Téléphone: ${tel}
      Type de programme/service: ${object}
      Autre demande: ${ortherObject}
      Message: ${message} `,
    html: `<p><strong>Nom</strong> : ${lastName}</p>
    <p><strong>Prénom</strong> : ${firstName}</p>
    <p><strong>Email</strong> : ${email}</p>
    ${tel ? `<p><strong>Téléphone</strong> : ${tel}</p>` : ""}
    ${object ? `<p><strong>Programme sélectionné</strong> : ${object}</p>` : ""}
    ${ortherObject ? `<p><strong>Autre demande</strong> : ${ortherObject}</p>` : ""}
    <p><strong>Message</strong> : ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Formulaire soumis avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}