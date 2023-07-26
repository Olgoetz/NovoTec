"use client";

import React, { FC, useEffect, useState } from "react";
import NovoTec from "./novotec";
import { unsplashAPi } from "@/lib/unsplash";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
const content = [
  {
    label: "Haus 1",
    task: "Umbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
  {
    label: "Haus 2",
    task: "Umbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
  {
    label: "Haus 3",
    task: "Umbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
  {
    label: "Haus 4",
    task: "Mierausbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
  {
    label: "Haus 5",
    task: "Mierausbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
  {
    label: "Haus 6",
    task: "Mierausbau",
    excerpt:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet...",
  },
];

const References: React.FC = () => {
  const [photos, setPhotos] = useState<Photos | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await unsplashAPi.search.getPhotos({
          query: "building",
          orientation: "landscape",
        });
        if (result.type === "success") {
          const photos = result.response;
          setPhotos(photos);
          console.log(photos);
        } else {
          console.error("Error fetching data:", result.errors);
          setPhotos(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPhotos(null);
      }
    };
    fetchData();
  }, []);

  if (photos === null) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="referenzen" className="w-full py-20">
        <div className="container">
          <h2 className="text-2xl uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
            <NovoTec /> :: Referenzen
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {content.map((el, index) => (
              <div key={index} className="space-y-6 border p-3 pb-2">
                <div className="relative w-full h-52">
                  <Image
                    fill
                    src={photos.results[index].urls.regular}
                    alt="building"
                    className="object-fill"
                  />
                </div>
                <h4 className="text-center text-white py-3 bg-primary font-semibold">
                  {el.label}
                </h4>
                <p>{el.excerpt}</p>
                <Button asChild variant="outline" className="w-full mt-5">
                  <Link href="/">Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default References;
