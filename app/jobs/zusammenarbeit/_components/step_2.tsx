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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

interface Step2Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_2({ form }: Step2Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "2");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  const years: number[] = [];
  const currentYear = new Date().getFullYear();
  for (let year = 1970; year <= currentYear; year++) {
    years.push(year);
  }
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
                Wähle das Jahr aus, in dem du deine Tätigkeit aufgenommen hast.{" "}
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
                  {years.map((year, index) => (
                    <SelectItem key={index} value={year.toString()}>
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
