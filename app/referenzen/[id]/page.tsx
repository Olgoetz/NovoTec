import ReferenceSingle from "@/components/referenceSingle";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ReferenceSingle id={params.id} />
    </>
  );
}
