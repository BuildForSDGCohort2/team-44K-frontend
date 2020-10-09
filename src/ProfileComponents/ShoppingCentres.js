import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import SuperM from "../fakeGmapsComponent/SuperM";
import SearchBar from "../fakeGmapsComponent/SearchBar";


//ShoppingCentres accessibility component
const ShoppingCentres = (props) => {

  return (
    <div>
      <i className="bg-yellow input-group-addon">
        Shopping Centres <Icon.Cart4 size={30} color="blue" />{" "}
      </i>
      <SearchBar />
      <SuperM />
    </div>
  );
}


export default ShoppingCentres;