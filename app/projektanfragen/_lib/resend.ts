"use server";
import * as React from "react";

import { EmailTemplate } from "@/app/projektanfragen/_components/email-template";
import { resend } from "@/lib/resend";

export async function sendMail(emailProps: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Projektanfrage | NovoTec <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL_PROJEKTANFRAGE as string],
      subject: `Anfrage über NovoTec Webseite`,
      react: EmailTemplate(emailProps) as React.ReactElement,
    });
    console.log(data);
    if (error) {
      console.error(error);
      return { error, status: 401 };
    }

    return { success: true, status: 200 };
  } catch (error) {
    return { message: "Something went wrong", error, status: 500 };
  }
}
