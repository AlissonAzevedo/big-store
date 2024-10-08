import { IProduct } from "@/@types/products";
import { PRODUCTS } from "@/services/apiFakeStore/apiRoutes/products";
import { useQuery } from "@tanstack/react-query";

function useGetOneProduct(id: string) {
  const { getOne } = PRODUCTS;

  return useQuery({
    queryFn: async (): Promise<IProduct> => {
      return await getOne(id);
    },
    queryKey: ["products", id],
    refetchOnWindowFocus: false,
  });
}

export { useGetOneProduct };
