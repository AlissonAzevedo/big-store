"use client";

import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";

import Card from "../../Cards/CardProduct";

const Container = () => {
  const { data, isLoading } = useGetAllProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-12 lg:p-12 sm:p-6">
      {data?.map((product) => <Card key={product.id} product={product} />)}
    </ul>
  );
};

export default Container;
