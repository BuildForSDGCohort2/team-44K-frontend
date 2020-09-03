import React from "react";
import { Link, Route, BrowserRouter, Router, Switch } from "react-router-dom";
import "./bootstrap.css";
import "./App.css";
import {useForm } from 'react-hook-form';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import compass from './Images/compass.jpg'
import android from './Images/android.jpg'




/**
 * Time things
 */


let today = new Date();
let date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getUTCFullYear();
let time =
  today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
let dateTime = date + "      " + time;




export const Header = (props) => {

  return (
    <div className="container">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 jumbotron mt-5">
        <h5 className="header">
          <h2 className="text-center">Hello and welcome to findIt...</h2>

          <Link to={"/HomepageUI"} replace={true}>
            Home
          </Link>
          <span className="float-right">
            <Link to={"/Signup"} replace={true}>
              Signup
            </Link>
            |<Link to={"/Login"}>Login</Link> |<Link to={"/About"}>About</Link>
          </span>
        </h5>
        <Switch>
          <Route  path={"/HomepageUI"} component={HomepageUI} exact={true} />
          <Route exact path={"/Signup"} component={Signup} exact={true} />
          <Route exact path={"/Login"} component={Login} exact={true} />
          <Route path={"/About"} component={About} exact={true} />
        </Switch>
      </div>
    </div>
  );

}

//findit homepage UI
export const HomepageUI = (props) => {
  console.log(android)

  return (
    <div className="container">
      <div className="row">
        {/* Homepage header */}

        {/* Homepage body */}
        <div className="row">
          <div className="col-sm-12 col-md-8 main">
              <img path={android} height="50%" />
              Hello
            
          </div>

          <div className="col-sm-12 col-md-4 main">
            <img src={android} alt="some-images" className="rounded " />
          </div>
        </div>
        <br></br>
        {/* Homepage footer */}

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 footer">
            <h4 className="text-center">
              &copy; {new Date().getFullYear()} by Magpiny
            </h4>
          </div>
        </div>


      </div>
    </div>
  );

}
  


/**
 * Signup page
 */
export const Signup = (props) => {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data); 
    console.log(errors)

return (
  //signup
  <div className="container bg-success signup justify-content-center ">
    <h1 className="text-center">Kindly Signup... {dateTime}</h1>
    <br />

    {/**
     * My Signup form goes here
     *
     */}
    <form onSubmit={handleSubmit(onSubmit)} className=" form-control ">
      {/* Handlesubmit validates input before submitting*/}
      <label for="firstName">First Name</label>&nbsp;&nbsp;
      <input
        type="text"
        name="First Name "
        placeholder="Sammy"
        ref={register({ required: true, minLength: 2, maxLength: 50 })}
      />
      {/* errors will return when field validation fails */}
      {errors.LastName && (
        <span className="alert-danger">This field is required</span>
      )}
      <br></br>
      <br />
      {/** register is used register input into the hook
       * include validation with required or other html validation techniques
       */}
      <label for="lastName"> Last Name</label>&nbsp;&nbsp;
      <input
        type="text"
        name="LastName"
        defaultValue=""
        placeholder="Magpiny"
        ref={register({ required: true, maxLength: 50, minLength: 2 })}
      />
      {errors.LastName && (
        <span className="alert-danger">This field is required</span>
      )}
      <br></br>
      <br />
      <label for="email">Email</label>&nbsp;&nbsp;&nbsp;
      <input
        type="text"
        name="email"
        defaultValue=""
        ref={register({ required: true, pattern: !/^\S+@\S+$/i })}
      />
      {errors.email && (
        <span className="alert-danger">Not a valid email address!</span>
      )}
      <br></br>
      <br />
      <label for="age">Select your Age group</label>&nbsp;&nbsp;
      <select name="age">
        <option value="youth">18 - 24</option>
        <option value="abled">25 - 35</option>
        <option value="peek">36 - 49</option>
        <option value="elders">Above 50</option>
      </select>
      {errors.age && (
        <span className="alert-danger">This field is required</span>
      )}
      <br />
      <br />
      <button type="submit">Register</button>
    </form>

    {/* Signup footer*/}
    <div className="footer"></div>
    <Link to={"/"} replace={true}>
      {" "}
      Home{" "}
    </Link>
  </div>
);

}





/**
 * Login page
 * Details to be captured includes
 * email and username
 */

export const Login = function () {

  return (
    <div className="container ">
      <h1>Kindly login {dateTime} </h1>

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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-control-sm">
              <label for="email">Enter your email</label> &nbsp;&nbsp;
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                className="alert-danger"
                component="div"
              />
              <br />
              <br />
              <label for="password">Enter your password</label> &nbsp;&nbsp;
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <br />
              <br />
              <button
                type="submit"
                className="btn bg-yellow btn-sm btn-outline-info "
                disabled={isSubmitting}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};







/**
 * About page
 * FAQs to be included later
 */

 export const About = () => {
   return (
     <div className="container">
       <h1>
         This is my about page{" "}
         <Link to={"/HomepageUI"} action="replace"> Home </Link>
       </h1>
     </div>
   );
 };


/*
ReactDOM.render(<What to be rendered>, (where to render)) is not used with functional components

 reactDom.render(<Signup />, document.getElementById("root"));
 reactDom.render(<Login />, document.getElementById("root"));
 reactDom.render(<About />, document.getElementById("root"));

*/

