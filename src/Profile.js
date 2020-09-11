import React, {Component} from 'react';
import jwt_decode from 'jwt-decode'
import { Footer } from './Pages';
import './Profile.css'
import "./bootstrap.css";
import Axios from 'axios';



class Profile extends Component {

    constructor(){
        super()
        this.state = {
           username :[],
            email : []
        }
    }

    componentDidMount(){
      Axios.get("http://localhost:5000/user/");
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        .then(response=>{
          this.setState({
            
            username: decoded.username,
            email: decoded.email,

          });
        })
        
    }
    render(){
        return (
          <div className="container">
            <div className="row">
              {/* 1st column */}
              <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                {/* User display picture */}
                <div>
                  <img src=" " alt={this.state.first_name} />
                </div>

                {/* User bio */}
                <div>
                  <p>{this.state.username}</p>
                  <p>{this.state.email}</p>
                </div>
              </div>

              <Footer />

              {/* 2nd column */}
              <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <div className="App-header">
                  <h3>In your area today</h3>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        );
    }

}

export default Profile;

