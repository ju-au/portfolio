/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/flowSerialNumber.js":
/*!************************************!*\
  !*** ./src/js/flowSerialNumber.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const flowNumber = document.querySelectorAll(\".flow__name-number\");\r\n    if (!flowNumber) return;\r\n    for (let i = 0; i < flowNumber.length; i++) {\r\n        flowNumber.item(i).innerText = \"0\" + (i + 1);\r\n    };\r\n}\n\n//# sourceURL=webpack://portfolio/./src/js/flowSerialNumber.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollUpHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollUpHeader.js */ \"./src/js/scrollUpHeader.js\");\n/* harmony import */ var _topSwiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topSwiper.js */ \"./src/js/topSwiper.js\");\n/* harmony import */ var _topAccordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topAccordion.js */ \"./src/js/topAccordion.js\");\n/* harmony import */ var _flowSerialNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flowSerialNumber.js */ \"./src/js/flowSerialNumber.js\");\n/* harmony import */ var _worksSwiper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./worksSwiper.js */ \"./src/js/worksSwiper.js\");\n\r\n\r\n;\r\n(0,_scrollUpHeader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\n(0,_topSwiper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\r\n(0,_topAccordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\r\n(0,_flowSerialNumber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n(0,_worksSwiper_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scrollUpHeader.js":
/*!**********************************!*\
  !*** ./src/js/scrollUpHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const header = document.getElementById('header');\r\n    if (!header) return;\r\n\r\n    const headerHeight = header.clientHeight;\r\n    let startPosition = 0;\r\n    let position = 0;\r\n\r\n    window.addEventListener(\"scroll\", () => {\r\n        position = window.scrollY;\r\n\r\n        if (position > headerHeight && position > startPosition) {\r\n            header.classList.remove('is-fixed');\r\n        }\r\n        if (position < headerHeight || position < startPosition) {\r\n            header.classList.add('is-fixed');\r\n        }\r\n\r\n        startPosition = position;\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack://portfolio/./src/js/scrollUpHeader.js?");

/***/ }),

/***/ "./src/js/topAccordion.js":
/*!********************************!*\
  !*** ./src/js/topAccordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const serviceItems = document.querySelectorAll('.service__item');\r\n    if (!serviceItems) return;\r\n    for (let i = 0; i < serviceItems.length; i++) {\r\n        serviceItems.item(i).addEventListener('click', () => {\r\n            serviceItems.item(i).classList.toggle('active');\r\n        });\r\n    };\r\n}\n\n//# sourceURL=webpack://portfolio/./src/js/topAccordion.js?");

/***/ }),

/***/ "./src/js/topSwiper.js":
/*!*****************************!*\
  !*** ./src/js/topSwiper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    if (!document.querySelector('.home')) return;\r\n    const swiper = new Swiper('.top__slide', {\r\n        autoplay: {\r\n            delay: 5000,\r\n        },\r\n        loop: true,\r\n    });\r\n};\n\n//# sourceURL=webpack://portfolio/./src/js/topSwiper.js?");

/***/ }),

/***/ "./src/js/worksSwiper.js":
/*!*******************************!*\
  !*** ./src/js/worksSwiper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    if (!document.querySelector(\".home-works__slide\")) return;\r\n    let swiper = new Swiper(\".home-works__slide\", {\r\n        slidesPerView: 3,\r\n        centeredSlides: true,\r\n        spaceBetween: 42,\r\n        pagination: {\r\n            el: \".swiper-pagination\",\r\n            type: \"bullets\",\r\n        },\r\n        navigation: {\r\n            nextEl: \".swiper-button-next\",\r\n            prevEl: \".swiper-button-prev\",\r\n        },\r\n    });\r\n    const dots = document.querySelectorAll(\".swiper-pagination-bullet\");\r\n    const dotsWidth = (100 / dots.length) + \"%\";\r\n    dots.forEach(dot => {\r\n        dot.style.width = dotsWidth;\r\n    });\r\n}\n\n//# sourceURL=webpack://portfolio/./src/js/worksSwiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;