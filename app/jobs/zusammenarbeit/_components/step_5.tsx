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

interface Step5Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_5({ form }: Step5Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "5");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  return (
    <div className="md:h-[150px]">
      <div className="mb-8">
        <FormLabel className="text-base">Anzahl deiner Teamstärke</FormLabel>
        <FormDescription>Bitte gebe an wie groß dein Team ist.</FormDescription>
      </div>
      <div className="w-1/2">
        <FormField
          control={form.control}
          name="step5"
          render={({ field }) => (
            <FormItem>
              <Input
                type="number"
                min={1}
                max={100}
                {...field}
                placeholder="z.B. 10"
                className="border h-10 p-2 rounded-md "
              />

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
