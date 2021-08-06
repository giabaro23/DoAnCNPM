import * as actionTypes from "./../constants/actionTypes";

export const userLogin = (data) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload: data,
  };
};

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const userRegister = (data) => {
  return {
    type: actionTypes.USER_REGISTER,
    payload: data,
  };
};

export const getProfileUser = (data) => {
  return {
    type: actionTypes.GET_PROFILE_USER,
    payload: { data },
  };
};
export const getListUser = (users) => {
  return {
    type: actionTypes.GET_LIST_USER,
    payload: users,
  };
};

export const deleteUser = (id) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: id,
  };
};

export const selectedUser = (user) => {
  return {
    type: actionTypes.SELECTED_USER,
    payload: user,
  };
};
export const getUserVisit = (data) => {
  return {
    type: actionTypes.GET_USER_VISIT,
    payload: { data },
  };
};
