import React from 'react'
import {Link} from 'react-router-dom'
import '../bootsrap.css'



export const About = () => {
  return (
    <div className="container">
      <h1>
        This is my about page{" "}
        <Link to={"/HomepageUI"} action="replace">
          {" "}
          Home{" "}
        </Link>
      </h1>

      <Footer />
    </div>
  );
};
