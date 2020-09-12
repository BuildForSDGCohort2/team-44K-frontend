"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(newUser) {
  return _axios["default"].post("/users/register", {
    username: newUser.username,
    email: newUser.email,
    age: newUser.age,
    password: newUser.password
  }).then(function (res) {
    console.log("Registered");
  });
};

exports.register = register;

var login = function login(user) {
  return _axios["default"].post('/users/login', {
    email: user.email,
    password: user.password
  }).then(function (res) {
    localStorage.setItem('usertoken', res.data);
    return res.data;
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.login = login;