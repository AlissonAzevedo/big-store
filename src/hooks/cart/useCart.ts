import { useCartStore } from "@/stores/cartStore/cart-store";

const useCart = () => {
  const cart = useCartStore((state) => state.cart);
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const handleViewCart = useCartStore((state) => state.handleViewCart);
  const showCart = useCartStore((state) => state.showCart);
  const total = useCartStore((state) => state.total);

  return {
    addProduct,
    cart,
    clearCart,
    decreaseQuantity,
    handleViewCart,
    increaseQuantity,
    removeProduct,
    showCart,
    total,
  };
};

export { useCart };
