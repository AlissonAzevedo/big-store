import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonProductDetail = () => {
  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
      <div className="h-full w-full basis-full lg:basis-4/6">
        <Skeleton className="aspect-square h-full max-h-[550px] w-full" />
      </div>
      <div className="basis-full lg:basis-2/6">
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-6 w-1/4 rounded-full bg-blue-600" />
        </div>
        <div className="mb-8">
          <Skeleton className="h-4 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="h-12 w-full rounded-lg bg-blue-600" />
      </div>
    </div>
  );
};

export { LoadingSkeletonProductDetail };
