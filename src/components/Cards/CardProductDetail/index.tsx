"use client";

import { LoadingSkeletonProductDetail } from "@/components/@shared/LoadingSkeletonProductDetail/LoadingSkeletonProductDetail";
import { Button } from "@/components/ui/button";
import { useGetOneProduct } from "@/hooks/products/useGet/useGetOne";
import { AddShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";

const ProductCardDetail = () => {
  const { data, isLoading } = useGetOneProduct("1");

  if (isLoading) {
    return <LoadingSkeletonProductDetail />;
  }

  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
      <div className="h-full w-full basis-full lg:basis-4/6">
        <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
          <img
            alt={data?.title}
            className="h-full w-full object-contain"
            src={data?.image}
          />
        </div>
      </div>
      <div className="basis-full lg:basis-2/6">
        <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
          <h1 className="mb-2 text-5xl font-medium">{data?.title}</h1>
          <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
            <p>R$ {data?.price}</p>
          </div>
        </div>
        <dl className="mb-8">
          <dt className="mb-4 text-sm uppercase tracking-wide">Descrição</dt>
          <dd className="text-sm text-neutral-600 dark:text-neutral-400">
            {data?.description}
          </dd>
        </dl>
        <Button className="w-full rounded-lg bg-blue-600 py-4 text-white transition-all hover:bg-blue-700 h-12">
          <AddShoppingCart />
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCardDetail;
