import ReferenceSingle from "@/components/referenceSingle";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <ReferenceSingle id={(await params).id} />
    </>
  );
}
