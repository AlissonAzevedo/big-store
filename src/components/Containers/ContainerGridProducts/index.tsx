"use client";

import { LoadingSkeletonGridProducts } from "@/components/@shared/LoadingSkeletonGridProducts/LoadingSkeletonGridProducts";
import { CardProductFeatured } from "@/components/Cards/CardProductFeatured";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";

const ContainerGridProducts = () => {
  const { data, isLoading } = useGetAllProducts();

  if (isLoading || !data || data.length < 3) {
    return <LoadingSkeletonGridProducts />;
  }

  return (
    <section className="flex w-full h-[600px] gap-4 sm:p-16 p-10 sm:flex-row flex-col">
      <div className="flex-[2] flex md:min-w-[800px]">
        <CardProductFeatured product={data[0]} />
      </div>
      <div className="flex flex-col gap-4 sm:flex-[1] flex-[2] md:w-full">
        {data.slice(1, 3).map((product, index) => (
          <div className="flex-grow " key={index}>
            <CardProductFeatured product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ContainerGridProducts };
