import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere Leistungen: Wasserschadensanierung, Brandschadensanierung, energieeffiziente Sanierung, Masterbäder, Innen- und Dachausbauten, Bauelemente und Projektleitung in Leverkusen, Köln und NRW.",
  keywords: [
    "NovoTec",
    "Leistungen",
    "Sanierung",
    "Wasserschadensanierung",
    "Brandschadensanierung",
    "Innenausbauten",
    "Dachausbauten",
    "Bauelemente",
    "Projektleitung",
    "energieeffiziente Sanierung",
    "Leverkusen",
    "Köln",
    "NRW",
  ],
  alternates: {
    canonical: "/leistungen",
  },
};

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: "NovoTec GmbH",
    },
    areaServed: {
      "@type": "State",
      name: "Nordrhein-Westfalen",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ausbau- und Sanierungsmanagement",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wasserschadensanierung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brandschadensanierung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Energieeffiziente Sanierung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Masterbäder",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Innen- und Dachausbauten",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bauelemente",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Projektleitung",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
};

export default ServicesLayout;
