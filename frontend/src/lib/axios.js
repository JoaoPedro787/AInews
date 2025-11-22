import axios from "axios";

const axiosBase = (config) => {
  const base = axios.create(config);

  base.interceptors.response.use(
    (res) => {
      // status 200
      return res.data.response || res.data.data;
    },
    (error) => {
      // status != 200
      window.location.replace(`/error`);
      return Promise.reject(error);
    }
  );

  return base;
};

export default axiosBase;
