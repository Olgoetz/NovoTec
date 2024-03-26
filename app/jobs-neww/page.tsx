import Jobs from "@/components/jobs";
import getContentByType from "@/lib/getContentByType";

export default async function Page() {
  const jobs = await getContentByType("job");
  return (
    <div>
      <Jobs jobs={jobs} />
    </div>
  );
}
