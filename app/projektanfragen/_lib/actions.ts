"use server";
import { actionClient } from "@/lib/safe-action-clients";

import { sendMail } from "./resend";
import { EmailFormSchema } from "./validation";

export const submitSafeInquiry = actionClient
  .schema(EmailFormSchema)
  .action(async (data: any) => {
    const res = await sendMail(data);
    return res;
  });
