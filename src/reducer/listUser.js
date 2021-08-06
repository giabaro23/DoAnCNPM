import * as actionTypes from "./../constants/actionTypes";

const initialState = {
  users: [],
};

const listUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_USER:
      return { ...state, users: action.payload };
    case actionTypes.DELETE_USER:
      let newList = state.users.filter((user) => user.id !== action.payload);
      return { ...state, users: newList };
    default:
      return state;
  }
};
export default listUserReducer;
