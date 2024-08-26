import { AUTH } from "@/services/apiFakeStore/apiRoutes/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { password: string; username: string }) => {
      const data = await AUTH.create(payload);
      return Promise.resolve(data);
    },
    onError: async (error: any) => {
      toast.error("Falha ao fazer login");
    },
    onSettled: () => queryClient.invalidateQueries(),
    onSuccess: () => {
      toast.success("Login feito com sucesso");
    },
  });
};

export { useLogin };
