exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 7694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _quillforms_renderer_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2532);
/* harmony import */ var _quillforms_renderer_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quillforms_renderer_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quillforms_renderer_core_build_style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2307);
/* harmony import */ var _quillforms_renderer_core_build_style_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quillforms_renderer_core_build_style_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _quillforms_react_renderer_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4120);
/* harmony import */ var _quillforms_react_renderer_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_quillforms_react_renderer_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





(0,_quillforms_react_renderer_utils__WEBPACK_IMPORTED_MODULE_3__.registerCoreBlocks)();
const CustomForm = ()=>{
    const submitFormHandler = (data)=>{
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("http://localhost:3000/api/gsheet", data).then((res)=>{
            console.log("\uD83D\uDE80 ---------------------------------------------\uD83D\uDE80");
            console.log("\uD83D\uDE80 ~ file: index.tsx:10 ~ submitFormHandler ~ res", res);
            console.log("\uD83D\uDE80 ---------------------------------------------\uD83D\uDE80");
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_quillforms_renderer_core__WEBPACK_IMPORTED_MODULE_1__.Form, {
            formId: 1,
            applyLogic: true,
            formObj: {
                blocks: [
                    {
                        name: "welcome-screen",
                        id: "welcome",
                        attributes: {
                            label: "Let's start gathering some details...",
                            description: "... about your preferences in a car!"
                        }
                    },
                    {
                        name: "short-text",
                        id: "name",
                        attributes: {
                            required: true,
                            label: "Let's start with your name"
                        }
                    },
                    {
                        name: "date",
                        id: "date",
                        attributes: {
                            required: true,
                            label: "Great {{field:name}}, by when would you like to have the car?"
                        }
                    },
                    {
                        name: "email",
                        id: "email",
                        attributes: {
                            required: true,
                            label: "Thanks {{field:name}}, what is the best email to reach you at?"
                        }
                    },
                    {
                        name: "dropdown",
                        id: "car-type",
                        attributes: {
                            required: true,
                            label: "What type of car would you like to have?",
                            choices: [
                                {
                                    label: "Sedan",
                                    value: "sedan"
                                },
                                {
                                    label: "SUV",
                                    value: "suv"
                                },
                                {
                                    label: "Hatchback",
                                    value: "hatchback"
                                },
                                {
                                    label: "Off roader",
                                    value: "off-roader"
                                },
                                {
                                    label: "Exotic",
                                    value: "exotic"
                                }
                            ]
                        }
                    },
                    {
                        name: "multiple-choice",
                        id: "preferences",
                        attributes: {
                            required: true,
                            multiple: true,
                            verticalAlign: false,
                            label: "What matters to you most in the car?",
                            choices: [
                                {
                                    label: "Looks",
                                    value: "looks"
                                },
                                {
                                    label: "Comfort",
                                    value: "comfort"
                                },
                                {
                                    label: "Mileage",
                                    value: "mileage"
                                },
                                {
                                    label: "Safety",
                                    value: "safety"
                                },
                                {
                                    label: "Features",
                                    value: "features"
                                },
                                {
                                    label: "Environmentally friendly",
                                    value: "environmentally-friendly"
                                }
                            ]
                        }
                    },
                    {
                        name: "statement",
                        id: "skip_one",
                        attributes: {
                            label: "You are doing great so far!",
                            buttonText: "Continue",
                            quotationMarks: true
                        }
                    }
                ],
                settings: {
                    animationDirection: "horizontal",
                    disableWheelSwiping: true,
                    disableNavigationArrows: true,
                    disableProgressBar: false
                },
                theme: {
                    backgroundColor: "transparent",
                    buttonsBgColor: "rgb(34 197 94)",
                    logo: {
                        src: ""
                    },
                    questionsColor: "#000",
                    answersColor: "rgb(34 197 94 )",
                    buttonsFontColor: "#fff",
                    buttonsBorderRadius: 25,
                    errorsFontColor: "#fff",
                    errorsBgColor: "#f00",
                    progressBarFillColor: "rgb(34 197 94 )",
                    progressBarBgColor: "#ccc"
                }
            },
            onSubmit: (data, { completeForm , setIsSubmitting  })=>{
                const valuesList = Object.values(data.answers).map((item)=>item.value);
                const mergedValues = valuesList.map((value)=>Array.isArray(value) ? value.join(", ") : value);
                setTimeout(()=>{
                    submitFormHandler(mergedValues);
                    setIsSubmitting(false);
                    completeForm();
                }, 500);
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2307:
/***/ (() => {



/***/ })

};
;