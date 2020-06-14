(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["automateRouter"] = factory();
	else
		root["automateRouter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-link */ "./src/component/router-link.js");
/* empty/unused harmony star reexport *//* harmony import */ var _router_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-view */ "./src/component/router-view.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/component/router-link.js":
/*!**************************************!*\
  !*** ./src/component/router-link.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/service/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var RouterLinkComponent = (_dec = automate.component({
  namespace: 'automate',
  key: 'routerLink',
  template: '<span class="link" style="cursor: pointer;" @click="navigate()"><slot name="content"></slot></span>',
  inject: {
    $router: _service__WEBPACK_IMPORTED_MODULE_0__["RouterService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Component) {
  _inherits(RouterLinkComponent, _automate$Component);

  function RouterLinkComponent() {
    var _this;

    _classCallCheck(this, RouterLinkComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterLinkComponent).call(this));
    _this.props.to = '';
    return _this;
  }

  _createClass(RouterLinkComponent, [{
    key: "navigate",
    value: function navigate() {
      this.$router.navigate(this.props.to);
    }
  }]);

  return RouterLinkComponent;
}(automate.Component)) || _class);

/***/ }),

/***/ "./src/component/router-view.js":
/*!**************************************!*\
  !*** ./src/component/router-view.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service */ "./src/service/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var RouterViewComponent = (_dec = automate.component({
  namespace: 'automate',
  key: 'routerView',
  inject: {
    $router: _service__WEBPACK_IMPORTED_MODULE_0__["RouterService"]
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Component) {
  _inherits(RouterViewComponent, _automate$Component);

  function RouterViewComponent() {
    var _this;

    _classCallCheck(this, RouterViewComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterViewComponent).call(this));
    _this.view = null;
    _this.viewDepth = 0;
    _this.unWatchRouteChange = null;
    return _this;
  }

  _createClass(RouterViewComponent, [{
    key: "afterViewRendered",
    value: function afterViewRendered() {
      var _this2 = this;

      if (automate.isNumber(this.$$parent.viewDepth)) {
        this.viewDepth = this.$$parent.viewDepth + 1;
      }

      this.unWatchRouteChange = this.$router.watchRouteChange(this.viewDepth, function (e) {
        return _this2.updateView(e);
      });

      if (this.viewDepth === 0) {
        // it is root view, start to listen to route change event
        this.$router.listen();
      }
    }
  }, {
    key: "updateView",
    value: function updateView(e) {
      this.clearView();
      this.renderView(e.component);
    }
  }, {
    key: "clearView",
    value: function clearView() {
      if (this.view != null) {
        this.view.$destroy();
        this.view = null;
      }
    }
  }, {
    key: "renderView",
    value: function renderView(component) {
      this.view = automate.injector.createComponent(component);
      this.view.viewDepth = this.viewDepth + 1;
      this.view.$mount(this.$container);
      this.view.$render();
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.unWatchRouteChange && this.unWatchRouteChange();
      this.clearView();
    }
  }]);

  return RouterViewComponent;
}(automate.Component)) || _class);

/***/ }),

/***/ "./src/entity/index.js":
/*!*****************************!*\
  !*** ./src/entity/index.js ***!
  \*****************************/
/*! exports provided: RouteState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-state */ "./src/entity/route-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteState", function() { return _route_state__WEBPACK_IMPORTED_MODULE_0__["RouteState"]; });



/***/ }),

/***/ "./src/entity/route-state.js":
/*!***********************************!*\
  !*** ./src/entity/route-state.js ***!
  \***********************************/
/*! exports provided: RouteState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteState", function() { return RouteState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouteState = function RouteState(route) {
  _classCallCheck(this, RouteState);

  this.route = route;
  this.parameters = {};
  this.matchedPath = '';
  this.remainingPath = '';
  this["new"] = true;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/service/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["RouterService"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component/index.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/service/hash-service.js":
/*!*************************************!*\
  !*** ./src/service/hash-service.js ***!
  \*************************************/
