/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_4__.onError)(({ graphQLErrors , networkError  })=>{\n    if (graphQLErrors) {\n        graphQLErrors.map(({ message , locations , path  })=>{\n            alert(`Graphql error ${message}`);\n        });\n    }\n    if (networkError) {\n        alert(`Graphql Network error ${networkError}`);\n    }\n});\nconst link = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.from)([\n    errorLink,\n    new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.HttpLink({\n        uri: \"http://localhost:4444/graphql\"\n    })\n]);\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache(),\n    link: link\n}) // ! need a way to hide from network\n;\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ken/projects/bruinswipe/pages/_app.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ken/projects/bruinswipe/pages/_app.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ken/projects/bruinswipe/pages/_app.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDbUI7QUFVM0I7QUFDMEI7QUFFakQsTUFBTU8sWUFBWUQsa0VBQU9BLENBQUMsQ0FBQyxFQUFDRSxjQUFhLEVBQUVDLGFBQVksRUFBQyxHQUFLO0lBQzNELElBQUlELGVBQWU7UUFDakJBLGNBQWNFLEdBQUcsQ0FBQyxDQUFDLEVBQUNDLFFBQU8sRUFBRUMsVUFBUyxFQUFFQyxLQUFJLEVBQUMsR0FBSztZQUNoREMsTUFBTSxDQUFDLGNBQWMsRUFBRUgsUUFBUSxDQUFDO1FBQ2xDO0lBQ0YsQ0FBQztJQUNELElBQUlGLGNBQWM7UUFDaEJLLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRUwsYUFBYSxDQUFDO0lBQy9DLENBQUM7QUFDSDtBQUVBLE1BQU1NLE9BQU9WLG9EQUFJQSxDQUFDO0lBQ2hCRTtJQUNBLElBQUlILG9EQUFRQSxDQUFDO1FBQUNZLEtBQUs7SUFBK0I7Q0FDbkQ7QUFFRCxNQUFNQyxTQUFTLElBQUloQix3REFBWUEsQ0FBQztJQUM5QmlCLE9BQU8sSUFBSWhCLHlEQUFhQTtJQUN4QmEsTUFBTUE7QUFFUixHQUFHLG9DQUFvQzs7QUFFeEIsU0FBU0ksSUFBSSxFQUMxQkMsVUFBUyxFQUNUQyxXQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQzNCLEVBQUU7SUFDWCxxQkFDRSw4REFBQ3JCLDREQUFlQTtRQUFDc0IsU0FBU0E7a0JBQ3hCLDRFQUFDbkIsMERBQWNBO1lBQUNjLFFBQVFBO3NCQUV0Qiw0RUFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJ1aW5zd2lwZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG4vLyBpbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMnO1xuLy8gaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgXG4gIEluTWVtb3J5Q2FjaGUsIFxuICBBcG9sbG9Qcm92aWRlciwgXG4gIEh0dHBMaW5rLFxuICBncWwsXG4gIGZyb21cbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQge29uRXJyb3J9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3InXG5cbmNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHtncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3J9KSA9PiB7XG4gIGlmIChncmFwaFFMRXJyb3JzKSB7XG4gICAgZ3JhcGhRTEVycm9ycy5tYXAoKHttZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGh9KSA9PiB7XG4gICAgICBhbGVydChgR3JhcGhxbCBlcnJvciAke21lc3NhZ2V9YCk7XG4gICAgfSlcbiAgfVxuICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgYWxlcnQoYEdyYXBocWwgTmV0d29yayBlcnJvciAke25ldHdvcmtFcnJvcn1gKVxuICB9XG59KVxuXG5jb25zdCBsaW5rID0gZnJvbShbXG4gIGVycm9yTGluayxcbiAgbmV3IEh0dHBMaW5rKHt1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQ0NDQvZ3JhcGhxbCd9KVxuXSlcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICBsaW5rOiBsaW5rXG4gIC8vIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDQ0NC9ncmFwaHFsJ1xufSkgLy8gISBuZWVkIGEgd2F5IHRvIGhpZGUgZnJvbSBuZXR3b3JrXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIHsvKiA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+ICovfVxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICB7LyogPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj4gKi99XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsIkh0dHBMaW5rIiwiZnJvbSIsIm9uRXJyb3IiLCJlcnJvckxpbmsiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibWFwIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJhbGVydCIsImxpbmsiLCJ1cmkiLCJjbGllbnQiLCJjYWNoZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();