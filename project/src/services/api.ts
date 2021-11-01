import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 1000;

enum HttpCode {
  Unauthorized = 401,
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
        return onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  return api;
};

export {
  createApi
};
