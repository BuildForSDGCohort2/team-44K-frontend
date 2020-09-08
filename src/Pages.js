import React, {Component} from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as Yup from 'yup'
import "./bootstrap.css";
import "./App.css";
import "./Profile"
import {useForm } from 'react-hook-form';
import { Formik, Field, Form, ErrorMessage, useFormik, validateYupSchema } from 'formik';
import {register, login} from './components/userFunctions'
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
      <div className="row  navbar navbar-dark navbar-collapse">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 jumbotron mt-5">
          <h5 className="header">
            <img
              src={Logopit}
              alt="Logo"
              width="30%"
              height="95%"
              className="float-left "
            />
            <h2 className="text-center">Hello and welcome to findIt...</h2>

            <Link to={"/"} replace={true} className="nav-link">
              Home
            </Link>
            <span className="float-right">
              <Link to={"/Signup"} replace={true} className="nav-link">
                Signup
              </Link>
              |<Link to={"/Login"} className="nav-link">Login</Link> |
              <Link to={"/About"} className="nav-link">About</Link>
            </span>
          </h5>
        </div>

        <Switch>
          <Route exact path={"/"} component={HomepageUI} />
          <Route exact path={"/Signup"} component={Signup} />
          <Route exact path={"/Login"} component={Login} />
          <Route path={"/About"} component={About} exact={true} />
        </Switch>
      </div>
    </div>
  );

}

/**
 * Page footer goes here
 * footer to be imported everywhere
 * JSX syntax used here 
 */

 export const Footer = () => {
   return (
     <diV>
       <div className="row">
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 footer">
           <h4 className="text-center">
             &copy; {new Date().getFullYear()} by Magpiny
           </h4>
         </div>
       </div>
     </diV>
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

 class Signup extends Component {
   constructor() {
     super();
     this.state = {
       first_name: "",
       last_name: "",
       username: "",
       email: "",
       age: "",
       password: "",
     };
     this.onchange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
   }
   //handleChange events
   onChange(e) {
     this.setState({ [e.target.name]: e.target.value });
   }

   //handleSubmit events
   onSubmit(e) {
     e.preventDefault();

     const user = {
       first_name: this.state.first_name,
       last_name: this.state.last_name,
       username: this.state.username,
       email: this.state.email,
       age: this.state.age,
       password: this.state.password,
     }
     register(user).then((res) => {
       if (res) {
         this.props.history.push("/Login");
       }
     });
   }

    validationSchema = Yup.object({
     first_name : Yup.string().min(2).required('Required'),
     last_name : Yup.string().min(2).required('Required'),
     username : Yup.string().max(25).required('Required'),
     email    : Yup.email().required('Required'),
     password : Yup.string().min(8).required('Required')
   }) 

   render() {

    return(
      <div className="container">
        <div className="form-group">

          <Formik initialValues={{
            first_name:"",
            last_name:"" ,
            username:"",
            email:"",
            password: ""
            }}
            validationSchema={this.validationSchema}
            onSubmit={this.onSubmit}
            >


              {
                ({handleSubmit, values, errors}) => {


                  <Form onSubmit={handleSubmit}>

                    <input
                          type="text"
                          

                    
                    />

                  </Form>


                }
              }

          </Formik>

        </div>



        </div>
    )
   }
 }























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

    <Link to={"/"} replace={true}>
      Home
    </Link>


    {/* Signup footer*/}
    
      <Footer />

    
  </div>
);

}



/**
 * Login page
 * Details to be captured includes
 * email and username
 */

class Login extends Component{
  constructor(){
    super()
    this.state = {
      email : "",
      password : ""
    }
    this.onchange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState ({[e.target.name] : e.target.value})
  }

  onSubmit(e){
    e.preventDefault()

    const user = {
      email : this.state.email,
      password : this.state.password
    }
    login(user).then(res =>{

      if (res){
        this.props.history.push(`/Profile`)

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
              name="email" onChange={this.onChange}
               value={this.state.email}
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
                 value={this.state.password}
                 onChange = {this.onChange}
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

export default Login ;


/**
 * About page
 * FAQs to be included later
 */

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


/*
ReactDOM.render(<What to be rendered>, (where to render)) is not used with functional components

 reactDom.render(<Signup />, document.getElementById("root"));
 reactDom.render(<Login />, document.getElementById("root"));
 reactDom.render(<About />, document.getElementById("root"));

*/

