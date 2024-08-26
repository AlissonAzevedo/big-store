import { Axios } from "axios";

/**
 * Envia uma requisição HTTP GET para a URL especificada e retorna os dados da resposta.
 *
 * @param instance - Instância do Axios a ser utilizada para a requisição.
 * @param {string} path - A URL para onde a requisição GET será enviada.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
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
 * Realiza uma requisição HTTP POST para a URL especificada com os dados fornecidos e retorna os dados da resposta.
 *
 * @param instance - Instância do Axios a ser utilizada para a requisição.
 * @param {string} path - A URL para enviar a requisição POST.
 * @param {unknown} data - Os dados a serem enviados no corpo da requisição POST.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
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
 * Realiza uma requisição HTTP PUT para a URL especificada com os dados fornecidos e retorna os dados da resposta.
 *
 * @param instance - Instância do Axios a ser utilizada para a requisição.
 * @param {string} path - A URL para enviar a requisição PUT.
 * @param {unknown} data - Os dados a serem enviados no corpo da requisição PUT.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
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
 * Envia uma requisição HTTP PATCH para a URL especificada com os dados fornecidos e retorna os dados da resposta.
 *
 * @param instance - Instância do Axios a ser utilizada para a requisição.
 * @param {string} path - A URL para enviar a requisição PATCH.
 * @param {unknown} data - Os dados a serem enviados no corpo da requisição PATCH.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
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
 * Realiza uma requisição HTTP DELETE para a URL especificada e retorna os dados da resposta.
 *
 * @param instance - Instância do Axios a ser utilizada para a requisição.
 * @param {string} path - A URL para enviar a requisição DELETE.
 * @returns {Promise<T>} - Uma promessa que resolve com os dados da resposta da requisição.
 */
export async function del<T>(instance: Axios, path: string): Promise<T> {
  try {
    const response = await instance.delete<T>(path);
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
}
