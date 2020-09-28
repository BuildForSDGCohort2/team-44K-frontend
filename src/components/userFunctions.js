//import React from 'react';
import axios from 'axios';


export const register = newUser => {
    return axios
      .post("http://localhost:5000/users/register", {
        username: newUser.username,
        email: newUser.email,
        age: newUser.age,
        password: newUser.password,
      })
      .then((res) => {
        console.log("Registered");
        return res.data;
      });
}

export const login = user => {
    return axios
      .post("http://localhost:5000/users/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        //localStorage.removeItem("usertoken", res.data);
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
}