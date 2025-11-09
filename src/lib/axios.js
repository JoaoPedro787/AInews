import axios from "axios";

const axiosBase = (config) => {
  const base = axios.create(config);

  base.interceptors.response.use(
    (res) => {
      // status 200
      return res.data.response;
    },
    (error) => {
      // status != 200
      window.location.replace(`/error${error.code}`);
      return Promise.reject(error);
    }
  );

  return base;
};

export default axiosBase;
