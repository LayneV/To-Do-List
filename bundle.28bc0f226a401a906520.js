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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --color-mint-green: #90f6d7;\n  --color-teal: #35bcbf;\n  --color-slate-blue: #41506b;\n  --color-dark-blue: #263849;\n\n  --priority-high: #dc3545;\n  --priority-medium: #ffc107;\n  --priority-low: #198754;\n\n  --primary-color: var(--color-teal);\n  --accent-color: var(--color-mint-green);\n  --bg-color: var(--color-dark-blue);\n  --surface-color: var(--color-slate-blue);\n  --text-color: #f0f0f0;\n  --text-muted: #adb5bd;\n  --border-color: #5a6f90;\n\n  --shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  --border-radius: 8px;\n  --sidebar-width: 280px;\n  --header-height: 65px;\n  --font-family:\n    system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: var(--font-family);\n  background-color: var(--bg-color);\n  color: var(--text-color);\n  line-height: 1.6;\n  padding-top: var(--header-height);\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: var(--header-height);\n  z-index: 100;\n  background-color: var(--primary-color);\n  color: #f0f0f0;\n  display: flex;\n  align-items: center;\n  padding: 0 2rem;\n  font-weight: bold;\n}\n\nheader img {\n  height: 32px;\n  margin-right: 0.5rem;\n  filter: invert(1);\n}\n\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: var(--header-height);\n  bottom: 0;\n  width: var(--sidebar-width);\n  background-color: var(--surface-color);\n  border-right: 1px solid var(--border-color);\n  padding: 1.5rem;\n  overflow-y: auto;\n}\n\n.main-content {\n  margin-left: var(--sidebar-width);\n  padding: 2rem;\n}\n\nh3 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n  color: var(--text-muted);\n}\n\n.project-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n\n.project-name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.delete-project-btn {\n  background: transparent;\n  color: inherit;\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0.5;\n  transition:\n    opacity 0.2s ease,\n    background-color 0.2s ease;\n}\n.project-item:hover .delete-project-btn {\n  opacity: 1;\n}\n\n.delete-project-btn:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.project-item:hover {\n  background-color: #5a6f90;\n}\n\n.project-item.active {\n  background-color: var(--accent-color);\n  color: var(--color-dark-blue);\n  font-weight: bold;\n}\n\n#todo-display-area {\n  background-color: var(--surface-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  padding: 1.5rem;\n  min-height: 400px;\n}\n\n.todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-color);\n  transition: background-color 0.2s ease;\n  border-left: 5px solid transparent;\n}\n\n.todo-item[data-priority=\"low\"] {\n  border-left-color: var(--priority-low);\n}\n.todo-item[data-priority=\"medium\"] {\n  border-left-color: var(--priority-medium);\n}\n.todo-item[data-priority=\"high\"] {\n  border-left-color: var(--priority-high);\n}\n\n.todo-item:hover {\n  background-color: #5a6f90;\n}\n\n.todo-item:last-child {\n  border-bottom: none;\n}\n\n.todo-content h4 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.todo-description {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n}\n.todo-meta {\n  font-size: 0.8rem;\n  color: var(--text-color);\n}\n\n.todo-actions .delete-todo-btn {\n  background: transparent;\n  color: var(--text-muted);\n  border: none;\n  font-size: 1.5rem;\n  line-height: 1;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition:\n    background-color 0.2s ease,\n    color 0.2s ease;\n}\n.todo-actions .delete-todo-btn:hover {\n  background-color: #5d1c24;\n  color: white;\n}\n\nform {\n  margin-top: 2rem;\n  background: var(--surface-color);\n  padding: 1.5rem;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n}\n\ninput[type=\"text\"],\ninput[type=\"date\"],\ntextarea {\n  width: 100%;\n  padding: 0.75rem;\n  margin-top: 0.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n\nbutton,\ninput[type=\"submit\"] {\n  background-color: var(--primary-color);\n  color: #f0f0f0;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: bold;\n  transition: opacity 0.2s ease;\n}\nbutton:hover,\ninput[type=\"submit\"]:hover {\n  opacity: 0.85;\n}\n#open-dialog {\n  width: 100%;\n  margin-top: 1rem;\n}\nbutton.secondary {\n  background-color: var(--text-muted);\n  color: white;\n}\n\ndialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadow);\n  padding: 2rem;\n  width: 90%;\n  max-width: 500px;\n  background-color: var(--surface-color);\n  width: 90%;\n  max-width: 500px;\n  background-color: var(--surface-color);\n  color: var(--text-color);\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n}\n\ndialog form {\n  margin-top: 0;\n  padding: 0;\n  box-shadow: none;\n  background-color: transparent;\n}\ndialog menu {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 1.5rem;\n}\n.priority-options {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  margin-top: 0.5rem;\n}\n.priority-options input[type=\"radio\"] {\n  display: none;\n}\n.priority-options label {\n  display: block;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--border-color);\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.priority-options input[type=\"radio\"]:checked + label {\n  font-weight: bold;\n  color: white;\n}\n#low:checked + label {\n  background-color: var(--priority-low);\n  border-color: var(--priority-low);\n}\n#medium:checked + label {\n  background-color: var(--priority-medium);\n  border-color: var(--priority-medium);\n  color: #212529;\n}\n#high:checked + label {\n  background-color: var(--priority-high);\n  border-color: var(--priority-high);\n}\n\n@media (max-width: 768px) {\n  .sidebar {\n    position: static;\n    width: 100%;\n    height: auto;\n    border-right: none;\n    border-bottom: 1px solid var(--border-color);\n  }\n  .main-content {\n    margin-left: 0;\n    padding: 1rem;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   findProject: () => (/* binding */ findProject),\n/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   setActiveProject: () => (/* binding */ setActiveProject)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n// index.js\n\n\n\n\n\n\n\nlet activeProject = null;\nlet todoList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadProjects)();\n\nif (todoList.length === 0) {\n  let houseProjects = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(\"House Chores\");\n  addNewProject(houseProjects);\n  let kitchen = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createToDoItems)(\n    \"Clean kitchen\",\n    \"Wash the dishes\",\n    \"Tomorrow\",\n    \"Urgent\"\n  );\n  houseProjects.addTodo(kitchen);\n  setActiveProject(houseProjects);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(getProjects());\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(houseProjects);\n} else {\n  setActiveProject(todoList[0]);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n  (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(todoList[0]);\n}\n\nfunction setActiveProject(project) {\n  activeProject = project;\n}\nfunction getActiveProject() {\n  return activeProject;\n}\n\nfunction getProjects() {\n  return todoList;\n}\nfunction addNewProject(project) {\n  todoList.push(project);\n}\nfunction findProject(projectName) {\n  return todoList.find((p) => p.name === projectName);\n}\n\nfunction deleteProject(projectName) {\n  todoList = todoList.filter((project) => project.name !== projectName);\n\n  if (activeProject && activeProject.name === projectName) {\n    setActiveProject(todoList[0] || null);\n  }\n}\n\ncreateNewProject();\naddTodoForm();\n\nfunction createNewProject() {\n  const newProjectForm = document.getElementById(\"new-project-form\");\n  newProjectForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const newProjectInput = document.getElementById(\"project-name-input\");\n    const projectName = newProjectInput.value;\n    if (!projectName || findProject(projectName)) {\n      newProjectInput.value = \"\";\n      return;\n    }\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(projectName);\n    addNewProject(newProject);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(getProjects());\n    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\n    newProjectForm.reset();\n  });\n}\n\nfunction addTodoForm() {\n  const dialog = document.getElementById(\"todo-dialog\");\n  const openDialogBtn = document.getElementById(\"open-dialog\");\n  const cancelBtn = document.getElementById(\"cancelBtn\");\n  const newTodoForm = document.getElementById(\"new-todo-form\");\n  openDialogBtn.addEventListener(\"click\", () => {\n    if (getActiveProject()) dialog.showModal();\n  });\n  cancelBtn.addEventListener(\"click\", () => {\n    dialog.close();\n  });\n  newTodoForm.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const formData = new FormData(newTodoForm);\n    const name = formData.get(\"name\");\n    const description = formData.get(\"description\");\n    const dueDate = formData.get(\"due-date\");\n    const priority = formData.get(\"priority\");\n    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createToDoItems)(name, description, dueDate, priority);\n    const currentProject = getActiveProject();\n    if (currentProject) {\n      currentProject.addTodo(newTodo);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveProjects)(getProjects());\n      (0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProject);\n    }\n    newTodoForm.reset();\n    dialog.close();\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.listOfToDoItems = [];\n  }\n\n  addTodo(todo) {\n    this.listOfToDoItems.push(todo);\n  }\n\n  removeTodo(todoTitle) {\n    this.listOfToDoItems = this.listOfToDoItems.filter(\n      (todo) => todo.title !== todoTitle\n    );\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?\n}");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nfunction saveProjects(projects) {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction loadProjects() {\n  const savedJSON = localStorage.getItem(\"projects\");\n\n  if (savedJSON === null) {\n    return [];\n  }\n\n  let plainData;\n  try {\n    plainData = JSON.parse(savedJSON);\n  } catch (e) {\n    console.error(\"Error parsing saved data:\", e);\n    return [];\n  }\n\n  if (!Array.isArray(plainData)) {\n    console.warn(\"Saved data is not an array. Starting fresh.\");\n    return [];\n  }\n\n  const objectProjects = [];\n  plainData.forEach((p) => {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(p.name);\n    p.listOfToDoItems.forEach((todo) => {\n      project.addTodo(todo);\n    });\n    objectProjects.push(project);\n  });\n\n  return objectProjects;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDoItems: () => (/* binding */ createToDoItems)\n/* harmony export */ });\nfunction createToDoItems(title, description, dueDate, priority) {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n  };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?\n}");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n// ui.js\n\n\n\n\nfunction renderProjects() {\n  const projectListDiv = document.getElementById(\"project-list-container\");\n  projectListDiv.innerHTML = \"<h3>Projects</h3>\";\n\n  const projects = (0,___WEBPACK_IMPORTED_MODULE_0__.getProjects)();\n\n  if (projects.length === 0) {\n    const emptyState = document.createElement(\"p\");\n    emptyState.textContent = \"No projects yet!\";\n    emptyState.style.color = \"var(--text-muted)\";\n    projectListDiv.appendChild(emptyState);\n  }\n\n  projects.forEach((p) => {\n    const projectItemDiv = document.createElement(\"div\");\n    projectItemDiv.classList.add(\"project-item\");\n    projectItemDiv.dataset.projectName = p.name;\n\n    if ((0,___WEBPACK_IMPORTED_MODULE_0__.getActiveProject)() && (0,___WEBPACK_IMPORTED_MODULE_0__.getActiveProject)().name === p.name) {\n      projectItemDiv.classList.add(\"active\");\n    }\n\n    projectItemDiv.innerHTML = `\n      <span class=\"project-name\">${p.name}</span>\n      <button class=\"delete-project-btn\">&times;</button>\n    `;\n\n    projectListDiv.appendChild(projectItemDiv);\n\n    projectItemDiv.addEventListener(\"click\", () => {\n      (0,___WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(p);\n      renderProjects();\n      renderTodos(p);\n    });\n\n    const deleteButton = projectItemDiv.querySelector(\".delete-project-btn\");\n    deleteButton.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n\n      (0,___WEBPACK_IMPORTED_MODULE_0__.deleteProject)(p.name);\n\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)((0,___WEBPACK_IMPORTED_MODULE_0__.getProjects)());\n\n      renderProjects();\n      renderTodos((0,___WEBPACK_IMPORTED_MODULE_0__.getActiveProject)());\n    });\n  });\n}\n\nfunction renderTodos(project) {\n  const todoDisplayArea = document.getElementById(\"todo-display-area\");\n  todoDisplayArea.innerHTML = \"\";\n\n  if (!project) {\n    const placeholder = document.createElement(\"h3\");\n    placeholder.textContent = \"Select a project to see its tasks.\";\n    placeholder.style.color = \"var(--text-muted)\";\n    todoDisplayArea.appendChild(placeholder);\n    return;\n  }\n\n  const projectTitle = document.createElement(\"h3\");\n  projectTitle.textContent = `Tasks for: ${project.name}`;\n  todoDisplayArea.appendChild(projectTitle);\n\n  if (project.listOfToDoItems.length === 0) {\n    const emptyState = document.createElement(\"p\");\n    emptyState.textContent = \"No tasks yet. Add one!\";\n    emptyState.style.color = \"var(--text-muted)\";\n    todoDisplayArea.appendChild(emptyState);\n  }\n\n  project.listOfToDoItems.forEach((p) => {\n    const todoItemDiv = document.createElement(\"div\");\n    todoItemDiv.classList.add(\"todo-item\");\n    todoItemDiv.dataset.priority = p.priority;\n    todoItemDiv.dataset.title = p.title;\n\n    todoItemDiv.innerHTML = `\n      <div class=\"todo-content\">\n        <h4>${p.title}</h4>\n        <p class=\"todo-description\">${p.description}</p>\n        <div class=\"todo-meta\">\n          <span class=\"todo-duedate\">Due: ${p.dueDate}</span>\n        </div>\n      </div>\n      <div class=\"todo-actions\">\n          <button class=\"delete-todo-btn\">&times;</button>\n      </div>\n    `;\n\n    todoDisplayArea.appendChild(todoItemDiv);\n\n    const deleteButton = todoItemDiv.querySelector(\".delete-todo-btn\");\n    deleteButton.addEventListener(\"click\", () => {\n      const currentProject = (0,___WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();\n      const todoTitleToDelete = todoItemDiv.dataset.title;\n      currentProject.removeTodo(todoTitleToDelete);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveProjects)((0,___WEBPACK_IMPORTED_MODULE_0__.getProjects)());\n      renderTodos(currentProject);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/ui.js?\n}");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;