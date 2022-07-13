import { compose } from "redux";
import { connect } from "react-redux";
import ReposList from "./ReposList";
import { setUserReposThunk } from "../../Store/thunks";

let mapStateToProps = (state) => {
  return {
    repositories: state.repositories.repositories,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserRepos: () => {
      setUserReposThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ReposList);