import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";
import { getDomain } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { EdgeStoreProvider } from "@/lib/edgestore";

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
      <body className={raleway.className}>
        <EdgeStoreProvider>
          <Navbar />
          <div className="overflow-auto flex flex-col h-screen justify-between">
            {children}
            <Footer />
          </div>
          <Toaster />
        </EdgeStoreProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
