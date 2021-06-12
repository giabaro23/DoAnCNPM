import * as actionTypes from "./../constants/actionTypes";

const initialState = {
  users: [],
};

const listUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default listUserReducer;
