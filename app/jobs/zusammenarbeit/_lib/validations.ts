import { z } from "zod";

export const FormSchema = z.object({
  // Area of work
  step1: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Mindestens 1 Element muss ausgewählt werden",
    })
    .refine((value) => value.length <= 3, {
      message: "Maximal 3 Elemente erlaubt",
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
  step6: z.coerce.number({
    required_error: "Bitte gebe deinen Stundenlohn im Format xx,xx ein.",
  }),
  step7_firstName: z.string().min(2, { message: "Der Vorname ist zu kurz" }),
  step7_lastName: z.string().min(2, { message: "Der Nachname ist zu kurz" }),
  step7_email: z
    .string()
    .email({ message: "Bitte gebe eine gültige E-Mail-Adresse ein" }),
  step7_phone: z.string().min(6, { message: "Die Mobilnummer ist zu kurz" }),
  step8: z
    .array(z.string())
    .max(5, { message: "Maximal 5 Dateien erlaubt" })
    .optional(),
  step9: z.string().min(1, { message: "Bitte wähle einen Termin aus." }),
});

export type TFormSchema = z.infer<typeof FormSchema>;
