import { compose } from "redux";
import { connect } from "react-redux";
import ReposList from "./ReposList";

let mapStateToProps = (state) => {
  return {
    repositories: state.repositories.repositories,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ReposList);