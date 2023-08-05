import React from "react";
import { Job } from "@/types/job";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";
const JobSingle = async ({ id }: { id: string }) => {
  console.log(id);
  const jobsData = await fetch(
    "https://my.api.mockaroo.com/jobs.json?key=e31556b0"
  ).then((res) => res.json());

  // Find the specific job with the matching id from the params
  const job: Job = jobsData.find((job: Job) => job.id === id);

  if (!job) {
    // Handle the case when the job with the specified id is not found
    return <div>Job not found!</div>;
  }

  return (
    <div className="py-20 mt-10">
      <div className="container ">
        <Card className="my-10 text-justify">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center">
                <Award className="h-10 w-10 mr-4" />
                {job.title}
              </div>
            </CardTitle>
            <CardDescription>Level: {job.level}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold py-3">Beschreibung:</p>
            <p>{job.description}</p>
            <p className="font-bold py-3">Aufgaben:</p>
            <p>{job.tasks}</p>
            <p className="font-bold py-3">Verantwortlichkeiten:</p>
            <p>{job.responsibilities}</p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col space-y-3">
              <p>Bewerbung an XYZ</p>
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
