import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";
import getContentByType from "@/lib/getContentByType";
import { ListItemRenderer } from "@/lib/helpers";
import SimpleSlider from "./ui/slider";
import { CalendarCheck2, Building } from "lucide-react";
import data from "@/data/references_mock.json";
const ReferenceSingle = async ({ id }: { id: string }) => {
  // console.log(id);
  // const jobsData = await fetch(
  //   "https://my.api.mockaroo.com/jobs.json?key=e31556b0"
  // ).then((res) => res.json());
  //  const references = await getContentByType("reference");
  const references = data;
  // Find the specific job with the matching id from the params
  const reference: any = references.find((r: any) => r.sys.id === id);
  console.log("[ui.referenceSinglereference]", reference);
  if (!reference) {
    // Handle the case when the job with the specified id is not found
    return (
      <div className="my-52 text-center text-2xl text-red-500">
        No reference found!
      </div>
    );
  }

  return (
    <div className="py-20 mt-20">
      <SimpleSlider reference={reference} />

      <div className="grid grid-cols-2 text-center mt-10 bg-gray-400/10 p-4">
        <div className="text-8xl p-10">
          <p>
            <span className="text-secondary-foreground font-bold">Das</span>
          </p>
          <p>
            <span className="text-primary-foreground font-bold">Projekt</span>
          </p>
        </div>
        <div className="bg-gray-400/20 text-2xl my-4">
          <div className="p-8 h-full">
            <ul className="flex flex-col justify-between space-y-4 h-full">
              <li className="flex items-center text-sm">
                <Building width={26} height={26} />
                <p className="ml-8 text-left">{reference.fields.title}</p>
              </li>
              <li className="flex items-center">
                <CalendarCheck2 width={26} height={26} />
                <p className="ml-8 text-left">{reference.fields.duration}</p>
              </li>
              <li className="flex items-center">
                <CalendarCheck2 width={26} height={26} />
                <p className="ml-8 text-left">{reference.fields.duration}</p>
              </li>
              <li className="flex items-center">
                <CalendarCheck2 width={26} height={26} />
                <p className="ml-8 text-left">{reference.fields.duration}</p>
              </li>
              <li className="flex items-center">
                <CalendarCheck2 width={26} height={26} />
                <p className="ml-8 text-left">{reference.fields.duration}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    // <div className="py-20 mt-20">
    //   <div className="container ">
    //     <Card className="hyphens-auto md:mt-20 text-left">
    //       <CardHeader>
    //         <div className="grid grid-cols-[auto,1fr] gap-4 items-center justify-start">
    //           <div className="relative h-12 w-12">
    //             <Image
    //               src="/novotec_logo_pic_only.png"
    //               alt="NovoTec Logo"
    //               fill
    //             />
    //           </div>
    //           <CardTitle>
    //             <div className="flex flex-col space-y-2 text-primary-foreground">
    //               <h2>{reference.fields.title}</h2>
    //             </div>
    //           </CardTitle>
    //         </div>
    //       </CardHeader>
    //       <CardContent>
    //         <p className="font-bold py-3">Beschreibung:</p>
    //       </CardContent>
    //       <CardFooter>
    //         <div className="flex flex-col space-y-3">
    //           <Button asChild variant="outline" className="p-3 outline-none">
    //             <div className="flex items-center">
    //               <ChevronRightCircle />
    //               <Link
    //                 href="/referenzen"
    //                 className="p-2 outline-none rounded-md border-gray-500"
    //               >
    //                 Zurück zur Übersicht
    //               </Link>
    //             </div>
    //           </Button>
    //         </div>
    //       </CardFooter>
    //     </Card>
    //   </div>
    // </div>
  );
};

export default ReferenceSingle;
