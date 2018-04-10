webpackHotUpdate(4,{

/***/ "./pages/detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_database_trips__ = __webpack_require__("./static/database/trips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_google_map_react__ = __webpack_require__("./node_modules/google-map-react/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_google_map_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_google_map_react__);
var _this = this,
    _jsxFileName = '/Users/panjamaponkarnasuta/Desktop/usr/src/app/pages/detail.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();












var _default = function _default(_ref, props) {
    var id = _ref.url.query.id;

    var detail_trips = __WEBPACK_IMPORTED_MODULE_7_lodash__["find"](__WEBPACK_IMPORTED_MODULE_6__static_database_trips__["a" /* default */], { id: id });
    var album = detail_trips.album.album_1.slice(0, 3);
    _this.state = {
        position: {
            lat: detail_trips.latitude,
            lng: detail_trips.longitude
        },
        zoom: 15
    };
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { property: 'fb:app_id', content: '369906716844139', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { property: 'og:type', content: detail_trips.location, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { property: 'og:title', content: detail_trips.place_name, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { property: 'og:image', content: 'static/public/images/' + detail_trips.image_url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('meta', { property: 'og:description', content: detail_trips.content, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_navbar__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { className: 'container-fluid', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'row', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'main_image col-md-12', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + detail_trips.image_url, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        })
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 40
            }
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { className: 'container', style: { marginTop: 20, marginBottom: 30 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'col-md-7 main_content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'h3',
                    { className: 'place_name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        }
                    },
                    detail_trips.place_name
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'clearfix', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { style: { marginRight: 6, color: '#545b62' }, 'class': 'fas fa-map-marker-alt', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'span',
                        { style: { fontSize: 14, textTransform: 'capitalize' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        },
                        detail_trips.location
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'p',
                    { className: 'content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        }
                    },
                    detail_trips.content
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'album_image col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + detail_trips.album.album_1, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'album_image col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + detail_trips.album.album_2, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'div',
                    { className: 'album_image col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'static/public/images/' + detail_trips.album.album_3, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { className: 'map col-md-5', id: 'mapView', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_9_google_map_react___default.a,
                    {
                        bootstrapURLKeys: { key: 'AIzaSyDTJIRTePaIfz2spe2dZIMS5RnXL9zlz1s' },
                        defaultCenter: _this.state.position,
                        defaultZoom: _this.state.zoom, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { lat: detail_trips.latitude, lng: detail_trips.longitude, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('i', { className: 'fas fa-map-marker-alt fa-2x mapviewIcon', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        })
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'style',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            },
            '\n            .clearfix {\n                clear:both;\n            }\n            .main_content {\n                float:left;\n                border-right: 40px solid #fff;\n            }\n            .map {\n                width:100%;\n                height:300px;\n                padding:0;\n                margin-top:20px;\n                float:left;\n            }\n            .mapviewIcon {\n                color:#dc3545;\n            }\n            .place_name {\n                text-transform: capitalize;\n                font-size: 23px;\n                font-family: sukhumvit set, kanit !important;\n                font-weight: bold;\n            }\n            .main_image {\n                background-color:#000;\n                height:640px;\n                overflow:hidden;\n            }\n            .main_image img {\n                width:100%;\n                height:100%;\n                overflow:hidden;\n                object-fit: cover;\n                -webkit-object-fit: cover;\n                -moz-object-fit: cover;\n                -o-object-fit: cover;\n                object-position: center top;\n            }\n            .album_image img {\n                width:100%;\n                height:130px;\n                overflow:hidden;\n                object-fit: cover;\n                -webkit-object-fit: cover;\n                -moz-object-fit: cover;\n                -o-object-fit: cover;\n                object-position: center top;\n            }\n            .album_image {\n                height:100%;\n                background-color:#000;\n                float:left;\n                margin-bottom:50px;\n                border-right:14px solid #fff;\n                overflow: hidden;\n            }\n            .content {\n                font-size: 14px;\n                line-height: 32px;\n                text-transform: capitalize;\n                font-family: sukhumvit set, kanit !important;\n                white-space: pre-wrap;\n            }\n            \n            '
        )
    );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', '/Users/panjamaponkarnasuta/Desktop/usr/src/app/pages/detail.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/detail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.3d4b3b17f5ac6a2c3af5.hot-update.js.map