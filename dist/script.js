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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(1);

var _dot2 = _interopRequireDefault(_dot);

var _squ = __webpack_require__(2);

var _squ2 = _interopRequireDefault(_squ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        var _this = this;

        _classCallCheck(this, Controller);

        this.dots = [];
        this.squs = [];
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");

        this.mousePos = {
            x: 0,
            y: 0
        };

        window.addEventListener("mousemove", function (e) {
            _this.mousePos.x = e.clientX;
            _this.mousePos.y = e.clientY;
        });

        this.loop();
    }

    _createClass(Controller, [{
        key: "loop",
        value: function loop() {
            var _this2 = this;

            if (this.squs.length < 2000 && this.dots.length < 2000) {
                if (Math.random() > 0.5) {
                    this.squs.push(new _squ2.default(this.mousePos.x, this.mousePos.y));
                } else {
                    this.dots.push(new _dot2.default(this.mousePos.x, this.mousePos.y));
                }
            }

            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.squs.forEach(function (squ) {
                squ.move();
                squ.draw(_this2.context);
            });
            this.dots.forEach(function (dot) {
                dot.move();
                dot.draw(_this2.context);
            });

            this.dots = this.dots.filter(function (dot) {
                return !dot.props.isDead;
            });

            this.squs = this.squs.filter(function (squ) {
                return !squ.props.isDead;
            });

            window.requestAnimationFrame(function () {
                _this2.loop();
            });
        }
    }]);

    return Controller;
}();

var c = new Controller();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dot = function () {
    function Dot(x, y) {
        _classCallCheck(this, Dot);

        this.props = {
            x: x,
            y: y,
            vel: {
                x: Math.random() * 8 - 4,
                y: Math.random() * 2 - 2
            },
            gravity: 0.1,
            color: this.randomColor(),
            size: this.randomSize(),
            isDead: false
        };
    }

    _createClass(Dot, [{
        key: 'move',
        value: function move() {
            if (this.props.y < 0 || this.props.y > 1000 || this.props.x < 0 || this.props.x > 1000) {
                this.props.isDead = true;
            }

            this.props.vel.y += this.props.gravity;

            this.props.x += this.props.vel.x;
            this.props.y += this.props.vel.y;
        }
    }, {
        key: 'draw',
        value: function draw(context) {
            context.beginPath();
            context.arc(this.props.x, this.props.y, this.props.size, 0, 2 * Math.PI);
            context.fillStyle = this.props.color;
            context.stroke();
            context.fill();
        }
    }, {
        key: 'randomColor',
        value: function randomColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
    }, {
        key: 'randomSize',
        value: function randomSize() {
            return Math.floor(Math.random() * 10);
        }
    }]);

    return Dot;
}();

exports.default = Dot;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Squ = function () {
    function Squ(x, y) {
        _classCallCheck(this, Squ);

        this.props = {
            x: x,
            y: y,
            vel: {
                x: Math.random() * 8 - 4,
                y: Math.random() * 2 - 2
            },
            gravity: 0.1,
            color: this.randomColor(),
            size: this.randomSize(),
            isDead: false
        };
    }

    _createClass(Squ, [{
        key: 'move',
        value: function move() {
            if (this.props.y < 0 || this.props.y > 1000 || this.props.x < 0 || this.props.x > 1000) {
                this.props.isDead = true;
            }
            this.props.vel.y += this.props.gravity;

            this.props.x += this.props.vel.x;
            this.props.y += this.props.vel.y;
        }
    }, {
        key: 'draw',
        value: function draw(context) {
            context.fillStyle = this.props.color;

            context.fillRect(this.props.x, this.props.y, this.props.size, this.props.size);
        }
    }, {
        key: 'randomColor',
        value: function randomColor() {
            return 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        }
    }, {
        key: 'randomSize',
        value: function randomSize() {
            return Math.floor(Math.random() * 10);
        }
    }]);

    return Squ;
}();

exports.default = Squ;

/***/ })
/******/ ]);