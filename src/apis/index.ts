import axios from "axios";

const baseURL = "https://mocki.io/v1";

export const axiosInstance = axios.create({
  baseURL,
  headers: {},
  timeout: 50000,
});

// Add a response interceptor
axiosInstance.interceptors.request.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.data.message) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  }
);

export enum EMethods {
  get = "get",
  post = "post",
  delete = "delete",
}
