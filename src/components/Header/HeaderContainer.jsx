import { compose } from "redux";
import { connect } from "react-redux";
import { setUserEventsThunk, setUserFollowersThunk, setUserReposThunk } from "../../Store/thunks";
import Header from "./Header";

let mapStateToProps = (state) => {
  console.log(state.userInfo.user_info.events_url)
  return {
    events:state.events.events ? state.events.events.length : null,
    followers:state.followers.followers ? state.followers.followers.length : null,
    repos: state.repositories.repositories ? state.repositories.repositories.length : null,
    events_url: state.userInfo.user_info.events_url ? state.userInfo.user_info.events_url.split("{")[0] : null,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserEvents: (events_url) => {
      setUserEventsThunk(dispatch, events_url);
    },
    setUserFollowers: () => {
      setUserFollowersThunk(dispatch);
    },
    setUserRepos: () => {
      setUserReposThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header);