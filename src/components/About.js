import React from 'react';


import "../bootstrap.css";
import "../App.css";

import facebook from "../Images/facebook.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import whatsapp from '../Images/whatsapp.png'
import * as Icon from "react-bootstrap-icons";
import { Footer } from "../Pages";


/**
 * 
 * About Page
 */

const About = () =>{

  return (
    <div className="container conta">
      <div className="row ">
        <div className="col-auto col-sm-12 col-md-12 col-lg-12">
          <div className="aboutHeader bg-gray">
            <h1 className="text-center ab">Hello and welcome to findIt</h1>
          </div>
          <br />
          <div>
            <h1>Introduction</h1>
            <p>findIt is </p>
          </div>
          <br />

          <div className="content footer">
            <p className="bg-warning text-center text-capitalize text">
              This page is under construction!! Thanks for your patience
            </p>
          </div>
          <br />
          <br />
          <div className="contacts">
            <ul className="li">
              <h2 className="text-warning">
                Contact me using the social media handles below
              </h2>
              <li>
                <p>
                  <a
                    href="https://twitter.com/intent/tweet?screen_name=SamuelWanjare&ref_src=twsrc%5Etfw"
                    className="twitter-mention-button"
                    data-show-count="true"
                  >
                    Tweet to @SamuelWanjare
                  </a>
                  {
                    <script>
                      async src="https://platform.twitter.com/widgets.js"
                      charset="utf-8"
                    </script>
                  }
                </p>
              </li>
              <li>
                <a href="https://web.facebook.com/">
                  <img src={facebook} alt="facebook" className="rounded icon" />
                </a>
              </li>

              <li>
                <a href="https://github.com/Magpiny">
                  <img src={github} alt="github" className="rounded icon" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/samuel-wanjare-179922ba/">
                  <img src={linkedin} alt="linkedIn" className="rounded icon" />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/SamuelWanjare/">
                  <img src={twitter} alt="twitter" className="rounded icon" />
                </a>
              </li>

              <li>
                <a href="https://instagram.com/samuelwanjare/">
                  <img src={instagram} alt="twitter" className="rounded icon" />
                </a>
              </li>

              <li>
                <a href="https://api.whatsapp.com/send?phone=254775863817&amp;text=Hi there! I have a question :)">Send Message

                  <img src={whatsapp} alt="twitter" className="rounded icon" />
                </a>
              </li>
            </ul>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}


export default About;