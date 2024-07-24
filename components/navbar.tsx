"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import SocialMedia from "./social-media";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Start",
    link: "/",
  },
  {
    label: "Über Uns",
    link: "/ueberuns",
  },
  {
    label: "Leistungen",
    link: "/leistungen",
  },
  {
    label: "Referenzen",
    link: "/referenzen",
  },
  {
    label: "Jobs",
    link: "/jobs",
  },
  {
    label: "Projektanfragen",
    link: "/projektanfragen",
  },
  {
    label: "Kontakt",
    link: "/kontakt",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const pathName = usePathname();
  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 70) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        id="top"
        className="z-[100] hidden md:block  md:fixed top-0 left-0 w-full"
      >
        <div className="grid-flow-row grid-rows-2 text-center justify-between items-center">
          {/* row 1 */}
          <div className="hidden md:flex items-center justify-around ">
            <div className="bg-secondary-foreground text-center p-2  w-[70%]  text-white">
              <div className="grid grid-cols-2">
                <div className="flex justify-end mr-5">
                  <Phone className="mr-3" />
                  <p> (+49) 214 875 497 0</p>
                </div>
                <div className="flex justify-start">
                  <Mail className="mr-3" />
                  <p>
                    <a href="mailto:info@novotec-gruppe.de">
                      info@novotec-gruppe.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="separator bg-transparent h-10" />
            <div className="social-media bg-primary-foreground p-2 w-[30%] items-center justify-center flex text-white">
              {/* <div className="relative h-6 w-6 ml-4">
                <Link href="https://novotherm-koeln.de/">
                  <Image
                    fill
                    src="/immoankauf.png"
                    alt="Immoankauf"
                    style={{ objectFit: "cover" }}
                    quality={100}
                  />
                </Link>
              </div> */}
              <div className="flex space-x-4">
                <div className="relative h-6 w-6">
                  <Link href="https://novotherm-koeln.de/">
                    <Image
                      fill
                      src="/novotherm_logo_white.svg"
                      alt="Novotherm Logo"
                      style={{ objectFit: "cover" }}
                      className="pr-1"
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                    />
                  </Link>
                </div>
                <SocialMedia classes={"text-white"} />
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div
            className={cn(
              "px-5 hidden md:flex flex-1 h-[100px] hover:text-gray-600  hover:bg-white items-center justify-between",
              pathName === "/" ? "group" : "bg-white"
            )}
          >
            <div className="flex flex-col items-center  mr-4 ">
              <Link href="/">
                <Image
                  width={220}
                  height={20}
                  alt="Logo"
                  src="/novotec_logo_nobackground.png"
                  quality={100}
                  sizes="100vw"
                />
              </Link>
              {/* <p
                className={cn(
                  "text-white font-bold group-hover:text-gray-600",
                  pathName !== "/" && "text-gray-600"
                )}
              >
                NovoTec®
              </p> */}
            </div>

            <div className="text-white group-hover:text-gray-600">
              <div className="max-w-[800px] space-x-3 hidden md:flex text-center">
                {routes.map((route) => (
                  <Link
                    key={route.label}
                    className={cn(
                      "group p-3 font-bold hover:text-primary-foreground hover:bg-secondary/10 rounded-lg transition",
                      pathName !== "/" && "text-gray-600"
                      // {
                      //   "text-primary-foreground bg-secondary/10":
                      //     pathName === route.link,
                      // }
                    )}
                    href={route.link}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
      </div>
      <div className=" absolute z-[1000] left-0 top-0 w-full md:hidden">
        <div className="text-black w-full  cursor-pointer md:hidden">
          {!nav ? (
            <div className="relative">
              <div className="absolute top-4 right-4">
                <Link href="/">
                  <Image
                    className="object-contain"
                    width={150}
                    height={1}
                    alt="NovoTec Logo"
                    src="/novotec_logo_nobackground.png"
                    quality={100}
                  />
                </Link>
              </div>
              <div className="flex justify-between p-5 items-center">
                <Menu
                  className={cn(
                    " text-white",
                    pathName !== "/" && "text-gray-600"
                  )}
                  onClick={() => setNav(!nav)}
                />
                {/* <div className="flex flex-col items-center justify-center">
                <Link href="/">
                  <Image
                    className="object-contain"
                    width={150}
                    height={1}
                    alt="NovoTec Logo"
                    src="/novotec_logo_nobackground.png"
                    quality={100}
                  />
                </Link>
   
              </div> */}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-4 right-4">
                <Link href="/">
                  <Image
                    className="object-contain"
                    width={150}
                    height={1}
                    alt="NovoTec Logo"
                    src="/novotec_logo_nobackground.png"
                    quality={100}
                  />
                </Link>
              </div>
              <div className="p-5 flex flex-col w-2/3  items-start    bg-white">
                <X className="text-gray-600" onClick={() => setNav(!nav)} />

                <ul className="flex flex-col text-lg w-full mt-5 gap-y-4 items-center justify-start h-screen">
                  {routes.map((route) => (
                    <Link
                      onClick={() => setNav(!nav)}
                      key={route.label}
                      className="group p-3 w-full border-b font-medium hover:text-primary-foreground hover:bg-secondary/10 rounded-lg transition"
                      href={route.link}
                    >
                      {route.label}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
