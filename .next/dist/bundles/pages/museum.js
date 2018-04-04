module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_database_trips__ = __webpack_require__("./static/database/trips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__);
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/edu_it/components/navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'clearfix', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'icon', href: '/static/public/favicon/favicon.ico', type: 'image/png', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        'Trip Around BTS'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit|Sriracha', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'container-fluid col-md-12 custom_navbar', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'container', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                { href: '/', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { className: 'logo', alt: 'Brand', src: 'static/asset/logo/logo2.png', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        }
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('a', { href: 'https://www.facebook.com/eduittravel/', target: '_blank', 'class': 'fab fa-facebook social_Icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 25
                                }
                            })
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    },
                    '\n                        .clearfix {\n                            clear:both;\n                        }\n                        .logo {\n                            width: 230px;\n                            height: 45px;\n                            object-fit: cover;\n                            -webkit-object-fit: cover;\n                            -moz-object-fit: cover;\n                            -o-object-fit: cover;\n                            position: relative;\n                            top: 20px;\n                        }\n                        .custom_navbar {\n                            width: 100%;\n                            height: 80px;\n                            background-color: #fff;\n                            border-top: 1px solid #eee;\n                        }\n                        .social_Icon {\n                            float: right; font-size: 35px; padding-top: 20px;\n                            cursor: pointer;\n                            color: #4266b2;\n                        }\n                    '
                )
            );
        }
    }]);

    return Navbar;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/museum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_database_trips__ = __webpack_require__("./static/database/trips.js");
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/edu_it/pages/museum.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Museum = function (_React$Component) {
    _inherits(Museum, _React$Component);

    _createClass(Museum, null, [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var query = _ref.query;

            return {
                trips: __WEBPACK_IMPORTED_MODULE_6__static_database_trips__["a" /* default */]
            };
        }
    }]);

    function Museum(props) {
        _classCallCheck(this, Museum);

        var _this = _possibleConstructorReturn(this, (Museum.__proto__ || Object.getPrototypeOf(Museum)).call(this, props));

        _this.state = {
            search_fillter: ''
        };
        return _this;
    }

    _createClass(Museum, [{
        key: 'onChange',
        value: function onChange(event) {
            this.setState({
                search_fillter: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var filter_trips = __WEBPACK_IMPORTED_MODULE_6__static_database_trips__["a" /* default */].filter(function (trips) {
                if (trips.category === 'museum') {
                    return trips.place_name.toLowerCase().indexOf(_this2.state.search_fillter) !== -1;
                }
            });
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_navbar__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'container-fluid', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'main_background col-md-12', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 38
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'container', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 39
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'h4',
                                    { className: 'page-header top_location_heading', style: { position: 'absolute' }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 40
                                        }
                                    },
                                    'top museum of bangkok'
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 41
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('input', { onChange: this.onChange.bind(this), className: 'form-control searchBox', placeholder: 'Search | Find museum', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 42
                                    }
                                })
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    },
                    filter_trips.map(function (trips, i) {
                        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                            { href: '/detail?id=' + trips.id, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'a',
                                { key: i, className: 'grid col-md-4', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 51
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'feed', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 52
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + trips.image_url, className: 'img-responsive', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        }
                                    })
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'discription', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 55
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        'h4',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 56
                                            }
                                        },
                                        trips.place_name
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        'p',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 57
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { style: { marginRight: 6, color: '#545b62' }, 'class': 'fas fa-map-marker-alt', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 57
                                            }
                                        }),
                                        ' ',
                                        trips.location
                                    )
                                )
                            )
                        );
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                        }
                    },
                    '\n                \n                .clearfix {\n                    clear:both\n                }\n                .searchBox {\n                    width:560px;\n                    margin-top:120px;\n                    position: absolute;\n                }\n                .main_background {\n                    background-color: #000;\n                    height: 250px;\n                    background-image:url(../static/asset/background/Museum-Siam-003.gif);\n                    background-repeat: no-repeat;\n                    background-size: cover;\n                    background-position: center bottom;\n                    box-shadow: inset 5px 10px 10px #000;\n                    margin-bottom:43px;\n                }\n                .main_background::before {\n                    content: \'\';\n                    width: 100%;\n                    height: 100%;\n                    opacity: .6;\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                    bottom: 0;\n                    left: 0;\n                    background-image: linear-gradient(to bottom right,#12161b,#6a61b5);\n                }\n                .grid {\n                    height:100%;\n                    background-color:transparent !important;\n                    float:left;\n                    cursor: pointer;\n                    padding:0;\n                    border-right:16px solid #fff;\n                    margin-bottom:20px;\n                    color: #6c757d;\n                }\n                .grid:hover {\n                    color: #6c757d !important;\n                    text-decoration: none !important;\n                    ttransition:All 1s ease;\n                    -webkit-transition:All 1s ease;\n                    -moz-transition:All 1s ease;\n                    -o-transition:All 1s ease;\n                    transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                    -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                    -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                    -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                    -ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                    transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                    -webkit-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                    -moz-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                    -o-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                    -ms-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                    transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                    -webkit-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                    -moz-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                    -o-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                    -ms-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                }\n\n                h1, h2, h3, h4, h5, h6, p, span {\n                    font-family: \'Sriracha\', cursive, sukhumvit set !important;\n                }\n\n                .top_location_heading{\n                    text-transform: capitalize;\n                    padding-top: 80px;\n                    padding-bottom: 15px;\n                    font-weight: bold;\n                    color: #fff;\n                    font-family: inherit !important;\n                    font-size: 30px;\n                    text-shadow: 1px 0px 1px #000;\n                } \n\n                .feed {\n                    width:100%;\n                    height:260px;\n                    overflow:hidden;\n                }\n\n                img {\n                    max-width:100%;\n                    height:100%;\n                }\n\n                .feed img {\n                    width:100%;\n                    height:260px;\n                    overflow:hidden;\n                    top: 0;\n                    right: 0;\n                    bottom: 0;\n                    left: 0;\n                    position:absolute;\n                    object-fit: cover;\n                    object-position: center top;\n                    border-radius:3px;\n                }\n                .feed img:hover {\n                    border:5px solid #0a192e;\n                    cursor: pointer;\n                }\n\n                .discription {\n                    padding-top: 16px;\n                    padding-bottom: 10px;\n                }\n\n                .discription h4{\n                    font-size: 18px;\n                    font-family: sukhumvit set, kanit !important;\n                    text-transform: capitalize;\n                    color:#4a4a4a;\n                    font-weight: bold;\n                    overflow: hidden;\n                    text-overflow: ellipsis;\n                    white-space: nowrap;\n                }\n                .discription p {\n                    font-family: sukhumvit set, kanit !important;\n                    text-transform: capitalize;\n                    font-size: 13.4px;\n                    line-height: 26px;\n                    font-weight: lighter;\n                }\n            '
                )
            );
        }
    }]);

    return Museum;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Museum);

