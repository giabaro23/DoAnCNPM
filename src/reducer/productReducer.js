import * as actionTypes from "./../constants/actionTypes";

const initialState = {
  products: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
export default productReducer;
