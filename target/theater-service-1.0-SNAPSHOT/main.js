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
___CSS_LOADER_EXPORT___.push([module.i, "/*\r\n    Footer start\r\n */\r\n\r\nfooter {\r\n    width: 100%;\r\n    display: flex;\r\n    background: white;\r\n    align-items: center;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n    overflow: hidden;\r\n\r\n}\r\n\r\nfooter * {\r\n    padding-left: 1vw;\r\n    font-size: 1.5vmax;\r\n}\r\n\r\n/*\r\n    Footer end\r\n */", "",{"version":3,"sources":["footer.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,gBAAgB;;AAEpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;EAEE","file":"footer.css","sourcesContent":["/*\r\n    Footer start\r\n */\r\n\r\nfooter {\r\n    width: 100%;\r\n    display: flex;\r\n    background: white;\r\n    align-items: center;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n    overflow: hidden;\r\n\r\n}\r\n\r\nfooter * {\r\n    padding-left: 1vw;\r\n    font-size: 1.5vmax;\r\n}\r\n\r\n/*\r\n    Footer end\r\n */"]}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*\r\n    Header start\r\n*/\r\n\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: white;\r\n    align-items: center;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n    overflow: hidden;\r\n}\r\n\r\nheader .title {\r\n    font-size: 3vmax;\r\n    margin-left: 10vmin;\r\n    padding: 1vmin 1.5vmin 1vmin 1.5vmin;\r\n    display: flex;\r\n    align-items: center;\r\n    color: white;\r\n    background: #f00;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n}\r\n\r\nheader #login-menu {\r\n    display: flex;\r\n}\r\n\r\nheader #login-menu div {\r\n    padding-right: 1vmin;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nheader #login-menu #util-btn {\r\n    border-left: red 0.5vmin solid;\r\n}\r\n\r\nheader #login-menu #util-btn a {\r\n    padding: 2vmin;\r\n    color: #f00;\r\n}\r\n\r\nheader #login-menu #util-btn a:hover {\r\n    background: #f00;\r\n    color: white;\r\n}\r\n\r\n/*\r\n    Header end\r\n*/", "",{"version":3,"sources":["header.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,uCAAuC;IACvC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;;CAEC","file":"header.css","sourcesContent":["/*\r\n    Header start\r\n*/\r\n\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background: white;\r\n    align-items: center;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n    overflow: hidden;\r\n}\r\n\r\nheader .title {\r\n    font-size: 3vmax;\r\n    margin-left: 10vmin;\r\n    padding: 1vmin 1.5vmin 1vmin 1.5vmin;\r\n    display: flex;\r\n    align-items: center;\r\n    color: white;\r\n    background: #f00;\r\n    box-shadow: 0 0 20px 5px rgba(0,0,0,.2);\r\n}\r\n\r\nheader #login-menu {\r\n    display: flex;\r\n}\r\n\r\nheader #login-menu div {\r\n    padding-right: 1vmin;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nheader #login-menu #util-btn {\r\n    border-left: red 0.5vmin solid;\r\n}\r\n\r\nheader #login-menu #util-btn a {\r\n    padding: 2vmin;\r\n    color: #f00;\r\n}\r\n\r\nheader #login-menu #util-btn a:hover {\r\n    background: #f00;\r\n    color: white;\r\n}\r\n\r\n/*\r\n    Header end\r\n*/"]}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "/*\r\n    start main-content\r\n*/\r\n\r\n#content main {\r\n    background: white;\r\n    margin: 3vh auto 3vh;\r\n    height: auto;\r\n    width: 50vw;\r\n    min-width: 400px;\r\n    min-height: 400px;\r\n    border-radius: 1vmin;\r\n}\r\n\r\n#content main .title {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 3vmax;\r\n    padding: 1vmin 0 2vmin;\r\n    border-bottom: 3px solid #f4f4f4;\r\n}\r\n\r\n#content main .plays .play {\r\n    padding: 1vmax;\r\n    border-bottom: 2px solid #f4f4f4;\r\n}\r\n\r\n\r\n#content main .plays .play .play-title {\r\n    display: inline-block;\r\n    width: auto;\r\n    background: #ff0000;\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .plays .play .play-info {\r\n    display: flex;\r\n    padding-top: 1.5vmin;\r\n    padding-bottom: 1.5vmin;\r\n}\r\n\r\n#content main .plays .play .play-info * {\r\n    padding-left: 1vmin;\r\n}\r\n\r\n#content main .plays .play a.date-link {\r\n    color: #6f6f6f;\r\n    padding-left: 1vmin;\r\n}\r\n\r\n#content main .plays .play a.date-link:hover {\r\n    color: #ff0000;\r\n}\r\n\r\n/*\r\n    end main-content\r\n*/", "",{"version":3,"sources":["main-content.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,gCAAgC;AACpC;;;AAGA;IACI,qBAAqB;IACrB,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;;CAEC","file":"main-content.css","sourcesContent":["/*\r\n    start main-content\r\n*/\r\n\r\n#content main {\r\n    background: white;\r\n    margin: 3vh auto 3vh;\r\n    height: auto;\r\n    width: 50vw;\r\n    min-width: 400px;\r\n    min-height: 400px;\r\n    border-radius: 1vmin;\r\n}\r\n\r\n#content main .title {\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 3vmax;\r\n    padding: 1vmin 0 2vmin;\r\n    border-bottom: 3px solid #f4f4f4;\r\n}\r\n\r\n#content main .plays .play {\r\n    padding: 1vmax;\r\n    border-bottom: 2px solid #f4f4f4;\r\n}\r\n\r\n\r\n#content main .plays .play .play-title {\r\n    display: inline-block;\r\n    width: auto;\r\n    background: #ff0000;\r\n    color: white;\r\n    font-weight: bold;\r\n    padding: 1vmin;\r\n}\r\n\r\n#content main .plays .play .play-info {\r\n    display: flex;\r\n    padding-top: 1.5vmin;\r\n    padding-bottom: 1.5vmin;\r\n}\r\n\r\n#content main .plays .play .play-info * {\r\n    padding-left: 1vmin;\r\n}\r\n\r\n#content main .plays .play a.date-link {\r\n    color: #6f6f6f;\r\n    padding-left: 1vmin;\r\n}\r\n\r\n#content main .plays .play a.date-link:hover {\r\n    color: #ff0000;\r\n}\r\n\r\n/*\r\n    end main-content\r\n*/"]}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonts_GTWalsheimPro_otf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/GTWalsheimPro.otf */ "./src/fonts/GTWalsheimPro.otf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_content_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_4___default()(_fonts_GTWalsheimPro_otf__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n    font-family: \"GTWalsheimPro\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    background: #f4f4f4;\r\n}\r\n\r\n::-moz-focus-outer, ::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'GTWalsheimPro', serif;\r\n    font-size: 2vmax;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: .5s ease-in-out;\r\n}\r\n\r\n#root {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-rows: 8vh 1fr 10vh;\r\n}", "",{"version":3,"sources":["main.css"],"names":[],"mappings":"AAIA;IACI,4BAA4B;IAC5B,+DAAyD;IACzD,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,UAAU;IACV,SAAS;IACT,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gCAAgC;AACpC","file":"main.css","sourcesContent":["@import \"header.css\";\r\n@import \"footer.css\";\r\n@import \"main-content.css\";\r\n\r\n@font-face {\r\n    font-family: \"GTWalsheimPro\";\r\n    src: url('../fonts/GTWalsheimPro.otf') format(\"truetype\");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    margin: 0;\r\n    background: #f4f4f4;\r\n}\r\n\r\n::-moz-focus-outer, ::-moz-focus-inner {\r\n    border: 0;\r\n    padding: 0;\r\n}\r\n\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: 'GTWalsheimPro', serif;\r\n    font-size: 2vmax;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: .5s ease-in-out;\r\n}\r\n\r\n#root {\r\n    display: grid;\r\n    height: 100%;\r\n    grid-template-rows: 8vh 1fr 10vh;\r\n}"]}]);
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


var Title = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  children: 'Theater',
  classList: ['title']
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");

var UtilBtn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  id: 'util-btn',
  children: [Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    type: 'a',
    children: 'Login',
    href: ''
  }), Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
    type: 'a',
    children: 'Registration',
    href: ''
  })]
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_util__WEBPACK_IMPORTED_MODULE_0__["node"])({
  type: 'section',
  id: 'section'
}));

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




var root = document.getElementById('root'); // root.innerHTML = '';
// root.appendChild(Header);
// root.appendChild(Content);
// root.appendChild(Footer);

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  element.onclick = option.onclick ? option.onclick : element.onclick;
  element.onload = option.onload ? option.onload : element.onload;

  if (option.classList) {
    element.classList.add(option.classList);
  }

  if (option.id) {
    element.id = option.id;
  }

  return element;
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map