"use client";

import { LoadingSkeletonProduct } from "@/components/@shared/LoadingSkeletonProduct/LoadingSkeletonProduct";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";
import { useProductStore } from "@/stores/productsStore/products-store";
import { useEffect } from "react";

import Card from "../../Cards/CardProduct";

const Container = () => {
  const { data, isLoading } = useGetAllProducts();
  const { filteredProducts, setProducts } = useProductStore((state) => ({
    filteredProducts: state.filteredProducts,
    setProducts: state.setProducts,
  }));

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

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
      {filteredProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default Container;
