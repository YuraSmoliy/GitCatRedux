import { combineReducers } from "redux";
import { userInfoReducer } from "./reducers";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
});
