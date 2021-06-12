import * as actionTypes from "./../constants/actionTypes";

const initialState = {};

const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default selectedProductReducer;
