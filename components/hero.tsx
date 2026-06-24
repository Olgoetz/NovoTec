import Image from "next/image";
import coreCompetencies from "@/data/coreCompetencies";
import { cn } from "@/lib/utils";
import Link from "next/link";

import BackgroundVideo from "./backgroundVideo";
import { ChevronDown } from "lucide-react";
export const Hero = () => {
  return (
    <div className="w-full  md:py-5  bg-transparent">
      {/* <div className="relative min-h-screen text-white ">
        <div className="relative text-white inset-0 animate-ken-burns  bg-blend-overlay bg-slate-200/30 min-h-screen bg-center z-10 bg-cover bg-[url(/novotec_Foto_drei_Transporter.jpg)]">
        <h2 className="text-2xl uppercase  text-right font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Wofür stehen wir?
        </h2>

        <Image
          src="/novotec_Foto_drei_Transporter.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center  inset-0 animate-ken-burns -z-20"
        />
        <div className="absolute inset-0 bg-slate-200/20 animate-ken-burns " />
        <div className="min-h-screen z-20 container flex items-center justify-center">
          <div className="grid md:grid-cols-2 max-w-[1000px] gap-4 text-sm text-center">
            <div className={box_style}>
              <div>
                <ThumbsUp className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg text-white">
                Persönlich und professionell
              </h3>
              <p>
                Persönliche und professionelle Immobiliensanierungen und
                -ausbauten im Raum Köln und ganz NRW aus einer Hand.
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
          </div>
        </div>
      </div> */}
      <section className="">
        {/* <CrawlingText /> */}
        <div className="absolute w-full md:w-2/3 top-1/4 left-0 z-10 text-center md:text-left text-white font-bold">
          <div className="p-4 md:p-10 mx-2 rounded-xl bg-black/20 backdrop-blur-[2px] flex flex-col items-center justify-start gap-y-3 md:gap-y-5">
            <h1 className="text-3xl md:text-5xl w-full drop-shadow-lg">
              Herzlich Willkommen bei{" "}
            </h1>

            <div className="flex w-full flex-col md:flex-row items-center justify-left gap-x-4">
              <Image
                src="/novotec_logo_nobackground.png"
                alt="NovoTec Logo Hero"
                width={450}
                height={450}
                sizes="(max-width: 768px) 90vw, 450px"
                priority
                className="py-8 drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center text-base md:text-xl leading-8 drop-shadow-md">
              <p>
                Als erfahrener Qualitätsdienstleister aus dem Rheinland bieten
                wir seit nun fast 15 Jahren erstklassige Leistungen im Ausbau-
                und Sanierungsmanagement
              </p>
            </div>

            <div className="flex flex-col md:items-start items-center justify-center w-full text-base md:text-xl leading-8 drop-shadow-md">
              <div>
                <p className="py-6">Unser Angebot umfasst 7 Kernkompetenzen</p>

                <ChevronDown className="w-full" size={40} />
              </div>
            </div>
          </div>
        </div>
        <BackgroundVideo />

        <div className="container py-20 font-semibold flex flex-wrap justify-center gap-7 mx-auto">
          {coreCompetencies.map((c) => (
            <Link
              key={c.title}
              href="/leistungen"
              className="w-[calc(50%-14px)] md:w-[calc(25%-21px)]"
            >
              <div className="h-[80px] bg-slate-100 flex items-center justify-center px-1  border rounded-md shadow-lg">
                <div
                  className={cn(
                    "flex items-center justify-start ",
                    c.containerStyles,
                  )}
                >
                  {c.icon && <c.icon className={cn("mr-5", c.iconStyles1)} />}
                  {c.image && (
                    <c.image
                      src="/fenster.png"
                      alt="Fenster Icon"
                      width={28}
                      height={28}
                      className="ml-[4px] mr-5"
                    />
                  )}

                  <p>{c.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
