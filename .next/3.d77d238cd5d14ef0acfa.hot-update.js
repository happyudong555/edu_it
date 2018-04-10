webpackHotUpdate(3,{

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_database_trips__ = __webpack_require__("./static/database/trips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__);
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Navbar;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = Navbar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Navbar, 'Navbar', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/navbar.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/navbar.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d77d238cd5d14ef0acfa.hot-update.js.map