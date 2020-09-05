/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n    Footer start\n */\n\nfooter {\n    width: 100%;\n    display: flex;\n    background: white;\n    align-items: center;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    overflow: hidden;\n\n}\n\nfooter * {\n    padding-left: 1vw;\n    font-size: 1.5vmax;\n}\n\n/*\n    Footer end\n */", "",{"version":3,"sources":["footer.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,gBAAgB;;AAEpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;EAEE","file":"footer.css","sourcesContent":["/*\n    Footer start\n */\n\nfooter {\n    width: 100%;\n    display: flex;\n    background: white;\n    align-items: center;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    overflow: hidden;\n\n}\n\nfooter * {\n    padding-left: 1vw;\n    font-size: 1.5vmax;\n}\n\n/*\n    Footer end\n */"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n    Header start\n*/\n\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    background: white;\n    align-items: center;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    overflow: hidden;\n}\n\nheader .title {\n    font-size: 3vmax;\n    margin-left: 10vmin;\n    padding: 1vmin 1.5vmin 1vmin 1.5vmin;\n    display: flex;\n    align-items: center;\n    color: white;\n    background: #f00;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    cursor: pointer;\n    transition: .5s ease-in-out;\n}\n\nheader .title:hover {\n    background: white;\n    color: #f00;\n\n}\n\nheader #login-menu {\n    display: flex;\n}\n\nheader #login-menu div {\n    padding-right: 1vmin;\n    display: flex;\n    align-items: center;\n}\n\nheader #login-menu #util-btn {\n    border-left: red 0.5vmin solid;\n}\n\nheader #login-menu #util-btn a {\n    padding: 2vmin;\n    color: #f00;\n}\n\nheader #login-menu #util-btn a:hover {\n    background: #f00;\n    color: white;\n}\n\n/*\n    Header end\n*/", "",{"version":3,"sources":["header.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,uCAAuC;IACvC,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,WAAW;;AAEf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;;CAEC","file":"header.css","sourcesContent":["/*\n    Header start\n*/\n\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    background: white;\n    align-items: center;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    overflow: hidden;\n}\n\nheader .title {\n    font-size: 3vmax;\n    margin-left: 10vmin;\n    padding: 1vmin 1.5vmin 1vmin 1.5vmin;\n    display: flex;\n    align-items: center;\n    color: white;\n    background: #f00;\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\n    cursor: pointer;\n    transition: .5s ease-in-out;\n}\n\nheader .title:hover {\n    background: white;\n    color: #f00;\n\n}\n\nheader #login-menu {\n    display: flex;\n}\n\nheader #login-menu div {\n    padding-right: 1vmin;\n    display: flex;\n    align-items: center;\n}\n\nheader #login-menu #util-btn {\n    border-left: red 0.5vmin solid;\n}\n\nheader #login-menu #util-btn a {\n    padding: 2vmin;\n    color: #f00;\n}\n\nheader #login-menu #util-btn a:hover {\n    background: #f00;\n    color: white;\n}\n\n/*\n    Header end\n*/"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main-content.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main-content.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n    start main-content\n*/\n\n#content main {\n    background: white;\n    margin: 3vh auto 3vh;\n    height: auto;\n    width: 50vw;\n    min-width: 400px;\n    min-height: 400px;\n    border-radius: 1vmin;\n}\n\n#content main .title {\n    width: 100%;\n    text-align: center;\n    font-size: 3vmax;\n    padding: 1vmin 0 2vmin;\n    border-bottom: 3px solid #f4f4f4;\n}\n\n#content main .plays .play {\n    padding: 1vmax;\n    border-bottom: 2px solid #f4f4f4;\n}\n\n\n#content main .plays .play .play-title {\n    display: inline-block;\n    width: auto;\n    background: #ff0000;\n    color: white;\n    font-weight: bold;\n    padding: 1vmin;\n}\n\n#content main .plays .play .play-info {\n    display: flex;\n    padding-top: 1.5vmin;\n    padding-bottom: 1.5vmin;\n}\n\n#content main .plays .play .play-info * {\n    padding-left: 1vmin;\n}\n\n#content main .plays .play a.date-link {\n    color: #6f6f6f;\n    padding-left: 1vmin;\n}\n\n#content main .plays .play a.date-link:hover {\n    color: #ff0000;\n}\n\n\n/*\n    end main-content\n*/", "",{"version":3,"sources":["main-content.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,gCAAgC;AACpC;;;AAGA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;AAGA;;CAEC","file":"main-content.css","sourcesContent":["/*\n    start main-content\n*/\n\n#content main {\n    background: white;\n    margin: 3vh auto 3vh;\n    height: auto;\n    width: 50vw;\n    min-width: 400px;\n    min-height: 400px;\n    border-radius: 1vmin;\n}\n\n#content main .title {\n    width: 100%;\n    text-align: center;\n    font-size: 3vmax;\n    padding: 1vmin 0 2vmin;\n    border-bottom: 3px solid #f4f4f4;\n}\n\n#content main .plays .play {\n    padding: 1vmax;\n    border-bottom: 2px solid #f4f4f4;\n}\n\n\n#content main .plays .play .play-title {\n    display: inline-block;\n    width: auto;\n    background: #ff0000;\n    color: white;\n    font-weight: bold;\n    padding: 1vmin;\n}\n\n#content main .plays .play .play-info {\n    display: flex;\n    padding-top: 1.5vmin;\n    padding-bottom: 1.5vmin;\n}\n\n#content main .plays .play .play-info * {\n    padding-left: 1vmin;\n}\n\n#content main .plays .play a.date-link {\n    color: #6f6f6f;\n    padding-left: 1vmin;\n}\n\n#content main .plays .play a.date-link:hover {\n    color: #ff0000;\n}\n\n\n/*\n    end main-content\n*/"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_content_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./main-content.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main-content.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_play_page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./play-page.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/play-page.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fonts_GTWalsheimPro_otf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/GTWalsheimPro.otf */ "./src/fonts/GTWalsheimPro.otf");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_content_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_play_page_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_5___default()(_fonts_GTWalsheimPro_otf__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n    font-family: \"GTWalsheimPro\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n    font-style: normal;\n    font-weight: normal;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n    background: #f4f4f4;\n}\n\n::-moz-focus-outer, ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    font-family: 'GTWalsheimPro', serif;\n    font-size: 2vmax;\n}\n\na {\n    text-decoration: none;\n    cursor: pointer;\n    transition: .5s ease-in-out;\n}\n\n#root {\n    display: grid;\n    height: 100%;\n    grid-template-rows: 8vh 1fr 10vh;\n}", "",{"version":3,"sources":["main.css"],"names":[],"mappings":"AAKA;IACI,4BAA4B;IAC5B,+DAAyD;IACzD,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gCAAgC;AACpC","file":"main.css","sourcesContent":["@import \"header.css\";\n@import \"footer.css\";\n@import \"main-content.css\";\n@import \"play-page.css\";\n\n@font-face {\n    font-family: \"GTWalsheimPro\";\n    src: url('../fonts/GTWalsheimPro.otf') format(\"truetype\");\n    font-style: normal;\n    font-weight: normal;\n}\n\nhtml, body {\n    height: 100%;\n    margin: 0;\n    background: #f4f4f4;\n}\n\n::-moz-focus-outer, ::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n*{\n    padding: 0;\n    margin: 0;\n    font-family: 'GTWalsheimPro', serif;\n    font-size: 2vmax;\n}\n\na {\n    text-decoration: none;\n    cursor: pointer;\n    transition: .5s ease-in-out;\n}\n\n#root {\n    display: grid;\n    height: 100%;\n    grid-template-rows: 8vh 1fr 10vh;\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal-window.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal-window.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "form .msg {\r\n    display: block;\r\n    margin-top: 10px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n.modal button {\r\n    background-color: #ff0000;\r\n    font-size: 3vmin;\r\n    color: white;\r\n    padding: 1vmin 1vmin;\r\n    margin: 3vmin 0 3vmin;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 90%;\r\n\r\n}\r\n\r\n.modal input {\r\n    padding-left: 1vmin;\r\n}\r\n\r\n.container h1 {\r\n    height: 3vmax;\r\n    background: #ff0000;\r\n    padding-top: 10px;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px 0 rgba(0,0,0,.2);\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    text-align: center;\r\n\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */\r\n    padding-top: 30px;\r\n}\r\n\r\n.modal input, select {\r\n    width: 90%;\r\n    margin-top: 2vmin;\r\n    height: 3vmax;\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5px auto; /* 15% from the top and centered */\r\n    width: 50vmin; /* Could be more or less, depending on screen size */\r\n    border: none;\r\n    border-radius: 2vmin;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 10px 3px rgba(0,0,0,.2);\r\n}\r\n\r\n/* Add Zoom Animation */\r\n.animate {\r\n    -webkit-animation: animatezoom 0.6s;\r\n    animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n    from {-webkit-transform: scale(0)}\r\n    to {-webkit-transform: scale(1)}\r\n}\r\n\r\n@keyframes animatezoom {\r\n    from {transform: scale(0)}\r\n    to {transform: scale(1)}\r\n}", "",{"version":3,"sources":["modal-window.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA,gCAAgC;AAChC;IACI,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;IACpB,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,UAAU;;AAEd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA,mCAAmC;AACnC;IACI,YAAY;AAChB;;AAEA,8BAA8B;AAC9B;IACI,kBAAkB;;AAEtB;;AAEA,oEAAoE;AACpE;IACI;QACI,cAAc;QACd,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ;;AAEA,2BAA2B;AAC3B;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,gBAAgB,EAAE,4BAA4B;IAC9C,4BAA4B,EAAE,mBAAmB;IACjD,iCAAiC,EAAE,qBAAqB;IACxD,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,aAAa,EAAE,oDAAoD;IACnE,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,uCAAuC;AAC3C;;AAEA,uBAAuB;AACvB;IACI,mCAAmC;IACnC;AACJ;;AAEA;IACI,MAAM,2BAA2B;IACjC,IAAI,2BAA2B;AACnC;;AAEA;IACI,MAAM,mBAAmB;IACzB,IAAI,mBAAmB;AAC3B","file":"modal-window.css","sourcesContent":["form .msg {\r\n    display: block;\r\n    margin-top: 10px;\r\n    color: #6a6a6a;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n.modal button {\r\n    background-color: #ff0000;\r\n    font-size: 3vmin;\r\n    color: white;\r\n    padding: 1vmin 1vmin;\r\n    margin: 3vmin 0 3vmin;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 90%;\r\n\r\n}\r\n\r\n.modal input {\r\n    padding-left: 1vmin;\r\n}\r\n\r\n.container h1 {\r\n    height: 3vmax;\r\n    background: #ff0000;\r\n    padding-top: 10px;\r\n    color: white;\r\n    box-shadow: inset 0 0 5px 0 rgba(0,0,0,.2);\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/* Add padding to containers */\r\n.container {\r\n    text-align: center;\r\n\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n/* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */\r\n    padding-top: 30px;\r\n}\r\n\r\n.modal input, select {\r\n    width: 90%;\r\n    margin-top: 2vmin;\r\n    height: 3vmax;\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5px auto; /* 15% from the top and centered */\r\n    width: 50vmin; /* Could be more or less, depending on screen size */\r\n    border: none;\r\n    border-radius: 2vmin;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 10px 3px rgba(0,0,0,.2);\r\n}\r\n\r\n/* Add Zoom Animation */\r\n.animate {\r\n    -webkit-animation: animatezoom 0.6s;\r\n    animation: animatezoom 0.6s\r\n}\r\n\r\n@-webkit-keyframes animatezoom {\r\n    from {-webkit-transform: scale(0)}\r\n    to {-webkit-transform: scale(1)}\r\n}\r\n\r\n@keyframes animatezoom {\r\n    from {transform: scale(0)}\r\n    to {transform: scale(1)}\r\n}"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/play-page.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/play-page.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n#content main .play-page .title {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .title .title-content {\r\n    background: #ff0000;\r\n    color: white;\r\n    font-size: inherit;\r\n    padding: 1.6vmin;\r\n}\r\n\r\n#content main .play-page .short-info {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .short-info div {\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .play-page .other-dates {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .other-dates a {\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .play-page .other-dates a.selected-date {\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .other-dates a.selected-date:hover {\r\n    background: white;\r\n    color: #ff0000;\r\n}\r\n\r\n#content main .play-page .other-dates a:hover {\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .play-hall {\r\n    width: 80%;\r\n    justify-content: center;\r\n    margin: auto;\r\n    padding: 2vmax 0 2vmax 0;\r\n}\r\n\r\n#content main .play-page .play-hall .row {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .play-hall .seat {\r\n    width: auto;\r\n    margin-right: 0.25em;\r\n    margin-bottom: 0.25em;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n#content main .play-page .play-hall .custom-checkbox+label {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\n\r\n\r\n#content main .play-page .play-hall .custom-checkbox+label::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 1.2em;\r\n    height: 1.2em;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    border: 1px solid #adb5bd;\r\n    border-radius: 0.2em;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: 50% 50%;\r\n    cursor: pointer;\r\n    transition: .5s ease-in-out;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {\r\n    border-color: #0ec91e;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:not(:disabled):active+label::before {\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:checked+label::before {\r\n    border-color: #0ec91e;\r\n    background-color: #0ec91e;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:disabled+label::before {\r\n    background-color: #ff0000;\r\n    border-color: #ff0000;\r\n}\r\n\r\n#content main .play-page .select-tickets-info {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .select-tickets-info .category-line {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .select-tickets-info .category-line div {\r\n    margin-left: 1vmin;\r\n}\r\n\r\n#content main .play-page .order-total-cost  {\r\n    display: flex;\r\n    padding: 1vmax;\r\n}\r\n#content main .play-page .order-total-cost .total-cost-content {\r\n    display: flex;\r\n    padding: 0.2em;\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .order-total-cost .total-cost-content div {\r\n    margin-left: 1vmin;\r\n}\r\n\r\n#content main .play-page .complete-order-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1vmin 0 2vmin;\r\n    border-top: 3px solid #f4f4f4;;\r\n}\r\n\r\n#content main .play-page .complete-order-section a {\r\n    padding: 0.2em;\r\n    background: #ff0000;\r\n    color: white;\r\n    margin: 0.5em;\r\n}\r\n\r\n#content main .play-page .complete-order-section a:hover {\r\n    background: white;\r\n    color: #ff0000;\r\n}\r\n\r\n.message-window {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background-color: rgb(0,0,0); /* Затемнение фона */\r\n    background-color: rgba(0,0,0,0.5); /* Полупрозрачное затемнение */\r\n    z-index: 1; /* Фон на нижнем слое */\r\n    overflow: auto; /* При необходимости, то появиться прокрутка */\r\n}\r\n", "",{"version":3,"sources":["play-page.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,uBAAuB;IACvB,YAAY;IACZ,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;AACA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,iBAAiB;AACrB;;;AAGA;IACI,WAAW;IACX,qBAAqB;IACrB,YAAY;IACZ,aAAa;IACb,cAAc;IACd,YAAY;IACZ,yBAAyB;IACzB,oBAAoB;IACpB,4BAA4B;IAC5B,kCAAkC;IAClC,wBAAwB;IACxB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;;IAEZ,4BAA4B,EAAE,oBAAoB;IAClD,iCAAiC,EAAE,8BAA8B;IACjE,UAAU,EAAE,uBAAuB;IACnC,cAAc,EAAE,8CAA8C;AAClE","file":"play-page.css","sourcesContent":["\r\n#content main .play-page .title {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .title .title-content {\r\n    background: #ff0000;\r\n    color: white;\r\n    font-size: inherit;\r\n    padding: 1.6vmin;\r\n}\r\n\r\n#content main .play-page .short-info {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .short-info div {\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .play-page .other-dates {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .other-dates a {\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .play-page .other-dates a.selected-date {\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .other-dates a.selected-date:hover {\r\n    background: white;\r\n    color: #ff0000;\r\n}\r\n\r\n#content main .play-page .other-dates a:hover {\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .play-hall {\r\n    width: 80%;\r\n    justify-content: center;\r\n    margin: auto;\r\n    padding: 2vmax 0 2vmax 0;\r\n}\r\n\r\n#content main .play-page .play-hall .row {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .play-hall .seat {\r\n    width: auto;\r\n    margin-right: 0.25em;\r\n    margin-bottom: 0.25em;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox {\r\n    position: absolute;\r\n    z-index: -1;\r\n    opacity: 0;\r\n}\r\n#content main .play-page .play-hall .custom-checkbox+label {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    user-select: none;\r\n}\r\n\r\n\r\n#content main .play-page .play-hall .custom-checkbox+label::before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 1.2em;\r\n    height: 1.2em;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    border: 1px solid #adb5bd;\r\n    border-radius: 0.2em;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-size: 50% 50%;\r\n    cursor: pointer;\r\n    transition: .5s ease-in-out;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {\r\n    border-color: #0ec91e;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:not(:disabled):active+label::before {\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:checked+label::before {\r\n    border-color: #0ec91e;\r\n    background-color: #0ec91e;\r\n}\r\n\r\n#content main .play-page .play-hall .custom-checkbox:disabled+label::before {\r\n    background-color: #ff0000;\r\n    border-color: #ff0000;\r\n}\r\n\r\n#content main .play-page .select-tickets-info {\r\n    padding: 1vmax;\r\n}\r\n\r\n#content main .play-page .select-tickets-info .category-line {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#content main .play-page .select-tickets-info .category-line div {\r\n    margin-left: 1vmin;\r\n}\r\n\r\n#content main .play-page .order-total-cost  {\r\n    display: flex;\r\n    padding: 1vmax;\r\n}\r\n#content main .play-page .order-total-cost .total-cost-content {\r\n    display: flex;\r\n    padding: 0.2em;\r\n    background: #ff0000;\r\n    color: white;\r\n}\r\n\r\n#content main .play-page .order-total-cost .total-cost-content div {\r\n    margin-left: 1vmin;\r\n}\r\n\r\n#content main .play-page .complete-order-section {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 1vmin 0 2vmin;\r\n    border-top: 3px solid #f4f4f4;;\r\n}\r\n\r\n#content main .play-page .complete-order-section a {\r\n    padding: 0.2em;\r\n    background: #ff0000;\r\n    color: white;\r\n    margin: 0.5em;\r\n}\r\n\r\n#content main .play-page .complete-order-section a:hover {\r\n    background: white;\r\n    color: #ff0000;\r\n}\r\n\r\n.message-window {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background-color: rgb(0,0,0); /* Затемнение фона */\r\n    background-color: rgba(0,0,0,0.5); /* Полупрозрачное затемнение */\r\n    z-index: 1; /* Фон на нижнем слое */\r\n    overflow: auto; /* При необходимости, то появиться прокрутка */\r\n}\r\n"]}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'footer',
  id: 'footer',
  children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    children: 'Developed by Evgeniy Trofimov',
    classList: ['developer']
  }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    type: 'a',
    children: 'default@edu.gstu.by',
    classList: ['developer-link'],
    href: ''
  })]
}));

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _LoginMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginMenu */ "./src/components/header/LoginMenu.js");
/* harmony import */ var _managers_ContentManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../managers/ContentManager */ "./src/managers/ContentManager.js");



