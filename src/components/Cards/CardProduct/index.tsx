"use client";

import { IProduct } from "@/@types/products";
import formatCurrency from "@/functions/formatCurrency";
import Image from "next/image";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="aspect-square transition-opacity animate-fadeIn">
      <a
        className="relative inline-block h-full w-full"
        href={`/products/${product.id}`}
      >
        <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
          <Image
            alt={product.title}
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 p-8"
            layout="fill"
            objectFit="contain"
            priority
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            src={product.image}
          />
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                {product.title}
              </h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                {formatCurrency(product.price, "BRL")}
                <span className="ml-1 inline @[275px]/label:inline">
                  {product?.rating?.rate} ({product?.rating?.count})
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
