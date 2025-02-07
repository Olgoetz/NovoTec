"use server";
import { actionClient } from "@/lib/safe-action-clients";

import { sendMail } from "./resend";
import { EmailFormSchema } from "./validation";

export const submitSafeInquiry = actionClient
  .schema(EmailFormSchema)
  .action(async (data: any) => {
    const payload = {
      name: data.parsedInput.name,
      phone: data.parsedInput.phne,
      email: data.parsedInput.email,
      description: data.parsedInput.description,
      zipCode: data.parsedInput.zipCode,
      location: data.parsedInput.location,
      fileUrlsString: data.parsedInput.fileUrlsString,
    };
    console.log("Payload is: ", payload);
    const res = await sendMail(payload);
    console.log(res);
    return res;
  });