var Title = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  children: 'Theater',
  classList: ['title'],
  onclick: function onclick(e) {
    return _managers_ContentManager__WEBPACK_IMPORTED_MODULE_2__["default"].roteNewUrl('/plays');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'header',
  id: 'header',
  children: [Title, _LoginMenu__WEBPACK_IMPORTED_MODULE_1__["default"]]
}));

/***/ }),

/***/ "./src/components/header/LoginMenu.js":
/*!********************************************!*\
  !*** ./src/components/header/LoginMenu.js ***!
  \********************************************/
/*! exports provided: loginBtnChildren, LogoutBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginBtnChildren", function() { return loginBtnChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutBtn", function() { return LogoutBtn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _managers_UserManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../managers/UserManager */ "./src/managers/UserManager.js");


var loginBtnChildren = [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'a',
  children: 'Log In',
  onclick: function onclick(e) {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
  }
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'a',
  children: 'Registration',
  onclick: function onclick(e) {
    var loginForm = document.getElementById('registration-form');
    loginForm.style.display = 'block';
  }
})];
var UtilBtn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  id: 'util-btn',
  children: loginBtnChildren
});
var LogoutBtn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'a',
  children: 'Log Out',
  onclick: function onclick(e) {
    _managers_UserManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().logOut();
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  id: 'login-menu',
  children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    children: 'User: '
  }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    id: 'user-status',
    children: 'guest'
  }), UtilBtn]
}));

