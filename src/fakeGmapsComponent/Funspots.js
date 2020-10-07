import React from "react";
import "../bootstrap.css";
import clouds from "../Images/clouds.jpg";

function Funspots(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <img src={clouds} alt="rhino-images" className="rounded mx-2" />
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
                <td>Nelson Mortel</td>
                <td>Kisumu CBD </td>
                <td>500 metres</td>
              </tr>
              <tr>
                <td>Kisumu Lifestyle</td>
                <td>Manyatta</td>
                <td>2 km</td>
              </tr>
              <tr>
                <td>Kenyatta Stadium</td>
                <td>Obunga</td>
                <td>5 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Funspots;
