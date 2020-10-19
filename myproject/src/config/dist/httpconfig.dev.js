"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mysql = exports.http = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxios["default"], _axios["default"]);

var http = _axios["default"].create({
  baseURL: 'http://127.0.0.1:8090',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  },
  proxy: {
    host: 'http://127.0.0.1',
    port: 8090 // auth: {
    //   username: 'mikeymike',
    //   password: 'rapunz3l'
    // }

  }
});

exports.http = http;

var mysql = _axios["default"].create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  proxy: {
    host: 'http://localhost',
    port: 3000
  }
});

exports.mysql = mysql;