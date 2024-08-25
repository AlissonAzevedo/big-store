import { IProduct } from "@/@types/products";
import { create } from "zustand";

interface ProductState {
  clearFilters: () => void;
  filterByName: (name: string) => void;
  filteredProducts: IProduct[];
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

const useProductStore = create<ProductState>((set) => ({
  clearFilters: () =>
    set((state) => ({
      filteredProducts: state.products,
    })),

  filterByName: (name) =>
    set((state) => ({
      filteredProducts: state.products.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase()),
      ),
    })),

  filteredProducts: [],

  products: [],

  setProducts: (products) =>
    set(() => ({ filteredProducts: products, products })),
}));

export { useProductStore };
