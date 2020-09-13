import React, {Component} from 'react';
import "./bootstrap.css";
import {Footer} from './Pages';



//Header component
const Header = ()=>(
    
        <div className ="container">

            <div>
                my header component
            </div>

        </div>
    
)








class Cubes extends React.Component {
    render(){
        

        return (
          <div>
            <div>
              <Header />
            </div>

            <div>
              <Body />
            </div>

            <div>
              <Footer />
            </div>
          </div>
        );
    }
}


export default Cubes;

