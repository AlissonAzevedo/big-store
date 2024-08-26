import { CATEGORIES } from "@/services/apiFakeStore/apiRoutes/categories";
import { useQuery } from "@tanstack/react-query";

const data = ["electronics", "jewelery", "men's clothing", "women's clothing"];

function useGetAllCategories() {
  const { getList } = CATEGORIES;

  return useQuery({
    queryFn: async (): Promise<string[]> => {
      return await getList();
    },
    queryKey: ["categories"],
    refetchOnWindowFocus: false,
  });
}

export { useGetAllCategories };
