import { apiMethods } from "@/services/@shared/apiService";
import { instance } from "@/services/apiFakeStore/axiosConfig";

const PRODUCTS = apiMethods(instance, "/products");

export { PRODUCTS };
