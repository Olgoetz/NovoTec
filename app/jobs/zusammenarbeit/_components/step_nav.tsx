import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface StepNavProps {
  prevStep: () => void;
  nextStep: () => void;
  currentStep: number;
  numberOfSteps: number;
}

export default function StepNav({
  prevStep,
  nextStep,
  currentStep,
  numberOfSteps,
}: StepNavProps) {
  return (
    <div className="flex  justify-center md:gap-x-4 items-center h-14 p-2 bg-slate-100 rounded-md">
      {currentStep !== 1 && (
        <button type="button" onClick={prevStep}>
          <ChevronLeft className="text-novo-red h-9 w-9 md:h-12 md:w-12" />
        </button>
      )}
      <p className="whitespace-nowrap">
        {currentStep} von {numberOfSteps}
      </p>
      {currentStep < numberOfSteps && (
        <button type="button" onClick={nextStep}>
          <ChevronRight className="text-novo-red h-9 w-9 md:h-12 md:w-12" />
        </button>
      )}
    </div>
  );
}
