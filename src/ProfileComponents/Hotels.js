import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import HotelMaps from "../fakeGmapsComponent/HotelMaps";
import SearchBar from "../fakeGmapsComponent/SearchBar";

//Hotel accessibility component
const Hotels = props => (
    
    <div>
      <i className="bg-yellow">Restaurants <Icon.Shop color="pink" size = {30} /> </i>
      <SearchBar />
  
 <HotelMaps />

    </div>
)


export default Hotels;