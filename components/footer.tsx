"use client";
import React, { useEffect, useState } from "react";
import {
  CopyrightIcon,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Clock,
} from "lucide-react";
import Link from "next/link";
import SocialMedia from "./social-media";
export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    let today = new Date();
    let year: number = today.getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div className="bg-secondary-foreground w-full pt-10  text-white">
      <div className="grid md:grid-cols-3 text-left gap-6 container max-w-[1000px] mx-auto">
        <div className="w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold border-b py-3 border-white">
            Links
          </p>
          <ul className="space-y-5 text-sm">
            {/* <li>
              <Link
                href="https://http://die-immobilien-ankaeufer.de/"
                className="flex items-center"
              >
                <ExternalLink size={24} className="mr-5" />
                die-immobilien-ankäufer.de - <br />
                Nachhaltige Bestandssanierung
              </Link>
            </li> */}

            <li>
              <Link
                href="https://novotherm-koeln.de/"
                className="flex items-center"
              >
                <ExternalLink size={24} className="mr-5" />
                Novotherm – Heizung & Sanitär
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold border-b py-3 border-white">
            Kontakt
          </p>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center">
              <Phone size={24} className="mr-5" />
              (+49) 214 875 497 0
            </li>
            <li className="flex items-center">
              <Mail size={24} className="mr-5" />
              <a href="mailto:info@novotec-gruppe.de">info@novotec-gruppe.de</a>
            </li>
            <li className="flex items-center">
              <MapPin size={24} className="mr-5" />
              NovoTec GmbH & Co. KG <br />
              Friedrich-Sertürner-Str. 18 <br />
              51377 Leverkusen
            </li>
            <li className="flex items-center">
              <Clock size={24} className="mr-5" />
              Öffnungszeiten <br />
              Mo bis Fr von 7.30 – 16.30 Uhr <br />
            </li>
          </ul>
        </div>
        <div className="w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold  border-b py-3 border-white">
            Sonstiges
          </p>
          <ul className="flex flex-col space-y-5 text-sm">
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
            <SocialMedia classes="text-white" />
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center flex-1 py-10">
        <CopyrightIcon className="h-5 w-5 mr-3" />
        <p>{currentYear} NovoTec GmbH & Co. KG</p>
      </div>
    </div>
  );
};