/***/ }),

/***/ "./static/database/trips.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var trips = [{
    "id": "1",
    "image_url": "Dinosaur_Planet_Bangkok.jpg",
    "location": "Phrom Phong",
    "latitude": 13.7323134,
    "longitude": 100.5663462,
    "place_name": "dinosaur planet bangkok",
    "category": "museum",
    "content": "dinosaur planet bangkok (ไดโนซอร์ แพลนเน็ต) สวนสนุกไดโนเสาร์ ที่อัดแน่นไปด้วยความบันเทิง ครบครันไปด้วยแหล่งเรียนรู้ที่นำเสนอได้อย่างสมบูรณ์ที่สุด เป็นอีกหนึ่งสถานที่ท่องเที่ยวที่เหมาะสำหรับทุกคนในครอบครัว ด้วยการนำพาผู้ชมข้ามมิติย้อนกลับไปยังโลกล้านปี ในสมัยที่ยังเต็มไปด้วยเหล่าไดโนเสาร์ที่จะกลับมามีชีวิตจริงให้ได้สัมผัสอย่างใกล้ชิดอีกครั้ง dinosaur planet ตั้งอยู่ใจกลางสุขุมวิท ใกล้ๆ BTS พร้อมพงษ์ เลยสวนเบญจสิริไปประมาณ 200 เมตร เปิดทุกวัน 10.00น.-22.00น. ตรงซื้อตั๋วจะอยู่ด้านขวามือ ราคาปกติผู้ใหญ่ 600 บาท เด็ก 400 บาท ลูกค้า Ais ลด 15% Serenade ลด 25%",
    "album": {
        "album_1": "Dinosaur-Planet-Theme-Park-Bangkok.jpg",
        "album_2": "1516699790-qa0eg-ptksi.jpg",
        "album_3": "1516699787-qgz8g-urrbe.jpg"
    }
}, {
    "id": "2",
    "image_url": "1920x0.jpeg",
    "location": "central world",
    "latitude": 13.7462276,
    "longitude": 100.5398188,
    "place_name": "Wongnai Users’ Choice Food Festival 2018",
    "category": "shopping mall",
    "content": "สุดยอดมหกรรมอาหารสุดยิ่งใหญ่กลางกรุงฯ เริ่มต้นศักราชใหม่รับปี 2018 ภายในงานได้รวมสุดยอดร้านอาหารประจำปี 2018 การันตีความอร่อยจากผู้ใช้แอปฯ Wongnai กว่า 3 ล้านคน เต็มอิ่มไปกับอาหารคาวหวานกว่า 300 เมนู จาก 100 ร้านดัง อาทิ เช่น ร้าน Fillets , La VIE - Creative French Cuisine , OPPA เกาหลี BY JJANG , Hotto Bun , The Blooming Gallery , Guss Damn Good , KAIZEN COFFEE CO , Cheevit Cheeva Fine Dessert , PACAMARA , ก๋วยเตี๋ยวคั่วไก่สวนมะลิ เจ๊เค็ง เจ๊งิ้ม , Fù SEAFOOD By Chef Pu , กระเพราคุณพ่อ , Aoringo Japanese Curry Place , ติ่งไท้ฝู , Charm Eatery and Bar , Street Pizza Chiang Mai , El Toro House of Meat Argentinian Steakhouse , เฝอ' 54 , Indian Food , Frank Cake Bar , ปังเด็ด , FLOWERPOT CAFE , COFFEELISM STAND , Five Crossing , Cheesezuka , Chefman , ชาตรามือ , กล้วย กล้วย , ปูดองอันยอง , มุมอร่อย ซีฟู๊ด , เป็ดย่าง ตงเพ้ง , Crab and Claw , หมูสะเต๊ะอาซ้อ , บ้านเบญจรงค์ปาย , JIM'S BURGERS AND BEERS , สนั่นอาหารทะเล (sanan seafood) , Shibuya Shabu , Kinza Gyoza คินซ่า เกี๊ยวซ่า , ปูขี่พริก",
    "album": {
        "album_1": "Poster_Promote-05-1.jpg",
        "album_2": "64fbc9814b554575880dcb8277f1d460.jpg",
        "album_3": "PSX_20180117_231830-793822.jpg"

    }
}, {
    "id": "3",
    "image_url": "พร้องพงษ์_180306_0001.jpg",
    "location": "Phrom Phong",
    "latitude": 13.7332009,
    "longitude": 100.569304,
    "place_name": "cafeteria",
    "category": "restaurant",
    "content": "ร้านอาหารญี่ปุ่นต้นตำรับสไตล์โรงอาหาร ทั้งอร่อยและราคาถูก โดยร้านนี้เมื่อสั่งอาหาร1เมนูสามามารถเพิ่มข้าว แกงกระหรี่ น้ำ และเครื่องเคียงได้ไม่อั้น ข้อควรระวัง : เมื่อตักข้าว แกงกระหรี่ และเครื่องเคียงต่างๆถ้ารับประทานให้หมดจะถูกปรับ100บาท การเดินทาง : ตั้งอยู่ที่ซอยสุขุมวิท35 บีทีเอสพร้อมพงษ์ออกทางออกที่3-4 ร้านอยู่บริเวณหลังห้างสรรพสินค้า The EmQuartier",
    "album": {
        "album_1": "oqq3zu81dF4ulMw4Lxe-o.jpg",
        "album_2": "oqq376bqfN3BCj5NtX8-o.jpg",
        "album_3": "พร้องพงษ์_180306_0042.jpg"
    }
}, {
    "id": "4",
    "image_url": "hubba_180306_0001.jpg",
    "location": "ekamai",
    "latitude": 13.72519,
    "longitude": 100.587628,
    "place_name": "hubba co-working space",
    "category": "cafe / co-working space",
    "content": "ถ้าจะให้นิยามที่นี่มาเป็นคำที่เข้าใจง่ายก็คงจะได้ว่า ออฟฟิศรายวันขอคนที่ชอบความอิสระ ผมรู้จักที่นี่มาจากน้องที่ออฟฟิศ ผู้ที่ชอบสรรหาร้านนั่งได้นานทั้งวันทั่วกรุง น้องชายคนนั้นบอกว่าเดี๋ยวนี้เขาเริ่มมีเทรนด์ของCoworking Space หรือพื้นที่สำหรับคนกรุง ที่ไม่ชอบนั่งทำงานในออฟฟิศ แต่ชอบมานั่งชิลสบายๆ พร้อมกับพูดคุยแลกเปลี่ยนความรู้จากคนหลากหลายสาขาอาชีพ ที่นี่คือ Hubba หรือ ฮับบ้าคอมมูนิตี้รูปแบบใหม่ที่เราจะพาไปทำความรู้จักกัน ภายในซอยเอกมัย 4 ที่นี่เป็นที่ตั้งของ Hubba บ้านหลังสีขาวพร้อมพื้นที่จอดรถและสวนภายในบ้าน มองข้างนอกอาจจะเป็นเพียงบ้านธรรมดา แต่ที่ทำให้หลายคนแปลกใจคือบ้านหลังนี้มีชาวต่างชาติ คนไทย หรือคนที่แต่งตัวแบบครีเอทีฟ หรือนักโฆษณาเข้ามาในบ้านหลังนี้ไม่ขาดสาย ส่วนใครที่อยากมีออฟฟิศส่วนตัวใจกลางกรุง แต่ไม่สู้ราคาค่าเช่าออฟฟิศที่แพงหูฉี่ ที่นี่เขาก็แบ่งพื้นที่ให้เช่าโดยคิดค่าห้อง 5000 บาท/เดือน + กับค่ารายเดือนของสมาชิกที่จะต้องมีจำนวนสมาชิก 3 คนขึ้นไปก็สามารถมีออฟฟิศในเมืองได้แล้ว",
    "album": {
        "album_1": "7b86c048-9611-4279-a858-2816f84a12b4_extra.jpg",
        "album_2": "DSCF0667.JPG",
        "album_3": "11755672_10153948506912119_4074935785052254491_n.jpg"
    }
}, {
    "id": "5",
    "image_url": "วัดมหาบุศย์_180306_0006.jpg",
    "location": "On Nut",
    "latitude": 13.7148723,
    "longitude": 100.606661,
    "place_name": "Wat Mahabut",
    "category": "temple",
    "content": "วัดมหาบุศย์ ภายในวัดก็จะมีร้านขายของมากมาย มีที่สำหรับทำบุญปล่อยนกปล่อยปลา สิ่งที่ขาดไม่ได้เมื่อไปวัดนี้คือการไปสักการะศาลย่านาค ผู้คนนิยมไปขอเรื่องความรัก ขอบุตร ขอหวย ข้อห้าม : ห้ามถ่ายภาพ หากต้องการเก็บภาพสามารถใช้กล้องมือถือถ่ายได้แต่ห้ามอัดวีดีโอ ห้ามนำสัตว์เลี้ยงเข้าไป ก่อนเข้าไปภายในศาลต้องถอดรองเท้าให้เรียบร้อย การเดินทาง : ออกทางออกที่1 ขึ้นรถแท็กซี่ 45 บาท หรือเดินย้อนเข้าซอยสุขุมวิทย์ 77 และขึ้นรถเมล์หรือสองแถวจากป้ายหน้าบิ๊กซี ลงซอยอ่อนนุช 7",
    "album": {
        "album_1": "วัดมหาบุศย์_180313_0006.jpg",
        "album_2": "วัดมหาบุศย์_180313_0002.jpg",
        "album_3": "วัดมหาบุศย์_180313_0004.jpg"
    }
}, {
    "id": "6",
    "image_url": "สวนรถไฟ_180313_0016.jpg",
    "location": "Chatuchak",
    "latitude": 13.81322,
    "longitude": 100.550732,
    "place_name": "Wachirabenchathat Park",
    "category": "park",
    "content": "สวนวชิรเบญจทัศ หรือที่เรียกกันจนติดปากว่า สวนรถไฟ มีพื้นที่กว้างขวางมากถึง 375 ไร่ ตั้งอยู่ท่ามกลางตึกสูงของย่านพหลโยธิน เรียกได้ว่าเป็นสถานที่ผ่อนคลายของคนเมืองก็ว่าได้ เพราะแค่ก้าวเข้าไปในสวนก็รู้สึกร่มรื่น สงบ เย็นสบาย หากใครเบื่อเดินห้างแล้วจะชวนเพื่อนมาปั่นจักรยาน ถ่ายรูปเล่น ตลอดจนมาวิ่งออกกำลังกายกันก็ได้นะ นอกจากจะได้ความสนุกแล้วยังสุขภาพดีอีกด้วย สำหรับบริการเช่าจักรยานนั้น เมื่อเช่าแล้วเราสามารถขี่ได้ทั้งวัน เริ่มต้นคันละ 30 บาทเท่านั้น (แล้วแต่ร้าน) หรือจะมาปิคนิก นั่งเล่นรับลมชิวๆในวันว่างก็แฮปปี้สุดๆ",
    "album": {
        "album_1": "สวนรถไฟ_180306_0014.jpg",
        "album_2": "สวนรถไฟ_180306_0003.jpg",
        "album_3": "สวนรถไฟ_180313_0012.jpg"
    }
}, {
    "id": "7",
    "image_url": "kamthieng-house-museum.jpg",
    "location": "asoke",
    "latitude": 13.7392206,
    "longitude": 100.5615993,
    "place_name": "Kamthieng House Museum",
    "category": "museum",
    "content": "พิพิธภัณฑ์เรือนคำเที่ยง บ้านไม้ทรงไทยโบราณตกแต่งแบบภาคเหนือ บรรยากาศร่มรื่นผ่อนคลาย โดยปกติอัตราค่าเข้าชมอยู่ที่ 100บาท แต่คุณลุงคนคุมที่นั่นใจดีมาก พอรู้ว่าเป็นนักศึกษาก็ให้หยอดเงินลงขันตามศรัทธา การเดินทาง : จากบีทีเอสอโศกออกทางออกที่ 3 เดินตรงไปและเลี้ยวขวาที่สี่แยกอโศก เดินตรงมาเรื่อยๆพิพิธภัณฑ์จะอยู่ทางซ้ายมือ",
    "album": {
        "album_1": "พิพิธภัณฑ์เรือนคำเที_180313_0010.jpg",
        "album_2": "พิพิธภัณฑ์เรือนคำเที_180313_0043.jpg",
        "album_3": "พิพิธภัณฑ์เรือนคำเที_180306_0038.jpg"
    }
}, {
    "id": "8",
    "image_url": "พร้องพงษ์_180306_0031.jpg",
    "location": "Phrom Phong",
    "latitude": 13.7300476,
    "longitude": 100.5671746,
    "place_name": "Benchasiri Park",
    "category": "park",
    "content": "สวนเบญจสิริ แห่ง เป็นแลนด์มาร์คสำคัญ ในช่วงเทศกาลรับปริญา และงานวิวาห์ เพราะน้องว่าที่บัณฑิต คู่บ่าว - สาว มักที่จะยึดพื้นที่ มุมสวยสำหรับการถ่ายภาพ ถ่ายพรีเว้ดดิ้ง (Pre Wedding) กันมากมาย เพราะไม่ต้องเสียค่าเช่าสถานที่ แถมวิวก็สวย ถ้าเหนี่อยก็เดินไปแฮ้งค์เอ้าท์ต่อได้อีก เพราะเดินไปไม่ไกล ก็มี Terminal 21 แหล่งช้อปปิ้งและร้านอาหาร ถัดไปอีกก็อโศกแหล่งรวมสวนอาหาร Pub & Restaurant ทั้งอาหารไทย และอาหารนานาชาติอีกต่างหาก การตกแต่งสวนที่สวยงามบรรยากาศร่มรื่นเหมาะแก่การพักผ่อนและออกกำลังกายในวันหยุด ช่วงเวลาที่แนะนำคือช่วงเช้าและช่วงเย็น การเดินทาง : บีทีเอสพร้อมพงษ์ทางออกที่ 6",
    "album": {
        "album_1": "พร้องพงษ์_180313_0025.jpg",
        "album_2": "พร้องพงษ์_180313_0037.jpg",
        "album_3": "พร้องพงษ์_180313_0030.jpg"
    }
}, {
    "id": "9",
    "image_url": "maxresdefault.jpg",
    "location": "ekamai",
    "latitude": 13.7191186,
    "longitude": 100.5852413,
    "place_name": "One Piece Mugiwara bangkok",
    "category": "shopping mall",
    "content": "ร้าน One Piece Mugiwara ตั้งอยู่ตรงชั้น 2 ของ Gateway เอกมัย สามารถนั่ง BTS มาลงที่สถานีเอกมัยแล้วออกประตู 4 จากนั้นก็เดินเข้าห้างได้เลย ตัวร้าน Mugiwara นี่หาไม่อยากเลยค่ะ เดินขึ้นบันไดเลื่อนมาแล้วมองเยื่องซ้ายหน่อยๆก็จะเห็นป้ายนี้เลย ร้านตั้งอยู่ติดกับDaiso ของที่ขายภายในร้าน ก็มี  “ พวกโมเดลเรือ , ฟิกเกอร์ไว้สะสม เครื่องเขียนต่างๆ ที่ห้อยมือถือ พวกกุญแจ แฟ้ม แก้วน้ำ จิ๊กซอ โปสเตอร์ค่าหัว(เวอร์ชั่นเก่า) เข็มกลัด ร่ม กระเป๋า หมอน ตุ๊กตา ของน่ารักต่างๆ โปสการ์ด หนังสือการ์ตูนครบทุกเล่ม และ DVD การ์ตูนครบเซ็ต ”  อื่นๆๆที่เกี่ยวกับ One Piece",
    "album": {
        "album_1": "20160912thb_mugiwara_w.gif",
        "album_2": "P5227969.jpg",
        "album_3": "เอกมัย_180306_0031.jpg"
    }
}, {
    "id": "10",
    "image_url": "the-emquartier.jpeg",
    "location": "Phrom Phong",
    "latitude": 13.7320064,
    "longitude": 100.5697214,
    "place_name": "emquartier",
    "category": "shopping mall",
    "content": "The EmQuartier ศูนย์กลางค้าแหล่งช้อปปิ้งที่ใหญ่ที่สุดแห่งหนึ่งในกทม. แม้จะเปิดตัวได้ไม่นานก็ได้รับความนิยมอย่างมาก ภายในห้างนั้นมีการตกแต่งอย่างหรูหราเหมาะกับการช้อปปิ้งและถ่ายรูปบรรยากาศรอบๆ การเดินทาง : บีทีเอสพร้อมพงษ์ทางออกที่ 3 - 4 จะมีทางเชื่อมสำหรับเข้าไปภายในห้าง",
    "album": {
        "album_1": "emquartier-cafe-kyo-roll-en-4.jpg",
        "album_2": "37804301321_e8b05e45f7_c.jpg",
        "album_3": "IMG_8760.jpg"
    }
}, {
    "id": "11",
    "image_url": "เอกมัย_180306_0030.jpg",
    "location": "ekamai",
    "latitude": 13.7187239,
    "longitude": 100.5851719,
    "place_name": "HokkaiDo @Gateway ekamai",
    "category": "restaurant",
    "content": "ร้าน Hokkaido ตั้งอยู่ในห้างเกตเวย์เอกมัยสังเกตง่ายๆจะมีปูตัวใหญ่อยู่หน้าร้านเหมือนกับการที่ประเทศญี่ปุ่นเลย แวะไปทานช่วงบ่ายแก่ๆไม่ทันมองว่าเลยเวลาอาหารเซ็ตช่วงกลางวันแล้วพอเจ้าไปในร้านก็ได้นั่งหน้า counter sushi bar เชฟของร้านนี้เป็นคนญี่ปุ่นแท้ดูมีอายุนิดนึง อาหารนเมนูจะเป็น sushi ส่วนใหญ่มีเป็น omakase ด้วย ราคาเมื่อเทียบกันกับร้านอื่นในห้างค่อนข้างสูงกว่า สั่งข้าวหน้าปลาดิบรวมมาทานทางร้านแยกส่วนของข้าวกับปลาดิบแยกกันมา ตัวข้าวมี ikura โรยมาด้วย ปลาดิบสดรสชาติมาตรฐานร้านญี่ปุ่นทั่วไป ปลาทูน่ารสมันใช้ได้ วาซาบิขึ้นจมูกมากอย่าเผลอใส่เยอะ",
    "album": {
        "album_1": "16819528_1269663176416136_2932008079837880391_o.jpg",
        "album_2": "img_19417_E74rF_600x600.jpg",
        "album_3": "20374688_834218220100727_456152395979841942_n.jpg"
    }
}, {
    "id": "12",
    "image_url": "22769663_1401161693314709_3935464028244514087_o.jpg",
    "location": "Phrom Phong",
    "latitude": 13.7289541,
    "longitude": 100.570782,
    "place_name": "ramen grand umai",
    "category": "restaurant",
    "content": "the grand ramen umai ไม่แปลกใจว่าทำไมลูกค้าแน่นร้านตลอดเวลาเพราะอาหารรสชาติดีเยี่ยม อีกทั้งราคาและปริมาณที่ให้เยอะมหาศาล ทำให้มีลูกค้าประจำมากมาย shio ramen มีโปรโมชั้นราคาเพียง 99 บาท (เฉพาะจันทร์ - ศุกร์ เวลา 11 โมง - บ่ายสองโมง) แต่หมูชาชูที่เปื่อยนุ่มให้มาอย่างไม่อั้น ทั้งหน่อไม้และเส้นบะหมี่แบบหนานุ่มเต็มล้นชาม คนเดียวทานไม่หมด น้ำซุปเกลือแบบใสเค็มกลมกล่อมชื่นใจ เมนูข้าวแกงกระหรี่ก็น่าทานแถมจานยักษ์อีดด้วย ราคามีให้เลือก 3 ราคา ตั้งแต่ 199, 300, 500 บาท ถ้าหากยังไม่รู้สึกอิ่ม หรือ สะใจไม่พอ ผมแนะนำ extra size 500 บาท แน่นอน ให้เส้น และ เครื่องเยอะจนร้องขอชีวิตกันเลย",
    "album": {
        "album_1": "IMG_7963.JPG",
        "album_2": "พร้องพงษ์.jpg",
        "album_3": "22861566_1409069925857219_882038635879546265_o.jpg"
    }
}, {
    "id": "13",
    "image_url": "Sri_Mahamariamman_Temple.jpg",
    "location": "silom",
    "latitude": 13.7242174,
    "longitude": 100.5228994,
    "place_name": "Sri Mahamariamman Temple",
    "category": "temple",
    "content": "วัดศรีมาเรียมมันหรือที่รู้จักในนาม วัดแขก อยู่ติดริมถนนสีลมไปมาสะดวกหาง่าย ในวัดห้ามนำอาหารคาวเข้าไปในบริเวณวัด ด้านหน้าวัดมีพวงมาลัยและของไหว้ขายหรือว่าจะซื้อในวัดก็ได้ มีคนมาไหว้ขอพรพระแม่อุมา มีพราหมณ์คอยทำพิธีให้พอถวายของไหส้เสร็จก็จะมีการแต้มจุดสีแดงที่หน้าผากเพื่อความเป็นสิริมงคล",
    "album": {
        "album_1": "29101750_2016377291968270_1588197847143022592_n.jpg",
        "album_2": "29104137_2016377278634938_6691203140408049664_n.jpg",
        "album_3": "29025501_2016382305301102_1199077671301021696_n.jpg"
    }
}, {
    "id": "14",
    "image_url": "og-image.jpg",
    "location": "4 Sanam Chai",
    "latitude": 13.744147,
    "longitude": 100.494137,
    "place_name": "museum siam",
    "category": "museum",
    "content": "มิวเซียมสยาม เป็นพิพิธภัณฑ์การเรียนรู้แห่งแรก ที่สร้างความแปลกใหม่ในการชมพิพิธภัณฑ์ กระตุ้นให้เกิดการเรียนรู้ มีการจัดแสดงเรื่องราวผ่านเทคโนโลยีสมัยใหม่ ที่ทำให้ดูน่าสนใจและเข้าถึงกับผู้เข้าชม มีเทคนิคในการเล่าเรื่องพร้อมกับตั้งคำถามชวนสงสัยกลับมายังผู้เข้าชม เช่น “ความเป็นไทยหมายถึงอะไร” หรือ “สุวรรณภูมิอยู่ที่ไหนกันแน่” ที่ตั้งของมิวเซียมสยาม อยู่ใกล้กับวัดโพธิ์ (วัดพระเชตุพนวิมลมังคลาราม), วัดพระแก้ว สามารถเดินทางมาได้หลายทางไม่ว่าจะเป็นทางรถ ทางเรือ หรือจะนั่งรถไฟฟ้า MRT มาลงที่หัวลำโพง แล้วต่อ Taxi อีก 15 นาทีก็ถึงแล้ว",
    "album": {
        "album_1": "c772cc3e36d2ffcf177911b8b051568c.jpg",
        "album_2": "Museum-Siam-003.gif",
        "album_3": "museum-of-siam-bangkok.jpg"
    }
}, {
    "id": "15",
    "image_url": "924393-img.risuc1.2p.jpg",
    "location": "ถนนเทอดไท",
    "latitude": 13.7215353,
    "longitude": 100.4777293,
    "place_name": "ตลาดพลู",
    "category": "shopping mall",
    "content": "ย่านตลาดพลู เป็นย่านเก่าแห่งหนึ่งของฝั่งธนฯ ตั้งอยู่บนถนนเทิดไทค่ะ ที่นี่ขึ้นชื่อในเรื่องของอาหารการกินมากๆ จะมีของกินอร่อยเจ้าดั้งเดิมหลายเจ้าที่ต้องไม่พลาดไปลอง รวมถึงมีมุมถ่ายรูปสวยๆ ฮิปๆ ในย่านเมืองเก่า โบสถ์คาทอลิก และสถานีรถไฟอีกด้วย",
    "album": {
        "album_1": "29684066_2026751554264177_6723124425342291388_n.jpg",
        "album_2": "924393-img.risuc2.5p.jpg",
        "album_3": "29573151_2026751534264179_470372880210024542_n.jpg"
    }
}, {
    "id": "16",
    "image_url": "29750041_2026741034265229_6370558556669330407_o.jpg",
    "location": "สถานีสนามกีฬาแห่งชาติ",
    "latitude": 13.7491553,
    "longitude": 100.5283841,
    "place_name": "jim thompson house museum",
    "category": "museum",
    "content": "พิพิธภัณฑ์แบ่งเป็น 2 ชั้น ชั้นบนเป็นห้องอาหาร ห้องนั่งเล่น ห้องอ่านหนังสือ ห้องนอนสำหรับแขก และห้องนอนของจิม ทอมป์สัน ภายในห้องเหล่านี้ จัดแสดงด้วยสิ่งของตกแต่งภายในที่สะท้อนถึงความสนใจในวัฒนธรรม และโบราณวัตถุของเอเชีย ส่วนชั้นล่าง จัดเป็นห้องเบญจรงค์ แสดงเครื่องเบญจรงค์ เครื่องเคลือบดินเผาสีน้ำเงิน ขาว ของจีนสมัยราชวงค์หมิง ศตวรรษที่ 13-17 ศิลปะของเวียดนาม และบ้านรูปภาพจัดแสดงภาพเขียนโดยช่างไทยในปี พ.ศ.2403 โดยแสดงให้เห็นชีวิตและความเป็นอยู่ในสมัยนั้น จุดเด่นอีกประการหนึ่งของที่นี่คือ ภาพสะสมที่เป็นภาพวาดพุทธประวัติ 100 ชิ้นซึ่งเขียนบนผ้า โดยฝีมือของช่างเขียนอยุธยาและช่างรัตนโกสินทร์",
    "album": {
        "album_1": "JimThompsonHouse6.jpg",
        "album_2": "JimThomsonHouse6.jpg",
        "album_3": "jim-thompson-house-patio.jpg"
    }
}, {
    "id": "17",
    "image_url": "Picadaily_180312_0032.jpg",
    "location": "On Nut",
    "latitude": 13.7117069,
    "longitude": 100.6355422,
    "place_name": "Pickadaily Bangkok",
    "category": "shopping mall",
    "content": "Pickadaily Bangkok พิคค่าเดลี่ แบงค์ค๊อก มอลล์ เป็นคอมมิวนี้ตี้มอลล์ แห่งใหม่ในกรุงเทพฯ ตกแต่งสไตล์อิงลิชโอลด์ทาวน์ ทำดูคล้ายๆ ประเทศอังกฤษ มีร้านค้า ร้านอาหารอยู่ในนี้หลายร้าน และมีตลาดนัดในวันหยุด ที่ตั้งของโครงการจะอยู่ที่ริมถนนสุขุมวิท 77 บนพื้นที่กว่า 10,000 ตารางเมตร หน้าโครงการเอ สเปซ ภายในโครงการ Pickadaily Bangkok จะแบ่งพื้นที่เป็น 5 โซนดังนี้ 1. Food Circus – ประกอบด้วย Supermatket (MaxValu) และ Fresh Market พื้นที่รวมกว่า 600 ตรม. ตกแต่งในบรรยากาศ Portobello Market (ตลาดชื่อดังในลอนดอน อังกฤษ ที่ถนน Portobello) 2. Restaurant and Retail circus – ที่ตั้งของร้านค้าและร้านอาหารกว่า 50 ร้าน ในคอนเซ็ปต์ของร้านสไตล์ English Old Town ร้านอาหารชื่อดังก็มี Pizza Hut, True Coffee, ห้องเส้น, เตี๋ยวอัมพวา, ไก่ย่างโคราช 3. English courtyard – เป็นพื้นที่ส่วนเปิดโล่งใจกลางคอมมินิตี้มอลล์ ในบรรยากาศสุดคลาสสิก ที่เหมาะสำหรับการจัดกิจกรรมเก๋ ๆ และอีเว้นท์ต่างๆ เช่นจัดแสดงดนตรี 4. Mechanical parking – อาคารจอดรถอัตโนมัติ แบบ Mechanical parking เป็นอาคารจอดรถในแนวตั้ง อยู่ในหอนาฬิกา มีระบบขยับรถขึ้นลง มีไม่กี่แห่งในประเทศไทยที่ใช้ระบบจอดรถแบบนี้ 5. Weekend Market ตลาดนัดกลางแจ้ง ในวันศุกร์ – อาทิตย์ บรรยากาศวินเทจ ให้อารมณ์เหมือนช้อปอยู่ย่าน Portobello Road",
    "album": {
        "album_1": "Picadaily_180306_0030.jpg",
        "album_2": "Picadaily_180306_0019.jpg",
        "album_3": "Picadaily_180306_0041.jpg"
    }
}, {
    "id": "18",
    "image_url": "o0qp673r7zjzGx1U3ot-o.jpg",
    "location": "MRT silom & BTS Sala Daeng",
    "latitude": 13.7299219,
    "longitude": 100.5413389,
    "place_name": "สวนลุมพินี",
    "category": "park",
    "content": "สวนลุมพินี หรือที่นิยมเรียกสั้น ๆ ว่า สวนลุม เป็นสวนสาธารณะแห่งแรกของประเทศไทย เปิดให้บริการตั้งแต่ปี พ.ศ. 2468 ตั้งอยู่บนถนนพระรามที่ 4 ล้อมรอบด้วยถนนวิทยุ ถนนราชดำริ และซอยสารสิน แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร ก่อสร้างในสมัยรัชกาลที่ 7 ในที่ดินเดิมเนื้อที่ 360 ไร่ ณ ทุ่งศาลาแดง ที่พระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัวพระราชทานสำหรับสร้าง ' สยามรัฐพิพิธภัณฑ์ ' เพื่อจัดแสดงสินค้าไทยเป็นครั้งแรก และจัดให้เป็น ' สวนสาธารณะ ' สำหรับประชาชน พร้อมทั้งพระราชทานนามว่า สวนลุมพินี",
    "album": {
        "album_1": "nyggtzb50ZOmg51tho8-o.jpg",
        "album_2": "1-1-6.jpg",
        "album_3": "dsad.jpg"

    }
}, {
    "id": "19",
    "image_url": "_GN_3991.jpg",
    "location": "thonglor",
    "latitude": 13.7298043,
    "longitude": 100.5810282,
    "place_name": "AINU Hokkaido Izakaya & Pub",
    "category": "restaurant",
    "content": "ลบภาพร้านกินดื่มสไตล์ญี่ปุ่นแบบเราเคยคุ้นตาในร้านแคบๆ มีของกลับแกล้มแค่ปิ้งย่างออกแทบไม่ทัน เพราะสุดสัปดาห์ก๊วนพาไปมันส์ที่ AINU Hokkaido Izakaya & Pub ย่านทองหล่อมา ด้วยตัวร้านกว้างโปร่ง โล่งสบาย ถูกตกแต่งออกกลิ่นอายของชนเผ่าพื้นเมืองแห่งเกาะฮอกไกโดทางเหนือของญี่ปุ่นให้สมกับชื่อ สิ่งที่แตกต่างจากร้านอื่นๆ เพราะมีวงดนตรีสดเล่นเพลงเบาๆ ในช่วงหัวค่ำจนถึงจังหวะสนุกสุดเหวี่ยงยามดึกๆ หรี่ไฟให้อารมณ์ผับแล้วทุกคนต่างลุกขึ้นเต้นกันยับ โดยร้านจะอยู่ในซอยทองหล่อระหว่าง ซอยทองหล่อ 5 และ ซอยทองหล่อ 7",
    "album": {
        "album_1": "csad.jpg",
        "album_2": "29744680_2028214510784548_3424254844296900633_o.jpg",
        "album_3": "29695498_2028214487451217_923510221958936238_n.jpg"
    }
}, {
    "id": "20",
    "image_url": "15995182_1651441374882839_3265117925120777008_o.jpg",
    "location": "Bang Wa",
    "latitude": 13.730597,
    "longitude": 100.450195,
    "place_name": "Bang Wa Melon",
    "category": "park",
    "content": "บางหว้า เมล่อน เป็นสวนเล็กๆ ไม่ไกลจาก BTS บางหว้า จากอดีตเจ้าของร้านอาหารที่ผันตัวเองมาเป็นเกษตรกร โดยเริ่มปลูกตั้งแต่ปี 58 เพียงแค่โรงเรือนเล็กๆ ไม่กี่โรงแต่คนแวะเวียนไปที่นี่ไม่ขาดสาย ครอบครัวของเราเองก็อยากไปที่นี่หลายครั้งโดยส่วนตัวชอบเมลอนสายพันธุ์ญี่ปุ่นมากๆ",
    "album": {
        "album_1": "26055878_1278351518933389_1564576340850442849_n.jpg",
        "album_2": "26166761_1278351572266717_3554473576519341211_n.jpg",
        "album_3": "29598305_2028330047439661_8746679540475618130_n.jpg"
    }
}];
/* harmony default export */ __webpack_exports__["a"] = (trips);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/museum.js");


/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=museum.js.map