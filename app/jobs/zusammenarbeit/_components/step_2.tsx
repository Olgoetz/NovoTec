"use client";

import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { TFormSchema } from "../_lib/validations";

interface Step2Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_2({ form }: Step2Props) {
  const router = useRouter(); // Use the router object directly
  const pathname = usePathname(); // Get the current path

  // Update the query parameter for the step
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "2");
    router.replace(`${pathname}?${params.toString()}`);
  }, [pathname, router]); // Add dependencies to ensure stable behavior

  // Generate years dynamically
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1970 + 1 },
    (_, i) => 1970 + i
  );

  return (
    <div className="md:h-[150px]">
      <FormField
        control={form.control}
        name="step2"
        render={({ field }) => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">
                Seit wann bist du als Handwerker tätig?
              </FormLabel>
              <FormDescription>
                Wähle das Jahr aus, in dem du deine Tätigkeit aufgenommen hast.
              </FormDescription>
            </div>
            <div className="w-28">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="1999" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