/*! exports provided: HashProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashProviderService", function() { return HashProviderService; });
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HashProviderService = (_dec = automate.service({
  namespace: 'automate',
  key: 'hashProvider'
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(HashProviderService, _automate$Service);

  _createClass(HashProviderService, [{
    key: "path",
    get: function get() {
      return location.hash.substr(1);
    }
  }]);

  function HashProviderService() {
    var _this;

    _classCallCheck(this, HashProviderService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HashProviderService).call(this));
    _this.listener = null;
    return _this;
  }

  _createClass(HashProviderService, [{
    key: "navigate",
    value: function navigate(path) {
      path = path || '';
      location.hash = path;
    }
  }, {
    key: "listen",
    value: function listen(listener) {
      var self = this;

      this.listener = function () {
        listener.call(self, self.path);
      };

      window.addEventListener('hashchange', this.listener);
      listener.call(self, self.path);
    }
  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('hashchange', this.listener);
    }
  }]);

  return HashProviderService;
}(automate.Service)) || _class);

/***/ }),

/***/ "./src/service/history-service.js":
/*!****************************************!*\
  !*** ./src/service/history-service.js ***!
  \****************************************/
/*! exports provided: HistoryProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryProviderService", function() { return HistoryProviderService; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var HistoryProviderService = (_dec = automate.service({
  namespace: 'automate',
  key: 'historyProvider'
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(HistoryProviderService, _automate$Service);

  _createClass(HistoryProviderService, [{
    key: "path",
    get: function get() {
      var value = location.pathname + location.search;
      value = decodeURI(value);
      value = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clearSlashes"])(value);
      value = value.replace(/\?(.*)$/, '');

      if (this.base === '/') {
        return value;
      }

      return value.replace(this.base, '');
    }
  }]);

  function HistoryProviderService() {
    var _this;

    _classCallCheck(this, HistoryProviderService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HistoryProviderService).call(this));
    _this.base = '/';
    _this.current = '';
    return _this;
  }

  _createClass(HistoryProviderService, [{
    key: "config",
    value: function config(options) {
      if (options.base) {
        this.base = '/' + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clearSlashes"])(options.base) + '/';
      }
    }
  }, {
    key: "listen",
    value: function listen(listener) {
      var self = this;

      var fn = function fn() {
        if (self.current !== self.path) {
          self.current = self.path;
          listener.call(self, self.current);
        }
      };

      this.current = this.path;
      clearInterval(this.interval);
      this.interval = setInterval(fn, 50);
    }
  }, {
    key: "navigate",
    value: function navigate(path) {
      path = path || '';
      history.pushState(null, null, this.base + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clearSlashes"])(path));
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
  }]);

  return HistoryProviderService;
}(automate.Service)) || _class);

/***/ }),

/***/ "./src/service/index.js":
/*!******************************!*\
  !*** ./src/service/index.js ***!
  \******************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-service */ "./src/service/router-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return _router_service__WEBPACK_IMPORTED_MODULE_0__["RouterService"]; });



/***/ }),

/***/ "./src/service/router-service.js":
/*!***************************************!*\
  !*** ./src/service/router-service.js ***!
  \***************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity */ "./src/entity/index.js");
