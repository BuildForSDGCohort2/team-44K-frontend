import React, {Component} from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as Yup from 'yup';
import "./bootstrap.css";
import "./App.css";
import Profile from  "./Profile"
import * as Icon from "react-bootstrap-icons";
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import {register, login} from './components/userFunctions';
import compass from './Images/compass.jpg';
import android from './Images/android.jpg';
import Logopit from './Images/Logopit.png';
import facebook from './Images/facebook.png';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import twitter from './Images/twitter.png';
import instagram from './Images/instagram.png';
import whatsapp from './Images/whatsapp.png';




/**
 * Time things
 */


let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getUTCFullYear();
let time =
  today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
let dateTime = date + "      " + time;

/**
 * Page header goes here
 * @param {*} props 
 */
export const Header = (props) => {

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 jumbotron mt-2">
          <h5 className="header">
            <img
              src={Logopit}
              alt="Logo"
              width="30%"
              height="95%"
              className="float-left "
            />
            <p className="text-center">Hello and welcome to findIt...</p>

            <Link to={"/"} replace={true} >
              Home
            </Link>
            <span className="float-right">
              <Link to={"/Signup"} replace={true}>
                Signup
              </Link>
              |
              <Link to={"/Login"} >
                Login
              </Link>{" "}
              |
              <Link to={"/About"} >
                About
              </Link>
            </span>
          </h5>
        </div>

        <Switch>
          <Route exact path={"/"} component={HomepageUI} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/About"} component={About} />
          <Route exact path={"/Profile"} component={Profile} />
        </Switch>
      </div>
    </div>
  );

}

/**
 * Page footer goes here
 * footer to be imported everywhere
 *  
 */

 export const Footer = () => {
   return (
     <div>
       <div className="row">
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 footer">
           <h4 className="text-center">
             &copy; {new Date().getFullYear()} by Magpiny
           </h4>
         </div>
       </div>
     </div>
   );
 }

//findit homepage UI
export const HomepageUI = () => {
  console.log(android)

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Homepage header */}

        {/* Homepage body */}
        <div className="row">
          <div className="col-sm-12 col-md-8 main">
            <div>
              <img src={compass} alt="some-images" className="rounded " />
            
            </div>
          </div>

          <div className="col-sm-12 col-md-4 main">
            <img src={android} alt="some-images" className="rounded " />
          </div>
        </div>
      </div>

      <br></br>
      {/* Homepage footer */}
      <Footer />
    </div>
  );

}
  


/**
 * The signup component!!
 * Signup page styles & settings goes here
 * 
 */

//Validation Schema
 const signUpSchema = Yup.object({
   username: Yup.string().min(2).max(25, "Username too long!").required("Username is Required"),
   email: Yup.string().email().required("Email address required!"),
   age : Yup.string(),
   password: Yup.string().min(8, "password too short!").required("Password is required!"),
   confirm_password: Yup.string()
     .min(8)
     .required()
     .oneOf([Yup.ref("password"), null], "Passwords must match!"),
 });

 export class Signup extends Component {
   constructor(props) {
     super(props);
     this.state = {
       username: "",
       email: "",
       age: "",
       password: "",
       confirm_password: "",
     };
     
     this.onSubmit = this.onSubmit.bind(this);
   }

   
   

   //handleSubmit events
   onSubmit(values) {

     const user = {
       username: values.username,
       email: values.email,
       age: values.age,
       password: values.password,
     };
     console.log(user);

     register(user).then((res) => {
        this.props.history.push("login");
           
     });  
   }

   render() {
     return (
       <div className="container">
         <div className="form mt-5 mx-auto my-auto">
           <h1 className="mb-3">Kindly login {dateTime} </h1>
           <Formik
             initialValues={{
               username: "",
               email: "",
               age: "",
               password: "",
               confirm_password: "",
             }}
             validationSchema={signUpSchema}
             onSubmit={this.onSubmit}
           >
             {(formik) => (
               <Form className="mx-auto block" onSubmit={ formik.handleSubmit }>
                 <label htmlFor="username">Enter your username</label>
                 <Field
                   type="text"
                   name="username"
                   placeholder="john"
                 
                   
                   autoComplete="true"
                 />

                 <ErrorMessage
                   name="username"
                   className="alert-danger"
                   component="div"
                 />
                 <br />
                 <br />

                 <label htmlFor="email">Email Address</label>

                 <Field
                   type="email"
                   name="email"
                   placeholder="xyz@yahoo.com"
                 
                   
                 />

                 <ErrorMessage
                   name="email"
                   className="alert alert-danger"
                   component="div"
                 />

                 <br />
                 <br />

                 <label htmlFor="age">Age</label>

                 <Field
                   as="select"
                   type="text"
                   name="age"   
                   
                 >
                   <option value="18-24">18-24</option>
                   <option value="25-34">25-34</option>
                   <option value="35-50">35-50</option>
                   <option value="Above 50">Above 50</option>
                 </Field>

                 <ErrorMessage
                   name="age"
                   className="alert alert-danger"
                   component="div"
                 />
                 <br />
                 <br />

                 <label htmlFor="password">password</label>

                 <Field
                   type="password"
                   name="password"
                   placeholder="xyz@fa3_89-"
                  
                   
                 />

                 <ErrorMessage
                   name="password"
                   className="alert-danger"
                   component="div"
                 />
                 <br />
                 <br />

                 <label htmlFor="password">Confirm password</label>

                 <Field
                   type="password"
                   name="confirm_password"
                   placeholder=""
                   
                   
                 />

                 <ErrorMessage
                   name="confirm_password"
                   className="alert alert-danger"
                   component="div"
                 />
                 <br />
                 <br />

                 <button type="submit" className="btn btn-warning btn-md  ">
                   Signup
                 </button>
               </Form>
             )}
           </Formik>
         </div>

         <Footer />
       </div>
     );
   }
 }


 

/**
 * Login page component
 * Details to be captured includes
 * email and username
 */

export class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : "",
      password : ""
    };
   
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(values){
    
    const user = {
      email : values.email,
      password : values.password
    }
    console.log(user);
    login(user).then(res =>{
      
      this.props.history.push("/Profile");
    
    })
  }

  
  render(){


    return (
      <div className="container ">
        <h1 className="mb-3">Kindly login {setTimeout(() => dateTime, 1000)} </h1>

        {/* My form goes here */}

        <div className="bg-gray  form-control-sm ">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={this.onSubmit}
          >
            {(formik) => (
              <Form
                onSubmit={formik.handleSubmit}
                className="form-control-sm align-content-center mt-5"
              >
                <label htmlFor="email">Enter your email</label> &nbsp;&nbsp;
                <Field type="email" name="email" placeholder="xyz@yahoo.com" />
                <br />
                <br />
                <label htmlFor="password">Enter your password</label>{" "}
                &nbsp;&nbsp;
                <Field type="password" name="password" />
                <br />
                <br />
                <button
                  type="submit"
                  className="btn btn-warning btn-md btn-outline-info "
                  disabled={formik.isSubmitting}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    );
  }
}

/**
 * 
 * About Page
 */

export const About = () =>{

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

