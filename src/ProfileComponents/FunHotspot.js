import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import Funspots from "../fakeGmapsComponent/Funspots";


//Fun hotspots accessibility function
export const FunHotspots = (props) => {

  return (
    <div>
      <h3>Search for your favourite fun hotspots</h3>
      <i className="bg-yellow">
        <Icon.CupFill /> <Icon.Speaker size={30} color="orange" />
      </i>
      <Funspots />
    </div>
  );
}
