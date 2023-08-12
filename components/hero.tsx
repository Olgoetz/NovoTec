import NovoTec from "@/components/novotec";
import { Star, ThumbsUp, Medal } from "lucide-react";
import {
  BuildingIcon,
  PresentationIcon,
  DropletIcon,
  FlameIcon,
} from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
export const Hero = () => {
  const box_style =
    "bg-slate-800/40 flex flex-col border border-white p-5 items-center space-y-3 justify-center";
  return (
    <div className="w-full mt-4">
      <div className=" text-white  bg-blend-overlay bg-slate-200/30 min-h-screen bg-center z-10 bg-cover bg-[url(/novotec_Foto_drei_Transporter.jpg)]">
        {/* <h2 className="text-2xl uppercase text-right font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Wofür stehen wir?
        </h2> */}
        <div className="min-h-screen container flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-center">
            <div className={box_style}>
              <div>
                <ThumbsUp className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg text-white">
                Persönlich und professional
              </h3>
              <p>
                Persönliche und professionelle Immobiliensanierungen in NRW aus
                einer Hand.
              </p>
            </div>
            <div className={box_style}>
              <div>
                <Star className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg  text-white">
                Fachkompetenz
              </h3>
              <p>
                Ihr Generalunternehmer mit Fachkompetenz in allen Gewerken für
                erstklassige Ergebnisse.
              </p>
            </div>
            <div className={box_style}>
              <div>
                <Medal className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg  text-white">
                erstklassige Ergebnisse
              </h3>
              <p>Ihr starker Generalunternehmer für erstklassige Ergebnisse!</p>
            </div>
          </div>
        </div>
      </div>
      <main className="py-20">
        <div className="flex justify-center items-center text-3xl">
          <h1>Herzlich Willkommen bei </h1>
          <NovoTec classes="ml-2" />
        </div>
        <div className="text-center leading-8 my-10">
          <p>
            Wir sind ein Kölner Qualitätsdienstleister im Bereich Aus- und
            Sanierungsmanagement mit über 10 Jahren Erfahrung.
          </p>
          <p>Unser Angebot umfasst 4 Kernkompetenzen:</p>
        </div>
        <div className="mt-10 text-xl font-semibold grid md:grid-cols-2 gap-7 text-center w-[400px]  md:w-[800px] mx-auto ">
          <div className="h-[80px] flex items-center justify-center border rounded-md shadow-lg">
            <BuildingIcon className="h-8 w-8 mr-5" />
            <h3>Ausbau</h3>
          </div>
          <div className="h-[80px] flex items-center justify-center  border rounded-md shadow-lg">
            <FlameIcon className="h-8 w-8 mr-5" />
            <h3>Brandsanierung</h3>
          </div>
          <div className="h-[80px] flex items-center justify-center  border rounded-md shadow-lg">
            <DropletIcon className="h-8 w-8 mr-5" />
            <h3>Wassersanierung</h3>
          </div>
          <div className="h-[80px] flex  items-center justify-center  border rounded-md shadow-lg">
            <PresentationIcon className="h-8 w-8 mr-5" />
            <h3>Projektleitung</h3>
          </div>
        </div>
      </main>
    </div>
  );
};
