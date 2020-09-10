import React from 'react'
import {Link} from 'react-router-dom'
import './bootstrap.css'
import {HomepageUI} from '../Pages'
import {Footer} from '../Pages'



const About = () => {

  return (
    <div className="container">
      <div className="row ">
        <div className="col-auto col-sm-12 col-md-12 col-lg-auto">
          <h1 >
            {time}
            This is my about page
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
