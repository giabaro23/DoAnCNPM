import axiosClient from "./axiosClient";

const sumUserAPI = {
  getSumUserAPI: () => {
    const url = "/admin/user/sum";
    return axiosClient.get(url);
  },
};

export default sumUserAPI;
