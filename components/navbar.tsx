import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
const routes = [
  {
    label: "Start",
    link: "/",
  },
  {
    label: "Leistungen",
    link: "/#services",
  },
  {
    label: "Über Uns",
    link: "/#überuns",
  },
  {
    label: "Referenzen",
    link: "/#referenzen",
  },
  {
    label: "Kontakt",
    link: "/#kontakt",
  },
];

export const Navbar = () => {
  return (
    <>
      <div id="top" className="hidden md:block px-5">
        <div className="flex justify-between flex-1 py-4">
          <div className="mr-4">
            <Link href="/">
              <Image
                width={200}
                height={20}
                alt="Logo"
                src="/novotec_logo.jpg"
              />
            </Link>
          </div>
          <div className="max-w-[500px] space-x-1 text-gray-600 flex flex-1 text-center items-center justify-between">
            {routes.map((route) => (
              <Link
                key={route.label}
                className="group p-3 font-medium hover:text-primary-foreground hover:bg-secondary/10 rounded-lg transition"
                href={route.link}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:hidden fixed top-0 left-0 bg-white h-20">
        <div className="flex flex-1 p-3 justify-between items-center">
          <Link href="/">
            <Image width={150} height={20} alt="Logo" src="/novotec_logo.jpg" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-4">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetClose />
              <div className="flex flex-col space-y-5 items-center text-center mt-5">
                {routes.map((route) => (
                  <Link
                    key={route.label}
                    className="group p-3 w-full font-medium hover:text-primary-foreground hover:bg-secondary/10 rounded-lg transition"
                    href={route.link}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};
