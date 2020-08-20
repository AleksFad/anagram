(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/js/components/Home.js");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Fetch.js":
/*!***************************************!*\
  !*** ./assets/js/components/Fetch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Welcome */ "./assets/js/components/Welcome.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Fetch = function Fetch() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("http://127.0.0.1:8000/api/fetch").then(function () {
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Welcome__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("section", {
    className: "row-section fetch-status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "container"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: 'row text-center row-spinner'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", {
    className: "fa fa-spin fa-spinner fa-4x"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: 'row'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h2", null, "Wordbase is up to date!")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Fetch);

/***/ }),

/***/ "./assets/js/components/Home.js":
/*!**************************************!*\
  !*** ./assets/js/components/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Welcome */ "./assets/js/components/Welcome.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Search */ "./assets/js/components/Search.js");
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Fetch */ "./assets/js/components/Fetch.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NotFound */ "./assets/js/components/NotFound.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        exact: true,
        path: "/",
        component: _Welcome__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/search",
        component: _Search__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "/fetch",
        component: _Fetch__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["Route"], {
        path: "",
        component: _NotFound__WEBPACK_IMPORTED_MODULE_19__["default"]
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_14__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/js/components/Navbar.js":
/*!****************************************!*\
  !*** ./assets/js/components/Navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Navbar = function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: "navbar-brand",
    to: "/"
  }, " Anagram finder "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: "nav-link",
    to: "/fetch"
  }, " Fetch ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    className: "nav-link",
    to: "/search"
  }, " Search ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./assets/js/components/NotFound.js":
/*!******************************************!*\
  !*** ./assets/js/components/NotFound.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./assets/js/components/Navbar.js");




var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'not-found'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We are sorry but the page you are looking for does not exist."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Go to Home ")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./assets/js/components/Search.js":
/*!****************************************!*\
  !*** ./assets/js/components/Search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Welcome */ "./assets/js/components/Welcome.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      searchState = _useState6[0],
      setSearchState = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      result = _useState8[0],
      setResult = _useState8[1];

  var submitForm = function submitForm(e) {
    e.preventDefault();
    search.length > 0 ? setSearchState('has-success') : setSearchState('has-danger');
    execute(search);
  };

  var execute = function execute(search) {
    var config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    var formData = new FormData();
    formData.append('search', search);
    axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("http://127.0.0.1:8000/api/search", formData, config).then(function (response) {
      setResult(response.data);
      setLoading(false);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var handleSearch = function handleSearch(e) {
    var input = e.target.value.toLowerCase();
    input.length > 0 ? setSearchState('has-success') : setSearchState('has-danger');
    setSearch(input);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Welcome__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
    className: "row-section search-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", {
    className: "text-center"
  }, "Search for Anagrams")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: 'row text-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    className: "fa fa-spin fa-spinner fa-4x"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: 'row text-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Form"], {
    name: 'search-form',
    inline: true,
    onSubmit: function onSubmit(e) {
      return submitForm(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["FormGroup"], {
    check: true,
    className: "mb-2 mr-sm-2 mb-sm-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Input"], {
    valid: searchState === 'has-success',
    invalid: searchState === 'has-danger',
    value: search,
    type: "text",
    name: "search",
    id: "search",
    placeholder: "Type here...",
    onChange: function onChange(e) {
      handleSearch(e);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["FormFeedback"], {
    valid: true
  }, "That it is sweet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["FormFeedback"], null, "String cannot be blank")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
    disabled: !search,
    type: "submit",
    color: "success",
    value: "search"
  }, "Search"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", {
    className: "row-section search-result"
  }, result ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "result-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "Result of search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", {
    className: "result"
  }, result.length > 0 ? result.map(function (res, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
      key: index
    }, res.anagram);
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", null, "Nothing found. Try again!"))) : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./assets/js/components/Welcome.js":
/*!*****************************************!*\
  !*** ./assets/js/components/Welcome.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./assets/js/components/Navbar.js");





var Welcome = function Welcome() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "welcome-msg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to anagram finder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/fetch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    className: "btn-fetch",
    color: "success"
  }, "Fetch"), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    className: "btn btn-find",
    color: "primary"
  }, "Find"), ' ')));
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RGb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvV2VsY29tZS5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJGZXRjaCIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJIb21lIiwiV2VsY29tZSIsIlNlYXJjaCIsIk5vdEZvdW5kIiwiQ29tcG9uZW50IiwiTmF2YmFyIiwic2VhcmNoIiwic2V0U2VhcmNoIiwic2VhcmNoU3RhdGUiLCJzZXRTZWFyY2hTdGF0ZSIsInJlc3VsdCIsInNldFJlc3VsdCIsInN1Ym1pdEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJleGVjdXRlIiwiY29uZmlnIiwiaGVhZGVycyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoIiwiaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwibWFwIiwicmVzIiwiaW5kZXgiLCJhbmFncmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7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QUEsR0FBWCxDQURGLGdCQUtFLG9HQU5SLENBRkosQ0FESSxHQVlGLEVBYlYsQ0FyQ0osQ0FESjtBQXVESCxDQTVGRDs7QUE4RmVsQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQixzQkFDSSwyREFBQyw4Q0FBRCxxQkFDSSwyREFBQywrQ0FBRCxPQURKLGVBRUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxtR0FESixlQUVJLDJEQUFDLHFEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQWtCLDJEQUFDLGlEQUFEO0FBQVEsUUFBSSxFQUFDLElBQWI7QUFBa0IsYUFBUyxFQUFFLFdBQTdCO0FBQTBDLFNBQUssRUFBQztBQUFoRCxhQUFsQixFQUEyRixHQUEzRixDQUZKLGVBR0ksMkRBQUMscURBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxrQkFBbUIsMkRBQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsSUFBYjtBQUFrQixhQUFTLEVBQUUsY0FBN0I7QUFBNkMsU0FBSyxFQUFDO0FBQW5ELFlBQW5CLEVBQThGLEdBQTlGLENBSEosQ0FGSixDQURKO0FBVUgsQ0FYRDs7QUFhZUEsc0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi9XZWxjb21lJztcblxuXG5jb25zdCBGZXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZmV0Y2hgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KVxuICAgIH0sW10pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxXZWxjb21lIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb24gZmV0Y2gtc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JvdyB0ZXh0LWNlbnRlciByb3ctc3Bpbm5lcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Xb3JkYmFzZSBpcyB1cCB0byBkYXRlITwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCBXZWxjb21lIGZyb20gJy4vV2VsY29tZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xuaW1wb3J0IEZldGNoIGZyb20gXCIuL0ZldGNoXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9Ob3RGb3VuZCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1dlbGNvbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlYXJjaFwiIGNvbXBvbmVudD17U2VhcmNofSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9mZXRjaFwiIGNvbXBvbmVudD17RmV0Y2h9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cbiAgICByZXR1cm4gIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e1wibmF2YmFyLWJyYW5kXCJ9IHRvPXtcIi9cIn0+IEFuYWdyYW0gZmluZGVyIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJuYXYtbGlua1wifSB0bz17XCIvZmV0Y2hcIn0+IEZldGNoIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17XCJuYXYtbGlua1wifSB0bz17XCIvc2VhcmNoXCJ9PiBTZWFyY2ggPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+XG4gICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbm90LWZvdW5kJ30+XG4gICAgICAgICAgICA8aDE+NDA0IHBhZ2Ugbm90IGZvdW5kPC9oMT5cbiAgICAgICAgICAgIDxwPldlIGFyZSBzb3JyeSBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5HbyB0byBIb21lIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9GcmFnbWVudD5cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIEZvcm1GZWVkYmFjayB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi9XZWxjb21lJztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlYXJjaFN0YXRlLCBzZXRTZWFyY2hTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIChzZWFyY2gubGVuZ3RoID4gMCkgPyBzZXRTZWFyY2hTdGF0ZSgnaGFzLXN1Y2Nlc3MnKSA6IChzZXRTZWFyY2hTdGF0ZSgnaGFzLWRhbmdlcicpKTtcbiAgICAgICAgZXhlY3V0ZShzZWFyY2gpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4ZWN1dGUgPSAoc2VhcmNoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZWFyY2gnLCBzZWFyY2gpO1xuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3NlYXJjaGAsIGZvcm1EYXRhLCBjb25maWcpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAoaW5wdXQubGVuZ3RoID4gMCkgPyBzZXRTZWFyY2hTdGF0ZSgnaGFzLXN1Y2Nlc3MnKSA6IHNldFNlYXJjaFN0YXRlKCdoYXMtZGFuZ2VyJyk7XG4gICAgICAgIHNldFNlYXJjaChpbnB1dCk7XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxXZWxjb21lIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvbiBzZWFyY2gtcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNlYXJjaCBmb3IgQW5hZ3JhbXM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JvdyB0ZXh0LWNlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBuYW1lPXsnc2VhcmNoLWZvcm0nfSBpbmxpbmUgb25TdWJtaXQ9eyAoZSkgPT4gc3VibWl0Rm9ybShlKSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNoZWNrIGNsYXNzTmFtZT1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZD17IHNlYXJjaFN0YXRlID09PSAnaGFzLXN1Y2Nlc3MnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXsgc2VhcmNoU3RhdGUgPT09ICdoYXMtZGFuZ2VyJyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWFyY2goZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZlZWRiYWNrIHZhbGlkPlRoYXQgaXQgaXMgc3dlZXQ8L0Zvcm1GZWVkYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmVlZGJhY2s+U3RyaW5nIGNhbm5vdCBiZSBibGFuazwvRm9ybUZlZWRiYWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IXNlYXJjaH0gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic3VjY2Vzc1wiIHZhbHVlPVwic2VhcmNoXCI+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdy1zZWN0aW9uIHNlYXJjaC1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgICB7IHJlc3VsdCA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVzdWx0IG9mIHNlYXJjaDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmVzdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXN1bHQubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1hcCgocmVzLGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntyZXMuYW5hZ3JhbX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk5vdGhpbmcgZm91bmQuIFRyeSBhZ2FpbiE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5cbmNvbnN0IFdlbGNvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1zZ1wiPlxuICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIGFuYWdyYW0gZmluZGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mZXRjaFwiPjxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPXtcImJ0bi1mZXRjaFwifSBjb2xvcj1cInN1Y2Nlc3NcIj5GZXRjaDwvQnV0dG9uPnsnICd9PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NlYXJjaFwiPjxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPXtcImJ0biBidG4tZmluZFwifSBjb2xvcj1cInByaW1hcnlcIj5GaW5kPC9CdXR0b24+eycgJ308L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=