import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";

const Bold = ({ children }: { children: any }) => (
  <span className="font-bold">{children}</span>
);

const Text = ({ children }: { children: any }) => (
  <p className="align-center">{children}</p>
);

const renderOptions = {
  preserveWhitespace: true,
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="py-2">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc pl-4 py-2">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
  },
};
const JobSingle = async ({
  titleUrlFriendly,
  jobs,
}: {
  titleUrlFriendly: any;
  jobs: any;
}) => {
  console.log("[ui.jobSingle]", jobs);
  // Find the specific job with the matching id from the params
  const job: any = jobs.find(
    (j: any) => j.fields.titleUrlFriendly === titleUrlFriendly
  );

  if (!job) {
    // Handle the case when the job with the specified id is not found
    return (
      <div className="my-40 text-center text-3xl">
        Job nicht gefunden! Bitte überprüfe den seo friendly Eintrag in
        Contentful
      </div>
    );
  }

  return (
    <div className="py-20 mt-12">
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
            {documentToReactComponents(
              job.fields.descriptionLong,
              renderOptions
            )}
            <p className="font-bold py-3">Aufgaben:</p>
            {documentToReactComponents(job.fields.tasks, renderOptions)}
            <p className="font-bold py-3">Profil:</p>
            {documentToReactComponents(job.fields.profile, renderOptions)}
            <p className="font-bold py-3">Wir bieten Dir:</p>
            {documentToReactComponents(job.fields.benefits, renderOptions)}
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-3">
              {/* <p>
                Bewerbung an{" "}
                <a
                  className="text-novo-red"
                  href="mailto:bewerbung@novotec-gruppe.de"
                >
                  bewerbung@novotec-gruppe.de
                </a>
              </p> */}
              <Link href="/jobs/festanstellung" className="w-full">
                <Button
                  asChild
                  variant="outline"
                  className="p-3 outline-none w-full"
                >
                  <div className="p-2 outline-none rounded-md border-gray-500">
                    <ChevronRightCircle className="mr-2" />
                    Zurück zur Übersicht
                  </div>
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default JobSingle;
