import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import HospMaps from "../fakeGmapsComponent/HospMaps";
import SearchBar from "../fakeGmapsComponent/SearchBar";



//Health centres gmaps function
export const HealthCentres = (props) => {

  return (
    <div>
      <SearchBar />
      <Icon.FileMedicalFill color="red" size={30} />{" "} Search for hospitals

      <HospMaps />
    </div>
  );
}


export default HealthCentres;