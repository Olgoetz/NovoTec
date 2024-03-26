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
import { Euro } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface Step6Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_6({ form }: Step6Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "6");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  return (
    <div className="md:h-[150px]">
      <div className="mb-8">
        <FormLabel className="text-base">Stundensatz</FormLabel>
        <FormDescription>
          Bitte gib die Lohnkosten pro Stunde für dich oder deine Handwerker an.
        </FormDescription>
      </div>
      <div className="w-1/2">
        <FormField
          control={form.control}
          name="step5"
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-2  items-center">
                <Input
                  type="number"
                  min={1}
                  max={50}
                  {...field}
                  placeholder="z.B. 10"
                  className="border h-10 p-2 rounded-md "
                />
                <div className="h-10 border p-2 rounded-md">
                  <Euro className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
