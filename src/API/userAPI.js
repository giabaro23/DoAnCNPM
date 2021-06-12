import axiosClient from "./axiosClient";

const userAPI = {
  login: (data) => {
    const url = "/auth/login";
    const newData = JSON.stringify(data);
    return axiosClient.post(url, newData);
  },
  register: (data) => {
    const url = "/user";
    const params = data;
    return axiosClient.post(url, params);
  },
  updateProfile: (data) => {
    const url = "/profile";
    const params = data;
    return axiosClient.patch(url, params);
  },
  getProfile: () => {
    const url = "/profile";
    return axiosClient.get(url);
  },
  getListUser: (param) => {
    const url = `/admin/users?role=${param}`;
    return axiosClient.get(url);
  },
};

export default userAPI;
