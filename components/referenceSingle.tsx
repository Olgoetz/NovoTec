import React from "react";

import {
  CalendarCheck2,
  Building,
  Map,
  Layers,
  PencilRuler,
  BoxSelect,
} from "lucide-react";
import getContentByType from "@/lib/getContentByType";
import { Gallery } from "./ui/gallery";

import { Reference } from "@/types/reference";
import Link from "next/link";
import { Button } from "./ui/button";
//import data from "@/data/references_mock.json";
const ReferenceSingle = async ({ id }: { id: string }) => {
  console.log(id);
  const references = await getContentByType("reference");
  // For testing
  // const references = data;
  // Find the specific job with the matching id from the params
  const reference: any = references.find((r: any) => r.sys.id === id);
  //console.log("[ui.referenceSinglereference]", reference);
  if (!reference) {
    // Handle the case when the job with the specified id is not found
    return (
      <div className="my-52 text-center text-2xl text-red-500">
        No reference found!
      </div>
    );
  }

  const referenceProperties: Reference[] = [
    {
      label: "Standort",
      content: reference.fields.location,
      icon: Map,
    },
    {
      label: "Baumaßname",
      content: reference.fields.category,
      icon: PencilRuler,
    },
    {
      label: "Objektart",
      content: reference.fields.title,
      icon: Building,
    },
    {
      label: "Gewerke",
      content: reference.fields.tasks,
      icon: Layers,
    },
    {
      label: "Umbaufläche",
      content: `${reference.fields.area} m²`,
      icon: BoxSelect,
    },
    {
      label: "Bauzeit",
      content: reference.fields.duration,
      icon: CalendarCheck2,
    },
  ];

  return (
    <div className="py-20 mt-10 md:mt-20 container">
      <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
        {reference.fields.title}, {reference.fields.location}
      </h1>
      <Gallery reference={reference} />

      <div className="grid md:grid-cols-2 text-center mt-10 bg-gray-400/10 p-4">
        <div className="text-5xl md:text-8xl p-10">
          <p>
            <span className="text-secondary-foreground font-bold">Das</span>
          </p>
          <p>
            <span className="text-primary-foreground font-bold">Projekt</span>
          </p>
        </div>
        <div className="bg-gray-400/20 text-2xl my-4">
          <div className="p-8 h-full">
            <ul className="flex flex-col justify-between space-y-4 h-full">
              {referenceProperties.map((property) => (
                <li
                  key={`${property.label}-${property.content}`}
                  className="flex items-center text-sm"
                >
                  <property.icon width={26} height={26} />
                  <p className="ml-8 text-left">
                    <span className="font-bold">{property.label}:</span>{" "}
                    {property.content}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Button
        asChild
        variant="outline"
        className="mt-10 bg-primary-foreground hover:bg-secondary-foreground w-full"
      >
        <Link
          href={`/referenzen`}
          className="text-white hover:text-white font-semibold"
        >
          Zurück zu Referenzen
        </Link>
      </Button>
    </div>
  );
};

export default ReferenceSingle;
