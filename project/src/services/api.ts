import axios, {AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';
import {getToket} from './token';

const URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
}

enum Header {
  XToken = 'X-Token',
}

type UnauthorizedCallback = () => void;

const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;

      if (response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
        return Promise.reject(error);
      }

      return Promise.reject(response);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToket();

      if (token) {
        config.headers[Header.XToken] = token;
      }

      return config;
    },
  );

  return api;
};

export {
  createApi
};
