import JobSingle from "@/components/jobSingle";
import { Job } from "@/types/job";

export async function generateStaticParams() {
  const data = await fetch(
    "https://my.api.mockaroo.com/jobs.json?key=e31556b0"
  ).then((res) => res.json());

  return data.map((job: Job) => job.id);
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <JobSingle id={params.id} />
    </>
  );
}
