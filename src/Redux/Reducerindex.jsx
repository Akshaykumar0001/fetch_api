import { combineReducers } from "redux";
import ChangeTheNumber from "./Updown";
import { cartreducer } from "./CartReducer";

const rootReducer = combineReducers({
  ChangeTheNumber,
  cartreducer,
});
export default rootReducer;
