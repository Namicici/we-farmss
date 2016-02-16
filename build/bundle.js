/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var component = __webpack_require__(2);
	document.body.appendChild(component());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastHash;
		var upToDate = function upToDate() {
			return lastHash.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				require("./log-apply-result")(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			}).catch(function(err) {
				if(module.hot.status() in {
						abort: 1,
						fail: 1
					}) {
					console.warn("[HMR] Cannot apply update. Need to do a full reload!");
					console.warn("[HMR] " + err.stack || err.message);
					window.location.reload();
				} else {
					console.warn("[HMR] Update failed: " + err.stack || err.message);
				}
			});
		};
		var hotEmitter = require("./emitter");
		hotEmitter.on("webpackHotUpdate", function(currentHash) {
			lastHash = currentHash;
			if(!upToDate() && module.hot.status() === "idle") {
				console.log("[HMR] Checking for updates on the server...");
				check();
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function() {
	    var element = document.createElement("h1");
	    element.innerHTML = "Hello Sissy Li";
	    return element;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(0);


/***/ }
/******/ ]);