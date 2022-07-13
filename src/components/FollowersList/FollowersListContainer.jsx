import { compose } from "redux";
import { connect } from "react-redux";
import Followers from "./FollowersList";
import { setUserFollowersThunk } from "../../Store/thunks";

let mapStateToProps = (state) => {
  return {
    followers: state.followers.followers,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserFollowers: () => {
      setUserFollowersThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Followers);
