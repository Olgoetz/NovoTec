import React from "react";
import { Job } from "@/types/job";
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
const JobSingle = async ({ id }: { id: string }) => {
  // console.log(id);
  // const jobsData = await fetch(
  //   "https://my.api.mockaroo.com/jobs.json?key=e31556b0"
  // ).then((res) => res.json());
  const jobs = await getContentByType("job");

  // Find the specific job with the matching id from the params
  const job: any = jobs.find((j: any) => j.sys.id === id);

  if (!job) {
    // Handle the case when the job with the specified id is not found
    return <div className="mt-32">Job not found!</div>;
  }

  return (
    <div className="py-20 mt-20">
      <div className="container ">
        <Card className="hyphens-auto md:mt-20 text-left">
          <CardHeader>
            <div className="grid grid-cols-[auto,1fr] gap-4 items-center justify-start">
              <div className="relative h-12 w-12">
                <Image
                  src="/novotec_logo_pic_only.png"
                  alt="NovoTec Logo"
                  fill
                />
              </div>
              <CardTitle>
                <div className="flex flex-col space-y-2 text-primary-foreground">
                  <h2>{job.fields.title}</h2>
                  <h3 className="text-sm">{job.fields.location}</h3>
                </div>
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-bold py-3">Beschreibung:</p>
            <p>{job.fields.longDescription}</p>
            <p className="font-bold py-3">Aufgaben:</p>
            {ListItemRenderer({ content: job.fields.tasks })}
            <p className="font-bold py-3">Profil:</p>
            {ListItemRenderer({ content: job.fields.profile })}
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-3">
              <p>
                Bewerbung an{" "}
                <a
                  className="text-novo-red"
                  href="mailto:bewerbung@novotec-koeln.de"
                >
                  bewerbung@novotec-koeln.de
                </a>
              </p>
              <Button asChild variant="outline" className="p-3 outline-none">
                <div className="flex items-center">
                  <ChevronRightCircle />
                  <Link
                    href="/jobs"
                    className="p-2 outline-none rounded-md border-gray-500"
                  >
                    Zurück zur Übersicht
                  </Link>
                </div>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default JobSingle;
