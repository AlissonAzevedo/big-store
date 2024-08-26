"use client";

import { IProduct } from "@/@types/products";
import formatCurrency from "@/functions/formatCurrency";
import { Star } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="aspect-square transition-opacity animate-fadeIn">
      <Link
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
            <span
              className="absolute @[275px]/label:inline text-black items-center flex-none -mt-10 ml-2 flex border bg-white/70 backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white py-1 px-2 rounded-xl"
              title={`Avaliação: ${product?.rating?.rate} (${product?.rating?.count})`}
            >
              <Star className="text-yellow-400 mr-1 transition-opacity animate-fadeIn " />
              {product?.rating?.rate}
            </span>
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                {product.title}
              </h3>
              <p className="flex-none rounded-full bg-blue-600 p-2 text-white relative">
                {formatCurrency(product.price, "BRL")}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
