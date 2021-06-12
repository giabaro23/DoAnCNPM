import { combineReducers } from "redux";
import user from "./user";
import userLogin from "./userLogin";
import productReducer from "./productReducer";
import sumUserReducer from "./sumUser";
import selectedProductReducer from "./productDetailReducer";
import listUserReducer from "./listUser";

const rootReducer = combineReducers({
  infoUser: user,
  userLogin: userLogin,
  product: selectedProductReducer,
  allProducts: productReducer,
  sumUser: sumUserReducer,
  listUser: listUserReducer,
});

export default rootReducer;
