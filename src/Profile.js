import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { Footer } from './Pages';
import './Profile.css';
import "./bootstrap.css";
import * as Icon from "react-bootstrap-icons";
import Axios from 'axios';

//Display picture from the database
const DisplayPicture = (props) => {

  return (
    <div>
      <Icon.Person size={80} className="bg-info" />
    </div>
  );
}

//Display user bio
const UserBio = (props) => {
  return (
    <div className="container">
      BioB
    </div>
    
  );
};

//Display links to user chat Groups
const Cubes = (props) => {

  return(
    <div>
     cubes
    </div>
  )
}

//Display user profile header
const ProfileHeader = (props) => {

  return(
    <div>
   In your timeline today
   Time function from momentjs
   Weather api if time allows
    </div>
  )
}

//Hotel accessibility function
const Hotels = (props) => {

  return(
    <div>
 <i className="bg-yellow">Restaurants <Icon.Shop color="pink" size = {30} /> </i>
 
    </div>
  )
}

//ShoppingCentres accessibility function
const ShoppingCentres = (props) => {

  return (
    <div>
      <i className="bg-yellow">
        Shopping Centres <Icon.Cart4 size={30} color="blue" />{" "}
      </i>
    </div>
  );
}


//Fun hotspots accessibility function
const FunHotspots = (props) => {

  return (
    <div>
      
      <i className="bg-yellow">
        Clubs <Icon.CupFill />{" "} <Icon.Speaker size={30} color="orange" />
      </i>
    </div>
  );
}

//Health centres gmaps function
export const HealthCentres = (props) => {

  return (
    <div>
      <Icon.FileMedicalFill color="red" size={30} />{" "}
    </div>
  );
}

//Tourist Sites function
export const TouristSites = (props) => {

  return (
    <div>
      <i>Tourist Sites
         <Icon.Building color="brown" size={30} />{" "}
      </i>
    </div>
  );
}


//Places accessibility function
const Places = (props) => {

  return (
    <div>
      <i>
        <p className="bg-warning">Search for your favourite places...</p>
        <Icon.Search color="purple" size={30} />{" "}
      </i>
    </div>
  );
}






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
              <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-auto">
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
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-auto">
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




















 