"use client";
import React, { useState } from "react";
import { z } from "zod";
import Step_1 from "./step_1";
import StepNav from "./step_nav";
import { UseFormResetField, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormSchema, TFormSchema } from "../_lib/validations";

const NUMBER_OF_STEPS = 8;
const StepController = () => {
  // Step Controller
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Step 1

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  // Function to handle checkbox state changes
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const renderStepContent = (form: UseFormReturn<TFormSchema>) => {
    switch (currentStep) {
      case 1:
        return <Step_1 form={form} />;

      default:
        return null;
    }
  };

  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      step1: [],
    },
  });

  const onSubmit = (values: TFormSchema) => {
    console.log(values);
  };
  return (
    <div className="grid md:grid-cols-4">
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
  );
};

export default StepController;
