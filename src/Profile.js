import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import './Profile.css';
import "./bootstrap.css";
import Axios from 'axios';

//My profile components
import DisplayPicture from './ProfileComponents/DisplayPicture.js';
import UserBio from './ProfileComponents/UserBio.js';
import Cubes from './ProfileComponents/Cubes';
import ProfileHeader from './ProfileComponents/ProfileHeader.js';
import Hotels from './ProfileComponents/Hotels';
import ShoppingCentres from './ProfileComponents/ShoppingCentres';
import HealthCentres from './ProfileComponents/HealthCentres';
import TouristSites from './ProfileComponents/TouristSites';
import {FunHotspots}from './ProfileComponents/FunHotspot.js';
import Places from './ProfileComponents/Places';
import { Footer } from "./Pages";



/**
 * User Profile Page
 * Profile components 
 */

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
           username :'',
            email : ''
        }
    }

    componentDidMount(){
      Axios.get("http://localhost:5000/user/");
        //localStorage.removeItem("token");
        const token = localStorage.usertoken ;
        
        const decoded = jwt_decode(token, {header:true});
        //localStorage.removeItem(decoded);
        console.log(decoded);
        
          this.setState({
            
            username: decoded.username,
            email: decoded.email,

          }) ;
      
        
    }

    render(){
        return (
          <div className="container">
            <div className="row">
              {/* first column */}
              <div className="col-auto col-sm-4 col-md-4 col-lg-4 col-xl-4">
                {/* User display picture */}
                <div className="dp">
                  <DisplayPicture />
                </div>
                <br />
                <br />

                {/* User bio */}
                <div className="ub">
                  <UserBio />
                  <h4>Username</h4>
                  <div>{this.state.username}</div>
                  <br />
                  <h4>Email</h4>
                  <div>{this.state.email}</div>
                </div>

                <br />
                <br />
                <div className="cube">
                  <Cubes />
                </div>
                <div></div>
                <div></div>

                {/*End of first column */}
              </div>

              {/* Second column */}
              <div className="col-auto col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div className="Ph">
                  <ProfileHeader />
                </div>

                <div className="hotel">
                  <Hotels />
                </div>
                <br />
                <br />

                <div className="shop">
                  <ShoppingCentres />
                </div>
                <br />
                <br />

                <div className="health">
                  <HealthCentres />
                </div>
                <br />
                <br />

                <div className="tour">
                  <TouristSites />
                </div>
                <br />
                <br />

                <div className="Fun">
                  <FunHotspots />
                </div>
                <br />
                <br />

                <div>
                  <Places />
                </div>
                <br />
                <br />

                {/*End of second column */}
              </div>

              {/* Footer */}
              <Footer />
              {/*End of row */}
            </div>

            {/*End of container div */}
          </div>
        );
    }

}

export default Profile;




















 