/***/ }),

/***/ "./src/components/main-content/Content.js":
/*!************************************************!*\
  !*** ./src/components/main-content/Content.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _PlayList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayList */ "./src/components/main-content/PlayList.js");
/* harmony import */ var _managers_ContentManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../managers/ContentManager */ "./src/managers/ContentManager.js");
/* harmony import */ var _PlayPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayPage */ "./src/components/main-content/PlayPage.js");




var plays = [{
  name: 'Synthesizer love',
  author: 'A. Eykborn',
  genre: 'Comedy',
  dates: [{
    id: 1,
    date: '2020-02-04'
  }, {
    id: 2,
    date: '2020-02-15'
  }, {
    id: 3,
    date: '2020-02-27'
  }]
}];
var date = {
  id: 2,
  date: '2020-02-15',
  play: {
    name: 'Synthesizer love',
    author: 'A. Eykborn',
    genre: 'Comedy',
    dates: [{
      id: 1,
      date: '2020-02-04'
    }, {
      id: 2,
      date: '2020-02-15'
    }, {
      id: 3,
      date: '2020-02-27'
    }]
  }
};
var PlayListTitle = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  classList: ['title'],
  children: 'Plays'
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'section',
  id: 'content',
  children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    type: 'main',
    id: 'main-container',
    // onload: () => ContentManager.roteNewUrl('/plays'),
    children: Object(_PlayPage__WEBPACK_IMPORTED_MODULE_3__["default"])(date)
  })
}));

