/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  timeout: 15000,
});

const ResponseInterceptor = (response: any) => {
  return response;
};

const RequestInterceptor = (config: any) => {
  //   config.headers.Authorization = ``;
  return config;
};

axiosInstance.interceptors.request.use(RequestInterceptor);
axiosInstance.interceptors.response.use(ResponseInterceptor, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 509;
  if (!expectedErrors) {
    return Promise.reject(error.response);
  } else {
    return Promise.reject(error.response);
  }
});
