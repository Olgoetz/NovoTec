"use sever";
import { action } from "@/lib/safe-action-clients";
import { z } from "zod";
import { FileState } from "@/components/multi-file-dropzone";
import { sendMail } from "./resend";
import { Form } from "react-hook-form";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const FormSchema = z.object({
  name: z.string({ required_error: "Name erforderlich" }).min(2, {
    message: "Name erforderlich",
  }),
  phone: z
    .string({ required_error: "Telefonnummer erforderlich" })
    .regex(phoneRegex, {
      message: "Bitte geben Sie eine gültige Telefonnummer ein",
    }),
  email: z.string({ required_error: "Email erforderlich" }).email({
    message: "Bitte geben Sie eine gültige E-Mail Adresse ein",
  }),
  description: z
    .string({ required_error: "Beschreibung erforderlich" })
    .min(20, {
      message: "Beschreibung (min. 50 Zeichen) ist zu kurz",
    }),

  zipCode: z.string().optional(),
  location: z.string().optional(),
  fileStates: z
    .array(
      z.object({
        file: z.instanceof(File),
        key: z.string(),
        progress: z.union([
          z.literal("PENDING"),
          z.literal("COMPLETE"),
          z.literal("ERROR"),
          z.number(),
        ]), // Union of allowed values
      })
    )
    .optional(),
  fileUrls: z
    .array(z.string())
    .min(2, { message: "Bitte laden Sie mindestens 2 Dateien hoch" })
    .max(5, { message: "Maximal 5 Dateien erlaubt" }),
});

export type TFormSchema = z.infer<typeof FormSchema>;

export const EmailFormSchema = FormSchema.omit({
  fileStates: true,
  fileUrls: true,
}).and(z.object({ fileUrlsString: z.string() }));

export type TEmailFormSchema = z.infer<typeof EmailFormSchema>;

export const submitSafeInquiry = action(EmailFormSchema, async (data) => {
  //   const timeout = (ms: number) => {
  //     return new Promise((resolve) => setTimeout(resolve, ms));
  //   };
  //   await timeout(3000);
  console.log("data", data);
  const res = await sendMail(data);
  return res;
});
