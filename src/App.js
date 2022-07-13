import ReposListContainer from "./components/ReposList/ReposListContainer";
import { Routes, Route } from "react-router-dom";
import React from "react";
import SubscriptionContainer from "./components/Subscription/SubscriptionContainer";
import classes from "./App.module.css";
import UserInfoContainer from "./components/UserInfo/UserInfoContainer";
import FollowersListContainer from "./components/FollowersList/FollowersListContainer";
import SideMenuContainer from "./components/SideMenu/SideMenuContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <>
      <div className={classes.app}>
        <SideMenuContainer />
        <div className={classes.mainSection}>
          <HeaderContainer />
          <div className={classes.appContent}>
            <Routes>
              <Route exact path="/" element={<ReposListContainer />}></Route>
              <Route
                exact
                path="/users/:accountName/reposlist"
                element={<ReposListContainer />}
              ></Route>
              <Route
                exact
                path="/users/:accountName/followers"
                element={<FollowersListContainer />}
              ></Route>
              <Route
                exact
                path="/users/:accountName/subscription"
                element={<SubscriptionContainer />}
              ></Route>
              <Route
                exact
                path="/users/:accountName"
                element={<UserInfoContainer />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
