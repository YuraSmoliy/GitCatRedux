import React, { useEffect, useState } from "react";
import LoadingView from "../LoadingView/LoadingView";
import Presentation from "../Presentation/Presentation";

let Followers = (props) => {

  const [followers, setFollowers] = useState(null);
  const [search, setSearch] = useState("");
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      followers.filter((follower) => {
        if (follower.name && follower.name.startsWith(value)) {
          return follower;
        }
      })
    );
  };


  useEffect(() => {
    props.setUserFollowers();
    setFollowers(props.followers);
  }, []);

  return (
    <>
      {followers ? (
        <Presentation
          elements={filteredList ? filteredList : followers}
          headers={["id", "name", "detail", "type"]}
          serchValue={search}
          setSearchData={searchData}
          section={"Followers:"}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default Followers;
