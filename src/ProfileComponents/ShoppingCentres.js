import React, { Component } from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";


//ShoppingCentres accessibility component
const ShoppingCentres = (props) => {

  return (
    <div>
      <i className="bg-yellow">
        Shopping Centres <Icon.Cart4 size={30} color="blue" />{" "}
      </i>
    </div>
  );
}


export default ShoppingCentres;