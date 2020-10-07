import React from "react";
import "../bootstrap.css";
import rhino from "../Images/rhino.jpg";

function TourMaps(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <img src={rhino} alt="rhino-images" className="rounded mx-2" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nairobi National Park</td>
                <td>Nairobi </td>
                <td>4 km</td>
              </tr>
              <tr>
                <td>Masai Mara Game Reserve</td>
                <td>Mara Westlands</td>
                <td>45 km</td>
              </tr>
              <tr>
                <td>Lake Nakuru</td>
                <td>Nakuru</td>
                <td>160 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TourMaps;
