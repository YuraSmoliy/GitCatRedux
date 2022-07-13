import { compose } from "redux";
import { connect } from "react-redux";
import Followers from "./FollowersList";

let mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Followers);
