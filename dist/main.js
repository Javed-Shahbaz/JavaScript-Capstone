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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/Simpsonfont.woff */ \"./src/assests/Simpsonfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: 'Simpsonfont';\\r\\n  src: local('Simpsonfont'), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Simpsonfont', 'Franklin Gothic Medium', sans-serif;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: 'Simpsonfont', 'Franklin Gothic Medium', sans-serif;\\r\\n  font-size: large;\\r\\n  cursor: pointer;\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n  background-color: hsl(200, 87%, 47%);\\r\\n  color: hsl(60, 100%, 2%);\\r\\n  box-shadow: 3px 3px 4px #193b6e;\\r\\n  border-radius: 5px;\\r\\n  padding: 0.43rem;\\r\\n  transition: 300ms;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: hsl(13, 87%, 57%);\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n#principle {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: hsla(47, 94%, 61%, 0.5);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: hsl(219, 79%, 66%);\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 0.93rem 3.12rem;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  font-size: 1.5em;\\r\\n  font-weight: 700;\\r\\n  color: hsl(56, 100%, 49%);\\r\\n  text-shadow: 4px 5px 3px hsl(0, 0%, 0%);\\r\\n}\\r\\n\\r\\n#n-episodes {\\r\\n  font-size: 1.5em;\\r\\n  font-weight: 800;\\r\\n  color: hsl(56, 100%, 49%);\\r\\n  text-shadow: 2px 2px 1px hsl(0, 0%, 0%);\\r\\n  transition-duration: 300ms;\\r\\n}\\r\\n\\r\\n#nro {\\r\\n  font-size: 1.5em;\\r\\n  font-weight: 800;\\r\\n  color: hsl(13, 87%, 57%);\\r\\n  text-shadow: 2px 2px 1px hsl(0, 0%, 0%);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.93em;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  font-weight: 800;\\r\\n  color: hsl(56, 100%, 49%);\\r\\n  text-shadow: 4px 5px 3px hsl(0, 0%, 0%);\\r\\n}\\r\\n\\r\\n#dinamic-content {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  gap: 1.25em;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 0.62em;\\r\\n  border: 1px solid hsl(13, 87%, 57%);\\r\\n  border-radius: 0.62em;\\r\\n  padding: 0.43em;\\r\\n  background-color: hsl(98, 47%, 57%);\\r\\n}\\r\\n\\r\\n.thumbnail-image {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border-radius: 5%;\\r\\n}\\r\\n\\r\\n.cont-name-like {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.episode {\\r\\n  margin-left: 0.62em;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\n.n-likes {\\r\\n  margin-right: 0.62em;\\r\\n  font-size: 0.87em;\\r\\n  width: max-content;\\r\\n}\\r\\n\\r\\n.episode,\\r\\n.n-likes {\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\n.cont-like {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 0.31em;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  width: 2em;\\r\\n  height: auto;\\r\\n  cursor: pointer;\\r\\n  transition: 300ms;\\r\\n}\\r\\n\\r\\n.like:hover {\\r\\n  transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.nro-like {\\r\\n  color: hsl(13, 87%, 57%);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  background-color: hsl(98, 47%, 57%);\\r\\n  padding: 1.25em;\\r\\n  margin-top: 1.25em;\\r\\n  font-family: 'Simpsonfont', 'Franklin Gothic Medium', sans-serif;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 700;\\r\\n  color: hsl(0, 0%, 1%);\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#popup {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  gap: 7px;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: rgb(127, 255, 212, 1);\\r\\n  width: 100vw;\\r\\n  height: 120vh;\\r\\n  z-index: 1000;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: flex !important;\\r\\n}\\r\\n\\r\\n.img-header {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 35%;\\r\\n}\\r\\n\\r\\n#cross-btn {\\r\\n  display: inline-block;\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  font-size: 50px;\\r\\n  right: 20px;\\r\\n  top: 20px;\\r\\n  color: blue;\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n#img-popup {\\r\\n  width: 90%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 15px;\\r\\n  width: 50%;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.addForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5em;\\r\\n  width: 50%;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.inputname {\\r\\n  height: 35px;\\r\\n  border: 2px solid black;\\r\\n  border-radius: 3px;\\r\\n  width: 50%;\\r\\n  padding-left: 1em;\\r\\n}\\r\\n\\r\\n#addCommentBtn {\\r\\n  background-color: initial;\\r\\n  background-image: linear-gradient(-190deg, rgb(39, 218, 51), #ea4621);\\r\\n  box-shadow: rgba(0.8, 1, 1, 0.7) 0 4px 8px;\\r\\n  border-radius: 7px;\\r\\n  color: whitesmoke;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-size: large;\\r\\n  font-family: Poppins, sans-serif;\\r\\n  height: 20px;\\r\\n  line-height: 20px;\\r\\n  outline: 0;\\r\\n  overflow: hidden;\\r\\n  pointer-events: auto;\\r\\n  position: relative;\\r\\n  text-align: center;\\r\\n  width: 50%;\\r\\n  z-index: 9;\\r\\n  border: 1px salmon;\\r\\n  transition: box-shadow 0.25s;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  body {\\r\\n    font-size: 15px;\\r\\n  }\\r\\n\\r\\n  #dinamic-content {\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 425px) {\\r\\n  body {\\r\\n    font-size: 13px;\\r\\n  }\\r\\n\\r\\n  #dinamic-content {\\r\\n    grid-template-columns: 1fr;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_App_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/App.js */ \"./src/modules/App.js\");\n\n\n\nwindow.onload = () => {\n  (0,_modules_App_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/ApiSimpson.js":
/*!***********************************!*\
  !*** ./src/modules/ApiSimpson.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countOccurrences\": () => (/* binding */ countOccurrences),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n // , API_URL2\r\n\r\n// async function getData() {\r\nconst getData = async (link) => {\r\n  try {\r\n    const response = await fetch(link, {\r\n      method: 'GET',\r\n    });\r\n    const responseData = await response.json();\r\n    return responseData;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\r\nconst countOccurrences = async () => {\r\n  const data = await getData(_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL1);\r\n  return data.length;\r\n};\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/ApiSimpson.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ApiSimpson_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiSimpson.js */ \"./src/modules/ApiSimpson.js\");\n/* harmony import */ var _assests_like_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/like.png */ \"./src/assests/like.png\");\n/* harmony import */ var _GetLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetLikes.js */ \"./src/modules/GetLikes.js\");\n/* harmony import */ var _SendLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SendLike.js */ \"./src/modules/SendLike.js\");\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addComments.js */ \"./src/modules/addComments.js\");\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n/* harmony import */ var _GetComments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GetComments.js */ \"./src/modules/GetComments.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Render cards\r\nasync function renderCards() {\r\n  // Data from simpson api\r\n  const data = await (0,_ApiSimpson_js__WEBPACK_IMPORTED_MODULE_0__.getData)(_Vars_js__WEBPACK_IMPORTED_MODULE_5__.API_URL1);\r\n  const CardsContainer = document.getElementById('dinamic-content');\r\n\r\n  const nLikesArray = await Promise.all(\r\n    data.map((episode) => (0,_GetLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(episode.id)),\r\n  );\r\n  data.forEach((episode, index) => {\r\n    const nLikes = nLikesArray[index];\r\n\r\n    // data.forEach((episode) => {\r\n    // for (const episode of data) {\r\n    // const nLikes = await getLikes(episode.id);\r\n    const doc = document;\r\n    const article = doc.createElement('article');\r\n    article.classList.add('card');\r\n    const image = doc.createElement('img');\r\n    image.classList.add('thumbnail-image');\r\n    image.src = episode.thumbnailUrl;\r\n    image.alt = 'thumbnail image';\r\n    const divName = doc.createElement('div');\r\n    divName.classList.add('cont-name-like');\r\n    const pName = doc.createElement('p');\r\n    pName.classList.add('episode');\r\n    pName.textContent = episode.name;\r\n    const divLike = doc.createElement('div');\r\n    divLike.classList.add('cont-like');\r\n    const imgLike = doc.createElement('img');\r\n    imgLike.src = _assests_like_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    imgLike.classList.add('like');\r\n    imgLike.alt = 'like button';\r\n    const pNroLike = doc.createElement('p');\r\n    pNroLike.classList.add('n-likes');\r\n    const spanNro = doc.createElement('span');\r\n    spanNro.classList.add('nro-like');\r\n    spanNro.textContent = nLikes;\r\n    pNroLike.textContent = 'likes #';\r\n    pNroLike.appendChild(spanNro);\r\n    const btnCmts = doc.createElement('button');\r\n    btnCmts.classList.add('comments');\r\n    btnCmts.textContent = 'Comments';\r\n    divLike.appendChild(imgLike);\r\n    divLike.appendChild(pNroLike);\r\n    divName.appendChild(pName);\r\n    divName.appendChild(divLike);\r\n    article.appendChild(image);\r\n    article.appendChild(divName);\r\n    article.appendChild(btnCmts);\r\n\r\n    CardsContainer.appendChild(article);\r\n    // Detect the clik on like\r\n    imgLike.addEventListener('click', async () => {\r\n      const itemId = episode.id;\r\n      const nLikes = await (0,_GetLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemId);\r\n      const output = await (0,_SendLike_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(itemId);\r\n      if (output) {\r\n        spanNro.textContent = nLikes + 1;\r\n      } else {\r\n        spanNro.textContent = 'error';\r\n      }\r\n    });\r\n    const popup = doc.getElementById('popup');\r\n    btnCmts.addEventListener('click', async () => {\r\n      popup.classList.add('show');\r\n      document.getElementById('img-popup').src = episode.thumbnailUrl;\r\n      document.querySelector('.popup-name').textContent = episode.name;\r\n      document.getElementById('ep-number').textContent = episode.episode;\r\n      document.getElementById('desc').textContent = episode.description;\r\n      document.querySelector('.addForm').setAttribute('id', `${episode.id}`);\r\n      (0,_GetComments_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(`${episode.id}`);\r\n    });\r\n  });\r\n}\r\n\r\nconst frmAddComment = document.getElementById('addCommentBtn');\r\nfrmAddComment.addEventListener('click', async (event) => {\r\n  event.preventDefault();\r\n  const name = document.querySelector('.inputname').value;\r\n  const comment = document.querySelector('#inputcomments').value;\r\n  const itemId = document.querySelector('#addCommentBtn').parentElement.id;\r\n  if (name !== '' && comment !== '') {\r\n    const commentObj = JSON.stringify({\r\n      item_id: itemId,\r\n      username: name,\r\n      comment: comment,\r\n    });\r\n\r\n    await (0,_addComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentObj);\r\n    (0,_GetComments_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(`${itemId}`);\r\n    document.querySelector('.inputname').value = '';\r\n    document.querySelector('#inputcomments').value = '';\r\n  }\r\n});\r\n\r\nconst cbtn = document.getElementById('cross-btn');\r\ncbtn.addEventListener('click', () => {\r\n  popup.classList.remove('show');\r\n});\r\n\r\nconst displayCountItems = async () => {\r\n  const nro = await (0,_ApiSimpson_js__WEBPACK_IMPORTED_MODULE_0__.countOccurrences)();\r\n  document.getElementById('nro').innerHTML = nro;\r\n};\r\n\r\nconst App = () => {\r\n  renderCards();\r\n  displayCountItems();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/GetComments.js":
