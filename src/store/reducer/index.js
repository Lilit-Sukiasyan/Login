import { combineReducers } from "redux";
import authReducer from "./authReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
  authReducer,
  memberReducer,
})