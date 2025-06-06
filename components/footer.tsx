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
import Script from "next/script";
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
            <li>
              <Link
                href="https://novotherm-koeln.de/"
                className="flex items-center"
              >
                <ExternalLink size={24} className="mr-5" />
                Novotherm – Heizung & Sanitär
              </Link>
            </li>
            <li>
              <Link
                href="https://immoankaeufer.de/"
                className="flex items-center"
              >
                <ExternalLink size={24} className="mr-5" />
                ImmoAnkäufer.de
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
              NovoTec GmbH
              <br />
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
          <ul className="space-y-5 text-sm">
            <li className="pt-1">
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
            <li className="pt-1">
              <Link href="/impressum">Impressum</Link>
            </li>
            <li className="pt-1">
              <SocialMedia classes="text-white" />
            </li>
            <li className="-ml-1">
              <div
                className="trustlocal-widget"
                data-id="256399"
                data-country-code="DE"
                data-badge="hidden"
                data-quote="hidden"
                data-size="small"
                data-type="landscape"
                data-theme="light"
                data-background="white"
                data-google="default"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center flex-1 py-10">
        <CopyrightIcon className="h-5 w-5 mr-3" />
        <p>{currentYear} NovoTec GmbH</p>
      </div>
    </div>
  );
};
