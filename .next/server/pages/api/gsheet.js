"use strict";
(() => {
var exports = {};
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 6781:
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ 4015:
/***/ ((module) => {

module.exports = import("google-spreadsheet");;

/***/ }),

/***/ 3228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6781);
/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__]);
google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const gsheet = async (req, res)=>{
    try {
        if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
            throw new Error("Missing required environment variables");
        }
        const serviceAccountAuth = new google_auth_library__WEBPACK_IMPORTED_MODULE_0__.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        });
        const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_1__.GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const newRow = req.body;
        const addedRow = await sheet.addRow(newRow);
        res.status(200).json(addedRow);
    } catch (error) {
        console.error("Error:", error);
        res.status(200).json({
            error: "An error occurred, but the data was saved"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gsheet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3228));
module.exports = __webpack_exports__;

})();