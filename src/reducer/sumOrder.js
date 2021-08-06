import * as typeAction from "./../constants/actionTypes";

const initialState = {
  sumOrder: "",
};

const sumOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.GET_SUM_ORDER:
      console.log(action);
      return { ...state, sumOrder: action.payload.data.sum_order };
    default:
      return state;
  }
};

export default sumOrderReducer;
