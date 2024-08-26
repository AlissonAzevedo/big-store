"use client";

import { SearchInput } from "@/components/admin/Tables/TableProducts/SearchInput";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import formatCurrency from "@/functions/formatCurrency";
import { TranslateCategory } from "@/functions/translateCategory";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";
import { useProductStore } from "@/stores/productsStore/products-store";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
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
                  <TableCell>
                    <div
                      className={
                        "p-1 border border-neutral-300 dark:border-neutral-70 flex justify-center items-center rounded-lg"
                      }
                    >
                      <Image
                        alt={product.title}
                        className="object-cover rounded"
                        height={64}
                        src={product.image}
                        width={64}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.title}</TableCell>
                  <TableCell>{TranslateCategory(product.category)}</TableCell>
                  <TableCell className="text-center">
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell className="text-right">
                    <IconButton aria-label="edit" color="primary">
                      <EditOutlined />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <DeleteOutline />
                    </IconButton>
                  </TableCell>
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
