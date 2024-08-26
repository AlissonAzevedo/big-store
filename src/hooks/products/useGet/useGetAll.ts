import { IProduct } from "@/@types/products";
import { PRODUCTS } from "@/services/apiFakeStore/apiRoutes/products";
import { useQuery } from "@tanstack/react-query";

function useGetAllProducts() {
  const { getList } = PRODUCTS;

  return useQuery({
    queryFn: async (): Promise<IProduct[]> => {
      return await getList();
    },
    queryKey: ["products"],
    refetchOnWindowFocus: false,
  });
}

export { useGetAllProducts };
