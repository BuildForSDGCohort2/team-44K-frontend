import React, { Component } from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";


//Fun hotspots accessibility function
export const FunHotspots = (props) => {

  return (
    <div>
      
      <i className="bg-yellow">
        Clubs <Icon.CupFill />{" "} <Icon.Speaker size={30} color="orange" />
      </i>
    </div>
  );
}
