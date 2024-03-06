import Jobs from "@/components/jobs";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import getContentByType from "@/lib/getContentByType";
import { ArrowRight, DoorOpenIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import StepController from "./_components/step_controller";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="py-20 mt-10 md:mt-20 container">
      <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        Terminvereinbarung
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6´8xl mx-auto ">
        <div>
          <h2 className="mb-10">
            Schritt 1: Beantworte die folgenden 8 Fragen
          </h2>
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
        </div>

        {/* Calendar */}
        <div>
          <div className="mb-3">
            <h2 className="mb-3">Schritt 2: Wählen Sie einen Termin aus</h2>
            <p className="text-xs text-muted-foreground">
              WICHTIG: Sie erhalten eine separate Email von uns als Bestätigung.
              Erst dann ist der Termin verbindlich.
            </p>
          </div>
          <div>Calendar</div>
          {/* Festanstellung */}
        </div>
      </div>
    </main>
  );
}
