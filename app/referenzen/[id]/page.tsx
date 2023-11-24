import ReferenceSingle from "@/components/referenceSingle";

export const revalidate = 10;

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ReferenceSingle id={params.id} />
    </>
  );
}