/***/ }),

/***/ "./src/components/main-content/Hall.js":
/*!*********************************************!*\
  !*** ./src/components/main-content/Hall.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _managers_OrderManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../managers/OrderManager */ "./src/managers/OrderManager.js");



function checkSeat() {}

function getSeats(rowId, numberSeat, orderedTicket) {
  var seats = [];

  var _loop = function _loop(i) {
    var saleCheck = orderedTicket.filter(function (ticket) {
      return ticket.row === rowId + 1 && ticket.seat === i + 1;
    }).length > 0;
    seats.push(Seat(rowId + 1, i + 1, saleCheck ? seatType.SALE : seatType.DEFAULT));
  };

  for (var i = 0; i < numberSeat; i++) {
    _loop(i);
  }

  return seats;
}

var seatType = {
  SALE: true,
  DEFAULT: false
};

var Seat = function Seat(row, number, type) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['seat'],
    children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      type: 'input',
      name: 'seat-' + row + number,
      inputType: 'checkbox',
      classList: ['custom-checkbox'],
      disabled: type,
      onclick: function onclick(e) {
        console.log(e);
      }
    }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      type: 'label',
      "for": 'seat-' + row + number,
      onclick: function onclick(e) {
        var checkbox = document.querySelector("input[name=" + this["for"] + "]");
        checkbox.checked = !checkbox.checked;
        if (type) return;

        if (checkbox.checked) {
          _managers_OrderManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().addTicket({
            row: row,
            seat: number
          });
        } else {
          _managers_OrderManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().deleteTicket({
            row: row,
            seat: number
          });
        }
      }
    })]
  });
};

var RowSeats = function RowSeats(rowId, numberSeat, orderedTicket) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['row'],
    children: getSeats(rowId, numberSeat, orderedTicket)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (rowsSchema, orderedTicket) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    id: 'play-hall',
    classList: ['play-hall'],
    children: rowsSchema.map(function (row, i) {
      return RowSeats(i, row.seats, orderedTicket);
    })
  });
});

/***/ }),

/***/ "./src/components/main-content/LoginWindow.js":
/*!****************************************************!*\
  !*** ./src/components/main-content/LoginWindow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _ModalWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalWindow */ "./src/components/main-content/ModalWindow.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _header_LoginMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/LoginMenu */ "./src/components/header/LoginMenu.js");
/* harmony import */ var _managers_UserManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../managers/UserManager */ "./src/managers/UserManager.js");





