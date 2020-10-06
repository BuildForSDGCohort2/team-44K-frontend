import React from 'react';


import "../bootstrap.css";
import "../App.css";

import facebook from "../Images/facebook.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import instagram from "../Images/instagram.png";
import whatsapp from '../Images/whatsapp.png'

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
          <div className="intro">
            <h1 className="hb">Introduction</h1>
            <p>
              <em>
                <span id="findit">findIt</span>{" "}
              </em>
              is a tourist navigation web app used by tourists and/or
              indivividuals is to search for nearby places. Have you ever gone
              to a foreign land and due to language barrier or shyness or even
              lack of enough money for tourguide made you not to explore the
              place? Congratulations!! You're just in the right place at the
              right time. Make 
               <span id="findit">findIt</span> your tourguide and you'll be
              surprised of how how much technology can improve your life and
              productivity. In contrary to available cluttered search
              alternatives available, <span id="findit">findIt</span> is simply
              developed for you the tourist or individual navigating your way
              around new city/town and not for general use. This does not limit
              the website to place searching only but also other use that may
              seem fit to you.
            </p>
          </div>
          <br />

          <div className="content">
            <p className="bg-warning text-center text">
              This website also has a chat mechanism that is still under
              development. The chat mechanism allows users from the same country
              or locality to meet, chat and share their experience about the
              place and other things that they may deem fit for them. For
              example Nigerian nationals in Kenya converging here for business
              opportunity discussions or vacation in Kenya among other things.
            </p>
            <br />
            <h5>About Myself</h5>
            <p>
              {/* <img src={} className=" float-left" /> */}

              <p id="pimg">
                Hello there! Am Samuel Wanjare, A Kenya based web developer. I
                used different web technologies to build awesome web
                applications like this one. Coding, reading and writing are some
                of my hobbies making me turn ideas into codes and producing
                artistic solutions to problems in the form of apps.
              </p>
            </p>
            <p id="tec">
              Primary tech stacks include HTML5, CSS, JavaScript, Boostrap5,
              ReactJs, Nodejs and MongoDB
            </p>
          </div>
          <br />
          <br />
          <div className="contacts">
            <ul className="li">
              <h2 className="">
                For more information about me and what I do click below icons :
              </h2>
              Facebook:
              <li>
                <a href="https://web.facebook.com/">
                  <img src={facebook} alt="facebook" className="rounded icon" />
                </a>
              </li>
              &nbsp; &nbsp; &nbsp; Github:
              <li>
                <a href="https://github.com/Magpiny">
                  <img src={github} alt="github" className="rounded icon" />
                </a>
              </li>
              &nbsp;&nbsp;&nbsp; LinkedIn
              <li>
                <a href="https://www.linkedin.com/in/samuel-wanjare-179922ba/">
                  <img src={linkedin} alt="linkedIn" className="rounded icon" />
                </a>
              </li>
              &nbsp;&nbsp;&nbsp; Twitter:
              <li>
                <a href="https://twitter.com/SamuelWanjare/">
                  <img src={twitter} alt="twitter" className="rounded icon" />
                </a>
              </li>
              &nbsp;&nbsp;&nbsp; Instagram:
              <li>
                <a href="https://instagram.com/samuelwanjare/">
                  <img src={instagram} alt="twitter" className="rounded icon" />
                </a>
              </li>
              &nbsp;&nbsp;&nbsp; Whatsapp
              <li>
                <a href="https://api.whatsapp.com/send?phone=254775863817&amp;text=Hi there! I have a question :)">
                
                  <img src={whatsapp} alt="twitter" className="rounded icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default About;