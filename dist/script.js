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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyView = function () {
    function KeyView() {
        var _this = this;

        _classCallCheck(this, KeyView);

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;

        document.addEventListener("keydown", function (keyBoardDown) {
            if (keyBoardDown.keyCode === 39) {
                _this.right = true;
            }
            if (keyBoardDown.keyCode === 37) {
                _this.left = true;
            }
            if (keyBoardDown.keyCode === 38) {
                _this.up = true;
            }
            if (keyBoardDown.keyCode === 40) {
                _this.down = true;
            }
        });

        document.addEventListener("keyup", function (keyBoardUp) {

            if (keyBoardUp.keyCode === 39) {
                _this.right = false;
            }
            if (keyBoardUp.keyCode === 37) {
                _this.left = false;
            }
            if (keyBoardUp.keyCode === 38) {
                _this.up = false;
            }
            if (keyBoardUp.keyCode === 40) {
                _this.down = false;
            }
        });
    }

    _createClass(KeyView, [{
        key: "location",
        get: function get() {
            return {
                left: this.left,
                right: this.right,
                up: this.up,
                down: this.down
            };
        }
    }]);

    return KeyView;
}();

module.exports = KeyView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dot = __webpack_require__(2);

var _dot2 = _interopRequireDefault(_dot);

var _squ = __webpack_require__(3);

var _squ2 = _interopRequireDefault(_squ);

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        var _this = this;

        _classCallCheck(this, Controller);

        this.screenSize = {
            x: window.innerWidth,
            y: window.innerHeight
        };
        this.dots = [];
        this.squs = [];
        this.canvas = document.querySelector("#myCanvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.screenSize.x;
        this.canvas.height = this.screenSize.y;
        this.mousePos = {
            x: 0,
            y: 0
        };

        this.player = new _player2.default();
        this.key = new _keyview2.default();
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

            this.player.move(this.key.location);

            if (this.squs.length < 2000 && this.dots.length < 2000) {
                // if((Math.random() ) > 0.5){
                //     this.squs.push(new Squ(this.mousePos.x,this.mousePos.y));
                //
                // }else{
                //     this.dots.push(new Dot(this.mousePos.x, this.mousePos.y));
                //
                // }
            }

            if (this.dots.length < 10) {
                this.dots.push(new _dot2.default(Math.random() * this.screenSize.x, Math.random() * this.screenSize.y));
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
            this.player.draw(this.context);

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
/* 2 */
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
            if (this.props.y < 0 || this.props.y > window.innerWidth || this.props.x < 0 || this.props.x > window.innerWidth) {
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
/* 3 */
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _keyview = __webpack_require__(0);

var _keyview2 = _interopRequireDefault(_keyview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);

        this.props = {
            xPos: 10,
            yPos: 10,
            height: 5,
            width: 5,
            hp: 3,
            color: "rgb(255,0,0)"
        };
        this.key = new _keyview2.default();
    }

    _createClass(Player, [{
        key: "draw",
        value: function draw(context) {
            context.fillStyle = this.props.color;
            context.fillRect(this.props.xPos, this.props.yPos, this.props.height, this.props.width);
        }
    }, {
        key: "move",
        value: function move(movement) {
            if (movement.left && this.props.xPos <= window.innerWidth - window.innerWidth) {
                this.props.xPos === 0;
            } else if (movement.left) {
                this.props.xPos -= 10;
            }

            if (movement.right && this.props.xPos >= window.innerWidth - 10) {
                this.props.xPos === window.innerWidth;
            } else if (movement.right === true) {
                this.props.xPos += 10;
            }

            if (movement.down && this.props.yPos >= window.innerHeight - 10) {
                this.props.yPos === window.innerHeight;
            } else if (movement.down) {
                this.props.yPos += 10;
            }

            if (movement.up && this.props.yPos <= window.innerHeight - window.innerHeight) {
                this.props.yPos === 0;
            } else if (movement.up) {
                this.props.yPos -= 10;
            }
            // this.collision();
        }
    }, {
        key: "collision",
        value: function collision(particle) {
            // if (!particle) return;
            //
            // if ((particle.x + particle.width >= this.player.xPos)
            //     && (particle.x <= this.player.xPos + this.player.width)
            //     && (particle.y + particle.height >= this.player.yPos)
            //     && (particle.y <= this.player.yPos + this.player.height)
            // ) {
            //     console.log("hi");
            //     this.player.hp = this.player.hp - 1;
            //     this.player.color = "rgba(200,0,0,1)";
            //     setTimeout(()=>{ this.player.color = "rgba(0,254,0,1)";}, 100);
            //     return true;
            // }
            // return false;
        }
    }, {
        key: "pos1",
        get: function get() {
            return {
                x: this.props.xPos,
                y: this.props.yPos,
                width: this.props.width,
                height: this.props.height,
                color: this.props.color
            };
        }
    }]);

    return Player;
}();

module.exports = Player;

/***/ })
/******/ ]);