import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { TFormSchema } from "../_lib/validations";

interface Step1Props {
  form: UseFormReturn<TFormSchema>;
}
export default function Step_1({ form }: Step1Props) {
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
              <FormLabel className="text-base">Sidebar</FormLabel>
              <FormDescription>
                Select the items you want to display in the sidebar.
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
