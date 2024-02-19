import { z } from "zod";

export const FormSchema = z.object({
  step1: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Mindestens 1 Element muss ausgewählt werden",
  }),
});

export type TFormSchema = z.infer<typeof FormSchema>;
