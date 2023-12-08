import React from "react";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

import getContentByType from "@/lib/getContentByType";

// const getPhotos = async () => {
//   try {
//     const result = await unsplashAPi.search.getPhotos({
//       query: "building",
//       orientation: "landscape",
//     });

//     if (result.type === "success") {
//       const photos: Photos = result.response;

//       return photos.results;
//     } else {
//       console.error("Error fetching data:", result.errors);
//       return { message: result.errors, status: result.status };
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { message: "Internal error", status: 500 };
//   }
// };

const References: React.FC = async () => {
  const response: any = await getContentByType("reference");
  console.log("[ui.references]", response);
  //console.log("[ui.references]", response[0].fields.photos[0]);
  return (
    <div className="w-full mt-10 md:mt-20 py-20">
      <div className="container">
        <h1 className="text-2xl h- uppercase text-center md:text-left font-semibold mb-10 border-b pb-2">
          Referenzen
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mx-auto">
          {response.map((el: any) => (
            <div
              key={el.sys.id}
              className="space-y-6 border relative p-3 pb-2 h-auto"
            >
              <div
                key={el.sys.id}
                className="relative w-full h-[260px] md:h-[400px]"
              >
                <Image
                  fill
                  src={`https:${el.fields.photos[0].fields.file.url}`}
                  alt={el.fields.title}
                />
              </div>
              <div className="w-fit p-3 bottom-[160px] bg-white absolute right-7 text-center border">
                <p>{el.fields.category}</p>
              </div>
              <h4 className="text-left text-lg md:text-2xl py-3 text-black font-semibold">
                {/* {console.log(el)} */}
                {el.fields.location}, {el.fields.title}
              </h4>

              <Button
                asChild
                variant="outline"
                className="bg-primary-foreground hover:bg-secondary-foreground w-full mt-5"
              >
                <Link
                  href={`/referenzen/${el.sys.id}`}
                  className="text-white hover:text-white font-semibold"
                >
                  Details ansehen
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
