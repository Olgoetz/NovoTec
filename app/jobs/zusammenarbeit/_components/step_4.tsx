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

import { Slider } from "@/components/ui/slider";
import { usePathname, useRouter } from "next/navigation";

interface Step4Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_4({ form }: Step4Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "4");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  return (
    <div>
      <div className="mb-8">
        <FormLabel className="text-base">Einsatzgebiet</FormLabel>
        <FormDescription>
          Bitte wählen Sie den Umkreis von Ihrem Standort aus.
        </FormDescription>
      </div>
      <div className="w-full">
        <FormField
          control={form.control}
          name="step4"
          render={({ field }) => (
            <div className="space-y-6">
              <FormItem>
                <div className="flex gap-x-4 items-center whitespace-nowrap">
                  <p>25 km</p>
                  <FormControl>
                    <Slider
                      //{...field}
                      onValueChange={field.onChange}
                      max={250}
                      min={25}
                      step={25}
                    />
                  </FormControl>
                  <p>250 km</p>
                </div>
                <FormMessage />
              </FormItem>
              <p className="text-sm">
                Der gewählte Umkreis beträgt: {field.value} km
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
}
