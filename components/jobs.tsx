import React from "react";
import { Job } from "@/types/job";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NovoTec from "@/components/novotec";
import { Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

export default async function Jobs() {
  const jobsData = await fetch(
    "https://my.api.mockaroo.com/jobs.json?key=e31556b0"
  ).then((res) => res.json());

  return (
    <div className="py-20 mt-10">
      <div className="container ">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Dein Job uns - Deine Chance für Veränderung
        </h2>
        <p>
          Wer den Markt verändern will, benötigt kluge Köpfe, die ihm dabei
          helfen. Wir lieben unsere Arbeit und sind uns sicher: Dir wird es
          genauso gehen. Egal, ob Du gerade in den Beruf startest oder bereits
          Berufserfahrung hast – wenn Du mit uns wachsen willst und unsere
          Leidenschaft teilst, findest Du bei uns spannende Möglichkeiten.
        </p>

        {jobsData.map((j: Job) => (
          <Card key={j.id} className="my-10 text-justify">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center">
                  <Award className="h-10 w-10 mr-4" />
                  {j.title}
                </div>
              </CardTitle>
              <CardDescription>Level: {j.level}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold py-3">Beschreibung:</p>
              <p>{j.description}</p>
              {/* <p className="font-bold py-3">Verantworlichkeiten:</p>
            <p>
              <ol>
                <li className="py-2">
                  1. Planung und Projektierung: Sie entwickeln detaillierte
                  Pläne und Zeichnungen für Sanitäranlagen in Bauvorhaben und
                  Renovierungsprojekten. Dabei berücksichtigen Sie die
                  funktionalen Anforderungen, örtlichen Vorschriften,
                  Umweltaspekte und die Nutzungseffizienz der Anlagen.
                </li>
                <li className="py-2">
                  2. Installation und Inbetriebnahme: Sie führen die
                  Installation und Inbetriebnahme von Sanitäranlagen durch,
                  einschließlich Wasser- und Abwassersystemen, Rohrleitungen,
                  Armaturen, Toiletten, Waschbecken und Duschen. Dabei stellen
                  Sie sicher, dass alle Installationen den aktuellen Codes und
                  Standards entsprechen.
                </li>
                <li className="py-2">
                  3. Wartung und Reparatur: Sie überwachen und führen
                  regelmäßige Wartungsarbeiten an Sanitäranlagen durch, um deren
                  einwandfreie Funktionsweise sicherzustellen. Bei auftretenden
                  Problemen oder Störungen diagnostizieren und beheben Sie diese
                  zeitnah.
                </li>
                <li className="py-2">
                  4. Qualitätssicherung: Als Meister überwachen Sie die Arbeit
                  Ihres Teams und gewährleisten, dass die Arbeiten gemäß den
                  festgelegten Qualitätsstandards und Zeitplänen ausgeführt
                  werden.
                </li>
                <li className="py-2">
                  5. Teamführung und Schulung: Sie sind verantwortlich für die
                  Anleitung, Schulung und Motivation Ihres
                  Sanitärtechniker-Teams, um eine effiziente und hochwertige
                  Arbeitsleistung sicherzustellen.
                </li>
                <li className="py-2">
                  6. Materialbeschaffung und Budgetverwaltung: Sie planen den
                  Bedarf an Materialien und Ausrüstung, erstellen Bestellungen
                  und überwachen das Budget für Sanitärprojekte.
                </li>
                <li className="py-2">
                  7. Einhaltung von Vorschriften: Sie sorgen dafür, dass alle
                  Sanitärarbeiten den geltenden Bauvorschriften, Gesundheits-
                  und Sicherheitsbestimmungen sowie Umweltstandards entsprechen.
                </li>
              </ol>
              <p className="font-bold py-2">Anforderungen:</p>
              <ul>
                <li className="py-2">
                  - Abgeschlossene Ausbildung als Sanitäranlagenmeister oder in
                  einem verwandten Fachgebiet.
                </li>
                <li className="py-2">
                  - Nachgewiesene Erfahrung in der Installation, Wartung und
                  Reparatur von Sanitäranlagen.
                </li>
                <li className="py-2">
                  - Führungserfahrung und Teammanagementfähigkeiten sind von
                  Vorteil.
                </li>
                <li className="py-2">
                  - Fundierte Kenntnisse der örtlichen Bauvorschriften und
                  Normen im Sanitärbereich.
                </li>
                <li className="py-2">
                  - Ausgezeichnete Problemlösungsfähigkeiten und technisches
                  Verständnis.
                </li>
                <li className="py-2">
                  - Gute Kommunikationsfähigkeiten und die Fähigkeit, effektiv
                  mit Kunden, Kollegen und Auftragnehmern zu interagieren.
                </li>
                <li className="py-2">
                  - Körperliche Belastbarkeit, um gegebenenfalls in beengten
                  Räumen arbeiten zu können.
                </li>
                <li className="py-2">
                  - Bereitschaft zur Fortbildung und zum Auf dem Laufenden
                  bleiben über neue Technologien und Entwicklungen im Bereich
                  der Sanitärtechnik.
                </li>
              </ul>
            </p> */}
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="p-3 outline-none">
                <div className="flex items-center">
                  <ChevronRightCircle />
                  <Link
                    href={`/jobs/${j.id}`}
                    className="p-3 outline-none rounded-md border-gray-500"
                  >
                    Hier geht&apos;s zur vollständigen Beschreibung
                  </Link>
                </div>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