var LoginForm = Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["ModalForm"])([Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["Title"])('Authorization'), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "text",
  placeholder: "Input email",
  name: "email"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "password",
  placeholder: "Input password",
  name: "password"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'label',
  classList: ['msg'],
  children: 'Input data to input forms'
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'button',
  inputType: 'button',
  id: 'login-button',
  children: 'Log In',
  onclick: function onclick(e) {
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + "/login", {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(function (resp) {
      return resp.json();
    }).then(function (user) {
      _managers_UserManager__WEBPACK_IMPORTED_MODULE_4__["default"].getInstance().setUser(user);
    });
  }
})]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginForm, 'login-form'));

/***/ }),

/***/ "./src/components/main-content/ModalWindow.js":
/*!****************************************************!*\
  !*** ./src/components/main-content/ModalWindow.js ***!
  \****************************************************/
/*! exports provided: ModalForm, Title, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalForm", function() { return ModalForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _css_modal_window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/modal-window.css */ "./src/css/modal-window.css");
/* harmony import */ var _css_modal_window_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_modal_window_css__WEBPACK_IMPORTED_MODULE_1__);


var CloseBtn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'span',
  onclick: function onclick(e) {
    document.getElementById('login-form').style.display = 'none';
  },
  children: 'x'
});
var ModalForm = function ModalForm(children) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    id: 'auth-form',
    type: 'form',
    classList: ['modal-content', 'animate'],
    children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      classList: ['container'],
      children: children
    })
  });
};
var Title = function Title(title) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    type: 'h1',
    children: title
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function (children, id) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    id: id,
    classList: ['modal', 'login-form'],
    onclick: function onclick(e) {
      window.onclick = function (event) {
        var modals = Array.from(document.getElementsByClassName("modal"));
        modals.forEach(function (modal, index, modals) {
          if (event.target === modal) {
            modal.style.display = "none";
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearForms"])();
          }
        });
      };
    },
    children: children
  });
});

/***/ }),

/***/ "./src/components/main-content/PlayItem.js":
/*!*************************************************!*\
  !*** ./src/components/main-content/PlayItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _managers_ContentManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../managers/ContentManager */ "./src/managers/ContentManager.js");


/**
 *
 * @param title {string}
 * @returns {HTMLDivElement}
 * @constructor
 */

var PlayTitle = function PlayTitle(title) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['play-title'],
    children: title
  });
};
/**
 *
 * @param author {string}
 * @param genre {string}
 * @returns {HTMLDivElement}
 * @constructor
 */


var PlayInfo = function PlayInfo(author, genre) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['play-info'],
    children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      classList: ['play-author'],
      children: author
    }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      classList: ['play-genre'],
      children: genre
    })]
  });
};
/**
 *
 * @param dates {Array}
 * @returns {HTMLDivElement}
 * @constructor
 */


var PlayDates = function PlayDates(dates) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['play-dates'],
    children: dates.map(function (date) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
        type: 'a',
        classList: ['date-link'],
        children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["dateFormatter"])(new Date(date.date)),
        onclick: function onclick(e) {
          return _managers_ContentManager__WEBPACK_IMPORTED_MODULE_1__["default"].roteNewUrl('/date/' + date.id);
        }
      });
    })
  });
};
/**
 *
 * @param name {string}
 * @param author {string}
 * @param genre {string}
 * @param dates {Array}
 * @returns {HTMLDivElement}
 */


/* harmony default export */ __webpack_exports__["default"] = (function (name, author, genre, dates) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['play'],
    children: [PlayTitle(name), PlayInfo(author, genre), PlayDates(dates)]
  });
});

/***/ }),

/***/ "./src/components/main-content/PlayList.js":
/*!*************************************************!*\
  !*** ./src/components/main-content/PlayList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _PlayItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayItem */ "./src/components/main-content/PlayItem.js");


/**
 *
 * @param plays {Array}
 * @returns {HTMLDivElement}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (plays) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['plays'],
    children: plays.map(function (play) {
      return Object(_PlayItem__WEBPACK_IMPORTED_MODULE_1__["default"])(play.name, play.author, play.genre, play.dates);
    })
  });
});

/***/ }),

/***/ "./src/components/main-content/PlayPage.js":
/*!*************************************************!*\
  !*** ./src/components/main-content/PlayPage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _Hall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hall */ "./src/components/main-content/Hall.js");
/* harmony import */ var _managers_OrderManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../managers/OrderManager */ "./src/managers/OrderManager.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../managers/ContentManager */ "./src/managers/ContentManager.js");






var PlayTitle = function PlayTitle(name) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['title'],
    children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      classList: ['title-content'],
      children: name
    })
  });
};

var PlayInfo = function PlayInfo(genre, author) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['short-info'],
    children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      children: 'Genre: ' + genre
    }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      children: 'Author: ' + author
    })]
  });
};

var OtherDates = function OtherDates(dates, selectedDate) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['other-dates'],
    children: dates.map(function (date) {
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
        type: 'a',
        classList: ['date-link', date.id === selectedDate.id ? 'selected-date' : null],
        onclick: function onclick(e) {
          return _managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__["default"].roteNewUrl('/date/' + date.id);
        },
        children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["dateFormatter"])(new Date(date.date))
      });
    })
  });
};

var CategoryInfo = function CategoryInfo(label, count) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['category-line'],
    children: [label + ':', Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      id: label.toLowerCase().trim().replace(' ', '-') + '-count',
      children: count + ''
    })]
  });
};

var TicketInfo = function TicketInfo() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['select-tickets-info'],
    children: [CategoryInfo('Cheap ticket', 0), CategoryInfo('Default ticket', 0), CategoryInfo("Expensive ticket", 0)]
  });
};

var TotalCost = function TotalCost() {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['order-total-cost'],
    children: Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      classList: ['total-cost-content'],
      children: ['Total cost: ', Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
        id: 'order-total-cost',
        children: '0'
      })]
    })
  });
};

var CompleteOrderSection = function CompleteOrderSection(date) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    classList: ['complete-order-section'],
    children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      type: 'a',
      children: 'Order',
      onclick: function onclick(e) {
        _managers_OrderManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().sendOrder(date);
      }
    }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
      type: 'a',
      children: 'Cancel order'
    })]
  });
};

