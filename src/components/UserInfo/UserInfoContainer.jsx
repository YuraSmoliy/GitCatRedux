import { compose } from "redux";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import { setUserInfoThunk } from "../Store/thunks";

let mapStateToProps = (state) => {
  return {
    login: state.userInfo.userinfo.login,
    company: state.userInfo.userinfo.company,
    email: state.userInfo.userinfo.email,
    avatar_url: state.userInfo.userinfo.avatar_url,
    blog: state.userInfo.userinfo.blog,
    repos_url: state.userInfo.userinfo.repos_url,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: () => {
      setUserInfoThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(UserInfo);
