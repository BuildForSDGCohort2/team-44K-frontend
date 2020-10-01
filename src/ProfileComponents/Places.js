import React, { Component } from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";


//Places accessibility function
const Places = (props) => {

  return (
    <div>
      <i>
        <p className="bg-warning">Search for your favourite places...</p>
        <Icon.Search color="purple" size={30} />{" "}
      </i>
    </div>
  );
}


export default Places;