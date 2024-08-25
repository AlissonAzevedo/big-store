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
  total: number;
}

const calculateTotal = (cart: ({ quantity: number } & IProduct)[]) => {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      addProduct: (product) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id,
          );

          let newCart;
          if (existingProduct) {
            newCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          } else {
            newCart = [...state.cart, { ...product, quantity: 1 }];
          }

          return {
            cart: newCart,
            showCart: true,
            total: calculateTotal(newCart),
          };
        }),

      cart: [],

      clearCart: () =>
        set(() => ({
          cart: [],
          total: 0,
        })),

      decreaseQuantity: (productId) =>
        set((state) => {
          const newCart = state.cart
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0);

          return {
            cart: newCart,
            total: calculateTotal(newCart),
          };
        }),

      handleViewCart: () =>
        set((state) => ({
          showCart: !state.showCart,
        })),

      increaseQuantity: (productId) =>
        set((state) => {
          const newCart = state.cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
          return {
            cart: newCart,
            total: calculateTotal(newCart),
          };
        }),

      removeProduct: (productId) =>
        set((state) => {
          const newCart = state.cart.filter((item) => item.id !== productId);
          return {
            cart: newCart,
            total: calculateTotal(newCart),
          };
        }),

      showCart: false,

      total: 0,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { useCartStore };
