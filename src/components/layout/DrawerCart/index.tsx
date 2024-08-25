"use client";

import { CardProductCart } from "@/components/Cards/CardProductCart";
import { CartButton } from "@/components/layout/NavBar/Cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/cart/useCart";
import { useCartStore } from "@/stores/cartStore/cart-store";
import React from "react";

const DrawerCart = () => {
  const {
    cart,
    decreaseQuantity,
    handleViewCart,
    increaseQuantity,
    removeProduct,
    showCart,
  } = useCart();

  return (
    <Sheet defaultOpen={false} modal={showCart}>
      <SheetTrigger asChild>
        <CartButton onClick={handleViewCart} />
      </SheetTrigger>

      <SheetContent onEscapeKeyDown={handleViewCart} side={"right"}>
        <SheetHeader>
          <SheetTitle>Meu Carrinho</SheetTitle>
        </SheetHeader>
        <ul className="flex-grow overflow-auto py-4">
          {cart.length === 0 && (
            <div className="flex justify-center items-center h-32">
              <p className="text-lg">Seu carrinho está vazio</p>
            </div>
          )}
          {cart.map((item) => (
            <CardProductCart
              key={item.id}
              onDecreaseQuantity={decreaseQuantity}
              onIncreaseQuantity={increaseQuantity}
              onRemove={removeProduct}
              product={item}
            />
          ))}
        </ul>
        <SheetFooter>
          {/*<SheetClose asChild>*/}
          {/*  <Button type="submit">Save changes</Button>*/}
          {/*</SheetClose>*/}
          {/*<SheetClose asChild>*/}
          {/*  <Button type="button">Cancel</Button>*/}
          {/*</SheetClose>*/}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { DrawerCart };
