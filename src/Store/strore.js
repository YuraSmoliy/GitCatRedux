import { combineReducers } from "redux";
import {
  userInfoReducer,
  repositoriesReducer,
  subscriptionReducer,
  followersReducer,
  eventsReducer,
} from "./reducers";

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  repositories: repositoriesReducer,
  followers: followersReducer,
  subscription: subscriptionReducer,
  events: eventsReducer,
});