var rowSchema = [{
  seats: 8
}, {
  seats: 8
}, {
  seats: 10
}, {
  seats: 10
}, {
  seats: 14
}, {
  seats: 14
}];
var orderedTickets = [];
/* harmony default export */ __webpack_exports__["default"] = (function (date) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    id: 'date-' + date.id,
    classList: ['play-page'],
    onload: function onload() {
      _managers_OrderManager__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance();
      fetch(_constants__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"] + '/ordered-tickets/' + date.id).then(function (response) {
        return response.json();
      }).then(function (orderedTickets) {
        var playHall = document.getElementById('play-hall');
        playHall.innerHTML = '';
        playHall.appendChild(Object(_Hall__WEBPACK_IMPORTED_MODULE_1__["default"])(rowSchema, orderedTickets));
      });
    },
    children: [PlayTitle(date.play.name), PlayInfo(date.play.genre, date.play.author), OtherDates(date.play.dates, date), Object(_Hall__WEBPACK_IMPORTED_MODULE_1__["default"])(rowSchema, orderedTickets), TicketInfo(), TotalCost(), CompleteOrderSection(date)]
  });
});

/***/ }),

/***/ "./src/components/main-content/RegistrationWindow.js":
/*!***********************************************************!*\
  !*** ./src/components/main-content/RegistrationWindow.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _ModalWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalWindow */ "./src/components/main-content/ModalWindow.js");
/* harmony import */ var _managers_UserManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../managers/UserManager */ "./src/managers/UserManager.js");



var EMAIL_PATTERN = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
var PASSWORD_PATTERN = /^[a-zA-z]{1}[a-zA-Z0-9_/!/@/#/$/%/&]{3,20}$/i;
var PHONE_PATTERN = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
var validator = {
  emailTest: function emailTest(text) {
    return EMAIL_PATTERN.test(text);
  },
  passwordTest: function passwordTest(text) {
    return PASSWORD_PATTERN.test(text);
  },
  phoneTest: function phoneTest(text) {
    return PHONE_PATTERN.test(text);
  }
};
var RegistrationForm = Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["ModalForm"])([Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["Title"])('Registration'), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "text",
  placeholder: "Input name",
  name: "name"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "password",
  placeholder: "Input password",
  name: "password"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "password",
  placeholder: "Confirm password",
  name: "confirm-password"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "text",
  placeholder: "Input email",
  name: "email"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'input',
  inputType: "text",
  placeholder: "Input phone",
  name: "phone"
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  id: 'reg-msg',
  type: 'label',
  classList: ['msg'],
  children: 'Input data to input forms'
}), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'button',
  inputType: 'button',
  id: 'login-button',
  children: 'Registration',
  onclick: function onclick(e) {
    var name = document.querySelector('#registration-form input[name="name"]').value;
    var password = document.querySelector('#registration-form input[name="password"]').value;
    var confirmPassword = document.querySelector('#registration-form input[name="confirm-password"]').value;
    var email = document.querySelector('#registration-form input[name="email"]').value;
    var phone = document.querySelector('#registration-form input[name="phone"]').value;

    if (validator.emailTest(email) && validator.passwordTest(password) && validator.phoneTest(phone) && password === confirmPassword) {
      _managers_UserManager__WEBPACK_IMPORTED_MODULE_2__["default"].getInstance().createUser({
        name: name,
        password: password,
        email: email,
        phone: phone
      });
    } else {
      document.getElementById('reg-msg').innerText = 'Something went wrong...';
    }
  }
})]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["default"])(RegistrationForm, 'registration-form'));

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: SERVER_URL, ACCESS_CONTROL_ALLOW_HEADER, CONTENT_TYPE_JSON, HEADERS, ANSWER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_CONTROL_ALLOW_HEADER", function() { return ACCESS_CONTROL_ALLOW_HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_JSON", function() { return CONTENT_TYPE_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANSWER_STATUS", function() { return ANSWER_STATUS; });
var SERVER_URL = 'http://localhost:8080/data-api';
var ACCESS_CONTROL_ALLOW_HEADER = "*";
var CONTENT_TYPE_JSON = 'application/json;charset=utf-8';
var HEADERS = {
  CONTENT_TYPE: "Content-Type",
  ACCESS_CONTROL: "Access-Control-Allow-Origin"
};
var ANSWER_STATUS = {
  COMPLETED: "COMPLETED"
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/css/modal-window.css":
/*!**********************************!*\
  !*** ./src/css/modal-window.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./modal-window.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal-window.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/fonts/GTWalsheimPro.otf":
/*!*************************************!*\
  !*** ./src/fonts/GTWalsheimPro.otf ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9891721f7144f76cbb97279b8774224d.otf");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _components_main_content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-content/Content */ "./src/components/main-content/Content.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managers/ContentManager */ "./src/managers/ContentManager.js");
/* harmony import */ var _components_main_content_LoginWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-content/LoginWindow */ "./src/components/main-content/LoginWindow.js");
/* harmony import */ var _components_main_content_RegistrationWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-content/RegistrationWindow */ "./src/components/main-content/RegistrationWindow.js");








window.onpopstate = function () {
  _managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__["default"].roteNewUrl(Object(_managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__["getUrlPath"])(document.URL));
};

var root = document.getElementById('root');
_managers_ContentManager__WEBPACK_IMPORTED_MODULE_4__["default"].documentStartRender(root, [_components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], _components_main_content_LoginWindow__WEBPACK_IMPORTED_MODULE_5__["default"], _components_main_content_RegistrationWindow__WEBPACK_IMPORTED_MODULE_6__["default"], _components_main_content_Content__WEBPACK_IMPORTED_MODULE_2__["default"], _components_footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]]);

/***/ }),

/***/ "./src/managers/ContentManager.js":
/*!****************************************!*\
  !*** ./src/managers/ContentManager.js ***!
  \****************************************/
/*! exports provided: getUrlPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlPath", function() { return getUrlPath; });
/* harmony import */ var _components_main_content_PlayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-content/PlayList */ "./src/components/main-content/PlayList.js");
/* harmony import */ var _UserManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserManager */ "./src/managers/UserManager.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _components_main_content_PlayPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/main-content/PlayPage */ "./src/components/main-content/PlayPage.js");



 //const serverUrl = 'http://localhost:8080/data-api';

