import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const apiClient = (options?: AxiosRequestConfig): AxiosInstance => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return axios.create({
    baseURL,
    timeout: options?.timeout || 10000,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });
};