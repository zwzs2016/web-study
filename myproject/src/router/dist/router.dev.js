"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _es6_study = _interopRequireDefault(require("../pages/index/es6_study"));

var _js_study = _interopRequireDefault(require("../pages/js/js_study"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var study_01 = function study_01() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_01'));
  });
};

var study_02 = function study_02() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_02'));
  });
};

var study_03 = function study_03() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_03'));
  });
};

var study_04 = function study_04() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_04'));
  });
};

var study_05 = function study_05() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_05'));
  });
};

var study_06 = function study_06() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/index/components/study_06'));
  });
};

var js_study01 = function js_study01() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/js/components/study01'));
  });
};

var js_study02 = function js_study02() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../pages/js/components/study02'));
  });
};

_vue["default"].use(_vueRouter["default"]);
/*初始化组件*/


var _default = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    component: _es6_study["default"],
    children: [{
      path: 'study01',
      component: study_01
    }, {
      path: 'study02',
      component: study_02
    }, {
      path: 'study03',
      component: study_03
    }, {
      path: 'study04',
      component: study_04
    }, {
      path: 'study05',
      component: study_05
    }, {
      path: 'study06',
      component: study_06
    }]
  }, {
    path: '/js',
    component: _js_study["default"],
    children: [{
      path: 'study01',
      component: js_study01
    }, {
      path: 'study02',
      component: js_study02
    }]
  }]
});

exports["default"] = _default;