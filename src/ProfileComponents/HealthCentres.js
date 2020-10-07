import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import HospMaps from "../fakeGmapsComponent/HospMaps";



//Health centres gmaps function
export const HealthCentres = (props) => {

  return (
    <div>
      <Icon.FileMedicalFill color="red" size={30} />{" "}
      <HospMaps />
    </div>
  );
}


export default HealthCentres;