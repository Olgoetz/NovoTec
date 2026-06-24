import { Hero } from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovoTec - Ausbau- & Sanierungsmanagement",
  description:
    "NovoTec GmbH – Ihr erfahrener Qualitätsdienstleister für Ausbau- und Sanierungsmanagement in Leverkusen, Köln und ganz NRW. Wasserschadensanierung, Brandschadensanierung, Innenausbau und mehr.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${process.env.URL_PROD || process.env.URL_NONPROD}/#organization`,
        name: "NovoTec GmbH",
        description:
          "Ausbau- und Sanierungsmanagement in Leverkusen, Köln und ganz NRW",
        url: process.env.URL_PROD || process.env.URL_NONPROD,
        telephone: "+4921487549 70",
        email: "info@novotec-gruppe.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Friedrich-Sertürner-Str. 18",
          addressLocality: "Leverkusen",
          postalCode: "51377",
          addressCountry: "DE",
          addressRegion: "Nordrhein-Westfalen",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.040023,
          longitude: 7.017935,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:30",
          closes: "16:30",
        },
        areaServed: [
          { "@type": "City", name: "Leverkusen" },
          { "@type": "City", name: "Köln" },
          { "@type": "State", name: "Nordrhein-Westfalen" },
        ],
        image: `${process.env.URL_PROD || process.env.URL_NONPROD}/opengraph-image.png`,
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        name: "NovoTec GmbH",
        url: process.env.URL_PROD || process.env.URL_NONPROD,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <section className="container mx-auto py-16 px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ihr Partner für Ausbau- und Sanierungsmanagement in NRW
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Die NovoTec GmbH ist Ihr erfahrener Qualitätsdienstleister aus dem
          Rheinland. Seit fast 15 Jahren bieten wir erstklassige Leistungen im
          Ausbau- und Sanierungsmanagement – von der Wasserschadensanierung über
          energieeffiziente Sanierungen bis hin zu kompletten Innenausbauten und
          Dachaufstockungen.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mit Sitz in Leverkusen betreuen wir Projekte in Köln, Bonn und ganz
          Nordrhein-Westfalen. Unser Team koordiniert alle Gewerke nahtlos und
          sorgt für eine termingerechte, budgettreue Umsetzung Ihres Vorhabens –
          ob privater Wohnungsbau oder gewerbliche Sanierung.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Als Generalunternehmer mit Fachkompetenz in allen relevanten Gewerken
          bieten wir Ihnen alles aus einer Hand: persönliche Beratung,
          professionelle Planung und präzise Ausführung für erstklassige
          Ergebnisse.
        </p>
      </section>
    </div>
  );
}
