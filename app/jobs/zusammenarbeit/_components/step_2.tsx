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
  for (let year = 1970; year <= 2015; year++) {
    years.push(year);
  }
  return (
    <div>
      <FormField
        control={form.control}
        name="step2"
        render={({ field }) => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">
                Seit wann sind Sie tätig?
              </FormLabel>
              <FormDescription>
                Wählen Sie das Jahr aus, in dem Sie Ihre Tätigkeit aufgenommen.
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
      {/* <Card className="p-8">
        <CardTitle className="text-lg text-novo-red pb-4">
          Was ist dein Hauptgewerk?
        </CardTitle>
        <CardContent className="p-0">
          <div className="flex flex-col gap-4">
            {checkboxes.map((e) => (
              <div key={e.label} className="flex  items-center space-x-2">
                <Checkbox id={e.label.toLocaleLowerCase()} />
                <label
                  htmlFor={e.label.toLocaleLowerCase()}
                  className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {e.label}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
}
