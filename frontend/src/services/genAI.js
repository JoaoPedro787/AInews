import axiosBase from "../lib/axios";

const genaiAPI = axiosBase({
  baseURL: "http://localhost:8000",
});

export default genaiAPI;
