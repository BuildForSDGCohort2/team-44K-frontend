import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import * as Icon from "react-bootstrap-icons";
import HotelMaps from "../fakeGmapsComponent/HotelMaps";

//Hotel accessibility component
const Hotels = props => (
    
    <div>
 <i className="bg-yellow">Restaurants <Icon.Shop color="pink" size = {30} /> </i>
 <br />
 <HotelMaps />

    </div>
)


export default Hotels;