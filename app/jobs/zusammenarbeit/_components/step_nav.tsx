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
    <div className="flex justify-center items-center h-14 p-2 bg-slate-100 rounded-md">
      {currentStep !== 1 && (
        <button type="button" onClick={prevStep}>
          <ChevronLeft className="text-novo-red h-7 w-7" />
        </button>
      )}
      <p className="whitespace-nowrap">
        {currentStep} von {numberOfSteps}
      </p>
      {currentStep < numberOfSteps && (
        <button type="button" onClick={nextStep}>
          <ChevronRight className="text-novo-red h-6 w-7" />
        </button>
      )}
    </div>
  );
}
