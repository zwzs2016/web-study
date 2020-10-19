"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router/router"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _highlight = _interopRequireDefault(require("highlight.js"));

require("highlight.js/styles/atom-one-dark.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_highlight["default"].vuePlugin);

_vue["default"].use(_elementUi["default"]);

_vue["default"].directive('highlight', function (el) {
  var blocks = el.querySelectorAll('pre code');
  blocks.forEach(function (block) {
    _highlight["default"].highlightBlock(block);
  });
}); // Vue.config.productionTip = false


new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');