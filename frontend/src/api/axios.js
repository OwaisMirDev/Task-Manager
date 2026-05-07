import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let errorMessage = "Something went wrong";

    if (error.response) {
      const data = error.response.data || {};
      const details = data.details;
      if (Array.isArray(details) && details.length) {
        errorMessage = details.join(", ");
      } else if (data.message) {
        errorMessage = data.message;
      }
    } else if (error.request) {
      errorMessage = "Server unreachable";
    } else {
      errorMessage = error.message;
    }

    return Promise.reject(new Error(errorMessage));
  },
);
