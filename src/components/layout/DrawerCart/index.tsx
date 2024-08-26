"use client";

import { CardProductCart } from "@/components/Cards/CardProductCart";
import { CardSummary } from "@/components/Cards/CardSummary";
import { CartButton } from "@/components/layout/NavBar/Cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/cart/useCart";
import React, { useState } from "react";

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
    <Sheet modal={showCart}>
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
          {cart.length > 0 && <CardSummary shipping={0} taxes={0} />}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { DrawerCart };
