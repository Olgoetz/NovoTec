import { Separator } from "@/components/ui/separator";
import { ThumbsUp, Euro, Users, FolderKanban } from "lucide-react";

const AboutUs = () => {
  return (
    <div id="überuns" className="py-20 mt-10 md:mt-20">
      <div className="container">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Über uns
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
              Als anerkannter Malerfachbetrieb hat sich NovoTec im Laufe der
              Jahre zu einem Generalunternehmen entwickelt, welches sich auf das
              Ausbau- und Sanierungsmanagement für Privat- und Gewerbekunden
              spezialisiert hat. Verantwortungsbewusst übernimmt NovoTec die
              Planung, Durchführung und Steuerung von Bauprojekten.
            </p>
            <p className="mt-5">
              Das Ziel von NovoTec ist, den nächsten großen strategischen
              Schritt nach vorne zu unternehmen, kontinuierliches Wachstum zu
              erzielen und unseren Gesamtumsatz bis 2025 zu verdoppeln. Dabei
              legen wir großen Wert darauf, sowohl die Digitalisierung als auch
              die Nachhaltigkeit fest in unsere Wachstumsstrategie zu
              integrieren und den bedeutenden Zukunftsmarkt des klima- und
              ressourcenschonenden Bauens zu fördern. Gemeinsam mit unserem
              hochmotivierten Team möchten wir einen stetig wachsenden Beitrag
              zur Erreichung der Klimaziele leisten und die Immobilieneigentümer
              in der Umsetzung der Energieeffizienz ihrer Gebäude entschlossen
              unterstützen.
            </p>
            <p className="mt-5">
              Zusätzlich fungiert Thomas Jaworski auch als Geschäftsführer der
              Firma Novotherm GmbH, die im Bereich Heizung-, Sanitär-, Klima-
              und Solartechnik tätig ist. Diese enge Verbindung schafft
              einzigartige Synergien, die einen entscheidenden Beitrag zum
              Erfolg Ihrer Bauprojekte leisten.
            </p>
          </div>
          <div className="flex flex-col my-3 justify-between items-center">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-5xl">2012</p>
              <p className="mt-3">Gründung als Drei-Mann-Unternehmen</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-5xl mt-5">20</p>
              <p className="mt-3">festangestelle Mitarbeiter</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-5xl mt-5">&gt; 30</p>
              <p className="mt-3">Sub- und Partnerunternehmen</p>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid md:grid-cols-2 gap-4 hyphens-auto text-justify mt-10">
          <div className="flex flex-col items-center space-y-3 rounded-lg bg-slate-200 p-10 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-start w-full">
              <ThumbsUp
                className="text-primary-foreground mb-3 md:mb-0 md:mr-3"
                size={50}
              />
              <p className="md:text-lg text-center font-semibold">
                600 bis 700 Schadenregulierungen jährlich
              </p>
            </div>
            <p className="break-normal">
              In den letzten drei Jahren hat NovoTec im gewerblichen Bereich mit
              führenden deutschen Versicherern erfolgreich zusammengearbeitet
              und dabei jährlich 600 bis 700 Wasser- und Brandschäden inkl.
              schadensmindernder Erstmaßnahmen mit je einem Auftragsvolumen von
              bis zu 30.000 EUR durchgeführt.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-lg bg-slate-300 p-10 justify-center shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-start w-full">
              <Euro
                className="text-primary-foreground mb-3 md:mb-0 md:mr-3"
                size={50}
              />
              <p className="md:text-lg text-center font-semibold">
                Wir entwickeln Projekte über 1 Mio. EUR
              </p>
            </div>
            <p className="break-normal">
              In den Bereichen Mieterausbau und Energieeffiziente Sanierung
              realisiert NovoTec Aufträge im Wert von bis und weit über 1 Mio.
              EUR. Zu unseren Projekten zählen unter anderem Dachaufstockungen,
              Strang-, Fassaden- und Komplettsanierungen sowie die
              Revitalisierung von Wohn- und Gewerbeflächen.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-lg md:h-full bg-slate-400 p-10 justify-center shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-start w-full">
              <Users
                className="text-primary-foreground mb-3 md:mb-0 md:mr-3"
                size={50}
              />
              <p className="md:text-lg text-center font-semibold">
                Starkes Team bestens vernetzt
              </p>
            </div>
            <p className="break-normal">
              Seit unserer Gründung im Jahr 2012 ist NovoTec kontinuierlich
              gewachsen und beschäftigt mittlerweile über 20 Mitarbeiter und
              Monteure. Durch langjährige Partnerschaften mit mehr als 30
              Partner- und Subunternehmen, die alle erforderlichen Gewerke
              abdecken, sind wir in der Lage, ein umfassendes Leistungsspektrum
              aus einer Hand anzubieten. Darüber hinaus verfügen wir über ein
              starkes Netzwerk, zu dem unter anderem Architekten, Statiker,
              Brandschutzexperten und Energieberater gehören.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 rounded-lg bg-slate-500 p-10 justify-center shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-start w-full">
              <FolderKanban
                className="text-primary-foreground mb-3 md:mb-0 md:mr-3"
                size={50}
              />
              <p className="md:text-lg text-center font-semibold">
                Wir leiten ihre Projekte zu erstklassigen Ergebnissen
              </p>
            </div>
            <p className="break-normal">
              Als Ihr exklusiver Ansprechpartner übernehmen wir die Koordination
              aller Gewerke und legen dabei großen Wert auf direkte und
              transparente Kommunikation sowie hohe Qualitätsstandards. Der von
              uns entwickelte Ansatz zielt darauf ab, Schnittstellen zu
              minimieren und Projekte individuell, effizient und zuverlässig
              umzusetzen, während wir stets die volle Kostenkontrolle
              gewährleisten. Unser oberstes Ziel ist es, Ihr Vorhaben
              erfolgreich zum Abschluss zu bringen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
