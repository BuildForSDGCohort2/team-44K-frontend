"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import React from 'react';
var register = function register(newUser) {
  return _axios["default"].post("http://localhost:5000/users/register", {
    username: newUser.username,
    email: newUser.email,
    age: newUser.age,
    password: newUser.password
  }).then(function (res) {
    console.log("Registered");
    return res.data;
  });
};

exports.register = register;

var login = function login(user) {
  return _axios["default"].post("/users/login", {
    email: user.email,
    password: user.password
  }).then(function _callee(res) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //localStorage.removeItem("usertoken", res.data);
            //let token = JSON.stringify(res.data) ;
            localStorage.setItem("usertoken", res.data);
            return _context.abrupt("return", res.data);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.login = login;