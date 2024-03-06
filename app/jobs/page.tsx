import Jobs from "@/components/jobs";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import getContentByType from "@/lib/getContentByType";
import { ArrowRight, DoorOpenIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="py-20 mt-10 md:mt-20 container">
      <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        Dein Job bei uns - Deine Chance für Veränderung
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ">
        {/* Festanstellung */}

        <Card>
          <CardTitle className="text-xl text-novo-red p-4   text-center font-semibold mb-6 ">
            Festanstellung
          </CardTitle>
          <CardContent>
            <p>
              Du suchst eine Festanstellung in einem expandierenden und
              innovativen Unternehmen, indem du deine Erfahrungen und Ideen
              einbringen und wirklich etwas bewegen kannst? Wenn du motiviert
              und Teamplayer bist, dann schau dir unsere Stellenangebote an.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center">
              <Link
                className="bg-novo-red rounded-lg w-20"
                href="/jobs/festanstellung"
              >
                <DoorOpenIcon className="w-8 h-8 mx-auto  text-white p-1" />
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Zusammenarbeit */}
        <Card>
          <CardTitle className="text-xl text-novo-red p-4   text-center font-semibold mb-6 ">
            Zusammenarbeit
          </CardTitle>
          <CardContent>
            <p>
              Du bist bereits selbstständiger Handwerker oder möchtest es
              werden? Du möchtest regelmäßige und sichere Aufträge erhalten und
              gleichzeit deinen administrativen Aufwand reduzieren? Dann
              vereinbe jetzt ein persönliches Kennenlerngespräch.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-center">
              <Link
                className="bg-novo-red rounded-lg w-20"
                href="/jobs/zusammenarbeit"
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
