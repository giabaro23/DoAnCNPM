import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => {
    const url = `/products?${params}`;
    return axiosClient.get(url);
  },
  getProductDetail: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
 

};

export default productApi;
