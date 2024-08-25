import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonGridProducts = () => {
  return (
    <section className="flex w-full h-[600px] gap-4 p-16 sm:flex-row flex-col">
      <div className="flex-[2] flex md:min-w-[800px]">
        <Skeleton className="sm:h-full w-full rounded-lg h-[200px]" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-[1] flex-[2] md:w-full">
        <Skeleton className="flex-grow h-[200px] rounded-lg" />
        <Skeleton className="flex-grow h-[200px] rounded-lg" />
      </div>
    </section>
  );
};

export { LoadingSkeletonGridProducts };
