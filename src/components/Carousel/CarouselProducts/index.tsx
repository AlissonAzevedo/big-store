"use client";
import { LoadingSkeletonCarousel } from "@/components/@shared/LoadingSkeletonCarousel/LoadingSkeletonCarousel";
import { CardProductFeatured } from "@/components/Cards/CardProductFeatured";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";

export function CarouselProducts() {
  const { data, isLoading } = useGetAllProducts();

  if (isLoading) {
    return <LoadingSkeletonCarousel />;
  }

  return (
    <div className="w-full flex justify-center items-center mb-12 px-4 sm:px-6 lg:px-8">
      <Carousel
        className="w-full max-w-6xl h-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {data?.map((product) => (
            <CarouselItem
              className="flex-shrink-0 md:basis-1/2 lg:basis-1/3 h-full w-full"
              key={product.id}
            >
              <div className="p-1 h-[300px] sm:h-[400px] lg:h-[300px] mx-auto flex items-center">
                <CardProductFeatured product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10" />
        <CarouselNext className="absolute right-0 z-10" />
      </Carousel>
    </div>
  );
}
