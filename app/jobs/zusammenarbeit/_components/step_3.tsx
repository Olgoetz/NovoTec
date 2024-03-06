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
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

interface Step3Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_3({ form }: Step3Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "3");
    replace(`${pathname}?${params.toString()}`);
  }, []);
  const fetchCityByZipCode = useDebouncedCallback(async (zipCode: string) => {
    if (!zipCode) return;
    try {
      const response = await axios.get(
        `https://api.zippopotam.us/de/${zipCode}`
      );
      const data = response.data;
      const city = data.places[0]["place name"];

      //  setCity(city); // Update the city state

      form.setValue("step3_location", city); // Update the location form field (optional
      return city;
    } catch (error) {
      form.setError("step3_zipCode", { message: "Die PLZ existiert nicht." });
      //    form.setValue("location", ""); // Update the location form field (optional

      //   setCity(''); // Clear the city state in case of an error
    }
  }, 1000);
  return (
    <div>
      <div className="mb-4">
        <FormLabel className="text-base">Woher kommen Sie?</FormLabel>
        <FormDescription>
          Bitte geben Sie Ihre Postleitzahl ein.
        </FormDescription>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="step3_zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PLZ</FormLabel>
              <FormControl>
                <Input
                  placeholder="12345"
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e); // Update the form field value

                    fetchCityByZipCode(e.target.value); // Fetch city based on ZIP code
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="step3_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Standort</FormLabel>
              <FormControl>
                <Input
                  disabled
                  {...field}
                  placeholder="wird automatisch gesetzt"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
