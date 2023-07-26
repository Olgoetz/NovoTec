import NovoTec from "@/components/novotec";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div id="überuns" className="py-20">
      <div className="container">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          <NovoTec /> :: Über uns
        </h2>

        <div className="grid md:grid-cols-2 leading-8">
          <div>
            <p>
              NovoTec wurde 2012 von Thomas Jaworski in Köln gegründet.
              Ursprünglich als Drei-Mann-Unternehmen konzentrierte sich das
              Unternehmen auf die Sanierung und Renovierung von kleineren und
              einigen mittelgroßen Bauaufträgen und -projekten. Vor der Gründung
              von NovoTec hatte Thomas Jaworski fast 10 Jahre lang als
              Gesellschafter in einem anderen Bauunternehmen gearbeitet.
            </p>
            <p className="mt-5">
              Im Laufe der Jahre hat sich NovoTec zu einem Generalunternehmen
              entwickelt, das sich auf das Ausbau- und Sanierungsmanagement für
              Privat und Gewerbekunden spezialisiert hat. Verantwortungsbewusst
              übernimmt NovoTec die Planung, Durchführung und Steuerung von
              Bauprojekten.
            </p>
            <p className="mt-5">
              Zusätzlich fungiert Thomas Jaworski auch als Geschäftsführer der
              Firma Novotherm GmbH, die im Bereich Heizung-, Sanitär-, Klima-
              und Solartechnik tätig ist. Diese enge Verbindung schafft
              einzigartige Synergien, die einen entscheidenden Beitrag zum
              Erfolg Ihrer Bauprojekte leisten.
            </p>
            <Button asChild variant="outline" className="w-full mt-5">
              <Link href="/#top">Unsere Geschichte</Link>
            </Button>
          </div>
          <div className="flex flex-col mt-5 items-center">
            <p className="font-bold text-5xl">2012</p>
            <p>Gründung als Drei-Mann-Unternehmen</p>
            <p className="font-bold text-5xl mt-10">30</p>
            <p>Sub- und Partnerunternehmen</p>
            <p className="font-bold text-5xl mt-10">20</p>
            <p>festangestelle Mitarbeiter</p>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid md:grid-cols-3 gap-4 text-center mt-10 md:h-64">
          <div className="flex flex-col justify-end w-[50%] md:w-full">
            <div className="flex flex-col items-center space-y-3 rounded-lg bg-slate-200 p-10">
              <p className="text-3xl md:text-5xl font-semibold">30.000 €</p>
              <p>Auftragsvolumen für Wasser-/Brandschaden</p>
            </div>
          </div>
          <div className="flex flex-col w-[75%] md:w-full justify-end">
            <div className="flex flex-col  md:h-[200px] items-center space-y-3 rounded-lg bg-slate-500 p-10 justify-center">
              <p className="text-3xl md:text-5xl font-semibold">600.000 €</p>
              <p>Auftragsvolumen für Versicherungsschäden</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-3 rounded-lg md:h-full bg-slate-600 p-10 justify-center">
              <p className="text-3xl md:text-5xl font-semibold">1.000.000 €</p>
              <p>Auftragsvolumen für Versicherungsschäden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
