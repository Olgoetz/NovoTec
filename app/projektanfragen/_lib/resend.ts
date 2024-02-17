"use server";
import * as React from "react";

import { EmailTemplate } from "@/app/projektanfragen/_components/email-template";
import { resend } from "@/lib/resend";
import { TFormSchema } from "./actions";

export async function sendMail(emailProps: any) {
  const { email } = emailProps;
  try {
    const { data, error } = await resend.emails.send({
      from: `Projektanfrage | NovoTec <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL as string],
      subject: `Anfrage über NovoTec Webseite`,
      react: EmailTemplate(emailProps) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return { error, status: 401 };
    }

    return { success: true, status: 200 };
  } catch (error) {
    return { message: "Something went wrong", error, status: 500 };
  }
}
