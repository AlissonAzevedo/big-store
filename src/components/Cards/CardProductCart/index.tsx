"use client";

import { IProduct } from "@/@types/products";
import Image from "next/image";
import React from "react";

interface CardProductCartProps {
  onDecreaseQuantity: (id: number) => void;
  onIncreaseQuantity: (id: number) => void;
  onRemove: (id: number) => void;
  product: { quantity: number } & IProduct;
}

const CardProductCart: React.FC<CardProductCartProps> = ({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove,
  product,
}) => {
  return (
    <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
      <div className="relative flex w-full flex-row justify-between px-1 py-4 items-center">
        <div className="absolute z-40 -ml-1 -mt-12">
          <button
            aria-label="Remove cart item"
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
            onClick={() => onRemove(product.id)}
          >
            <svg
              className="mx-[1px] h-4 w-4 text-white dark:text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
              <span className="leading-tight">{product.title}</span>
            </div>
          </a>
        </div>

        <div className="flex h-16 flex-col justify-between">
          <p className="flex justify-end space-y-2 text-right text-sm">
            R$ {product.price.toFixed(2)}
          </p>

          <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
            <button
              aria-label="Reduce item quantity"
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              onClick={() => onDecreaseQuantity(product.id)}
            >
              <svg
                className="h-4 w-4 dark:text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p className="w-6 text-center">
              <span className="w-full text-sm">{product.quantity}</span>
            </p>

            <button
              aria-label="Increase item quantity"
              className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
              onClick={() => onIncreaseQuantity(product.id)}
            >
              <svg
                className="h-4 w-4 dark:text-neutral-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.5v15m7.5-7.5h-15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export { CardProductCart };
