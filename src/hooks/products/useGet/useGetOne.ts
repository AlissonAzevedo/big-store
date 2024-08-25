import { IProduct } from "@/@types/products";
import { PRODUCTS } from "@/services/apiFakeStore/urls/products";
import { useQuery } from "@tanstack/react-query";

const data = {
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: {
    count: 120,
    rate: 3.9,
  },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};

function useGetOneProduct(id: string) {
  const { getOne } = PRODUCTS;

  return useQuery({
    queryFn: async (): Promise<IProduct> => {
      return await getOne(id);
      // return data;
    },
    queryKey: ["products", id],
    refetchOnWindowFocus: false,
  });
}

export { useGetOneProduct };
