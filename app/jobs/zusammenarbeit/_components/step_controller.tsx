"use client";
import React, { useEffect, useState } from "react";

import Step_1 from "./step_1";
import StepNav from "./step_nav";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormDescription } from "@/components/ui/form";
import { FormSchema, TFormSchema } from "../_lib/validations";
import { NUMBER_OF_STEPS } from "../_lib/constants";
import { MsalProvider, useMsal } from "@azure/msal-react";
import Step_2 from "./step_2";
import Step_3 from "./step_3";
import Step_4 from "./step_4";
import Step_5 from "./step_5";
import Step_6 from "./step_6";
import Step_7 from "./step_7";
import Step_8 from "./step_8";
import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import FormButton from "@/components/form-button";

import { fetchOutlookEvents } from "../actions";
const StepController = () => {
  // Manage steps and their state
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);

  const step = searchParams.get("step")?.toString();
  const nextStep = async () => {
    let isValid = false;
    if (step === "3") {
      isValid = await form.trigger("step3_zipCode");
    } else if (step === "7") {
      isValid = await form.trigger([
        "step7_firstName",
        "step7_lastName",
        "step7_email",
        "step7_phone",
      ]);
    } else {
      isValid = await form.trigger(`step${step}` as any);
    }
    if (!isValid) return;
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Manage progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(parseInt(step || "0"));
  }, [step]);

  // Render step content
  const renderStepContent = (form: UseFormReturn<TFormSchema>) => {
    switch (currentStep) {
      case 1:
        return <Step_1 form={form} />;
      case 2:
        return <Step_2 form={form} />;
      case 3:
        return <Step_3 form={form} />;
      case 4:
        return <Step_4 form={form} />;
      case 5:
        return <Step_5 form={form} />;
      case 6:
        return <Step_6 form={form} />;
      case 7:
        return <Step_7 form={form} />;
      case 8:
        return <Step_8 form={form} />;

      default:
        return null;
    }
  };

  // Form validation
  const currentYear = new Date().getFullYear();
  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      step1: [],
      step2: currentYear.toString(),
      step3_zipCode: "",
      step4: [25],
      step5: 1,
      step6: 25,
      step7_firstName: "",
      step7_lastName: "",
      step7_email: "",
      step7_phone: "",
      step8: [],
    },
  });

  // const { accounts, instance } = useMsal();
  // console.log(instance);
  // const account = accounts[0];

  // const graphClient = Client.initWithMiddleware({
  //   authProvider: {
  //     getAccessToken: async () => {
  //       const { accessToken } = await instance.acquireTokenSilent({
  //         scopes: ["user.read", "calendars.read"],
  //         account: account,
  //       });
  //       return accessToken;
  //     },
  //   },
  // });

  useEffect(() => {
    const fetchEvents = async () => {
      await fetchOutlookEvents();
    };

    fetchEvents();
  }, []);

  const onSubmit = (values: TFormSchema) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-between">
              {/* Basic information */}
              <div>
                <h2 className="mb-10">
                  Schritt 1: Beantworte die folgenden 8 Fragen
                </h2>
                {renderStepContent(form)}
              </div>
              <div className="md:col-span-1">
                <StepNav
                  nextStep={nextStep}
                  prevStep={prevStep}
                  currentStep={currentStep}
                  numberOfSteps={NUMBER_OF_STEPS}
                />
              </div>
            </div>

            {/* calendar */}
            <div>
              <h2 className="mb-3">
                Schritt 2: Wähle einen Termin für ein erstes Kennenlernen aus.
              </h2>
              <p className="mb-7 text-xs text-muted-foreground">
                WICHTIG: Du erhältst eine separate E-Mail von uns als
                Bestätigung. Erst dann ist der Termin verbindlich.
              </p>
              {/* <ul>
                  {events.map((event) => (
                    <li key={event.id}>
                      {event.subject} -{" "}
                      {new Date(event.start.dateTime).toLocaleString()}
                    </li>
                  ))}
                </ul> */}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <p>Aktueller Fortschritt</p>
            <Progress value={(currentStep / NUMBER_OF_STEPS) * 100} />
          </div>

          {form.formState.isValid && (
            <>
              <div className="flex items-top space-x-4 ">
                <Checkbox
                  checked={isAccepted}
                  onCheckedChange={() => setIsAccepted(!isAccepted)}
                  className="mt-1 data-[state=checked]:bg-novo-red border-muted-foreground data-[state=checked]:text-white"
                />
                <FormDescription className="text-sm">
                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur
                  Beantwortung meiner Anfrage erhoben und verarbeitet werden.
                  Die Daten werden nach abgeschlossener Bearbeitung Ihrer
                  Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung
                  jederzeit für die Zukunft per E-Mail an{" "}
                  <a
                    className="text-novo-red"
                    href="mailto:info@novotec-koeln.de"
                  >
                    info@novotec-koeln.de
                  </a>{" "}
                  widerrufen. Detaillierte Informationen zum Umgang mit
                  Nutzerdaten finden Sie in unseren{" "}
                  <Link
                    className="text-novo-red"
                    href="/datenschutz"
                    target="_blank"
                  >
                    Datenschutzhinweisen.
                  </Link>
                </FormDescription>
              </div>

              {isAccepted && (
                <FormButton
                  className="bg-novo-red hover:bg-novo-red/50 text-white"
                  type="submit"
                  hookStatus={status}
                >
                  Termin anfragen
                </FormButton>
              )}
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default StepController;