var toUrls = {
  PLAYS: function PLAYS() {
    fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + '/plays').then(function (response) {
      return response.json();
    }).then(function (plays) {
      // history.pushState(null, null,"/plays")
      ContentManager.changeContent(Object(_components_main_content_PlayList__WEBPACK_IMPORTED_MODULE_0__["default"])(plays), '#main-container');
    });
  },
  DATE: function DATE(path) {
    var dateId = parseInt(path);
    fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + '/date/' + dateId).then(function (response) {
      return response.json();
    }).then(function (date) {
      // history.pushState(null, null,"/date/" + date.id);
      ContentManager.changeContent(Object(_components_main_content_PlayPage__WEBPACK_IMPORTED_MODULE_3__["default"])(date), '#main-container');
    });
  }
};
var ContentManager = {
  changeContent: function changeContent(newNode, queryRootNode) {
    var rootNode = document.querySelector(queryRootNode);
    rootNode.innerHTML = '';
    rootNode.append(newNode);
  },
  roteNewUrl: function roteNewUrl(url) {
    var urlPaths = url.split('/');
    toUrls[urlPaths[1].toUpperCase()](urlPaths[2]);
  },
  documentStartRender: function documentStartRender(rootElement, children) {
    rootElement.innerHTML = "";
    children.forEach(function (child) {
      return rootElement.appendChild(child);
    });
    _UserManager__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance().getAuthUser();
    var url = getUrlPath(document.URL);
    if (url === '/') url = '/plays';
    this.roteNewUrl(url);
    this._rootNode = rootElement;
    this._childrenElements = children;
  }
};
var getUrlPath = function getUrlPath(fullUrl) {
  return new URL(fullUrl).pathname;
};
/* harmony default export */ __webpack_exports__["default"] = (ContentManager);

/***/ }),

/***/ "./src/managers/OrderManager.js":
/*!**************************************!*\
  !*** ./src/managers/OrderManager.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderManager; });
/* harmony import */ var _UserManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserManager */ "./src/managers/UserManager.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _ContentManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentManager */ "./src/managers/ContentManager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var getTicketDiscount = {
  CHEAP: 0.9,
  DEFAULT: 1,
  EXPENSIVE: 1.2
};

var OrderManager = /*#__PURE__*/function () {
  _createClass(OrderManager, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!OrderManager._instance) {
        OrderManager._instance = new OrderManager();
      }

      return OrderManager._instance;
    }
  }, {
    key: "newInstance",
    value: function newInstance() {
      OrderManager._instance = new OrderManager();
      return OrderManager._instance;
    }
  }]);

  function OrderManager() {
    _classCallCheck(this, OrderManager);

    this._tickets = [];
    this._categorySchema = {
      cheapTicketRowStart: 1,
      cheapTicketRowEnd: 2,
      defaultTicketRowStart: 3,
      defaultTicketRowEnd: 4,
      expensiveTicketRowStart: 5,
      expensiveTicketRowEnd: 6
    };
  }

  _createClass(OrderManager, [{
    key: "addTicket",
    value: function addTicket(ticket) {
      ticket.type = this._ticketTypeSearcher(ticket);

      this._tickets.push(ticket);

      this.showTicketPrice();
    }
  }, {
    key: "deleteTicket",
    value: function deleteTicket(ticket) {
      this._tickets = this._tickets.filter(function (t) {
        return t.row !== ticket.row && t.seat !== ticket.seat;
      });
      this.showTicketPrice();
    }
  }, {
    key: "showTicketPrice",
    value: function showTicketPrice() {
      var totalCostDOM = document.getElementById('order-total-cost');
      var cheapTicketCostDOM = document.getElementById('cheap-ticket-count');
      var defaultTicketCostDOM = document.getElementById('default-ticket-count');
      var expensiveTicketCostDOM = document.getElementById('expensive-ticket-count');

      var cheapTickets = this._tickets.filter(function (t) {
        return t.type === 'CHEAP';
      });

      var defaultTickets = this._tickets.filter(function (t) {
        return t.type === 'DEFAULT';
      });

      var expensiveTickets = this._tickets.filter(function (t) {
        return t.type === 'EXPENSIVE';
      });

      var totalCost = this._tickets.map(function (t) {
        return getTicketDiscount[t.type] * 6;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);

      var cheapTicketTotalCost = cheapTickets.length * getTicketDiscount.CHEAP * 6;
      var defaultTicketTotalCost = defaultTickets.length * getTicketDiscount.DEFAULT * 6;
      var expensiveTicketTotalCost = expensiveTickets.length * getTicketDiscount.EXPENSIVE * 6;
      totalCostDOM.innerHTML = totalCost.toFixed(2) + ' byn.';
      cheapTicketCostDOM.innerText = cheapTickets.length + ' * ' + (6 * getTicketDiscount.CHEAP).toFixed(2) + ' = ' + cheapTicketTotalCost.toFixed(2);
      defaultTicketCostDOM.innerText = defaultTickets.length + ' * ' + (6 * getTicketDiscount.DEFAULT).toFixed(2) + ' = ' + defaultTicketTotalCost.toFixed(2);
      expensiveTicketCostDOM.innerText = expensiveTickets.length + ' * ' + (6 * getTicketDiscount.EXPENSIVE).toFixed(2) + ' = ' + expensiveTicketTotalCost.toFixed(2);
    }
  }, {
    key: "sendOrder",
    value: function sendOrder(date) {
      var user = _UserManager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().getUser();

      if (!date) {
        console.error("Date is unknown");
        return;
      }

      if (!user) {
        console.error("User is undefined");
        return;
      }

      if (user.name.toUpperCase() === 'USER') {
        console.error("User is undefined");
        return;
      }

      if (user.role !== 'User') {
        console.error("User with role '" + user.role + "'can't take order.");
        return;
      }

      var orders = this._tickets.map(function (ticket) {
        return {
          row: ticket.row,
          seat: ticket.seat,
          user: user,
          dateId: date.id
        };
      });

      fetch(_constants__WEBPACK_IMPORTED_MODULE_1__["SERVER_URL"] + '/add-order', {
        method: 'POST',
        body: JSON.stringify(orders)
      }).then(function (response) {
        return response.json();
      }).then(function (answer) {
        if (answer.status === _constants__WEBPACK_IMPORTED_MODULE_1__["ANSWER_STATUS"].COMPLETED) {
          _ContentManager__WEBPACK_IMPORTED_MODULE_2__["default"].roteNewUrl('/date/' + date.id);
          console.log("completed");
        }
      })["catch"](function (reject) {
        alert("Order not take... Something went wrong.");
      });
    }
  }, {
    key: "_ticketTypeSearcher",
    value: function _ticketTypeSearcher(ticket) {
      if (this._categorySchema.cheapTicketRowStart <= ticket.row && ticket.row <= this._categorySchema.cheapTicketRowEnd) {
        return 'CHEAP';
      } else if (this._categorySchema.expensiveTicketRowStart <= ticket.row && ticket.row <= this._categorySchema.expensiveTicketRowEnd) {
        return 'EXPENSIVE';
      } else {
        return 'DEFAULT';
      }
    }
  }]);

  return OrderManager;
}();

