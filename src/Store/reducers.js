export const USER_INFO = "USER_INFO";
export const USER_FOLLOWERS = "USER_FOLLOWERS";
export const USER_SUBSCRIPTION = "USER_SUBSCRIPTION";
export const USER_REPOSITORIES = "USER_REPOSITORIES";
export const USER_EVENTS = "USER_EVENTS";

export let userInfoInitialState = {
  user_info: {
    login: null,
    company: null,
    avatar_url: null,
    email: null,
    blog: null,
    repos_url: null,
    events_url:null,
  },
};
export let repositoriesInitialState = {
  repositories: []
};

export let followersInitialState = {
  followers: [],
};
export let subscriptionInitialState = {
  subscription: [],
};
export let eventsInitialState = {
  events: [],
};

export const userInfoReducer = (state = userInfoInitialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };
    default:
      return state;
  }
};

export const followersReducer = (state = followersInitialState, action) => {
  switch (action.type) {
    case USER_FOLLOWERS:
      return {
        ...state,
        followers:action.payload,
      };
    default:
      return state;
  }
};

export const subscriptionReducer = (
  state = subscriptionInitialState,
  action
) => {
  switch (action.type) {
    case USER_SUBSCRIPTION:
      return {
        ...state,
        subscription: action.payload,
      };
    default:
      return state;
  }
};

export const repositoriesReducer = (
  state = repositoriesInitialState,
  action
) => {
  switch (action.type) {
    case USER_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};

export const eventsReducer = (
  state = eventsInitialState,
  action
) => {
  switch (action.type) {
    case USER_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
