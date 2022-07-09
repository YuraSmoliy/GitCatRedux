import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import ReposList from "./components/ReposList/ReposList";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import FollowersList from "./components/FollowersList/FollowersList";
import Subscription from "./components/Subscription/Subscription";
import classes from "./App.module.css";
import UserInfoData from "./components/UserContext/UserContext";
import UserInfoContainer from "./components/UserInfo/UserInfoContainer";

function App() {
  return (
    <UserInfoData>
      <div className={classes.app}>
        <SideMenu />
        <div className={classes.mainSection}>
          <Header />
          <div className={classes.appContent}>
            <Routes>
              <Route exact path="/" element={<ReposList />}></Route>
              <Route
                exact
                path="/users/:accountName/reposlist"
                element={<ReposList />}
              ></Route>
              <Route
                exact
                path="/users/:accountName/followers"
                element={<FollowersList />}
              ></Route>
              <Route
                exact
                path="/users/:accountName/subscription"
                element={<Subscription />}
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
    </UserInfoData>
  );
}

export default App;
