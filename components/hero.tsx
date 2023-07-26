import NovoTec from "@/components/novotec";
import { Star, ThumbsUp, Medal } from "lucide-react";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="w-full mt-4">
      <div className=" text-black bg-blend-overlay bg-slate-200/30 min-h-screen bg-center z-10 bg-cover bg-[url(/novotec_Foto_drei_Transporter.jpg)]">
        {/* <h2 className="text-2xl uppercase text-right font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Wofür stehen wir?
        </h2> */}
        <div className="min-h-screen container flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-4 text-sm text-center">
            <div className="flex flex-col border border-white bg-slate-100/80  p-5 items-center space-y-3 justify-center">
              <div>
                <ThumbsUp className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg text-secondary-foreground">
                Persönlich und professional
              </h3>
              <p>
                Persönliche und professionelle Immobiliensanierungen in NRW aus
                einer Hand.
              </p>
            </div>
            <div className="flex flex-col border border-white bg-slate-100/80 p-5 items-center space-y-3 justify-center">
              <div>
                <Star className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg  text-secondary-foreground">
                Fachkompetenz
              </h3>
              <p>
                Ihr Generalunternehmer mit Fachkompetenz in allen Gewerken für
                erstklassige Ergebnisse.
              </p>
            </div>
            <div className="flex flex-col border border-white bg-slate-100/80 items-center space-y-3 justify-center">
              <div>
                <Medal className="text-primary-foreground" size={50} />
              </div>
              <h3 className="font-semibold text-lg  text-secondary-foreground">
                erstklassige Ergebnisse
              </h3>
              <p>Ihr starker Generalunternehmer für erstklassige Ergebnisse!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
