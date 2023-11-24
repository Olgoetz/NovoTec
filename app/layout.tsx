import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer } from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";

import Head from "next/head";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovoTec - Ausbau- & Sanierungsmanagement",
  description: "Ausbau und Sanierungsmanagement in Köln und Umgebung",
  metadataBase: new URL(process.env.URL!),
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
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