/*!************************************!*\
  !*** ./src/modules/GetComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n/* harmony import */ var _ApiSimpson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiSimpson.js */ \"./src/modules/ApiSimpson.js\");\n/* harmony import */ var _countComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countComments */ \"./src/modules/countComments\");\n\r\n\r\n\r\n\r\nconst getComments = async (itemId) => {\r\n  const comments = document.getElementById('comments');\r\n  comments.innerHTML = ` \r\n  <h3>Comments <span class=\"comment_count\">(0)</span></h3>\r\n  `;\r\n  const url = `${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL2}apps/${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.AppId}/comments?item_id=${itemId}`;\r\n  const movieComments = await (0,_ApiSimpson_js__WEBPACK_IMPORTED_MODULE_1__.getData)(url);\r\n\r\n  if (movieComments.length > 0) {\r\n    (0,_countComments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemId);\r\n    document.querySelector('.comment_count').textContent = `(${movieComments.length})`;\r\n    movieComments.forEach((comment) => {\r\n      const pComments = document.createElement('p');\r\n      pComments.innerHTML = `\r\n          <small>${comment.creation_date} - ${comment.username}:</small> <strong>${comment.comment}</strong>\r\n       `;\r\n      comments.appendChild(pComments);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/GetComments.js?");

/***/ }),

