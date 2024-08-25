"use client";
import { LoadingSkeletonProduct } from "@/components/@shared/LoadingSkeletonProduct/LoadingSkeletonProduct";
import Card from "@/components/Cards/CardProduct";
import { useGetAllProductsByCategories } from "@/hooks/categories/useGet/useGetAllByCategory";
import { useProductStore } from "@/stores/productsStore/products-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ContainerProductByCategory = () => {
  const params = useParams();

  const { data, isLoading } = useGetAllProductsByCategories(
    String(params.category),
  );

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
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 lg:mx-12 p-12">
        {[...Array(6)].map((_, index) => (
          <LoadingSkeletonProduct key={index} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-12 p-12">
      {filteredProducts?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
};

export { ContainerProductByCategory };
