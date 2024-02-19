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
    <div className="flex items-center p-4 bg-slate-100">
      {currentStep !== 1 && (
        <button onClick={prevStep}>
          <ChevronLeft className="text-novo-red h-8 w-8" />
        </button>
      )}
      {currentStep} von {numberOfSteps}
      {currentStep < 3 && (
        <button onClick={nextStep}>
          <ChevronRight className="text-novo-red h-8 w-8" />
        </button>
      )}
    </div>
  );
}
