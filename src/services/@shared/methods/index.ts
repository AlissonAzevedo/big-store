import { Axios } from "axios";

/**
 * Envia uma requisição GET para a URL especificada com opções opcionais.
 *
 * @param instance
 * @param {string} path - A URL para onde a requisição GET será enviada.
 * @returns {Promise<T>} - Uma promessa que resolve os dados da resposta.
 */
export async function get<T>(instance: Axios, path: string): Promise<T> {
  try {
    const response = await instance.get<T>(path);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}

/**
 * Realiza uma requisição HTTP POST para a URL especificada com os dados fornecidos.
 *
 * @param instance
 * @param {string} path - A URL para enviar a requisição POST.
 * @param {*} data - Os dados para enviar no corpo da requisição POST.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta do servidor.
 */
export async function post<T>(
  instance: Axios,
  path: string,
  data: unknown,
): Promise<T> {
  try {
    const response = await instance.post<T>(path, data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}

/**
 * Faz uma requisição PUT para a URL especificada com os dados fornecidos.
 *
 * @param instance
 * @param {string} path - A URL para fazer a requisição PUT.
 * @param {unknown} data - Os dados para enviar com a requisição PUT.
 * @returns {Promise<T>} Uma promessa que resolve com os dados da resposta da requisição PUT.
 */
export async function put<T>(
  instance: Axios,
  path: string,
  data: unknown,
): Promise<T> {
  try {
    const response = await instance.put<T>(path, data);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}

/**
 * Envia uma requisição PATCH para a URL especificada com os dados fornecidos.
 *
 * @param instance
 * @param path
 * @param {unknown} data - Os dados a serem enviados no corpo da requisição.
 * @returns {Promise<T>} Uma promessa que resolve para os dados da resposta da requisição PATCH.
 */
export async function patch<T>(
  instance: Axios,
  path: string,
  data: unknown,
): Promise<T> {
  try {
    const response = await instance.patch<T>(path, data);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}

/**
 * Faz uma requisição DELETE para a URL especificada com os dados fornecidos.
 *
 * @returns {Promise<T>} Uma promessa que resolve com os dados da resposta da requisição DELETE.
 * @param instance
 * @param path
 */
export async function del<T>(instance: Axios, path: string): Promise<T> {
  try {
    const response = await instance.delete<T>(path);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}
