import { IProduct } from "@/@types/products";
import { PRODUCTS } from "@/services/apiFakeStore/apiRoutes/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useUpdateProduct(invalidateQuery?: string[]) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: IProduct) => {
      const data = await PRODUCTS.update(payload, String(payload.id));
      return Promise.resolve(data);
    },
    onError: async (error: any) => {
      toast.error("Falha ao atualizar produto");
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: invalidateQuery }),
    onSuccess: () => {
      toast.success("Produto atualizado com sucesso");
    },
  });
}

export { useUpdateProduct };
