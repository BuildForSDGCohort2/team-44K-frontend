import React, { Component } from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";


//Display picture from the database
const DisplayPicture = (props) => {

  return (
    <div>
      <Icon.Person size={80} className="bg-info" />
    </div>
  );
}


export default DisplayPicture;