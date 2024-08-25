"use client";

import { IProduct } from "@/@types/products";
import { Button } from "@/components/ui/button";
import formatCurrency from "@/functions/formatCurrency";
import { truncateString } from "@/functions/truncateString";
import { Add, Clear, Remove } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

interface CardProductCartProps {
  onDecreaseQuantity: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
  onRemove: (id: number) => void;
  product: { quantity: number } & IProduct;
}

const CardProductCart = ({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove,
  product,
}: CardProductCartProps) => {
  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
      <div className="relative flex w-full flex-row justify-between px-1 py-4 items-center">
        <div className="absolute z-40 -ml-1 -mt-12">
          <Button
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full p-1 bg-neutral-50"
            onClick={() => onRemove(product.id)}
            size="icon"
            variant="ghost"
          >
            <Clear className="mx-[1px] h-5 w-5 text-neutral-500 dark:text-black" />
          </Button>
        </div>

        <div className="flex flex-row">
          <div className="p-2 flex justify-center items-center relative h-14 w-24 overflow-hidden rounded-md border border-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Image
              alt={product.title}
              className="h-full w-full object-cover"
              height={64}
              layout="responsive"
              src={product.image}
              width={64}
            />
          </div>
          <a className="z-30 ml-2 flex flex-row space-x-4" href="#">
            <div className="flex flex-1 flex-col text-base">
              <span className="leading-tight" title={product.title}>
                {truncateString(product.title, 25)}
              </span>
            </div>
          </a>
        </div>

        <div className="flex h-16 flex-col justify-between">
          <p className="flex justify-end space-y-2 text-right text-sm">
            {product.price && formatCurrency(product.price)}
          </p>

          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700 p-1">
            <Button
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              onClick={() => onDecreaseQuantity(product.id)}
              size="icon"
              variant="ghost"
            >
              <Remove className="h-4 w-4 dark:text-neutral-500" />
            </Button>

            <p className="w-6 text-center">
              <span className="w-full text-sm">{product.quantity}</span>
            </p>

            <Button
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              onClick={() => onIncreaseQuantity(product.id)}
              size="icon"
              variant="ghost"
            >
              <Add className="h-4 w-4 dark:text-neutral-500" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export { CardProductCart };
