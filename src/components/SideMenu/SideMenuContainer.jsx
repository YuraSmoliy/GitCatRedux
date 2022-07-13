import { compose } from "redux";
import { connect } from "react-redux";
import { setUserInfoThunk } from "../../Store/thunks";
import SideMenu from "./SideMenu";

let mapStateToProps = (state) => {
  return {
    login: state.userInfo.user_info.login,
    company: state.userInfo.user_info.company,
    email: state.userInfo.user_info.email,
    avatar_url: state.userInfo.user_info.avatar_url,
    blog: state.userInfo.user_info.blog,
    repos_url: state.userInfo.user_info.repos_url,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: () => {
      setUserInfoThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(SideMenu);