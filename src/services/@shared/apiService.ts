import { Axios } from "axios";

import { del, get, post, put } from "./methods";

export interface IApiMethods {
  create: (data: any) => Promise<any>;
  deleteOne: (id: string) => Promise<any>;
  getList: (endpoint?: string, params?: string) => Promise<any>;
  getOne: (id: string, params?: string) => Promise<any>;
  update: (data: Partial<any>, id: string) => Promise<any>;
  updatePut: (data: Partial<any>, id: string) => Promise<any>;
}

const apiMethods = (axios: Axios, path: string): IApiMethods => ({
  create: (data: any): Promise<any> => post(axios, path, data),

  deleteOne: (id: string): Promise<any> => del(axios, `${path}/${id}`),

  getList: (endpoint?: string, params?: string): Promise<any> => {
    const url = params
      ? `${path}${params}`
      : endpoint
        ? `${path}/${endpoint}`
        : path;
    return get(axios, url);
  },

  getOne: (id: string, params?: string): Promise<any> => {
    const url = params ? `${path}/${id}${params}` : `${path}/${id}`;
    return get(axios, url);
  },

  update: (data: Partial<any>, id: string): Promise<any> =>
    put(axios, `${path}/${id}`, data),

  updatePut: (data: Partial<any>, id: string): Promise<any> =>
    put(axios, `${path}/${id}`, data),
});

export { apiMethods };
