import * as actionTypes from "./../constants/actionTypes";

export const getSumOrder = (data) => {
  return {
    type: actionTypes.GET_SUM_ORDER,
    payload: { data },
  };
};
