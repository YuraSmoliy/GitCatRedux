import {
  getUserData,
  getUserRepositories,
  getUserFollowers,
  getUserSubscriptons,
  getUserEvents,
} from "../services/fetchUser";
import {
  USER_FOLLOWERS,
  USER_INFO,
  USER_REPOSITORIES,
  USER_SUBSCRIPTION,
  USER_EVENTS,
} from "./reducers";

const USER_NAME = "mojombo";

export const setUserInfoThunk = async (dispatch) => {
  const data = await getUserData(USER_NAME);
  const userInfoPropertis = {
    login: data.login,
    email: data.email,
    company: data.company,
    avatar_url: data.avatar_url,
    repos_url: data.repos_url,
    blog: data.blog,
    events_url:data.events_url,
  };
  dispatch({ type: USER_INFO, payload: userInfoPropertis });
};

export const setUserFollowersThunk = async (dispatch) => {
  const userFollowersPropertis = await getUserFollowers(USER_NAME);
  dispatch({ type: USER_FOLLOWERS, payload: userFollowersPropertis });
};

export const setUserSubscriptionThunk = async (dispatch) => {
  let userInfoPropertis = await getUserSubscriptons(USER_NAME);
  dispatch({ type: USER_SUBSCRIPTION, payload: userInfoPropertis });
};

export const setUserReposThunk = async (dispatch) => {
  const userReposPropertis = await getUserRepositories(USER_NAME);
  dispatch({ type: USER_REPOSITORIES, payload: userReposPropertis });
};

export const setUserEventsThunk = async (dispatch, events_url) => {
  const userEventsPropertis = await getUserEvents(events_url);
  dispatch({ type: USER_EVENTS, payload: userEventsPropertis });
};
