import React, { useContext, memo } from "react";
import { UserInfoContext } from "../UserContext/UserContext";
import classes from "./UserInfo.module.css";
import LoadingView from "../LoadingView/LoadingView";

let UserInfo = (props) => {
  // console.log(props);
  props.setUserInfo();
  let context = useContext(UserInfoContext);
  let login = context.login || null;

  return (
    <>
      {login ? (
        <div className={classes.userInfoContainer}>
          <div className={classes.avatarUrl}>
            <img src={props.avatar_url} alt="" />
          </div>
          <div className={classes.userInfo}>
            <div>{props.login}</div>
            <div className={classes.accountDetails}>ACCOUNT DETAILS: </div>
            <div>
              email: {props.email ? props.email : "an email wasn't added"}
            </div>
            <div>repos: {props.repos_url}</div>
            <div>company: {props.company}</div>
            <div>blog: {props.blog}</div>
          </div>
        </div>
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default memo(UserInfo);
