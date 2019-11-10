/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vdom-test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/vdom-test.js":
/*!**************************!*\
  !*** ./src/vdom-test.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom */ \"./src/vdom/index.js\");\n\n//h是用来创建虚拟DOM的,虚拟DOM就是一个普通JS对象,放着类型、属性、儿子们\n//DOMDIFF原则 尽量少操作DOM 而且vue domdiff是针对常用DOM操作进行了优化\nconst root = document.getElementById('root')\n\n/* const oldVnode = h('ul', { id: 'container' },\n  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A'),\n  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B'),\n  h('li', { style: { backgroundColor: '#770000' }, key: 'C' }, 'C'),\n  h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D'),\n)\nconst newVnode = h('ul', { id: 'container' },\n  h('li', { style: { backgroundColor: '#AA0000' }, key: 'E' }, 'E'),\n  h('li', { style: { backgroundColor: '#440000' }, key: 'B' }, 'B1'),\n  h('li', { style: { backgroundColor: '#110000' }, key: 'A' }, 'A1'),\n  h('li', { style: { backgroundColor: '#AA0000' }, key: 'D' }, 'D1'),\n  h('li', { style: { backgroundColor: '#770000' }, key: 'F' }, 'F'),\n) */\nconst oldVnode = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('ul', {\n    id: 'container'\n  },\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#110000'\n    }\n  }, 'A'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#440000'\n    }\n  }, 'B'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#770000'\n    }\n  }, 'C'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#AA0000'\n    }\n  }, 'D'),\n)\nconst newVnode = Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('ul', {\n    id: 'container'\n  },\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#110000'\n    }\n  }, 'A1'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#440000'\n    }\n  }, 'B1'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#770000'\n    }\n  }, 'C1'),\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('li', {\n    style: {\n      backgroundColor: '#AA0000'\n    }\n  }, 'D1'),\n)\n//console.log(oldVnode)\n//把虚拟DOM节点挂载到root上面去\nObject(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"mount\"])(oldVnode, root)\n//DOM节点为替换成了文本节点\n//DOMDIFF 如果老节点和新的节类型不一样的话，直接把老的替换成新的\n\nsetTimeout(function () {\n  Object(_vdom__WEBPACK_IMPORTED_MODULE_0__[\"patch\"])(oldVnode, newVnode)\n}, 1000)\n\n//# sourceURL=webpack:///./src/vdom-test.js?");

/***/ }),

/***/ "./src/vdom/h.js":
/*!***********************!*\
  !*** ./src/vdom/h.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n\nconst hasOwnProperty = Object.prototype.hasOwnProperty\n\nfunction h(type, config, ...children) {\n  const props = {} //属性对象\n  let key //我已经把config中的key传给了key\n  if (config) {\n    if (config.key) {\n      key = config.key\n    }\n  }\n  //迭代config中的每一个属性\n  for (let propName in config) {\n    if (hasOwnProperty.call(config, propName) && propName != 'key') {\n      props[propName] = config[propName]\n    }\n  }\n  //type=div key=undefined\n  return Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(type, key, props, children.map((child, index) => (\n    typeof child == 'string' || typeof child == 'number' ? Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      undefined, undefined, undefined, undefined, child\n    ) : child\n  )))\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n//# sourceURL=webpack:///./src/vdom/h.js?");

/***/ }),

/***/ "./src/vdom/index.js":
/*!***************************!*\
  !*** ./src/vdom/index.js ***!
  \***************************/
/*! exports provided: h, mount, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./src/vdom/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch */ \"./src/vdom/patch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return _patch__WEBPACK_IMPORTED_MODULE_1__[\"mount\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return _patch__WEBPACK_IMPORTED_MODULE_1__[\"patch\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/vdom/index.js?");

/***/ }),

/***/ "./src/vdom/patch.js":
/*!***************************!*\
  !*** ./src/vdom/patch.js ***!
  \***************************/
