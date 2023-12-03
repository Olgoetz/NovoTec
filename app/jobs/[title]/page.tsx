import JobSingle from "@/components/jobSingle";
import getContentByType from "@/lib/getContentByType";

export async function generateStaticParams() {
  const jobs = await getContentByType("job");

  return jobs.map((job: any) => ({
    title: job.fields.titleUrlFriendly,
  }));
}
export default async function Page({ params }: { params: { title: string } }) {
  const jobs = await getContentByType("job");
  return (
    <>
      <JobSingle jobs={jobs} titleUrlFriendly={params.title} />
    </>
  );
}
