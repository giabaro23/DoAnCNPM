import * as actionTypes from "./../constants/actionTypes";

const initialState = {};

const selectedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default selectedUserReducer;
