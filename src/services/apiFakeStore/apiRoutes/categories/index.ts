import { apiMethods } from "@/services/@shared/apiService";
import { instance } from "@/services/apiFakeStore/axiosConfig";

const CATEGORIES = apiMethods(instance, "/products/categories");
const CATEGORY = apiMethods(instance, "/products/category");

export { CATEGORIES, CATEGORY };
