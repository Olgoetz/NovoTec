import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { TFormSchema } from "../_lib/validations";
import { Input } from "@/components/ui/input";

import { usePathname, useRouter } from "next/navigation";

interface Step7Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_7({ form }: Step7Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "7");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  return (
    <div>
      <div className="mb-8">
        <FormLabel className="text-base">Kontaktdaten</FormLabel>
        <FormDescription>Bitte geben Sie Ihre Kontaktdaten an.</FormDescription>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="step7_firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vorname</FormLabel>
                <Input {...field} />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="step7_lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachname</FormLabel>
                <Input {...field} />

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="step7_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email-Adresse</FormLabel>
                  <Input
                    {...field}
                    placeholder="z.B. meineEmail@beispiel.com"
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:col-span-1">
            <FormField
              control={form.control}
              name="step7_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobilnummer</FormLabel>
                  <Input {...field} placeholder="z.B. 0176 123456" />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
