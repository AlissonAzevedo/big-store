import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonGridProducts = () => {
  return (
    <section className="flex w-full h-[600px] gap-4 p-16">
      <div className="flex-[2] flex md:min-w-[800px]">
        <Skeleton className="h-full w-full rounded-lg" />
      </div>
      <div className="flex-[1] flex flex-col gap-4">
        <Skeleton className="flex-grow h-[200px] rounded-lg" />
        <Skeleton className="flex-grow h-[200px] rounded-lg" />
      </div>
    </section>
  );
};

export { LoadingSkeletonGridProducts };
