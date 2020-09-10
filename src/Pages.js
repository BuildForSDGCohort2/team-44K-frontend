import React, {Component} from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as Yup from 'yup';
import "./bootstrap.css";
import "./App.css";
import "./Profile"
import { Formik, Field, Form, ErrorMessage  } from 'formik';
import {register, login} from './components/userFunctions';
import About from './components/About'
import compass from './Images/compass.jpg';
import android from './Images/android.jpg';
import Logopit from './Images/Logopit.png';




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
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 jumbotron mt-5">
          <h5 className="header">
            <img
              src={Logopit}
              alt="Logo"
              width="30%"
              height="95%"
              className="float-left "
            />
            <p className="text-center">Hello and welcome to findIt...</p>

            <Link to={"/"} replace={true} className="">
              Home
            </Link>
            <span className="float-right">
              <Link to={"/Signup"} replace={true} >
                Signup
              </Link>
              |<Link to={"/Login"} className="">Login</Link> |
              <Link to={"./About"} className="">About</Link>
            </span>
          </h5>
        </div>

        <Switch>
          <Route exact path={"/"} component={HomepageUI} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/Login"} component={Login} />
          <Route path={"./About"} component={About} exact={true} />
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
 * Signup page settings goes here
 * 
 * 
 */

//Validation Schema
 const signUpSchema = Yup.object({
   username: Yup.string().max(25, "Username too long!").required("Username is Required"),
   email: Yup.string().email().required("Email address required!"),
   age : Yup.string().notRequired(),
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
    onSubmit(e) {
     e.preventDefault();

     const user = {
       username: this.state.username,
       email: this.state.email,
       age: this.state.age,
       password: this.state.password,
     };
     register(user).then((res) => {
       if (res) {
         this.props.history.push("/Login");
       }
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
             onSubmit={(values) => console.log(values)}
           >
             {({ handleSubmit }) => (
               <Form className="mx-auto block">
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

                 <Field type="email" name="email" placeholder="xyz@yahoo.com" />

                 <ErrorMessage
                   name="email"
                   className="alert alert-danger"
                   component="div"
                 />

                 <br />
                 <br />

                 <label htmlFor="age">Age</label>

                 <Field as="select" type="text" name="age">
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
 * Login page
 * Details to be captured includes
 * email and username
 */

export class Login extends Component{
  constructor(){
    super()
    this.state = {
      email : "",
      password : ""
    }
   // this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /*onChange(e){
    this.setState ({[e.target.name] : e.target.value})
  }  */

  onSubmit(e){
    e.preventDefault()

    const user = {
      email : this.state.email,
      password : this.state.password
    }
    login(user).then(res =>{

      if (res){
        this.props.history.push('/Profile')

      }

    })
  }

  
  render(){


    return(
      
      <div className="container ">
      <h1 className="mb-3">Kindly login {dateTime} </h1>

      {/* My form goes here */}

      <div className="bg-gray  form-control-sm ">
        <Formik
          className=""
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address! ";
            }
            return errors;
          }}
          /*
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 2000);
          }}
       */

        >
          {({ isSubmitting }) => (
            <Form validate onSubmit={this.onSubmit} className="form-control-sm align-content-center mt-5">

              <label htmlFor="email">Enter your email</label> &nbsp;&nbsp;

              <Field type="email" 
              name="email"
               //value={this.state.email}
               placeholder="xyz@yahoo.com"
              />

              <ErrorMessage
                name="email"
                className="alert-danger"
                component="div"
              />
              <br />
              <br />

              <label htmlFor="password">Enter your password</label> &nbsp;&nbsp;
              <Field type="password" name="password" 
                 //value={this.state.password}
                 //onChange = {this.onChange}
              />
              <ErrorMessage name="password" component="div" />
              <br />
              <br />

              <button
                type="submit"
                className="btn btn-primary btn-sm btn-outline-info "
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>

    )
  }
}



