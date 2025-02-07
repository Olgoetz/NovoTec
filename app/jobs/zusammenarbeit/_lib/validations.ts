import { actionClient } from "@/lib/safe-action-clients";
import { z } from "zod";
import { sendMail } from "./resend";
import { File } from "buffer";

export const FormSchema = z.object({
  // Area of work
  step1: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Mindestens 1 Tätigkeit muss ausgewählt werden",
    })
    .refine((value) => value.length <= 6, {
      message: "Maximal 6 Tätigkeiten erlaubt",
    }),
  // Experience
  step2: z.string(),
  step3_location: z.string().optional(),
  step3_zipCode: z.string().min(5, { message: "PLZ muss gesetzt werden" }),
  // Area
  step4: z.array(z.number()),
  // Number of employees
  step5: z.coerce.number({ required_error: "Bitte gebe eine Zahl ein" }),
  // Wage per hour
  step6: z.string().min(1, { message: "Bitte gebe einen Stundensatz ein" }),
  step7_firstName: z.string().min(2, { message: "Der Vorname ist zu kurz" }),
  step7_lastName: z.string().min(2, { message: "Der Nachname ist zu kurz" }),
  step7_email: z
    .string()
    .email({ message: "Bitte gebe eine gültige E-Mail-Adresse ein" }),
  step7_phone: z.string().min(6, { message: "Die Mobilnummer ist zu kurz" }),
  step8_fileStates: z.array(z.any()).optional(),
  step8: z
    .array(z.string())
    .max(5, { message: "Maximal 5 Dateien erlaubt" })
    .optional(),
  step9: z.string().min(1, { message: "Bitte wähle einen Termin aus." }),
});

export type TFormSchema = z.infer<typeof FormSchema>;

export const EmailFormSchema = FormSchema.omit({
  step1: true,
  step4: true,
  step8: true,
  step8_fileStates: true,
}).and(
  z.object({
    step1: z.string(),
    step4: z.string(),
    step8: z.string().optional(),
  })
);

export type TEmailFormSchema = z.infer<typeof EmailFormSchema>;

export const submitSafeInquiry = actionClient
  .schema(EmailFormSchema)
  .action(async (data) => {
    //   const timeout = (ms: number) => {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    //   };
    //   await timeout(3000);
    // console.log("data", data);
    const payload = {
      step1: data.clientInput.step1,
      step2: data.clientInput.step2,
      step3_location: data.clientInput.step3_location,
      step3_zipCode: data.clientInput.step3_zipCode,
      step4: data.clientInput.step4,
      step5: data.clientInput.step5,
      step6: data.clientInput.step6,
      step7_email: data.clientInput.step7_email,
      step7_firstName: data.clientInput.step7_firstName,
      step7_lastName: data.clientInput.step7_lastName,
      step7_phone: data.clientInput.step7_phone,
      step8: data.clientInput.step8?.toString(),
      step9: data.clientInput.step9,
    };

    const res = await sendMail(payload);

    //console.log("res", res);
    //return JSON.stringify(res);
    return res;
  });
