import Jobs from "@/components/jobs";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import getContentByType from "@/lib/getContentByType";
import { ArrowRight, DoorOpenIcon, MessageCircle } from "lucide-react";
import Link from "next/link";
import StepController from "./_components/step_controller";

export default async function Page() {
  return (
    <main className="py-20 mt-10 md:mt-20 container">
      <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        Terminvereinbarung
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
        <div>
          <h2 className="mb-6">Schritt 1: Beantworte die folgenden Fragen</h2>
          {/* Festanstellung */}
          <StepController />
        </div>

        {/* Calendar */}
        <Card>
          <CardTitle className="text-xl text-novo-red p-4   text-center font-semibold mb-6 ">
            Calendar
          </CardTitle>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center">
              <Link
                className="bg-novo-red rounded-lg w-20"
                href="/jobs/festanstellung"
              >
                <MessageCircle className="w-8 h-8 mx-auto  text-white p-1" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
