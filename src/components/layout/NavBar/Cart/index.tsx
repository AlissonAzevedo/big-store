"use client";
import { useCartStore } from "@/stores/cartStore/cart-store";
import { ShoppingCart } from "@mui/icons-material";
import React from "react";

const CartButton = React.forwardRef<HTMLButtonElement, { onClick: () => void }>(
  ({ onClick }, ref) => {
    const cart = useCartStore((state) => state.cart);

    return (
      <div className="flex justify-end md:w-1/3">
        <button onClick={onClick} ref={ref}>
          <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
            <ShoppingCart />
            {cart.length > 0 && (
              <div className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
                {cart.length}
              </div>
            )}
          </div>
        </button>
      </div>
    );
  },
);

export { CartButton };
