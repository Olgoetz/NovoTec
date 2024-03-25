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
    <div className="flex w-full md:w-2/3 justify-center   items-center mx-auto">
      {currentStep !== 1 && (
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center h-12 justify-center rounded-l-md w-full md:w-52 bg-novo-red p-2"
        >
          <ChevronLeft className="text-white h-9 w-9" />
          <p className="text-white">zurück</p>
        </button>
      )}
      <div className="bg-slate-100 h-12 w-full flex items-center md:w-52 justify-center">
        <p className="whitespace-nowrap">
          {currentStep} von {numberOfSteps}
        </p>
      </div>
      {currentStep < numberOfSteps && (
        <button
          type="button"
          onClick={nextStep}
          className="flex items-center h-12 justify-center rounded-r-md w-full md:w-52 bg-novo-red p-2"
        >
          <p className="text-white">weiter</p>
          <ChevronRight className="text-white h-9 w-9 " />
        </button>
      )}
    </div>
  );
}
