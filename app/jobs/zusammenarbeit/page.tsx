"use client";

import StepController from "./_components/step_controller";
import { Suspense } from "react";
import { MsalProvider } from "@azure/msal-react";

export default async function Page() {
  return (
    <main className="py-20 mt-10 md:mt-20 container">
      <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        Terminvereinbarung
      </h1>
      <div className=" max-w-6xl mx-auto ">
        {/* Festanstellung */}

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              Loading...
            </div>
          }
        >
          <StepController />
        </Suspense>

        {/* Calendar */}
        {/* <div>
          <div className="mb-3">
            <h2 className="mb-3">Schritt 2: Wählen Sie einen Termin aus</h2>
            <p className="text-xs text-muted-foreground">
              WICHTIG: Sie erhalten eine separate Email von uns als Bestätigung.
              Erst dann ist der Termin verbindlich.
            </p>
          </div>
          <div>Calendar</div>
        </div> */}
      </div>
    </main>
  );
}
