import { IProduct } from "@/@types/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  addProduct: (product: IProduct) => void;
  cart: ({ quantity: number } & IProduct)[];
  clearCart: () => void;
  decreaseQuantity: (productId: number) => void;
  handleViewCart: () => void;
  increaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
  showCart: boolean;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
              showCart: true,
            };
          } else {
            return {
              cart: [...state.cart, { ...product, quantity: 1 }],
              showCart: true,
            };
          }
        }),

      cart: [],
      clearCart: () => set({ cart: [] }),

      decreaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      handleViewCart: () =>
        set((state) => ({
          showCart: !state.showCart,
        })),

      increaseQuantity: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),

      removeProduct: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      showCart: false,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useCartStore };
