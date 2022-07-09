import { getUserData } from "../../services/fetchUser";
import { setUserInfo } from "./reducers";

export const setUserInfoThunk = async (dispatch) => {
  let data = await getUserData("mojombo");
  const userInfoPropertis = {
    email: data.email,
    company: data.company,
    avatar_url: data.avatar_url,
    repos_url: data.repos_url,
    blog: data.blog,
  };
  console.log(userInfoPropertis);
  dispatch(setUserInfo(userInfoPropertis));
};
