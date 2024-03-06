"use client";
import React, { useEffect, useState } from "react";

import Step_1 from "./step_1";
import StepNav from "./step_nav";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormSchema, TFormSchema } from "../_lib/validations";
import { NUMBER_OF_STEPS } from "../_lib/constants";
import Step_2 from "./step_2";
import Step_3 from "./step_3";
import Step_4 from "./step_4";
import Step_5 from "./step_5";
import Step_6 from "./step_6";
import Step_7 from "./step_7";
import Step_8 from "./step_8";
import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";

const StepController = () => {
  // Step Controller
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);

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

  // progress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(parseInt(step || "0"));
  }, [step]);

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

  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      step1: [],
      step2: "",
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

  const onSubmit = (values: TFormSchema) => {
    console.log(values);
  };
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {renderStepContent(form)}
            </form>
          </Form>
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

      <div className="flex flex-col gap-4 mt-10">
        <p>Aktueller Fortschritt</p>
        <Progress value={(currentStep / NUMBER_OF_STEPS) * 100} />
      </div>
    </div>
  );
};

export default StepController;
