import NovoTec from "@/components/novotec";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import coreCompetencies from "@/data/coreCompetencies";
import { cn } from "@/lib/utils";
export const Hero = () => {
  const box_style =
    "bg-slate-800/40 flex flex-col border border-white p-5 items-center space-y-3 justify-center";
  return (
    <div className="w-full mt-28 md:mt-36">
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
      <section className="py-20">
        <div className="flex flex-col justify-center items-center font-bold text-3xl gap-y-8">
          <h1 className="text-3xl md:text-5xl text-center">
            Herzlich Willkommen bei{" "}
          </h1>
          {/* <NovoTec classes="ml-2" /> */}

          <Image
            src="/novotec_logo.png"
            alt="NovoTec Logo Hero"
            width={400}
            height={400}
            sizes="100vw"
            priority
          />
        </div>
        <div className="text-center leading-8 my-10">
          <p>
            Wir sind ein Kölner Qualitätsdienstleister im Bereich Ausbau- und
            Sanierungsmanagement mit über 10 Jahren Erfahrung.
          </p>
          <p>Unser Angebot umfasst 6 Kernkompetenzen:</p>
        </div>

        <div className="mt-10 font-semibold grid md:grid-cols-3 gap-7 px-2 text-center md:max-w-[1000px] mx-auto ">
          {coreCompetencies.map((c) => (
            <div
              key={c.title}
              className="h-[80px] bg-slate-100 flex items-center justify-center px-1  border rounded-md shadow-lg"
            >
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
          ))}
        </div>
      </section>
    </div>
  );
};
