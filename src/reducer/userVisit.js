import * as typeAction from "./../constants/actionTypes";

const initialState = {
  userVisit: "",
};

const userVisitReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.GET_USER_VISIT:
      return { ...state, userVisit: action.payload.data.present_users };

    default:
      return state;
  }
};
export default userVisitReducer;
