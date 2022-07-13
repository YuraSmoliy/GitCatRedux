import React from "react";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faUser,
  faUsers,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const SideMenu = (props) => {
  props.setUserInfo();
  useEffect(()=>{

  },[props])

  const respositoriesRoutPath = `/users/${props.login}/reposlist`;
  const followersRoutPath = `/users/${props.login}/followers`;
  const subscriptionRoutPath = `/users/${props.login}/subscription`;
  const userRoutPath = `/users/${props.login}/`;

  const createLink = (to, icon, category) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? [classes.menuItemActove] : classes.menuItem
        }
      >
        <FontAwesomeIcon icon={icon} />
        <div className={classes.category}>{category}</div>
      </NavLink>
    );
  };

  return (
    <>
      <div className={classes.sidemenu}>
        <div className={classes.logoContainer}>
          <img src={props.avatar_url} alt="" className={classes.logo} />
        </div>
        <div className={classes.userShortInfo}>
          <div>{props.login}</div>
          <div>{props.email ? props.email : "An email wasn't added"}</div>
        </div>
        <div className={classes.navigationContainer}>
          {createLink(respositoriesRoutPath, faCodeBranch, "REPOSITORIES")}
          {createLink(followersRoutPath, faUsers, "FOLLOWERS")}
          {createLink(subscriptionRoutPath, faLink, "SUBSCRIPTION")}
          {createLink(userRoutPath, faUser, "ABOUT")}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
