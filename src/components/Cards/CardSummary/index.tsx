import formatCurrency from "@/functions/formatCurrency";
import { useCart } from "@/hooks/cart/useCart";
import React from "react";

interface CardSummaryProps {
  shipping: number;
  taxes: number;
}

const CardSummary = ({ shipping, taxes }: CardSummaryProps) => {
  const { total } = useCart();

  return (
    <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400 w-full">
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
        <p>Taxas</p>
        <p className="text-right text-base text-black dark:text-white">
          {formatCurrency(taxes)}
        </p>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
        <p>Frete</p>
        <p className="text-right">{formatCurrency(shipping)}</p>
      </div>
      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
        <p>Total</p>
        <p className="text-right text-base text-black dark:text-white">
          {formatCurrency(total)}
        </p>
      </div>
    </div>
  );
};

export { CardSummary };