/*! exports provided: mount, patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mount\", function() { return mount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"./src/vdom/vnode.js\");\n\n/**\n * 通过虚拟DOM节点创建真实的DOM节点\n */\nfunction createDOMElementFromVnode(vnode) {\n  let {\n    type,\n    children\n  } = vnode // DOM类型span div\n  if (type) {\n    // 创建真实DOM元素并挂载到vnode上的domElement\n    let domElement = vnode.domElement = document.createElement(type)\n    updateProperties(vnode)\n    if (Array.isArray(children)) {\n      children.forEach(child => domElement.appendChild(createDOMElementFromVnode(child)))\n    }\n  } else {\n    vnode.domElement = document.createTextNode(vnode.text)\n  }\n  return vnode.domElement\n}\n\n/**\n * 把一个虚拟DOM节点变成真实DOM节点挂载到容器上\n * @param {} vnode 虚拟DOM节点\n * @param {*} container 容器\n */\nfunction mount(vnode, container) {\n  let newDOMElement = createDOMElementFromVnode(vnode)\n  container.appendChild(newDOMElement)\n}\n// 比较老的虚拟DOM节点和新的虚拟DOM节点\nfunction patch(oldVnode, newVnode) { // 休息到9点05分\n  // 1.如果新的虚拟DOM节点类型type不一样，直接重建\n  if (oldVnode.type !== newVnode.type) {\n    return oldVnode.domElement.parentNode.replaceChild(createDOMElementFromVnode(newVnode), oldVnode.domElement)\n  }\n  if (typeof newVnode.text !== 'undefined') {\n    return oldVnode.domElement.textContent = newVnode.text\n  }\n\n  // 如果类型一样，要继续往下比较 1.比较属性 2比较它的儿子们\n  // path就是找出新的虚拟DOM节点和老的虚拟DOM的差异，更新当前页面上的那个真实DOM\n  let domElement = newVnode.domElement = oldVnode.domElement // 老的真实DOM节点\n  // 传入新的虚拟DOM节点和老的属性对象 更新老的真实DOM节点上的属性\n  updateProperties(newVnode, oldVnode.props)\n  let oldChildren = oldVnode.children // 老的虚拟DOM节点的儿子数组\n  let newChildren = newVnode.children // 新的虚拟DOM节点儿子数组\n  if (oldChildren.length > 0 && newChildren.length > 0) {\n    updateChildren(domElement, oldChildren, newChildren)\n  } else if (oldChildren.length > 0) { // 老的有儿子，新的没儿子\n    domElement.innerHTML = ''\n  } else if (newChildren.length > 0) { // 老的没有儿子，新的有儿子\n    for (let i = 0; i < newChildren.length; i++) {\n      domElement.appendChild(createDOMElementFromVnode(newChildren[i]))\n    }\n  }\n}\n\nfunction createKeyToIndexMap(children) {\n  let map = {}\n  for (let i = 0; i < children.length; i++) {\n    let key = children[i].key\n    if (key) {\n      map[key] = i\n    }\n  }\n  return map\n}\n\nfunction updateChildren(parentDomElement, oldChildren, newChildren) {\n  let oldStartIndex = 0,\n    oldStartVnode = oldChildren[0] // 老的开始索引和老的开始节点\n  let oldEndIndex = oldChildren.length - 1,\n    oldEndVnode = oldChildren[oldEndIndex] // 老的结束索引和老的结束节点\n\n  let newStartIndex = 0,\n    newStartVnode = newChildren[0] // 新的开始索引和新的开始节点\n  let newEndIndex = newChildren.length - 1,\n    newEndVnode = newChildren[newEndIndex] // 新的结束索引和新的结束节点\n  let oldKeyToIndexMap = createKeyToIndexMap(oldChildren)\n  // 两个队列都没有循环结束就要继续循环，如果有一个结束，就停止循环\n  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {\n    // 老的开始节点和新的开始节点进行比较\n    if (!oldStartVnode) {\n      oldStartVnode = oldChildren[++oldStartIndex]\n    } else if (!oldEndVnode) {\n      oldEndVnode = oldChildren[--oldEndIndex]\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldStartVnode, newStartVnode)) {\n      // 找到newStartVnode和oldStartVnode的的差异，并且更新到真实DOM上去oldStartVnode.domElement\n      patch(oldStartVnode, newStartVnode)\n      oldStartVnode = oldChildren[++oldStartIndex]\n      newStartVnode = newChildren[++newStartIndex]\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldEndVnode, newEndVnode)) {\n      patch(oldEndVnode, newEndVnode)\n      oldEndVnode = oldChildren[--oldEndIndex]\n      newEndVnode = newChildren[--newEndIndex]\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldEndVnode, newStartVnode)) { // 老的结束和新的开始对应的把尾部的元素移动到头部\n      patch(oldEndVnode, newStartVnode)\n      parentDomElement.insertBefore(oldEndVnode.domElement, oldStartVnode.domElement)\n      oldEndVnode = oldChildren[--oldEndIndex]\n      newStartVnode = newChildren[++newStartIndex]\n    } else if (Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"isSameNode\"])(oldStartVnode, newEndVnode)) { // 老的结束和新的开始对应的把尾部的元素移动到头部\n      patch(oldStartVnode, newEndVnode)\n      parentDomElement.insertBefore(oldStartVnode.domElement, oldEndVnode.domElement.nextSibling)\n      oldStartVnode = oldChildren[++oldStartIndex]\n      newEndVnode = newChildren[--newEndIndex]\n      // 进行DOM移动 把老的开始真实DOM移动真实DOM的尾部\n    } else {\n      let oldIndexByKey = oldKeyToIndexMap[newStartVnode.key]\n      if (oldIndexByKey == null) {\n        parentDomElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement)\n      } else {\n        let oldVnodeToMove = oldChildren[oldIndexByKey]\n        if (oldVnodeToMove.type !== newStartVnode.type) {\n          parentDomElement.insertBefore(createDOMElementFromVnode(newStartVnode), oldStartVnode.domElement)\n        } else {\n          patch(oldVnodeToMove, newStartVnode)\n          oldChildren[oldIndexByKey] = undefined\n          parentDomElement.insertBefore(oldVnodeToMove.domElement, oldStartVnode.domElement)\n        }\n      }\n      newStartVnode = newChildren[++newStartIndex]\n    }\n  }\n  if (newStartIndex <= newEndIndex) { // 是老的队列 处理完了，新的队列没处理完\n    // 我要把这个节点插入到谁的前面\n    let beforeDOMElement = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].domElement\n    for (let i = newStartIndex; i <= newEndIndex; i++) {\n      parentDomElement.insertBefore(createDOMElementFromVnode(newChildren[i]), beforeDOMElement)\n    }\n  }\n  if (oldStartIndex <= oldEndIndex) {\n    for (let i = oldStartIndex; i <= oldEndIndex; i++) {\n      parentDomElement.removeChild(oldChildren[i].domElement);\n    }\n  }\n}\n\nfunction updateProperties(vnode, oldProps = {}) {\n  let newProps = vnode.props // 新属性对象\n  let domElement = vnode.domElement // 真实DOM\n  // 先处理样式对象\n  let oldStyle = oldProps.style || {}\n  let newStyle = newProps.style || {}\n  // 如果style属性在老的样式对象里有，新的没有，需要删除。如果老的没有，新的有要添加上\n  for (let oldAttrName in oldStyle) { // oldStyle{color:'red',backgroundColor:'green'}\n    if (!newStyle[oldAttrName]) {\n      domElement.style[oldAttrName] = ''\n    }\n  }\n  // 把老的属性对象中的有，新的属性对象里没有的删除\n  for (let oldPropName in oldProps) {\n    if (!newProps[oldPropName]) {\n      delete domElement[oldPropName]\n    }\n  }\n\n  // 添加的新的属性\n  for (let newPropName in newProps) {\n    if (newPropName === 'style') {\n      let styleObject = newProps.style // 拿取新的样式对象\n      for (let newAttrName in styleObject) {\n        domElement.style[newAttrName] = styleObject[newAttrName]\n      }\n    } else {\n      // 直接 更新 直接 拿 新的属性对象中属性的值覆盖掉真实DOM的属性\n      domElement[newPropName] = newProps[newPropName]\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/vdom/patch.js?");

/***/ }),

/***/ "./src/vdom/vnode.js":
/*!***************************!*\
  !*** ./src/vdom/vnode.js ***!
  \***************************/
/*! exports provided: isSameNode, isVnode, vnode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSameNode\", function() { return isSameNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVnode\", function() { return isVnode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vnode\", function() { return vnode; });\nconst VNODE_TYPE = 'VNODE_TYPE'\n//domElement是此虚拟DOM节点对应的真实的DOM节点\n//_type=VNODE_TYPE type=标签类型div p span\nfunction isSameNode(oldVnode, newVnode) {\n  //如果说两个虚拟DOM节点key一样，并且类型一样，说明一种节点，可以进行深度比较\n  return oldVnode.key === newVnode.key && oldVnode.type === newVnode.type\n}\nfunction isVnode(vnode) {\n  return vnode && vnode._type == VNODE_TYPE\n}\nfunction vnode(type, key, props = {}, children = [], text, domElement) {\n  return {\n    _type: VNODE_TYPE, //表示这是一个虚拟DOM节点\n    type,\n    key,\n    props,\n    children,\n    text,\n    domElement\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (vnode);\n\n//# sourceURL=webpack:///./src/vdom/vnode.js?");

/***/ })

/******/ });