OrderManager._instance = void 0;


/***/ }),

/***/ "./src/managers/UserManager.js":
/*!*************************************!*\
  !*** ./src/managers/UserManager.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserManager; });
/* harmony import */ var _components_header_LoginMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/LoginMenu */ "./src/components/header/LoginMenu.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var UserManager = /*#__PURE__*/function () {
  _createClass(UserManager, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new UserManager();
      }

      return this._instance;
    }
  }]);

  function UserManager() {
    _classCallCheck(this, UserManager);

    this._logInUser = {
      id: 1,
      name: 'user',
      role: 'User'
    };
  }

  _createClass(UserManager, [{
    key: "getAuthUser",
    value: function getAuthUser() {
      var _this = this;

      fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + "/auth").then(function (response) {
        return response.json();
      }).then(function (user) {
        if (user.status) {
          console.info(user.error);
          return;
        }

        _this.setUser(user);
      });
    }
  }, {
    key: "createUser",
    value: function createUser(user) {
      var _this2 = this;

      user.role = 'User';
      fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + '/reg', {
        method: 'POST',
        body: JSON.stringify(user)
      }).then(function (response) {
        return response.json();
      }).then(function (user) {
        _this2.setUser(user);

        Object(_util__WEBPACK_IMPORTED_MODULE_1__["clearForms"])();
        document.getElementById('registration-form').style.display = 'none';
      });
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      this._logInUser = user;
      var userStatus = document.getElementById('user-status');
      userStatus.innerHTML = user.role;
      var utilBtn = document.getElementById('util-btn');
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["clearForms"])();
      document.getElementById('login-form').style.display = 'none';
      utilBtn.innerHTML = '';
      utilBtn.appendChild(_components_header_LoginMenu__WEBPACK_IMPORTED_MODULE_0__["LogoutBtn"]);
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return this._logInUser;
    }
  }, {
    key: "logOut",
    value: function logOut() {
      var _this3 = this;

      fetch(_constants__WEBPACK_IMPORTED_MODULE_2__["SERVER_URL"] + "/logout", {
        method: 'POST'
      }).then(function (response) {
        return response.json();
      }).then(function (answer) {
        if (answer.status !== 'LOGOUT') {
          return;
        }

        _this3._logInUser = null;
        var userStatus = document.getElementById('user-status');
        var utilBtn = document.getElementById('util-btn');
        utilBtn.innerHTML = '';
        _components_header_LoginMenu__WEBPACK_IMPORTED_MODULE_0__["loginBtnChildren"].forEach(function (btn) {
          return utilBtn.appendChild(btn);
        });
        userStatus.innerHTML = 'guest';
      });
    }
  }]);

  return UserManager;
}();

UserManager._instance = void 0;


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: clearForms, dateFormatter, node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearForms", function() { return clearForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatter", function() { return dateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return node; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var elementSelector = {
  'string': function string(child) {
    return document.createTextNode(child);
  },
  'function': function _function(child) {
    return document.createElement(child);
  },
  'object': function object(child) {
    return child;
  }
};
function clearForms() {
  var forms = Array.from(document.querySelectorAll('input'));
  var msgs = Array.from(document.querySelectorAll('.msg'));
  forms.forEach(function (form, index, forms) {
    return form.value = "";
  });
  msgs.forEach(function (msg, index, msgs) {
    return msg.innerHTML = "Input data to input forms";
  });
}

var addZeroDate = function addZeroDate(num) {
  return num < 10 ? '0' + num : num.toString();
};
/**
 *
 * @param date {Date}
 * @returns {string}
 */


var dateFormatter = function dateFormatter(date) {
  return addZeroDate(date.getMonth() + 1) + "." + addZeroDate(date.getDate());
};
/**
 *
 * @param option {object}
 * @returns {HTMLDivElement}
 */

var node = function node(option) {
  var type = option.type ? option.type : 'div';
  var element = document.createElement(type);

  if (option.children) {
    if (option.children instanceof Array) {
      option.children.forEach(function (child) {
        return element.appendChild(elementSelector[_typeof(child)](child));
      });
    } else {
      element.appendChild(elementSelector[_typeof(option.children)](option.children));
    }
  }

  if (option.href) {
    element.href = option.href;
  }

  if (option.inputType) {
    element.type = option.inputType;
  }

  element.onclick = option.onclick ? function (e) {
    return option.onclick(e);
  } : element.onclick;
  element.onload = option.onload ? option.onload : element.onload;

  if (typeof element.onload === "function") {
    element.onload();
  }

  if (option.classList) {
    option.classList.forEach(function (c) {
      return element.classList.add(c);
    });
  }

  if (option.id) {
    element.id = option.id;
  }

  if (option.name) {
    element.name = option.name;
  }

  if (option["for"]) {
    element.htmlFor = option["for"];
  }

  if (option.placeholder) {
    element.placeholder = option.placeholder;
  }

  if (option.disabled) {
    element.disabled = option.disabled;
  }

  if (option.styles) {
    var optionStyles = option.styles;
    var styles = element.style;

    if (optionStyles.background) {
      styles.background = optionStyles.background;
    }
  }

  return element;
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map