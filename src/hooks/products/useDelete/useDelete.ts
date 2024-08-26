import { PRODUCTS } from "@/services/apiFakeStore/apiRoutes/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useDeleteProdct(invalidateQuery: string[]) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const data = PRODUCTS.delete(id);
      return Promise.resolve(data);
    },
    onError: async (error: any) => {
      toast.error("Falha ao deletar produto");
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: invalidateQuery }),
    onSuccess: () => {
      toast.success("Produto deletado com sucesso");
    },
  });
}

export { useDeleteProdct };
