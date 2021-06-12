import axios from "axios";
import queryString from "query-string";
import { baseURL } from "../constants/baseURL";

const token = localStorage.getItem("authentication_token");
//set up default config for http requests here
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "content-type": "application/json",
    Authorization: token,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (err) => {
    throw err;
  }
);

export default axiosClient;