/***/ "./src/modules/GetLikes.js":
/*!*********************************!*\
  !*** ./src/modules/GetLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n\n\nconst getLikes = async (itemId) => {\n  const url = `${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL2}apps/${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.AppId}/likes/`;\n  const response = await fetch(url);\n  const likesData = await response.json();\n\n  // Find number of likes for item_id\n  const itemLikes = likesData.find((item) => item.item_id === itemId);\n\n  // return nuember of likes when exist item or 0\n  return itemLikes ? parseInt(itemLikes.likes, 10) : 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/GetLikes.js?");

/***/ }),

/***/ "./src/modules/SendLike.js":
/*!*********************************!*\
  !*** ./src/modules/SendLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n\n\nconst sendLike = async (itemId) => {\n  const url = `${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL2}apps/${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.AppId}/likes/`;\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: itemId }),\n  });\n\n  if (response.status === 201) {\n    return true;\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendLike);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/SendLike.js?");

/***/ }),

/***/ "./src/modules/Vars.js":
/*!*****************************!*\
  !*** ./src/modules/Vars.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL1\": () => (/* binding */ API_URL1),\n/* harmony export */   \"API_URL2\": () => (/* binding */ API_URL2),\n/* harmony export */   \"AppId\": () => (/* binding */ AppId)\n/* harmony export */ });\nconst API_URL1 = 'https://api.sampleapis.com/simpsons/episodes/?season=10';\nconst API_URL2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\nconst AppId = 'USLjK4j6M0l6C9piwfTK';\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/Vars.js?");

