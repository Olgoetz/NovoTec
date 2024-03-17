"use client";
import { Checkbox } from "@/components/ui/checkbox";
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
import { usePathname, useRouter } from "next/navigation";

interface Step1Props {
  form: UseFormReturn<TFormSchema>;
}
export default function Step_1({ form }: Step1Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("step", "1");
    replace(`${pathname}?${params.toString()}`);
  }, []);

  // useEffect(() => {
  //   const params = new URLSearchParams();
  //   console.log(params);
  //   params.set("step", "1");
  // }, []);
  const checkboxes = [
    {
      label: "Allrounder",
    },
    {
      label: "Bodenleger (Parket, Vinyl, Laminat o.ä.)",
    },
    {
      label: "Elektriker",
    },
    {
      label: "Estrichleger",
    },
    {
      label: "Fassadenbauer (WDVS)",
    },
    {
      label: "Fenster, Türen und Garagentor Monteur",
    },
    {
      label: "Fiesenleger",
    },
    {
      label: "Heizungs- und Sanitärinstallateur",
    },
    {
      label: "Maler und Lackierer",
    },
    {
      label: "Maurer und Betonbauer",
    },
    {
      label: "Trockenbauer",
    },
    {
      label: "Verputzer",
    },
  ];
  return (
    <div>
      <FormField
        control={form.control}
        name="step1"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel className="text-base">
                Was sind deine Haupttätigkeiten?
              </FormLabel>
              <FormDescription>
                Wähle zwischen 1 bis max. 3 Gewerke, in denen du stark bist.
              </FormDescription>
            </div>
            {checkboxes.map((item) => (
              <FormField
                key={item.label}
                control={form.control}
                name="step1"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.label}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          className="data-[state=checked]:bg-white"
                          checked={field.value?.includes(item.label)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.label])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== item.label
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
