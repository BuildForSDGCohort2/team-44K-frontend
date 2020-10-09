import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import SearchPlaces from "../fakeGmapsComponent/SearchPlaces";
import SearchBar from "../fakeGmapsComponent/SearchBar";


//Places accessibility function
const Places = (props) => {

  return (
    <div>
      <i>
        <Icon.Search color="purple" size={30} />{" "}
      </i>
      <p className="bg-warning">Search for your favourite places...</p>
       <SearchBar />
      <br />
      <SearchPlaces />
    </div>
  );
}


export default Places;