/***/ }),

/***/ "./src/modules/addComments.js":
/*!************************************!*\
  !*** ./src/modules/addComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n\r\n\r\n// Add data to API\r\nconst addComment = async (comment) => {\r\n  try {\r\n    const myHeaders = new Headers();\r\n    myHeaders.append('Content-Type', 'application/json');\r\n    const requestOptions = {\r\n      method: 'POST',\r\n      headers: myHeaders,\r\n      body: comment,\r\n      redirect: 'follow',\r\n    };\r\n\r\n    const response = await fetch(`${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL2}apps/${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.AppId}/comments/`,\r\n      requestOptions);\r\n    const result = await response.text();\r\n    return result;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/addComments.js?");

/***/ }),

/***/ "./src/modules/countComments":
/*!***********************************!*\
  !*** ./src/modules/countComments ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vars.js */ \"./src/modules/Vars.js\");\n\r\n\r\nconst countComments = async (itemId) => {\r\n  const url = `${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.API_URL2}apps/${_Vars_js__WEBPACK_IMPORTED_MODULE_0__.AppId}/comments/`;\r\n  const response = await fetch(url);\r\n  const comData = await response.json();\r\n\r\n  // Find number of comments for item_id\r\n  const itemCom = comData.find((item) => item.item_id === itemId);\r\n\r\n  // return nuember of comments when exist item or 0\r\n  return itemCom ? parseInt(itemCom.comments, 10) : 0;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/countComments?");

/***/ }),

/***/ "./src/assests/Simpsonfont.woff":
/*!**************************************!*\
  !*** ./src/assests/Simpsonfont.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"33359b827c53c8168584.woff\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assests/Simpsonfont.woff?");

/***/ }),

/***/ "./src/assests/like.png":
/*!******************************!*\
  !*** ./src/assests/like.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26e1a17139b70ecd5fc3.png\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assests/like.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;