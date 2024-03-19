"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TFormSchema } from "../_lib/validations";

import clsx from "clsx";
import { FormDescription, FormLabel } from "@/components/ui/form";

interface Step9Props {
  form: UseFormReturn<TFormSchema>;
}

export default function Step_9({ form }: Step9Props) {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  //   useEffect(() => {
  //     console.log(form.getValues("step9"));
  //   }, [form.getValues("step9")]);
  const goToPreviousWeek = () => {
    setCurrentWeek((prevWeek) => {
      const newDate = new Date(prevWeek);
      newDate.setDate(prevWeek.getDate() - 7);
      return newDate;
    });
  };

  const goToNextWeek = () => {
    setCurrentWeek((prevWeek) => {
      const newDate = new Date(prevWeek);
      newDate.setDate(prevWeek.getDate() + 7);
      return newDate;
    });
  };

  // Helper function to get days of the week from Monday to Friday
  const getWeekDays = (date: any) => {
    const days = [];
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getDay();

    // Calculate Tuesday and Thursday of the current week
    const tuesday = new Date(currentDate);
    const thursday = new Date(currentDate);
    const offset =
      dayOfWeek === 0
        ? 1
        : dayOfWeek === 1
          ? -1
          : dayOfWeek === 2
            ? 0
            : dayOfWeek === 3
              ? -1
              : -2;
    tuesday.setDate(currentDate.getDate() + offset);
    thursday.setDate(currentDate.getDate() + offset + 2);

    // Ensure that only future dates are included
    if (tuesday.getTime() >= Date.now()) {
      days.push(tuesday);
    }
    if (thursday.getTime() >= Date.now()) {
      days.push(thursday);
    }

    return days;
  };

  const setTimeslot = async (timeslot: string) => {
    form.setValue("step9", timeslot, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const timeSlots = ["08:00 - 08:40", "08:45 - 09:25", "09:30 - 10:10"];
  const renderTimeSlots = (timeSlot: string) => {
    // Render time slots here
    // You can customize this function to render your time slots
    return (
      <>
        <div className="flex flex-col py-6 gap-y-4">
          {timeSlots.map((t, index) => (
            <Button
              type="button"
              key={index}
              onClick={() => setTimeslot(`${timeSlot}, ${t}`)}
              className={clsx(
                "p-2 bg-slate-100  hover:bg-slate-100/30 rounded-md text-novo-red text-xs",
                {
                  "bg-slate-100/30":
                    form.watch("step9") === `${timeSlot}, ${t}`,
                }
              )}
            >
              {t}
            </Button>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="">
      <div className="mb-8">
        <FormLabel className="text-base">Termin</FormLabel>
        <FormDescription>Bitte wähle einen Termin aus.</FormDescription>
        <p className="text-xs text-muted-foreground pt-3">
          WICHTIG: Sie erhalten eine separate Email von uns als Bestätigung.
          Erst dann ist der Termin verbindlich.
        </p>
      </div>
      <div className="flex justify-between mb-4">
        {currentWeek.getTime() >= Date.now() && (
          <Button
            type="button"
            className="bg-novo-red hover:bg-novo-red/70 text-white font-bold py-2 px-4 rounded"
            onClick={goToPreviousWeek}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}
        <Button
          type="button"
          className="bg-novo-red hover:bg-novo-red/70 text-white font-bold py-2 px-4 rounded"
          onClick={goToNextWeek}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex text-center items-center justify-center gap-x-20 mb-4">
        {getWeekDays(currentWeek).map((day, index) => (
          <div key={index} className="p-1 md:p-2">
            <div className="border-b py-2">
              <div className="flex flex-col gap-2 md:w-40 text-xs md:text-sm">
                <p>
                  {day.toLocaleDateString("de-DE", {
                    dateStyle: "long",
                  })}
                </p>
                <p className="font-bold">
                  {day.toLocaleDateString("de-DE", {
                    weekday: "long",
                  })}
                </p>
              </div>
            </div>
            {renderTimeSlots(
              day.toLocaleDateString("de-DE", {
                dateStyle: "long",
              })
            )}
          </div>
        ))}
      </div>

      <div>
        {form.getValues("step9") !== "" && (
          <p>
            Gewählter Termin:{" "}
            <span className="font-bold text-sm md:text-lg text-novo-red">
              {" "}
              {form.watch("step9")} Uhr
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
