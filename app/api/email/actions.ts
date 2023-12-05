"use server";
import { Resend } from "resend";
import * as React from "react";
import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import pino from "../../../logger";
import { Logger } from "pino";

const logger: Logger = pino;
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailProps {
  name: string;
  email: string;
  message: string;
}
export async function sendMail(emailProps: EmailProps) {
  const { name, email, message } = emailProps;
  try {
    const { data, error } = await resend.emails.send({
      from: `Konaktformular novotec-koeln.de <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL as string],
      subject: `Neue Nachricht von ${email}`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return { error, status: 401 };
    }

    return { data, status: 200 };
  } catch (error) {
    return { message: "Something went wrong", error, status: 500 };
  }
}
