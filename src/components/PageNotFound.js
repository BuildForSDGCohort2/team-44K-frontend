import React from 'react';
import { Link } from "react-router-dom";
import './bootstrap.css';
import '../App.css';

function PageNotFound() {
    return (
      <div className="container mb-3 mt-5">
        <br /> <br />
        <p id="fof">
          <span id="black">4</span>
          &nbsp;
          <span id="red">0</span>
          &nbsp;
          <span id="green">4</span>
          <br /> <br />
          <span id="black">PAGE</span>
          &nbsp;&nbsp;
          <span id="red">NOT</span>
          &nbsp;&nbsp;
          <span id="green">FOUND</span>
        </p>
        <Link to={"/"} replace={true}>
          It seems what you're looking for is no longer available, Kindly click
          this link to go back to main page...
        </Link>
      </div>
    );
}

export default PageNotFound;