/* harmony import */ var _hash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hash-service */ "./src/service/hash-service.js");
/* harmony import */ var _history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-service */ "./src/service/history-service.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RouterService = (_dec = automate.service({
  namespace: 'automate',
  key: 'routerService',
  inject: {
    '$hash': _hash_service__WEBPACK_IMPORTED_MODULE_2__["HashProviderService"],
    '$history': _history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryProviderService"],
    '$injector': 'injector'
  }
}), _dec(_class = /*#__PURE__*/function (_automate$Service) {
  _inherits(RouterService, _automate$Service);

  function RouterService() {
    var _this;

    _classCallCheck(this, RouterService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RouterService).call(this));
    _this.settings = {}, _this.provider = null;
    _this.mode = 'hash';
    _this.routes = [];
    _this.currentRouteStates = [];
    _this.routeChange = new automate.Message();
    return _this;
  }

  _createClass(RouterService, [{
    key: "config",
    value: function config(routes, options) {
      this.routes = routes;

      if (options) {
        if (options.mode === 'history' && !!history.pushState) {
          this.mode = 'history';
        }

        this.settings = automate.merge({
          namespace: 'automate',
          using: {}
        }, options);
      }

      if (this.mode === 'history') {
        this.$history.settings(options);
        this.provider = this.$history;
      } else {
        this.provider = this.$hash;
      }
    }
  }, {
    key: "add",
    value: function add(route) {
      this.routes.push(route);
    }
  }, {
    key: "remove",
    value: function remove(route) {
      automate.remove(this.routes, route);
    }
  }, {
    key: "map",
    value: function map(path) {
      var self = this,
          formerRouteStates = this.currentRouteStates;
      path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clearSlashes"])(path);
      this.currentRouteStates = [];
      this.matchRoutes(this.routes, path, formerRouteStates);
      var data;
      this.currentRouteStates.some(function (state, index) {
        if (state["new"]) {
          data = {
            depth: index,
            state: state
          };
          return true;
        }
      });
      this.currentRouteStates.forEach(function (state) {
        state["new"] = false;
      });
      self.routeChange.fire(data);
    }
  }, {
    key: "matchRoutes",
    value: function matchRoutes(routes, path, formerRouteStates) {
      if (!routes || !routes.length) {
        return;
      }

      var self = this;
      routes.some(function (route) {
        var matched = self.matchRoute(route, path);

        if (matched) {
          if (formerRouteStates.length) {
            var oldOne = formerRouteStates.shift();

            if (matched.route === oldOne.route) {
              self.currentRouteStates.push(oldOne);
            } else {
              self.currentRouteStates.push(matched);
            }
          } else {
            self.currentRouteStates.push(matched);
          }

          self.matchRoutes(route.children, matched.remainingPath, formerRouteStates);
          return true;
        }
      });
    }
  }, {
    key: "matchRoute",
    value: function matchRoute(route, path) {
      var state = new _entity__WEBPACK_IMPORTED_MODULE_1__["RouteState"](route),
          matchedFragments = [],
          segments = route.path.split('/'),
          fragments = path.split('/');

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];

        if (i >= fragments.length) {
          return null;
        }

        var fragment = fragments[i];

        if (segment === fragment) {
          matchedFragments.push(fragment);
        } else if (segment.startsWith(':')) {
          matchedFragments.push(fragment);
          state.parameters[segment.substring(1)] = fragment;
        } else {
          return null;
        }
      }

      state.matchedPath = matchedFragments.join('/');
      state.remainingPath = fragments.splice(segments.length).join('/');
      return state;
    }
  }, {
    key: "listen",
    value: function listen() {
      var self = this;
      this.provider.listen(function (path) {
        self.map(path);
      });
    }
  }, {
    key: "navigate",
    value: function navigate(path) {
      this.provider.navigate(path || '');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.provider.stop();
    }
  }, {
    key: "watchRouteChange",
    value: function watchRouteChange(depth, action) {
      var self = this;

      function handler(e) {
        if (e.data.depth === depth) {
          action({
            component: self.resolveComponent(e.data.state.route.component),
            state: e.data.state
          });
        }
      }

      this.routeChange.on(handler);
      return function () {
        this.routeChange.off(handler);
      };
    }
  }, {
    key: "resolveComponent",
    value: function resolveComponent(fullName) {
      return this.$injector.parseComponent(fullName, this.settings.using, this.settings.namespace);
    }
  }]);

  return RouterService;
}(automate.Service)) || _class);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: clearSlashes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSlashes", function() { return clearSlashes; });
function clearSlashes(path) {
  return path.toString().replace(/\/$/, '').replace(/^\//, '');
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGVSb3V0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGVSb3V0ZXIvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlUm91dGVyLy4vc3JjL2NvbXBvbmVudC9yb3V0ZXItbGluay5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci8uL3NyYy9jb21wb25lbnQvcm91dGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGVSb3V0ZXIvLi9zcmMvZW50aXR5L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlUm91dGVyLy4vc3JjL2VudGl0eS9yb3V0ZS1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci8uL3NyYy9zZXJ2aWNlL2hhc2gtc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci8uL3NyYy9zZXJ2aWNlL2hpc3Rvcnktc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZVJvdXRlci8uL3NyYy9zZXJ2aWNlL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlUm91dGVyLy4vc3JjL3NlcnZpY2Uvcm91dGVyLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGVSb3V0ZXIvLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiUm91dGVyTGlua0NvbXBvbmVudCIsImF1dG9tYXRlIiwiY29tcG9uZW50IiwibmFtZXNwYWNlIiwia2V5IiwidGVtcGxhdGUiLCJpbmplY3QiLCIkcm91dGVyIiwiUm91dGVyU2VydmljZSIsInByb3BzIiwidG8iLCJuYXZpZ2F0ZSIsIkNvbXBvbmVudCIsIlJvdXRlclZpZXdDb21wb25lbnQiLCJ2aWV3Iiwidmlld0RlcHRoIiwidW5XYXRjaFJvdXRlQ2hhbmdlIiwiaXNOdW1iZXIiLCIkJHBhcmVudCIsIndhdGNoUm91dGVDaGFuZ2UiLCJlIiwidXBkYXRlVmlldyIsImxpc3RlbiIsImNsZWFyVmlldyIsInJlbmRlclZpZXciLCIkZGVzdHJveSIsImluamVjdG9yIiwiY3JlYXRlQ29tcG9uZW50IiwiJG1vdW50IiwiJGNvbnRhaW5lciIsIiRyZW5kZXIiLCJSb3V0ZVN0YXRlIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwibWF0Y2hlZFBhdGgiLCJyZW1haW5pbmdQYXRoIiwiSGFzaFByb3ZpZGVyU2VydmljZSIsInNlcnZpY2UiLCJsb2NhdGlvbiIsImhhc2giLCJzdWJzdHIiLCJsaXN0ZW5lciIsInBhdGgiLCJzZWxmIiwiY2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU2VydmljZSIsIkhpc3RvcnlQcm92aWRlclNlcnZpY2UiLCJ2YWx1ZSIsInBhdGhuYW1lIiwic2VhcmNoIiwiZGVjb2RlVVJJIiwiY2xlYXJTbGFzaGVzIiwicmVwbGFjZSIsImJhc2UiLCJjdXJyZW50Iiwib3B0aW9ucyIsImZuIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2V0dGluZ3MiLCJwcm92aWRlciIsIm1vZGUiLCJyb3V0ZXMiLCJjdXJyZW50Um91dGVTdGF0ZXMiLCJyb3V0ZUNoYW5nZSIsIk1lc3NhZ2UiLCJtZXJnZSIsInVzaW5nIiwiJGhpc3RvcnkiLCIkaGFzaCIsInB1c2giLCJyZW1vdmUiLCJmb3JtZXJSb3V0ZVN0YXRlcyIsIm1hdGNoUm91dGVzIiwiZGF0YSIsInNvbWUiLCJzdGF0ZSIsImluZGV4IiwiZGVwdGgiLCJmb3JFYWNoIiwiZmlyZSIsImxlbmd0aCIsIm1hdGNoZWQiLCJtYXRjaFJvdXRlIiwib2xkT25lIiwic2hpZnQiLCJjaGlsZHJlbiIsIm1hdGNoZWRGcmFnbWVudHMiLCJzZWdtZW50cyIsInNwbGl0IiwiZnJhZ21lbnRzIiwiaSIsInNlZ21lbnQiLCJmcmFnbWVudCIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJqb2luIiwic3BsaWNlIiwibWFwIiwic3RvcCIsImFjdGlvbiIsImhhbmRsZXIiLCJyZXNvbHZlQ29tcG9uZW50Iiwib24iLCJvZmYiLCJmdWxsTmFtZSIsIiRpbmplY3RvciIsInBhcnNlQ29tcG9uZW50IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0lBVU1BLG1CLFdBUkxDLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQjtBQUNoQkMsV0FBUyxFQUFFLFVBREs7QUFFaEJDLEtBQUcs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QixTQUF6QyxDQURSO0FBRUhnRixpQkFBSyxFQUFFOUQsQ0FBQyxDQUFDNEQsSUFBRixDQUFPRTtBQUZYLFdBQUQsQ0FBTjtBQUlIO0FBQ0o7O0FBRUQsV0FBS1osV0FBTCxDQUFpQnVDLEVBQWpCLENBQW9CRixPQUFwQjtBQUVBLGFBQU8sWUFBWTtBQUNmLGFBQUtyQyxXQUFMLENBQWlCd0MsR0FBakIsQ0FBcUJILE9BQXJCO0FBQ0gsT0FGRDtBQUdIO0FBcktMO0FBQUE7QUFBQSxxQ0F1S3FCSSxRQXZLckIsRUF1SytCO0FBQ3pCLGFBQU8sS0FBS0MsU0FBTCxDQUFlQyxjQUFmLENBQThCRixRQUE5QixFQUF3QyxLQUFLOUMsUUFBTCxDQUFjUSxLQUF0RCxFQUE2RCxLQUFLUixRQUFMLENBQWM5RCxTQUEzRSxDQUFQO0FBQ0Q7QUF6S0w7O0FBQUE7QUFBQSxFQUFtQ0YsUUFBUSxDQUFDK0MsT0FBNUMsYzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFPLFNBQVNNLFlBQVQsQ0FBc0JaLElBQXRCLEVBQTRCO0FBQy9CLFNBQU9BLElBQUksQ0FBQ3dFLFFBQUwsR0FBZ0IzRCxPQUFoQixDQUF3QixLQUF4QixFQUErQixFQUEvQixFQUFtQ0EsT0FBbkMsQ0FBMkMsS0FBM0MsRUFBa0QsRUFBbEQsQ0FBUDtBQUNILEMiLCJmaWxlIjoiYXV0b21hdGUtcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVSb3V0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVSb3V0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXItbGluayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVyLXZpZXcnOyIsImltcG9ydCB7IFJvdXRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJztcclxuXHJcbkBhdXRvbWF0ZS5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAncm91dGVyTGluaycsXHJcbiAgICB0ZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwibGlua1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIEBjbGljaz1cIm5hdmlnYXRlKClcIj48c2xvdCBuYW1lPVwiY29udGVudFwiPjwvc2xvdD48L3NwYW4+JyxcclxuICAgIGluamVjdDoge1xyXG4gICAgICAgICRyb3V0ZXI6IFJvdXRlclNlcnZpY2VcclxuICAgIH1cclxufSlcclxuY2xhc3MgUm91dGVyTGlua0NvbXBvbmVudCBleHRlbmRzIGF1dG9tYXRlLkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMudG8gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIubmF2aWdhdGUodGhpcy5wcm9wcy50byk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBSb3V0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSc7XHJcblxyXG5AYXV0b21hdGUuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3JvdXRlclZpZXcnLFxyXG4gICAgaW5qZWN0OiB7XHJcbiAgICAgICAgJHJvdXRlcjogUm91dGVyU2VydmljZVxyXG4gICAgfVxyXG59KVxyXG5jbGFzcyBSb3V0ZXJWaWV3Q29tcG9uZW50IGV4dGVuZHMgYXV0b21hdGUuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZpZXdEZXB0aCA9IDA7XHJcbiAgICAgICAgdGhpcy51bldhdGNoUm91dGVDaGFuZ2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyVmlld1JlbmRlcmVkKCkge1xyXG4gICAgICAgIGlmKGF1dG9tYXRlLmlzTnVtYmVyKHRoaXMuJCRwYXJlbnQudmlld0RlcHRoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdEZXB0aCA9IHRoaXMuJCRwYXJlbnQudmlld0RlcHRoICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudW5XYXRjaFJvdXRlQ2hhbmdlID0gdGhpcy4kcm91dGVyLndhdGNoUm91dGVDaGFuZ2UodGhpcy52aWV3RGVwdGgsIGUgPT4gdGhpcy51cGRhdGVWaWV3KGUpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52aWV3RGVwdGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gaXQgaXMgcm9vdCB2aWV3LCBzdGFydCB0byBsaXN0ZW4gdG8gcm91dGUgY2hhbmdlIGV2ZW50XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5saXN0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlldyhlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclZpZXcoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclZpZXcoZS5jb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclZpZXcoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gYXV0b21hdGUuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy52aWV3LnZpZXdEZXB0aCA9IHRoaXMudmlld0RlcHRoICsgMTtcclxuICAgICAgICB0aGlzLnZpZXcuJG1vdW50KHRoaXMuJGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy52aWV3LiRyZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bldhdGNoUm91dGVDaGFuZ2UgJiYgdGhpcy51bldhdGNoUm91dGVDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLmNsZWFyVmlldygpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9yb3V0ZS1zdGF0ZSc7IiwiZXhwb3J0IGNsYXNzIFJvdXRlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUpIHtcclxuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkUGF0aCA9ICcnO1xyXG4gICAgICAgIHRoaXMucmVtYWluaW5nUGF0aCA9ICcnO1xyXG4gICAgICAgIHRoaXMubmV3ID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JzsiLCJAYXV0b21hdGUuc2VydmljZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdoYXNoUHJvdmlkZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIYXNoUHJvdmlkZXJTZXJ2aWNlIGV4dGVuZHMgYXV0b21hdGUuU2VydmljZSB7XHJcbiAgICBnZXQgcGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXRoKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggfHwgJyc7XHJcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHNlbGYucGF0aCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcclxuICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHNlbGYucGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY2xlYXJTbGFzaGVzIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuQGF1dG9tYXRlLnNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnaGlzdG9yeVByb3ZpZGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeVByb3ZpZGVyU2VydmljZSBleHRlbmRzIGF1dG9tYXRlLlNlcnZpY2Uge1xyXG4gICAgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2g7XHJcblxyXG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJKHZhbHVlKTtcclxuICAgICAgICB2YWx1ZSA9IGNsZWFyU2xhc2hlcyh2YWx1ZSk7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXD8oLiopJC8sICcnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuYmFzZSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gJy8nO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmZpZyhvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYmFzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2UgPSAnLycgKyBjbGVhclNsYXNoZXMob3B0aW9ucy5iYXNlKSArICcvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY3VycmVudCAhPT0gc2VsZi5wYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnQgPSBzZWxmLnBhdGg7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIHNlbGYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnBhdGg7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZm4sIDUwKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXRoKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggfHwgJyc7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5iYXNlICsgY2xlYXJTbGFzaGVzKHBhdGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL3JvdXRlci1zZXJ2aWNlJzsiLCJpbXBvcnQgeyBjbGVhclNsYXNoZXMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IFJvdXRlU3RhdGUgfSBmcm9tICcuLi9lbnRpdHknO1xyXG5pbXBvcnQgeyBIYXNoUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9oYXNoLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIaXN0b3J5UHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9oaXN0b3J5LXNlcnZpY2UnO1xyXG5cclxuQGF1dG9tYXRlLnNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAncm91dGVyU2VydmljZScsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAnJGhhc2gnOiBIYXNoUHJvdmlkZXJTZXJ2aWNlLFxyXG4gICAgICAgICckaGlzdG9yeSc6IEhpc3RvcnlQcm92aWRlclNlcnZpY2UsXHJcbiAgICAgICAgJyRpbmplY3Rvcic6ICdpbmplY3RvcidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvdXRlclNlcnZpY2UgZXh0ZW5kcyBhdXRvbWF0ZS5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9LFxyXG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZSA9ICdoYXNoJztcclxuICAgICAgICB0aGlzLnJvdXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlU3RhdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5yb3V0ZUNoYW5nZSA9IG5ldyBhdXRvbWF0ZS5NZXNzYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnKHJvdXRlcywgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5tb2RlID09PSAnaGlzdG9yeScgJiYgISEoaGlzdG9yeS5wdXNoU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSAnaGlzdG9yeSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBhdXRvbWF0ZS5tZXJnZSgge1xyXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAgICAgICAgICAgICAgdXNpbmc6IHt9XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGhpc3Rvcnkuc2V0dGluZ3Mob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSB0aGlzLiRoaXN0b3J5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXIgPSB0aGlzLiRoYXNoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQocm91dGUpIHtcclxuICAgICAgICB0aGlzLnJvdXRlcy5wdXNoKHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUocm91dGUpIHtcclxuICAgICAgICBhdXRvbWF0ZS5yZW1vdmUodGhpcy5yb3V0ZXMsIHJvdXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXAocGF0aCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgZm9ybWVyUm91dGVTdGF0ZXMgPSB0aGlzLmN1cnJlbnRSb3V0ZVN0YXRlcztcclxuXHJcbiAgICAgICAgcGF0aCA9IGNsZWFyU2xhc2hlcyhwYXRoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVTdGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXRjaFJvdXRlcyh0aGlzLnJvdXRlcywgcGF0aCwgZm9ybWVyUm91dGVTdGF0ZXMpO1xyXG5cclxuICAgICAgICB2YXIgZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVTdGF0ZXMuc29tZShmdW5jdGlvbiAoc3RhdGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5uZXcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlU3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLm5ldyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnJvdXRlQ2hhbmdlLmZpcmUoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hSb3V0ZXMocm91dGVzLCBwYXRoLCBmb3JtZXJSb3V0ZVN0YXRlcykge1xyXG4gICAgICAgIGlmICghcm91dGVzIHx8ICFyb3V0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgcm91dGVzLnNvbWUoZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVkID0gc2VsZi5tYXRjaFJvdXRlKHJvdXRlLCBwYXRoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWVyUm91dGVTdGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZE9uZSA9IGZvcm1lclJvdXRlU3RhdGVzLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkLnJvdXRlID09PSBvbGRPbmUucm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50Um91dGVTdGF0ZXMucHVzaChvbGRPbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50Um91dGVTdGF0ZXMucHVzaChtYXRjaGVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFJvdXRlU3RhdGVzLnB1c2gobWF0Y2hlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXRjaFJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgbWF0Y2hlZC5yZW1haW5pbmdQYXRoLCBmb3JtZXJSb3V0ZVN0YXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaFJvdXRlKHJvdXRlLCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gbmV3IFJvdXRlU3RhdGUocm91dGUpLFxyXG4gICAgICAgICAgICBtYXRjaGVkRnJhZ21lbnRzID0gW10sXHJcbiAgICAgICAgICAgIHNlZ21lbnRzID0gcm91dGUucGF0aC5zcGxpdCgnLycpLFxyXG4gICAgICAgICAgICBmcmFnbWVudHMgPSBwYXRoLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpID49IGZyYWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBmcmFnbWVudHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCA9PT0gZnJhZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRGcmFnbWVudHMucHVzaChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZWRGcmFnbWVudHMucHVzaChmcmFnbWVudCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5wYXJhbWV0ZXJzW3NlZ21lbnQuc3Vic3RyaW5nKDEpXSA9IGZyYWdtZW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLm1hdGNoZWRQYXRoID0gbWF0Y2hlZEZyYWdtZW50cy5qb2luKCcvJyk7XHJcbiAgICAgICAgc3RhdGUucmVtYWluaW5nUGF0aCA9IGZyYWdtZW50cy5zcGxpY2Uoc2VnbWVudHMubGVuZ3RoKS5qb2luKCcvJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW4oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnByb3ZpZGVyLmxpc3RlbihmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBzZWxmLm1hcChwYXRoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShwYXRoKSB7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlci5uYXZpZ2F0ZShwYXRoIHx8ICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXIuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoUm91dGVDaGFuZ2UoZGVwdGgsIGFjdGlvbikge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEuZGVwdGggPT09IGRlcHRoKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogc2VsZi5yZXNvbHZlQ29tcG9uZW50KGUuZGF0YS5zdGF0ZS5yb3V0ZS5jb21wb25lbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBlLmRhdGEuc3RhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvdXRlQ2hhbmdlLm9uKGhhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlQ2hhbmdlLm9mZihoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVDb21wb25lbnQoZnVsbE5hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGluamVjdG9yLnBhcnNlQ29tcG9uZW50KGZ1bGxOYW1lLCB0aGlzLnNldHRpbmdzLnVzaW5nLCB0aGlzLnNldHRpbmdzLm5hbWVzcGFjZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xlYXJTbGFzaGVzKHBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9eXFwvLywgJycpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==