import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { API_CORE } from '@constants/Endpoints';

const options: AxiosRequestConfig = {
  baseURL: API_CORE,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const api = axios.create(options);

const onRequest = (request: InternalAxiosRequestConfig<any>) => {
  request.headers = request.headers ?? {};

  return request;
};

const onRequestError = (err: AxiosError) => {
  return Promise.reject(err);
};

const onResponse = (response: AxiosResponse<any, any>) => {
  if (response?.status === 200 || response?.status === 201) {
    return response;
  } else {
    throw response.data;
  }
};

const onResponseError = (err: any) => {
  return Promise.reject(err);
};

api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);

export default api;
