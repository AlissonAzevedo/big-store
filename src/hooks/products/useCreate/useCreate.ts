import { IProduct } from "@/@types/products";
import { PRODUCTS } from "@/services/apiFakeStore/apiRoutes/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: IProduct) => {
      const data = await PRODUCTS.create(payload);
      return Promise.resolve(data);
    },
    onError: async (error: any) => {
      toast.error("Falha ao criar novo produto");
    },
    onSettled: () => queryClient.invalidateQueries(),
    onSuccess: () => {
      toast.success("Produto criado com sucesso");
    },
  });
};

export { useCreateProduct };
