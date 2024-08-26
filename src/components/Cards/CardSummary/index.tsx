import { Button } from "@/components/ui/button";
import formatCurrency from "@/functions/formatCurrency";
import { useCart } from "@/hooks/cart/useCart";
import React from "react";
import toast from "react-hot-toast";

interface CardSummaryProps {
  shipping: number;
  taxes: number;
}

const CardSummary = ({ shipping, taxes }: CardSummaryProps) => {
  const { clearCart, total } = useCart();
  const [loading, setLoading] = React.useState(false);

  const BuyProducts = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success("Compra realizada com sucesso!");
      clearCart();
      setLoading(false);
    }, 2000);
  };

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

      <Button
        className="w-full rounded-lg bg-blue-600 py-4 text-white transition-all hover:bg-blue-700 h-12"
        disabled={loading}
        onClick={BuyProducts}
      >
        Comprar
      </Button>
    </div>
  );
};

export { CardSummary };
