import React from "react";
import "../bootstrap.css";
import mountains from "../Images/mountains.jpg";

function HospMaps(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <img src={mountains} alt="rhino-images" className="rounded mx-2" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
          <table className="table table-striped table-bordered table-hover table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kenyatta Hospital</td>
                <td>Ngong Road </td>
                <td>1 Km</td>
              </tr>
              <tr>
                <td>Nairobi Hospital</td>
                <td>Ngong Road</td>
                <td>1.3 km</td>
              </tr>
              <tr>
                <td>Huruma Hospital</td>
                <td>Nairobi</td>
                <td>5 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HospMaps;
