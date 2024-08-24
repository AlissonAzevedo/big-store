"use client";

import { LoadingSkeletonProduct } from "@/components/@shared/LoadingSkeletonProduct/LoadingSkeletonProduct";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";

import Card from "../../Cards/CardProduct";

const Container = () => {
  const { data, isLoading } = useGetAllProducts();

  if (isLoading) {
    return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-12">
        {[...Array(6)].map((_, index) => (
          <LoadingSkeletonProduct key={index} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-12">
      {data?.map((product) => <Card key={product.id} product={product} />)}
    </ul>
  );
};

export default Container;
