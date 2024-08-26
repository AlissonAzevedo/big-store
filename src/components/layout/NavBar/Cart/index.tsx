"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore/cart-store";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";

const CartButton = React.forwardRef<HTMLButtonElement, { onClick: () => void }>(
  ({ onClick }, ref) => {
    const cart = useCartStore((state) => state.cart);

    return (
      <div className="flex justify-end md:w-1/3">
        <Button
          className={
            "p-2 w-12 relative flex items-center justify-center rounded-md text-black transition-colors dark:border-neutral-700 dark:text-white"
          }
          onClick={onClick}
          ref={ref}
          size={"icon"}
          variant={"outline"}
        >
          <ShoppingCartOutlined />
          {cart.length > 0 && (
            <div className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white text-xs">
              {cart.length}
            </div>
          )}
        </Button>
      </div>
    );
  },
);

export { CartButton };
