import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import SearchPlaces from "../fakeGmapsComponent/SearchPlaces";


//Places accessibility function
const Places = (props) => {

  return (
    <div>
      <p className="bg-warning">Search for your favourite places...</p>
      <i>
        <Icon.Search color="purple" size={30} />{" "}
      </i>
      <SearchPlaces />
    </div>
  );
}


export default Places;

