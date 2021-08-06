import { combineReducers } from "redux";
import user from "./user";
import userLogin from "./userLogin";
import productReducer from "./productReducer";
import sumUserReducer from "./sumUser";
import selectedProductReducer from "./productDetailReducer";
import listUserReducer from "./listUser";
import selectedUserReducer from "./userDetailReducer";
import sumOrderReducer from "./sumOrder";
import "antd/dist/antd.css";
import userVisitReducer from "./userVisit";

const rootReducer = combineReducers({
  infoUser: user,
  userLogin: userLogin,
  product: selectedProductReducer,
  allProducts: productReducer,
  sumUser: sumUserReducer,
  listUser: listUserReducer,
  user: selectedUserReducer,
  sumOrder: sumOrderReducer,
  userVisit: userVisitReducer,
});

export default rootReducer;
