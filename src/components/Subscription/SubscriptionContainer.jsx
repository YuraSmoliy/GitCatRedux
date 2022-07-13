import { compose } from "redux";
import { connect } from "react-redux";
import Subscription from "./Subscription";
import { setUserSubscriptionThunk } from "../../Store/thunks";

let mapStateToProps = (state) => {
  return {
    subscriptions: state.subscription.subscription,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setUserSubscription: () => {
      setUserSubscriptionThunk(dispatch);
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Subscription);