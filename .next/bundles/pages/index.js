module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./components/category_slide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/category_slide.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Category_slide = function (_React$Component) {
    _inherits(Category_slide, _React$Component);

    function Category_slide() {
        _classCallCheck(this, Category_slide);

        return _possibleConstructorReturn(this, (Category_slide.__proto__ || Object.getPrototypeOf(Category_slide)).apply(this, arguments));
    }

    _createClass(Category_slide, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { id: 'ThumbnailCarousel', className: 'carousel slide col-xs-12', 'data-ride': 'carousel', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'carousel-inner wrapper', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'carousel-item active', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 18
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 19
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/park', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 20
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 21
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/park_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 22
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 23
                                                }
                                            })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/shopping', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 28
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 29
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/shopping_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 30
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 31
                                                }
                                            })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/restaurant', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 36
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 37
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/Restaurant_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 38
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 39
                                                }
                                            })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 43
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/temple', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 44
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 45
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/temple_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 46
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 47
                                                }
                                            })
                                        )
                                    )
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'carousel-item', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 53
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'row', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 54
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 55
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/museum', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 56
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 57
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/museum_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 58
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 59
                                                }
                                            })
                                        )
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'div',
                                    { className: 'col-md-3 type', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 63
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                        { href: '/cafe', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 64
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                            'a',
                                            { className: 'thumbnail categoryBlog', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 65
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/asset/icon/cafe_icon.png', alt: 'Image', className: 'img-fluid img-thumbnail', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 66
                                                }
                                            }),
                                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                                                __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 67
                                                }
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { className: 'carousel-control-prev', href: '#ThumbnailCarousel', role: 'button', 'data-slide': 'prev', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'carousel-control-prev-icon', 'aria-hidden': 'true', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'span',
                            { className: 'sr-only', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 76
                                }
                            },
                            'Previous'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'a',
                        { className: 'carousel-control-next', href: '#ThumbnailCarousel', role: 'button', 'data-slide': 'next', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('span', { className: 'carousel-control-next-icon', 'aria-hidden': 'true', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'span',
                            { className: 'sr-only', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 80
                                }
                            },
                            'Next'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                        }
                    },
                    '\n                        #ThumbnailCarousel img {\n                            width: 120px;\n                            height: 100%;\n                            background-color: transparent;\n                            border: 0;\n                        }\n                        \n                        .col-md-3 .img-thumbnail {\n                            height:100%;\n                        }\n                        .categoryBlog p {\n                            color: #495057;\n                            text-transform: uppercase;\n                            font-size: 18px;\n                            padding-top: 10px;\n                            font-weight: bold;\n                        }\n                        .type:hover {\n                            text-decoration: none !important;\n                            ttransition:All 1s ease;\n                            -webkit-transition:All 1s ease;\n                            -moz-transition:All 1s ease;\n                            -o-transition:All 1s ease;\n                            transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -webkit-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -moz-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -o-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -ms-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -webkit-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -moz-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -o-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -ms-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                        }\n                        .wrapper {\n                            width:50%;\n                            margin:22px auto;\n                            display:block;\n                        }\n                    '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Category_slide;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = Category_slide;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Category_slide, 'Category_slide', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/category_slide.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/category_slide.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/grid_tumbnail.js":
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
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/grid_tumbnail.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Grid_thumbnail = function (_React$Component) {
    _inherits(Grid_thumbnail, _React$Component);

    function Grid_thumbnail() {
        _classCallCheck(this, Grid_thumbnail);

        return _possibleConstructorReturn(this, (Grid_thumbnail.__proto__ || Object.getPrototypeOf(Grid_thumbnail)).apply(this, arguments));
    }

    _createClass(Grid_thumbnail, [{
        key: 'render',
        value: function render() {
            var top_rated = __WEBPACK_IMPORTED_MODULE_4__static_database_trips__["a" /* default */].slice(0, 6);
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'h4',
                    { className: 'page-header top_location_heading', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    'top place in bangkok'
                ),
                top_rated.map(function (trips, i) {
                    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                        { href: '/detail?id=' + trips.id, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'a',
                            { key: i, className: 'grid col-md-4', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'feed', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + trips.image_url, className: 'img-responsive', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                'div',
                                { className: 'discription', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'h4',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 28
                                        }
                                    },
                                    trips.place_name
                                ),
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { style: { marginRight: 6, color: '#545b62' }, 'class': 'fas fa-map-marker-alt', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    }),
                                    ' ',
                                    trips.location
                                )
                            )
                        )
                    );
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    '\n                        .grid {\n                            height:100%;\n                            background-color:transparent !important;\n                            float:left;\n                            cursor: pointer;\n                            padding:0;\n                            border-right:16px solid #fff;\n                            margin-bottom:20px;\n                            color: #6c757d;\n                        }\n                        .grid:hover {\n                            color: #6c757d !important;\n                            text-decoration: none !important;\n                            ttransition:All 1s ease;\n                            -webkit-transition:All 1s ease;\n                            -moz-transition:All 1s ease;\n                            -o-transition:All 1s ease;\n                            transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            -ms-transform: rotate(4deg) scale(1) skew(1deg) translate(10px);\n                            transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -webkit-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -moz-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -o-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            -ms-transform: rotate(0deg) scale(0.67) skew(1deg) translate(0px);\n                            transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -webkit-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -moz-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -o-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                            -ms-transform: rotate(0deg) scale(1.043) skew(1deg) translate(0px);\n                        }\n\n                        h1, h2, h3, h4, h5, h6, p, span {\n                            font-family: \'Sriracha\', cursive, sukhumvit set !important;\n                        }\n  \n                        .top_location_heading{\n                            text-transform: capitalize;\n                            padding-top: 15px;\n                            padding-bottom: 15px;\n                            font-weight: bold;\n                            color: #4a4a4a;\n                            font-family: inherit !important;\n                            font-size: 23px;\n                        } \n\n                        .feed {\n                            width:100%;\n                            height:260px;\n                            overflow:hidden;\n                        }\n\n                        img {\n                            max-width:100%;\n                            height:100%;\n                        }\n\n                        .feed img {\n                            width:100%;\n                            height:260px;\n                            overflow:hidden;\n                            top: 0;\n                            right: 0;\n                            bottom: 0;\n                            left: 0;\n                            position:absolute;\n                            object-fit: cover;\n                            object-position: center top;\n                            border-radius:3px;\n                        }\n                        .feed img:hover {\n                            border:5px solid #0a192e;\n                            cursor: pointer;\n                        }\n\n                        .discription {\n                            padding-top: 16px;\n                            padding-bottom: 10px;\n                        }\n\n                        .discription h4{\n                            font-size: 18px;\n                            font-family: sukhumvit set, kanit !important;\n                            text-transform: capitalize;\n                            color:#4a4a4a;\n                            font-weight: bold;\n                            overflow: hidden;\n                            text-overflow: ellipsis;\n                            white-space: nowrap;\n                        }\n                        .discription p {\n                            font-family: sukhumvit set, kanit !important;\n                            text-transform: capitalize;\n                            font-size: 13.4px;\n                            line-height: 26px;\n                            font-weight: lighter;\n                        }\n\n                    '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var query = _ref.query;

            return {
                trips: __WEBPACK_IMPORTED_MODULE_4__static_database_trips__["a" /* default */]
            };
        }
    }]);

    return Grid_thumbnail;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = Grid_thumbnail;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Grid_thumbnail, 'Grid_thumbnail', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/grid_tumbnail.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/components/grid_tumbnail.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
                            lineNumber: 15
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit|Sriracha', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('link', { href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'container-fluid col-md-12 custom_navbar', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                            'div',
                            { className: 'container', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_0_next_link___default.a,
                                { href: '/', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                                    'a',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 23
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { className: 'logo', alt: 'Brand', src: 'static/asset/logo/logo2.png', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 23
                                        }
                                    })
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('a', { href: 'https://www.facebook.com/eduittravel/', target: '_blank', 'class': 'fab fa-facebook social_Icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
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
                            lineNumber: 28
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

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__("./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__("./node_modules/prop-types-exact/build/index.js");

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);

  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_category_slide__ = __webpack_require__("./components/category_slide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_grid_tumbnail__ = __webpack_require__("./components/grid_tumbnail.js");
var _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/usr/src/app/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var index = function (_React$Component) {
    _inherits(index, _React$Component);

    function index() {
        _classCallCheck(this, index);

        return _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).apply(this, arguments));
    }

    _createClass(index, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_0_next_head___default.a,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'title',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        'Tainook || \u0E1C\u0E08\u0E0D\u0E20\u0E31\u0E22\u0E44\u0E1B\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32'
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'static/css/bootstrap/dist/css/bootstrap.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/js/jquery/dist/jquery.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 15
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 16
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { type: 'text/javascript', src: 'static/css/bootstrap/js/dist/bootstrap.min.js', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit|Sriracha', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css', rel: 'stylesheet', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navbar__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'div',
                    { className: 'clearfix', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'div',
                        { className: 'container-fluid', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                                'div',
                                { className: 'col-md-12 main_category_slide', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_category_slide__["a" /* default */], {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 28
                                    }
                                })
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                            'div',
                            { className: 'clearfix container', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_grid_tumbnail__["a" /* default */], {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 32
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'style',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    },
                    '\n                    .clearfix {\n                        clear:both;\n                    }\n                    .main_category_slide {\n                        width:100%;\n                        height:265px;\n                        background-size: cover;\n                        background-repeat: no-repeat;\n                        background-position: center top;\n                        background-image:url(../static/asset/background/travel.jpg);\n                    }\n                      \n                '
                )
            );
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(index, 'index', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/database/trips.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

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
var _default = trips;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(trips, "trips", "/Users/panjamaponkarnasuta/Desktop/usr/src/app/static/database/trips.js");
    reactHotLoader.register(_default, "default", "/Users/panjamaponkarnasuta/Desktop/usr/src/app/static/database/trips.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map