import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";
import { getDomain } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
const raleway = Raleway({ subsets: ["latin"] });
const url = getDomain() as string;
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
  return (
    <html className="scroll-smooth" lang="en">
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
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
        <Script async src="https://static.trustlocal.de/widget/widget_v2.js" />
      </body>
    </html>
  );
}
