"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeletonCarousel = () => {
  return (
    <Card className="w-full h-full animate-pulse">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <div className="relative w-full h-48 sm:h-64 lg:h-80">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
};

export { LoadingSkeletonCarousel };
