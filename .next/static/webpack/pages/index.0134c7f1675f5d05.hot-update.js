"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet\"), data = ref1.data, error = ref1.error;\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-auto w-full items-center justify-center p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-extrabold flex justify-center items-center\",\n                    children: \"Tweets\"\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: data === null || data === void 0 ? void 0 : (ref = data.tweets) === null || ref === void 0 ? void 0 : ref.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border-b border-neutral-400\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/tweet/\".concat(tweet.id),\n                                legacyBehavior: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"flex flex-col px-4 pt-5 cursor-pointer justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between space-x-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"pt-2 flex flex-col\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"text-sm font-bold text-gray-800 \",\n                                                        children: [\n                                                            tweet.user.name,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-xs text-neutral-500 font-normal ml-3\",\n                                                                children: tweet.createdAt.toString().substring(0, 10)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                                lineNumber: 46,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-medium mt-1 text-gray-900\",\n                                                        children: tweet.message\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex space-x-0.5 items-center text-sm text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        className: \"w-4 h-4\",\n                                                        fill: \"none\",\n                                                        stroke: \"currentColor\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            strokeLinecap: \"round\",\n                                                            strokeLinejoin: \"round\",\n                                                            strokeWidth: \"2\",\n                                                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 25\n                                                        }, _this1)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: tweet._count.likes\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/tweet/upload\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"fixed hover:bg-[#FC5200] border-0 aspect-square border-transparent transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-[#FC5200] rounded-full w-14 flex items-center justify-center text-white\",\n                        children: \"\\uC0C8\\uB85C\\uC6B4 \\uAC8C\\uC2DC\\uAE00 \\uC791\\uC131\\uD558\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n}, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSTtrRUFBRVQsS0FBSyxDQUFDd0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs4REFBUTs7Ozs7O3NEQUM3Qjs7Ozs7OzhDQUNGOzs7OzswQ0FDSjs7Ozs7c0NBQ0M7Ozs7O2tDQUNKO3FCQUNOLENBQUM7Ozs7O3lCQUNDOzhCQUNMLDhEQUFDdEMsa0RBQUk7b0JBQUNlLElBQUksRUFBQyxlQUFlO29CQUFDRSxjQUFjOzhCQUN2Qyw0RUFBQ0MsR0FBQzt3QkFBQ1YsU0FBUyxFQUFDLDRNQUE2TTtrQ0FBQyxnRUFFM047Ozs7OzZCQUFJOzs7Ozt5QkFDQzs7Ozs7O2lCQUNIOzs7OzthQUNGLENBQ047Q0FDSDs7UUFoRWdCWixrREFBUztRQUNBRywyQ0FBTTs7SUErRDlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgVHdlZXQsIFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmludGVyZmFjZSBUd2VldFdpdGhDb3VudCBleHRlbmRzIFR3ZWV0IHtcbiAgdXNlcjogVXNlcjtcbiAgX2NvdW50OiB7XG4gICAgbGlrZXM6IG51bWJlcjtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFR3ZWV0c1Jlc3BvbnNlIHtcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIHR3ZWV0czogVHdlZXRXaXRoQ291bnRbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFR3ZWV0c1Jlc3BvbnNlPignL2FwaS90d2VldCcpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvY3JlYXRlLWFjY291bnQnKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIGVycm9yXSk7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1hdXRvIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xMic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcGluay0xMDAgcC00IHctZnVsbCBtYXgtdy1zbSByb3VuZGVkLTN4bCBib3JkZXItMiBib3JkZXItYi00IGJvcmRlci1yLTQgYm9yZGVyLWJsYWNrJz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LWV4dHJhYm9sZCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgVHdlZXRzXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZGF0YT8udHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdib3JkZXItYiBib3JkZXItbmV1dHJhbC00MDAnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXQuaWR9YH0gbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHB4LTQgcHQtNSBjdXJzb3ItcG9pbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtNSc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC0yIGZsZXggZmxleC1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS04MDAgJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0d2VldC51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteHMgdGV4dC1uZXV0cmFsLTUwMCBmb250LW5vcm1hbCBtbC0zJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3R3ZWV0LmNyZWF0ZWRBdC50b1N0cmluZygpLnN1YnN0cmluZygwLCAxMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIG10LTEgdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHdlZXQubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMC41IGl0ZW1zLWNlbnRlciB0ZXh0LXNtICB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctNCBoLTQnXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9J000LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAweic+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0d2VldC5fY291bnQubGlrZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPExpbmsgaHJlZj0nL3R3ZWV0L3VwbG9hZCcgbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmaXhlZCBob3ZlcjpiZy1bI0ZDNTIwMF0gYm9yZGVyLTAgYXNwZWN0LXNxdWFyZSBib3JkZXItdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXIgIGJvdHRvbS0yNCByaWdodC01IHNoYWRvdy14bCBiZy1bI0ZDNTIwMF0gcm91bmRlZC1mdWxsIHctMTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICDsg4jroZzsmrQg6rKM7Iuc6riAIOyekeyEse2VmOq4sFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwiTGluayIsImRhdGEiLCJyb3V0ZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwibGkiLCJocmVmIiwiaWQiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJoNCIsInVzZXIiLCJuYW1lIiwic3BhbiIsImNyZWF0ZWRBdCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwibWVzc2FnZSIsInN2ZyIsImZpbGwiLCJzdHJva2UiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiX2NvdW50IiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});