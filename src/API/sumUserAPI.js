import axiosClient from "./axiosClient";

const sumUserAPI = {
  getSumUserAPI: () => {
    const url = "/admin/users/sum";
    return axiosClient.get(url);
  },
};

export default sumUserAPI;
