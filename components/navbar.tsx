"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const routes = [
  {
    label: "Start",
    link: "/",
  },
  {
    label: "Leistungen",
    link: "/services",
  },
  {
    label: "Über Uns",
    link: "/ueberuns",
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
    label: "Kontakt",
    link: "/kontakt",
  },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div
        id="top"
        className="px-5 z-50 flex justify-between items-center fixed top-0 left-0 w-full h-[80px] bg-white"
      >
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <Image width={200} height={20} alt="Logo" src="/novotec_logo.jpg" />
          </Link>
        </div>
        <div className=" text-gray-600 ">
          <div className="max-w-[800px] space-x-3 hidden md:flex flex-1 text-center">
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
        <div className="text-black cursor-pointer md:hidden w-full">
          {!nav ? (
            <div className="flex justify-between items-center">
              <Menu onClick={() => setNav(!nav)} />
              <div className="">
                <Link href="/">
                  <Image
                    width={150}
                    height={10}
                    alt="Logo"
                    src="/novotec_logo.jpg"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <X onClick={() => setNav(!nav)} />
              <div className="">
                <Link href="/">
                  <Image
                    width={150}
                    height={10}
                    alt="Logo"
                    src="/novotec_logo.jpg"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>

        {nav && (
          <div className="fixed top-[80px] left-0 bg-white w-full">
            <ul className="flex flex-col text-2xl gap-y-7 ml-3 mt-10 items-center h-screen">
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
        )}
      </div>
    </>
  );
};
