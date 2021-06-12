import * as typeAction from "./../constants/actionTypes";

const initialState = {
  sumUser: "",
};

const sumUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.GET_SUM_USER:
      console.log(action);
      return { ...state, sumUser: action.payload.data.sum_user };
    default:
      return state;
  }
};

export default sumUserReducer;
