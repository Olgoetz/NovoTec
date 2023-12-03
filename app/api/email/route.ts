import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { email, name, text } = body.values;

//     if (!initSendGrid) {
//       return new NextResponse("Sendgrid API Key not set", { status: 500 });
//     }

//     const msg = {
//       to: process.env.SENDGRID_TO_EMAIL as string, // Change to your recipient
//       from: process.env.SENDGRID_FROM_EMAIL as string, // Change to your verified sender
//       subject: `Neue Nachricht über www.novotec-koeln.de`,
//       text: "Absender: ${name}   Email: ${email}   Nachricht: ${text}",
//       html: `<div><p>Absender: ${name}</p></br><p>Email: ${email}</p></br><p>Nachricht: ${text}</p>`,
//     };
//     await sgMail.send(msg);

//     return NextResponse.json("Message sent!", { status: 200 });
//   } catch (error) {
//     console.error("[SENDGRID_ERROR]", error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }
