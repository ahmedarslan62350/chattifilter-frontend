import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const apiClient = (options?: AxiosRequestConfig): AxiosInstance => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const client = axios.create({
    baseURL,
    timeout: options?.timeout || 10000,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  client.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err?.response?.data || err);
    },
  );

  return client;
};
