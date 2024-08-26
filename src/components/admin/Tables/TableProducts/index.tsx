"use client";

import { SearchInput } from "@/components/admin/Tables/TableProducts/SearchInput";
import { TableProductItem } from "@/components/admin/Tables/TableProducts/TableProductItem";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";
import { useProductStore } from "@/stores/productsStore/products-store";
import React, { useEffect, useState } from "react";

const TableProducts = () => {
  const { data: products, isLoading } = useGetAllProducts();
  const { filteredProducts, setProducts } = useProductStore((state) => ({
    filteredProducts: state.filteredProducts,
    setProducts: state.setProducts,
  }));

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (isLoading) {
    return (
      <div
        className={
          "p-1 border border-neutral-300 dark:border-neutral-70 rounded-lg h-[600px] overflow-hidden"
        }
      >
        <div className="overflow-y-auto h-full gap-3 flex flex-col">
          {[...Array(6)].map((_, index) => (
            <Skeleton className={"h-36"} key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={"flex w-full flex-col"}>
      <div className={"flex my-2"}>
        <SearchInput />
      </div>
      <div
        className={
          "p-1 border border-neutral-300 dark:border-neutral-70 rounded-lg h-[600px] overflow-hidden"
        }
      >
        <div className="overflow-y-auto h-full">
          <Table>
            <TableHeader popover={"manual"}>
              <TableRow>
                <TableHead className="w-[150px]"></TableHead>
                <TableHead className="w-[300px]">Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts?.length === 0 && (
                <TableRow>
                  <TableCell className="text-center" colSpan={5}>
                    Nenhum produto encontrado
                  </TableCell>
                </TableRow>
              )}
              {filteredProducts?.map((product) => (
                <TableRow key={product.id}>
                  <TableProductItem product={product} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export { TableProducts };
