"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Modal/Modal.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Modal,Stack,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Inventory management helper functions\n    const [inventory, setInventory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // State variables to add and remove items\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [itemName, setItemName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    // Fetch inventory from Firebase\n    const updateInventory = async ()=>{\n        const snapshot = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"));\n        const docs = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(snapshot);\n        const inventoryList = [];\n        docs.forEach((doc1)=>{\n            inventoryList.push({\n                name: doc1.id,\n                ...doc1.data()\n            });\n        });\n        setInventory(inventoryList);\n    };\n    const removeItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item);\n        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            if (quantity === 1) {\n                await deleteDoc(docRef);\n            } else {\n                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, {\n                    quantity: quantity - 1\n                });\n            }\n        }\n        await updateInventory();\n    };\n    const addItem = async (item)=>{\n        const docRef = doc((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"inventory\"), item);\n        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const { quantity } = docSnap.data();\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, {\n                quantity: quantity + 1\n            });\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(docRef, {\n                quantity: 1\n            });\n        }\n        await updateInventory();\n    };\n    // Use useEffect to call updateInventory when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        updateInventory();\n    }, []);\n    const handleOpen = ()=>setOpen(true);\n    const handleClose = ()=>setOpen(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        width: \"100vw\",\n        height: \"100vh\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                open: open,\n                onClose: handleClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    width: 400,\n                    bgcolor: \"white\",\n                    border: \"2px solid #000\",\n                    boxShadow: 24,\n                    p: 4,\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    gap: 3,\n                    sx: {\n                        transform: \"translate(-50%,-50%)\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"h6\",\n                            children: \"Add Item\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            width: \"100%\",\n                            direction: \"row\",\n                            spacing: 2\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            variant: \"outlined\",\n                            fullWidth: true,\n                            value: itemName,\n                            onChange: (e)=>{\n                                setItemName(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            variant: \"outlined\",\n                            onClick: ()=>{\n                                addItem(itemName);\n                                setItemName(\"\");\n                                handleClose();\n                            },\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                variant: \"outlined\",\n                onClick: ()=>{\n                    handleOpen;\n                },\n                children: \"Add new item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                border: \"1px #333\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        width: \"800px\",\n                        height: \"100px\",\n                        bgcolor: \"#ADD8E6\",\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"h2\",\n                            color: \"#333\",\n                            children: \"Inventory items\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        width: \"800px\",\n                        height: \"300px\",\n                        spacing: 2,\n                        overflow: \"auto\",\n                        children: inventory.map((param)=>{\n                            let { name, quantity } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                width: \"100%\",\n                                minHeight: \"150px\",\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                justifyContent: \"space-between\",\n                                bgcolor: \"#f0f0f0\",\n                                padding: 5,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        variant: \"h3\",\n                                        color: \"#333\",\n                                        textAlign: \"center\",\n                                        children: name.charAt(0).toUpperCase() + name.slice(1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        variant: \"h3\",\n                                        color: \"#333\",\n                                        textAlign: \"center\",\n                                        children: quantity\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Modal_Stack_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        variant: \"contained\",\n                                        onClick: ()=>{\n                                            removeItem(name);\n                                        },\n                                        children: \"Remove\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, name, true, {\n                                fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MANYA\\\\Documents\\\\inventory_tracker\\\\inventory_management\\\\app\\\\page.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ZFkVGfZadB1ckxhdEVDTu3A2yMw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQUtTLE9BQU07d0NBQU9LLFdBQVU7a0RBQzdDcEM7Ozs7OztrREFFSCw4REFBQ2hDLHdIQUFNQTt3Q0FBQ3NELFNBQVE7d0NBQVlRLFNBQVM7NENBQ25DbkMsV0FBV0g7d0NBQ2I7a0RBQUc7Ozs7Ozs7K0JBbEJLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QnBCO0dBaEp3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIkAvZmlyZWJhc2VcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBNb2RhbCxTdGFjaywgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvYywgZ2V0RG9jcywgcXVlcnksIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gSW52ZW50b3J5IG1hbmFnZW1lbnQgaGVscGVyIGZ1bmN0aW9uc1xuICBjb25zdCBbaW52ZW50b3J5LCBzZXRJbnZlbnRvcnldID0gdXNlU3RhdGUoW10pO1xuICAvLyBTdGF0ZSB2YXJpYWJsZXMgdG8gYWRkIGFuZCByZW1vdmUgaXRlbXNcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXRlbU5hbWUsIHNldEl0ZW1OYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBGZXRjaCBpbnZlbnRvcnkgZnJvbSBGaXJlYmFzZVxuICBjb25zdCB1cGRhdGVJbnZlbnRvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc25hcHNob3QgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpKTtcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgZ2V0RG9jcyhzbmFwc2hvdCk7XG4gICAgY29uc3QgaW52ZW50b3J5TGlzdCA9IFtdO1xuICAgIGRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICBpbnZlbnRvcnlMaXN0LnB1c2goeyBuYW1lOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSk7XG4gICAgfSk7XG4gICAgc2V0SW52ZW50b3J5KGludmVudG9yeUxpc3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpLCBpdGVtKVxuICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxuICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBkb2NTbmFwLmRhdGEoKVxuICAgICAgaWYgKHF1YW50aXR5ID09PSAxKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZURvYyhkb2NSZWYpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBzZXREb2MoZG9jUmVmLCB7IHF1YW50aXR5OiBxdWFudGl0eSAtIDEgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlSW52ZW50b3J5KClcbiAgfVxuXG4gIGNvbnN0IGFkZEl0ZW0gPSBhc3luYyAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ2ludmVudG9yeScpLCBpdGVtKVxuICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKVxuICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICBjb25zdCB7IHF1YW50aXR5IH0gPSBkb2NTbmFwLmRhdGEoKVxuICAgICAgYXdhaXQgc2V0RG9jKGRvY1JlZiwgeyBxdWFudGl0eTogcXVhbnRpdHkgKyAxIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHNldERvYyhkb2NSZWYsIHsgcXVhbnRpdHk6IDEgfSlcbiAgICB9XG4gICAgYXdhaXQgdXBkYXRlSW52ZW50b3J5KClcbiAgfVxuXG5cblxuICAvLyBVc2UgdXNlRWZmZWN0IHRvIGNhbGwgdXBkYXRlSW52ZW50b3J5IHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVJbnZlbnRvcnkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxCb3ggd2lkdGg9XCIxMDB2d1wiXG4gICAgIGhlaWdodD1cIjEwMHZoXCIgXG4gICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICBnYXA9ezJ9PlxuICAgICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgPEJveCBwb3NpdGlvbj17XCJhYnNvbHV0ZVwifSBcbiAgICAgICAgdG9wPVwiNTAlXCIgXG4gICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICBiZ2NvbG9yPXtcIndoaXRlXCJ9XG4gICAgICAgIGJvcmRlcj1cIjJweCBzb2xpZCAjMDAwXCJcbiAgICAgICAgYm94U2hhZG93PXsyNH1cbiAgICAgICAgcD17NH1cbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XG4gICAgICAgIGdhcD17M31cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwtNTAlKVwiXG4gICAgICAgIH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFkZCBJdGVtPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxTdGFjayB3aWR0aD1cIjEwMCVcIiBkaXJlY3Rpb249eydyb3cnfSBzcGFjaW5nPXsyfSA+PC9TdGFjaz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgdmFsdWU9e2l0ZW1OYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntcbiAgICAgICAgICAgIHNldEl0ZW1OYW1lKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgPjwvVGV4dEZpZWxkPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgYWRkSXRlbShpdGVtTmFtZSlcbiAgICAgICAgICAgIHNldEl0ZW1OYW1lICgnJylcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlKClcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgIGhhbmRsZU9wZW5cbiAgICAgIH19PlxuICAgICAgICBBZGQgbmV3IGl0ZW1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJveCBib3JkZXI9XCIxcHggIzMzM1wiPlxuICAgICAgICA8Qm94IHdpZHRoPVwiODAwcHhcIlxuICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIiBcbiAgICAgICAgIGJnY29sb3I9XCIjQUREOEU2XCIgXG4gICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjb2xvcj1cIiMzMzNcIj5cbiAgICAgICAgICAgIEludmVudG9yeSBpdGVtcyBcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgXG4gICAgICA8U3RhY2sgd2lkdGg9XCI4MDBweFwiIGhlaWdodD1cIjMwMHB4XCIgc3BhY2luZz17Mn0gIG92ZXJmbG93PVwiYXV0b1wiPntcbiAgICAgICAgaW52ZW50b3J5Lm1hcCgoe25hbWUscXVhbnRpdHl9KT0+KFxuICAgICAgICAgIDxCb3gga2V5PXtuYW1lfVxuICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBcbiAgICAgICAgICAgbWluSGVpZ2h0PVwiMTUwcHhcIiBcbiAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIFxuICAgICAgICAgICBiZ2NvbG9yPVwiI2YwZjBmMFwiIFxuICAgICAgICAgICBwYWRkaW5nPXs1fT5cblxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCIjMzMzXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIHtuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK25hbWUuc2xpY2UoMSl9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwiIzMzM1wiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICB7cXVhbnRpdHl9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICByZW1vdmVJdGVtKG5hbWUpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvU3RhY2s+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZpcmVzdG9yZSIsIkJveCIsIkJ1dHRvbiIsIk1vZGFsIiwiU3RhY2siLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiY29sbGVjdGlvbiIsImdldERvYyIsImdldERvY3MiLCJxdWVyeSIsInNldERvYyIsIkhvbWUiLCJpbnZlbnRvcnkiLCJzZXRJbnZlbnRvcnkiLCJvcGVuIiwic2V0T3BlbiIsIml0ZW1OYW1lIiwic2V0SXRlbU5hbWUiLCJ1cGRhdGVJbnZlbnRvcnkiLCJzbmFwc2hvdCIsImRvY3MiLCJpbnZlbnRvcnlMaXN0IiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJuYW1lIiwiaWQiLCJkYXRhIiwicmVtb3ZlSXRlbSIsIml0ZW0iLCJkb2NSZWYiLCJkb2NTbmFwIiwiZXhpc3RzIiwicXVhbnRpdHkiLCJkZWxldGVEb2MiLCJhZGRJdGVtIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImdhcCIsIm9uQ2xvc2UiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwicCIsInN4IiwidHJhbnNmb3JtIiwidmFyaWFudCIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJmdWxsV2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJjb2xvciIsIm92ZXJmbG93IiwibWFwIiwibWluSGVpZ2h0IiwicGFkZGluZyIsInRleHRBbGlnbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});