import React from "react";
import "../bootstrap.css";
import "../Profile.css";
import Timer from "../components/Timer";



//Display user profile header
const ProfileHeader = (props) => {
   
  return(
    <div>
      <Timer color="purple" size={30}/>{" "}
    </div>
  )
}
export default ProfileHeader;