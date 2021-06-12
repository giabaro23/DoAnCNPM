import * as actionTypes from "./../constants/actionTypes";

export const getSumUser = (data) => {
  return {
    type: actionTypes.GET_SUM_USER,
    payload: { data },
  };
};
