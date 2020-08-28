import React from 'react';
import './bootstrap.css';
import './App.css';

function App() {
  
const year = new Date().getFullYear();

  return (


    
    <div className="container secondary">
      <div className="row ">
        <div className="col-md-3 col-lg-12">

          <div className="header">
            <p className="text-center">Hello and Welcome to findIt</p>
            <p className="float-right"><pre>Login | SignUp  | About</pre></p>
          </div>
          <div className="main">
            <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus 
              fugit iste porro ducimus perspiciatis provident nemo, quis cumque et nisi,
           <p>Lets say that you were talking to abunch of fools on earth</p>
               minima impedit quibusdam animi maiores explicabo dolore. Nisi, iure nemo?
            </p>
            <p className="float-right">
              <img className="rounded img-thumbnail img-fluid" alt="">
              </img>
            </p>
            </div>
          </div>
          <div className="footer text-center">
            <p className="">
              &copy; {year} by Magpiny
            </p>

          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
