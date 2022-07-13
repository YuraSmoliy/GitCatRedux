import React, { useEffect, useState } from "react";
import Presentation from "../Presentation/Presentation";
import LoadingView from "../LoadingView/LoadingView";

let Subscription = (props) => {
  const [subscriptions, setSubscription] = useState(null);
  const [search, setSearch] = useState("");
  let [filteredList, setFilteredList] = useState(null);

  let searchData = (value) => {
    setSearch(value);
    filter(value);
  };

  let filter = (value) => {
    setFilteredList(
      subscriptions.filter((subscription) => {
        if (subscription.name && subscription.name.startsWith(value)) {
          return subscription;
        }
      })
    );
  };

  useEffect(() => {
    props.setUserSubscription();
    setSubscription(props.subscriptions);
  }, [props.subscriptions]);

  return (
    <>
      {subscriptions ? (
        <Presentation
          elements={filteredList ? filteredList : subscriptions}
          headers={["name", "description", "html_url", "private"]}
          serchValue={search}
          setSearchData={searchData}
          section={"Subscriptions:"}
        />
      ) : (
        <LoadingView />
      )}
    </>
  );
};

export default Subscription;
