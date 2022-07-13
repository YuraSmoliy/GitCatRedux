import React, {useEffect, useState, memo } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/github-logo.png";

let Header = (props) => {
  const [events, setEvents] = useState(0);
  useEffect(()=>{
    props.setUserEvents(props.events_url);
    props.setUserFollowers();
    props.setUserRepos();
    setEvents(props.events)
  },[props.events_url]);

  return (
    <div className={classes.header}>
      <div className={classes.welcome}>
        Welcome to
        <p>GitCat</p>
        <img src={logo} alt="github img" />
      </div>
      <div className={classes.data}>
        <div className={classes.dataContainer}>
          <div className={classes.dataLine}>
            <div className={classes.key}>Received events</div>
            <div className={classes.value}>{props.events}</div>
          </div>
          <div className={classes.dataLine}>
            <div className={classes.key}>Followers</div>
            <div className={classes.value}>{props.followers}</div>
          </div>
          <div className={classes.dataLine}>
            <div className={classes.key}>Repos</div>
            <div className={classes.value}>{props.repos}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
