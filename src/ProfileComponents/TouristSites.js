import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import TourMaps from "../fakeGmapsComponent/TourMaps";


//Tourist Sites function
export const TouristSites = (props) => {

  return (
    <div>
      Tourist Sites
      <i>
        <Icon.Building color="brown" size={30} />{" "}
      </i>
      <TourMaps />
    </div>
  );
}


export default TouristSites;




