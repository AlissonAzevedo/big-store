import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonProduct = () => {
  return (
    <li className="aspect-square animate-pulse">
      <div className="relative inline-block h-full w-full">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-gray-200 dark:bg-gray-700">
          <Skeleton className="h-24 w-24 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
          <div className="flex items-center rounded-full border bg-gray-200 dark:bg-gray-700 p-1 text-xs font-semibold text-transparent">
            <Skeleton className="h-4 flex-grow mr-4 pl-2 rounded" />
            <Skeleton className="h-4 w-12 rounded-full p-2" />
          </div>
        </div>
      </div>
    </li>
  );
};

export { LoadingSkeletonProduct };
