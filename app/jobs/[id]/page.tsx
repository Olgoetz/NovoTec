import JobSingle from "@/components/jobSingle";

export const revalidate = 10;

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <JobSingle id={params.id} />
    </>
  );
}
