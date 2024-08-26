import { IProduct } from "@/@types/products";
import { CATEGORY } from "@/services/apiFakeStore/apiRoutes/categories";
import { useQuery } from "@tanstack/react-query";

function useGetAllProductsByCategories(category: string) {
  const { getList } = CATEGORY;

  return useQuery({
    queryFn: async (): Promise<IProduct[]> => {
      return await getList(category);
    },
    queryKey: ["products", "categories"],
    refetchOnWindowFocus: false,
  });
}

export { useGetAllProductsByCategories };
