"use strict";
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
exports.id = "pages/api/gsheet";
exports.ids = ["pages/api/gsheet"];
exports.modules = {

/***/ "google-auth-library":
/*!**************************************!*\
  !*** external "google-auth-library" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("google-spreadsheet");;

/***/ }),

/***/ "(api)/./src/pages/api/gsheet.ts":
/*!*********************************!*\
  !*** ./src/pages/api/gsheet.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-spreadsheet */ \"google-spreadsheet\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__]);\ngoogle_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst gsheet = async (req, res)=>{\n    try {\n        if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {\n            throw new Error(\"Missing required environment variables\");\n        }\n        const serviceAccountAuth = new google_auth_library__WEBPACK_IMPORTED_MODULE_0__.JWT({\n            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,\n            key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\\\n/g, \"\\n\"),\n            scopes: [\n                \"https://www.googleapis.com/auth/spreadsheets\"\n            ]\n        });\n        const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__.GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);\n        await doc.loadInfo();\n        const sheet = doc.sheetsByIndex[0];\n        const newRow = req.body;\n        const addedRow = await sheet.addRow(newRow);\n        res.status(200).json(addedRow);\n    } catch (error) {\n        console.error(\"Error:\", error);\n        res.status(200).json({\n            error: \"An error occurred, but the data was saved\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gsheet);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dzaGVldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBQ2E7QUFHdkQsTUFBTUUsU0FBUyxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDbEUsSUFBSTtRQUNGLElBQ0UsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlLElBQzVCLENBQUNGLFFBQVFDLEdBQUcsQ0FBQ0UsNEJBQTRCLElBQ3pDLENBQUNILFFBQVFDLEdBQUcsQ0FBQ0csa0JBQWtCLEVBQy9CO1lBQ0EsTUFBTSxJQUFJQyxNQUFNLDBDQUEwQztRQUM1RCxDQUFDO1FBRUQsTUFBTUMscUJBQXFCLElBQUlYLG9EQUFHQSxDQUFDO1lBQ2pDWSxPQUFPUCxRQUFRQyxHQUFHLENBQUNFLDRCQUE0QjtZQUMvQ0ssS0FBS1IsUUFBUUMsR0FBRyxDQUFDRyxrQkFBa0IsQ0FBQ0ssT0FBTyxDQUFDLFFBQVE7WUFDcERDLFFBQVE7Z0JBQUM7YUFBK0M7UUFDMUQ7UUFFQSxNQUFNQyxNQUFNLElBQUlmLGlFQUFpQkEsQ0FDL0JJLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxFQUMzQkk7UUFFRixNQUFNSyxJQUFJQyxRQUFRO1FBRWxCLE1BQU1DLFFBQVFGLElBQUlHLGFBQWEsQ0FBQyxFQUFFO1FBRWxDLE1BQU1DLFNBQVNqQixJQUFJa0IsSUFBSTtRQUV2QixNQUFNQyxXQUFXLE1BQU1KLE1BQU1LLE1BQU0sQ0FBQ0g7UUFFcENoQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7SUFDdkIsRUFBRSxPQUFPSSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtRQUN4QnRCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNEM7SUFDNUU7QUFDRjtBQUVBLGlFQUFleEIsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lhdXRvLy4vc3JjL3BhZ2VzL2FwaS9nc2hlZXQudHM/MzMwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKV1QgfSBmcm9tIFwiZ29vZ2xlLWF1dGgtbGlicmFyeVwiO1xuaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQgfSBmcm9tIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuY29uc3QgZ3NoZWV0ID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKFxuICAgICAgIXByb2Nlc3MuZW52LkdPT0dMRV9TSEVFVF9JRCB8fFxuICAgICAgIXByb2Nlc3MuZW52LkdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfRU1BSUwgfHxcbiAgICAgICFwcm9jZXNzLmVudi5HT09HTEVfUFJJVkFURV9LRVlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZpY2VBY2NvdW50QXV0aCA9IG5ldyBKV1Qoe1xuICAgICAgZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9TRVJWSUNFX0FDQ09VTlRfRU1BSUwsXG4gICAgICBrZXk6IHByb2Nlc3MuZW52LkdPT0dMRV9QUklWQVRFX0tFWS5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcblwiKSwgLy8gRml4IGtleSBmb3JtYXRcbiAgICAgIHNjb3BlczogW1wiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHNcIl0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQoXG4gICAgICBwcm9jZXNzLmVudi5HT09HTEVfU0hFRVRfSUQsXG4gICAgICBzZXJ2aWNlQWNjb3VudEF1dGhcbiAgICApO1xuICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFswXTtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgYWRkZWRSb3cgPSBhd2FpdCBzaGVldC5hZGRSb3cobmV3Um93KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFkZGVkUm93KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVycm9yOiBcIkFuIGVycm9yIG9jY3VycmVkLCBidXQgdGhlIGRhdGEgd2FzIHNhdmVkXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdzaGVldDtcbiJdLCJuYW1lcyI6WyJKV1QiLCJHb29nbGVTcHJlYWRzaGVldCIsImdzaGVldCIsInJlcSIsInJlcyIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfU0hFRVRfSUQiLCJHT09HTEVfU0VSVklDRV9BQ0NPVU5UX0VNQUlMIiwiR09PR0xFX1BSSVZBVEVfS0VZIiwiRXJyb3IiLCJzZXJ2aWNlQWNjb3VudEF1dGgiLCJlbWFpbCIsImtleSIsInJlcGxhY2UiLCJzY29wZXMiLCJkb2MiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsIm5ld1JvdyIsImJvZHkiLCJhZGRlZFJvdyIsImFkZFJvdyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/gsheet.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/gsheet.ts"));
module.exports = __webpack_exports__;

})();