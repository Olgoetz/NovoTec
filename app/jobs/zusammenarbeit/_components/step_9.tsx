"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { TFormSchema } from "../_lib/validations";

import clsx from "clsx";

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
    const monday = new Date(currentDate);
    monday.setDate(
      currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)
    );

    for (let i = 0; i < 5; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const setTimeslot = async (timeslot: string) => {
    form.setValue("step9", timeslot, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const timeSlots = ["08:00 - 09:00", "09:00 - 10:00"];
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
      <div className="flex justify-between mb-4">
        <Button
          type="button"
          className="bg-novo-red hover:bg-novo-red/70 text-white font-bold py-2 px-4 rounded"
          onClick={goToPreviousWeek}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          type="button"
          className="bg-novo-red hover:bg-novo-red/70 text-white font-bold py-2 px-4 rounded"
          onClick={goToNextWeek}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="flex text-center items-center justify-between mb-4">
        {getWeekDays(currentWeek).map((day, index) => (
          <div key={index} className="p-2">
            <div className=" border-b py-2">
              {day.toLocaleDateString("de-DE")}
            </div>
            {renderTimeSlots(day.toLocaleDateString("de-DE"))}
          </div>
        ))}
      </div>

      <div>
        {form.getValues("step9") !== "" && (
          <p>
            Gewählter Termin:{" "}
            <span className="font-bold text-lg text-novo-red">
              {" "}
              {form.watch("step9")} Uhr
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
