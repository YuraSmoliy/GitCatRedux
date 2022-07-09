const USER_INFO = "USER_INFO";

export let initialState = {
  userinfo: {
    login: "login",
    company: "company",
    avatar_url: "avatar_url",
    email: "email",
    blog: "blog",
    repos_url: "repos_url",
  },
};

export const userInfoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,

        userinfo: action.payload,
      };
    default:
      return state;
  }
};

export let setUserInfo = (userInfo) => {
  return { type: USER_INFO, payload: userInfo };
};

export default userInfoReducer;
