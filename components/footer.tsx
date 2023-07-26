"use client";
import React, { useEffect, useState } from "react";
import { CopyrightIcon, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
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
    <div className="bg-black w-full pt-10  text-white mt-10">
      <div className="grid md:grid-cols-3 text-center md:text-left gap-6 max-w-[1000px] mx-auto">
        <div className="w-[500px] md:w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold border-b py-3 border-white">
            Links
          </p>
          <ul className="flex flex-col space-y-5 text-sm">
            <li>
              <Link href="" className="flex items-center">
                <ExternalLink size={24} className="mr-5" />
                immoankäufer.de
              </Link>
            </li>
            <li>
              <Link href="" className="flex items-center">
                <ExternalLink size={24} className="mr-5" />
                bestandstransformation.de
              </Link>
            </li>

            <li>
              <Link href="" className="flex items-center">
                <ExternalLink size={24} className="mr-5" />
                Novotherm – Heizung & Sanitär
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[500px] md:w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold  border-b py-3 border-white">
            Kontakt{" "}
          </p>
          <ul className="flex flex-col  space-y-5 text-sm">
            <li className="flex items-center">
              <Phone size={24} className="mr-5" />
              +49 (0)221 2924250
            </li>
            <li className="flex items-center">
              <Mail size={24} className="mr-5" />
              info@novotec-koeln.de
            </li>
            <li className="flex items-center">
              <MapPin size={24} className="mr-5" />
              NovoTec GmbH & Co. KG <br />
              Walter-Meckauer-Str. 33a <br />
              51067, Köln
            </li>
          </ul>
        </div>
        <div className="w-[500px] md:w-full mx-auto">
          <p className=" text-lg mb-5 font-semibold  border-b py-3 border-white">
            Sonstiges
          </p>
          <ul className="flex flex-col space-y-5 text-sm">
            <Link href="/dataprivacy">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
            <SocialMedia styles="text-white" />
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center flex-1 py-10">
        <CopyrightIcon className="h-5 w-5 mr-3" />
        <p>2023 - {currentYear} NovoTec</p>
      </div>
    </div>
  );
};
