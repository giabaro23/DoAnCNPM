import axiosClient from "./axiosClient";

const sumOrderAPI = {
  getSumOrderAPI: () => {
    const url = "admin/orders/sum?distance=Theo năm";
    return axiosClient.get(url);
  },
};

export default sumOrderAPI;
