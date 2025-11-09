import axiosBase from "../lib/axios";

const guardianAPI = axiosBase({
  baseURL: "https://content.guardianapis.com",
});

export default guardianAPI;
