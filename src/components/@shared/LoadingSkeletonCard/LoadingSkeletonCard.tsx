const SkeletonCard = () => {
  return (
    <li className="aspect-square animate-pulse">
      <div className="relative inline-block h-full w-full">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-gray-200 dark:bg-gray-700">
          <div className="h-24 w-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
          <div className="flex items-center rounded-full border bg-gray-200 dark:bg-gray-700 p-1 text-xs font-semibold text-transparent">
            <h3 className="mr-4 flex-grow pl-2 bg-gray-300 dark:bg-gray-600 h-4 rounded"></h3>
            <p className="flex-none rounded-full bg-gray-300 dark:bg-gray-600 p-2 text-transparent h-4 w-12"></p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SkeletonCard;
