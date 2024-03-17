"use server";
import * as React from "react";

import { EmailTemplate } from "../_components/email-template";
import { resend } from "@/lib/resend";

export async function sendMail(emailProps: any) {
  console.log("emailProps", emailProps);
  const { email } = emailProps;
  try {
    const { data, error } = await resend.emails.send({
      from: `Jobs - Zusammenarbeit | NovoTec <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL as string],
      subject: `Anfrage über NovoTec Webseite`,
      react: EmailTemplate(emailProps) as React.ReactElement,
    });
    console.log(data);
    console.log(error);
    if (error) {
      console.log("here");
      console.log(error);
      return { error, status: 401 };
    }

    return { success: true, status: 200 };
  } catch (error) {
    console.log("here2");
    console.log("error", error);
    return { message: "Something went wrong", error, status: 500 };
  }
}
