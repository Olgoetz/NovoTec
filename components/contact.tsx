"use client";

import { Phone, Mail, MapPin } from "lucide-react";

import GoogleMaps from "./googleMaps";

export default function Contact() {
  return (
    <div id="kontakt" className="py-20 mt-10 md:mt-20">
      <div className="container ">
        <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Kontakt - So erreichen Sie uns
        </h2>

        <div className="grid md:grid-cols-2 gap-x-6  mx-auto">
          {/* <div className="relative">
            <Image fill src="/contact.jpg" alt="contanct" />
          </div> */}
          <div className="flex flex-col justify-center">
            <ul className="flex flex-col w-full space-y-10 text-sm">
              <li className="flex items-center">
                <Phone size={30} className="mr-5" />
                (+49) 214 875 497 - 72
              </li>
              <li className="flex items-center">
                <Mail size={30} className="mr-5" />
                <a href="mailto:info@novotec-koeln.de">info@novotec-koeln.de</a>
              </li>
              <li className="flex items-center">
                <MapPin size={30} className="mr-5" />
                NovoTec GmbH & Co. KG, Friedrich-Sertürner-Str. 18, 51377
                Leverkusen
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <GoogleMaps />
        </div>
      </div>
    </div>
  );
}
