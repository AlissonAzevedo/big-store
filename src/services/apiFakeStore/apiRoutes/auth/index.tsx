import { apiMethods } from "@/services/@shared/apiService";
import { instance } from "@/services/apiFakeStore/axiosConfig";

const AUTH = apiMethods(instance, "/auth/login");

export { AUTH };
