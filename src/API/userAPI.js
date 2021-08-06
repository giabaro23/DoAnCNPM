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
  deleteUser: (id) => {
    const url = `/admin/users/${id}`;
    return axiosClient.delete(url);
  },
  updatePassword: (data) => {
    const url = "/users/password";
    return axiosClient.put(url, data);
  },
  getUserDetail: (id) => {
    const url = `/admin/users/${id}`;
    return axiosClient.get(url);
  },
  getUserVisit: () => {
    const url = "/admin/user/present";
    return axiosClient.get(url);
  },
};

export default userAPI;
