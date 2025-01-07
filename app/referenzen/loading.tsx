import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-[1000px] mx-auto h-screen">
      <div className="grid grid-cols-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={`skeleton-${i}`} // Prefix the index to avoid any potential conflicts
            className="flex items-center justify-center mt-48 space-x-2"
          >
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
