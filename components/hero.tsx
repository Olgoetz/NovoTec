import NovoTec from "@/components/novotec";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import coreCompetencies from "@/data/coreCompetencies";
import { cn } from "@/lib/utils";
import Link from "next/link";

import BackgroundVideo from "./backgroundVideo";
export const Hero = () => {
  const box_style =
    "bg-slate-800/40 flex flex-col border border-white p-5 items-center space-y-3 justify-center";
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
        <div className="absolute w-full md:w-1/2 top-1/3 left-1 z-10 text-center text-white font-bold">
          <div className="p-8 mx-2 rounded-lg flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-2xl md:text-5xl text-center">
              Herzlich Willkommen bei{" "}
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-x-4">
              <Image
                src="/novotec_logo_pic_only.png"
                alt="NovoTec Logo Hero"
                width={100}
                height={100}
                sizes="100vw"
                priority
                className="py-10"
              />
              <div>
                <h2 className="text-2xl md:text-4xl text-center md:text-left">
                  NovoTec®
                </h2>
                <p className="md:text-2xl">Ausbau & Sanierungsmanagement</p>
              </div>
            </div>
            <div className="text-center text-sm md:text-lg px-6 leading-8 ">
              <p>
                Wir sind ein Qualitätsdienstleister aus dem Rheinland im Bereich
                Ausbau- und Sanierungsmanagement mit über 10 Jahren Erfahrung.
              </p>
              <p className="py-6">Unser Angebot umfasst 6 Kernkompetenzen</p>
            </div>
          </div>
        </div>
        <BackgroundVideo />

        <div className="py-20 font-semibold grid md:grid-cols-3 gap-7 px-2 text-center md:max-w-[1000px] mx-auto ">
          {coreCompetencies.map((c) => (
            <Link key={c.title} href="/leistungen">
              <div className="h-[80px] bg-slate-100 flex items-center justify-center px-1  border rounded-md shadow-lg">
                <div
                  className={cn(
                    "flex items-center justify-start w-[270px]",
                    c.containerStyles
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
