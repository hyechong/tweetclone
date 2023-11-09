"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/useMutation */ \"./lib/useMutation.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ \"./lib/utils.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TweetDetail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var goBackHandler = function() {\n        router.push(\"/\");\n    };\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref.data, mutate = ref.mutate;\n    var ref1 = _slicedToArray((0,_lib_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweet/\".concat(router.query.id, \"/like\")), 1), toggleLike = ref1[0];\n    var onLikeClick = function() {\n        if (!data) return;\n        mutate(_objectSpread({}, data, {\n            isLiked: !data.isLiked\n        }), false);\n        toggleLike({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-auto w-full items-center justify-center p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-pink-100 p-4 w-full max-w-sm rounded-3xl border-2 border-b-4 border-r-4 border-black\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: goBackHandler,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        fill: \"none\",\n                        stroke: \"currentColor\",\n                        \"stroke-width\": \"1.5\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        \"aria-hidden\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            d: \"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"h-7 w-7\",\n                    stroke: \"currentColor\",\n                    version: \"1.1\",\n                    viewBox: \"0 0 700 700\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    onClick: goBackHandler,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"m350 18.668c-69.309 0-135.78 27.531-184.79 76.543-49.012 49.008-76.543 115.48-76.543 184.79s27.531 135.78 76.543 184.79c49.008 49.012 115.48 76.543 184.79 76.543s135.78-27.531 184.79-76.543c49.012-49.008 76.543-115.48 76.543-184.79 0-45.875-12.074-90.938-35.012-130.67-22.938-39.727-55.926-72.715-95.652-95.652-39.73-22.938-84.793-35.012-130.67-35.012zm87.156 415.46v-0.003906c3.7891 3.2812 6.1016 7.9531 6.4141 12.957 0.3125 5.0039-1.4023 9.9258-4.7578 13.652-3.3555 3.7266-8.0703 5.9453-13.078 6.1602-5.0117 0.21094-9.8945-1.6016-13.555-5.0273l-186.67-168c-3.9297-3.543-6.1719-8.582-6.1719-13.871s2.2422-10.328 6.1719-13.871l186.67-168c3.6602-3.4258 8.543-5.2383 13.555-5.0273 5.0078 0.21484 9.7227 2.4336 13.078 6.1602 3.3555 3.7266 5.0703 8.6484 4.7578 13.652-0.3125 5.0039-2.625 9.6758-6.4141 12.957l-171.16 154.13z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold\",\n                    children: data === null || data === void 0 ? void 0 : data.tweet.user.name\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-2 border-black rounded-lg w-full resize-none min-h-[200px] p-3\",\n                    children: data === null || data === void 0 ? void 0 : data.tweet.message\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onLikeClick,\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cls)(\"w-full flex items-center justify-center h-9 boder-1 border-[#FC5200] text-white  px-4 border border-transparent rounded-md shadow-sm font-medium\", (data === null || data === void 0 ? void 0 : data.isLiked) ? \"bg-[#fdbc9b]\" : \"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"w-7 h-7\",\n                        fill: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"red\" : \"none\",\n                        stroke: \"red\",\n                        viewBox: \"0 0 24 24\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            strokeWidth: \"2\",\n                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hyechong/Documents/dev/tweetclone/pages/tweet/[id].tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(TweetDetail, \"jxQMzpluc2SxMBy5BJXf/19LDWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _lib_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = TweetDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetDetail);\nvar _c;\n$RefreshReg$(_c, \"TweetDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUViLCtDQUFHLENBQ1osa0pBQWtKLEVBQ2xKTyxDQUFBQSxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRUksT0FBTyxJQUFHLGNBQWMsR0FBRyxFQUFFLENBQ3BDOzhCQUNELDRFQUFDSyxLQUFHO3dCQUNGSCxTQUFTLEVBQUMsU0FBUzt3QkFDbkJJLElBQUksRUFBRVYsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVJLE9BQU8sSUFBRyxLQUFLLEdBQUcsTUFBTTt3QkFDcENPLE1BQU0sRUFBQyxLQUFLO3dCQUNaRSxPQUFPLEVBQUMsV0FBVzt3QkFDbkJDLEtBQUssRUFBQyw0QkFBNEI7a0NBQ2xDLDRFQUFDRSxNQUFJOzRCQUNIUyxhQUFhLEVBQUMsT0FBTzs0QkFDckJDLGNBQWMsRUFBQyxPQUFPOzRCQUN0QkMsV0FBVyxFQUFDLEdBQUc7NEJBQ2ZSLENBQUMsRUFBQyw2SEFBNkg7Ozs7O2lDQUFROzs7Ozs2QkFDckk7Ozs7O3lCQUNDOzs7Ozs7aUJBQ0w7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBcEVLekIsV0FBVzs7UUFDQUgsa0RBQVM7UUFJQ0QsMkNBQU07UUFJVkUsd0RBQVc7OztBQVQ1QkUsS0FBQUEsV0FBVztBQXNFakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IFR3ZWV0LCBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZU11dGF0aW9uIGZyb20gJy4uLy4uL2xpYi91c2VNdXRhdGlvbic7XG5pbXBvcnQgeyBjbHMgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnO1xuXG5pbnRlcmZhY2UgVHdlZXRXaXRoVXNlciBleHRlbmRzIFR3ZWV0IHtcbiAgdXNlcjogVXNlcjtcbn1cblxuaW50ZXJmYWNlIFR3ZWV0RGV0YWlsUmVzcG9uc2Uge1xuICBzdGF0dXM6IHN0cmluZztcbiAgdHdlZXQ6IFR3ZWV0V2l0aFVzZXI7XG4gIGlzTGlrZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IFR3ZWV0RGV0YWlsOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGdvQmFja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy8nKTtcbiAgfTtcbiAgY29uc3QgeyBkYXRhLCBtdXRhdGUgfSA9IHVzZVNXUjxUd2VldERldGFpbFJlc3BvbnNlPihcbiAgICByb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS90d2VldC8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxuICApO1xuXG4gIGNvbnN0IFt0b2dnbGVMaWtlXSA9IHVzZU11dGF0aW9uKGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfS9saWtlYCk7XG4gIGNvbnN0IG9uTGlrZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIG11dGF0ZSh7IC4uLmRhdGEsIGlzTGlrZWQ6ICFkYXRhLmlzTGlrZWQgfSwgZmFsc2UpO1xuICAgIHRvZ2dsZUxpa2Uoe30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1hdXRvIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xMic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctcGluay0xMDAgcC00IHctZnVsbCBtYXgtdy1zbSByb3VuZGVkLTN4bCBib3JkZXItMiBib3JkZXItYi00IGJvcmRlci1yLTQgYm9yZGVyLWJsYWNrJz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb0JhY2tIYW5kbGVyfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9JzEuNSdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPSd0cnVlJz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgICAgICAgZD0nTTkgMTVMMyA5bTAgMGw2LTZNMyA5aDEyYTYgNiAwIDAxMCAxMmgtMyc+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHN2Z1xuICAgICAgICAgIGNsYXNzTmFtZT0naC03IHctNydcbiAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDcwMCA3MDAnXG4gICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgIG9uQ2xpY2s9e2dvQmFja0hhbmRsZXJ9PlxuICAgICAgICAgIDxwYXRoIGQ9J20zNTAgMTguNjY4Yy02OS4zMDkgMC0xMzUuNzggMjcuNTMxLTE4NC43OSA3Ni41NDMtNDkuMDEyIDQ5LjAwOC03Ni41NDMgMTE1LjQ4LTc2LjU0MyAxODQuNzlzMjcuNTMxIDEzNS43OCA3Ni41NDMgMTg0Ljc5YzQ5LjAwOCA0OS4wMTIgMTE1LjQ4IDc2LjU0MyAxODQuNzkgNzYuNTQzczEzNS43OC0yNy41MzEgMTg0Ljc5LTc2LjU0M2M0OS4wMTItNDkuMDA4IDc2LjU0My0xMTUuNDggNzYuNTQzLTE4NC43OSAwLTQ1Ljg3NS0xMi4wNzQtOTAuOTM4LTM1LjAxMi0xMzAuNjctMjIuOTM4LTM5LjcyNy01NS45MjYtNzIuNzE1LTk1LjY1Mi05NS42NTItMzkuNzMtMjIuOTM4LTg0Ljc5My0zNS4wMTItMTMwLjY3LTM1LjAxMnptODcuMTU2IDQxNS40NnYtMC4wMDM5MDZjMy43ODkxIDMuMjgxMiA2LjEwMTYgNy45NTMxIDYuNDE0MSAxMi45NTcgMC4zMTI1IDUuMDAzOS0xLjQwMjMgOS45MjU4LTQuNzU3OCAxMy42NTItMy4zNTU1IDMuNzI2Ni04LjA3MDMgNS45NDUzLTEzLjA3OCA2LjE2MDItNS4wMTE3IDAuMjEwOTQtOS44OTQ1LTEuNjAxNi0xMy41NTUtNS4wMjczbC0xODYuNjctMTY4Yy0zLjkyOTctMy41NDMtNi4xNzE5LTguNTgyLTYuMTcxOS0xMy44NzFzMi4yNDIyLTEwLjMyOCA2LjE3MTktMTMuODcxbDE4Ni42Ny0xNjhjMy42NjAyLTMuNDI1OCA4LjU0My01LjIzODMgMTMuNTU1LTUuMDI3MyA1LjAwNzggMC4yMTQ4NCA5LjcyMjcgMi40MzM2IDEzLjA3OCA2LjE2MDIgMy4zNTU1IDMuNzI2NiA1LjA3MDMgOC42NDg0IDQuNzU3OCAxMy42NTItMC4zMTI1IDUuMDAzOS0yLjYyNSA5LjY3NTgtNi40MTQxIDEyLjk1N2wtMTcxLjE2IDE1NC4xM3onIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1ib2xkJz57ZGF0YT8udHdlZXQudXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbGcgdy1mdWxsIHJlc2l6ZS1ub25lIG1pbi1oLVsyMDBweF0gcC0zJz5cbiAgICAgICAgICB7ZGF0YT8udHdlZXQubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkxpa2VDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NscyhcbiAgICAgICAgICAgICd3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC05IGJvZGVyLTEgYm9yZGVyLVsjRkM1MjAwXSB0ZXh0LXdoaXRlICBweC00IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9udC1tZWRpdW0nLFxuICAgICAgICAgICAgZGF0YT8uaXNMaWtlZCA/ICdiZy1bI2ZkYmM5Yl0nIDogJydcbiAgICAgICAgICApfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctNyBoLTcnXG4gICAgICAgICAgICBmaWxsPXtkYXRhPy5pc0xpa2VkID8gJ3JlZCcgOiAnbm9uZSd9XG4gICAgICAgICAgICBzdHJva2U9J3JlZCdcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgZD0nTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6Jz48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUd2VldERldGFpbDtcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJ1c2VNdXRhdGlvbiIsImNscyIsIlR3ZWV0RGV0YWlsIiwicm91dGVyIiwiZ29CYWNrSGFuZGxlciIsInB1c2giLCJxdWVyeSIsImlkIiwiZGF0YSIsIm11dGF0ZSIsInRvZ2dsZUxpa2UiLCJvbkxpa2VDbGljayIsImlzTGlrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZS13aWR0aCIsInZpZXdCb3giLCJ4bWxucyIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsInZlcnNpb24iLCJ0d2VldCIsInVzZXIiLCJuYW1lIiwibWVzc2FnZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});