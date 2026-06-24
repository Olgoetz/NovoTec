import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
const raleway = Raleway({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: "%s | NovoTec",
    default: "NovoTec - Ausbau- & Sanierungsmanagement",
  },

  description: "Ausbau- und Sanierungsmanagement in Köln und Umgebung",
  keywords: [
    "NovoTec",
    "Sanierung",
    "Sanierungsmanagement",
    "Ausbaumanagement",
    "Projektmanagement",
    "Köln",
    "NRW",
    "Nordrhein-Westfalen",
    "Bonn",
    "Bau",
    "Bauwesen",
    "Bauwirtschaft",
    "Bauunternehmen",
    "Bauunternehmer",
    "Bauprojekt",
  ],
  metadataBase: new URL(process.env.URL_PROD! || process.env.URL_NONPROD!),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.URL_PROD || process.env.URL_NONPROD;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Über Uns",
        item: `${baseUrl}/ueberuns`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Leistungen",
        item: `${baseUrl}/leistungen`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Referenzen",
        item: `${baseUrl}/referenzen`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Jobs",
        item: `${baseUrl}/jobs`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Kontakt",
        item: `${baseUrl}/kontakt`,
      },
    ],
  };

  return (
    <html className="scroll-smooth" lang="de" data-scroll-behavior="smooth">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG as string} />
      <body className={raleway.className}>
        <Toaster />
        <EdgeStoreProvider>
          <Navbar />
          <div className=" h-screen">
            {children}
            <Footer />
          </div>
        </EdgeStoreProvider>
        <CookieConsent />
        <Script
          async
          src="https://static.trustlocal.de/widget/widget_v2.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
