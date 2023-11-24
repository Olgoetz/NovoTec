import React from "react";

const page = () => {
  return (
    <div className="py-20 md:py-40 mt-20">
      <div className="container leading-relaxed">
        <h1 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Impressum
        </h1>
        <p className="font-semibold mt-5">Angaben gemäß § 5 TMG:</p>
        <p>
          NovoTec GmbH & Co. KG Walter-Meckauer-Str. 33a 51067 Köln <br />{" "}
          vertreten durch: Thomas Jaworski
        </p>
        <p className="font-semibold mt-5">Kontakt:</p>
        <p>
          Telefon: +49 0221 292 425-0 <br />
          Telefax: +49 0221 292 425-79 <br />
          E-Mail: info@novotec-koeln.de <br />
        </p>
        <p className="font-semibold mt-5">Registereintrag:</p>
        <p>
          Eintragung im Handelsregister <br />
          Registergericht: Amtsgericht Köln <br />
          Registernummer: HRA 27597 HRB 17914 <br />
        </p>
        <p className="font-semibold mt-5">Umsatzsteuer-ID:</p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE
          270536594
        </p>
        <p className="font-semibold mt-5">Aufsichtsbehörde:</p>
        <p>Handwerkskammer zu Köln</p>
        <p className="font-semibold mt-5">
          Angaben zu Betriebshaftpflichtversicherung:
        </p>
        <p>
          Name und Sitz der Gesellschaft: <br /> Provinzial Versicherung AG
          vertreten durch: <br />
          Provinzial-Geschäftsstelle Özkan Turp <br />
          Bertram-Blank-Str. 8 <br />
          51427 Bergisch Gladbach <br />
        </p>
        <p className="font-semibold mt-5">Geltungsraum der Versicherung:</p>
        <p>Weltweit</p>
        <p className="font-semibold mt-5">
          Hinweis zum Verbraucherstreitbeilegungsgesetz (VSBG):
        </p>
        <p>
          Die Firma NovoTec GmbH & Co. KG ist nicht bereit und nicht
          verpflichtet, an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p className="font-semibold mt-5">Haftungsausschluss:</p>
        <p>
          Trotz sorgfältiger Prüfung können wir keine Haftung für die Inhalte
          externer Links übernehmen. Für den Inhalt dieser Seiten sind
          ausschließlich deren Betreiber verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default page;
