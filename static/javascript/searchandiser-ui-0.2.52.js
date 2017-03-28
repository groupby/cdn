/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["searchandiser"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var pkg_index_1 = __webpack_require__(2);
	module.exports = pkg_index_1.searchandiser;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(3);
	var searchandiser_1 = __webpack_require__(57);
	exports.Searchandiser = searchandiser_1.Searchandiser;
	__webpack_require__(219);
	var utils = __webpack_require__(60);
	exports.utils = utils;
	var groupby_api_1 = __webpack_require__(125);
	exports.BrowserBridge = groupby_api_1.BrowserBridge;
	exports.CloudBridge = groupby_api_1.CloudBridge;
	exports.FluxCapacitor = groupby_api_1.FluxCapacitor;
	exports.Query = groupby_api_1.Query;
	var sayt_1 = __webpack_require__(208);
	exports.Sayt = sayt_1.Sayt;
	var searchandiser = searchandiser_1.initSearchandiser();
	exports.searchandiser = searchandiser;
	searchandiser['version'] = ("0.2.52");


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(25).shim();
	__webpack_require__(50).shim();
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (!Array.of) {
	  __webpack_require__(5);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*! https://mths.be/array-of v0.1.0 by @mathias */
	(function () {
		'use strict';
		var defineProperty = (function () {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) { /**/ }
			return result;
		}());
		var isConstructor = function isConstructor(Constructor) {
			try {
				return !!new Constructor();
			} catch (_) {
				return false;
			}
		};
		var of = function of() {
			var items = arguments;
			var length = items.length;
			var Me = this;
			var result = isConstructor(Me) ? new Me(length) : new Array(length);
			var index = 0;
			var value;
			while (index < length) {
				value = items[index];
				if (defineProperty) {
					defineProperty(result, index, {
						'value': value,
						'writable': true,
						'enumerable': true,
						'configurable': true
					});
				} else {
					result[index] = value;
				}
				index += 1;
			}
			result.length = length;
			return result;
		};
		if (defineProperty) {
			defineProperty(Array, 'of', {
				'value': of,
				'configurable': true,
				'writable': true
			});
		} else {
			Array.of = of;
		}
	}());


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (!__webpack_require__(7)()) {
		Object.defineProperty(__webpack_require__(8), 'Symbol',
			{ value: __webpack_require__(9), configurable: true, enumerable: false,
				writable: true });
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var validTypes = { object: true, symbol: true };
	
	module.exports = function () {
		var symbol;
		if (typeof Symbol !== 'function') return false;
		symbol = Symbol('test symbol');
		try { String(symbol); } catch (e) { return false; }
	
		// Return 'true' also for polyfills
		if (!validTypes[typeof Symbol.iterator]) return false;
		if (!validTypes[typeof Symbol.toPrimitive]) return false;
		if (!validTypes[typeof Symbol.toStringTag]) return false;
	
		return true;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = new Function("return this")();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// ES2015 Symbol polyfill for environments that do not support it (or partially support it)
	
	'use strict';
	
	var d              = __webpack_require__(10)
	  , validateSymbol = __webpack_require__(23)
	
	  , create = Object.create, defineProperties = Object.defineProperties
	  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
	  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
	  , isNativeSafe;
	
	if (typeof Symbol === 'function') {
		NativeSymbol = Symbol;
		try {
			String(NativeSymbol());
			isNativeSafe = true;
		} catch (ignore) {}
	}
	
	var generateName = (function () {
		var created = create(null);
		return function (desc) {
			var postfix = 0, name, ie11BugWorkaround;
			while (created[desc + (postfix || '')]) ++postfix;
			desc += (postfix || '');
			created[desc] = true;
			name = '@@' + desc;
			defineProperty(objPrototype, name, d.gs(null, function (value) {
				// For IE11 issue see:
				// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
				//    ie11-broken-getters-on-dom-objects
				// https://github.com/medikoo/es6-symbol/issues/12
				if (ie11BugWorkaround) return;
				ie11BugWorkaround = true;
				defineProperty(this, name, d(value));
				ie11BugWorkaround = false;
			}));
			return name;
		};
	}());
	
	// Internal constructor (not one exposed) for creating Symbol instances.
	// This one is used to ensure that `someSymbol instanceof Symbol` always return false
	HiddenSymbol = function Symbol(description) {
		if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
		return SymbolPolyfill(description);
	};
	
	// Exposed `Symbol` constructor
	// (returns instances of HiddenSymbol)
	module.exports = SymbolPolyfill = function Symbol(description) {
		var symbol;
		if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
		if (isNativeSafe) return NativeSymbol(description);
		symbol = create(HiddenSymbol.prototype);
		description = (description === undefined ? '' : String(description));
		return defineProperties(symbol, {
			__description__: d('', description),
			__name__: d('', generateName(description))
		});
	};
	defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (globalSymbols[key]) return globalSymbols[key];
			return (globalSymbols[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (s) {
			var key;
			validateSymbol(s);
			for (key in globalSymbols) if (globalSymbols[key] === s) return key;
		}),
	
		// If there's native implementation of given symbol, let's fallback to it
		// to ensure proper interoperability with other native functions e.g. Array.from
		hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
		isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
			SymbolPolyfill('isConcatSpreadable')),
		iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
		match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
		replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
		search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
		species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
		split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
		toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
		toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
		unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
	});
	
	// Internal tweaks for real symbol producer
	defineProperties(HiddenSymbol.prototype, {
		constructor: d(SymbolPolyfill),
		toString: d('', function () { return this.__name__; })
	});
	
	// Proper implementation of methods exposed on Symbol.prototype
	// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
	defineProperties(SymbolPolyfill.prototype, {
		toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
		valueOf: d(function () { return validateSymbol(this); })
	});
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === 'symbol') return symbol;
		return symbol.toString();
	}));
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));
	
	// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));
	
	// Note: It's important to define `toPrimitive` as last one, as some implementations
	// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
	// And that may invoke error in definition flow:
	// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assign        = __webpack_require__(11)
	  , normalizeOpts = __webpack_require__(18)
	  , isCallable    = __webpack_require__(19)
	  , contains      = __webpack_require__(20)
	
	  , d;
	
	d = module.exports = function (dscr, value/*, options*/) {
		var c, e, w, options, desc;
		if ((arguments.length < 2) || (typeof dscr !== 'string')) {
			options = value;
			value = dscr;
			dscr = null;
		} else {
			options = arguments[2];
		}
		if (dscr == null) {
			c = w = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
			w = contains.call(dscr, 'w');
		}
	
		desc = { value: value, configurable: c, enumerable: e, writable: w };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};
	
	d.gs = function (dscr, get, set/*, options*/) {
		var c, e, options, desc;
		if (typeof dscr !== 'string') {
			options = set;
			set = get;
			get = dscr;
			dscr = null;
		} else {
			options = arguments[3];
		}
		if (get == null) {
			get = undefined;
		} else if (!isCallable(get)) {
			options = get;
			get = set = undefined;
		} else if (set == null) {
			set = undefined;
		} else if (!isCallable(set)) {
			options = set;
			set = undefined;
		}
		if (dscr == null) {
			c = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
		}
	
		desc = { get: get, set: set, configurable: c, enumerable: e };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(12)()
		? Object.assign
		: __webpack_require__(13);


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
		var assign = Object.assign, obj;
		if (typeof assign !== 'function') return false;
		obj = { foo: 'raz' };
		assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
		return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys  = __webpack_require__(14)
	  , value = __webpack_require__(17)
	
	  , max = Math.max;
	
	module.exports = function (dest, src/*, …srcn*/) {
		var error, i, l = max(arguments.length, 2), assign;
		dest = Object(value(dest));
		assign = function (key) {
			try { dest[key] = src[key]; } catch (e) {
				if (!error) error = e;
			}
		};
		for (i = 1; i < l; ++i) {
			src = arguments[i];
			keys(src).forEach(assign);
		}
		if (error !== undefined) throw error;
		return dest;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(15)()
		? Object.keys
		: __webpack_require__(16);


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function () {
		try {
			Object.keys('primitive');
			return true;
		} catch (e) { return false; }
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var keys = Object.keys;
	
	module.exports = function (object) {
		return keys(object == null ? object : Object(object));
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (value) {
		if (value == null) throw new TypeError("Cannot use null or undefined");
		return value;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var forEach = Array.prototype.forEach, create = Object.create;
	
	var process = function (src, obj) {
		var key;
		for (key in src) obj[key] = src[key];
	};
	
	module.exports = function (options/*, …options*/) {
		var result = create(null);
		forEach.call(arguments, function (options) {
			if (options == null) return;
			process(Object(options), result);
		});
		return result;
	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	// Deprecated
	
	'use strict';
	
	module.exports = function (obj) { return typeof obj === 'function'; };


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(21)()
		? String.prototype.contains
		: __webpack_require__(22);


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var str = 'razdwatrzy';
	
	module.exports = function () {
		if (typeof str.contains !== 'function') return false;
		return ((str.contains('dwa') === true) && (str.contains('foo') === false));
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	var indexOf = String.prototype.indexOf;
	
	module.exports = function (searchString/*, position*/) {
		return indexOf.call(this, searchString, arguments[1]) > -1;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(24);
	
	module.exports = function (value) {
		if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
		return value;
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (x) {
		if (!x) return false;
		if (typeof x === 'symbol') return true;
		if (!x.constructor) return false;
		if (x.constructor.name !== 'Symbol') return false;
		return (x[x.constructor.toStringTag] === 'Symbol');
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	
	var implementation = __webpack_require__(30);
	var getPolyfill = __webpack_require__(48);
	var shim = __webpack_require__(49);
	
	// eslint-disable-next-line no-unused-vars
	var boundFromShim = function from(array) {
	    // eslint-disable-next-line no-invalid-this
		return implementation.apply(this || Array, arguments);
	};
	
	define(boundFromShim, {
		'getPolyfill': getPolyfill,
		'implementation': implementation,
		'shim': shim
	});
	
	module.exports = boundFromShim;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var keys = __webpack_require__(27);
	var foreach = __webpack_require__(29);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	var toStr = Object.prototype.toString;
	
	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();
	
	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};
	
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	
	module.exports = defineProperties;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(28);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};
	
	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];
	
		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}
	
		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}
	
		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}
	
		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	
			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
	
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	
	module.exports = keysShim;


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};
	


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ES = __webpack_require__(31);
	var supportsDescriptors = __webpack_require__(26).supportsDescriptors;
	
	/*! https://mths.be/array-from v0.2.0 by @mathias */
	module.exports = function from(arrayLike) {
		var defineProperty = supportsDescriptors ? Object.defineProperty : function put(object, key, descriptor) {
			object[key] = descriptor.value;
		};
		var C = this;
		if (arrayLike === null || typeof arrayLike === 'undefined') {
			throw new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');
		}
		var items = ES.ToObject(arrayLike);
	
		var mapFn, T;
		if (typeof arguments[1] !== 'undefined') {
			mapFn = arguments[1];
			if (!ES.IsCallable(mapFn)) {
				throw new TypeError('When provided, the second argument to `Array.from` must be a function');
			}
			if (arguments.length > 2) {
				T = arguments[2];
			}
		}
	
		var len = ES.ToLength(items.length);
		var A = ES.IsCallable(C) ? ES.ToObject(new C(len)) : new Array(len);
		var k = 0;
		var kValue, mappedValue;
		while (k < len) {
			kValue = items[k];
			if (mapFn) {
				mappedValue = typeof T === 'undefined' ? mapFn(kValue, k) : ES.Call(mapFn, T, [kValue, k]);
			} else {
				mappedValue = kValue;
			}
			defineProperty(A, k, {
				'configurable': true,
				'enumerable': true,
				'value': mappedValue,
				'writable': true
			});
			k += 1;
		}
		A.length = len;
		return A;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;
	
	var $isNaN = __webpack_require__(32);
	var $isFinite = __webpack_require__(33);
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
	
	var assign = __webpack_require__(34);
	var sign = __webpack_require__(35);
	var mod = __webpack_require__(36);
	var isPrimitive = __webpack_require__(37);
	var toPrimitive = __webpack_require__(38);
	var parseInteger = parseInt;
	var bind = __webpack_require__(43);
	var strSlice = bind.call(Function.call, String.prototype.slice);
	var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);
	
	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = [
		'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
		'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
		'\u2029\uFEFF'
	].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};
	
	var ES5 = __webpack_require__(45);
	
	var hasRegExpMatcher = __webpack_require__(47);
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
			if (typeof value === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a number');
			}
			if (typeof value === 'string') {
				if (isBinary(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 2));
				} else if (isOctal(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 8));
				} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
					return NaN;
				} else {
					var trimmed = trim(value);
					if (trimmed !== value) {
						return this.ToNumber(trimmed);
					}
				}
			}
			return Number(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
		// ToInteger: ES5.ToNumber,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
		// ToInt32: ES5.ToInt32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
		// ToUint32: ES5.ToUint32,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
		ToInt16: function ToInt16(argument) {
			var int16bit = this.ToUint16(argument);
			return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
		// ToUint16: ES5.ToUint16,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
		ToInt8: function ToInt8(argument) {
			var int8bit = this.ToUint8(argument);
			return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
		ToUint8: function ToUint8(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x100);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) { return 0; }
			if (number >= 0xFF) { return 0xFF; }
			var f = Math.floor(argument);
			if (f + 0.5 < number) { return f + 1; }
			if (number < f + 0.5) { return f; }
			if (f % 2 !== 0) { return f + 1; }
			return f;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a string');
			}
			return String(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return Object(value);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, String);
			return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) { return 0; } // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
			return len;
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr.call(argument) !== '[object String]') {
				throw new TypeError('must be a string');
			}
			if (argument === '-0') { return -0; }
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) { return n; }
			return void 0;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: Array.isArray || function IsArray(argument) {
			return toStr.call(argument) === '[object Array]';
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: function IsExtensible(obj) {
			if (!Object.preventExtensions) { return true; }
			if (isPrimitive(obj)) {
				return false;
			}
			return Object.isExtensible(obj);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = Math.abs(argument);
			return Math.floor(abs) === abs;
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[Symbol.match];
				if (typeof isRegExp !== 'undefined') {
					return ES5.ToBoolean(isRegExp);
				}
			}
			return hasRegExpMatcher(argument);
		},
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
		// SameValue: ES5.SameValue,
	
		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
		SameValueZero: function SameValueZero(x, y) {
			return (x === y) || ($isNaN(x) && $isNaN(y));
		},
	
		/**
		 * 7.3.2 GetV (V, P)
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let O be ToObject(V).
		 * 3. ReturnIfAbrupt(O).
		 * 4. Return O.[[Get]](P, V).
		 */
		GetV: function GetV(V, P) {
			// 7.3.2.1
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.2.2-3
			var O = this.ToObject(V);
	
			// 7.3.2.4
			return O[P];
		},
	
		/**
		 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
		 * 1. Assert: IsPropertyKey(P) is true.
		 * 2. Let func be GetV(O, P).
		 * 3. ReturnIfAbrupt(func).
		 * 4. If func is either undefined or null, return undefined.
		 * 5. If IsCallable(func) is false, throw a TypeError exception.
		 * 6. Return func.
		 */
		GetMethod: function GetMethod(O, P) {
			// 7.3.9.1
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
	
			// 7.3.9.2
			var func = this.GetV(O, P);
	
			// 7.3.9.4
			if (func == null) {
				return undefined;
			}
	
			// 7.3.9.5
			if (!this.IsCallable(func)) {
				throw new TypeError(P + 'is not a function');
			}
	
			// 7.3.9.6
			return func;
		},
	
		/**
		 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
		 * 1. Assert: Type(O) is Object.
		 * 2. Assert: IsPropertyKey(P) is true.
		 * 3. Return O.[[Get]](P, O).
		 */
		Get: function Get(O, P) {
			// 7.3.1.1
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			// 7.3.1.2
			if (!this.IsPropertyKey(P)) {
				throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			// 7.3.1.3
			return O[P];
		},
	
		Type: function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			return ES5.Type(x);
		},
	
		// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new TypeError('no constructor found');
		}
	});
	
	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible
	
	module.exports = ES6;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	
	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 34 */
/***/ function(module, exports) {

	var has = Object.prototype.hasOwnProperty;
	module.exports = Object.assign || function assign(target, source) {
		for (var key in source) {
			if (has.call(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	
	var isPrimitive = __webpack_require__(39);
	var isCallable = __webpack_require__(40);
	var isDate = __webpack_require__(41);
	var isSymbol = __webpack_require__(42);
	
	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
			throw new TypeError('hint must be "string" or "number"');
		}
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};
	
	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
			}
			return func;
		}
	};
	
	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (PreferredType === String) {
				hint = 'string';
			} else if (PreferredType === Number) {
				hint = 'number';
			}
		}
	
		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				exoticToPrim = GetMethod(input, Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
	};


/***/ },
/* 39 */
37,
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	var fnToStr = Function.prototype.toString;
	
	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};
	
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	
	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
	
	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(44);
	
	module.exports = Function.prototype.bind || implementation;


/***/ },
/* 44 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $isNaN = __webpack_require__(32);
	var $isFinite = __webpack_require__(33);
	
	var sign = __webpack_require__(35);
	var mod = __webpack_require__(36);
	
	var IsCallable = __webpack_require__(40);
	var toPrimitive = __webpack_require__(46);
	
	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,
	
		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},
	
		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		}
	};
	
	module.exports = ES5;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toStr = Object.prototype.toString;
	
	var isPrimitive = __webpack_require__(39);
	
	var isCallable = __webpack_require__(40);
	
	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);
	
			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};
	
	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	var regexExec = RegExp.prototype.exec;
	var tryRegexExec = function tryRegexExec(value) {
		try {
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	
	module.exports = function isRegex(value) {
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ES = __webpack_require__(31);
	var implementation = __webpack_require__(30);
	
	var tryCall = function (fn) {
		try {
			fn();
			return true;
		} catch (e) {
			return false;
		}
	};
	
	module.exports = function getPolyfill() {
		var implemented = ES.IsCallable(Array.from)
			&& tryCall(function () { Array.from({ 'length': -Infinity }); })
			&& !tryCall(function () { Array.from([], undefined); });
	
		return implemented ? Array.from : implementation;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var getPolyfill = __webpack_require__(48);
	
	module.exports = function shimArrayFrom() {
		var polyfill = getPolyfill();
	
		define(Array, { 'from': polyfill }, {
			'from': function () {
				return Array.from !== polyfill;
			}
		});
	
		return polyfill;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var ES = __webpack_require__(31);
	
	var implementation = __webpack_require__(51);
	var getPolyfill = __webpack_require__(52);
	var polyfill = getPolyfill();
	var shim = __webpack_require__(53);
	
	var slice = Array.prototype.slice;
	
	/* eslint-disable no-unused-vars */
	var boundIncludesShim = function includes(array, searchElement) {
	/* eslint-enable no-unused-vars */
		ES.RequireObjectCoercible(array);
		return polyfill.apply(array, slice.call(arguments, 1));
	};
	define(boundIncludesShim, {
		implementation: implementation,
		getPolyfill: getPolyfill,
		shim: shim
	});
	
	module.exports = boundIncludesShim;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var ES = __webpack_require__(31);
	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	var $isFinite = Number.isFinite || function (n) { return typeof n === 'number' && global.isFinite(n); };
	var indexOf = Array.prototype.indexOf;
	
	module.exports = function includes(searchElement) {
		var fromIndex = arguments.length > 1 ? ES.ToInteger(arguments[1]) : 0;
		if (indexOf && !$isNaN(searchElement) && $isFinite(fromIndex) && typeof searchElement !== 'undefined') {
			return indexOf.apply(this, arguments) > -1;
		}
	
		var O = ES.ToObject(this);
		var length = ES.ToLength(O.length);
		if (length === 0) {
			return false;
		}
		var k = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
		while (k < length) {
			if (ES.SameValueZero(searchElement, O[k])) {
				return true;
			}
			k += 1;
		}
		return false;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var implementation = __webpack_require__(51);
	
	module.exports = function getPolyfill() {
		return Array.prototype.includes || implementation;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var getPolyfill = __webpack_require__(52);
	
	module.exports = function shimArrayPrototypeIncludes() {
		var polyfill = getPolyfill();
		if (Array.prototype.includes !== polyfill) {
			define(Array.prototype, { includes: polyfill });
		}
		return polyfill;
	};


/***/ },
/* 54 */
/***/ function(module, exports) {

	/*! http://mths.be/repeat v0.2.0 by @mathias */
	if (!String.prototype.repeat) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var repeat = function(count) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				// `ToInteger`
				var n = count ? Number(count) : 0;
				if (n != n) { // better `isNaN`
					n = 0;
				}
				// Account for out-of-bounds indices
				if (n < 0 || n == Infinity) {
					throw RangeError();
				}
				var result = '';
				while (n) {
					if (n % 2 == 1) {
						result += string;
					}
					if (n > 1) {
						string += string;
					}
					n >>= 1;
				}
				return result;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'repeat', {
					'value': repeat,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.repeat = repeat;
			}
		}());
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	/*! http://mths.be/startswith v0.2.0 by @mathias */
	if (!String.prototype.startsWith) {
		(function() {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
			var defineProperty = (function() {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch(error) {}
				return result;
			}());
			var toString = {}.toString;
			var startsWith = function(search) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				if (search && toString.call(search) == '[object RegExp]') {
					throw TypeError();
				}
				var stringLength = string.length;
				var searchString = String(search);
				var searchLength = searchString.length;
				var position = arguments.length > 1 ? arguments[1] : undefined;
				// `ToInteger`
				var pos = position ? Number(position) : 0;
				if (pos != pos) { // better `isNaN`
					pos = 0;
				}
				var start = Math.min(Math.max(pos, 0), stringLength);
				// Avoid the `indexOf` call if no match is possible
				if (searchLength + start > stringLength) {
					return false;
				}
				var index = -1;
				while (++index < searchLength) {
					if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
						return false;
					}
				}
				return true;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'startsWith', {
					'value': startsWith,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.startsWith = startsWith;
			}
		}());
	}


/***/ },
/* 56 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {function __assignFn(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s)
	            if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	    }
	    return t;
	}
	function __extendsFn(d, b) {
	    for (var p in b)
	        if (b.hasOwnProperty(p))
	            d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	function __decorateFn(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __metadataFn(k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(k, v);
	}
	function __paramFn(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __awaiterFn(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator.throw(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	}
	// hook global helpers
	(function (__global) {
	    __global.__assign = (__global && __global.__assign) || Object.assign || __assignFn;
	    __global.__extends = (__global && __global.__extends) || __extendsFn;
	    __global.__decorate = (__global && __global.__decorate) || __decorateFn;
	    __global.__metadata = (__global && __global.__metadata) || __metadataFn;
	    __global.__param = (__global && __global.__param) || __paramFn;
	    __global.__awaiter = (__global && __global.__awaiter) || __awaiterFn;
	})(typeof window !== "undefined" ? window :
	    typeof WorkerGlobalScope !== "undefined" ? self :
	        typeof global !== "undefined" ? global :
	            Function("return this;")());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var init_1 = __webpack_require__(58);
	var configuration_1 = __webpack_require__(205);
	var tag_1 = __webpack_require__(206);
	var groupby_api_1 = __webpack_require__(125);
	var riot = __webpack_require__(217);
	// tslint:disable-next-line:max-line-length
	exports.CONFIGURATION_MASK = '{collection,area,language,pageSize,sort,fields,customUrlParams,pruneRefinements,disableAutocorrection,visitorId,sessionId}';
	function initSearchandiser() {
	    return function configure(rawConfig) {
	        if (rawConfig === void 0) { rawConfig = {}; }
	        var config = new configuration_1.Configuration(rawConfig).apply();
	        var flux = new groupby_api_1.FluxCapacitor(config.customerId, config, exports.CONFIGURATION_MASK);
	        Object.assign(flux, groupby_api_1.Events);
	        var services = init_1.initServices(flux, config);
	        riot.mixin(tag_1.MixinFlux(flux, config, services));
	        Object.assign(configure, { flux: flux, services: services, config: config }, new Searchandiser()['__proto__']);
	        configure.init();
	        // tslint:disable-next-line:no-console
	        console.log("StoreFront v" + configure['version'] + " Loaded \uD83C\uDFEC");
	    };
	}
	exports.initSearchandiser = initSearchandiser;
	var Searchandiser = (function () {
	    function Searchandiser() {
	    }
	    Searchandiser.prototype.init = function () {
	        if (this.config.initialSearch) {
	            this.search();
	        }
	    };
	    Searchandiser.prototype.attach = function (tagName, selectorOrOpts, options) {
	        var tag;
	        if (typeof selectorOrOpts === 'string') {
	            tag = this.cssAttach(tagName, selectorOrOpts, options);
	        }
	        else {
	            tag = this.simpleAttach(tagName, selectorOrOpts);
	        }
	        if (tag) {
	            return tag.length === 1 ? tag[0] : tag;
	        }
	        else {
	            return null;
	        }
	    };
	    Searchandiser.prototype.compile = function () {
	        riot.compile(function () { return null; });
	    };
	    Searchandiser.prototype.search = function (query) {
	        var _this = this;
	        return this.flux.search(query)
	            .then(function () { return _this.flux.emit(groupby_api_1.Events.PAGE_CHANGED, { pageNumber: 1, finalPage: _this.flux.page.finalPage }); });
	    };
	    Searchandiser.prototype.simpleAttach = function (tagName, options) {
	        if (options === void 0) { options = {}; }
	        return riot.mount(this.riotTagName(tagName), options);
	    };
	    Searchandiser.prototype.cssAttach = function (tagName, cssSelector, options) {
	        if (cssSelector === void 0) { cssSelector = "." + tagName; }
	        if (options === void 0) { options = {}; }
	        return riot.mount(cssSelector, this.riotTagName(tagName), options);
	    };
	    Searchandiser.prototype.riotTagName = function (tagName) {
	        return tagName.startsWith('gb-') || !this.config.simpleAttach ? tagName : "gb-" + tagName;
	    };
	    return Searchandiser;
	}());
	exports.Searchandiser = Searchandiser;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(59);
	var filter_1 = __webpack_require__(171);
	var redirect_1 = __webpack_require__(172);
	var tracker_1 = __webpack_require__(173);
	var url_1 = __webpack_require__(201);
	var SERVICES = {
	    redirect: redirect_1.Redirect,
	    tracker: tracker_1.Tracker,
	    url: url_1.Url
	};
	var CORE_SERVICES = {
	    collections: collections_1.Collections,
	    filter: filter_1.Filter
	};
	function lazyMixin(service) {
	    Object.assign(service, {
	        registered: [],
	        register: function (tag) {
	            if (!this.registered.length) {
	                this.lazyInit();
	            }
	            this.registered.push(tag);
	        },
	        unregister: function (tag) {
	            var index = this.registered.findIndex(function (registered) { return registered === tag; });
	            if (index >= 0) {
	                this.registered.splice(index, 1);
	            }
	        }
	    });
	}
	exports.lazyMixin = lazyMixin;
	function initServices(flux, config) {
	    var servicesConstructors = Object.assign({}, SERVICES, config.services || {}, CORE_SERVICES);
	    var services = {};
	    for (var _i = 0, _a = Object.keys(servicesConstructors); _i < _a.length; _i++) {
	        var key = _a[_i];
	        var Service = servicesConstructors[key]; // tslint:disable-line:variable-name
	        if (Service) {
	            services[key] = new Service(flux, config, services);
	        }
	    }
	    startServices(services);
	    return services;
	}
	exports.initServices = initServices;
	function startServices(services) {
	    for (var _i = 0, _a = Object.keys(services); _i < _a.length; _i++) {
	        var key = _a[_i];
	        if (services[key]) {
	            services[key].init();
	        }
	    }
	}
	exports.startServices = startServices;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var groupby_api_1 = __webpack_require__(125);
	exports.COLLECTIONS_UPDATED_EVENT = 'collections_updated';
	var Collections = (function () {
	    function Collections(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        this.counts = {};
	        var collectionsConfig = common_1.getPath(config, 'tags.collections') || {};
	        var items = collectionsConfig.items || [];
	        this.fetchCounts = common_1.unless(collectionsConfig.showCounts, true);
	        this.collections = this.isLabeled(items) ? items.map(function (item) { return item.value; }) : items;
	        this._config = { items: items };
	    }
	    Collections.prototype.init = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.QUERY_CHANGED, function (query) { return _this.updateCollectionCounts(query); });
	        this.flux.on(groupby_api_1.Events.RESULTS, function (results) { return _this.updateSelectedCollectionCount(results); });
	        this.updateCollectionCounts();
	    };
	    Collections.prototype.updateCollectionCounts = function (query) {
	        var _this = this;
	        if (query === void 0) { query = ''; }
	        if (this.fetchCounts) {
	            if (this.inProgress) {
	                this.inProgress.cancelled = true;
	            }
	            var searches = this.collections
	                .filter(function (collection) { return !_this.isSelected(collection); })
	                .map(function (collection) { return _this.flux.bridge
	                .search(Object.assign(_this.flux.query.raw, { query: query, collection: collection, refinements: [], pageSize: 0, fields: '' }))
	                .then(function (results) { return ({ results: results, collection: collection }); }); });
	            var promises_1 = this.inProgress = Promise.all(searches);
	            return promises_1.then(this.extractCounts)
	                .then(function (counts) {
	                if (!promises_1.cancelled) {
	                    Object.assign(_this.counts, counts);
	                    _this.flux.emit(exports.COLLECTIONS_UPDATED_EVENT, _this.counts);
	                }
	            });
	        }
	    };
	    Collections.prototype.extractCounts = function (res) {
	        return res.reduce(function (counts, _a) {
	            var results = _a.results, collection = _a.collection;
	            return Object.assign(counts, (_b = {}, _b[collection] = results.totalRecordCount, _b));
	            var _b;
	        }, {});
	    };
	    Collections.prototype.updateSelectedCollectionCount = function (res) {
	        Object.assign(this.counts, (_a = {}, _a[this.selectedCollection] = res.totalRecordCount, _a));
	        this.flux.emit(exports.COLLECTIONS_UPDATED_EVENT, this.counts);
	        var _a;
	    };
	    Collections.prototype.isSelected = function (collection) {
	        return collection === this.selectedCollection;
	    };
	    Collections.prototype.isLabeled = function (items) {
	        return items.length !== 0 && typeof items[0] === 'object';
	    };
	    Object.defineProperty(Collections.prototype, "selectedCollection", {
	        get: function () {
	            return common_1.getPath(this.flux, 'query.raw.collection') || this.config.collection;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Collections;
	}());
	exports.Collections = Collections;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var clone = __webpack_require__(61);
	exports.clone = clone;
	var debounce = __webpack_require__(66);
	exports.debounce = debounce;
	var queryString = __webpack_require__(68);
	var filterObject = __webpack_require__(71);
	var oget = __webpack_require__(124);
	exports.LOCATION = {
	    href: function () { return window.location.href; },
	    setSearch: function (search) { return window.location.search = search; },
	    getSearch: function () { return window.location.search; },
	    pathname: function () { return window.location.pathname; },
	    replace: function (url) { return window.location.replace(url); },
	    assign: function (url) { return window.location.assign(url); }
	};
	exports.WINDOW = {
	    addEventListener: function (event, cb) { return window.addEventListener(event, cb); },
	    Image: function () { return new Image(); }
	};
	function findSearchBox() {
	    return oget(findTag('gb-query'), '_tag.searchBox');
	}
	exports.findSearchBox = findSearchBox;
	function findTag(tagName) {
	    return (document.querySelector(tagName)
	        || document.querySelector("[data-is=\"" + tagName + "\"]"));
	}
	exports.findTag = findTag;
	function toRefinement(ref, nav) {
	    return Object.assign({}, filterObject(ref, '{type,value,low,high}'), { navigationName: nav.name });
	}
	exports.toRefinement = toRefinement;
	function displayRefinement(ref) {
	    return ref.type === 'Value' ? ref.value : ref.low + " - " + ref.high;
	}
	exports.displayRefinement = displayRefinement;
	function refinementMatches(lhs, rhs) {
	    if (lhs.type === rhs.type) {
	        if (lhs.type === 'Value') {
	            return lhs.value === rhs.value;
	        }
	        else {
	            return lhs.low === rhs.low && lhs.high === rhs.high;
	        }
	    }
	    else {
	        return false;
	    }
	}
	exports.refinementMatches = refinementMatches;
	function checkNested(obj) {
	    var keys = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        keys[_i - 1] = arguments[_i];
	    }
	    return Array.prototype.slice.call(arguments, 1)
	        .reduce(function (res, arg) {
	        if (!obj || !obj.hasOwnProperty(arg))
	            return false;
	        obj = obj[arg];
	        return res;
	    }, true);
	}
	exports.checkNested = checkNested;
	function getParam(param) {
	    return queryString.parse(exports.LOCATION.getSearch())[param] || null;
	}
	exports.getParam = getParam;
	function unless(obj) {
	    var defaultObjs = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        defaultObjs[_i - 1] = arguments[_i];
	    }
	    return obj !== undefined ? obj : unless.apply(void 0, [defaultObjs.splice(0, 1)[0]].concat(defaultObjs));
	}
	exports.unless = unless;
	function getPath(obj, path) {
	    if (path === void 0) { path = ''; }
	    return oget(obj, path);
	}
	exports.getPath = getPath;
	/**
	 * Example:
	 * ({x: 3, y: 4, h: 8}, {z: 'x', i: 'h'}) -> {z: 3, i: 8}
	 *
	 * N.B. It removes keys that do not appear in the mapping
	 */
	function remap(obj, mapping) {
	    if (mapping) {
	        return Object.keys(mapping).reduce(function (acc, key) {
	            var value = getPath(obj, mapping[key]);
	            if (value) {
	                return Object.assign(acc, (_a = {}, _a[key] = value, _a));
	            }
	            else {
	                return acc;
	            }
	            var _a;
	        }, {});
	    }
	    else {
	        return obj;
	    }
	}
	exports.remap = remap;
	function checkBooleanAttr(attribute, opts, defaultValue) {
	    if (defaultValue === void 0) { defaultValue = false; }
	    if (typeof opts === 'object' && attribute in opts) {
	        return opts[attribute] != 'false' && opts[attribute] !== false; // tslint:disable-line:triple-equals
	    }
	    else {
	        return defaultValue;
	    }
	}
	exports.checkBooleanAttr = checkBooleanAttr;
	function checkNumericAttr(attribute, opts, defaultValue) {
	    if (typeof opts === 'object' && attribute in opts) {
	        return opts[attribute];
	    }
	    else {
	        return defaultValue;
	    }
	}
	exports.checkNumericAttr = checkNumericAttr;
	function scopeCss(tag, selector) {
	    return tag + " " + selector + ", [data-is=\"" + tag + "\"] " + selector;
	}
	exports.scopeCss = scopeCss;
	function collectServiceConfigs(tag, services) {
	    return services.reduce(function (configs, service) {
	        var config = oget(tag.services, service + "._config");
	        if (config) {
	            configs.push(config);
	        }
	        return configs;
	    }, []);
	}
	exports.collectServiceConfigs = collectServiceConfigs;
	function coerceAttributes(opts, types) {
	    return Object.keys(opts)
	        .reduce(function (coerced, key) {
	        switch (types[key]) {
	            case 'boolean':
	                return Object.assign(coerced, (_a = {}, _a[key] = checkBooleanAttr(key, opts), _a));
	            default:
	                return Object.assign(coerced, (_b = {}, _b[key] = opts[key], _b));
	        }
	        var _a, _b;
	    }, {});
	}
	exports.coerceAttributes = coerceAttributes;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var clone = (function() {
	'use strict';
	
	/**
	 * Clones (copies) an Object using deep copying.
	 *
	 * This function supports circular references by default, but if you are certain
	 * there are no circular references in your object, you can save some CPU time
	 * by calling clone(obj, false).
	 *
	 * Caution: if `circular` is false and `parent` contains circular references,
	 * your program may enter an infinite loop and crash.
	 *
	 * @param `parent` - the object to be cloned
	 * @param `circular` - set to true if the object to be cloned may contain
	 *    circular references. (optional - true by default)
	 * @param `depth` - set to a number if the object is only to be cloned to
	 *    a particular depth. (optional - defaults to Infinity)
	 * @param `prototype` - sets the prototype to be used when cloning an object.
	 *    (optional - defaults to parent prototype).
	*/
	function clone(parent, circular, depth, prototype) {
	  var filter;
	  if (typeof circular === 'object') {
	    depth = circular.depth;
	    prototype = circular.prototype;
	    filter = circular.filter;
	    circular = circular.circular
	  }
	  // maintain two arrays for circular references, where corresponding parents
	  // and children have the same index
	  var allParents = [];
	  var allChildren = [];
	
	  var useBuffer = typeof Buffer != 'undefined';
	
	  if (typeof circular == 'undefined')
	    circular = true;
	
	  if (typeof depth == 'undefined')
	    depth = Infinity;
	
	  // recurse this function so we don't reset allParents and allChildren
	  function _clone(parent, depth) {
	    // cloning null always returns null
	    if (parent === null)
	      return null;
	
	    if (depth == 0)
	      return parent;
	
	    var child;
	    var proto;
	    if (typeof parent != 'object') {
	      return parent;
	    }
	
	    if (clone.__isArray(parent)) {
	      child = [];
	    } else if (clone.__isRegExp(parent)) {
	      child = new RegExp(parent.source, __getRegExpFlags(parent));
	      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	    } else if (clone.__isDate(parent)) {
	      child = new Date(parent.getTime());
	    } else if (useBuffer && Buffer.isBuffer(parent)) {
	      child = new Buffer(parent.length);
	      parent.copy(child);
	      return child;
	    } else {
	      if (typeof prototype == 'undefined') {
	        proto = Object.getPrototypeOf(parent);
	        child = Object.create(proto);
	      }
	      else {
	        child = Object.create(prototype);
	        proto = prototype;
	      }
	    }
	
	    if (circular) {
	      var index = allParents.indexOf(parent);
	
	      if (index != -1) {
	        return allChildren[index];
	      }
	      allParents.push(parent);
	      allChildren.push(child);
	    }
	
	    for (var i in parent) {
	      var attrs;
	      if (proto) {
	        attrs = Object.getOwnPropertyDescriptor(proto, i);
	      }
	
	      if (attrs && attrs.set == null) {
	        continue;
	      }
	      child[i] = _clone(parent[i], depth - 1);
	    }
	
	    return child;
	  }
	
	  return _clone(parent, depth);
	}
	
	/**
	 * Simple flat clone using prototype, accepts only objects, usefull for property
	 * override on FLAT configuration object (no nested props).
	 *
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 */
	clone.clonePrototype = function clonePrototype(parent) {
	  if (parent === null)
	    return null;
	
	  var c = function () {};
	  c.prototype = parent;
	  return new c();
	};
	
	// private utility functions
	
	function __objToStr(o) {
	  return Object.prototype.toString.call(o);
	};
	clone.__objToStr = __objToStr;
	
	function __isDate(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Date]';
	};
	clone.__isDate = __isDate;
	
	function __isArray(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Array]';
	};
	clone.__isArray = __isArray;
	
	function __isRegExp(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
	};
	clone.__isRegExp = __isRegExp;
	
	function __getRegExpFlags(re) {
	  var flags = '';
	  if (re.global) flags += 'g';
	  if (re.ignoreCase) flags += 'i';
	  if (re.multiline) flags += 'm';
	  return flags;
	};
	clone.__getRegExpFlags = __getRegExpFlags;
	
	return clone;
	})();
	
	if (typeof module === 'object' && module.exports) {
	  module.exports = clone;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62).Buffer))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(63)
	var ieee754 = __webpack_require__(64)
	var isArray = __webpack_require__(65)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 65 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var now = __webpack_require__(67);
	
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */
	
	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;
	
	  function later() {
	    var last = now() - timestamp;
	
	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = Date.now || now
	
	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(69);
	var objectAssign = __webpack_require__(70);
	
	function encoderForArrayFormat(opts) {
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, index) {
					return value === null ? [
						encode(key, opts),
						'[',
						index,
						']'
					].join('') : [
						encode(key, opts),
						'[',
						encode(index, opts),
						']=',
						encode(value, opts)
					].join('');
				};
	
			case 'bracket':
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'[]=',
						encode(value, opts)
					].join('');
				};
	
			default:
				return function (key, value) {
					return value === null ? encode(key, opts) : [
						encode(key, opts),
						'=',
						encode(value, opts)
					].join('');
				};
		}
	}
	
	function parserForArrayFormat(opts) {
		var result;
	
		switch (opts.arrayFormat) {
			case 'index':
				return function (key, value, accumulator) {
					result = /\[(\d*)]$/.exec(key);
	
					key = key.replace(/\[\d*]$/, '');
	
					if (!result) {
						accumulator[key] = value;
						return;
					}
	
					if (accumulator[key] === undefined) {
						accumulator[key] = {};
					}
	
					accumulator[key][result[1]] = value;
				};
	
			case 'bracket':
				return function (key, value, accumulator) {
					result = /(\[])$/.exec(key);
	
					key = key.replace(/\[]$/, '');
	
					if (!result || accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}
	
					accumulator[key] = [].concat(accumulator[key], value);
				};
	
			default:
				return function (key, value, accumulator) {
					if (accumulator[key] === undefined) {
						accumulator[key] = value;
						return;
					}
	
					accumulator[key] = [].concat(accumulator[key], value);
				};
		}
	}
	
	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}
	
		return value;
	}
	
	function keysSorter(input) {
		if (Array.isArray(input)) {
			return input.sort();
		} else if (typeof input === 'object') {
			return keysSorter(Object.keys(input)).sort(function (a, b) {
				return Number(a) - Number(b);
			}).map(function (key) {
				return input[key];
			});
		}
	
		return input;
	}
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str, opts) {
		opts = objectAssign({arrayFormat: 'none'}, opts);
	
		var formatter = parserForArrayFormat(opts);
	
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);
	
		if (typeof str !== 'string') {
			return ret;
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return ret;
		}
	
		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			formatter(decodeURIComponent(key), val, ret);
		});
	
		return Object.keys(ret).sort().reduce(function (result, key) {
			var val = ret[key];
			if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
				// Sort object keys, not values
				result[key] = keysSorter(val);
			} else {
				result[key] = val;
			}
	
			return result;
		}, Object.create(null));
	};
	
	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true,
			arrayFormat: 'none'
		};
	
		opts = objectAssign(defaults, opts);
	
		var formatter = encoderForArrayFormat(opts);
	
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return encode(key, opts);
			}
	
			if (Array.isArray(val)) {
				var result = [];
	
				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}
	
					result.push(formatter(key, val2, result.length));
				});
	
				return result.join('&');
			}
	
			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 70 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var typeOf = __webpack_require__(72);
	var filterKeys = __webpack_require__(74);
	var filterValues = __webpack_require__(117);
	var pick = __webpack_require__(122);
	var extend = __webpack_require__(123);
	
	module.exports = function filterObject(val, patterns, options) {
	  if (!val || typeof val !== 'object') {
	    throw new Error('filter-object expects an object');
	  }
	
	  if (patterns == null) return val;
	
	  if (typeOf(patterns) === 'function') {
	    return filterValues(val, patterns, options);
	  }
	
	  var keys = filterKeys(val, patterns, options);
	  return pick(val, keys);
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var isBuffer = __webpack_require__(73);
	var toString = Object.prototype.toString;
	
	/**
	 * Get the native `typeof` a value.
	 *
	 * @param  {*} `val`
	 * @return {*} Native javascript type
	 */
	
	module.exports = function kindOf(val) {
	  // primitivies
	  if (typeof val === 'undefined') {
	    return 'undefined';
	  }
	  if (val === null) {
	    return 'null';
	  }
	  if (val === true || val === false || val instanceof Boolean) {
	    return 'boolean';
	  }
	  if (typeof val === 'string' || val instanceof String) {
	    return 'string';
	  }
	  if (typeof val === 'number' || val instanceof Number) {
	    return 'number';
	  }
	
	  // functions
	  if (typeof val === 'function' || val instanceof Function) {
	    return 'function';
	  }
	
	  // array
	  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
	    return 'array';
	  }
	
	  // check for instances of RegExp and Date before calling `toString`
	  if (val instanceof RegExp) {
	    return 'regexp';
	  }
	  if (val instanceof Date) {
	    return 'date';
	  }
	
	  // other objects
	  var type = toString.call(val);
	
	  if (type === '[object RegExp]') {
	    return 'regexp';
	  }
	  if (type === '[object Date]') {
	    return 'date';
	  }
	  if (type === '[object Arguments]') {
	    return 'arguments';
	  }
	
	  // buffer
	  if (typeof Buffer !== 'undefined' && isBuffer(val)) {
	    return 'buffer';
	  }
	
	  // es6: Map, WeakMap, Set, WeakSet
	  if (type === '[object Set]') {
	    return 'set';
	  }
	  if (type === '[object WeakSet]') {
	    return 'weakset';
	  }
	  if (type === '[object Map]') {
	    return 'map';
	  }
	  if (type === '[object WeakMap]') {
	    return 'weakmap';
	  }
	  if (type === '[object Symbol]') {
	    return 'symbol';
	  }
	
	  // must be a plain object
	  return 'object';
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62).Buffer))

/***/ },
/* 73 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mm = __webpack_require__(75);
	
	module.exports = function filterKeys(o, patterns, options) {
	  if (o == null) {
	    throw new Error('filter-keys expects an object');
	  }
	
	  var keys = Object.keys(o);
	  if (!patterns || arguments.length === 1) {
	    return keys;
	  }
	
	  return mm(keys, patterns, options);
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * micromatch <https://github.com/jonschlinkert/micromatch>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var expand = __webpack_require__(76);
	var utils = __webpack_require__(77);
	
	/**
	 * The main function. Pass an array of filepaths,
	 * and a string or array of glob patterns
	 *
	 * @param  {Array|String} `files`
	 * @param  {Array|String} `patterns`
	 * @param  {Object} `opts`
	 * @return {Array} Array of matches
	 */
	
	function micromatch(files, patterns, opts) {
	  if (!files || !patterns) return [];
	  opts = opts || {};
	
	  if (typeof opts.cache === 'undefined') {
	    opts.cache = true;
	  }
	
	  if (!Array.isArray(patterns)) {
	    return match(files, patterns, opts);
	  }
	
	  var len = patterns.length, i = 0;
	  var omit = [], keep = [];
	
	  while (len--) {
	    var glob = patterns[i++];
	    if (typeof glob === 'string' && glob.charCodeAt(0) === 33 /* ! */) {
	      omit.push.apply(omit, match(files, glob.slice(1), opts));
	    } else {
	      keep.push.apply(keep, match(files, glob, opts));
	    }
	  }
	  return utils.diff(keep, omit);
	}
	
	/**
	 * Return an array of files that match the given glob pattern.
	 *
	 * This function is called by the main `micromatch` function If you only
	 * need to pass a single pattern you might get very minor speed improvements
	 * using this function.
	 *
	 * @param  {Array} `files`
	 * @param  {String} `pattern`
	 * @param  {Object} `options`
	 * @return {Array}
	 */
	
	function match(files, pattern, opts) {
	  if (utils.typeOf(files) !== 'string' && !Array.isArray(files)) {
	    throw new Error(msg('match', 'files', 'a string or array'));
	  }
	
	  files = utils.arrayify(files);
	  opts = opts || {};
	
	  var negate = opts.negate || false;
	  var orig = pattern;
	
	  if (typeof pattern === 'string') {
	    negate = pattern.charAt(0) === '!';
	    if (negate) {
	      pattern = pattern.slice(1);
	    }
	
	    // we need to remove the character regardless,
	    // so the above logic is still needed
	    if (opts.nonegate === true) {
	      negate = false;
	    }
	  }
	
	  var _isMatch = matcher(pattern, opts);
	  var len = files.length, i = 0;
	  var res = [];
	
	  while (i < len) {
	    var file = files[i++];
	    var fp = utils.unixify(file, opts);
	
	    if (!_isMatch(fp)) { continue; }
	    res.push(fp);
	  }
	
	  if (res.length === 0) {
	    if (opts.failglob === true) {
	      throw new Error('micromatch.match() found no matches for: "' + orig + '".');
	    }
	
	    if (opts.nonull || opts.nullglob) {
	      res.push(utils.unescapeGlob(orig));
	    }
	  }
	
	  // if `negate` was defined, diff negated files
	  if (negate) { res = utils.diff(files, res); }
	
	  // if `ignore` was defined, diff ignored filed
	  if (opts.ignore && opts.ignore.length) {
	    pattern = opts.ignore;
	    opts = utils.omit(opts, ['ignore']);
	    res = utils.diff(res, micromatch(res, pattern, opts));
	  }
	
	  if (opts.nodupes) {
	    return utils.unique(res);
	  }
	  return res;
	}
	
	/**
	 * Returns a function that takes a glob pattern or array of glob patterns
	 * to be used with `Array#filter()`. (Internally this function generates
	 * the matching function using the [matcher] method).
	 *
	 * ```js
	 * var fn = mm.filter('[a-c]');
	 * ['a', 'b', 'c', 'd', 'e'].filter(fn);
	 * //=> ['a', 'b', 'c']
	 * ```
	 * @param  {String|Array} `patterns` Can be a glob or array of globs.
	 * @param  {Options} `opts` Options to pass to the [matcher] method.
	 * @return {Function} Filter function to be passed to `Array#filter()`.
	 */
	
	function filter(patterns, opts) {
	  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
	    throw new TypeError(msg('filter', 'patterns', 'a string or array'));
	  }
	
	  patterns = utils.arrayify(patterns);
	  var len = patterns.length, i = 0;
	  var patternMatchers = Array(len);
	  while (i < len) {
	    patternMatchers[i] = matcher(patterns[i++], opts);
	  }
	
	  return function(fp) {
	    if (fp == null) return [];
	    var len = patternMatchers.length, i = 0;
	    var res = true;
	
	    fp = utils.unixify(fp, opts);
	    while (i < len) {
	      var fn = patternMatchers[i++];
	      if (!fn(fp)) {
	        res = false;
	        break;
	      }
	    }
	    return res;
	  };
	}
	
	/**
	 * Returns true if the filepath contains the given
	 * pattern. Can also return a function for matching.
	 *
	 * ```js
	 * isMatch('foo.md', '*.md', {});
	 * //=> true
	 *
	 * isMatch('*.md', {})('foo.md')
	 * //=> true
	 * ```
	 * @param  {String} `fp`
	 * @param  {String} `pattern`
	 * @param  {Object} `opts`
	 * @return {Boolean}
	 */
	
	function isMatch(fp, pattern, opts) {
	  if (typeof fp !== 'string') {
	    throw new TypeError(msg('isMatch', 'filepath', 'a string'));
	  }
	
	  fp = utils.unixify(fp, opts);
	  if (utils.typeOf(pattern) === 'object') {
	    return matcher(fp, pattern);
	  }
	  return matcher(pattern, opts)(fp);
	}
	
	/**
	 * Returns true if the filepath matches the
	 * given pattern.
	 */
	
	function contains(fp, pattern, opts) {
	  if (typeof fp !== 'string') {
	    throw new TypeError(msg('contains', 'pattern', 'a string'));
	  }
	
	  opts = opts || {};
	  opts.contains = (pattern !== '');
	  fp = utils.unixify(fp, opts);
	
	  if (opts.contains && !utils.isGlob(pattern)) {
	    return fp.indexOf(pattern) !== -1;
	  }
	  return matcher(pattern, opts)(fp);
	}
	
	/**
	 * Returns true if a file path matches any of the
	 * given patterns.
	 *
	 * @param  {String} `fp` The filepath to test.
	 * @param  {String|Array} `patterns` Glob patterns to use.
	 * @param  {Object} `opts` Options to pass to the `matcher()` function.
	 * @return {String}
	 */
	
	function any(fp, patterns, opts) {
	  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
	    throw new TypeError(msg('any', 'patterns', 'a string or array'));
	  }
	
	  patterns = utils.arrayify(patterns);
	  var len = patterns.length;
	
	  fp = utils.unixify(fp, opts);
	  while (len--) {
	    var isMatch = matcher(patterns[len], opts);
	    if (isMatch(fp)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Filter the keys of an object with the given `glob` pattern
	 * and `options`
	 *
	 * @param  {Object} `object`
	 * @param  {Pattern} `object`
	 * @return {Array}
	 */
	
	function matchKeys(obj, glob, options) {
	  if (utils.typeOf(obj) !== 'object') {
	    throw new TypeError(msg('matchKeys', 'first argument', 'an object'));
	  }
	
	  var fn = matcher(glob, options);
	  var res = {};
	
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key) && fn(key)) {
	      res[key] = obj[key];
	    }
	  }
	  return res;
	}
	
	/**
	 * Return a function for matching based on the
	 * given `pattern` and `options`.
	 *
	 * @param  {String} `pattern`
	 * @param  {Object} `options`
	 * @return {Function}
	 */
	
	function matcher(pattern, opts) {
	  // pattern is a function
	  if (typeof pattern === 'function') {
	    return pattern;
	  }
	  // pattern is a regex
	  if (pattern instanceof RegExp) {
	    return function(fp) {
	      return pattern.test(fp);
	    };
	  }
	
	  if (typeof pattern !== 'string') {
	    throw new TypeError(msg('matcher', 'pattern', 'a string, regex, or function'));
	  }
	
	  // strings, all the way down...
	  pattern = utils.unixify(pattern, opts);
	
	  // pattern is a non-glob string
	  if (!utils.isGlob(pattern)) {
	    return utils.matchPath(pattern, opts);
	  }
	  // pattern is a glob string
	  var re = makeRe(pattern, opts);
	
	  // `matchBase` is defined
	  if (opts && opts.matchBase) {
	    return utils.hasFilename(re, opts);
	  }
	  // `matchBase` is not defined
	  return function(fp) {
	    fp = utils.unixify(fp, opts);
	    return re.test(fp);
	  };
	}
	
	/**
	 * Create and cache a regular expression for matching
	 * file paths.
	 *
	 * If the leading character in the `glob` is `!`, a negation
	 * regex is returned.
	 *
	 * @param  {String} `glob`
	 * @param  {Object} `options`
	 * @return {RegExp}
	 */
	
	function toRegex(glob, options) {
	  // clone options to prevent  mutating the original object
	  var opts = Object.create(options || {});
	  var flags = opts.flags || '';
	  if (opts.nocase && flags.indexOf('i') === -1) {
	    flags += 'i';
	  }
	
	  var parsed = expand(glob, opts);
	
	  // pass in tokens to avoid parsing more than once
	  opts.negated = opts.negated || parsed.negated;
	  opts.negate = opts.negated;
	  glob = wrapGlob(parsed.pattern, opts);
	  var re;
	
	  try {
	    re = new RegExp(glob, flags);
	    return re;
	  } catch (err) {
	    err.reason = 'micromatch invalid regex: (' + re + ')';
	    if (opts.strict) throw new SyntaxError(err);
	  }
	
	  // we're only here if a bad pattern was used and the user
	  // passed `options.silent`, so match nothing
	  return /$^/;
	}
	
	/**
	 * Create the regex to do the matching. If the leading
	 * character in the `glob` is `!` a negation regex is returned.
	 *
	 * @param {String} `glob`
	 * @param {Boolean} `negate`
	 */
	
	function wrapGlob(glob, opts) {
	  var prefix = (opts && !opts.contains) ? '^' : '';
	  var after = (opts && !opts.contains) ? '$' : '';
	  glob = ('(?:' + glob + ')' + after);
	  if (opts && opts.negate) {
	    return prefix + ('(?!^' + glob + ').*$');
	  }
	  return prefix + glob;
	}
	
	/**
	 * Create and cache a regular expression for matching file paths.
	 * If the leading character in the `glob` is `!`, a negation
	 * regex is returned.
	 *
	 * @param  {String} `glob`
	 * @param  {Object} `options`
	 * @return {RegExp}
	 */
	
	function makeRe(glob, opts) {
	  if (utils.typeOf(glob) !== 'string') {
	    throw new Error(msg('makeRe', 'glob', 'a string'));
	  }
	  return utils.cache(toRegex, glob, opts);
	}
	
	/**
	 * Make error messages consistent. Follows this format:
	 *
	 * ```js
	 * msg(methodName, argNumber, nativeType);
	 * // example:
	 * msg('matchKeys', 'first', 'an object');
	 * ```
	 *
	 * @param  {String} `method`
	 * @param  {String} `num`
	 * @param  {String} `type`
	 * @return {String}
	 */
	
	function msg(method, what, type) {
	  return 'micromatch.' + method + '(): ' + what + ' should be ' + type + '.';
	}
	
	/**
	 * Public methods
	 */
	
	/* eslint no-multi-spaces: 0 */
	micromatch.any       = any;
	micromatch.braces    = micromatch.braceExpand = utils.braces;
	micromatch.contains  = contains;
	micromatch.expand    = expand;
	micromatch.filter    = filter;
	micromatch.isMatch   = isMatch;
	micromatch.makeRe    = makeRe;
	micromatch.match     = match;
	micromatch.matcher   = matcher;
	micromatch.matchKeys = matchKeys;
	
	/**
	 * Expose `micromatch`
	 */
	
	module.exports = micromatch;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * micromatch <https://github.com/jonschlinkert/micromatch>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var utils = __webpack_require__(77);
	var Glob = __webpack_require__(115);
	
	/**
	 * Expose `expand`
	 */
	
	module.exports = expand;
	
	/**
	 * Expand a glob pattern to resolve braces and
	 * similar patterns before converting to regex.
	 *
	 * @param  {String|Array} `pattern`
	 * @param  {Array} `files`
	 * @param  {Options} `opts`
	 * @return {Array}
	 */
	
	function expand(pattern, options) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('micromatch.expand(): argument should be a string.');
	  }
	
	  var glob = new Glob(pattern, options || {});
	  var opts = glob.options;
	
	  if (!utils.isGlob(pattern)) {
	    glob.pattern = glob.pattern.replace(/([\/.])/g, '\\$1');
	    return glob;
	  }
	
	  glob.pattern = glob.pattern.replace(/(\+)(?!\()/g, '\\$1');
	  glob.pattern = glob.pattern.split('$').join('\\$');
	
	  if (typeof opts.braces !== 'boolean' && typeof opts.nobraces !== 'boolean') {
	    opts.braces = true;
	  }
	
	  if (glob.pattern === '.*') {
	    return {
	      pattern: '\\.' + star,
	      tokens: tok,
	      options: opts
	    };
	  }
	
	  if (glob.pattern === '*') {
	    return {
	      pattern: oneStar(opts.dot),
	      tokens: tok,
	      options: opts
	    };
	  }
	
	  // parse the glob pattern into tokens
	  glob.parse();
	  var tok = glob.tokens;
	  tok.is.negated = opts.negated;
	
	  // dotfile handling
	  if ((opts.dotfiles === true || tok.is.dotfile) && opts.dot !== false) {
	    opts.dotfiles = true;
	    opts.dot = true;
	  }
	
	  if ((opts.dotdirs === true || tok.is.dotdir) && opts.dot !== false) {
	    opts.dotdirs = true;
	    opts.dot = true;
	  }
	
	  // check for braces with a dotfile pattern
	  if (/[{,]\./.test(glob.pattern)) {
	    opts.makeRe = false;
	    opts.dot = true;
	  }
	
	  if (opts.nonegate !== true) {
	    opts.negated = glob.negated;
	  }
	
	  // if the leading character is a dot or a slash, escape it
	  if (glob.pattern.charAt(0) === '.' && glob.pattern.charAt(1) !== '/') {
	    glob.pattern = '\\' + glob.pattern;
	  }
	
	  /**
	   * Extended globs
	   */
	
	  // expand braces, e.g `{1..5}`
	  glob.track('before braces');
	  if (tok.is.braces) {
	    glob.braces();
	  }
	  glob.track('after braces');
	
	  // expand extglobs, e.g `foo/!(a|b)`
	  glob.track('before extglob');
	  if (tok.is.extglob) {
	    glob.extglob();
	  }
	  glob.track('after extglob');
	
	  // expand brackets, e.g `[[:alpha:]]`
	  glob.track('before brackets');
	  if (tok.is.brackets) {
	    glob.brackets();
	  }
	  glob.track('after brackets');
	
	  // special patterns
	  glob._replace('[!', '[^');
	  glob._replace('(?', '(%~');
	  glob._replace(/\[\]/, '\\[\\]');
	  glob._replace('/[', '/' + (opts.dot ? dotfiles : nodot) + '[', true);
	  glob._replace('/?', '/' + (opts.dot ? dotfiles : nodot) + '[^/]', true);
	  glob._replace('/.', '/(?=.)\\.', true);
	
	  // windows drives
	  glob._replace(/^(\w):([\\\/]+?)/gi, '(?=.)$1:$2', true);
	
	  // negate slashes in exclusion ranges
	  if (glob.pattern.indexOf('[^') !== -1) {
	    glob.pattern = negateSlash(glob.pattern);
	  }
	
	  if (opts.globstar !== false && glob.pattern === '**') {
	    glob.pattern = globstar(opts.dot);
	
	  } else {
	    glob.pattern = balance(glob.pattern, '[', ']');
	    glob.escape(glob.pattern);
	
	    // if the pattern has `**`
	    if (tok.is.globstar) {
	      glob.pattern = collapse(glob.pattern, '/**');
	      glob.pattern = collapse(glob.pattern, '**/');
	      glob._replace('/**/', '(?:/' + globstar(opts.dot) + '/|/)', true);
	      glob._replace(/\*{2,}/g, '**');
	
	      // 'foo/*'
	      glob._replace(/(\w+)\*(?!\/)/g, '$1[^/]*?', true);
	      glob._replace(/\*\*\/\*(\w)/g, globstar(opts.dot) + '\\/' + (opts.dot ? dotfiles : nodot) + '[^/]*?$1', true);
	
	      if (opts.dot !== true) {
	        glob._replace(/\*\*\/(.)/g, '(?:**\\/|)$1');
	      }
	
	      // 'foo/**' or '{**,*}', but not 'foo**'
	      if (tok.path.dirname !== '' || /,\*\*|\*\*,/.test(glob.orig)) {
	        glob._replace('**', globstar(opts.dot), true);
	      }
	    }
	
	    // ends with /*
	    glob._replace(/\/\*$/, '\\/' + oneStar(opts.dot), true);
	    // ends with *, no slashes
	    glob._replace(/(?!\/)\*$/, star, true);
	    // has 'n*.' (partial wildcard w/ file extension)
	    glob._replace(/([^\/]+)\*/, '$1' + oneStar(true), true);
	    // has '*'
	    glob._replace('*', oneStar(opts.dot), true);
	    glob._replace('?.', '?\\.', true);
	    glob._replace('?:', '?:', true);
	
	    glob._replace(/\?+/g, function(match) {
	      var len = match.length;
	      if (len === 1) {
	        return qmark;
	      }
	      return qmark + '{' + len + '}';
	    });
	
	    // escape '.abc' => '\\.abc'
	    glob._replace(/\.([*\w]+)/g, '\\.$1');
	    // fix '[^\\\\/]'
	    glob._replace(/\[\^[\\\/]+\]/g, qmark);
	    // '///' => '\/'
	    glob._replace(/\/+/g, '\\/');
	    // '\\\\\\' => '\\'
	    glob._replace(/\\{2,}/g, '\\');
	  }
	
	  // unescape previously escaped patterns
	  glob.unescape(glob.pattern);
	  glob._replace('__UNESC_STAR__', '*');
	
	  // escape dots that follow qmarks
	  glob._replace('?.', '?\\.');
	
	  // remove unnecessary slashes in character classes
	  glob._replace('[^\\/]', qmark);
	
	  if (glob.pattern.length > 1) {
	    if (/^[\[?*]/.test(glob.pattern)) {
	      // only prepend the string if we don't want to match dotfiles
	      glob.pattern = (opts.dot ? dotfiles : nodot) + glob.pattern;
	    }
	  }
	
	  return glob;
	}
	
	/**
	 * Collapse repeated character sequences.
	 *
	 * ```js
	 * collapse('a/../../../b', '../');
	 * //=> 'a/../b'
	 * ```
	 *
	 * @param  {String} `str`
	 * @param  {String} `ch` Character sequence to collapse
	 * @return {String}
	 */
	
	function collapse(str, ch) {
	  var res = str.split(ch);
	  var isFirst = res[0] === '';
	  var isLast = res[res.length - 1] === '';
	  res = res.filter(Boolean);
	  if (isFirst) res.unshift('');
	  if (isLast) res.push('');
	  return res.join(ch);
	}
	
	/**
	 * Negate slashes in exclusion ranges, per glob spec:
	 *
	 * ```js
	 * negateSlash('[^foo]');
	 * //=> '[^\\/foo]'
	 * ```
	 *
	 * @param  {String} `str` glob pattern
	 * @return {String}
	 */
	
	function negateSlash(str) {
	  return str.replace(/\[\^([^\]]*?)\]/g, function(match, inner) {
	    if (inner.indexOf('/') === -1) {
	      inner = '\\/' + inner;
	    }
	    return '[^' + inner + ']';
	  });
	}
	
	/**
	 * Escape imbalanced braces/bracket. This is a very
	 * basic, naive implementation that only does enough
	 * to serve the purpose.
	 */
	
	function balance(str, a, b) {
	  var aarr = str.split(a);
	  var alen = aarr.join('').length;
	  var blen = str.split(b).join('').length;
	
	  if (alen !== blen) {
	    str = aarr.join('\\' + a);
	    return str.split(b).join('\\' + b);
	  }
	  return str;
	}
	
	/**
	 * Special patterns to be converted to regex.
	 * Heuristics are used to simplify patterns
	 * and speed up processing.
	 */
	
	/* eslint no-multi-spaces: 0 */
	var qmark       = '[^/]';
	var star        = qmark + '*?';
	var nodot       = '(?!\\.)(?=.)';
	var dotfileGlob = '(?:\\/|^)\\.{1,2}($|\\/)';
	var dotfiles    = '(?!' + dotfileGlob + ')(?=.)';
	var twoStarDot  = '(?:(?!' + dotfileGlob + ').)*?';
	
	/**
	 * Create a regex for `*`.
	 *
	 * If `dot` is true, or the pattern does not begin with
	 * a leading star, then return the simpler regex.
	 */
	
	function oneStar(dotfile) {
	  return dotfile ? '(?!' + dotfileGlob + ')(?=.)' + star : (nodot + star);
	}
	
	function globstar(dotfile) {
	  if (dotfile) { return twoStarDot; }
	  return '(?:(?!(?:\\/|^)\\.).)*?';
	}


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var win32 = process && process.platform === 'win32';
	var path = __webpack_require__(79);
	var fileRe = __webpack_require__(80);
	var utils = module.exports;
	
	/**
	 * Module dependencies
	 */
	
	utils.diff = __webpack_require__(81);
	utils.unique = __webpack_require__(83);
	utils.braces = __webpack_require__(84);
	utils.brackets = __webpack_require__(97);
	utils.extglob = __webpack_require__(99);
	utils.isExtglob = __webpack_require__(100);
	utils.isGlob = __webpack_require__(101);
	utils.typeOf = __webpack_require__(102);
	utils.normalize = __webpack_require__(103);
	utils.omit = __webpack_require__(104);
	utils.parseGlob = __webpack_require__(108);
	utils.cache = __webpack_require__(112);
	
	/**
	 * Get the filename of a filepath
	 *
	 * @param {String} `string`
	 * @return {String}
	 */
	
	utils.filename = function filename(fp) {
	  var seg = fp.match(fileRe());
	  return seg && seg[0];
	};
	
	/**
	 * Returns a function that returns true if the given
	 * pattern is the same as a given `filepath`
	 *
	 * @param {String} `pattern`
	 * @return {Function}
	 */
	
	utils.isPath = function isPath(pattern, opts) {
	  opts = opts || {};
	  return function(fp) {
	    var unixified = utils.unixify(fp, opts);
	    if(opts.nocase){
	      return pattern.toLowerCase() === unixified.toLowerCase();
	    }
	    return pattern === unixified;
	  };
	};
	
	/**
	 * Returns a function that returns true if the given
	 * pattern contains a `filepath`
	 *
	 * @param {String} `pattern`
	 * @return {Function}
	 */
	
	utils.hasPath = function hasPath(pattern, opts) {
	  return function(fp) {
	    return utils.unixify(pattern, opts).indexOf(fp) !== -1;
	  };
	};
	
	/**
	 * Returns a function that returns true if the given
	 * pattern matches or contains a `filepath`
	 *
	 * @param {String} `pattern`
	 * @return {Function}
	 */
	
	utils.matchPath = function matchPath(pattern, opts) {
	  var fn = (opts && opts.contains)
	    ? utils.hasPath(pattern, opts)
	    : utils.isPath(pattern, opts);
	  return fn;
	};
	
	/**
	 * Returns a function that returns true if the given
	 * regex matches the `filename` of a file path.
	 *
	 * @param {RegExp} `re`
	 * @return {Boolean}
	 */
	
	utils.hasFilename = function hasFilename(re) {
	  return function(fp) {
	    var name = utils.filename(fp);
	    return name && re.test(name);
	  };
	};
	
	/**
	 * Coerce `val` to an array
	 *
	 * @param  {*} val
	 * @return {Array}
	 */
	
	utils.arrayify = function arrayify(val) {
	  return !Array.isArray(val)
	    ? [val]
	    : val;
	};
	
	/**
	 * Normalize all slashes in a file path or glob pattern to
	 * forward slashes.
	 */
	
	utils.unixify = function unixify(fp, opts) {
	  if (opts && opts.unixify === false) return fp;
	  if (opts && opts.unixify === true || win32 || path.sep === '\\') {
	    return utils.normalize(fp, false);
	  }
	  if (opts && opts.unescape === true) {
	    return fp ? fp.toString().replace(/\\(\w)/g, '$1') : '';
	  }
	  return fp;
	};
	
	/**
	 * Escape/unescape utils
	 */
	
	utils.escapePath = function escapePath(fp) {
	  return fp.replace(/[\\.]/g, '\\$&');
	};
	
	utils.unescapeGlob = function unescapeGlob(fp) {
	  return fp.replace(/[\\"']/g, '');
	};
	
	utils.escapeRe = function escapeRe(str) {
	  return str.replace(/[-[\\$*+?.#^\s{}(|)\]]/g, '\\$&');
	};
	
	/**
	 * Expose `utils`
	 */
	
	module.exports = utils;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },
/* 78 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },
/* 80 */
/***/ function(module, exports) {

	/*!
	 * filename-regex <https://github.com/regexps/filename-regex>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert
	 * Licensed under the MIT license.
	 */
	
	module.exports = function filenameRegex() {
	  return /([^\\\/]+)$/;
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * arr-diff <https://github.com/jonschlinkert/arr-diff>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT License
	 */
	
	'use strict';
	
	var flatten = __webpack_require__(82);
	var slice = [].slice;
	
	/**
	 * Return the difference between the first array and
	 * additional arrays.
	 *
	 * ```js
	 * var diff = require('{%= name %}');
	 *
	 * var a = ['a', 'b', 'c', 'd'];
	 * var b = ['b', 'c'];
	 *
	 * console.log(diff(a, b))
	 * //=> ['a', 'd']
	 * ```
	 *
	 * @param  {Array} `a`
	 * @param  {Array} `b`
	 * @return {Array}
	 * @api public
	 */
	
	function diff(arr, arrays) {
	  var argsLen = arguments.length;
	  var len = arr.length, i = -1;
	  var res = [], arrays;
	
	  if (argsLen === 1) {
	    return arr;
	  }
	
	  if (argsLen > 2) {
	    arrays = flatten(slice.call(arguments, 1));
	  }
	
	  while (++i < len) {
	    if (!~arrays.indexOf(arr[i])) {
	      res.push(arr[i]);
	    }
	  }
	  return res;
	}
	
	/**
	 * Expose `diff`
	 */
	
	module.exports = diff;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/*!
	 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function flatten(arr) {
	  return flat(arr, []);
	};
	
	function flat(arr, res) {
	  var len = arr.length;
	  var i = -1;
	
	  while (len--) {
	    var cur = arr[++i];
	    if (Array.isArray(cur)) {
	      flat(cur, res);
	    } else {
	      res.push(cur);
	    }
	  }
	  return res;
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	/*!
	 * array-unique <https://github.com/jonschlinkert/array-unique>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function unique(arr) {
	  if (!Array.isArray(arr)) {
	    throw new TypeError('array-unique expects an array.');
	  }
	
	  var len = arr.length;
	  var i = -1;
	
	  while (i++ < len) {
	    var j = i + 1;
	
	    for (; j < arr.length; ++j) {
	      if (arr[i] === arr[j]) {
	        arr.splice(j--, 1);
	      }
	    }
	  }
	  return arr;
	};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * braces <https://github.com/jonschlinkert/braces>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	/**
	 * Module dependencies
	 */
	
	var expand = __webpack_require__(85);
	var repeat = __webpack_require__(95);
	var tokens = __webpack_require__(96);
	
	/**
	 * Expose `braces`
	 */
	
	module.exports = function(str, options) {
	  if (typeof str !== 'string') {
	    throw new Error('braces expects a string');
	  }
	  return braces(str, options);
	};
	
	/**
	 * Expand `{foo,bar}` or `{1..5}` braces in the
	 * given `string`.
	 *
	 * @param  {String} `str`
	 * @param  {Array} `arr`
	 * @param  {Object} `options`
	 * @return {Array}
	 */
	
	function braces(str, arr, options) {
	  if (str === '') {
	    return [];
	  }
	
	  if (!Array.isArray(arr)) {
	    options = arr;
	    arr = [];
	  }
	
	  var opts = options || {};
	  arr = arr || [];
	
	  if (typeof opts.nodupes === 'undefined') {
	    opts.nodupes = true;
	  }
	
	  var fn = opts.fn;
	  var es6;
	
	  if (typeof opts === 'function') {
	    fn = opts;
	    opts = {};
	  }
	
	  if (!(patternRe instanceof RegExp)) {
	    patternRe = patternRegex();
	  }
	
	  var matches = str.match(patternRe) || [];
	  var m = matches[0];
	
	  switch(m) {
	    case '\\,':
	      return escapeCommas(str, arr, opts);
	    case '\\.':
	      return escapeDots(str, arr, opts);
	    case '\/.':
	      return escapePaths(str, arr, opts);
	    case ' ':
	      return splitWhitespace(str);
	    case '{,}':
	      return exponential(str, opts, braces);
	    case '{}':
	      return emptyBraces(str, arr, opts);
	    case '\\{':
	    case '\\}':
	      return escapeBraces(str, arr, opts);
	    case '${':
	      if (!/\{[^{]+\{/.test(str)) {
	        return arr.concat(str);
	      } else {
	        es6 = true;
	        str = tokens.before(str, es6Regex());
	      }
	  }
	
	  if (!(braceRe instanceof RegExp)) {
	    braceRe = braceRegex();
	  }
	
	  var match = braceRe.exec(str);
	  if (match == null) {
	    return [str];
	  }
	
	  var outter = match[1];
	  var inner = match[2];
	  if (inner === '') { return [str]; }
	
	  var segs, segsLength;
	
	  if (inner.indexOf('..') !== -1) {
	    segs = expand(inner, opts, fn) || inner.split(',');
	    segsLength = segs.length;
	
	  } else if (inner[0] === '"' || inner[0] === '\'') {
	    return arr.concat(str.split(/['"]/).join(''));
	
	  } else {
	    segs = inner.split(',');
	    if (opts.makeRe) {
	      return braces(str.replace(outter, wrap(segs, '|')), opts);
	    }
	
	    segsLength = segs.length;
	    if (segsLength === 1 && opts.bash) {
	      segs[0] = wrap(segs[0], '\\');
	    }
	  }
	
	  var len = segs.length;
	  var i = 0, val;
	
	  while (len--) {
	    var path = segs[i++];
	
	    if (/(\.[^.\/])/.test(path)) {
	      if (segsLength > 1) {
	        return segs;
	      } else {
	        return [str];
	      }
	    }
	
	    val = splice(str, outter, path);
	
	    if (/\{[^{}]+?\}/.test(val)) {
	      arr = braces(val, arr, opts);
	    } else if (val !== '') {
	      if (opts.nodupes && arr.indexOf(val) !== -1) { continue; }
	      arr.push(es6 ? tokens.after(val) : val);
	    }
	  }
	
	  if (opts.strict) { return filter(arr, filterEmpty); }
	  return arr;
	}
	
	/**
	 * Expand exponential ranges
	 *
	 *   `a{,}{,}` => ['a', 'a', 'a', 'a']
	 */
	
	function exponential(str, options, fn) {
	  if (typeof options === 'function') {
	    fn = options;
	    options = null;
	  }
	
	  var opts = options || {};
	  var esc = '__ESC_EXP__';
	  var exp = 0;
	  var res;
	
	  var parts = str.split('{,}');
	  if (opts.nodupes) {
	    return fn(parts.join(''), opts);
	  }
	
	  exp = parts.length - 1;
	  res = fn(parts.join(esc), opts);
	  var len = res.length;
	  var arr = [];
	  var i = 0;
	
	  while (len--) {
	    var ele = res[i++];
	    var idx = ele.indexOf(esc);
	
	    if (idx === -1) {
	      arr.push(ele);
	
	    } else {
	      ele = ele.split('__ESC_EXP__').join('');
	      if (!!ele && opts.nodupes !== false) {
	        arr.push(ele);
	
	      } else {
	        var num = Math.pow(2, exp);
	        arr.push.apply(arr, repeat(ele, num));
	      }
	    }
	  }
	  return arr;
	}
	
	/**
	 * Wrap a value with parens, brackets or braces,
	 * based on the given character/separator.
	 *
	 * @param  {String|Array} `val`
	 * @param  {String} `ch`
	 * @return {String}
	 */
	
	function wrap(val, ch) {
	  if (ch === '|') {
	    return '(' + val.join(ch) + ')';
	  }
	  if (ch === ',') {
	    return '{' + val.join(ch) + '}';
	  }
	  if (ch === '-') {
	    return '[' + val.join(ch) + ']';
	  }
	  if (ch === '\\') {
	    return '\\{' + val + '\\}';
	  }
	}
	
	/**
	 * Handle empty braces: `{}`
	 */
	
	function emptyBraces(str, arr, opts) {
	  return braces(str.split('{}').join('\\{\\}'), arr, opts);
	}
	
	/**
	 * Filter out empty-ish values
	 */
	
	function filterEmpty(ele) {
	  return !!ele && ele !== '\\';
	}
	
	/**
	 * Handle patterns with whitespace
	 */
	
	function splitWhitespace(str) {
	  var segs = str.split(' ');
	  var len = segs.length;
	  var res = [];
	  var i = 0;
	
	  while (len--) {
	    res.push.apply(res, braces(segs[i++]));
	  }
	  return res;
	}
	
	/**
	 * Handle escaped braces: `\\{foo,bar}`
	 */
	
	function escapeBraces(str, arr, opts) {
	  if (!/\{[^{]+\{/.test(str)) {
	    return arr.concat(str.split('\\').join(''));
	  } else {
	    str = str.split('\\{').join('__LT_BRACE__');
	    str = str.split('\\}').join('__RT_BRACE__');
	    return map(braces(str, arr, opts), function(ele) {
	      ele = ele.split('__LT_BRACE__').join('{');
	      return ele.split('__RT_BRACE__').join('}');
	    });
	  }
	}
	
	/**
	 * Handle escaped dots: `{1\\.2}`
	 */
	
	function escapeDots(str, arr, opts) {
	  if (!/[^\\]\..+\\\./.test(str)) {
	    return arr.concat(str.split('\\').join(''));
	  } else {
	    str = str.split('\\.').join('__ESC_DOT__');
	    return map(braces(str, arr, opts), function(ele) {
	      return ele.split('__ESC_DOT__').join('.');
	    });
	  }
	}
	
	/**
	 * Handle escaped dots: `{1\\.2}`
	 */
	
	function escapePaths(str, arr, opts) {
	  str = str.split('\/.').join('__ESC_PATH__');
	  return map(braces(str, arr, opts), function(ele) {
	    return ele.split('__ESC_PATH__').join('\/.');
	  });
	}
	
	/**
	 * Handle escaped commas: `{a\\,b}`
	 */
	
	function escapeCommas(str, arr, opts) {
	  if (!/\w,/.test(str)) {
	    return arr.concat(str.split('\\').join(''));
	  } else {
	    str = str.split('\\,').join('__ESC_COMMA__');
	    return map(braces(str, arr, opts), function(ele) {
	      return ele.split('__ESC_COMMA__').join(',');
	    });
	  }
	}
	
	/**
	 * Regex for common patterns
	 */
	
	function patternRegex() {
	  return /\${|( (?=[{,}])|(?=[{,}]) )|{}|{,}|\\,(?=.*[{}])|\/\.(?=.*[{}])|\\\.(?={)|\\{|\\}/;
	}
	
	/**
	 * Braces regex.
	 */
	
	function braceRegex() {
	  return /.*(\\?\{([^}]+)\})/;
	}
	
	/**
	 * es6 delimiter regex.
	 */
	
	function es6Regex() {
	  return /\$\{([^}]+)\}/;
	}
	
	var braceRe;
	var patternRe;
	
	/**
	 * Faster alternative to `String.replace()` when the
	 * index of the token to be replaces can't be supplied
	 */
	
	function splice(str, token, replacement) {
	  var i = str.indexOf(token);
	  return str.substr(0, i) + replacement
	    + str.substr(i + token.length);
	}
	
	/**
	 * Fast array map
	 */
	
	function map(arr, fn) {
	  if (arr == null) {
	    return [];
	  }
	
	  var len = arr.length;
	  var res = new Array(len);
	  var i = -1;
	
	  while (++i < len) {
	    res[i] = fn(arr[i], i, arr);
	  }
	
	  return res;
	}
	
	/**
	 * Fast array filter
	 */
	
	function filter(arr, cb) {
	  if (arr == null) return [];
	  if (typeof cb !== 'function') {
	    throw new TypeError('braces: filter expects a callback function.');
	  }
	
	  var len = arr.length;
	  var res = arr.slice();
	  var i = 0;
	
	  while (len--) {
	    if (!cb(arr[len], i++)) {
	      res.splice(len, 1);
	    }
	  }
	  return res;
	}


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * expand-range <https://github.com/jonschlinkert/expand-range>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var fill = __webpack_require__(86);
	
	module.exports = function expandRange(str, options, fn) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expand-range expects a string.');
	  }
	
	  if (typeof options === 'function') {
	    fn = options;
	    options = {};
	  }
	
	  if (typeof options === 'boolean') {
	    options = {};
	    options.makeRe = true;
	  }
	
	  // create arguments to pass to fill-range
	  var opts = options || {};
	  var args = str.split('..');
	  var len = args.length;
	  if (len > 3) { return str; }
	
	  // if only one argument, it can't expand so return it
	  if (len === 1) { return args; }
	
	  // if `true`, tell fill-range to regexify the string
	  if (typeof fn === 'boolean' && fn === true) {
	    opts.makeRe = true;
	  }
	
	  args.push(opts);
	  return fill.apply(null, args.concat(fn));
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * fill-range <https://github.com/jonschlinkert/fill-range>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(87);
	var isNumber = __webpack_require__(89);
	var randomize = __webpack_require__(91);
	var repeatStr = __webpack_require__(94);
	var repeat = __webpack_require__(95);
	
	/**
	 * Expose `fillRange`
	 */
	
	module.exports = fillRange;
	
	/**
	 * Return a range of numbers or letters.
	 *
	 * @param  {String} `a` Start of the range
	 * @param  {String} `b` End of the range
	 * @param  {String} `step` Increment or decrement to use.
	 * @param  {Function} `fn` Custom function to modify each element in the range.
	 * @return {Array}
	 */
	
	function fillRange(a, b, step, options, fn) {
	  if (a == null || b == null) {
	    throw new Error('fill-range expects the first and second args to be strings.');
	  }
	
	  if (typeof step === 'function') {
	    fn = step; options = {}; step = null;
	  }
	
	  if (typeof options === 'function') {
	    fn = options; options = {};
	  }
	
	  if (isObject(step)) {
	    options = step; step = '';
	  }
	
	  var expand, regex = false, sep = '';
	  var opts = options || {};
	
	  if (typeof opts.silent === 'undefined') {
	    opts.silent = true;
	  }
	
	  step = step || opts.step;
	
	  // store a ref to unmodified arg
	  var origA = a, origB = b;
	
	  b = (b.toString() === '-0') ? 0 : b;
	
	  if (opts.optimize || opts.makeRe) {
	    step = step ? (step += '~') : step;
	    expand = true;
	    regex = true;
	    sep = '~';
	  }
	
	  // handle special step characters
	  if (typeof step === 'string') {
	    var match = stepRe().exec(step);
	
	    if (match) {
	      var i = match.index;
	      var m = match[0];
	
	      // repeat string
	      if (m === '+') {
	        return repeat(a, b);
	
	      // randomize a, `b` times
	      } else if (m === '?') {
	        return [randomize(a, b)];
	
	      // expand right, no regex reduction
	      } else if (m === '>') {
	        step = step.substr(0, i) + step.substr(i + 1);
	        expand = true;
	
	      // expand to an array, or if valid create a reduced
	      // string for a regex logic `or`
	      } else if (m === '|') {
	        step = step.substr(0, i) + step.substr(i + 1);
	        expand = true;
	        regex = true;
	        sep = m;
	
	      // expand to an array, or if valid create a reduced
	      // string for a regex range
	      } else if (m === '~') {
	        step = step.substr(0, i) + step.substr(i + 1);
	        expand = true;
	        regex = true;
	        sep = m;
	      }
	    } else if (!isNumber(step)) {
	      if (!opts.silent) {
	        throw new TypeError('fill-range: invalid step.');
	      }
	      return null;
	    }
	  }
	
	  if (/[.&*()[\]^%$#@!]/.test(a) || /[.&*()[\]^%$#@!]/.test(b)) {
	    if (!opts.silent) {
	      throw new RangeError('fill-range: invalid range arguments.');
	    }
	    return null;
	  }
	
	  // has neither a letter nor number, or has both letters and numbers
	  // this needs to be after the step logic
	  if (!noAlphaNum(a) || !noAlphaNum(b) || hasBoth(a) || hasBoth(b)) {
	    if (!opts.silent) {
	      throw new RangeError('fill-range: invalid range arguments.');
	    }
	    return null;
	  }
	
	  // validate arguments
	  var isNumA = isNumber(zeros(a));
	  var isNumB = isNumber(zeros(b));
	
	  if ((!isNumA && isNumB) || (isNumA && !isNumB)) {
	    if (!opts.silent) {
	      throw new TypeError('fill-range: first range argument is incompatible with second.');
	    }
	    return null;
	  }
	
	  // by this point both are the same, so we
	  // can use A to check going forward.
	  var isNum = isNumA;
	  var num = formatStep(step);
	
	  // is the range alphabetical? or numeric?
	  if (isNum) {
	    // if numeric, coerce to an integer
	    a = +a; b = +b;
	  } else {
	    // otherwise, get the charCode to expand alpha ranges
	    a = a.charCodeAt(0);
	    b = b.charCodeAt(0);
	  }
	
	  // is the pattern descending?
	  var isDescending = a > b;
	
	  // don't create a character class if the args are < 0
	  if (a < 0 || b < 0) {
	    expand = false;
	    regex = false;
	  }
	
	  // detect padding
	  var padding = isPadded(origA, origB);
	  var res, pad, arr = [];
	  var ii = 0;
	
	  // character classes, ranges and logical `or`
	  if (regex) {
	    if (shouldExpand(a, b, num, isNum, padding, opts)) {
	      // make sure the correct separator is used
	      if (sep === '|' || sep === '~') {
	        sep = detectSeparator(a, b, num, isNum, isDescending);
	      }
	      return wrap([origA, origB], sep, opts);
	    }
	  }
	
	  while (isDescending ? (a >= b) : (a <= b)) {
	    if (padding && isNum) {
	      pad = padding(a);
	    }
	
	    // custom function
	    if (typeof fn === 'function') {
	      res = fn(a, isNum, pad, ii++);
	
	    // letters
	    } else if (!isNum) {
	      if (regex && isInvalidChar(a)) {
	        res = null;
	      } else {
	        res = String.fromCharCode(a);
	      }
	
	    // numbers
	    } else {
	      res = formatPadding(a, pad);
	    }
	
	    // add result to the array, filtering any nulled values
	    if (res !== null) arr.push(res);
	
	    // increment or decrement
	    if (isDescending) {
	      a -= num;
	    } else {
	      a += num;
	    }
	  }
	
	  // now that the array is expanded, we need to handle regex
	  // character classes, ranges or logical `or` that wasn't
	  // already handled before the loop
	  if ((regex || expand) && !opts.noexpand) {
	    // make sure the correct separator is used
	    if (sep === '|' || sep === '~') {
	      sep = detectSeparator(a, b, num, isNum, isDescending);
	    }
	    if (arr.length === 1 || a < 0 || b < 0) { return arr; }
	    return wrap(arr, sep, opts);
	  }
	
	  return arr;
	}
	
	/**
	 * Wrap the string with the correct regex
	 * syntax.
	 */
	
	function wrap(arr, sep, opts) {
	  if (sep === '~') { sep = '-'; }
	  var str = arr.join(sep);
	  var pre = opts && opts.regexPrefix;
	
	  // regex logical `or`
	  if (sep === '|') {
	    str = pre ? pre + str : str;
	    str = '(' + str + ')';
	  }
	
	  // regex character class
	  if (sep === '-') {
	    str = (pre && pre === '^')
	      ? pre + str
	      : str;
	    str = '[' + str + ']';
	  }
	  return [str];
	}
	
	/**
	 * Check for invalid characters
	 */
	
	function isCharClass(a, b, step, isNum, isDescending) {
	  if (isDescending) { return false; }
	  if (isNum) { return a <= 9 && b <= 9; }
	  if (a < b) { return step === 1; }
	  return false;
	}
	
	/**
	 * Detect the correct separator to use
	 */
	
	function shouldExpand(a, b, num, isNum, padding, opts) {
	  if (isNum && (a > 9 || b > 9)) { return false; }
	  return !padding && num === 1 && a < b;
	}
	
	/**
	 * Detect the correct separator to use
	 */
	
	function detectSeparator(a, b, step, isNum, isDescending) {
	  var isChar = isCharClass(a, b, step, isNum, isDescending);
	  if (!isChar) {
	    return '|';
	  }
	  return '~';
	}
	
	/**
	 * Correctly format the step based on type
	 */
	
	function formatStep(step) {
	  return Math.abs(step >> 0) || 1;
	}
	
	/**
	 * Format padding, taking leading `-` into account
	 */
	
	function formatPadding(ch, pad) {
	  var res = pad ? pad + ch : ch;
	  if (pad && ch.toString().charAt(0) === '-') {
	    res = '-' + pad + ch.toString().substr(1);
	  }
	  return res.toString();
	}
	
	/**
	 * Check for invalid characters
	 */
	
	function isInvalidChar(str) {
	  var ch = toStr(str);
	  return ch === '\\'
	    || ch === '['
	    || ch === ']'
	    || ch === '^'
	    || ch === '('
	    || ch === ')'
	    || ch === '`';
	}
	
	/**
	 * Convert to a string from a charCode
	 */
	
	function toStr(ch) {
	  return String.fromCharCode(ch);
	}
	
	
	/**
	 * Step regex
	 */
	
	function stepRe() {
	  return /\?|>|\||\+|\~/g;
	}
	
	/**
	 * Return true if `val` has either a letter
	 * or a number
	 */
	
	function noAlphaNum(val) {
	  return /[a-z0-9]/i.test(val);
	}
	
	/**
	 * Return true if `val` has both a letter and
	 * a number (invalid)
	 */
	
	function hasBoth(val) {
	  return /[a-z][0-9]|[0-9][a-z]/i.test(val);
	}
	
	/**
	 * Normalize zeros for checks
	 */
	
	function zeros(val) {
	  if (/^-*0+$/.test(val.toString())) {
	    return '0';
	  }
	  return val;
	}
	
	/**
	 * Return true if `val` has leading zeros,
	 * or a similar valid pattern.
	 */
	
	function hasZeros(val) {
	  return /[^.]\.|^-*0+[0-9]/.test(val);
	}
	
	/**
	 * If the string is padded, returns a curried function with
	 * the a cached padding string, or `false` if no padding.
	 *
	 * @param  {*} `origA` String or number.
	 * @return {String|Boolean}
	 */
	
	function isPadded(origA, origB) {
	  if (hasZeros(origA) || hasZeros(origB)) {
	    var alen = length(origA);
	    var blen = length(origB);
	
	    var len = alen >= blen
	      ? alen
	      : blen;
	
	    return function (a) {
	      return repeatStr('0', len - length(a));
	    };
	  }
	  return false;
	}
	
	/**
	 * Get the string length of `val`
	 */
	
	function length(val) {
	  return val.toString().length;
	}


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isArray = __webpack_require__(88);
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && isArray(val) === false;
	};


/***/ },
/* 88 */
65,
/* 89 */
[351, 90],
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var isBuffer = __webpack_require__(73);
	var toString = Object.prototype.toString;
	
	/**
	 * Get the native `typeof` a value.
	 *
	 * @param  {*} `val`
	 * @return {*} Native javascript type
	 */
	
	module.exports = function kindOf(val) {
	  // primitivies
	  if (typeof val === 'undefined') {
	    return 'undefined';
	  }
	  if (val === null) {
	    return 'null';
	  }
	  if (val === true || val === false || val instanceof Boolean) {
	    return 'boolean';
	  }
	  if (typeof val === 'string' || val instanceof String) {
	    return 'string';
	  }
	  if (typeof val === 'number' || val instanceof Number) {
	    return 'number';
	  }
	
	  // functions
	  if (typeof val === 'function' || val instanceof Function) {
	    return 'function';
	  }
	
	  // array
	  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
	    return 'array';
	  }
	
	  // check for instances of RegExp and Date before calling `toString`
	  if (val instanceof RegExp) {
	    return 'regexp';
	  }
	  if (val instanceof Date) {
	    return 'date';
	  }
	
	  // other objects
	  var type = toString.call(val);
	
	  if (type === '[object RegExp]') {
	    return 'regexp';
	  }
	  if (type === '[object Date]') {
	    return 'date';
	  }
	  if (type === '[object Arguments]') {
	    return 'arguments';
	  }
	  if (type === '[object Error]') {
	    return 'error';
	  }
	
	  // buffer
	  if (typeof Buffer !== 'undefined' && isBuffer(val)) {
	    return 'buffer';
	  }
	
	  // es6: Map, WeakMap, Set, WeakSet
	  if (type === '[object Set]') {
	    return 'set';
	  }
	  if (type === '[object WeakSet]') {
	    return 'weakset';
	  }
	  if (type === '[object Map]') {
	    return 'map';
	  }
	  if (type === '[object WeakMap]') {
	    return 'weakmap';
	  }
	  if (type === '[object Symbol]') {
	    return 'symbol';
	  }
	
	  // typed arrays
	  if (type === '[object Int8Array]') {
	    return 'int8array';
	  }
	  if (type === '[object Uint8Array]') {
	    return 'uint8array';
	  }
	  if (type === '[object Uint8ClampedArray]') {
	    return 'uint8clampedarray';
	  }
	  if (type === '[object Int16Array]') {
	    return 'int16array';
	  }
	  if (type === '[object Uint16Array]') {
	    return 'uint16array';
	  }
	  if (type === '[object Int32Array]') {
	    return 'int32array';
	  }
	  if (type === '[object Uint32Array]') {
	    return 'uint32array';
	  }
	  if (type === '[object Float32Array]') {
	    return 'float32array';
	  }
	  if (type === '[object Float64Array]') {
	    return 'float64array';
	  }
	
	  // must be a plain object
	  return 'object';
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(62).Buffer))

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * randomatic <https://github.com/jonschlinkert/randomatic>
	 *
	 * This was originally inspired by <http://stackoverflow.com/a/10727155/1267639>
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License (MIT)
	 */
	
	'use strict';
	
	var isNumber = __webpack_require__(92);
	var typeOf = __webpack_require__(93);
	
	/**
	 * Expose `randomatic`
	 */
	
	module.exports = randomatic;
	
	/**
	 * Available mask characters
	 */
	
	var type = {
	  lower: 'abcdefghijklmnopqrstuvwxyz',
	  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	  number: '0123456789',
	  special: '~!@#$%^&()_+-={}[];\',.'
	};
	
	type.all = type.lower + type.upper + type.number;
	
	/**
	 * Generate random character sequences of a specified `length`,
	 * based on the given `pattern`.
	 *
	 * @param {String} `pattern` The pattern to use for generating the random string.
	 * @param {String} `length` The length of the string to generate.
	 * @param {String} `options`
	 * @return {String}
	 * @api public
	 */
	
	function randomatic(pattern, length, options) {
	  if (typeof pattern === 'undefined') {
	    throw new Error('randomatic expects a string or number.');
	  }
	
	  var custom = false;
	  if (arguments.length === 1) {
	    if (typeof pattern === 'string') {
	      length = pattern.length;
	
	    } else if (isNumber(pattern)) {
	      options = {}; length = pattern; pattern = '*';
	    }
	  }
	
	  if (typeOf(length) === 'object' && length.hasOwnProperty('chars')) {
	    options = length;
	    pattern = options.chars;
	    length = pattern.length;
	    custom = true;
	  }
	
	  var opts = options || {};
	  var mask = '';
	  var res = '';
	
	  // Characters to be used
	  if (pattern.indexOf('?') !== -1) mask += opts.chars;
	  if (pattern.indexOf('a') !== -1) mask += type.lower;
	  if (pattern.indexOf('A') !== -1) mask += type.upper;
	  if (pattern.indexOf('0') !== -1) mask += type.number;
	  if (pattern.indexOf('!') !== -1) mask += type.special;
	  if (pattern.indexOf('*') !== -1) mask += type.all;
	  if (custom) mask += pattern;
	
	  while (length--) {
	    res += mask.charAt(parseInt(Math.random() * mask.length, 10));
	  }
	  return res;
	};


/***/ },
/* 92 */
[351, 93],
/* 93 */
90,
/* 94 */
/***/ function(module, exports) {

	/*!
	 * repeat-string <https://github.com/jonschlinkert/repeat-string>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Results cache
	 */
	
	var res = '';
	var cache;
	
	/**
	 * Expose `repeat`
	 */
	
	module.exports = repeat;
	
	/**
	 * Repeat the given `string` the specified `number`
	 * of times.
	 *
	 * **Example:**
	 *
	 * ```js
	 * var repeat = require('repeat-string');
	 * repeat('A', 5);
	 * //=> AAAAA
	 * ```
	 *
	 * @param {String} `string` The string to repeat
	 * @param {Number} `number` The number of times to repeat the string
	 * @return {String} Repeated string
	 * @api public
	 */
	
	function repeat(str, num) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	
	  // cover common, quick use cases
	  if (num === 1) return str;
	  if (num === 2) return str + str;
	
	  var max = str.length * num;
	  if (cache !== str || typeof cache === 'undefined') {
	    cache = str;
	    res = '';
	  } else if (res.length >= max) {
	    return res.substr(0, max);
	  }
	
	  while (max > res.length && num > 1) {
	    if (num & 1) {
	      res += str;
	    }
	
	    num >>= 1;
	    str += str;
	  }
	
	  res += str;
	  res = res.substr(0, max);
	  return res;
	}


/***/ },
/* 95 */
/***/ function(module, exports) {

	/*!
	 * repeat-element <https://github.com/jonschlinkert/repeat-element>
	 *
	 * Copyright (c) 2015 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	module.exports = function repeat(ele, num) {
	  var arr = new Array(num);
	
	  for (var i = 0; i < num; i++) {
	    arr[i] = ele;
	  }
	
	  return arr;
	};


/***/ },
/* 96 */
/***/ function(module, exports) {

	/*!
	 * preserve <https://github.com/jonschlinkert/preserve>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	/**
	 * Replace tokens in `str` with a temporary, heuristic placeholder.
	 *
	 * ```js
	 * tokens.before('{a\\,b}');
	 * //=> '{__ID1__}'
	 * ```
	 *
	 * @param  {String} `str`
	 * @return {String} String with placeholders.
	 * @api public
	 */
	
	exports.before = function before(str, re) {
	  return str.replace(re, function (match) {
	    var id = randomize();
	    cache[id] = match;
	    return '__ID' + id + '__';
	  });
	};
	
	/**
	 * Replace placeholders in `str` with original tokens.
	 *
	 * ```js
	 * tokens.after('{__ID1__}');
	 * //=> '{a\\,b}'
	 * ```
	 *
	 * @param  {String} `str` String with placeholders
	 * @return {String} `str` String with original tokens.
	 * @api public
	 */
	
	exports.after = function after(str) {
	  return str.replace(/__ID(.{5})__/g, function (_, id) {
	    return cache[id];
	  });
	};
	
	function randomize() {
	  return Math.random().toString().slice(2, 7);
	}
	
	var cache = {};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * expand-brackets <https://github.com/jonschlinkert/expand-brackets>
	 *
	 * Copyright (c) 2015 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var isPosixBracket = __webpack_require__(98);
	
	/**
	 * POSIX character classes
	 */
	
	var POSIX = {
	  alnum: 'a-zA-Z0-9',
	  alpha: 'a-zA-Z',
	  blank: ' \\t',
	  cntrl: '\\x00-\\x1F\\x7F',
	  digit: '0-9',
	  graph: '\\x21-\\x7E',
	  lower: 'a-z',
	  print: '\\x20-\\x7E',
	  punct: '-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
	  space: ' \\t\\r\\n\\v\\f',
	  upper: 'A-Z',
	  word:  'A-Za-z0-9_',
	  xdigit: 'A-Fa-f0-9',
	};
	
	/**
	 * Expose `brackets`
	 */
	
	module.exports = brackets;
	
	function brackets(str) {
	  if (!isPosixBracket(str)) {
	    return str;
	  }
	
	  var negated = false;
	  if (str.indexOf('[^') !== -1) {
	    negated = true;
	    str = str.split('[^').join('[');
	  }
	  if (str.indexOf('[!') !== -1) {
	    negated = true;
	    str = str.split('[!').join('[');
	  }
	
	  var a = str.split('[');
	  var b = str.split(']');
	  var imbalanced = a.length !== b.length;
	
	  var parts = str.split(/(?::\]\[:|\[?\[:|:\]\]?)/);
	  var len = parts.length, i = 0;
	  var end = '', beg = '';
	  var res = [];
	
	  // start at the end (innermost) first
	  while (len--) {
	    var inner = parts[i++];
	    if (inner === '^[!' || inner === '[!') {
	      inner = '';
	      negated = true;
	    }
	
	    var prefix = negated ? '^' : '';
	    var ch = POSIX[inner];
	
	    if (ch) {
	      res.push('[' + prefix + ch + ']');
	    } else if (inner) {
	      if (/^\[?\w-\w\]?$/.test(inner)) {
	        if (i === parts.length) {
	          res.push('[' + prefix + inner);
	        } else if (i === 1) {
	          res.push(prefix + inner + ']');
	        } else {
	          res.push(prefix + inner);
	        }
	      } else {
	        if (i === 1) {
	          beg += inner;
	        } else if (i === parts.length) {
	          end += inner;
	        } else {
	          res.push('[' + prefix + inner + ']');
	        }
	      }
	    }
	  }
	
	  var result = res.join('|');
	  var rlen = res.length || 1;
	  if (rlen > 1) {
	    result = '(?:' + result + ')';
	    rlen = 1;
	  }
	  if (beg) {
	    rlen++;
	    if (beg.charAt(0) === '[') {
	      if (imbalanced) {
	        beg = '\\[' + beg.slice(1);
	      } else {
	        beg += ']';
	      }
	    }
	    result = beg + result;
	  }
	  if (end) {
	    rlen++;
	    if (end.slice(-1) === ']') {
	      if (imbalanced) {
	        end = end.slice(0, end.length - 1) + '\\]';
	      } else {
	        end = '[' + end;
	      }
	    }
	    result += end;
	  }
	
	  if (rlen > 1) {
	    result = result.split('][').join(']|[');
	    if (result.indexOf('|') !== -1 && !/\(\?/.test(result)) {
	      result = '(?:' + result + ')';
	    }
	  }
	
	  result = result.replace(/\[+=|=\]+/g, '\\b');
	  return result;
	}
	
	brackets.makeRe = function(pattern) {
	  try {
	    return new RegExp(brackets(pattern));
	  } catch (err) {}
	};
	
	brackets.isMatch = function(str, pattern) {
	  try {
	    return brackets.makeRe(pattern).test(str);
	  } catch (err) {
	    return false;
	  }
	};
	
	brackets.match = function(arr, pattern) {
	  var len = arr.length, i = 0;
	  var res = arr.slice();
	
	  var re = brackets.makeRe(pattern);
	  while (i < len) {
	    var ele = arr[i++];
	    if (!re.test(ele)) {
	      continue;
	    }
	    res.splice(i, 1);
	  }
	  return res;
	};


/***/ },
/* 98 */
/***/ function(module, exports) {

	/*!
	 * is-posix-bracket <https://github.com/jonschlinkert/is-posix-bracket>
	 *
	 * Copyright (c) 2015-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	module.exports = function isPosixBracket(str) {
	  return typeof str === 'string' && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(str);
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * extglob <https://github.com/jonschlinkert/extglob>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Module dependencies
	 */
	
	var isExtglob = __webpack_require__(100);
	var re, cache = {};
	
	/**
	 * Expose `extglob`
	 */
	
	module.exports = extglob;
	
	/**
	 * Convert the given extglob `string` to a regex-compatible
	 * string.
	 *
	 * ```js
	 * var extglob = require('extglob');
	 * extglob('!(a?(b))');
	 * //=> '(?!a(?:b)?)[^/]*?'
	 * ```
	 *
	 * @param {String} `str` The string to convert.
	 * @param {Object} `options`
	 *   @option {Boolean} [options] `esc` If `false` special characters will not be escaped. Defaults to `true`.
	 *   @option {Boolean} [options] `regex` If `true` a regular expression is returned instead of a string.
	 * @return {String}
	 * @api public
	 */
	
	
	function extglob(str, opts) {
	  opts = opts || {};
	  var o = {}, i = 0;
	
	  // fix common character reversals
	  // '*!(.js)' => '*.!(js)'
	  str = str.replace(/!\(([^\w*()])/g, '$1!(');
	
	  // support file extension negation
	  str = str.replace(/([*\/])\.!\([*]\)/g, function (m, ch) {
	    if (ch === '/') {
	      return escape('\\/[^.]+');
	    }
	    return escape('[^.]+');
	  });
	
	  // create a unique key for caching by
	  // combining the string and options
	  var key = str
	    + String(!!opts.regex)
	    + String(!!opts.contains)
	    + String(!!opts.escape);
	
	  if (cache.hasOwnProperty(key)) {
	    return cache[key];
	  }
	
	  if (!(re instanceof RegExp)) {
	    re = regex();
	  }
	
	  opts.negate = false;
	  var m;
	
	  while (m = re.exec(str)) {
	    var prefix = m[1];
	    var inner = m[3];
	    if (prefix === '!') {
	      opts.negate = true;
	    }
	
	    var id = '__EXTGLOB_' + (i++) + '__';
	    // use the prefix of the _last_ (outtermost) pattern
	    o[id] = wrap(inner, prefix, opts.escape);
	    str = str.split(m[0]).join(id);
	  }
	
	  var keys = Object.keys(o);
	  var len = keys.length;
	
	  // we have to loop again to allow us to convert
	  // patterns in reverse order (starting with the
	  // innermost/last pattern first)
	  while (len--) {
	    var prop = keys[len];
	    str = str.split(prop).join(o[prop]);
	  }
	
	  var result = opts.regex
	    ? toRegex(str, opts.contains, opts.negate)
	    : str;
	
	  result = result.split('.').join('\\.');
	
	  // cache the result and return it
	  return (cache[key] = result);
	}
	
	/**
	 * Convert `string` to a regex string.
	 *
	 * @param  {String} `str`
	 * @param  {String} `prefix` Character that determines how to wrap the string.
	 * @param  {Boolean} `esc` If `false` special characters will not be escaped. Defaults to `true`.
	 * @return {String}
	 */
	
	function wrap(inner, prefix, esc) {
	  if (esc) inner = escape(inner);
	
	  switch (prefix) {
	    case '!':
	      return '(?!' + inner + ')[^/]' + (esc ? '%%%~' : '*?');
	    case '@':
	      return '(?:' + inner + ')';
	    case '+':
	      return '(?:' + inner + ')+';
	    case '*':
	      return '(?:' + inner + ')' + (esc ? '%%' : '*')
	    case '?':
	      return '(?:' + inner + '|)';
	    default:
	      return inner;
	  }
	}
	
	function escape(str) {
	  str = str.split('*').join('[^/]%%%~');
	  str = str.split('.').join('\\.');
	  return str;
	}
	
	/**
	 * extglob regex.
	 */
	
	function regex() {
	  return /(\\?[@?!+*$]\\?)(\(([^()]*?)\))/;
	}
	
	/**
	 * Negation regex
	 */
	
	function negate(str) {
	  return '(?!^' + str + ').*$';
	}
	
	/**
	 * Create the regex to do the matching. If
	 * the leading character in the `pattern` is `!`
	 * a negation regex is returned.
	 *
	 * @param {String} `pattern`
	 * @param {Boolean} `contains` Allow loose matching.
	 * @param {Boolean} `isNegated` True if the pattern is a negation pattern.
	 */
	
	function toRegex(pattern, contains, isNegated) {
	  var prefix = contains ? '^' : '';
	  var after = contains ? '$' : '';
	  pattern = ('(?:' + pattern + ')' + after);
	  if (isNegated) {
	    pattern = prefix + negate(pattern);
	  }
	  return new RegExp(prefix + pattern);
	}


/***/ },
/* 100 */
/***/ function(module, exports) {

	/*!
	 * is-extglob <https://github.com/jonschlinkert/is-extglob>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	module.exports = function isExtglob(str) {
	  return typeof str === 'string'
	    && /[@?!+*]\(/.test(str);
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-glob <https://github.com/jonschlinkert/is-glob>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	var isExtglob = __webpack_require__(100);
	
	module.exports = function isGlob(str) {
	  return typeof str === 'string'
	    && (/[*!?{}(|)[\]]/.test(str)
	     || isExtglob(str));
	};

/***/ },
/* 102 */
90,
/* 103 */
/***/ function(module, exports) {

	/*!
	 * normalize-path <https://github.com/jonschlinkert/normalize-path>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License
	 */
	
	module.exports = function normalizePath(str, stripTrailing) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	  str = str.replace(/[\\\/]+/g, '/');
	  if (stripTrailing !== false) {
	    str = str.replace(/\/$/, '');
	  }
	  return str;
	};


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(105);
	var forOwn = __webpack_require__(106);
	
	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};
	
	  keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {}, fn;
	
	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }
	
	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }
	
	  forOwn(obj, function(value, key) {
	    if (keys.indexOf(key) === -1) {
	
	      if (!isFunction) {
	        res[key] = value;
	      } else if (fn(value, key, obj)) {
	        res[key] = value;
	      }
	    }
	  });
	  return res;
	};


/***/ },
/* 105 */
/***/ function(module, exports) {

	/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(107);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(o, fn, thisArg) {
	  forIn(o, function(val, key) {
	    if (hasOwn.call(o, key)) {
	      return fn.call(thisArg, o[key], key, o);
	    }
	  });
	};


/***/ },
/* 107 */
/***/ function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function forIn(o, fn, thisArg) {
	  for (var key in o) {
	    if (fn.call(thisArg, o[key], key, o) === false) {
	      break;
	    }
	  }
	};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * parse-glob <https://github.com/jonschlinkert/parse-glob>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isGlob = __webpack_require__(101);
	var findBase = __webpack_require__(109);
	var extglob = __webpack_require__(100);
	var dotfile = __webpack_require__(111);
	
	/**
	 * Expose `cache`
	 */
	
	var cache = module.exports.cache = {};
	
	/**
	 * Parse a glob pattern into tokens.
	 *
	 * When no paths or '**' are in the glob, we use a
	 * different strategy for parsing the filename, since
	 * file names can contain braces and other difficult
	 * patterns. such as:
	 *
	 *  - `*.{a,b}`
	 *  - `(**|*.js)`
	 */
	
	module.exports = function parseGlob(glob) {
	  if (cache.hasOwnProperty(glob)) {
	    return cache[glob];
	  }
	
	  var tok = {};
	  tok.orig = glob;
	  tok.is = {};
	
	  // unescape dots and slashes in braces/brackets
	  glob = escape(glob);
	
	  var parsed = findBase(glob);
	  tok.is.glob = parsed.isGlob;
	
	  tok.glob = parsed.glob;
	  tok.base = parsed.base;
	  var segs = /([^\/]*)$/.exec(glob);
	
	  tok.path = {};
	  tok.path.dirname = '';
	  tok.path.basename = segs[1] || '';
	  tok.path.dirname = glob.split(tok.path.basename).join('') || '';
	  var basename = (tok.path.basename || '').split('.') || '';
	  tok.path.filename = basename[0] || '';
	  tok.path.extname = basename.slice(1).join('.') || '';
	  tok.path.ext = '';
	
	  if (isGlob(tok.path.dirname) && !tok.path.basename) {
	    if (!/\/$/.test(tok.glob)) {
	      tok.path.basename = tok.glob;
	    }
	    tok.path.dirname = tok.base;
	  }
	
	  if (glob.indexOf('/') === -1 && !tok.is.globstar) {
	    tok.path.dirname = '';
	    tok.path.basename = tok.orig;
	  }
	
	  var dot = tok.path.basename.indexOf('.');
	  if (dot !== -1) {
	    tok.path.filename = tok.path.basename.slice(0, dot);
	    tok.path.extname = tok.path.basename.slice(dot);
	  }
	
	  if (tok.path.extname.charAt(0) === '.') {
	    var exts = tok.path.extname.split('.');
	    tok.path.ext = exts[exts.length - 1];
	  }
	
	  // unescape dots and slashes in braces/brackets
	  tok.glob = unescape(tok.glob);
	  tok.path.dirname = unescape(tok.path.dirname);
	  tok.path.basename = unescape(tok.path.basename);
	  tok.path.filename = unescape(tok.path.filename);
	  tok.path.extname = unescape(tok.path.extname);
	
	  // Booleans
	  var is = (glob && tok.is.glob);
	  tok.is.negated  = glob && glob.charAt(0) === '!';
	  tok.is.extglob  = glob && extglob(glob);
	  tok.is.braces   = has(is, glob, '{');
	  tok.is.brackets = has(is, glob, '[:');
	  tok.is.globstar = has(is, glob, '**');
	  tok.is.dotfile  = dotfile(tok.path.basename) || dotfile(tok.path.filename);
	  tok.is.dotdir   = dotdir(tok.path.dirname);
	  return (cache[glob] = tok);
	}
	
	/**
	 * Returns true if the glob matches dot-directories.
	 *
	 * @param  {Object} `tok` The tokens object
	 * @param  {Object} `path` The path object
	 * @return {Object}
	 */
	
	function dotdir(base) {
	  if (base.indexOf('/.') !== -1) {
	    return true;
	  }
	  if (base.charAt(0) === '.' && base.charAt(1) !== '/') {
	    return true;
	  }
	  return false;
	}
	
	/**
	 * Returns true if the pattern has the given `ch`aracter(s)
	 *
	 * @param  {Object} `glob` The glob pattern.
	 * @param  {Object} `ch` The character to test for
	 * @return {Object}
	 */
	
	function has(is, glob, ch) {
	  return is && glob.indexOf(ch) !== -1;
	}
	
	/**
	 * Escape/unescape utils
	 */
	
	function escape(str) {
	  var re = /\{([^{}]*?)}|\(([^()]*?)\)|\[([^\[\]]*?)\]/g;
	  return str.replace(re, function (outter, braces, parens, brackets) {
	    var inner = braces || parens || brackets;
	    if (!inner) { return outter; }
	    return outter.split(inner).join(esc(inner));
	  });
	}
	
	function esc(str) {
	  str = str.split('/').join('__SLASH__');
	  str = str.split('.').join('__DOT__');
	  return str;
	}
	
	function unescape(str) {
	  str = str.split('__SLASH__').join('/');
	  str = str.split('__DOT__').join('.');
	  return str;
	}


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * glob-base <https://github.com/jonschlinkert/glob-base>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var path = __webpack_require__(79);
	var parent = __webpack_require__(110);
	var isGlob = __webpack_require__(101);
	
	module.exports = function globBase(pattern) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob-base expects a string.');
	  }
	
	  var res = {};
	  res.base = parent(pattern);
	  res.isGlob = isGlob(pattern);
	
	  if (res.base !== '.') {
	    res.glob = pattern.substr(res.base.length);
	    if (res.glob.charAt(0) === '/') {
	      res.glob = res.glob.substr(1);
	    }
	  } else {
	    res.glob = pattern;
	  }
	
	  if (!res.isGlob) {
	    res.base = dirname(pattern);
	    res.glob = res.base !== '.'
	      ? pattern.substr(res.base.length)
	      : pattern;
	  }
	
	  if (res.glob.substr(0, 2) === './') {
	    res.glob = res.glob.substr(2);
	  }
	  if (res.glob.charAt(0) === '/') {
	    res.glob = res.glob.substr(1);
	  }
	  return res;
	};
	
	function dirname(glob) {
	  if (glob.slice(-1) === '/') return glob;
	  return path.dirname(glob);
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(79);
	var isglob = __webpack_require__(101);
	
	module.exports = function globParent(str) {
		str += 'a'; // preserves full path in case of trailing path separator
		do {str = path.dirname(str)} while (isglob(str));
		return str;
	};


/***/ },
/* 111 */
/***/ function(module, exports) {

	/*!
	 * is-dotfile <https://github.com/regexps/is-dotfile>
	 *
	 * Copyright (c) 2015 Jon Schlinkert, contributors.
	 * Licensed under the MIT license.
	 */
	
	module.exports = function(str) {
	  if (str.charCodeAt(0) === 46 /* . */ && str.indexOf('/', 1) === -1) {
	    return true;
	  }
	
	  var last = str.lastIndexOf('/');
	  return last !== -1 ? str.charCodeAt(last + 1) === 46  /* . */ : false;
	};


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * regex-cache <https://github.com/jonschlinkert/regex-cache>
	 *
	 * Copyright (c) 2015 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var isPrimitive = __webpack_require__(113);
	var equal = __webpack_require__(114);
	var basic = {};
	var cache = {};
	
	/**
	 * Expose `regexCache`
	 */
	
	module.exports = regexCache;
	
	/**
	 * Memoize the results of a call to the new RegExp constructor.
	 *
	 * @param  {Function} fn [description]
	 * @param  {String} str [description]
	 * @param  {Options} options [description]
	 * @param  {Boolean} nocompare [description]
	 * @return {RegExp}
	 */
	
	function regexCache(fn, str, opts) {
	  var key = '_default_', regex, cached;
	
	  if (!str && !opts) {
	    if (typeof fn !== 'function') {
	      return fn;
	    }
	    return basic[key] || (basic[key] = fn(str));
	  }
	
	  var isString = typeof str === 'string';
	  if (isString) {
	    if (!opts) {
	      return basic[str] || (basic[str] = fn(str));
	    }
	    key = str;
	  } else {
	    opts = str;
	  }
	
	  cached = cache[key];
	  if (cached && equal(cached.opts, opts)) {
	    return cached.regex;
	  }
	
	  memo(key, opts, (regex = fn(str, opts)));
	  return regex;
	}
	
	function memo(key, opts, regex) {
	  cache[key] = {regex: regex, opts: opts};
	}
	
	/**
	 * Expose `cache`
	 */
	
	module.exports.cache = cache;
	module.exports.basic = basic;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/*!
	 * is-primitive <https://github.com/jonschlinkert/is-primitive>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	// see http://jsperf.com/testing-value-is-primitive/7
	module.exports = function isPrimitive(value) {
	  return value == null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isPrimitive = __webpack_require__(113);
	
	module.exports = function isEqual(a, b) {
	  if (!a && !b) { return true; }
	  if (!a && b || a && !b) { return false; }
	
	  var numKeysA = 0, numKeysB = 0, key;
	  for (key in b) {
	    numKeysB++;
	    if (!isPrimitive(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
	      return false;
	    }
	  }
	  for (key in a) {
	    numKeysA++;
	  }
	  return numKeysA === numKeysB;
	};


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var chars = __webpack_require__(116);
	var utils = __webpack_require__(77);
	
	/**
	 * Expose `Glob`
	 */
	
	var Glob = module.exports = function Glob(pattern, options) {
	  if (!(this instanceof Glob)) {
	    return new Glob(pattern, options);
	  }
	  this.options = options || {};
	  this.pattern = pattern;
	  this.history = [];
	  this.tokens = {};
	  this.init(pattern);
	};
	
	/**
	 * Initialize defaults
	 */
	
	Glob.prototype.init = function(pattern) {
	  this.orig = pattern;
	  this.negated = this.isNegated();
	  this.options.track = this.options.track || false;
	  this.options.makeRe = true;
	};
	
	/**
	 * Push a change into `glob.history`. Useful
	 * for debugging.
	 */
	
	Glob.prototype.track = function(msg) {
	  if (this.options.track) {
	    this.history.push({msg: msg, pattern: this.pattern});
	  }
	};
	
	/**
	 * Return true if `glob.pattern` was negated
	 * with `!`, also remove the `!` from the pattern.
	 *
	 * @return {Boolean}
	 */
	
	Glob.prototype.isNegated = function() {
	  if (this.pattern.charCodeAt(0) === 33 /* '!' */) {
	    this.pattern = this.pattern.slice(1);
	    return true;
	  }
	  return false;
	};
	
	/**
	 * Expand braces in the given glob pattern.
	 *
	 * We only need to use the [braces] lib when
	 * patterns are nested.
	 */
	
	Glob.prototype.braces = function() {
	  if (this.options.nobraces !== true && this.options.nobrace !== true) {
	    // naive/fast check for imbalanced characters
	    var a = this.pattern.match(/[\{\(\[]/g);
	    var b = this.pattern.match(/[\}\)\]]/g);
	
	    // if imbalanced, don't optimize the pattern
	    if (a && b && (a.length !== b.length)) {
	      this.options.makeRe = false;
	    }
	
	    // expand brace patterns and join the resulting array
	    var expanded = utils.braces(this.pattern, this.options);
	    this.pattern = expanded.join('|');
	  }
	};
	
	/**
	 * Expand bracket expressions in `glob.pattern`
	 */
	
	Glob.prototype.brackets = function() {
	  if (this.options.nobrackets !== true) {
	    this.pattern = utils.brackets(this.pattern);
	  }
	};
	
	/**
	 * Expand bracket expressions in `glob.pattern`
	 */
	
	Glob.prototype.extglob = function() {
	  if (this.options.noextglob === true) return;
	
	  if (utils.isExtglob(this.pattern)) {
	    this.pattern = utils.extglob(this.pattern, {escape: true});
	  }
	};
	
	/**
	 * Parse the given pattern
	 */
	
	Glob.prototype.parse = function(pattern) {
	  this.tokens = utils.parseGlob(pattern || this.pattern, true);
	  return this.tokens;
	};
	
	/**
	 * Replace `a` with `b`. Also tracks the change before and
	 * after each replacement. This is disabled by default, but
	 * can be enabled by setting `options.track` to true.
	 *
	 * Also, when the pattern is a string, `.split()` is used,
	 * because it's much faster than replace.
	 *
	 * @param  {RegExp|String} `a`
	 * @param  {String} `b`
	 * @param  {Boolean} `escape` When `true`, escapes `*` and `?` in the replacement.
	 * @return {String}
	 */
	
	Glob.prototype._replace = function(a, b, escape) {
	  this.track('before (find): "' + a + '" (replace with): "' + b + '"');
	  if (escape) b = esc(b);
	  if (a && b && typeof a === 'string') {
	    this.pattern = this.pattern.split(a).join(b);
	  } else {
	    this.pattern = this.pattern.replace(a, b);
	  }
	  this.track('after');
	};
	
	/**
	 * Escape special characters in the given string.
	 *
	 * @param  {String} `str` Glob pattern
	 * @return {String}
	 */
	
	Glob.prototype.escape = function(str) {
	  this.track('before escape: ');
	  var re = /["\\](['"]?[^"'\\]['"]?)/g;
	
	  this.pattern = str.replace(re, function($0, $1) {
	    var o = chars.ESC;
	    var ch = o && o[$1];
	    if (ch) {
	      return ch;
	    }
	    if (/[a-z]/i.test($0)) {
	      return $0.split('\\').join('');
	    }
	    return $0;
	  });
	
	  this.track('after escape: ');
	};
	
	/**
	 * Unescape special characters in the given string.
	 *
	 * @param  {String} `str`
	 * @return {String}
	 */
	
	Glob.prototype.unescape = function(str) {
	  var re = /__([A-Z]+)_([A-Z]+)__/g;
	  this.pattern = str.replace(re, function($0, $1) {
	    return chars[$1][$0];
	  });
	  this.pattern = unesc(this.pattern);
	};
	
	/**
	 * Escape/unescape utils
	 */
	
	function esc(str) {
	  str = str.split('?').join('%~');
	  str = str.split('*').join('%%');
	  return str;
	}
	
	function unesc(str) {
	  str = str.split('%~').join('?');
	  str = str.split('%%').join('*');
	  return str;
	}


/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';
	
	var chars = {}, unesc, temp;
	
	function reverse(object, prepender) {
	  return Object.keys(object).reduce(function(reversed, key) {
	    var newKey = prepender ? prepender + key : key; // Optionally prepend a string to key.
	    reversed[object[key]] = newKey; // Swap key and value.
	    return reversed; // Return the result.
	  }, {});
	}
	
	/**
	 * Regex for common characters
	 */
	
	chars.escapeRegex = {
	  '?': /\?/g,
	  '@': /\@/g,
	  '!': /\!/g,
	  '+': /\+/g,
	  '*': /\*/g,
	  '(': /\(/g,
	  ')': /\)/g,
	  '[': /\[/g,
	  ']': /\]/g
	};
	
	/**
	 * Escape characters
	 */
	
	chars.ESC = {
	  '?': '__UNESC_QMRK__',
	  '@': '__UNESC_AMPE__',
	  '!': '__UNESC_EXCL__',
	  '+': '__UNESC_PLUS__',
	  '*': '__UNESC_STAR__',
	  ',': '__UNESC_COMMA__',
	  '(': '__UNESC_LTPAREN__',
	  ')': '__UNESC_RTPAREN__',
	  '[': '__UNESC_LTBRACK__',
	  ']': '__UNESC_RTBRACK__'
	};
	
	/**
	 * Unescape characters
	 */
	
	chars.UNESC = unesc || (unesc = reverse(chars.ESC, '\\'));
	
	chars.ESC_TEMP = {
	  '?': '__TEMP_QMRK__',
	  '@': '__TEMP_AMPE__',
	  '!': '__TEMP_EXCL__',
	  '*': '__TEMP_STAR__',
	  '+': '__TEMP_PLUS__',
	  ',': '__TEMP_COMMA__',
	  '(': '__TEMP_LTPAREN__',
	  ')': '__TEMP_RTPAREN__',
	  '[': '__TEMP_LTBRACK__',
	  ']': '__TEMP_RTBRACK__'
	};
	
	chars.TEMP = temp || (temp = reverse(chars.ESC_TEMP));
	
	module.exports = chars;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * filter-values <https://github.com/jonschlinkert/filter-values>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	var forOwn = __webpack_require__(106);
	var matcher = __webpack_require__(118);
	
	/**
	 * Filter an object values using glob patterns
	 * or with a `callback` function returns true.
	 *
	 * @param  {Object} `obj`
	 * @param  {Function|Array|String|RegExp} `filter`
	 * @param  {Object} `options` pass options to `micromatch`
	 * @return {Object}
	 */
	
	module.exports = function filterValues(obj, filter, options) {
	  var isMatch = matcher(filter, options);
	  var res = {};
	
	  forOwn(obj, function (val, key) {
	    if (isMatch(val)) {
	      res[key] = val;
	    }
	  });
	  return res;
	};


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-match <https://github.com/jonschlinkert/is-match>
	 *
	 * Copyright (c) 2015-2016 Jon Schlinkert.
	 * Licensed under the MIT license.
	 */
	
	'use strict';
	
	var deepEqual = __webpack_require__(119);
	var isObject = __webpack_require__(105);
	var isGlob = __webpack_require__(101);
	var mm = __webpack_require__(75);
	
	function isMatch(pattern, options) {
	  options = options || {};
	
	  if (typeof pattern === 'function') {
	    return pattern;
	  }
	
	  if (pattern instanceof RegExp) {
	    return function(val) {
	      return pattern.test(val);
	    };
	  }
	
	  if (typeof pattern === 'string') {
	    if (isGlob(pattern)) {
	      return function(val) {
	        return mm(val, pattern, options).length !== 0;
	      };
	    }
	    return function(val) {
	      if (options.strict === true) {
	        return pattern === val;
	      }
	      return val.indexOf(pattern) > -1;
	    };
	  }
	
	  if (Array.isArray(pattern)) {
	    return function(val) {
	      return mm(val, pattern, options).length !== 0;
	    };
	  }
	
	  if (isObject(pattern)) {
	    return function(val) {
	      return deepEqual(val, pattern);
	    };
	  }
	
	  throw new TypeError('isMatch expects a string, array, regex, plain object or function:', arguments);
	}
	
	/**
	 * Expose `isMatch`
	 */
	
	module.exports = isMatch;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(120);
	var isArguments = __webpack_require__(121);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 120 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 121 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.pick <https://github.com/jonschlinkert/object.pick>
	 *
	 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
	 * Licensed under the MIT License
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(87);
	
	module.exports = function pick(obj, keys) {
	  if (!isObject(obj) && typeof obj !== 'function') {
	    return {};
	  }
	
	  var res = {};
	  if (typeof keys === 'string') {
	    if (keys in obj) {
	      res[keys] = obj[keys];
	    }
	    return res;
	  }
	
	  var len = keys.length;
	  var idx = -1;
	
	  while (++idx < len) {
	    var key = keys[idx];
	    if (key in obj) {
	      res[key] = obj[key];
	    }
	  }
	  return res;
	};


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(105);
	
	module.exports = function extend(o/*, objects*/) {
	  if (!isObject(o)) { o = {}; }
	
	  var len = arguments.length;
	  for (var i = 1; i < len; i++) {
	    var obj = arguments[i];
	
	    if (isObject(obj)) {
	      assign(o, obj);
	    }
	  }
	  return o;
	};
	
	function assign(a, b) {
	  for (var key in b) {
	    if (hasOwn(b, key)) {
	      a[key] = b[key];
	    }
	  }
	}
	
	/**
	 * Returns true if the given `key` is an own property of `obj`.
	 */
	
	function hasOwn(obj, key) {
	  return Object.prototype.hasOwnProperty.call(obj, key);
	}


/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';
	
	var oget = function (obj, path, def) {
	    var res = path
	    .replace(/\[/g, '.')
	    .replace(/\]/g, '')
	    .replace(/^\./, '')
	    .split('.')
	    .reduce(function (prev, curr) {
	        return prev && prev[curr]
	    }, obj);
	
	    return (res === undefined)
	      ? def
	      : res;
	};
	
	module.exports = oget;


/***/ },
/* 125 */
[352, 126],
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(127);
	__export(__webpack_require__(139));
	__export(__webpack_require__(146));
	__export(__webpack_require__(166));
	__export(__webpack_require__(140));
	__export(__webpack_require__(170));


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128).shim();
	__webpack_require__(132).shim();
	__webpack_require__(136).polyfill();
	__webpack_require__(137).polyfill();


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var ES = __webpack_require__(31);
	
	var implementation = __webpack_require__(129);
	var getPolyfill = __webpack_require__(130);
	var shim = __webpack_require__(131);
	
	var slice = Array.prototype.slice;
	
	var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
		ES.RequireObjectCoercible(array);
		var args = slice.call(arguments, 1);
		return implementation.apply(array, args);
	};
	
	define(boundFindShim, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	
	module.exports = boundFindShim;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ES = __webpack_require__(31);
	
	module.exports = function find(predicate) {
		var list = ES.ToObject(this);
		var length = ES.ToInteger(ES.ToLength(list.length));
		if (!ES.IsCallable(predicate)) {
			throw new TypeError('Array#find: predicate must be a function');
		}
		if (length === 0) {
			return undefined;
		}
		var thisArg = arguments[1];
		for (var i = 0, value; i < length; i++) {
			value = list[i];
			if (ES.Call(predicate, thisArg, [value, i, list])) {
				return value;
			}
		}
		return undefined;
	};


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function getPolyfill() {
		// Detect if an implementation exists
		// Detect early implementations which skipped holes in sparse arrays
	  // eslint-disable-next-line no-sparse-arrays
		var implemented = Array.prototype.find && [, 1].find(function () {
			return true;
		}) !== 1;
	
	  // eslint-disable-next-line global-require
		return implemented ? Array.prototype.find : __webpack_require__(129);
	};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var getPolyfill = __webpack_require__(130);
	
	module.exports = function shimArrayPrototypeFind() {
		var polyfill = getPolyfill();
	
		define(Array.prototype, { find: polyfill }, {
			find: function () {
				return Array.prototype.find !== polyfill;
			}
		});
	
		return polyfill;
	};


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var ES = __webpack_require__(31);
	
	var implementation = __webpack_require__(133);
	var getPolyfill = __webpack_require__(134);
	var shim = __webpack_require__(135);
	
	var slice = Array.prototype.slice;
	
	var boundShim = function findIndex(array, predicate) {
		ES.RequireObjectCoercible(array);
		return implementation.apply(array, predicate);
	};
	
	define(boundShim, {
		implementation: implementation,
		getPolyfill: getPolyfill,
		shim: shim
	});
	
	module.exports = boundShim;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// Array.prototype.findIndex - MIT License (c) 2013 Paul Miller <http://paulmillr.com>
	// For all details and docs: <https://github.com/paulmillr/Array.prototype.findIndex>
	'use strict';
	var ES = __webpack_require__(31);
	
	module.exports = function findIndex(predicate) {
		var list = ES.ToObject(this);
		var length = ES.ToLength(ES.ToLength(list.length));
		if (!ES.IsCallable(predicate)) {
			throw new TypeError('Array#findIndex: predicate must be a function');
		}
		if (length === 0) return -1;
		var thisArg = arguments[1];
		for (var i = 0, value; i < length; i++) {
			value = list[i];
			if (ES.Call(predicate, thisArg, [value, i, list])) return i;
		}
		return -1;
	};


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function getPolyfill() {
		// Detect if an implementation exists
		// Detect early implementations which skipped holes in sparse arrays
		var implemented = Array.prototype.findIndex && ([, 1].findIndex(function (item, idx) {
			return idx === 0;
		}) === 0);
	
	
		return implemented ? Array.prototype.findIndex : __webpack_require__(133);
	};


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var define = __webpack_require__(26);
	var getPolyfill = __webpack_require__(134);
	
	module.exports = function shimArrayPrototypeFindIndex() {
		var polyfill = getPolyfill();
	
		define(Array.prototype, { findIndex: polyfill }, {
			findIndex: function () {
				return Array.prototype.findIndex !== polyfill;
			}
		});
	
		return polyfill;
	};


/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Code refactored from Mozilla Developer Network:
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	 */
	
	'use strict';
	
	function assign(target, firstSource) {
	  if (target === undefined || target === null) {
	    throw new TypeError('Cannot convert first argument to object');
	  }
	
	  var to = Object(target);
	  for (var i = 1; i < arguments.length; i++) {
	    var nextSource = arguments[i];
	    if (nextSource === undefined || nextSource === null) {
	      continue;
	    }
	
	    var keysArray = Object.keys(Object(nextSource));
	    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	      var nextKey = keysArray[nextIndex];
	      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	      if (desc !== undefined && desc.enumerable) {
	        to[nextKey] = nextSource[nextKey];
	      }
	    }
	  }
	  return to;
	}
	
	function polyfill() {
	  if (!Object.assign) {
	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: assign
	    });
	  }
	}
	
	module.exports = {
	  assign: assign,
	  polyfill: polyfill
	};


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(138);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78), (function() { return this; }())))

/***/ },
/* 138 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var converter_1 = __webpack_require__(140);
	var clone = __webpack_require__(61);
	var deepEqual = __webpack_require__(119);
	var filterObject = __webpack_require__(71);
	var qs = __webpack_require__(141);
	var REFINEMENT_MASK = '{navigationName,value,low,high}';
	var Query = (function () {
	    function Query(query) {
	        if (query === void 0) { query = ''; }
	        this.request = {};
	        this.unprocessedNavigations = [];
	        this.queryParams = {};
	        this.request.query = query;
	        this.request.sort = [];
	        this.request.fields = [];
	        this.request.orFields = [];
	        this.request.refinements = [];
	        this.request.customUrlParams = [];
	        this.request.includedNavigations = [];
	        this.request.excludedNavigations = [];
	        this.request.wildcardSearchEnabled = false;
	        this.request.pruneRefinements = true;
	    }
	    Query.prototype.withQuery = function (query) {
	        this.request.query = query;
	        return this;
	    };
	    Query.prototype.withConfiguration = function (configuration, mask) {
	        if (mask === void 0) { mask = '*'; }
	        Object.assign(this.request, filterObject(configuration, mask));
	        return this;
	    };
	    Query.prototype.withSelectedRefinements = function () {
	        var _this = this;
	        var refinements = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            refinements[_i - 0] = arguments[_i];
	        }
	        refinements.forEach(function (ref) { return _this.addRefinement(ref, _this.request.refinements); });
	        return this;
	    };
	    Query.prototype.withoutSelectedRefinements = function () {
	        var _this = this;
	        var refinements = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            refinements[_i - 0] = arguments[_i];
	        }
	        refinements.forEach(function (refinement) {
	            var index = _this.request.refinements.findIndex(function (ref) { return deepEqual(ref, refinement); });
	            if (index > -1)
	                _this.request.refinements.splice(index, 1);
	        });
	        return this;
	    };
	    Query.prototype.withRefinements = function (navigationName) {
	        var _this = this;
	        var refinements = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            refinements[_i - 1] = arguments[_i];
	        }
	        var convert = function (refinement) { return Object.assign(refinement, { navigationName: navigationName }); };
	        refinements.map(convert).forEach(function (ref) { return _this.addRefinement(ref, _this.request.refinements); });
	        return this;
	    };
	    Query.prototype.withNavigations = function () {
	        var navigations = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            navigations[_i - 0] = arguments[_i];
	        }
	        (_a = this.unprocessedNavigations).push.apply(_a, navigations);
	        return this;
	        var _a;
	    };
	    Query.prototype.withCustomUrlParams = function (customUrlParams) {
	        if (typeof customUrlParams === 'string') {
	            (_a = this.request.customUrlParams).push.apply(_a, this.convertParamString(customUrlParams));
	        }
	        else if (customUrlParams instanceof Array) {
	            (_b = this.request.customUrlParams).push.apply(_b, customUrlParams);
	        }
	        return this;
	        var _a, _b;
	    };
	    Query.prototype.withFields = function () {
	        var fields = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            fields[_i - 0] = arguments[_i];
	        }
	        (_a = this.request.fields).push.apply(_a, fields);
	        return this;
	        var _a;
	    };
	    Query.prototype.withOrFields = function () {
	        var orFields = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            orFields[_i - 0] = arguments[_i];
	        }
	        (_a = this.request.orFields).push.apply(_a, orFields);
	        return this;
	        var _a;
	    };
	    Query.prototype.withSorts = function () {
	        var sorts = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sorts[_i - 0] = arguments[_i];
	        }
	        (_a = this.request.sort).push.apply(_a, sorts);
	        return this;
	        var _a;
	    };
	    Query.prototype.withoutSorts = function () {
	        var sorts = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sorts[_i - 0] = arguments[_i];
	        }
	        this.request.sort = this.request.sort.filter(function (oldSort) { return !sorts.find(function (sort) { return sort.field === oldSort.field; }); });
	        return this;
	    };
	    Query.prototype.withIncludedNavigations = function () {
	        var navigationNames = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            navigationNames[_i - 0] = arguments[_i];
	        }
	        (_a = this.request.includedNavigations).push.apply(_a, navigationNames);
	        return this;
	        var _a;
	    };
	    Query.prototype.withExcludedNavigations = function () {
	        var navigationNames = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            navigationNames[_i - 0] = arguments[_i];
	        }
	        (_a = this.request.excludedNavigations).push.apply(_a, navigationNames);
	        return this;
	        var _a;
	    };
	    Query.prototype.withQueryParams = function (queryParams) {
	        switch (typeof queryParams) {
	            case 'string':
	                return Object.assign(this, { queryParams: this.convertQueryString(queryParams) });
	            case 'object':
	                return Object.assign(this, { queryParams: queryParams });
	        }
	    };
	    Query.prototype.refineByValue = function (navigationName, value, exclude) {
	        if (exclude === void 0) { exclude = false; }
	        return this.withSelectedRefinements({
	            navigationName: navigationName,
	            value: value,
	            exclude: exclude,
	            type: 'Value'
	        });
	    };
	    Query.prototype.refineByRange = function (navigationName, low, high, exclude) {
	        if (exclude === void 0) { exclude = false; }
	        return this.withSelectedRefinements({
	            navigationName: navigationName,
	            low: low,
	            high: high,
	            exclude: exclude,
	            type: 'Range'
	        });
	    };
	    Query.prototype.restrictNavigation = function (restrictNavigation) {
	        this.request.restrictNavigation = restrictNavigation;
	        return this;
	    };
	    Query.prototype.skip = function (skip) {
	        this.request.skip = skip;
	        return this;
	    };
	    Query.prototype.withPageSize = function (pageSize) {
	        this.request.pageSize = pageSize;
	        return this;
	    };
	    Query.prototype.withMatchStrategy = function (matchStrategy) {
	        this.request.matchStrategy = matchStrategy;
	        return this;
	    };
	    Query.prototype.withBiasing = function (biasing) {
	        this.request.biasing = biasing;
	        return this;
	    };
	    Query.prototype.enableWildcardSearch = function () {
	        this.request.wildcardSearchEnabled = true;
	        return this;
	    };
	    Query.prototype.disableAutocorrection = function () {
	        this.request.disableAutocorrection = true;
	        return this;
	    };
	    Query.prototype.disableBinaryPayload = function () {
	        this.request.returnBinary = false;
	        return this;
	    };
	    Query.prototype.allowPrunedRefinements = function () {
	        this.request.pruneRefinements = false;
	        return this;
	    };
	    Query.prototype.build = function () {
	        var _this = this;
	        var builtRequest = this.raw;
	        converter_1.NavigationConverter.convert(this.unprocessedNavigations)
	            .forEach(function (ref) { return _this.addRefinement(ref, builtRequest.refinements); });
	        return this.clearEmptyArrays(builtRequest);
	    };
	    Object.defineProperty(Query.prototype, "raw", {
	        get: function () {
	            return clone(this.request, false);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Query.prototype, "rawNavigations", {
	        get: function () {
	            return Object.create(this.unprocessedNavigations);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Query.prototype.addRefinement = function (refinement, refinements) {
	        var _this = this;
	        if (!refinements.find(function (ref) { return _this.refinementMatches(ref, refinement); })) {
	            refinements.push(refinement);
	        }
	    };
	    Query.prototype.refinementMatches = function (target, original) {
	        return deepEqual(filterObject(target, REFINEMENT_MASK), filterObject(original, REFINEMENT_MASK));
	    };
	    Query.prototype.convertParamString = function (customUrlParams) {
	        var parsed = qs.parse(customUrlParams);
	        return Object.keys(parsed).reduce(function (converted, key) { return converted.concat({ key: key, value: parsed[key] }); }, []);
	    };
	    Query.prototype.convertQueryString = function (queryParams) {
	        return qs.parse(queryParams);
	    };
	    Query.prototype.clearEmptyArrays = function (request) {
	        for (var key in request) {
	            if (request[key] instanceof Array && request[key].length === 0) {
	                delete request[key];
	            }
	        }
	        return request;
	    };
	    return Query;
	}());
	exports.Query = Query;


/***/ },
/* 140 */
/***/ function(module, exports) {

	"use strict";
	var NavigationConverter = (function () {
	    function NavigationConverter() {
	    }
	    NavigationConverter.convert = function (navigations) {
	        return navigations.reduce(function (refinements, navigation) {
	            navigation.refinements
	                .forEach(function (refinement) { return refinements.push(Object.assign(refinement, { navigationName: navigation.name })); });
	            return refinements;
	        }, []);
	    };
	    return NavigationConverter;
	}());
	exports.NavigationConverter = NavigationConverter;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var stringify = __webpack_require__(142);
	var parse = __webpack_require__(145);
	var formats = __webpack_require__(144);
	
	module.exports = {
	    formats: formats,
	    parse: parse,
	    stringify: stringify
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(143);
	var formats = __webpack_require__(144);
	
	var arrayPrefixGenerators = {
	    brackets: function brackets(prefix) {
	        return prefix + '[]';
	    },
	    indices: function indices(prefix, key) {
	        return prefix + '[' + key + ']';
	    },
	    repeat: function repeat(prefix) {
	        return prefix;
	    }
	};
	
	var toISO = Date.prototype.toISOString;
	
	var defaults = {
	    delimiter: '&',
	    encode: true,
	    encoder: utils.encode,
	    serializeDate: function serializeDate(date) {
	        return toISO.call(date);
	    },
	    skipNulls: false,
	    strictNullHandling: false
	};
	
	var stringify = function stringify(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (obj instanceof Date) {
	        obj = serializeDate(obj);
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encoder ? encoder(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
	        if (encoder) {
	            return [formatter(encoder(prefix)) + '=' + formatter(encoder(obj))];
	        }
	        return [formatter(prefix) + '=' + formatter(String(obj))];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(stringify(
	                obj[key],
	                generateArrayPrefix(prefix, key),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        } else {
	            values = values.concat(stringify(
	                obj[key],
	                prefix + (allowDots ? '.' + key : '[' + key + ']'),
	                generateArrayPrefix,
	                strictNullHandling,
	                skipNulls,
	                encoder,
	                filter,
	                sort,
	                allowDots,
	                serializeDate,
	                formatter
	            ));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
	    var encoder = encode ? (typeof options.encoder === 'function' ? options.encoder : defaults.encoder) : null;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
	    if (typeof options.format === 'undefined') {
	        options.format = formats.default;
	    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
	        throw new TypeError('Unknown format option provided.');
	    }
	    var formatter = formats.formatters[options.format];
	    var objKeys;
	    var filter;
	
	    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
	        throw new TypeError('Encoder has to be a function.');
	    }
	
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        filter = options.filter;
	        objKeys = filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(stringify(
	            obj[key],
	            key,
	            generateArrayPrefix,
	            strictNullHandling,
	            skipNulls,
	            encoder,
	            filter,
	            sort,
	            allowDots,
	            serializeDate,
	            formatter
	        ));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	var hexTable = (function () {
	    var array = [];
	    for (var i = 0; i < 256; ++i) {
	        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options && options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
	    if (Array.isArray(target) && Array.isArray(source)) {
	        source.forEach(function (item, i) {
	            if (has.call(target, i)) {
	                if (target[i] && typeof target[i] === 'object') {
	                    target[i] = exports.merge(target[i], item, options);
	                } else {
	                    target.push(item);
	                }
	            } else {
	                target[i] = item;
	            }
	        });
	        return target;
	    }
	
	    return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
	        return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)];
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (obj[i] && typeof obj[i] === 'object') {
	                compacted.push(exports.compact(obj[i], refs));
	            } else if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	        obj[key] = exports.compact(obj[key], refs);
	    });
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 144 */
/***/ function(module, exports) {

	'use strict';
	
	var replace = String.prototype.replace;
	var percentTwenties = /%20/g;
	
	module.exports = {
	    'default': 'RFC3986',
	    formatters: {
	        RFC1738: function (value) {
	            return replace.call(value, percentTwenties, '+');
	        },
	        RFC3986: function (value) {
	            return value;
	        }
	    },
	    RFC1738: 'RFC1738',
	    RFC3986: 'RFC3986'
	};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(143);
	
	var has = Object.prototype.hasOwnProperty;
	
	var defaults = {
	    allowDots: false,
	    allowPrototypes: false,
	    arrayLimit: 20,
	    decoder: utils.decode,
	    delimiter: '&',
	    depth: 5,
	    parameterLimit: 1000,
	    plainObjects: false,
	    strictNullHandling: false
	};
	
	var parseValues = function parseValues(str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        var key, val;
	        if (pos === -1) {
	            key = options.decoder(part);
	            val = options.strictNullHandling ? null : '';
	        } else {
	            key = options.decoder(part.slice(0, pos));
	            val = options.decoder(part.slice(pos + 1));
	        }
	        if (has.call(obj, key)) {
	            obj[key] = [].concat(obj[key]).concat(val);
	        } else {
	            obj[key] = val;
	        }
	    }
	
	    return obj;
	};
	
	var parseObject = function parseObject(chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	var parseKeys = function parseKeys(givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && has.call(Object.prototype, segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && has.call(Object.prototype, segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	
	    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
	        throw new TypeError('Decoder has to be a function.');
	    }
	
	    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
	
	    if (str === '' || str === null || typeof str === 'undefined') {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = parseKeys(key, tempObj[key], options);
	        obj = utils.merge(obj, newObj, options);
	    }
	
	    return utils.compact(obj);
	};


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var query_1 = __webpack_require__(139);
	var axios = __webpack_require__(147);
	var SEARCH = '/search';
	var REFINEMENTS = '/refinements';
	var INVALID_QUERY_ERROR = 'query was not of a recognised type';
	exports.DEFAULT_CONFIG = {
	    timeout: 1500
	};
	var AbstractBridge = (function () {
	    function AbstractBridge(config) {
	        this.headers = {};
	        this.config = Object.assign({}, exports.DEFAULT_CONFIG, config);
	    }
	    AbstractBridge.prototype.search = function (query, callback) {
	        var _this = this;
	        var _a = this.extractRequest(query), request = _a.request, queryParams = _a.queryParams;
	        if (request === null)
	            return this.generateError(INVALID_QUERY_ERROR, callback);
	        var response = this.fireRequest(this.bridgeUrl, request, queryParams)
	            .then(function (res) { return res.records ? Object.assign(res, { records: res.records.map(_this.convertRecordFields) }) : res; });
	        return this.handleResponse(response, callback);
	    };
	    AbstractBridge.prototype.refinements = function (query, navigationName, callback) {
	        var request = this.extractRequest(query).request;
	        if (request === null)
	            return this.generateError(INVALID_QUERY_ERROR, callback);
	        var refinementsRequest = { originalQuery: request, navigationName: navigationName };
	        var response = this.fireRequest(this.refinementsUrl, refinementsRequest);
	        return this.handleResponse(response, callback);
	    };
	    AbstractBridge.prototype.handleResponse = function (response, callback) {
	        if (callback) {
	            response.then(function (res) { return callback(undefined, res); }, function (err) { return callback(err); });
	        }
	        else {
	            return response;
	        }
	    };
	    AbstractBridge.prototype.extractRequest = function (query) {
	        switch (typeof query) {
	            case 'string': return { request: new query_1.Query(query).build(), queryParams: {} };
	            case 'object': return query instanceof query_1.Query
	                ? { request: query.build(), queryParams: query.queryParams }
	                : { request: query, queryParams: {} };
	            default: return { request: null, queryParams: null };
	        }
	    };
	    AbstractBridge.prototype.generateError = function (error, callback) {
	        var err = new Error(error);
	        if (callback) {
	            callback(err);
	        }
	        else {
	            return Promise.reject(err);
	        }
	    };
	    AbstractBridge.prototype.fireRequest = function (url, body, queryParams) {
	        var _this = this;
	        if (queryParams === void 0) { queryParams = {}; }
	        var options = {
	            url: url,
	            method: 'post',
	            params: queryParams,
	            data: this.augmentRequest(body),
	            headers: this.headers,
	            responseType: 'json',
	            timeout: this.config.timeout
	        };
	        return axios(options)
	            .then(function (res) { return res.data; })
	            .catch(function (err) {
	            if (_this.errorHandler) {
	                _this.errorHandler(err);
	            }
	            throw err;
	        });
	    };
	    AbstractBridge.prototype.convertRecordFields = function (record) {
	        var converted = Object.assign(record, { id: record._id, url: record._u, title: record._t });
	        delete converted._id;
	        delete converted._u;
	        delete converted._t;
	        if (record._snippet) {
	            converted.snippet = record._snippet;
	            delete converted._snippet;
	        }
	        return converted;
	    };
	    return AbstractBridge;
	}());
	exports.AbstractBridge = AbstractBridge;
	var CloudBridge = (function (_super) {
	    __extends(CloudBridge, _super);
	    function CloudBridge(clientKey, customerId, config) {
	        if (config === void 0) { config = {}; }
	        _super.call(this, config);
	        this.clientKey = clientKey;
	        this.baseUrl = "https://" + customerId + ".groupbycloud.com:443/api/v1";
	        this.bridgeUrl = this.baseUrl + SEARCH;
	        this.refinementsUrl = this.bridgeUrl + REFINEMENTS;
	    }
	    CloudBridge.prototype.augmentRequest = function (request) {
	        return Object.assign(request, { clientKey: this.clientKey });
	    };
	    return CloudBridge;
	}(AbstractBridge));
	exports.CloudBridge = CloudBridge;
	var BrowserBridge = (function (_super) {
	    __extends(BrowserBridge, _super);
	    function BrowserBridge(customerId, https, config) {
	        if (https === void 0) { https = false; }
	        if (config === void 0) { config = {}; }
	        _super.call(this, config);
	        var scheme = https ? 'https' : 'http';
	        var port = https ? ':443' : '';
	        this.baseUrl = scheme + "://" + customerId + "-cors.groupbycloud.com" + port + "/api/v1";
	        this.bridgeUrl = this.baseUrl + SEARCH;
	        this.refinementsUrl = this.bridgeUrl + REFINEMENTS;
	    }
	    BrowserBridge.prototype.augmentRequest = function (request) {
	        return request;
	    };
	    return BrowserBridge;
	}(AbstractBridge));
	exports.BrowserBridge = BrowserBridge;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(149);
	var utils = __webpack_require__(150);
	var dispatchRequest = __webpack_require__(152);
	var InterceptorManager = __webpack_require__(161);
	var isAbsoluteURL = __webpack_require__(162);
	var combineURLs = __webpack_require__(163);
	var bind = __webpack_require__(164);
	var transformData = __webpack_require__(156);
	
	function Axios(defaultConfig) {
	  this.defaults = utils.merge({}, defaultConfig);
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Don't allow overriding defaults.withCredentials
	  config.withCredentials = config.withCredentials || this.defaults.withCredentials;
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	var defaultInstance = new Axios(defaults);
	var axios = module.exports = bind(Axios.prototype.request, defaultInstance);
	axios.request = bind(Axios.prototype.request, defaultInstance);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Expose properties from defaultInstance
	axios.defaults = defaultInstance.defaults;
	axios.interceptors = defaultInstance.interceptors;
	
	// Factory for creating new instances
	axios.create = function create(defaultConfig) {
	  return new Axios(defaultConfig);
	};
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(165);
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	  axios[method] = bind(Axios.prototype[method], defaultInstance);
	});


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	var normalizeHeaderName = __webpack_require__(151);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	module.exports = {
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    },
	    patch: utils.merge(DEFAULT_CONTENT_TYPE),
	    post: utils.merge(DEFAULT_CONTENT_TYPE),
	    put: utils.merge(DEFAULT_CONTENT_TYPE)
	  },
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};


/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  trim: trim
	};


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Dispatch a request to the server using whichever adapter
	 * is supported by the current environment.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  return new Promise(function executor(resolve, reject) {
	    try {
	      var adapter;
	
	      if (typeof config.adapter === 'function') {
	        // For custom adapter support
	        adapter = config.adapter;
	      } else if (typeof XMLHttpRequest !== 'undefined') {
	        // For browsers use XHR adapter
	        adapter = __webpack_require__(153);
	      } else if (typeof process !== 'undefined') {
	        // For node use HTTP adapter
	        adapter = __webpack_require__(153);
	      }
	
	      if (typeof adapter === 'function') {
	        adapter(resolve, reject, config);
	      }
	    } catch (e) {
	      reject(e);
	    }
	  });
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(150);
	var buildURL = __webpack_require__(154);
	var parseHeaders = __webpack_require__(155);
	var transformData = __webpack_require__(156);
	var isURLSameOrigin = __webpack_require__(157);
	var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(158);
	var settle = __webpack_require__(159);
	
	module.exports = function xhrAdapter(resolve, reject, config) {
	  var requestData = config.data;
	  var requestHeaders = config.headers;
	
	  if (utils.isFormData(requestData)) {
	    delete requestHeaders['Content-Type']; // Let the browser set it
	  }
	
	  var request = new XMLHttpRequest();
	  var loadEvent = 'onreadystatechange';
	  var xDomain = false;
	
	  // For IE 8/9 CORS support
	  // Only supports POST and GET calls and doesn't returns the response headers.
	  // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	  if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	    request = new window.XDomainRequest();
	    loadEvent = 'onload';
	    xDomain = true;
	    request.onprogress = function handleProgress() {};
	    request.ontimeout = function handleTimeout() {};
	  }
	
	  // HTTP basic authentication
	  if (config.auth) {
	    var username = config.auth.username || '';
	    var password = config.auth.password || '';
	    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	  }
	
	  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	  // Set the request timeout in MS
	  request.timeout = config.timeout;
	
	  // Listen for ready state
	  request[loadEvent] = function handleLoad() {
	    if (!request || (request.readyState !== 4 && !xDomain)) {
	      return;
	    }
	
	    // The request errored out and we didn't get a response, this will be
	    // handled by onerror instead
	    if (request.status === 0) {
	      return;
	    }
	
	    // Prepare the response
	    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	    var response = {
	      data: transformData(
	        responseData,
	        responseHeaders,
	        config.transformResponse
	      ),
	      // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	      status: request.status === 1223 ? 204 : request.status,
	      statusText: request.status === 1223 ? 'No Content' : request.statusText,
	      headers: responseHeaders,
	      config: config,
	      request: request
	    };
	
	    settle(resolve, reject, response);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle low level network errors
	  request.onerror = function handleError() {
	    // Real errors are hidden from us by the browser
	    // onerror should only fire if it's a network error
	    reject(new Error('Network Error'));
	
	    // Clean up request
	    request = null;
	  };
	
	  // Handle timeout
	  request.ontimeout = function handleTimeout() {
	    var err = new Error('timeout of ' + config.timeout + 'ms exceeded');
	    err.timeout = config.timeout;
	    err.code = 'ECONNABORTED';
	    reject(err);
	
	    // Clean up request
	    request = null;
	  };
	
	  // Add xsrf header
	  // This is only done if running in a standard browser environment.
	  // Specifically not if we're in a web worker, or react-native.
	  if (utils.isStandardBrowserEnv()) {
	    var cookies = __webpack_require__(160);
	
	    // Add xsrf header
	    var xsrfValue = config.withCredentials || isURLSameOrigin(config.url) ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	    if (xsrfValue) {
	      requestHeaders[config.xsrfHeaderName] = xsrfValue;
	    }
	  }
	
	  // Add headers to the request
	  if ('setRequestHeader' in request) {
	    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	        // Remove Content-Type if data is undefined
	        delete requestHeaders[key];
	      } else {
	        // Otherwise add header to the request
	        request.setRequestHeader(key, val);
	      }
	    });
	  }
	
	  // Add withCredentials to request if needed
	  if (config.withCredentials) {
	    request.withCredentials = true;
	  }
	
	  // Add responseType to request if needed
	  if (config.responseType) {
	    try {
	      request.responseType = config.responseType;
	    } catch (e) {
	      if (request.responseType !== 'json') {
	        throw e;
	      }
	    }
	  }
	
	  // Handle progress if needed
	  if (config.progress) {
	    if (config.method === 'post' || config.method === 'put') {
	      request.upload.addEventListener('progress', config.progress);
	    } else if (config.method === 'get') {
	      request.addEventListener('progress', config.progress);
	    }
	  }
	
	  if (requestData === undefined) {
	    requestData = null;
	  }
	
	  // Send the request
	  request.send(requestData);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(response);
	  }
	};


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(150);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 162 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var bridge_1 = __webpack_require__(146);
	var query_1 = __webpack_require__(139);
	var pager_1 = __webpack_require__(167);
	exports.Pager = pager_1.Pager;
	var EventEmitter = __webpack_require__(169);
	var filterObject = __webpack_require__(71);
	var Events;
	(function (Events) {
	    Events.COLLECTION_CHANGED = 'collection_changed';
	    Events.DETAILS = 'details';
	    Events.ERROR_BRIDGE = 'error:bridge';
	    Events.PAGE_CHANGED = 'page_changed';
	    Events.QUERY_CHANGED = 'query_changed';
	    Events.REDIRECT = 'redirect';
	    Events.REFINEMENT_RESULTS = 'refinement_results';
	    Events.REFINEMENTS_CHANGED = 'refinements_changed';
	    Events.RESET = 'reset';
	    Events.RESULTS = 'results';
	    Events.REWRITE_QUERY = 'rewrite_query';
	    Events.SEARCH = 'search';
	    Events.SORT = 'sort';
	})(Events = exports.Events || (exports.Events = {}));
	var FluxCapacitor = (function (_super) {
	    __extends(FluxCapacitor, _super);
	    function FluxCapacitor(endpoint, config, mask) {
	        var _this = this;
	        if (config === void 0) { config = {}; }
	        _super.call(this);
	        this.originalQuery = '';
	        var bridgeConfig = config.bridge || {};
	        this.bridge = new bridge_1.BrowserBridge(endpoint, bridgeConfig.https, bridgeConfig);
	        if (bridgeConfig.headers)
	            this.bridge.headers = bridgeConfig.headers;
	        this.bridge.errorHandler = function (err) {
	            _this.emit(Events.ERROR_BRIDGE, err);
	            if (bridgeConfig.errorHandler)
	                bridgeConfig.errorHandler(err);
	        };
	        this.query = new query_1.Query().withConfiguration(filterObject(config, ['*', '!{bridge}']), mask);
	        this.page = new pager_1.Pager(this);
	    }
	    FluxCapacitor.prototype.search = function (originalQuery) {
	        var _this = this;
	        if (originalQuery === void 0) { originalQuery = this.originalQuery; }
	        this.query.withQuery(originalQuery);
	        this.emit(Events.SEARCH, this.query.raw);
	        return this.bridge.search(this.query)
	            .then(function (results) {
	            var oldQuery = _this.originalQuery;
	            Object.assign(_this, { results: results, originalQuery: originalQuery });
	            if (results.redirect) {
	                _this.emit(Events.REDIRECT, results.redirect);
	            }
	            _this.emit(Events.RESULTS, results);
	            _this.emitQueryChanged(oldQuery, originalQuery);
	            return results;
	        });
	    };
	    FluxCapacitor.prototype.refinements = function (navigationName) {
	        var _this = this;
	        return this.bridge.refinements(this.query, navigationName)
	            .then(function (results) {
	            _this.emit(Events.REFINEMENT_RESULTS, results);
	            return results;
	        });
	    };
	    FluxCapacitor.prototype.rewrite = function (query, config) {
	        var _this = this;
	        if (config === void 0) { config = {}; }
	        var search;
	        if (config.skipSearch) {
	            this.emitQueryChanged(this.originalQuery, query);
	            search = Promise.resolve(this.query.withQuery(this.originalQuery = query));
	        }
	        else {
	            search = this.search(query);
	        }
	        return search.then(function () { return _this.emit(Events.REWRITE_QUERY, query); })
	            .then(function () { return query; });
	    };
	    FluxCapacitor.prototype.resetRecall = function () {
	        this.query = new query_1.Query().withConfiguration(this.filteredRequest);
	    };
	    FluxCapacitor.prototype.reset = function (query) {
	        var _this = this;
	        if (query === void 0) { query = this.originalQuery; }
	        this.resetRecall();
	        this.emit(Events.PAGE_CHANGED, { pageNumber: 1 });
	        return this.search(query)
	            .then(function (res) { return _this.emit(Events.RESET, res); })
	            .then(function () { return query; });
	    };
	    FluxCapacitor.prototype.resize = function (pageSize, resetOffset) {
	        this.query.withPageSize(pageSize);
	        if (resetOffset) {
	            return this.page.switchPage(1);
	        }
	        else {
	            var total = this.page.restrictTotalRecords(this.page.fromResult, pageSize);
	            var page = this.page.getPage(total);
	            return this.page.switchPage(page);
	        }
	    };
	    FluxCapacitor.prototype.sort = function (sort, clearSorts) {
	        var _this = this;
	        if (clearSorts === void 0) { clearSorts = [sort]; }
	        (_a = this.query).withoutSorts.apply(_a, clearSorts).withSorts(sort);
	        return this.page.reset()
	            .then(function (res) {
	            _this.emit(Events.SORT, _this.query.raw.sort);
	            return res;
	        });
	        var _a;
	    };
	    FluxCapacitor.prototype.refine = function (refinement, config) {
	        if (config === void 0) { config = { reset: true }; }
	        this.query.withSelectedRefinements(refinement);
	        if (config.skipSearch)
	            return Promise.resolve(this.navigationInfo);
	        return this.doRefinement(config);
	    };
	    FluxCapacitor.prototype.unrefine = function (refinement, config) {
	        if (config === void 0) { config = { reset: true }; }
	        this.query.withoutSelectedRefinements(refinement);
	        if (config.skipSearch)
	            return Promise.resolve(this.navigationInfo);
	        return this.doRefinement(config);
	    };
	    FluxCapacitor.prototype.details = function (id, navigationName) {
	        var _this = this;
	        if (navigationName === void 0) { navigationName = 'id'; }
	        return this.bridge.search(new query_1.Query()
	            .withConfiguration(this.query.raw, '{area,collection,language,fields}')
	            .withSelectedRefinements({ type: 'Value', navigationName: navigationName, value: id })
	            .withPageSize(1))
	            .then(function (res) {
	            if (res.records.length)
	                _this.emit(Events.DETAILS, res.records[0]);
	            return res;
	        });
	    };
	    FluxCapacitor.prototype.switchCollection = function (collection) {
	        var _this = this;
	        this.query.withConfiguration({ collection: collection, refinements: [], sort: [], skip: 0 });
	        return this.search()
	            .then(function (res) {
	            _this.emit(Events.COLLECTION_CHANGED, collection);
	            return res;
	        });
	    };
	    FluxCapacitor.prototype.emitQueryChanged = function (oldQuery, newQuery) {
	        if (oldQuery.toLowerCase() !== newQuery.toLowerCase()) {
	            this.emit(Events.QUERY_CHANGED, newQuery);
	        }
	    };
	    Object.defineProperty(FluxCapacitor.prototype, "filteredRequest", {
	        get: function () {
	            return filterObject(this.query.raw, '!{query,refinements,skip}');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    FluxCapacitor.prototype.resetPaging = function (reset) {
	        return reset ? this.page.reset() : this.search();
	    };
	    FluxCapacitor.prototype.doRefinement = function (_a) {
	        var _this = this;
	        var reset = _a.reset;
	        return this.resetPaging(reset)
	            .then(function () { return _this.emit(Events.REFINEMENTS_CHANGED, _this.navigationInfo); })
	            .then(function () { return _this.navigationInfo; });
	    };
	    Object.defineProperty(FluxCapacitor.prototype, "navigationInfo", {
	        get: function () {
	            return {
	                available: this.results.availableNavigation,
	                selected: this.results.selectedNavigation
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return FluxCapacitor;
	}(EventEmitter));
	exports.FluxCapacitor = FluxCapacitor;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var capacitor_1 = __webpack_require__(166);
	var range = __webpack_require__(168);
	var MAX_RECORDS = 10000;
	var Pager = (function () {
	    function Pager(flux) {
	        this.flux = flux;
	    }
	    Pager.prototype.next = function () {
	        return this.switchPage(this.nextPage);
	    };
	    Pager.prototype.prev = function () {
	        return this.switchPage(this.previousPage);
	    };
	    Pager.prototype.last = function () {
	        return this.switchPage(this.finalPage);
	    };
	    Pager.prototype.reset = function () {
	        return this.switchPage(this.firstPage);
	    };
	    Object.defineProperty(Pager.prototype, "currentPage", {
	        get: function () {
	            return this.getPage(this.fromResult);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "previousPage", {
	        get: function () {
	            return (this.currentPage - 1 >= this.firstPage) ? this.currentPage - 1 : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "nextPage", {
	        get: function () {
	            return (this.currentPage + 1 <= this.finalPage) ? this.currentPage + 1 : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "firstPage", {
	        get: function () {
	            return 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "finalPage", {
	        get: function () {
	            return Math.max(this.getPage(this.restrictTotalRecords(this.totalRecords, this.pageSize)), 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "fromResult", {
	        get: function () {
	            return this.flux.query.build().skip + 1 || 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "toResult", {
	        get: function () {
	            if ((this.currentPage * this.pageSize) > this.totalRecords) {
	                return ((this.currentPage - 1) * this.pageSize) + (this.totalRecords % this.currentPage);
	            }
	            else {
	                return this.currentPage * this.pageSize;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Pager.prototype, "totalRecords", {
	        get: function () {
	            return this.flux.results ? this.flux.results.totalRecordCount : 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Pager.prototype.pageExists = function (page) {
	        return page <= this.finalPage && page >= this.firstPage;
	    };
	    Pager.prototype.pageNumbers = function (limit) {
	        if (limit === void 0) { limit = 5; }
	        return range(1, Math.min(this.finalPage + 1, limit + 1))
	            .map(this.transformPages(limit));
	    };
	    Pager.prototype.switchPage = function (page) {
	        if (this.pageExists(page)) {
	            var skip = (page - 1) * this.pageSize;
	            this.flux.query.skip(skip);
	            this.flux.emit(capacitor_1.Events.PAGE_CHANGED, { pageNumber: page });
	            return this.flux.search();
	        }
	        else {
	            return Promise.reject(new Error("page " + page + " does not exist"));
	        }
	    };
	    Pager.prototype.restrictTotalRecords = function (total, pageSize) {
	        if (total > MAX_RECORDS) {
	            return MAX_RECORDS - (MAX_RECORDS % pageSize);
	        }
	        else if ((total + pageSize) > MAX_RECORDS) {
	            if (MAX_RECORDS % pageSize === 0) {
	                return MAX_RECORDS;
	            }
	            else {
	                return total - (total % pageSize);
	            }
	        }
	        else {
	            return total;
	        }
	    };
	    Pager.prototype.getPage = function (record) {
	        return Math.ceil(record / this.pageSize);
	    };
	    Pager.prototype.transformPages = function (limit) {
	        var _this = this;
	        var border = Math.ceil(limit / 2);
	        return function (value) {
	            // account for 0-indexed pages
	            if (_this.currentPage <= border || limit > _this.finalPage) {
	                // pages start at beginning
	                return value;
	            }
	            else if (_this.currentPage > _this.finalPage - border) {
	                // pages start and end in the middle
	                return value + _this.finalPage - limit;
	            }
	            else {
	                // pages end at last page
	                return value + _this.currentPage - border;
	            }
	        };
	    };
	    Object.defineProperty(Pager.prototype, "pageSize", {
	        get: function () {
	            return this.flux.query.build().pageSize || 10;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Pager;
	}());
	exports.Pager = Pager;


/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);
	
	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}
	
	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	    return baseRange(start, end, step, fromRight);
	  };
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();
	
	module.exports = range;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = Object.prototype.hasOwnProperty;
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;
	
	  if (!events) return names;
	
	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }
	
	  return names;
	};
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 170 */
/***/ function(module, exports) {

	"use strict";
	var Request = (function () {
	    function Request() {
	    }
	    return Request;
	}());
	exports.Request = Request;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(57);
	var common_1 = __webpack_require__(60);
	var init_1 = __webpack_require__(58);
	var groupby_api_1 = __webpack_require__(125);
	exports.FILTER_UPDATED_EVENT = 'filter_updated';
	var Filter = (function () {
	    function Filter(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        init_1.lazyMixin(this);
	        this.fluxClone = this.clone();
	        this.filterConfig = common_1.getPath(config, 'tags.filter') || {};
	    }
	    Filter.prototype.init = function () {
	        // lazy service
	    };
	    Filter.prototype.lazyInit = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.RESULTS, function () { return _this.updateFluxClone(); });
	        this.updateFluxClone();
	    };
	    Filter.prototype.updateFluxClone = function () {
	        var _this = this;
	        var searchRequest = this.flux.query.raw;
	        // TODO: this is probably broken in terms of state propagation
	        this.fluxClone.query.withConfiguration({ refinements: [] });
	        if (searchRequest.refinements) {
	            var filteredRefinements = searchRequest.refinements
	                .filter(function (_a) {
	                var navigationName = _a.navigationName;
	                return !_this.isTargetNav(navigationName);
	            });
	            (_a = this.fluxClone.query).withSelectedRefinements.apply(_a, filteredRefinements);
	        }
	        return this.fluxClone.search(searchRequest.query)
	            .then(function (res) { return _this.flux.emit(exports.FILTER_UPDATED_EVENT, res); });
	        var _a;
	    };
	    Filter.prototype.isTargetNav = function (navName) {
	        return navName === this.filterConfig.field;
	    };
	    Filter.prototype.clone = function () {
	        return new groupby_api_1.FluxCapacitor(this.config.customerId, this.config, searchandiser_1.CONFIGURATION_MASK);
	    };
	    return Filter;
	}());
	exports.Filter = Filter;


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var groupby_api_1 = __webpack_require__(125);
	var Redirect = (function () {
	    function Redirect(flux) {
	        this.flux = flux;
	    }
	    Redirect.prototype.init = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.REDIRECT, function (redirect) { return _this.redirect(redirect); });
	    };
	    Redirect.prototype.redirect = function (url) {
	        common_1.LOCATION.assign(url);
	    };
	    return Redirect;
	}());
	exports.Redirect = Redirect;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var product_transformer_1 = __webpack_require__(174);
	var GbTracker = __webpack_require__(175);
	var filterObject = __webpack_require__(71);
	var groupby_api_1 = __webpack_require__(125);
	var Cookies = __webpack_require__(195);
	var uuid = __webpack_require__(196);
	exports.MAX_COOKIE_AGE = 365; // days
	exports.VISITOR_COOKIE_KEY = 'visitor';
	exports.SESSION_COOKIE_KEY = 'session';
	exports.DEFAULT_CONFIG = {
	    warnings: true,
	    metadata: {}
	};
	var Tracker = (function () {
	    function Tracker(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        this._config = Object.assign({}, exports.DEFAULT_CONFIG, this.config.tracker || {});
	        this.tracker = new GbTracker(this.config.customerId, this.config.area);
	        this.transformer = new product_transformer_1.ProductTransformer(this.config.structure || {});
	    }
	    Tracker.prototype.init = function () {
	        if (!this._config.warnings) {
	            this.tracker.disableWarnings();
	        }
	        this.setVisitorInfo();
	        this.listenForViewProduct();
	    };
	    Tracker.prototype.setVisitorInfo = function () {
	        var visitorId = this.config.visitorId
	            || Cookies.get(exports.VISITOR_COOKIE_KEY)
	            || uuid.v1();
	        var sessionId = this.config.sessionId
	            || Cookies.get(exports.SESSION_COOKIE_KEY)
	            || uuid.v1();
	        this.setVisitor(visitorId, sessionId);
	    };
	    Tracker.prototype.listenForViewProduct = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.DETAILS, function (_a) {
	            var allMeta = _a.allMeta;
	            var metadata = _this.transformer.transform(allMeta)[0];
	            _this.tracker.sendViewProductEvent({
	                metadata: _this.generateMetadata('viewProduct'),
	                product: {
	                    productId: metadata.id,
	                    title: metadata.title,
	                    price: metadata.price,
	                    category: 'NONE'
	                }
	            });
	        });
	    };
	    Tracker.prototype.setVisitor = function (visitorId, sessionId) {
	        this.tracker.setVisitor(visitorId, sessionId);
	        Cookies.set(exports.VISITOR_COOKIE_KEY, visitorId, { expires: exports.MAX_COOKIE_AGE });
	        Cookies.set(exports.SESSION_COOKIE_KEY, sessionId);
	    };
	    Tracker.prototype.search = function () {
	        this.sendSearchEvent();
	    };
	    Tracker.prototype.didYouMean = function () {
	        this.sendSearchEvent('dym');
	    };
	    Tracker.prototype.sayt = function () {
	        this.sendSearchEvent('sayt');
	    };
	    Tracker.prototype.addToCart = function (productsInfo) {
	        this.tracker.sendAddToCartEvent(productsInfo);
	    };
	    Tracker.prototype.order = function (productsInfo) {
	        this.tracker.sendOrderEvent(productsInfo);
	    };
	    Tracker.prototype.generateMetadata = function (type) {
	        var metadata = Object.assign({}, filterObject(this._config.metadata, '!{_search,_viewProduct}'), type ? this._config.metadata[("_" + type)] : {});
	        return Object.keys(metadata)
	            .map(function (key) { return ({ key: key, value: metadata[key] }); });
	    };
	    Tracker.prototype.sendSearchEvent = function (origin) {
	        if (origin === void 0) { origin = 'search'; }
	        var convertedRecords = this.flux.results.records.map(function (record) { return Object.assign({
	            _id: record.id,
	            _u: record.url,
	            _t: record.title,
	        }, filterObject(record, '!{id,url,title}')); });
	        this.tracker.sendSearchEvent({
	            metadata: this.generateMetadata('search'),
	            search: Object.assign({
	                origin: (_a = {}, _a[origin] = true, _a),
	                query: this.flux.results.originalQuery || ''
	            }, this.flux.results, {
	                records: convertedRecords
	            })
	        });
	        var _a;
	    };
	    return Tracker;
	}());
	exports.Tracker = Tracker;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var filterObject = __webpack_require__(71);
	var DEFAULT_STRUCTURE = {
	    id: 'id'
	};
	var ProductTransformer = (function () {
	    function ProductTransformer(structure) {
	        this.structure = Object.assign({}, DEFAULT_STRUCTURE, structure);
	        this.productTransform = ProductTransformer.getTransform(this.structure);
	        this.hasVariants = 'variants' in structure;
	        this.variantStructure = this.structure._variantStructure || this.structure;
	        this.variantTransform = ProductTransformer.getTransform(this.variantStructure);
	        this.idField = this.extractIdField();
	    }
	    ProductTransformer.prototype.transform = function (allMeta) {
	        if (allMeta) {
	            var transformedMeta = this.productTransform(allMeta);
	            return this.unpackVariants(transformedMeta);
	        }
	        else {
	            return [{}];
	        }
	    };
	    ProductTransformer.prototype.unpackVariants = function (allMeta) {
	        var struct = filterObject(this.structure, '!_*');
	        var variantStruct = filterObject(this.variantStructure, '!_*');
	        var remappedMeta = common_1.remap(allMeta, struct);
	        var variantMapping = this.remapVariant(remappedMeta, variantStruct);
	        if (this.hasVariants && Array.isArray(common_1.getPath(allMeta, struct.variants))) {
	            var variantsArray = common_1.getPath(allMeta, struct.variants)
	                .filter(function (variant) { return variant; });
	            if (variantsArray.length > 0) {
	                return variantsArray.map(variantMapping);
	            }
	        }
	        return [filterObject(remappedMeta, '!variants')];
	    };
	    ProductTransformer.prototype.remapVariant = function (remappedMeta, variantStruct) {
	        var _this = this;
	        return function (variant) {
	            var remappedVariant = common_1.remap(variant, variantStruct);
	            if (_this.productTransform !== _this.variantTransform) {
	                remappedVariant = _this.variantTransform(remappedVariant, remappedMeta);
	            }
	            return filterObject(Object.assign({}, remappedMeta, remappedVariant), '!variants');
	        };
	    };
	    ProductTransformer.prototype.extractIdField = function () {
	        // ensure we actually want the nested id
	        if (this.hasVariants && this.structure._variantStructure && this.variantStructure.id) {
	            return this.structure.variants + "." + this.variantStructure.id;
	        }
	        else {
	            return this.structure.id;
	        }
	    };
	    ProductTransformer.getTransform = function (structure) {
	        if (typeof structure._transform === 'function') {
	            return structure._transform;
	        }
	        else {
	            return function (meta) { return meta; };
	        }
	    };
	    return ProductTransformer;
	}());
	exports.ProductTransformer = ProductTransformer;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	const gbTrackerCore = __webpack_require__(176);
	
	module.exports = gbTrackerCore;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var uuid      = __webpack_require__(177);
	var diff      = __webpack_require__(179).diff;
	var inspector = __webpack_require__(180);
	var utils     = __webpack_require__(185);
	var LZString  = __webpack_require__(186);
	
	var VERSION = __webpack_require__(187).version;
	
	var SCHEMAS = {
	  addToCart:     __webpack_require__(188),
	  order:         __webpack_require__(190),
	  autoSearch:    __webpack_require__(191),
	  search:        __webpack_require__(192),
	  sessionChange: __webpack_require__(193),
	  viewProduct:   __webpack_require__(194)
	};
	
	// Info on path length limitations: http://stackoverflow.com/a/812962
	var MAX_PATH_LENGTH     = 4000; // Thanks NGINX
	var MAX_PATHNAME_LENGTH = 100; // '/v2/pixel/?random=0.5405421565044588&m=' plus extra for luck
	var MAX_SEGMENT_COUNT   = 100;
	
	var overridenPixelUrl = null;
	
	var Tracker = function (customerId, area, overridePixelUrl) {
	  var self                 = this;
	  var customer             = {};
	  var visit                = {customerData: {}};
	  var invalidEventCallback = null;
	  var strictMode           = false;
	  overridenPixelUrl = overridePixelUrl || '';
	  var disableWarnings      = false;
	
	  var MAX_QUERY_STRING_LENGTH = MAX_PATH_LENGTH - MAX_PATHNAME_LENGTH;
	
	  var IGNORED_FIELD_PREFIXES = [
	    'search.records.[].allMeta',
	    'search.template.zones'
	  ];
	
	  if (typeof customerId !== 'string' || customerId.length === 0) {
	    throw new Error('customerId must be a string with length');
	  } else {
	    customer.id = customerId;
	  }
	
	  if (typeof area === 'string' && area.length > 0) {
	    customer.area = area;
	  }
	
	  self.disableWarnings = function () {
	    disableWarnings = true;
	  };
	
	  self.enableWarnings = function () {
	    disableWarnings = false;
	  };
	
	  /**
	   * Update visitor and session id's during login/logout
	   * @param visitorId
	   * @param sessionId
	   */
	  self.setVisitor = function (visitorId, sessionId) {
	    visitorId = (visitorId && typeof visitorId === 'number') ? (visitorId + '') : visitorId;
	    sessionId = (sessionId && typeof sessionId === 'number') ? (sessionId + '') : sessionId;
	
	    if (typeof visitorId !== 'string' || visitorId.length === 0) {
	      throw new Error('visitorId must be a string with length');
	    }
	
	    if (typeof sessionId !== 'string' || sessionId.length === 0) {
	      throw new Error('sessionId must be a string with length');
	    }
	
	    var prevVisitorId = visit.customerData.visitorId;
	    var prevSessionId = visit.customerData.sessionId;
	
	    visit.customerData.visitorId = visitorId;
	    visit.customerData.sessionId = sessionId;
	
	    if ((prevVisitorId && prevVisitorId !== visitorId) || (prevSessionId && prevSessionId !== sessionId)) {
	      var sessionEvent = {
	        newSessionId: visit.customerData.sessionId,
	        newVisitorId: visit.customerData.visitorId
	      };
	
	      // There may not be a previous session (initial site load)
	      if (prevVisitorId) {
	        sessionEvent.previousVisitorId = prevVisitorId;
	        sessionEvent.previousSessionId = prevSessionId;
	      }
	
	      self.__private.sendSessionChangeEvent({session: sessionEvent});
	    }
	  };
	
	  self.setStrictMode = function (strict) {
	    strictMode = strict;
	  };
	
	  /**
	   * Append eventType, customer, and visit to event
	   * @param event
	   * @param type
	   */
	  var prepareEvent = function (event, type) {
	    if (visit.customerData.sessionId == null || visit.customerData.visitorId == null) {
	      throw new Error('visitorId and sessionId must be set using setVisitor() before an event is sent');
	    }
	
	    event.clientVersion = {raw: VERSION};
	    event.eventType = type;
	    event.customer = customer;
	    event.visit = visit;
	    return event;
	  };
	
	
	  /**
	   * Set callback to be notified of invalid events
	   * @param callback
	   */
	  self.setInvalidEventCallback = function (callback) {
	    if (typeof callback !== 'function') {
	      throw new Error('invalid event callback must be a function');
	    }
	
	    invalidEventCallback = callback;
	  };
	
	  /**
	   * Validate and send addToCart event
	   * @param event
	   */
	  self.sendAddToCartEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'addToCart');
	  };
	
	  /**
	   * Validate and send order event
	   * @param event
	   */
	  self.sendOrderEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'order');
	  };
	
	  /**
	   * Validate and send search event
	   * @param event
	   */
	  self.sendSearchEvent = function (event) {
	    // Move search.id to the event object
	    if (event && event.search && event.search.id && !event.responseId) {
	      event.responseId = event.search.id;
	    }
	
	    self.__private.prepareAndSendEvent(event, 'search');
	  };
	
	  /**
	   * Validate and send search event
	   * @param event
	   */
	  self.sendAutoSearchEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'autoSearch');
	  };
	
	  /**
	   * Validate and send viewProduct event
	   * @param event
	   */
	  self.sendViewProductEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'viewProduct');
	  };
	
	  self.__private = {};
	
	  /**
	   * Helper to prepare, validate, and send event
	   * @param event
	   * @param eventType
	   */
	  self.__private.prepareAndSendEvent = function (event, eventType) {
	    event = prepareEvent(event, eventType);
	    var validated = self.__private.validateEvent(event, SCHEMAS[eventType]);
	    if (validated && validated.event) {
	      self.__private.sendEvent(validated.event, self.__private.sendSegment);
	    } else {
	      invalidEventCallback && invalidEventCallback(event, validated.error);
	    }
	  };
	
	  /**
	   * Visitor getter for testing
	   * @returns {{customerData: {}}}
	   */
	  self.__private.getVisitor = function () {
	    return visit;
	  };
	
	  /**
	   * Validate and send session change event
	   * @param event
	   */
	  self.__private.sendSessionChangeEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'sessionChange');
	  };
	
	  /**
	   * Based on the schema provided, validate an event for sending to the tracker endpoint
	   * @param event
	   * @param schemas
	   */
	  self.__private.validateEvent = function (event, schemas) {
	    var sanitizedEvent = utils.deepCopy(event);
	    inspector.sanitize(schemas.sanitization, sanitizedEvent);
	    var result = inspector.validate(schemas.validation, sanitizedEvent);
	
	    if (!result.valid) {
	      console.error('error while processing event: ' + result.format());
	      return {
	        event: null,
	        error: result.format()
	      };
	    }
	
	    if (!sanitizedEvent.visit) {
	      sanitizedEvent.visit = {};
	    }
	
	    if (!sanitizedEvent.visit.generated) {
	      sanitizedEvent.visit.generated = {};
	    }
	
	    var removedFields = self.__private.getRemovedFields(sanitizedEvent, event);
	
	    if (removedFields.length > 0) {
	      if (strictMode) {
	        throw new Error('Unexpected fields ' + JSON.stringify(removedFields) + ' in eventType: ' + sanitizedEvent.eventType);
	      }
	
	      if (!sanitizedEvent.metadata) {
	        sanitizedEvent.metadata = [];
	      }
	
	      for (var i = 0; i < removedFields.length; i++) {
	        if (!disableWarnings) {
	          console.warn('unexpected field: ' + removedFields[i] + ' is being dropped from eventType: ' + sanitizedEvent.eventType);
	        }
	
	        sanitizedEvent.metadata.push({
	          key:   'gbi-field-warning',
	          value: removedFields[i]
	        });
	      }
	    }
	
	    sanitizedEvent.visit.generated.uri = (typeof window !== 'undefined' && window.location) ? window.location.href : '';
	    sanitizedEvent.visit.generated.timezoneOffset = new Date().getTimezoneOffset();
	    sanitizedEvent.visit.generated.localTime = new Date().toISOString();
	
	    return {event: sanitizedEvent};
	  };
	
	  /**
	   * Compared the sanitized event to the original, and return an object containing the properties that were removed.
	   * @param sanitizedEvent
	   * @param originalEvent
	   * @returns {*}
	   */
	  self.__private.getRemovedFields = function (sanitizedEvent, originalEvent) {
	    var allDifferences = diff(sanitizedEvent, originalEvent);
	    var removedFields  = [];
	
	    for (var i = 0; i < allDifferences.length; i++) {
	      for (var j = 0; j < allDifferences[i].path.length; j++) {
	        if (typeof allDifferences[i].path[j] === 'number') {
	          // Remove array indices
	          allDifferences[i].path[j] = '[]';
	        }
	      }
	      
	      if (allDifferences[i].kind === 'N') {
	        var fieldName = allDifferences[i].path.join('.');
	
	        if (!utils.startsWithOneOf(fieldName, IGNORED_FIELD_PREFIXES)) {
	          removedFields.push(fieldName);
	        }
	      }
	    }
	
	    removedFields = utils.getUnique(removedFields);
	
	    return removedFields;
	  };
	
	  /**
	   * Take event, convert to string, split by max length, and send along with uuid and customer info
	   * @param event
	   * @param sendSegment
	   */
	  self.__private.sendEvent = function (event, sendSegment) {
	    var eventString = JSON.stringify(event);
	    var uuidString  = uuid.v4();
	
	    var segmentTemplate = {
	      uuid:          uuidString,
	      id:            MAX_SEGMENT_COUNT,
	      total:         MAX_SEGMENT_COUNT,
	      customer:      event.customer,
	      clientVersion: VERSION
	    };
	
	    var SEGMENT_WRAPPER_OVERHEAD = encodeURIComponent(JSON.stringify(segmentTemplate)).length;
	
	    // Double encode here to account for double-encoding at the end
	    var eventStringSegments = utils.chunkString(eventString, MAX_QUERY_STRING_LENGTH - SEGMENT_WRAPPER_OVERHEAD);
	
	    if (eventStringSegments.length > MAX_SEGMENT_COUNT) {
	      console.error('cannot send: ' + eventStringSegments + ' event segments, as that exceeds the max of: ' + MAX_SEGMENT_COUNT);
	      return;
	    }
	
	    if (window.DEBUG) {
	      // eslint-disable-next-line
	      console.log('Beaconing event: ' + JSON.stringify(event, null, 2));
	    }
	
	    for (var i = 0; i < eventStringSegments.length; i++) {
	      sendSegment({
	        uuid:          uuidString,
	        segment:       LZString.compressToEncodedURIComponent(eventStringSegments[i]), // To prevent double-encoding, it'll be re-encoded before sending
	        id:            i,
	        total:         eventStringSegments.length,
	        customer:      event.customer,
	        clientVersion: VERSION
	      });
	    }
	  };
	
	  /**
	   * Use pixel endpoint to upload string to event-tracker
	   * @param segment
	   */
	  self.__private.sendSegment = function (segment) {
	    var host   = document.location.protocol + '//' + customerId + '.groupbycloud.com';
	    var params = '?random\x3d' + Math.random(); // To bust the cache
	    params += '&m=' + encodeURIComponent(JSON.stringify(segment));
	
	    var path = '/wisdom/v2/pixel/' + params;
	
	    if (path.length > MAX_PATH_LENGTH) {
	      console.error('cannot send request with path exceeding max length of: ' + MAX_PATH_LENGTH + ' path is: ' + path.length);
	      return;
	    }
	
	    var im = new Image();
	    if (overridenPixelUrl && (typeof overridenPixelUrl === 'string') && overridenPixelUrl.length > 0) {
	      im.src = overridenPixelUrl + params;
	    } else {
	      im.src = host + path;
	    }
	  };
	
	};
	
	Tracker.__overridePixelPath = function (path) {
	  overridenPixelUrl = path;
	};
	
	module.exports = Tracker;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(178);
	
	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}
	
	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;
	
	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });
	
	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }
	
	  return buf;
	}
	
	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : unparse(b);
	}
	
	// **`v4()` - Generate random UUID**
	
	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || _rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || unparse(rnds);
	}
	
	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;
	
	module.exports = uuid;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;
	
	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return _rnds;
	  };
	}
	
	module.exports = rng;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';
	
	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }
	
	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	
	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }
	
	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);
	
	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);
	
	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);
	
	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);
	
	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }
	
	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }
	
	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }
	
	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }
	
	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }
	
	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }
	
	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }
	
	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }
	
	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }
	
	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }
	
	  Object.defineProperties(accumulateDiff, {
	
	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });
	
	  return accumulateDiff;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(181);


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * This module is intended to be executed both on client side and server side.
	 * No error should be thrown. (soft error handling)
	 */
	
	(function () {
		var root = {};
		// Dependencies --------------------------------------------------------------
		root.async = ( true) ? __webpack_require__(182) : window.async;
		if (typeof root.async !== 'object') {
			throw new Error('Module async is required (https://github.com/caolan/async)');
		}
		var async = root.async;
	
		function _extend(origin, add) {
			if (!add || typeof add !== 'object') {
				return origin;
			}
			var keys = Object.keys(add);
			var i = keys.length;
			while (i--) {
				origin[keys[i]] = add[keys[i]];
			}
			return origin;
		}
	
		function _merge() {
			var ret = {};
			var args = Array.prototype.slice.call(arguments);
			var keys = null;
			var i = null;
	
			args.forEach(function (arg) {
				if (arg && arg.constructor === Object) {
					keys = Object.keys(arg);
					i = keys.length;
					while (i--) {
						ret[keys[i]] = arg[keys[i]];
					}
				}
			});
			return ret;
		}
	
		// Customisable class (Base class) -------------------------------------------
		// Use with operation "new" to extend Validation and Sanitization themselves,
		// not their prototype. In other words, constructor shall be call to extend
		// those functions, instead of being in their constructor, like this:
		//		_extend(Validation, new Customisable);
	
		function Customisable() {
			this.custom = {};
	
			this.extend = function (custom) {
				return _extend(this.custom, custom);
			};
	
			this.reset = function () {
				this.custom = {};
			};
	
			this.remove = function (fields) {
				if (!_typeIs.array(fields)) {
					fields = [fields];
				}
				fields.forEach(function (field) {
					delete this.custom[field];
				}, this);
			};
		}
	
		// Inspection class (Base class) ---------------------------------------------
		// Use to extend Validation and Sanitization prototypes. Inspection
		// constructor shall be called in derived class constructor.
	
		function Inspection(schema, custom) {
			var _stack = ['@'];
	
			this._schema = schema;
			this._custom = {};
			if (custom != null) {
				for (var key in custom) {
					if (custom.hasOwnProperty(key)){
						this._custom['$' + key] = custom[key];
					}
				}
			}
	
			this._getDepth = function () {
				return _stack.length;
			};
	
			this._dumpStack = function () {
				return _stack.map(function (i) {return i.replace(/^\[/g, '\u001b\u001c\u001d\u001e');})
				.join('.').replace(/\.\u001b\u001c\u001d\u001e/g, '[');
			};
	
			this._deeperObject = function (name) {
				_stack.push((/^[a-z$_][a-z0-9$_]*$/i).test(name) ? name : '["' + name + '"]');
				return this;
			};
	
			this._deeperArray = function (i) {
				_stack.push('[' + i + ']');
				return this;
			};
	
			this._back = function () {
				_stack.pop();
				return this;
			};
		}
		// Simple types --------------------------------------------------------------
		// If the property is not defined or is not in this list:
		var _typeIs = {
			"function": function (element) {
				return typeof element === 'function';
			},
			"string": function (element) {
				return typeof element === 'string';
			},
			"number": function (element) {
				return typeof element === 'number' && !isNaN(element);
			},
			"integer": function (element) {
				return typeof element === 'number' && element % 1 === 0;
			},
			"NaN": function (element) {
				return typeof element === 'number' && isNaN(element);
			},
			"boolean": function (element) {
				return typeof element === 'boolean';
			},
			"null": function (element) {
				return element === null;
			},
			"date": function (element) {
				return element != null && element instanceof Date;
			},
			"object": function (element) {
				return element != null && element.constructor === Object;
			},
			"array": function (element) {
				return element != null && element.constructor === Array;
			},
			"any": function (element) {
				return true;
			}
		};
	
		function _simpleType(type, candidate) {
			if (typeof type == 'function') {
				return candidate instanceof type;
			}
			type = type in _typeIs ? type : 'any';
			return _typeIs[type](candidate);
		}
	
		function _realType(candidate) {
			for (var i in _typeIs) {
				if (_simpleType(i, candidate)) {
					if (i !== 'any') { return i; }
					return 'an instance of ' + candidate.constructor.name;
				}
			}
		}
	
		function getIndexes(a, value) {
			var indexes = [];
			var i = a.indexOf(value);
	
			while (i !== -1) {
				indexes.push(i);
				i = a.indexOf(value, i + 1);
			}
			return indexes;
		}
	
		// Available formats ---------------------------------------------------------
		var _formats = {
			'void': /^$/,
			'url': /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)?(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
			'date-time': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z?|(-|\+)\d{2}:\d{2})$/,
			'date': /^\d{4}-\d{2}-\d{2}$/,
			'coolDateTime': /^\d{4}(-|\/)\d{2}(-|\/)\d{2}(T| )\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/,
			'time': /^\d{2}\:\d{2}\:\d{2}$/,
			'color': /^#([0-9a-f])+$/i,
			'email': /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
			'numeric': /^[0-9]+$/,
			'integer': /^\-?[0-9]+$/,
			'decimal': /^\-?[0-9]*\.?[0-9]+$/,
			'alpha': /^[a-z]+$/i,
			'alphaNumeric': /^[a-z0-9]+$/i,
			'alphaDash': /^[a-z0-9_-]+$/i,
			'javascript': /^[a-z_\$][a-z0-9_\$]*$/i,
			'upperString': /^[A-Z ]*$/,
			'lowerString': /^[a-z ]*$/
		};
	
	// Validation ------------------------------------------------------------------
		var _validationAttribut = {
			optional: function (schema, candidate) {
				var opt = typeof schema.optional === 'boolean' ? schema.optional : (schema.optional === 'true'); // Default is false
	
				if (opt === true) {
					return;
				}
				if (typeof candidate === 'undefined') {
					this.report('is missing and not optional', null, 'optional');
				}
			},
			type: function (schema, candidate) {
				// return because optional function already handle this case
				if (typeof candidate === 'undefined' || (typeof schema.type !== 'string' && !(schema.type instanceof Array) && typeof schema.type !== 'function')) {
					return;
				}
				var types = _typeIs.array(schema.type) ? schema.type : [schema.type];
				var typeIsValid = types.some(function (type) {
					return _simpleType(type, candidate);
				});
				if (!typeIsValid) {
					types = types.map(function (t) {return typeof t === 'function' ? 'and instance of ' + t.name : t; });
					this.report('must be ' + types.join(' or ') + ', but is ' + _realType(candidate), null, 'type');
				}
			},
			uniqueness: function (schema, candidate) {
				if (typeof schema.uniqueness === 'string') { schema.uniqueness = (schema.uniqueness === 'true'); }
				if (typeof schema.uniqueness !== 'boolean' || schema.uniqueness === false || (!_typeIs.array(candidate) && typeof candidate !== 'string')) {
					return;
				}
				var reported = [];
				for (var i = 0; i < candidate.length; i++) {
					if (reported.indexOf(candidate[i]) >= 0) {
						continue;
					}
					var indexes = getIndexes(candidate, candidate[i]);
					if (indexes.length > 1) {
						reported.push(candidate[i]);
						this.report('has value [' + candidate[i] + '] more than once at indexes [' + indexes.join(', ') + ']', null, 'uniqueness');
					}
				}
			},
			pattern: function (schema, candidate) {
				var self = this;
				var regexs = schema.pattern;
				if (typeof candidate !== 'string') {
					return;
				}
				var matches = false;
				if (!_typeIs.array(regexs)) {
					regexs = [regexs];
				}
				regexs.forEach(function (regex) {
					if (typeof regex === 'string' && regex in _formats) {
						regex = _formats[regex];
					}
					if (regex instanceof RegExp) {
						if (regex.test(candidate)) {
							matches = true;
						}
					}
				});
				if (!matches) {
					self.report('must match [' + regexs.join(' or ') + '], but is equal to "' + candidate + '"', null, 'pattern');
				}
			},
			validDate: function (schema, candidate) {
				if (String(schema.validDate) === 'true' && candidate instanceof Date && isNaN(candidate.getTime())) {
					this.report('must be a valid date', null, 'validDate');
				}
			},
			minLength: function (schema, candidate) {
				if (typeof candidate !== 'string' && !_typeIs.array(candidate)) {
					return;
				}
				var minLength = Number(schema.minLength);
				if (isNaN(minLength)) {
					return;
				}
				if (candidate.length < minLength) {
					this.report('must be longer than ' + minLength + ' elements, but it has ' + candidate.length, null, 'minLength');
				}
			},
			maxLength: function (schema, candidate) {
				if (typeof candidate !== 'string' && !_typeIs.array(candidate)) {
					return;
				}
				var maxLength = Number(schema.maxLength);
				if (isNaN(maxLength)) {
					return;
				}
				if (candidate.length > maxLength) {
					this.report('must be shorter than ' + maxLength + ' elements, but it has ' + candidate.length, null, 'maxLength');
				}
			},
			exactLength: function (schema, candidate) {
				if (typeof candidate !== 'string' && !_typeIs.array(candidate)) {
					return;
				}
				var exactLength = Number(schema.exactLength);
				if (isNaN(exactLength)) {
					return;
				}
				if (candidate.length !== exactLength) {
					this.report('must have exactly ' + exactLength + ' elements, but it have ' + candidate.length, null, 'exactLength');
				}
			},
			lt: function (schema, candidate) {
				var limit = Number(schema.lt);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate >= limit) {
					this.report('must be less than ' + limit + ', but is equal to "' + candidate + '"', null, 'lt');
				}
			},
			lte: function (schema, candidate) {
				var limit = Number(schema.lte);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate > limit) {
					this.report('must be less than or equal to ' + limit + ', but is equal to "' + candidate + '"', null, 'lte');
				}
			},
			gt: function (schema, candidate) {
				var limit = Number(schema.gt);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate <= limit) {
					this.report('must be greater than ' + limit + ', but is equal to "' + candidate + '"', null, 'gt');
				}
			},
			gte: function (schema, candidate) {
				var limit = Number(schema.gte);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate < limit) {
					this.report('must be greater than or equal to ' + limit + ', but is equal to "' + candidate + '"', null, 'gte');
				}
			},
			eq: function (schema, candidate) {
				if (typeof candidate !== 'number' && typeof candidate !== 'string' && typeof candidate !== 'boolean') {
					return;
				}
				var limit = schema.eq;
				if (typeof limit !== 'number' && typeof limit !== 'string' && typeof limit !== 'boolean' && !_typeIs.array(limit)) {
					return;
				}
				if (_typeIs.array(limit)) {
					for (var i = 0; i < limit.length; i++) {
						if (candidate === limit[i]) {
							return;
						}
					}
					this.report('must be equal to [' + limit.map(function (l) {
						return '"' + l + '"';
					}).join(' or ') + '], but is equal to "' + candidate + '"', null, 'eq');
				}
				else {
					if (candidate !== limit) {
						this.report('must be equal to "' + limit + '", but is equal to "' + candidate + '"', null, 'eq');
					}
				}
			},
			ne: function (schema, candidate) {
				if (typeof candidate !== 'number' && typeof candidate !== 'string') {
					return;
				}
				var limit = schema.ne;
				if (typeof limit !== 'number' && typeof limit !== 'string' && !_typeIs.array(limit)) {
					return;
				}
				if (_typeIs.array(limit)) {
					for (var i = 0; i < limit.length; i++) {
						if (candidate === limit[i]) {
							this.report('must not be equal to "' + limit[i] + '"', null, 'ne');
							return;
						}
					}
				}
				else {
					if (candidate === limit) {
						this.report('must not be equal to "' + limit + '"', null, 'ne');
					}
				}
			},
			someKeys: function (schema, candidat) {
				var _keys = schema.someKeys;
				if (!_typeIs.object(candidat)) {
					return;
				}
				var valid = _keys.some(function (action) {
					return (action in candidat);
				});
				if (!valid) {
					this.report('must have at least key ' + _keys.map(function (i) {
						return '"' + i + '"';
					}).join(' or '), null, 'someKeys');
				}
			},
			strict: function (schema, candidate) {
				if (typeof schema.strict === 'string') { schema.strict = (schema.strict === 'true'); }
				if (schema.strict !== true || !_typeIs.object(candidate) || !_typeIs.object(schema.properties)) {
					return;
				}
				var self = this;
				if (typeof schema.properties['*'] === 'undefined') {
					var intruder = Object.keys(candidate).filter(function (key) {
						return (typeof schema.properties[key] === 'undefined');
					});
					if (intruder.length > 0) {
						var msg = 'should not contains ' + (intruder.length > 1 ? 'properties' : 'property') +
							' [' + intruder.map(function (i) { return '"' + i + '"'; }).join(', ') + ']';
						self.report(msg, null, 'strict');
					}
				}
			},
			exec: function (schema, candidate, callback) {
				var self = this;
	
				if (typeof callback === 'function') {
					return this.asyncExec(schema, candidate, callback);
				}
				(_typeIs.array(schema.exec) ? schema.exec : [schema.exec]).forEach(function (exec) {
					if (typeof exec === 'function') {
						exec.call(self, schema, candidate);
					}
				});
			},
			properties: function (schema, candidate, callback) {
				if (typeof callback === 'function') {
					return this.asyncProperties(schema, candidate, callback);
				}
				if (!(schema.properties instanceof Object) || !(candidate instanceof Object)) {
					return;
				}
				var properties = schema.properties,
						i;
				if (properties['*'] != null) {
					for (i in candidate) {
						if (i in properties) {
							continue;
						}
						this._deeperObject(i);
						this._validate(properties['*'], candidate[i]);
						this._back();
					}
				}
				for (i in properties) {
					if (i === '*') {
						continue;
					}
					this._deeperObject(i);
					this._validate(properties[i], candidate[i]);
					this._back();
				}
			},
			items: function (schema, candidate, callback) {
				if (typeof callback === 'function') {
					return this.asyncItems(schema, candidate, callback);
				}
				if (!(schema.items instanceof Object) || !(candidate instanceof Object)) {
					return;
				}
				var items = schema.items;
				var i, l;
				// If provided schema is an array
				// then call validate for each case
				// else it is an Object
				// then call validate for each key
				if (_typeIs.array(items) && _typeIs.array(candidate)) {
					for (i = 0, l = items.length; i < l; i++) {
						this._deeperArray(i);
						this._validate(items[i], candidate[i]);
						this._back();
					}
				}
				else {
					for (var key in candidate) {
						if (candidate.hasOwnProperty(key)){
							this._deeperArray(key);
							this._validate(items, candidate[key]);
							this._back();
						}
	
					}
				}
			}
		};
	
		var _asyncValidationAttribut = {
			asyncExec: function (schema, candidate, callback) {
				var self = this;
				async.eachSeries(_typeIs.array(schema.exec) ? schema.exec : [schema.exec], function (exec, done) {
					if (typeof exec === 'function') {
						if (exec.length > 2) {
							return exec.call(self, schema, candidate, done);
						}
						exec.call(self, schema, candidate);
					}
					async.nextTick(done);
				}, callback);
			},
			asyncProperties: function (schema, candidate, callback) {
				if (!(schema.properties instanceof Object) || !_typeIs.object(candidate)) {
					return callback();
				}
				var self = this;
				var properties = schema.properties;
				async.series([
					function (next) {
						if (properties['*'] == null) {
							return next();
						}
						async.eachSeries(Object.keys(candidate), function (i, done) {
							if (i in properties) {
								return async.nextTick(done);
							}
							self._deeperObject(i);
							self._asyncValidate(properties['*'], candidate[i], function (err) {
								self._back();
								done(err);
							});
						}, next);
					},
					function (next) {
						async.eachSeries(Object.keys(properties), function (i, done) {
							if (i === '*') {
								return async.nextTick(done);
							}
							self._deeperObject(i);
							self._asyncValidate(properties[i], candidate[i], function (err) {
								self._back();
								done(err);
							});
						}, next);
					}
				], callback);
			},
			asyncItems: function (schema, candidate, callback) {
				if (!(schema.items instanceof Object) || !(candidate instanceof Object)) {
					return callback();
				}
				var self = this;
				var items = schema.items;
				var i, l;
	
				if (_typeIs.array(items) && _typeIs.array(candidate)) {
					async.timesSeries(items.length, function (i, done) {
						self._deeperArray(i);
						self._asyncValidate(items[i], candidate[i], function (err, res) {
							self._back();
							done(err, res);
						});
						self._back();
					}, callback);
				}
				else {
					async.eachSeries(Object.keys(candidate), function (key, done) {
						self._deeperArray(key);
						self._asyncValidate(items, candidate[key], function (err, res) {
							self._back();
							done(err, res);
						});
					}, callback);
				}
			}
		};
	
		// Validation Class ----------------------------------------------------------
		// inherits from Inspection class (actually we just call Inspection
		// constructor with the new context, because its prototype is empty
		function Validation(schema, custom) {
			Inspection.prototype.constructor.call(this, schema, _merge(Validation.custom, custom));
			var _error = [];
	
			this._basicFields = Object.keys(_validationAttribut);
			this._customFields = Object.keys(this._custom);
			this.origin = null;
	
			this.report = function (message, code, reason) {
				var newErr = {
					code: code || this.userCode || null,
					reason: reason || 'unknown',
					message: this.userError || message || 'is invalid',
					property: this.userAlias ? (this.userAlias + ' (' + this._dumpStack() + ')') : this._dumpStack()
				};
				_error.push(newErr);
				return this;
			};
	
			this.result = function () {
				return {
					error: _error,
					valid: _error.length === 0,
					format: function () {
						if (this.valid === true) {
							return 'Candidate is valid';
						}
						return this.error.map(function (i) {
							return 'Property ' + i.property + ': ' + i.message;
						}).join('\n');
					}
				};
			};
		}
	
		_extend(Validation.prototype, _validationAttribut);
		_extend(Validation.prototype, _asyncValidationAttribut);
		_extend(Validation, new Customisable());
	
		Validation.prototype.validate = function (candidate, callback) {
			this.origin = candidate;
			if (typeof callback === 'function') {
				var self = this;
				return async.nextTick(function () {
					self._asyncValidate(self._schema, candidate, function (err) {
						self.origin = null;
						callback(err, self.result());
					});
				});
			}
			return this._validate(this._schema, candidate).result();
		};
	
		Validation.prototype._validate = function (schema, candidate, callback) {
			this.userCode = schema.code || null;
			this.userError = schema.error || null;
			this.userAlias = schema.alias || null;
			this._basicFields.forEach(function (i) {
				if ((i in schema || i === 'optional') && typeof this[i] === 'function') {
					this[i](schema, candidate);
				}
			}, this);
			this._customFields.forEach(function (i) {
				if (i in schema && typeof this._custom[i] === 'function') {
					this._custom[i].call(this, schema, candidate);
				}
			}, this);
			return this;
		};
	
		Validation.prototype._asyncValidate = function (schema, candidate, callback) {
			var self = this;
			this.userCode = schema.code || null;
			this.userError = schema.error || null;
			this.userAlias = schema.alias || null;
	
			async.series([
				function (next) {
					async.eachSeries(Object.keys(_validationAttribut), function (i, done) {
						async.nextTick(function () {
							if ((i in schema || i === 'optional') && typeof self[i] === 'function') {
								if (self[i].length > 2) {
									return self[i](schema, candidate, done);
								}
								self[i](schema, candidate);
							}
							done();
						});
					}, next);
				},
				function (next) {
					async.eachSeries(Object.keys(self._custom), function (i, done) {
						async.nextTick(function () {
							if (i in schema && typeof self._custom[i] === 'function') {
								if (self._custom[i].length > 2) {
									return self._custom[i].call(self, schema, candidate, done);
								}
								self._custom[i].call(self, schema, candidate);
							}
							done();
						});
					}, next);
				}
			], callback);
		};
	
	// Sanitization ----------------------------------------------------------------
		// functions called by _sanitization.type method.
		var _forceType = {
			number: function (post, schema) {
				var n;
				if (typeof post === 'number') {
					return post;
				}
				else if (post === '') {
					if (typeof schema.def !== 'undefined')
						return schema.def;
					return null;
				}
				else if (typeof post === 'string') {
					n = parseFloat(post.replace(/,/g, '.').replace(/ /g, ''));
					if (typeof n === 'number') {
						return n;
					}
				}
				else if (post instanceof Date) {
					return +post;
				}
				return null;
			},
			integer: function (post, schema) {
				var n;
				if (typeof post === 'number' && post % 1 === 0) {
					return post;
				}
				else if (post === '') {
					if (typeof schema.def !== 'undefined')
						return schema.def;
					return null;
				}
				else if (typeof post === 'string') {
					n = parseInt(post.replace(/ /g, ''), 10);
					if (typeof n === 'number') {
						return n;
					}
				}
				else if (typeof post === 'number') {
					return parseInt(post, 10);
				}
				else if (typeof post === 'boolean') {
					if (post) { return 1; }
					return 0;
				}
				else if (post instanceof Date) {
					return +post;
				}
				return null;
			},
			string: function (post, schema) {
				if (typeof post === 'boolean' || typeof post === 'number' || post instanceof Date) {
					return post.toString();
				}
				else if (_typeIs.array(post)) {
					// If user authorize array and strings...
					if (schema.items || schema.properties)
						return post;
					return post.join(String(schema.joinWith || ','));
				}
				else if (post instanceof Object) {
					// If user authorize objects ans strings...
					if (schema.items || schema.properties)
						return post;
					return JSON.stringify(post);
				}
				else if (typeof post === 'string' && post.length) {
					return post;
				}
				return null;
			},
			date: function (post, schema) {
				if (post instanceof Date) {
					return post;
				}
				else {
					var d = new Date(post);
					if (!isNaN(d.getTime())) { // if valid date
						return d;
					}
				}
				return null;
			},
			boolean: function (post, schema) {
				if (typeof post === 'undefined') return null;
				if (typeof post === 'string' && post.toLowerCase() === 'false') return false;
				return !!post;
			},
			object: function (post, schema) {
				if (typeof post !== 'string' || _typeIs.object(post)) {
					return post;
				}
				try {
					return JSON.parse(post);
				}
				catch (e) {
					return null;
				}
			},
			array: function (post, schema) {
				if (_typeIs.array(post))
					return post;
				if (typeof post === 'undefined')
					return null;
				if (typeof post === 'string') {
					if (post.substring(0,1) === '[' && post.slice(-1) === ']') {
						try {
							return JSON.parse(post);
						}
						catch (e) {
							return null;
						}
					}
					return post.split(String(schema.splitWith || ','));
	
				}
				if (!_typeIs.array(post))
					return [ post ];
				return null;
			}
		};
	
		var _applyRules = {
			upper: function (post) {
				return post.toUpperCase();
			},
			lower: function (post) {
				return post.toLowerCase();
			},
			title: function (post) {
				// Fix by seb (replace \w\S* by \S* => exemple : coucou ça va)
				return post.replace(/\S*/g, function (txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			},
			capitalize: function (post) {
				return post.charAt(0).toUpperCase() + post.substr(1).toLowerCase();
			},
			ucfirst: function (post) {
				return post.charAt(0).toUpperCase() + post.substr(1);
			},
			trim: function (post) {
				return post.trim();
			}
		};
	
		// Every function return the future value of each property. Therefore you
		// have to return post even if you do not change its value
		var _sanitizationAttribut = {
			strict: function (schema, post) {
				if (typeof schema.strict === 'string') { schema.strict = (schema.strict === 'true'); }
				if (schema.strict !== true)
					return post;
				if (!_typeIs.object(schema.properties))
					return post;
				if (!_typeIs.object(post))
					return post;
				var that = this;
				Object.keys(post).forEach(function (key) {
					if (!(key in schema.properties)) {
						delete post[key];
					}
				});
				return post;
			},
			optional: function (schema, post) {
				var opt = typeof schema.optional === 'boolean' ? schema.optional : (schema.optional !== 'false'); // Default: true
				if (opt === true) {
					return post;
				}
				if (typeof post !== 'undefined') {
					return post;
				}
				this.report();
				if (schema.def === Date) {
					return new Date();
				}
				return schema.def;
			},
			type: function (schema, post) {
				// if (_typeIs['object'](post) || _typeIs.array(post)) {
				// 	return post;
				// }
				if (typeof schema.type !== 'string' || typeof _forceType[schema.type] !== 'function') {
					return post;
				}
				var n;
				var opt = typeof schema.optional === 'boolean' ? schema.optional : true;
				if (typeof _forceType[schema.type] === 'function') {
					n = _forceType[schema.type](post, schema);
					if ((n === null && !opt) || (!n && isNaN(n)) || (n === null && schema.type === 'string')) {
						n = schema.def;
					}
				}
				else if (!opt) {
					n = schema.def;
				}
				if ((n != null || (typeof schema.def !== 'undefined' && schema.def === n)) && n !== post) {
					this.report();
					return n;
				}
				return post;
			},
			rules: function (schema, post) {
				var rules = schema.rules;
				if (typeof post !== 'string' || (typeof rules !== 'string' && !_typeIs.array(rules))) {
					return post;
				}
				var modified = false;
				(_typeIs.array(rules) ? rules : [rules]).forEach(function (rule) {
					if (typeof _applyRules[rule] === 'function') {
						post = _applyRules[rule](post);
						modified = true;
					}
				});
				if (modified) {
					this.report();
				}
				return post;
			},
			min: function (schema, post) {
				var postTest = Number(post);
				if (isNaN(postTest)) {
					return post;
				}
				var min = Number(schema.min);
				if (isNaN(min)) {
					return post;
				}
				if (postTest < min) {
					this.report();
					return min;
				}
				return post;
			},
			max: function (schema, post) {
				var postTest = Number(post);
				if (isNaN(postTest)) {
					return post;
				}
				var max = Number(schema.max);
				if (isNaN(max)) {
					return post;
				}
				if (postTest > max) {
					this.report();
					return max;
				}
				return post;
			},
			minLength: function (schema, post) {
				var limit = Number(schema.minLength);
				if (typeof post !== 'string' || isNaN(limit) || limit < 0) {
					return post;
				}
				var str = '';
				var gap = limit - post.length;
				if (gap > 0) {
					for (var i = 0; i < gap; i++) {
						str += '-';
					}
					this.report();
					return post + str;
				}
				return post;
			},
			maxLength: function (schema, post) {
				var limit = Number(schema.maxLength);
				if (typeof post !== 'string' || isNaN(limit) || limit < 0) {
					return post;
				}
				if (post.length > limit) {
					this.report();
					return post.slice(0, limit);
				}
				return post;
			},
			properties: function (schema, post, callback) {
				if (typeof callback === 'function') {
					return this.asyncProperties(schema, post, callback);
				}
				if (!post || typeof post !== 'object') {
					return post;
				}
				var properties = schema.properties;
				var tmp;
				var i;
				if (typeof properties['*'] !== 'undefined') {
					for (i in post) {
						if (i in properties) {
							continue;
						}
						this._deeperObject(i);
						tmp = this._sanitize(schema.properties['*'], post[i]);
						if (typeof tmp !== 'undefined') {
							post[i]= tmp;
						}
						this._back();
					}
				}
				for (i in schema.properties) {
					if (i !== '*') {
						this._deeperObject(i);
						tmp = this._sanitize(schema.properties[i], post[i]);
						if (typeof tmp !== 'undefined') {
							post[i]= tmp;
						}
						this._back();
					}
				}
				return post;
			},
			items: function (schema, post, callback) {
				if (typeof callback === 'function') {
					return this.asyncItems(schema, post, callback);
				}
				if (!(schema.items instanceof Object) || !(post instanceof Object)) {
					return post;
				}
				var i;
				if (_typeIs.array(schema.items) && _typeIs.array(post)) {
					var minLength = schema.items.length < post.length ? schema.items.length : post.length;
					for (i = 0; i < minLength; i++) {
						this._deeperArray(i);
						post[i] = this._sanitize(schema.items[i], post[i]);
						this._back();
					}
				}
				else {
					for (i in post) {
						if(post.hasOwnProperty(i)){
							this._deeperArray(i);
							post[i] = this._sanitize(schema.items, post[i]);
							this._back();
						}
					}
				}
				return post;
			},
			exec: function (schema, post, callback) {
				if (typeof callback === 'function') {
					return this.asyncExec(schema, post, callback);
				}
				var execs = _typeIs.array(schema.exec) ? schema.exec : [schema.exec];
	
				execs.forEach(function (exec) {
					if (typeof exec === 'function') {
						post = exec.call(this, schema, post);
					}
				}, this);
				return post;
			}
		};
	
		var _asyncSanitizationAttribut = {
			asyncExec: function (schema, post, callback) {
				var self = this;
				var execs = _typeIs.array(schema.exec) ? schema.exec : [schema.exec];
	
				async.eachSeries(execs, function (exec, done) {
					if (typeof exec === 'function') {
						if (exec.length > 2) {
							return exec.call(self, schema, post, function (err, res) {
								if (err) {
									return done(err);
								}
								post = res;
								done();
							});
						}
						post = exec.call(self, schema, post);
					}
					done();
				}, function (err) {
					callback(err, post);
				});
			},
			asyncProperties: function (schema, post, callback) {
				if (!post || typeof post !== 'object') {
					return callback(null, post);
				}
				var self = this;
				var properties = schema.properties;
	
				async.series([
					function (next) {
						if (properties['*'] == null) {
							return next();
						}
						var globing = properties['*'];
						async.eachSeries(Object.keys(post), function (i, next) {
							if (i in properties) {
								return next();
							}
							self._deeperObject(i);
							self._asyncSanitize(globing, post[i], function (err, res) {
								if (err) { /* Error can safely be ignored here */ }
								if (typeof res !== 'undefined') {
									post[i] = res;
								}
								self._back();
								next();
							});
						}, next);
					},
					function (next) {
						async.eachSeries(Object.keys(properties), function (i, next) {
							if (i === '*') {
								return next();
							}
							self._deeperObject(i);
							self._asyncSanitize(properties[i], post[i], function (err, res) {
								if (err) {
									return next(err);
								}
								if (typeof res !== 'undefined') {
									post[i] = res;
								}
								self._back();
								next();
							});
						}, next);
					}
				], function (err) {
					return callback(err, post);
				});
			},
			asyncItems: function (schema, post, callback) {
				if (!(schema.items instanceof Object) || !(post instanceof Object)) {
					return callback(null, post);
				}
				var self = this;
				var items = schema.items;
				if (_typeIs.array(items) && _typeIs.array(post)) {
					var minLength = items.length < post.length ? items.length : post.length;
					async.timesSeries(minLength, function (i, next) {
						self._deeperArray(i);
						self._asyncSanitize(items[i], post[i], function (err, res) {
							if (err) {
								return next(err);
							}
							post[i] = res;
							self._back();
							next();
						});
					}, function (err) {
						callback(err, post);
					});
				}
				else {
					async.eachSeries(Object.keys(post), function (key, next) {
						self._deeperArray(key);
						self._asyncSanitize(items, post[key], function (err, res) {
							if (err) {
								return next();
							}
							post[key] = res;
							self._back();
							next();
						});
					}, function (err) {
						callback(err, post);
					});
				}
				return post;
			}
		};
	
		// Sanitization Class --------------------------------------------------------
		// inherits from Inspection class (actually we just call Inspection
		// constructor with the new context, because its prototype is empty
		function Sanitization(schema, custom) {
			Inspection.prototype.constructor.call(this, schema, _merge(Sanitization.custom, custom));
			var _reporting = [];
	
			this._basicFields = Object.keys(_sanitizationAttribut);
			this._customFields = Object.keys(this._custom);
			this.origin = null;
	
			this.report = function (message) {
				var newNot = {
						message: message || 'was sanitized',
						property: this.userAlias ? (this.userAlias + ' (' + this._dumpStack() + ')') : this._dumpStack()
				};
				if (!_reporting.some(function (e) { return e.property === newNot.property; })) {
					_reporting.push(newNot);
				}
			};
	
			this.result = function (data) {
				return {
					data: data,
					reporting: _reporting,
					format: function () {
						return this.reporting.map(function (i) {
							return 'Property ' + i.property + ' ' + i.message;
						}).join('\n');
					}
				};
			};
		}
	
		_extend(Sanitization.prototype, _sanitizationAttribut);
		_extend(Sanitization.prototype, _asyncSanitizationAttribut);
		_extend(Sanitization, new Customisable());
	
	
		Sanitization.prototype.sanitize = function (post, callback) {
			this.origin = post;
			if (typeof callback === 'function') {
				var self = this;
				return this._asyncSanitize(this._schema, post, function (err, data) {
					self.origin = null;
					callback(err, self.result(data));
				});
			}
			var data = this._sanitize(this._schema, post);
			this.origin = null;
			return this.result(data);
		};
	
		Sanitization.prototype._sanitize = function (schema, post) {
			this.userAlias = schema.alias || null;
			this._basicFields.forEach(function (i) {
				if ((i in schema || i === 'optional') && typeof this[i] === 'function') {
					post = this[i](schema, post);
				}
			}, this);
			this._customFields.forEach(function (i) {
				if (i in schema && typeof this._custom[i] === 'function') {
					post = this._custom[i].call(this, schema, post);
				}
			}, this);
			return post;
		};
	
		Sanitization.prototype._asyncSanitize = function (schema, post, callback) {
			var self = this;
			this.userAlias = schema.alias || null;
	
			async.waterfall([
				function (next) {
					async.reduce(self._basicFields, post, function (value, i, next) {
						async.nextTick(function () {
							if ((i in schema || i === 'optional') && typeof self[i] === 'function') {
								if (self[i].length > 2) {
									return self[i](schema, value, next);
								}
								value = self[i](schema, value);
							}
							next(null, value);
						});
					}, next);
				},
				function (inter, next) {
					async.reduce(self._customFields, inter, function (value, i, next) {
						async.nextTick(function () {
							if (i in schema && typeof self._custom[i] === 'function') {
								if (self._custom[i].length > 2) {
									return self._custom[i].call(self, schema, value, next);
								}
								value = self._custom[i].call(self, schema, value);
							}
							next(null, value);
						});
					}, next);
				}
			], callback);
		};
	
		// ---------------------------------------------------------------------------
	
		var INT_MIN = -2147483648;
		var INT_MAX = 2147483647;
	
		var _rand = {
			int: function (min, max) {
				return min + (0 | Math.random() * (max - min + 1));
			},
			float: function (min, max) {
				return (Math.random() * (max - min) + min);
			},
			bool: function () {
				return (Math.random() > 0.5);
			},
			char: function (min, max) {
				return String.fromCharCode(this.int(min, max));
			},
			fromList: function (list) {
				return list[this.int(0, list.length - 1)];
			}
		};
	
		var _formatSample = {
			'date-time': function () {
				return new Date().toISOString();
			},
			'date': function () {
				return new Date().toISOString().replace(/T.*$/, '');
			},
			'time': function () {
				return new Date().toLocaleTimeString({}, { hour12: false });
			},
			'color': function (min, max) {
				var s = '#';
				if (min < 1) {
					min = 1;
				}
				for (var i = 0, l = _rand.int(min, max); i < l; i++) {
					s += _rand.fromList('0123456789abcdefABCDEF');
				}
				return s;
			},
			'numeric': function () {
				return '' + _rand.int(0, INT_MAX);
			},
			'integer': function () {
				if (_rand.bool() === true) {
					return '-' + this.numeric();
				}
				return this.numeric();
			},
			'decimal': function () {
				return this.integer() + '.' + this.numeric();
			},
			'alpha': function (min, max) {
				var s = '';
				if (min < 1) {
					min = 1;
				}
				for (var i = 0, l = _rand.int(min, max); i < l; i++) {
					s += _rand.fromList('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
				}
				return s;
			},
			'alphaNumeric': function (min, max) {
				var s = '';
				if (min < 1) {
					min = 1;
				}
				for (var i = 0, l = _rand.int(min, max); i < l; i++) {
					s += _rand.fromList('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
				}
				return s;
			},
			'alphaDash': function (min, max) {
				var s = '';
				if (min < 1) {
					min = 1;
				}
				for (var i = 0, l = _rand.int(min, max); i < l; i++) {
					s += _rand.fromList('_-abcdefghijklmnopqrstuvwxyz_-ABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789_-');
				}
				return s;
			},
			'javascript': function (min, max) {
				var s = _rand.fromList('_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$');
				for (var i = 0, l = _rand.int(min, max - 1); i < l; i++) {
					s += _rand.fromList('_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$0123456789_$');
				}
				return s;
			}
		};
	
		function _getLimits(schema) {
			var min = INT_MIN;
			var max = INT_MAX;
	
			if (schema.gte != null) {
				min = schema.gte;
			}
			else if (schema.gt != null) {
				min = schema.gt + 1;
			}
			if (schema.lte != null) {
				max = schema.lte;
			}
			else if (schema.lt != null) {
				max = schema.lt - 1;
			}
			return { min: min, max: max };
		}
	
		var _typeGenerator = {
			string: function (schema) {
				if (schema.eq != null) {
					return schema.eq;
				}
				var s = '';
				var minLength = schema.minLength != null ? schema.minLength : 0;
				var maxLength = schema.maxLength != null ? schema.maxLength : 32;
				if (typeof schema.pattern === 'string' && typeof _formatSample[schema.pattern] === 'function') {
					return _formatSample[schema.pattern](minLength, maxLength);
				}
	
				var l = schema.exactLength != null ? schema.exactLength : _rand.int(minLength, maxLength);
				for (var i = 0; i < l; i++) {
					s += _rand.char(32, 126);
				}
				return s;
			},
			number: function (schema) {
				if (schema.eq != null) {
					return schema.eq;
				}
				var limit = _getLimits(schema);
				var n = _rand.float(limit.min, limit.max);
				if (schema.ne != null) {
					var ne = _typeIs.array(schema.ne) ? schema.ne : [schema.ne];
					while (ne.indexOf(n) !== -1) {
						n = _rand.float(limit.min, limit.max);
					}
				}
				return n;
			},
			integer: function (schema) {
				if (schema.eq != null) {
					return schema.eq;
				}
				var limit = _getLimits(schema);
				var n = _rand.int(limit.min, limit.max);
				if (schema.ne != null) {
					var ne = _typeIs.array(schema.ne) ? schema.ne : [schema.ne];
					while (ne.indexOf(n) !== -1) {
						n = _rand.int(limit.min, limit.max);
					}
				}
				return n;
			},
			boolean: function (schema) {
				if (schema.eq != null) {
					return schema.eq;
				}
				return _rand.bool();
			},
			"null": function (schema) {
				return null;
			},
			date: function (schema) {
				if (schema.eq != null) {
					return schema.eq;
				}
				return new Date();
			},
			object: function (schema) {
				var o = {};
				var prop = schema.properties || {};
	
				for (var key in prop) {
					if (prop.hasOwnProperty(key)){
						if (prop[key].optional === true && _rand.bool() === true) {
							continue;
						}
						if (key !== '*') {
							o[key] = this.generate(prop[key]);
						}
						else {
							var rk = '__random_key_';
							var randomKey = rk + 0;
							var n = _rand.int(1, 9);
							for (var i = 1; i <= n; i++) {
								if (!(randomKey in prop)) {
									o[randomKey] = this.generate(prop[key]);
								}
								randomKey = rk + i;
							}
						}
					}
				}
				return o;
			},
			array: function (schema) {
				var self = this;
				var items = schema.items || {};
				var minLength = schema.minLength != null ? schema.minLength : 0;
				var maxLength = schema.maxLength != null ? schema.maxLength : 16;
				var type;
				var candidate;
				var size;
				var i;
	
				if (_typeIs.array(items)) {
					size = items.length;
					if (schema.exactLength != null) {
						size = schema.exactLength;
					}
					else if (size < minLength) {
						size = minLength;
					}
					else if (size > maxLength) {
						size = maxLength;
					}
					candidate = new Array(size);
					type = null;
					for (i = 0; i < size; i++) {
						type = items[i].type || 'any';
						if (_typeIs.array(type)) {
							type = type[_rand.int(0, type.length - 1)];
						}
						candidate[i] = self[type](items[i]);
					}
				}
				else {
					size = schema.exactLength != null ? schema.exactLength : _rand.int(minLength, maxLength);
					candidate = new Array(size);
					type = items.type || 'any';
					if (_typeIs.array(type)) {
						type = type[_rand.int(0, type.length - 1)];
					}
					for (i = 0; i < size; i++) {
						candidate[i] = self[type](items);
					}
				}
				return candidate;
			},
			any: function (schema) {
				var fields = Object.keys(_typeGenerator);
				var i = fields[_rand.int(0, fields.length - 2)];
				return this[i](schema);
			}
		};
	
		// CandidateGenerator Class (Singleton) --------------------------------------
		function CandidateGenerator() {
			// Maybe extends Inspection class too ?
		}
	
		_extend(CandidateGenerator.prototype, _typeGenerator);
	
		var _instance = null;
		CandidateGenerator.instance = function () {
			if (!(_instance instanceof CandidateGenerator)) {
				_instance = new CandidateGenerator();
			}
			return _instance;
		};
	
		CandidateGenerator.prototype.generate = function (schema) {
			var type = schema.type || 'any';
			if (_typeIs.array(type)) {
				type = type[_rand.int(0, type.length - 1)];
			}
			return this[type](schema);
		};
	
	// Exports ---------------------------------------------------------------------
		var SchemaInspector = {};
	
		// if server-side (node.js) else client-side
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = SchemaInspector;
		}
		else {
			window.SchemaInspector = SchemaInspector;
		}
	
		SchemaInspector.newSanitization = function (schema, custom) {
			return new Sanitization(schema, custom);
		};
	
		SchemaInspector.newValidation = function (schema, custom) {
			return new Validation(schema, custom);
		};
	
		SchemaInspector.Validation = Validation;
		SchemaInspector.Sanitization = Sanitization;
	
		SchemaInspector.sanitize = function (schema, post, custom, callback) {
			if (arguments.length === 3 && typeof custom === 'function') {
				callback = custom;
				custom = null;
			}
			return new Sanitization(schema, custom).sanitize(post, callback);
		};
	
		SchemaInspector.validate = function (schema, candidate, custom, callback) {
			if (arguments.length === 3 && typeof custom === 'function') {
				callback = custom;
				custom = null;
			}
			return new Validation(schema, custom).validate(candidate, callback);
		};
	
		SchemaInspector.generate = function (schema, n) {
			if (typeof n === 'number') {
				var r = new Array(n);
				for (var i = 0; i < n; i++) {
					r[i] = CandidateGenerator.instance().generate(schema);
				}
				return r;
			}
			return CandidateGenerator.instance().generate(schema);
		};
	})();


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate, process) {/*!
	 * async
	 * https://github.com/caolan/async
	 *
	 * Copyright 2010-2014 Caolan McMahon
	 * Released under the MIT license
	 */
	(function () {
	
	    var async = {};
	    function noop() {}
	    function identity(v) {
	        return v;
	    }
	    function toBool(v) {
	        return !!v;
	    }
	    function notId(v) {
	        return !v;
	    }
	
	    // global on the server, window in the browser
	    var previous_async;
	
	    // Establish the root object, `window` (`self`) in the browser, `global`
	    // on the server, or `this` in some virtual machines. We use `self`
	    // instead of `window` for `WebWorker` support.
	    var root = typeof self === 'object' && self.self === self && self ||
	            typeof global === 'object' && global.global === global && global ||
	            this;
	
	    if (root != null) {
	        previous_async = root.async;
	    }
	
	    async.noConflict = function () {
	        root.async = previous_async;
	        return async;
	    };
	
	    function only_once(fn) {
	        return function() {
	            if (fn === null) throw new Error("Callback was already called.");
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    function _once(fn) {
	        return function() {
	            if (fn === null) return;
	            fn.apply(this, arguments);
	            fn = null;
	        };
	    }
	
	    //// cross-browser compatiblity functions ////
	
	    var _toString = Object.prototype.toString;
	
	    var _isArray = Array.isArray || function (obj) {
	        return _toString.call(obj) === '[object Array]';
	    };
	
	    // Ported from underscore.js isObject
	    var _isObject = function(obj) {
	        var type = typeof obj;
	        return type === 'function' || type === 'object' && !!obj;
	    };
	
	    function _isArrayLike(arr) {
	        return _isArray(arr) || (
	            // has a positive integer length property
	            typeof arr.length === "number" &&
	            arr.length >= 0 &&
	            arr.length % 1 === 0
	        );
	    }
	
	    function _arrayEach(arr, iterator) {
	        var index = -1,
	            length = arr.length;
	
	        while (++index < length) {
	            iterator(arr[index], index, arr);
	        }
	    }
	
	    function _map(arr, iterator) {
	        var index = -1,
	            length = arr.length,
	            result = Array(length);
	
	        while (++index < length) {
	            result[index] = iterator(arr[index], index, arr);
	        }
	        return result;
	    }
	
	    function _range(count) {
	        return _map(Array(count), function (v, i) { return i; });
	    }
	
	    function _reduce(arr, iterator, memo) {
	        _arrayEach(arr, function (x, i, a) {
	            memo = iterator(memo, x, i, a);
	        });
	        return memo;
	    }
	
	    function _forEachOf(object, iterator) {
	        _arrayEach(_keys(object), function (key) {
	            iterator(object[key], key);
	        });
	    }
	
	    function _indexOf(arr, item) {
	        for (var i = 0; i < arr.length; i++) {
	            if (arr[i] === item) return i;
	        }
	        return -1;
	    }
	
	    var _keys = Object.keys || function (obj) {
	        var keys = [];
	        for (var k in obj) {
	            if (obj.hasOwnProperty(k)) {
	                keys.push(k);
	            }
	        }
	        return keys;
	    };
	
	    function _keyIterator(coll) {
	        var i = -1;
	        var len;
	        var keys;
	        if (_isArrayLike(coll)) {
	            len = coll.length;
	            return function next() {
	                i++;
	                return i < len ? i : null;
	            };
	        } else {
	            keys = _keys(coll);
	            len = keys.length;
	            return function next() {
	                i++;
	                return i < len ? keys[i] : null;
	            };
	        }
	    }
	
	    // Similar to ES6's rest param (http://ariya.ofilabs.com/2013/03/es6-and-rest-parameter.html)
	    // This accumulates the arguments passed into an array, after a given index.
	    // From underscore.js (https://github.com/jashkenas/underscore/pull/2140).
	    function _restParam(func, startIndex) {
	        startIndex = startIndex == null ? func.length - 1 : +startIndex;
	        return function() {
	            var length = Math.max(arguments.length - startIndex, 0);
	            var rest = Array(length);
	            for (var index = 0; index < length; index++) {
	                rest[index] = arguments[index + startIndex];
	            }
	            switch (startIndex) {
	                case 0: return func.call(this, rest);
	                case 1: return func.call(this, arguments[0], rest);
	            }
	            // Currently unused but handle cases outside of the switch statement:
	            // var args = Array(startIndex + 1);
	            // for (index = 0; index < startIndex; index++) {
	            //     args[index] = arguments[index];
	            // }
	            // args[startIndex] = rest;
	            // return func.apply(this, args);
	        };
	    }
	
	    function _withoutIndex(iterator) {
	        return function (value, index, callback) {
	            return iterator(value, callback);
	        };
	    }
	
	    //// exported async module functions ////
	
	    //// nextTick implementation with browser-compatible fallback ////
	
	    // capture the global reference to guard against fakeTimer mocks
	    var _setImmediate = typeof setImmediate === 'function' && setImmediate;
	
	    var _delay = _setImmediate ? function(fn) {
	        // not a direct alias for IE10 compatibility
	        _setImmediate(fn);
	    } : function(fn) {
	        setTimeout(fn, 0);
	    };
	
	    if (typeof process === 'object' && typeof process.nextTick === 'function') {
	        async.nextTick = process.nextTick;
	    } else {
	        async.nextTick = _delay;
	    }
	    async.setImmediate = _setImmediate ? _delay : async.nextTick;
	
	
	    async.forEach =
	    async.each = function (arr, iterator, callback) {
	        return async.eachOf(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachSeries =
	    async.eachSeries = function (arr, iterator, callback) {
	        return async.eachOfSeries(arr, _withoutIndex(iterator), callback);
	    };
	
	
	    async.forEachLimit =
	    async.eachLimit = function (arr, limit, iterator, callback) {
	        return _eachOfLimit(limit)(arr, _withoutIndex(iterator), callback);
	    };
	
	    async.forEachOf =
	    async.eachOf = function (object, iterator, callback) {
	        callback = _once(callback || noop);
	        object = object || [];
	
	        var iter = _keyIterator(object);
	        var key, completed = 0;
	
	        while ((key = iter()) != null) {
	            completed += 1;
	            iterator(object[key], key, only_once(done));
	        }
	
	        if (completed === 0) callback(null);
	
	        function done(err) {
	            completed--;
	            if (err) {
	                callback(err);
	            }
	            // Check key is null in case iterator isn't exhausted
	            // and done resolved synchronously.
	            else if (key === null && completed <= 0) {
	                callback(null);
	            }
	        }
	    };
	
	    async.forEachOfSeries =
	    async.eachOfSeries = function (obj, iterator, callback) {
	        callback = _once(callback || noop);
	        obj = obj || [];
	        var nextKey = _keyIterator(obj);
	        var key = nextKey();
	        function iterate() {
	            var sync = true;
	            if (key === null) {
	                return callback(null);
	            }
	            iterator(obj[key], key, only_once(function (err) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    key = nextKey();
	                    if (key === null) {
	                        return callback(null);
	                    } else {
	                        if (sync) {
	                            async.setImmediate(iterate);
	                        } else {
	                            iterate();
	                        }
	                    }
	                }
	            }));
	            sync = false;
	        }
	        iterate();
	    };
	
	
	
	    async.forEachOfLimit =
	    async.eachOfLimit = function (obj, limit, iterator, callback) {
	        _eachOfLimit(limit)(obj, iterator, callback);
	    };
	
	    function _eachOfLimit(limit) {
	
	        return function (obj, iterator, callback) {
	            callback = _once(callback || noop);
	            obj = obj || [];
	            var nextKey = _keyIterator(obj);
	            if (limit <= 0) {
	                return callback(null);
	            }
	            var done = false;
	            var running = 0;
	            var errored = false;
	
	            (function replenish () {
	                if (done && running <= 0) {
	                    return callback(null);
	                }
	
	                while (running < limit && !errored) {
	                    var key = nextKey();
	                    if (key === null) {
	                        done = true;
	                        if (running <= 0) {
	                            callback(null);
	                        }
	                        return;
	                    }
	                    running += 1;
	                    iterator(obj[key], key, only_once(function (err) {
	                        running -= 1;
	                        if (err) {
	                            callback(err);
	                            errored = true;
	                        }
	                        else {
	                            replenish();
	                        }
	                    }));
	                }
	            })();
	        };
	    }
	
	
	    function doParallel(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOf, obj, iterator, callback);
	        };
	    }
	    function doParallelLimit(fn) {
	        return function (obj, limit, iterator, callback) {
	            return fn(_eachOfLimit(limit), obj, iterator, callback);
	        };
	    }
	    function doSeries(fn) {
	        return function (obj, iterator, callback) {
	            return fn(async.eachOfSeries, obj, iterator, callback);
	        };
	    }
	
	    function _asyncMap(eachfn, arr, iterator, callback) {
	        callback = _once(callback || noop);
	        arr = arr || [];
	        var results = _isArrayLike(arr) ? [] : {};
	        eachfn(arr, function (value, index, callback) {
	            iterator(value, function (err, v) {
	                results[index] = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.map = doParallel(_asyncMap);
	    async.mapSeries = doSeries(_asyncMap);
	    async.mapLimit = doParallelLimit(_asyncMap);
	
	    // reduce only has a series version, as doing reduce in parallel won't
	    // work in many situations.
	    async.inject =
	    async.foldl =
	    async.reduce = function (arr, memo, iterator, callback) {
	        async.eachOfSeries(arr, function (x, i, callback) {
	            iterator(memo, x, function (err, v) {
	                memo = v;
	                callback(err);
	            });
	        }, function (err) {
	            callback(err, memo);
	        });
	    };
	
	    async.foldr =
	    async.reduceRight = function (arr, memo, iterator, callback) {
	        var reversed = _map(arr, identity).reverse();
	        async.reduce(reversed, memo, iterator, callback);
	    };
	
	    async.transform = function (arr, memo, iterator, callback) {
	        if (arguments.length === 3) {
	            callback = iterator;
	            iterator = memo;
	            memo = _isArray(arr) ? [] : {};
	        }
	
	        async.eachOf(arr, function(v, k, cb) {
	            iterator(memo, v, k, cb);
	        }, function(err) {
	            callback(err, memo);
	        });
	    };
	
	    function _filter(eachfn, arr, iterator, callback) {
	        var results = [];
	        eachfn(arr, function (x, index, callback) {
	            iterator(x, function (v) {
	                if (v) {
	                    results.push({index: index, value: x});
	                }
	                callback();
	            });
	        }, function () {
	            callback(_map(results.sort(function (a, b) {
	                return a.index - b.index;
	            }), function (x) {
	                return x.value;
	            }));
	        });
	    }
	
	    async.select =
	    async.filter = doParallel(_filter);
	
	    async.selectLimit =
	    async.filterLimit = doParallelLimit(_filter);
	
	    async.selectSeries =
	    async.filterSeries = doSeries(_filter);
	
	    function _reject(eachfn, arr, iterator, callback) {
	        _filter(eachfn, arr, function(value, cb) {
	            iterator(value, function(v) {
	                cb(!v);
	            });
	        }, callback);
	    }
	    async.reject = doParallel(_reject);
	    async.rejectLimit = doParallelLimit(_reject);
	    async.rejectSeries = doSeries(_reject);
	
	    function _createTester(eachfn, check, getResult) {
	        return function(arr, limit, iterator, cb) {
	            function done() {
	                if (cb) cb(getResult(false, void 0));
	            }
	            function iteratee(x, _, callback) {
	                if (!cb) return callback();
	                iterator(x, function (v) {
	                    if (cb && check(v)) {
	                        cb(getResult(true, x));
	                        cb = iterator = false;
	                    }
	                    callback();
	                });
	            }
	            if (arguments.length > 3) {
	                eachfn(arr, limit, iteratee, done);
	            } else {
	                cb = iterator;
	                iterator = limit;
	                eachfn(arr, iteratee, done);
	            }
	        };
	    }
	
	    async.any =
	    async.some = _createTester(async.eachOf, toBool, identity);
	
	    async.someLimit = _createTester(async.eachOfLimit, toBool, identity);
	
	    async.all =
	    async.every = _createTester(async.eachOf, notId, notId);
	
	    async.everyLimit = _createTester(async.eachOfLimit, notId, notId);
	
	    function _findGetResult(v, x) {
	        return x;
	    }
	    async.detect = _createTester(async.eachOf, identity, _findGetResult);
	    async.detectSeries = _createTester(async.eachOfSeries, identity, _findGetResult);
	    async.detectLimit = _createTester(async.eachOfLimit, identity, _findGetResult);
	
	    async.sortBy = function (arr, iterator, callback) {
	        async.map(arr, function (x, callback) {
	            iterator(x, function (err, criteria) {
	                if (err) {
	                    callback(err);
	                }
	                else {
	                    callback(null, {value: x, criteria: criteria});
	                }
	            });
	        }, function (err, results) {
	            if (err) {
	                return callback(err);
	            }
	            else {
	                callback(null, _map(results.sort(comparator), function (x) {
	                    return x.value;
	                }));
	            }
	
	        });
	
	        function comparator(left, right) {
	            var a = left.criteria, b = right.criteria;
	            return a < b ? -1 : a > b ? 1 : 0;
	        }
	    };
	
	    async.auto = function (tasks, concurrency, callback) {
	        if (typeof arguments[1] === 'function') {
	            // concurrency is optional, shift the args.
	            callback = concurrency;
	            concurrency = null;
	        }
	        callback = _once(callback || noop);
	        var keys = _keys(tasks);
	        var remainingTasks = keys.length;
	        if (!remainingTasks) {
	            return callback(null);
	        }
	        if (!concurrency) {
	            concurrency = remainingTasks;
	        }
	
	        var results = {};
	        var runningTasks = 0;
	
	        var hasError = false;
	
	        var listeners = [];
	        function addListener(fn) {
	            listeners.unshift(fn);
	        }
	        function removeListener(fn) {
	            var idx = _indexOf(listeners, fn);
	            if (idx >= 0) listeners.splice(idx, 1);
	        }
	        function taskComplete() {
	            remainingTasks--;
	            _arrayEach(listeners.slice(0), function (fn) {
	                fn();
	            });
	        }
	
	        addListener(function () {
	            if (!remainingTasks) {
	                callback(null, results);
	            }
	        });
	
	        _arrayEach(keys, function (k) {
	            if (hasError) return;
	            var task = _isArray(tasks[k]) ? tasks[k]: [tasks[k]];
	            var taskCallback = _restParam(function(err, args) {
	                runningTasks--;
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                if (err) {
	                    var safeResults = {};
	                    _forEachOf(results, function(val, rkey) {
	                        safeResults[rkey] = val;
	                    });
	                    safeResults[k] = args;
	                    hasError = true;
	
	                    callback(err, safeResults);
	                }
	                else {
	                    results[k] = args;
	                    async.setImmediate(taskComplete);
	                }
	            });
	            var requires = task.slice(0, task.length - 1);
	            // prevent dead-locks
	            var len = requires.length;
	            var dep;
	            while (len--) {
	                if (!(dep = tasks[requires[len]])) {
	                    throw new Error('Has nonexistent dependency in ' + requires.join(', '));
	                }
	                if (_isArray(dep) && _indexOf(dep, k) >= 0) {
	                    throw new Error('Has cyclic dependencies');
	                }
	            }
	            function ready() {
	                return runningTasks < concurrency && _reduce(requires, function (a, x) {
	                    return (a && results.hasOwnProperty(x));
	                }, true) && !results.hasOwnProperty(k);
	            }
	            if (ready()) {
	                runningTasks++;
	                task[task.length - 1](taskCallback, results);
	            }
	            else {
	                addListener(listener);
	            }
	            function listener() {
	                if (ready()) {
	                    runningTasks++;
	                    removeListener(listener);
	                    task[task.length - 1](taskCallback, results);
	                }
	            }
	        });
	    };
	
	
	
	    async.retry = function(times, task, callback) {
	        var DEFAULT_TIMES = 5;
	        var DEFAULT_INTERVAL = 0;
	
	        var attempts = [];
	
	        var opts = {
	            times: DEFAULT_TIMES,
	            interval: DEFAULT_INTERVAL
	        };
	
	        function parseTimes(acc, t){
	            if(typeof t === 'number'){
	                acc.times = parseInt(t, 10) || DEFAULT_TIMES;
	            } else if(typeof t === 'object'){
	                acc.times = parseInt(t.times, 10) || DEFAULT_TIMES;
	                acc.interval = parseInt(t.interval, 10) || DEFAULT_INTERVAL;
	            } else {
	                throw new Error('Unsupported argument type for \'times\': ' + typeof t);
	            }
	        }
	
	        var length = arguments.length;
	        if (length < 1 || length > 3) {
	            throw new Error('Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)');
	        } else if (length <= 2 && typeof times === 'function') {
	            callback = task;
	            task = times;
	        }
	        if (typeof times !== 'function') {
	            parseTimes(opts, times);
	        }
	        opts.callback = callback;
	        opts.task = task;
	
	        function wrappedTask(wrappedCallback, wrappedResults) {
	            function retryAttempt(task, finalAttempt) {
	                return function(seriesCallback) {
	                    task(function(err, result){
	                        seriesCallback(!err || finalAttempt, {err: err, result: result});
	                    }, wrappedResults);
	                };
	            }
	
	            function retryInterval(interval){
	                return function(seriesCallback){
	                    setTimeout(function(){
	                        seriesCallback(null);
	                    }, interval);
	                };
	            }
	
	            while (opts.times) {
	
	                var finalAttempt = !(opts.times-=1);
	                attempts.push(retryAttempt(opts.task, finalAttempt));
	                if(!finalAttempt && opts.interval > 0){
	                    attempts.push(retryInterval(opts.interval));
	                }
	            }
	
	            async.series(attempts, function(done, data){
	                data = data[data.length - 1];
	                (wrappedCallback || opts.callback)(data.err, data.result);
	            });
	        }
	
	        // If a callback is passed, run this as a controll flow
	        return opts.callback ? wrappedTask() : wrappedTask;
	    };
	
	    async.waterfall = function (tasks, callback) {
	        callback = _once(callback || noop);
	        if (!_isArray(tasks)) {
	            var err = new Error('First argument to waterfall must be an array of functions');
	            return callback(err);
	        }
	        if (!tasks.length) {
	            return callback();
	        }
	        function wrapIterator(iterator) {
	            return _restParam(function (err, args) {
	                if (err) {
	                    callback.apply(null, [err].concat(args));
	                }
	                else {
	                    var next = iterator.next();
	                    if (next) {
	                        args.push(wrapIterator(next));
	                    }
	                    else {
	                        args.push(callback);
	                    }
	                    ensureAsync(iterator).apply(null, args);
	                }
	            });
	        }
	        wrapIterator(async.iterator(tasks))();
	    };
	
	    function _parallel(eachfn, tasks, callback) {
	        callback = callback || noop;
	        var results = _isArrayLike(tasks) ? [] : {};
	
	        eachfn(tasks, function (task, key, callback) {
	            task(_restParam(function (err, args) {
	                if (args.length <= 1) {
	                    args = args[0];
	                }
	                results[key] = args;
	                callback(err);
	            }));
	        }, function (err) {
	            callback(err, results);
	        });
	    }
	
	    async.parallel = function (tasks, callback) {
	        _parallel(async.eachOf, tasks, callback);
	    };
	
	    async.parallelLimit = function(tasks, limit, callback) {
	        _parallel(_eachOfLimit(limit), tasks, callback);
	    };
	
	    async.series = function(tasks, callback) {
	        _parallel(async.eachOfSeries, tasks, callback);
	    };
	
	    async.iterator = function (tasks) {
	        function makeCallback(index) {
	            function fn() {
	                if (tasks.length) {
	                    tasks[index].apply(null, arguments);
	                }
	                return fn.next();
	            }
	            fn.next = function () {
	                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
	            };
	            return fn;
	        }
	        return makeCallback(0);
	    };
	
	    async.apply = _restParam(function (fn, args) {
	        return _restParam(function (callArgs) {
	            return fn.apply(
	                null, args.concat(callArgs)
	            );
	        });
	    });
	
	    function _concat(eachfn, arr, fn, callback) {
	        var result = [];
	        eachfn(arr, function (x, index, cb) {
	            fn(x, function (err, y) {
	                result = result.concat(y || []);
	                cb(err);
	            });
	        }, function (err) {
	            callback(err, result);
	        });
	    }
	    async.concat = doParallel(_concat);
	    async.concatSeries = doSeries(_concat);
	
	    async.whilst = function (test, iterator, callback) {
	        callback = callback || noop;
	        if (test()) {
	            var next = _restParam(function(err, args) {
	                if (err) {
	                    callback(err);
	                } else if (test.apply(this, args)) {
	                    iterator(next);
	                } else {
	                    callback.apply(null, [null].concat(args));
	                }
	            });
	            iterator(next);
	        } else {
	            callback(null);
	        }
	    };
	
	    async.doWhilst = function (iterator, test, callback) {
	        var calls = 0;
	        return async.whilst(function() {
	            return ++calls <= 1 || test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.until = function (test, iterator, callback) {
	        return async.whilst(function() {
	            return !test.apply(this, arguments);
	        }, iterator, callback);
	    };
	
	    async.doUntil = function (iterator, test, callback) {
	        return async.doWhilst(iterator, function() {
	            return !test.apply(this, arguments);
	        }, callback);
	    };
	
	    async.during = function (test, iterator, callback) {
	        callback = callback || noop;
	
	        var next = _restParam(function(err, args) {
	            if (err) {
	                callback(err);
	            } else {
	                args.push(check);
	                test.apply(this, args);
	            }
	        });
	
	        var check = function(err, truth) {
	            if (err) {
	                callback(err);
	            } else if (truth) {
	                iterator(next);
	            } else {
	                callback(null);
	            }
	        };
	
	        test(check);
	    };
	
	    async.doDuring = function (iterator, test, callback) {
	        var calls = 0;
	        async.during(function(next) {
	            if (calls++ < 1) {
	                next(null, true);
	            } else {
	                test.apply(this, arguments);
	            }
	        }, iterator, callback);
	    };
	
	    function _queue(worker, concurrency, payload) {
	        if (concurrency == null) {
	            concurrency = 1;
	        }
	        else if(concurrency === 0) {
	            throw new Error('Concurrency must not be zero');
	        }
	        function _insert(q, data, pos, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0 && q.idle()) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    callback: callback || noop
	                };
	
	                if (pos) {
	                    q.tasks.unshift(item);
	                } else {
	                    q.tasks.push(item);
	                }
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	            });
	            async.setImmediate(q.process);
	        }
	        function _next(q, tasks) {
	            return function(){
	                workers -= 1;
	
	                var removed = false;
	                var args = arguments;
	                _arrayEach(tasks, function (task) {
	                    _arrayEach(workersList, function (worker, index) {
	                        if (worker === task && !removed) {
	                            workersList.splice(index, 1);
	                            removed = true;
	                        }
	                    });
	
	                    task.callback.apply(task, args);
	                });
	                if (q.tasks.length + workers === 0) {
	                    q.drain();
	                }
	                q.process();
	            };
	        }
	
	        var workers = 0;
	        var workersList = [];
	        var q = {
	            tasks: [],
	            concurrency: concurrency,
	            payload: payload,
	            saturated: noop,
	            empty: noop,
	            drain: noop,
	            started: false,
	            paused: false,
	            push: function (data, callback) {
	                _insert(q, data, false, callback);
	            },
	            kill: function () {
	                q.drain = noop;
	                q.tasks = [];
	            },
	            unshift: function (data, callback) {
	                _insert(q, data, true, callback);
	            },
	            process: function () {
	                while(!q.paused && workers < q.concurrency && q.tasks.length){
	
	                    var tasks = q.payload ?
	                        q.tasks.splice(0, q.payload) :
	                        q.tasks.splice(0, q.tasks.length);
	
	                    var data = _map(tasks, function (task) {
	                        return task.data;
	                    });
	
	                    if (q.tasks.length === 0) {
	                        q.empty();
	                    }
	                    workers += 1;
	                    workersList.push(tasks[0]);
	                    var cb = only_once(_next(q, tasks));
	                    worker(data, cb);
	                }
	            },
	            length: function () {
	                return q.tasks.length;
	            },
	            running: function () {
	                return workers;
	            },
	            workersList: function () {
	                return workersList;
	            },
	            idle: function() {
	                return q.tasks.length + workers === 0;
	            },
	            pause: function () {
	                q.paused = true;
	            },
	            resume: function () {
	                if (q.paused === false) { return; }
	                q.paused = false;
	                var resumeCount = Math.min(q.concurrency, q.tasks.length);
	                // Need to call q.process once per concurrent
	                // worker to preserve full concurrency after pause
	                for (var w = 1; w <= resumeCount; w++) {
	                    async.setImmediate(q.process);
	                }
	            }
	        };
	        return q;
	    }
	
	    async.queue = function (worker, concurrency) {
	        var q = _queue(function (items, cb) {
	            worker(items[0], cb);
	        }, concurrency, 1);
	
	        return q;
	    };
	
	    async.priorityQueue = function (worker, concurrency) {
	
	        function _compareTasks(a, b){
	            return a.priority - b.priority;
	        }
	
	        function _binarySearch(sequence, item, compare) {
	            var beg = -1,
	                end = sequence.length - 1;
	            while (beg < end) {
	                var mid = beg + ((end - beg + 1) >>> 1);
	                if (compare(item, sequence[mid]) >= 0) {
	                    beg = mid;
	                } else {
	                    end = mid - 1;
	                }
	            }
	            return beg;
	        }
	
	        function _insert(q, data, priority, callback) {
	            if (callback != null && typeof callback !== "function") {
	                throw new Error("task callback must be a function");
	            }
	            q.started = true;
	            if (!_isArray(data)) {
	                data = [data];
	            }
	            if(data.length === 0) {
	                // call drain immediately if there are no tasks
	                return async.setImmediate(function() {
	                    q.drain();
	                });
	            }
	            _arrayEach(data, function(task) {
	                var item = {
	                    data: task,
	                    priority: priority,
	                    callback: typeof callback === 'function' ? callback : noop
	                };
	
	                q.tasks.splice(_binarySearch(q.tasks, item, _compareTasks) + 1, 0, item);
	
	                if (q.tasks.length === q.concurrency) {
	                    q.saturated();
	                }
	                async.setImmediate(q.process);
	            });
	        }
	
	        // Start with a normal queue
	        var q = async.queue(worker, concurrency);
	
	        // Override push to accept second parameter representing priority
	        q.push = function (data, priority, callback) {
	            _insert(q, data, priority, callback);
	        };
	
	        // Remove unshift function
	        delete q.unshift;
	
	        return q;
	    };
	
	    async.cargo = function (worker, payload) {
	        return _queue(worker, 1, payload);
	    };
	
	    function _console_fn(name) {
	        return _restParam(function (fn, args) {
	            fn.apply(null, args.concat([_restParam(function (err, args) {
	                if (typeof console === 'object') {
	                    if (err) {
	                        if (console.error) {
	                            console.error(err);
	                        }
	                    }
	                    else if (console[name]) {
	                        _arrayEach(args, function (x) {
	                            console[name](x);
	                        });
	                    }
	                }
	            })]));
	        });
	    }
	    async.log = _console_fn('log');
	    async.dir = _console_fn('dir');
	    /*async.info = _console_fn('info');
	    async.warn = _console_fn('warn');
	    async.error = _console_fn('error');*/
	
	    async.memoize = function (fn, hasher) {
	        var memo = {};
	        var queues = {};
	        var has = Object.prototype.hasOwnProperty;
	        hasher = hasher || identity;
	        var memoized = _restParam(function memoized(args) {
	            var callback = args.pop();
	            var key = hasher.apply(null, args);
	            if (has.call(memo, key)) {   
	                async.setImmediate(function () {
	                    callback.apply(null, memo[key]);
	                });
	            }
	            else if (has.call(queues, key)) {
	                queues[key].push(callback);
	            }
	            else {
	                queues[key] = [callback];
	                fn.apply(null, args.concat([_restParam(function (args) {
	                    memo[key] = args;
	                    var q = queues[key];
	                    delete queues[key];
	                    for (var i = 0, l = q.length; i < l; i++) {
	                        q[i].apply(null, args);
	                    }
	                })]));
	            }
	        });
	        memoized.memo = memo;
	        memoized.unmemoized = fn;
	        return memoized;
	    };
	
	    async.unmemoize = function (fn) {
	        return function () {
	            return (fn.unmemoized || fn).apply(null, arguments);
	        };
	    };
	
	    function _times(mapper) {
	        return function (count, iterator, callback) {
	            mapper(_range(count), iterator, callback);
	        };
	    }
	
	    async.times = _times(async.map);
	    async.timesSeries = _times(async.mapSeries);
	    async.timesLimit = function (count, limit, iterator, callback) {
	        return async.mapLimit(_range(count), limit, iterator, callback);
	    };
	
	    async.seq = function (/* functions... */) {
	        var fns = arguments;
	        return _restParam(function (args) {
	            var that = this;
	
	            var callback = args[args.length - 1];
	            if (typeof callback == 'function') {
	                args.pop();
	            } else {
	                callback = noop;
	            }
	
	            async.reduce(fns, args, function (newargs, fn, cb) {
	                fn.apply(that, newargs.concat([_restParam(function (err, nextargs) {
	                    cb(err, nextargs);
	                })]));
	            },
	            function (err, results) {
	                callback.apply(that, [err].concat(results));
	            });
	        });
	    };
	
	    async.compose = function (/* functions... */) {
	        return async.seq.apply(null, Array.prototype.reverse.call(arguments));
	    };
	
	
	    function _applyEach(eachfn) {
	        return _restParam(function(fns, args) {
	            var go = _restParam(function(args) {
	                var that = this;
	                var callback = args.pop();
	                return eachfn(fns, function (fn, _, cb) {
	                    fn.apply(that, args.concat([cb]));
	                },
	                callback);
	            });
	            if (args.length) {
	                return go.apply(this, args);
	            }
	            else {
	                return go;
	            }
	        });
	    }
	
	    async.applyEach = _applyEach(async.eachOf);
	    async.applyEachSeries = _applyEach(async.eachOfSeries);
	
	
	    async.forever = function (fn, callback) {
	        var done = only_once(callback || noop);
	        var task = ensureAsync(fn);
	        function next(err) {
	            if (err) {
	                return done(err);
	            }
	            task(next);
	        }
	        next();
	    };
	
	    function ensureAsync(fn) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            args.push(function () {
	                var innerArgs = arguments;
	                if (sync) {
	                    async.setImmediate(function () {
	                        callback.apply(null, innerArgs);
	                    });
	                } else {
	                    callback.apply(null, innerArgs);
	                }
	            });
	            var sync = true;
	            fn.apply(this, args);
	            sync = false;
	        });
	    }
	
	    async.ensureAsync = ensureAsync;
	
	    async.constant = _restParam(function(values) {
	        var args = [null].concat(values);
	        return function (callback) {
	            return callback.apply(this, args);
	        };
	    });
	
	    async.wrapSync =
	    async.asyncify = function asyncify(func) {
	        return _restParam(function (args) {
	            var callback = args.pop();
	            var result;
	            try {
	                result = func.apply(this, args);
	            } catch (e) {
	                return callback(e);
	            }
	            // if result is Promise object
	            if (_isObject(result) && typeof result.then === "function") {
	                result.then(function(value) {
	                    callback(null, value);
	                })["catch"](function(err) {
	                    callback(err.message ? err : new Error(err));
	                });
	            } else {
	                callback(null, result);
	            }
	        });
	    };
	
	    // Node.js
	    if (typeof module === 'object' && module.exports) {
	        module.exports = async;
	    }
	    // AMD / RequireJS
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return async;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	    // included directly via <script> tag
	    else {
	        root.async = async;
	    }
	
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(183).setImmediate, __webpack_require__(78)))

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(184);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(78)))

/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Helper to split string by length
	 * @param str
	 * @param len
	 * @returns {Array}
	 */
	var chunkString = function (str, len) {
	  var size   = Math.ceil(str.length / len);
	  var ret    = new Array(size);
	  var offset = null;
	
	  for (var i = 0; i < size; i++) {
	    offset = i * len;
	    ret[i] = str.substring(offset, offset + len);
	  }
	
	  return ret;
	};
	
	var ESCAPE_SEQUENCE_SIZE = 3;
	
	var chunkEscapedString = function (str, len) {
	  var chunked = [];
	
	  while (str.length > 0) {
	    var substr     = str.substring(0, len);
	    var lastEscape = substr.lastIndexOf('%');
	    var sliceIndex = (lastEscape > 0 && len - lastEscape < ESCAPE_SEQUENCE_SIZE) ? lastEscape : len;
	
	    var chunk = str.slice(0, sliceIndex);
	
	    if (chunk.length > len) {
	      console.log('Chunk of size: ' + chunk.length + ' exceeds size: ' + len);
	    }
	
	    chunked.push(chunk);
	    str = str.slice(sliceIndex);
	  }
	
	  return chunked;
	};
	
	/**
	 * Get unique elements of an array
	 * @param array
	 * @returns {Array}
	 */
	var getUnique = function (array) {
	  var u = {}, a = [];
	  for (var i = 0, l = array.length; i < l; ++i) {
	    if (u.hasOwnProperty(array[i])) {
	      continue;
	    }
	    a.push(array[i]);
	    u[array[i]] = 1;
	  }
	  return a;
	}
	
	/**
	 * Helper to deep copy an object
	 * @param o
	 */
	var deepCopy = function (o) {
	  if (o === undefined || o === null) {
	    return null;
	  }
	  return JSON.parse(JSON.stringify(o));
	};
	
	/**
	 * Recursively merge object, giving the last one precedence
	 * @param target
	 * @param source
	 * @returns {*}
	 */
	var merge = function (target, source) {
	  if (typeof target !== 'object') {
	    target = {};
	  }
	
	  for (var property in source) {
	    if (source.hasOwnProperty(property)) {
	      var sourceProperty = source[property];
	
	      if (typeof sourceProperty === 'object') {
	        target[property] = merge(target[property], sourceProperty);
	        continue;
	      }
	
	      target[property] = sourceProperty;
	    }
	  }
	
	  for (var a = 2, l = arguments.length; a < l; a++) {
	    merge(target, arguments[a]);
	  }
	
	  return target;
	};
	
	
	/**
	 * Returns the version of Internet Explorer or a -1
	 * (indicating the use of another browser).
	 * @returns {number}
	 */
	var getInternetExplorerVersion = function (navigatorAppName, userAgent) {
	  var rv = -1; // Return value assumes failure.
	  if (navigatorAppName == 'Microsoft Internet Explorer') {
	    var ua = userAgent;
	    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
	    if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
	  }
	  return rv;
	};
	
	var startsWithOneOf = function (target, array) {
	  var len = parseInt(array.length, 10) || 0;
	  if (len === 0) {
	    return false;
	  }
	
	  var k = 0;
	
	  var currentElement = null;
	  while (k < len) {
	    currentElement = array[k];
	    if (target.startsWith && target.startsWith(currentElement)) {
	      return true;
	    }
	    k++;
	  }
	
	  return false;
	};
	
	module.exports = {
	  chunkString:                chunkString,
	  chunkEscapedString:         chunkEscapedString,
	  deepCopy:                   deepCopy,
	  merge:                      merge,
	  getInternetExplorerVersion: getInternetExplorerVersion,
	  getUnique:                  getUnique,
	  startsWithOneOf:            startsWithOneOf
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}(); true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return LZString}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);


/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = {
		"name": "gb-tracker-client",
		"version": "3.3.3",
		"description": "GroupBy client-side event tracker",
		"keywords": [
			"groupby",
			"tracker",
			"recommendations"
		],
		"repository": {
			"type": "git",
			"url": "git+https://github.com/groupby/gb-tracker-client.git"
		},
		"main": "index.js",
		"scripts": {
			"test": "gulp test",
			"coverage:codacy": "cat ./coverage/lcov.info | codacy-coverage"
		},
		"author": "Eric Hacke",
		"license": "MIT",
		"devDependencies": {
			"chai": "^3.5.0",
			"codacy-coverage": "^2.0.0",
			"gulp": "^3.9.1",
			"gulp-eslint": "^3.0.1",
			"gulp-exec": "^2.1.3",
			"gulp-if": "^2.0.2",
			"gulp-istanbul": "^1.1.1",
			"gulp-mocha": "^3.0.1",
			"gulp-util": "^3.0.7",
			"istanbul": "^0.4.3",
			"lodash": "^4.16.6",
			"stream-combiner2": "^1.1.1",
			"stringify-object": "3.0.0",
			"supertest": "^2.0.1",
			"supertest-as-promised": "^4.0.2",
			"webpack": "^1.13.3",
			"webpack-stream": "^3.2.0"
		},
		"dependencies": {
			"deep-diff": "^0.3.4",
			"json-loader": "^0.5.4",
			"lz-string": "^1.4.4",
			"mocha": "^3.1.2",
			"schema-inspector": "^1.6.8",
			"uuid": "^2.0.3"
		}
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      cart: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string',
	            optional: true
	          },
	          items: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                category: {
	                  type: 'string',
	                  optional: true
	                },
	                collection: {
	                  type: 'string',
	                  optional: false
	                },
	                title: {
	                  type: 'string'
	                },
	                sku: {
	                  type: 'string',
	                  optional: true
	                },
	                productId: {
	                  type: 'string'
	                },
	                parentId: {
	                  type: 'string',
	                  optional: true
	                },
	                margin: {
	                  type: 'number',
	                  optional: true
	                },
	                price: {
	                  type: 'number'
	                },
	                quantity: {
	                  type: 'integer'
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      key: {
	                        type: 'string'
	                      },
	                      value: {
	                        type: 'string'
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true
	                }
	              },
	              strict: true
	            }
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                key: {
	                  type: 'string'
	                },
	                value: {
	                  type: 'string'
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      cart: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          items: {
	            type: 'array',
	            items: {
	              properties: {
	                category: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                collection: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim'
	                  ],
	                  optional: false,
	                  def: 'default'
	                },
	                title: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                sku: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                productId: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                parentId: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                margin: {
	                  type: 'number',
	                  optional: true
	                },
	                price: {
	                  type: 'number'
	                },
	                quantity: {
	                  type: 'integer'
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      key: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true
	                }
	              },
	              strict: true
	            }
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              properties: {
	                key: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                value: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = {
	  regex: {
	    ISO_8601: /(\d{4})-(0[1-9]|1[0-2]|[1-9])-(\3([12]\d|0[1-9]|3[01])|[1-9])[tT\s]([01]\d|2[0-3])\:(([0-5]\d)|\d)\:(([0-5]\d)|\d)([\.,]\d+)?([zZ]|([\+-])([01]\d|2[0-3]|\d):(([0-5]\d)|\d))$/,
	    UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
	    ALPHA_NUM_LOWERCASE: /^[0-9a-z]+$/,
	    ALPHA_NUM: /^[0-9a-z]+$/i,
	    SHA1_HEX: /^[0-9a-f]{40}$/,
	    WHITELIST_STRIPING_REGEX: /(?:[\0- \(\)\+<->\[\]\^`\{-\xA0\xA6\xA8\xA9\xAC-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u0380-\u0385\u038B\u038D\u03A2\u03F6\u0482\u0488\u0489\u0530\u0557\u0558\u0560\u0588\u058B-\u058E\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0608\u060E\u060F\u061C\u061D\u06DD\u06DE\u06E9\u06FD\u06FE\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07F6\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FA\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF3-\u0BF8\u0BFA-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D53\u0D64\u0D65\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F98\u0FBD-\u0FC5\u0FC7-\u0FCF\u0FD5-\u0FD8\u0FDB-\u0FFF\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE\u13FF\u1680\u169B-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABE-\u1AFF\u1B4C-\u1B4F\u1B61-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u200F\u201A\u201E\u2028-\u202F\u2044-\u2046\u2052\u205F-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u209F\u20BF-\u20CF\u20DD-\u20E0\u20E2-\u20E4\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E22-\u2E29\u2E42\u2E45-\u3000\u3004\u3008-\u301B\u301D-\u3020\u3036\u3037\u303E-\u3040\u3097\u3098\u309B\u309C\u3100-\u3104\u312E-\u3130\u318F-\u3191\u3196-\u319F\u31BB-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DB6-\u4DFF\u9FD6-\u9FFF\uA48D-\uA4CF\uA62C-\uA63F\uA670-\uA672\uA6F8-\uA716\uA720\uA721\uA789\uA78A\uA7AF\uA7B8-\uA7F6\uA828-\uA82F\uA836\uA837\uA839-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAA77-\uAA79\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFD-\uFDFF\uFE17\uFE18\uFE1A-\uFE1F\uFE35-\uFE44\uFE47\uFE48\uFE53\uFE59-\uFE5E\uFE62\uFE64-\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFF08\uFF09\uFF0B\uFF1C-\uFF1E\uFF3B\uFF3D\uFF3E\uFF40\uFF5B-\uFF60\uFF62\uFF63\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE2-\uFFE4\uFFE7-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEC8\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF3F-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D-\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF3C-\uDF3F\uDF45-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDCA0-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|[\uD836\uD83B][\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|[\uD83C\uDB40][\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
	    BLACKLIST_STRIPING_REGEX: /(?:[\0-\x1F\(\);-\?\[\]\{\}\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0488\u0489\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABE-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20DD-\u20E0\u20E2-\u20E4\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA670-\uA672\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
	  }
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      cart: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string',
	            optional: true
	          },
	          totalItems: {
	            type: 'integer',
	            optional: true
	          },
	          totalQuantity: {
	            type: 'integer',
	            optional: true
	          },
	          totalPrice: {
	            type: 'number',
	            optional: true
	          },
	          generatedTotalPrice: {
	            type: 'number',
	            optional: true
	          },
	          items: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                category: {
	                  type: 'string',
	                  optional: true
	                },
	                collection: {
	                  type: 'string',
	                  optional: false
	                },
	                title: {
	                  type: 'string'
	                },
	                sku: {
	                  type: 'string',
	                  optional: true
	                },
	                productId: {
	                  type: 'string'
	                },
	                parentId: {
	                  type: 'string',
	                  optional: true
	                },
	                margin: {
	                  type: 'number',
	                  optional: true
	                },
	                price: {
	                  type: 'number'
	                },
	                quantity: {
	                  type: 'integer'
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      key: {
	                        type: 'string'
	                      },
	                      value: {
	                        type: 'string'
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true
	                }
	              },
	              strict: true
	            }
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                key: {
	                  type: 'string'
	                },
	                value: {
	                  type: 'string'
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      cart: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          totalItems: {
	            type: 'integer',
	            optional: true
	          },
	          totalQuantity: {
	            type: 'integer',
	            optional: true
	          },
	          totalPrice: {
	            type: 'number',
	            optional: true
	          },
	          generatedTotalPrice: {
	            type: 'number',
	            optional: true
	          },
	          items: {
	            type: 'array',
	            items: {
	              properties: {
	                category: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                collection: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim'
	                  ],
	                  optional: false,
	                  def: 'default'
	                },
	                title: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                sku: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                productId: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                parentId: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ],
	                  optional: true
	                },
	                margin: {
	                  type: 'number',
	                  optional: true
	                },
	                price: {
	                  type: 'number'
	                },
	                quantity: {
	                  type: 'integer'
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      key: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true
	                }
	              },
	              strict: true
	            }
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              properties: {
	                key: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                value: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      responseId: {
	        type: 'string',
	        pattern: /^[0-9a-f]{40}$/,
	        error: 'must be SHA1 hex'
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      search: {
	        properties: {
	          origin: {
	            type: 'object',
	            properties: {
	              sayt: {
	                type: 'boolean',
	                optional: false
	              },
	              dym: {
	                type: 'boolean',
	                optional: false
	              },
	              search: {
	                type: 'boolean',
	                optional: false
	              },
	              recommendations: {
	                type: 'boolean',
	                optional: false
	              },
	              autosearch: {
	                type: 'boolean',
	                optional: false
	              },
	              navigation: {
	                type: 'boolean',
	                optional: false
	              },
	              collectionSwitcher: {
	                type: 'boolean',
	                optional: false
	              }
	            },
	            strict: true
	          }
	        },
	        type: 'object',
	        optional: false
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      responseId: {},
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      search: {
	        properties: {
	          origin: {
	            properties: {
	              sayt: {
	                optional: false,
	                def: false
	              },
	              dym: {
	                optional: false,
	                def: false
	              },
	              search: {
	                optional: false,
	                def: false
	              },
	              recommendations: {
	                optional: false,
	                def: false
	              },
	              autosearch: {
	                optional: false,
	                def: false
	              },
	              navigation: {
	                optional: false,
	                def: false
	              },
	              collectionSwitcher: {
	                optional: false,
	                def: false
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      responseId: {
	        type: 'string',
	        optional: true
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      search: {
	        properties: {
	          origin: {
	            type: 'object',
	            properties: {
	              sayt: {
	                type: 'boolean',
	                optional: false
	              },
	              dym: {
	                type: 'boolean',
	                optional: false
	              },
	              search: {
	                type: 'boolean',
	                optional: false
	              },
	              recommendations: {
	                type: 'boolean',
	                optional: false
	              },
	              autosearch: {
	                type: 'boolean',
	                optional: false
	              },
	              navigation: {
	                type: 'boolean',
	                optional: false
	              },
	              collectionSwitcher: {
	                type: 'boolean',
	                optional: false
	              }
	            },
	            strict: true
	          },
	          id: {
	            type: 'string',
	            optional: true
	          },
	          totalRecordCount: {
	            type: 'integer',
	            optional: false
	          },
	          area: {
	            type: 'string',
	            optional: true
	          },
	          biasingProfile: {
	            type: 'string',
	            optional: true
	          },
	          query: {
	            type: 'string',
	            optional: false
	          },
	          originalQuery: {
	            type: 'string',
	            optional: true
	          },
	          correctedQuery: {
	            type: 'string',
	            optional: true
	          },
	          warnings: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          errors: {
	            type: 'string',
	            optional: true
	          },
	          template: {
	            type: 'object',
	            properties: {
	              name: {
	                type: 'string',
	                optional: true
	              },
	              ruleName: {
	                type: 'string',
	                optional: true
	              },
	              _id: {
	                type: 'string',
	                optional: true
	              }
	            },
	            optional: true
	          },
	          pageInfo: {
	            type: 'object',
	            properties: {
	              recordStart: {
	                type: 'integer',
	                optional: false
	              },
	              recordEnd: {
	                type: 'integer',
	                optional: false
	              }
	            },
	            optional: false
	          },
	          relatedQueries: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          rewrites: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          redirect: {
	            type: 'string',
	            optional: true
	          },
	          siteParams: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                key: {
	                  type: 'string',
	                  optional: true
	                },
	                value: {
	                  type: 'string',
	                  optional: true
	                }
	              }
	            },
	            optional: true
	          },
	          matchStrategy: {
	            type: 'object',
	            properties: {
	              name: {
	                type: 'string',
	                optional: true
	              },
	              rules: {
	                type: 'array',
	                items: {
	                  type: 'object',
	                  properties: {
	                    terms: {
	                      type: 'integer',
	                      optional: true
	                    },
	                    termsGreaterThan: {
	                      type: 'integer',
	                      optional: true
	                    },
	                    mustMatch: {
	                      type: 'integer',
	                      optional: true
	                    },
	                    percentage: {
	                      type: 'boolean',
	                      optional: true
	                    }
	                  }
	                },
	                optional: true
	              }
	            },
	            optional: true
	          },
	          availableNavigation: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                name: {
	                  type: 'string',
	                  optional: false
	                },
	                displayName: {
	                  type: 'string',
	                  optional: true
	                },
	                range: {
	                  type: 'boolean',
	                  optional: true
	                },
	                or: {
	                  type: 'boolean',
	                  optional: true
	                },
	                ignored: {
	                  type: 'boolean',
	                  optional: true
	                },
	                moreRefinements: {
	                  type: 'boolean',
	                  optional: true
	                },
	                _id: {
	                  type: 'string',
	                  optional: true
	                },
	                type: {
	                  type: 'string',
	                  optional: true
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      key: {
	                        type: 'string',
	                        optional: false
	                      },
	                      value: {
	                        type: 'string',
	                        optional: false
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true,
	                  strict: true
	                },
	                refinements: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      type: {
	                        type: 'string',
	                        optional: false
	                      },
	                      _id: {
	                        type: 'string',
	                        optional: true
	                      },
	                      count: {
	                        type: 'integer',
	                        optional: true
	                      },
	                      exclude: {
	                        type: 'boolean',
	                        optional: true
	                      },
	                      value: {
	                        type: 'string',
	                        optional: true
	                      },
	                      high: {
	                        type: 'string',
	                        optional: true
	                      },
	                      low: {
	                        type: 'string',
	                        optional: true
	                      }
	                    }
	                  },
	                  optional: false
	                }
	              }
	            },
	            optional: true
	          },
	          selectedNavigation: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                name: {
	                  type: 'string',
	                  optional: false
	                },
	                displayName: {
	                  type: 'string',
	                  optional: true
	                },
	                range: {
	                  type: 'boolean',
	                  optional: true
	                },
	                or: {
	                  type: 'boolean',
	                  optional: true
	                },
	                ignored: {
	                  type: 'boolean',
	                  optional: true
	                },
	                moreRefinements: {
	                  type: 'boolean',
	                  optional: true
	                },
	                _id: {
	                  type: 'string',
	                  optional: true
	                },
	                type: {
	                  type: 'string',
	                  optional: true
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      key: {
	                        type: 'string',
	                        optional: false
	                      },
	                      value: {
	                        type: 'string',
	                        optional: false
	                      }
	                    },
	                    strict: true
	                  },
	                  optional: true,
	                  strict: true
	                },
	                refinements: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      type: {
	                        type: 'string',
	                        optional: false
	                      },
	                      _id: {
	                        type: 'string',
	                        optional: true
	                      },
	                      count: {
	                        type: 'integer',
	                        optional: true
	                      },
	                      exclude: {
	                        type: 'boolean',
	                        optional: true
	                      },
	                      value: {
	                        type: 'string',
	                        optional: true
	                      },
	                      high: {
	                        type: 'string',
	                        optional: true
	                      },
	                      low: {
	                        type: 'string',
	                        optional: true
	                      }
	                    }
	                  },
	                  optional: false
	                }
	              }
	            },
	            optional: true
	          },
	          records: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                allMeta: {
	                  type: 'object',
	                  properties: {
	                    sku: {
	                      type: 'string',
	                      optional: true
	                    },
	                    productId: {
	                      type: 'string',
	                      optional: true
	                    }
	                  },
	                  optional: true
	                },
	                refinementMatches: {
	                  type: 'array',
	                  items: {
	                    type: 'object',
	                    properties: {
	                      name: {
	                        type: 'string',
	                        optional: true
	                      },
	                      values: {
	                        type: 'array',
	                        items: {
	                          type: 'object',
	                          properties: {
	                            value: {
	                              type: 'string',
	                              optional: true
	                            },
	                            count: {
	                              type: 'integer',
	                              optional: true
	                            }
	                          }
	                        },
	                        optional: true
	                      }
	                    }
	                  },
	                  optional: true
	                },
	                _id: {
	                  type: 'string',
	                  optional: true
	                },
	                _u: {
	                  type: 'string',
	                  optional: true
	                },
	                _t: {
	                  type: 'string',
	                  optional: true
	                },
	                collection: {
	                  type: 'string',
	                  optional: true
	                }
	              }
	            },
	            optional: true
	          },
	          didYouMean: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          originalRequest: {
	            type: 'object',
	            properties: {
	              collection: {
	                type: 'string',
	                optional: true
	              },
	              area: {
	                type: 'string',
	                optional: true
	              },
	              sessionId: {
	                type: 'string',
	                optional: true
	              },
	              visitorId: {
	                type: 'string',
	                optional: true
	              },
	              biasingProfile: {
	                type: 'string',
	                optional: true
	              },
	              language: {
	                type: 'string',
	                optional: true
	              },
	              customUrlParams: {
	                type: 'array',
	                items: {
	                  type: 'object',
	                  properties: {
	                    key: {
	                      type: 'string',
	                      optional: true
	                    },
	                    value: {
	                      type: 'string',
	                      optional: true
	                    }
	                  }
	                },
	                optional: true
	              },
	              query: {
	                type: 'string',
	                optional: true
	              },
	              refinementQuery: {
	                type: 'string',
	                optional: true
	              },
	              matchStrategyName: {
	                type: 'string',
	                optional: true
	              },
	              matchStrategy: {
	                type: 'object',
	                properties: {
	                  name: {
	                    type: 'string',
	                    optional: true
	                  },
	                  rules: {
	                    type: 'array',
	                    items: {
	                      type: 'object',
	                      properties: {
	                        terms: {
	                          type: 'integer',
	                          optional: true
	                        },
	                        termsGreaterThan: {
	                          type: 'integer',
	                          optional: true
	                        },
	                        mustMatch: {
	                          type: 'integer',
	                          optional: true
	                        },
	                        percentage: {
	                          type: 'boolean',
	                          optional: true
	                        }
	                      }
	                    },
	                    optional: true
	                  }
	                },
	                optional: true
	              },
	              biasing: {
	                type: 'object',
	                properties: {
	                  bringToTop: {
	                    type: 'array',
	                    items: {
	                      type: 'string'
	                    },
	                    optional: true
	                  },
	                  augmentBiases: {
	                    type: 'boolean',
	                    optional: true
	                  },
	                  influence: {
	                    type: 'number',
	                    optional: true
	                  },
	                  biases: {
	                    type: 'array',
	                    items: {
	                      type: 'object',
	                      properties: {
	                        name: {
	                          type: 'string',
	                          optional: true
	                        },
	                        content: {
	                          type: 'string',
	                          optional: true
	                        },
	                        strength: {
	                          type: 'string',
	                          optional: true
	                        }
	                      }
	                    },
	                    optional: true
	                  }
	                },
	                optional: true
	              },
	              skip: {
	                type: 'integer',
	                optional: true
	              },
	              pageSize: {
	                type: 'integer',
	                optional: true
	              },
	              returnBinary: {
	                type: 'boolean',
	                optional: true
	              },
	              disableAutocorrection: {
	                type: 'boolean',
	                optional: true
	              },
	              pruneRefinements: {
	                type: 'boolean',
	                optional: true
	              },
	              sort: {
	                type: 'array',
	                items: {
	                  type: 'object',
	                  properties: {
	                    field: {
	                      type: 'string',
	                      optional: true
	                    },
	                    order: {
	                      type: 'string',
	                      optional: true
	                    }
	                  }
	                },
	                optional: true
	              },
	              fields: {
	                type: 'array',
	                items: {
	                  type: 'string'
	                },
	                optional: true
	              },
	              orFields: {
	                type: 'array',
	                items: {
	                  type: 'string'
	                },
	                optional: true
	              },
	              wildcardSearchEnabled: {
	                type: 'boolean',
	                optional: true
	              },
	              restrictNavigation: {
	                type: 'object',
	                properties: {
	                  name: {
	                    type: 'string',
	                    optional: true
	                  },
	                  count: {
	                    type: 'integer',
	                    optional: true
	                  }
	                },
	                optional: true
	              },
	              includedNavigations: {
	                type: 'array',
	                items: {
	                  type: 'string'
	                },
	                optional: true
	              },
	              excludedNavigations: {
	                type: 'array',
	                items: {
	                  type: 'string'
	                },
	                optional: true
	              },
	              refinements: {
	                type: 'array',
	                items: {
	                  type: 'object',
	                  properties: {
	                    navigationName: {
	                      type: 'string',
	                      optional: true
	                    },
	                    type: {
	                      type: 'string',
	                      optional: true
	                    },
	                    _id: {
	                      type: 'string',
	                      optional: true
	                    },
	                    exclude: {
	                      type: 'boolean',
	                      optional: true
	                    },
	                    value: {
	                      type: 'string',
	                      optional: true
	                    },
	                    high: {
	                      type: 'string',
	                      optional: true
	                    },
	                    low: {
	                      type: 'string',
	                      optional: true
	                    }
	                  }
	                },
	                optional: true
	              }
	            },
	            optional: true
	          }
	        },
	        type: 'object',
	        optional: false
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      responseId: {
	        maxLength: 10000,
	        rules: [
	          'trim',
	          'lower'
	        ],
	        optional: true
	      },
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      search: {
	        properties: {
	          origin: {
	            properties: {
	              sayt: {
	                optional: false,
	                def: false
	              },
	              dym: {
	                optional: false,
	                def: false
	              },
	              search: {
	                optional: false,
	                def: false
	              },
	              recommendations: {
	                optional: false,
	                def: false
	              },
	              autosearch: {
	                optional: false,
	                def: false
	              },
	              navigation: {
	                optional: false,
	                def: false
	              },
	              collectionSwitcher: {
	                optional: false,
	                def: false
	              }
	            },
	            strict: true
	          },
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          totalRecordCount: {
	            type: 'integer'
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ]
	          },
	          biasingProfile: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          query: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            exec: function (schema, post) {
	  if (typeof post === 'string') {
	    // Strip using blacklist
	    post = post.replace(utils.regex.BLACKLIST_STRIPING_REGEX, ' ');
	
	    // Replace all whitespace combinations with a single space
	    post = post.replace(/\s\s+/g, ' ');
	
	    post = post.trim();
	
	    return post;
	  } else {
	    return post;
	  }
	}
	          },
	          originalQuery: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            exec: function (schema, post) {
	  if (typeof post === 'string') {
	    // Strip using blacklist
	    post = post.replace(utils.regex.BLACKLIST_STRIPING_REGEX, ' ');
	
	    // Replace all whitespace combinations with a single space
	    post = post.replace(/\s\s+/g, ' ');
	
	    post = post.trim();
	
	    return post;
	  } else {
	    return post;
	  }
	}
	          },
	          correctedQuery: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            exec: function (schema, post) {
	  if (typeof post === 'string') {
	    // Strip using blacklist
	    post = post.replace(utils.regex.BLACKLIST_STRIPING_REGEX, ' ');
	
	    // Replace all whitespace combinations with a single space
	    post = post.replace(/\s\s+/g, ' ');
	
	    post = post.trim();
	
	    return post;
	  } else {
	    return post;
	  }
	}
	          },
	          warnings: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          errors: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          template: {
	            properties: {
	              name: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              ruleName: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              _id: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          },
	          pageInfo: {
	            properties: {
	              recordStart: {
	                type: 'integer'
	              },
	              recordEnd: {
	                type: 'integer'
	              }
	            },
	            strict: true
	          },
	          relatedQueries: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          rewrites: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          redirect: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          siteParams: {
	            type: 'array',
	            items: {
	              properties: {
	                key: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                value: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              strict: true
	            }
	          },
	          matchStrategy: {
	            properties: {
	              name: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              rules: {
	                type: 'array',
	                items: {
	                  properties: {
	                    terms: {
	                      type: 'integer'
	                    },
	                    termsGreaterThan: {
	                      type: 'integer'
	                    },
	                    mustMatch: {
	                      type: 'integer'
	                    },
	                    percentage: {}
	                  },
	                  strict: true
	                }
	              }
	            },
	            strict: true
	          },
	          availableNavigation: {
	            type: 'array',
	            items: {
	              properties: {
	                name: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                displayName: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                range: {},
	                or: {},
	                ignored: {},
	                moreRefinements: {},
	                _id: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                type: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      key: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  }
	                },
	                refinements: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      type: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      _id: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      count: {
	                        type: 'integer'
	                      },
	                      exclude: {},
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      high: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      low: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  }
	                }
	              },
	              strict: true
	            }
	          },
	          selectedNavigation: {
	            type: 'array',
	            items: {
	              properties: {
	                name: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                displayName: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                range: {},
	                or: {},
	                ignored: {},
	                moreRefinements: {},
	                _id: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                type: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                metadata: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      key: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  }
	                },
	                refinements: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      type: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      _id: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      count: {
	                        type: 'integer'
	                      },
	                      exclude: {},
	                      value: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      high: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      low: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      }
	                    },
	                    strict: true
	                  }
	                }
	              },
	              strict: true
	            }
	          },
	          records: {
	            type: 'array',
	            items: {
	              properties: {
	                allMeta: {
	                  properties: {
	                    sku: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ],
	                      type: 'string'
	                    },
	                    productId: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ],
	                      type: 'string'
	                    }
	                  },
	                  strict: true
	                },
	                refinementMatches: {
	                  type: 'array',
	                  items: {
	                    properties: {
	                      name: {
	                        maxLength: 10000,
	                        rules: [
	                          'trim',
	                          'lower'
	                        ]
	                      },
	                      values: {
	                        type: 'array',
	                        items: {
	                          properties: {
	                            value: {
	                              maxLength: 10000,
	                              rules: [
	                                'trim',
	                                'lower'
	                              ]
	                            },
	                            count: {
	                              type: 'integer'
	                            }
	                          },
	                          strict: true
	                        }
	                      }
	                    },
	                    strict: true
	                  }
	                },
	                _id: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                _u: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                _t: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                collection: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              strict: true
	            }
	          },
	          didYouMean: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          originalRequest: {
	            properties: {
	              collection: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              area: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              biasingProfile: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              language: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              customUrlParams: {
	                type: 'array',
	                items: {
	                  properties: {
	                    key: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    value: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    }
	                  },
	                  strict: true
	                }
	              },
	              query: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ],
	                exec: function (schema, post) {
	  if (typeof post === 'string') {
	    // Strip using blacklist
	    post = post.replace(utils.regex.BLACKLIST_STRIPING_REGEX, ' ');
	
	    // Replace all whitespace combinations with a single space
	    post = post.replace(/\s\s+/g, ' ');
	
	    post = post.trim();
	
	    return post;
	  } else {
	    return post;
	  }
	}
	              },
	              refinementQuery: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              matchStrategyName: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              matchStrategy: {
	                properties: {
	                  name: {
	                    maxLength: 10000,
	                    rules: [
	                      'trim',
	                      'lower'
	                    ]
	                  },
	                  rules: {
	                    type: 'array',
	                    items: {
	                      properties: {
	                        terms: {
	                          type: 'integer'
	                        },
	                        termsGreaterThan: {
	                          type: 'integer'
	                        },
	                        mustMatch: {
	                          type: 'integer'
	                        },
	                        percentage: {}
	                      },
	                      strict: true
	                    }
	                  }
	                },
	                strict: true
	              },
	              biasing: {
	                properties: {
	                  bringToTop: {
	                    type: 'array',
	                    items: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    }
	                  },
	                  augmentBiases: {},
	                  influence: {
	                    type: 'number'
	                  },
	                  biases: {
	                    type: 'array',
	                    items: {
	                      properties: {
	                        name: {
	                          maxLength: 10000,
	                          rules: [
	                            'trim',
	                            'lower'
	                          ]
	                        },
	                        content: {
	                          maxLength: 10000,
	                          rules: [
	                            'trim',
	                            'lower'
	                          ]
	                        },
	                        strength: {
	                          maxLength: 10000,
	                          rules: [
	                            'trim',
	                            'lower'
	                          ]
	                        }
	                      },
	                      strict: true
	                    }
	                  }
	                },
	                strict: true
	              },
	              skip: {
	                type: 'integer'
	              },
	              pageSize: {
	                type: 'integer'
	              },
	              returnBinary: {},
	              disableAutocorrection: {},
	              pruneRefinements: {},
	              sort: {
	                type: 'array',
	                items: {
	                  properties: {
	                    field: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    order: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    }
	                  },
	                  strict: true
	                }
	              },
	              fields: {
	                type: 'array',
	                items: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              orFields: {
	                type: 'array',
	                items: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              wildcardSearchEnabled: {},
	              restrictNavigation: {
	                properties: {
	                  name: {
	                    maxLength: 10000,
	                    rules: [
	                      'trim',
	                      'lower'
	                    ]
	                  },
	                  count: {
	                    type: 'integer'
	                  }
	                },
	                strict: true
	              },
	              includedNavigations: {
	                type: 'array',
	                items: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              excludedNavigations: {
	                type: 'array',
	                items: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              refinements: {
	                type: 'array',
	                items: {
	                  properties: {
	                    navigationName: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    type: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    _id: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    exclude: {},
	                    value: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    high: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    },
	                    low: {
	                      maxLength: 10000,
	                      rules: [
	                        'trim',
	                        'lower'
	                      ]
	                    }
	                  },
	                  strict: true
	                }
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      session: {
	        type: 'object',
	        properties: {
	          previousSessionId: {
	            type: 'string',
	            optional: true
	          },
	          newSessionId: {
	            type: 'string'
	          },
	          previousVisitorId: {
	            type: 'string',
	            optional: true
	          },
	          newVisitorId: {
	            type: 'string'
	          }
	        },
	        strict: true
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      session: {
	        properties: {
	          previousSessionId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          newSessionId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          previousVisitorId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          newVisitorId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(189);
	module.exports={
	  validation: {
	    type: 'object',
	    properties: {
	      clientVersion: {
	        type: 'object',
	        properties: {
	          raw: {
	            type: 'string'
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              type: 'string'
	            },
	            optional: true
	          },
	          version: {
	            type: 'string',
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        type: 'string'
	      },
	      customer: {
	        type: 'object',
	        properties: {
	          id: {
	            type: 'string'
	          },
	          area: {
	            type: 'string',
	            optional: false
	          }
	        },
	        strict: true
	      },
	      product: {
	        type: 'object',
	        properties: {
	          category: {
	            type: 'string',
	            optional: true
	          },
	          collection: {
	            type: 'string',
	            optional: false
	          },
	          title: {
	            type: 'string'
	          },
	          sku: {
	            type: 'string',
	            optional: true
	          },
	          productId: {
	            type: 'string'
	          },
	          parentId: {
	            type: 'string',
	            optional: true
	          },
	          margin: {
	            type: 'number',
	            optional: true
	          },
	          price: {
	            type: 'number'
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              type: 'object',
	              properties: {
	                key: {
	                  type: 'string'
	                },
	                value: {
	                  type: 'string'
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        type: 'object',
	        properties: {
	          customerData: {
	            type: 'object',
	            properties: {
	              visitorId: {
	                type: 'string'
	              },
	              sessionId: {
	                type: 'string'
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          type: 'object',
	          properties: {
	            key: {
	              type: 'string'
	            },
	            value: {
	              type: 'string'
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  },
	  sanitization: {
	    properties: {
	      clientVersion: {
	        properties: {
	          raw: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          major: {
	            type: 'integer',
	            optional: true
	          },
	          minor: {
	            type: 'integer',
	            optional: true
	          },
	          patch: {
	            type: 'integer',
	            optional: true
	          },
	          prerelease: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          build: {
	            type: 'array',
	            items: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            optional: true
	          },
	          version: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          }
	        },
	        strict: true
	      },
	      eventType: {
	        maxLength: 10000,
	        rules: [
	          'trim'
	        ]
	      },
	      customer: {
	        properties: {
	          id: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          area: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'Production'
	          }
	        },
	        strict: true
	      },
	      product: {
	        properties: {
	          category: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          collection: {
	            maxLength: 10000,
	            rules: [
	              'trim'
	            ],
	            optional: false,
	            def: 'default'
	          },
	          title: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          sku: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          productId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ]
	          },
	          parentId: {
	            maxLength: 10000,
	            rules: [
	              'trim',
	              'lower'
	            ],
	            optional: true
	          },
	          margin: {
	            type: 'number',
	            optional: true
	          },
	          price: {
	            type: 'number'
	          },
	          metadata: {
	            type: 'array',
	            items: {
	              properties: {
	                key: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                },
	                value: {
	                  maxLength: 10000,
	                  rules: [
	                    'trim',
	                    'lower'
	                  ]
	                }
	              },
	              strict: true
	            },
	            optional: true
	          }
	        },
	        strict: true
	      },
	      visit: {
	        properties: {
	          customerData: {
	            properties: {
	              visitorId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              },
	              sessionId: {
	                maxLength: 10000,
	                rules: [
	                  'trim',
	                  'lower'
	                ]
	              }
	            },
	            strict: true
	          }
	        },
	        strict: true
	      },
	      metadata: {
	        type: 'array',
	        items: {
	          properties: {
	            key: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            },
	            value: {
	              maxLength: 10000,
	              rules: [
	                'trim',
	                'lower'
	              ]
	            }
	          },
	          strict: true
	        },
	        optional: true
	      }
	    },
	    strict: true
	  }
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (true) {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						attributes.path ? '; path=' + attributes.path : '',
						attributes.domain ? '; domain=' + attributes.domain : '',
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var v1 = __webpack_require__(197);
	var v4 = __webpack_require__(200);
	
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	
	module.exports = uuid;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var rng = __webpack_require__(198);
	var bytesToUuid = __webpack_require__(199);
	
	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html
	
	// random #'s we need to init node and clockseq
	var _seedBytes = rng();
	
	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];
	
	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;
	
	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];
	
	  options = options || {};
	
	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
	
	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
	
	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
	
	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }
	
	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }
	
	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }
	
	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;
	
	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;
	
	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;
	
	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;
	
	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;
	
	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;
	
	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;
	
	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }
	
	  return buf ? buf : bytesToUuid(b);
	}
	
	module.exports = v1;


/***/ },
/* 198 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection
	var rng;
	
	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(rnds8);
	    return rnds8;
	  };
	}
	
	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }
	
	    return rnds;
	  };
	}
	
	module.exports = rng;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 199 */
/***/ function(module, exports) {

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}
	
	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}
	
	module.exports = bytesToUuid;


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(198);
	var bytesToUuid = __webpack_require__(199);
	
	function v4(options, buf, offset) {
	  var i = buf && offset || 0;
	
	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};
	
	  var rnds = options.random || (options.rng || rng)();
	
	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }
	
	  return buf || bytesToUuid(rnds);
	}
	
	module.exports = v4;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var simple_beautifier_1 = __webpack_require__(202);
	var url_beautifier_1 = __webpack_require__(204);
	var parseUri = __webpack_require__(203);
	var Url = (function () {
	    function Url(flux, config, services) {
	        this.flux = flux;
	        this.config = config;
	        this.services = services;
	        this.urlConfig = this.config.url || {};
	        this.beautify = !!this.urlConfig.beautifier;
	    }
	    Url.prototype.init = function () {
	        var _this = this;
	        this.beautifier = new url_beautifier_1.UrlBeautifier(this.config);
	        this.simple = new simple_beautifier_1.SimpleBeautifier(this.config);
	        if (!this.config.initialSearch) {
	            var query = void 0;
	            if (this.beautify) {
	                query = Url.parseBeautifiedUrl(this.beautifier);
	            }
	            else {
	                query = Url.parseUrl(this.simple);
	            }
	            if (query && (query.raw.query || query.raw.refinements.length)) {
	                this.flux.query = query;
	                this.flux.search(query.raw.query)
	                    .then(function () { return _this.services.tracker && _this.services.tracker.search(); });
	            }
	        }
	    };
	    Url.prototype.isActive = function () {
	        return common_1.LOCATION.pathname() !== this.urlConfig.searchUrl;
	    };
	    Url.prototype.update = function (query) {
	        var url = (this.beautify ? this.beautifier : this.simple).build(query);
	        Url.setLocation(url, this.urlConfig);
	    };
	    Url.parseUrl = function (simple) {
	        return simple.parse(common_1.LOCATION.href());
	    };
	    Url.parseBeautifiedUrl = function (beautifier) {
	        return beautifier.parse(common_1.LOCATION.href());
	    };
	    // TODO: better way to do this is with browser history rewrites
	    Url.setLocation = function (url, config) {
	        if (common_1.LOCATION.pathname() === config.searchUrl) {
	            common_1.LOCATION.setSearch("?" + parseUri(url).query);
	        }
	        else {
	            common_1.LOCATION.replace(url);
	        }
	    };
	    return Url;
	}());
	exports.Url = Url;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(57);
	var groupby_api_1 = __webpack_require__(125);
	var parseUri = __webpack_require__(203);
	var queryString = __webpack_require__(68);
	var SimpleBeautifier = (function () {
	    function SimpleBeautifier(config) {
	        this.config = config;
	        this.urlConfig = config.url || {};
	    }
	    SimpleBeautifier.prototype.parse = function (url) {
	        var queryParams = queryString.parse(parseUri(url).query);
	        var queryFromUrl = new groupby_api_1.Query(queryParams[this.urlConfig.queryParam] || '')
	            .withConfiguration(this.config, searchandiser_1.CONFIGURATION_MASK);
	        if (queryParams.refinements) {
	            var refinements = JSON.parse(queryParams.refinements);
	            if (refinements.length > 0) {
	                queryFromUrl.withSelectedRefinements.apply(queryFromUrl, refinements);
	            }
	        }
	        return queryFromUrl;
	    };
	    SimpleBeautifier.prototype.build = function (query) {
	        var request = query.build();
	        var queryObj = {};
	        if ('refinements' in request && request.refinements.length > 0) {
	            queryObj['refinements'] = JSON.stringify(request.refinements);
	        }
	        queryObj[this.urlConfig.queryParam] = request.query;
	        return this.urlConfig.searchUrl + "?" + queryString.stringify(queryObj);
	    };
	    return SimpleBeautifier;
	}());
	exports.SimpleBeautifier = SimpleBeautifier;


/***/ },
/* 203 */
/***/ function(module, exports) {

	// a node.js module fork of
	// parseUri 1.2.2
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	// see: http://blog.stevenlevithan.com/archives/parseuri
	// see: http://stevenlevithan.com/demo/parseuri/js/
	
	//forked into a node.js module by franz enzenhofer 
	 
	
	function parseUri (str) {
		var	o   = parseUri.options,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i   = 14;
	
		while (i--) uri[o.key[i]] = m[i] || "";
	
		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});
	
		return uri;
	};
	
	parseUri.options = {
		strictMode: false,
		key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};
	
	module.exports = parseUri

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(57);
	var groupby_api_1 = __webpack_require__(125);
	var parseUri = __webpack_require__(203);
	var queryString = __webpack_require__(68);
	var UrlBeautifier = (function () {
	    function UrlBeautifier(searchandiserConfig) {
	        if (searchandiserConfig === void 0) { searchandiserConfig = {}; }
	        this.searchandiserConfig = searchandiserConfig;
	        this.config = {
	            refinementMapping: [],
	            extraRefinementsParam: 'refinements',
	            queryToken: 'q',
	            suffix: ''
	        };
	        this.generator = new UrlGenerator(this);
	        this.parser = new UrlParser(this);
	        var urlConfig = searchandiserConfig.url || {};
	        var config = typeof urlConfig.beautifier === 'object' ? urlConfig.beautifier : {};
	        Object.assign(this.config, config);
	        var keys = [];
	        for (var _i = 0, _a = this.config.refinementMapping; _i < _a.length; _i++) {
	            var mapping = _a[_i];
	            var key = Object.keys(mapping)[0];
	            if (key.length !== 1) {
	                throw new Error('refinement mapping token must be a single character');
	            }
	            if (key.match(/[aeiouy]/)) {
	                throw new Error('refinement mapping token must not be a vowel');
	            }
	            if (keys.indexOf(key) > -1) {
	                throw new Error('refinement mapping tokens must be unique');
	            }
	            keys.push(key);
	        }
	        if (this.config.queryToken.length !== 1) {
	            throw new Error('query token must be a single character');
	        }
	        if (this.config.queryToken.match(/[aeiouy]/)) {
	            throw new Error('query token must not be a vowel');
	        }
	        if (keys.indexOf(this.config.queryToken) > -1) {
	            throw new Error('query token must be unique from refinement tokens');
	        }
	    }
	    UrlBeautifier.prototype.parse = function (url) {
	        return this.parser.parse(url);
	    };
	    UrlBeautifier.prototype.build = function (query) {
	        return this.generator.build(query);
	    };
	    return UrlBeautifier;
	}());
	exports.UrlBeautifier = UrlBeautifier;
	var UrlGenerator = (function () {
	    function UrlGenerator(_a) {
	        var config = _a.config;
	        this.config = config;
	    }
	    UrlGenerator.prototype.build = function (query) {
	        var request = query.build();
	        var uri = {
	            path: [],
	            query: ''
	        };
	        // let url = '';
	        var origRefinements = Array.of.apply(Array, request.refinements);
	        var countMap = {};
	        var _a = this.generateRefinementMap(origRefinements), map = _a.map, keys = _a.keys;
	        // add query
	        if (request.query) {
	            uri.path.push(request.query);
	        }
	        // add refinements
	        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
	            var key = keys_1[_i];
	            var refinements = map[key];
	            countMap[key] = refinements.length;
	            (_b = uri.path).push.apply(_b, refinements.map(this.convertRefinement).sort());
	        }
	        // add reference key
	        if (keys.length || request.query) {
	            var referenceKey_1 = '';
	            if (request.query)
	                referenceKey_1 += this.config.queryToken;
	            keys.forEach(function (key) { return referenceKey_1 += key.repeat(countMap[key]); });
	            uri.path.push(referenceKey_1);
	        }
	        // add remaining refinements
	        if (origRefinements.length) {
	            uri.query = origRefinements
	                .sort(function (lhs, rhs) { return lhs.navigationName.localeCompare(rhs.navigationName); })
	                .map(this.stringifyRefinement)
	                .join('~');
	        }
	        var url = "/" + uri.path.map(function (path) { return encodeURIComponent(path); }).join('/');
	        if (this.config.suffix)
	            url += "/" + this.config.suffix.replace(/^\/+/, '');
	        if (uri.query)
	            url += "?" + this.config.extraRefinementsParam + "=" + encodeURIComponent(uri.query);
	        return url.replace(/\s|%20/g, '+');
	        var _b;
	    };
	    UrlGenerator.prototype.generateRefinementMap = function (refinements) {
	        var refinementMap = {};
	        var refinementKeys = [];
	        var _loop_1 = function(mapping) {
	            var key = Object.keys(mapping)[0];
	            var matchingRefinements = refinements.filter(function (refinement) { return refinement.navigationName === mapping[key]; });
	            if (matchingRefinements.length) {
	                refinementKeys.push(key);
	                refinementMap[key] = matchingRefinements;
	                matchingRefinements.forEach(function (ref) { return refinements.splice(refinements.indexOf(ref), 1); });
	            }
	        };
	        for (var _i = 0, _a = this.config.refinementMapping; _i < _a.length; _i++) {
	            var mapping = _a[_i];
	            _loop_1(mapping);
	        }
	        return { map: refinementMap, keys: refinementKeys };
	    };
	    UrlGenerator.prototype.convertRefinement = function (refinement) {
	        if (refinement.type === 'Value') {
	            return refinement.value;
	        }
	        else {
	            throw new Error('cannot map range refinements');
	        }
	    };
	    UrlGenerator.prototype.stringifyRefinement = function (refinement) {
	        var name = refinement.navigationName;
	        if (refinement.type === 'Value') {
	            return name + "=" + refinement.value;
	        }
	        else {
	            return name + ":" + refinement.low + ".." + refinement.high;
	        }
	    };
	    return UrlGenerator;
	}());
	exports.UrlGenerator = UrlGenerator;
	var UrlParser = (function () {
	    function UrlParser(_a) {
	        var config = _a.config, searchandiserConfig = _a.searchandiserConfig;
	        this.config = config;
	        this.searchandiserConfig = searchandiserConfig;
	        this.suffixRegex = new RegExp("^" + this.config.suffix);
	    }
	    UrlParser.prototype.parse = function (rawUrl) {
	        var url = parseUri(rawUrl);
	        var paths = url.path.split('/').filter(function (val) { return val; });
	        if (paths[paths.length - 1] === this.config.suffix)
	            paths.pop();
	        var keys = (paths.pop() || '').split('');
	        var map = this.generateRefinementMapping();
	        var query = new groupby_api_1.Query().withConfiguration(this.searchandiserConfig, searchandiser_1.CONFIGURATION_MASK);
	        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
	            var key = keys_2[_i];
	            if (!(key in map || key === this.config.queryToken)) {
	                throw new Error("unexpected token '" + key + "' found in reference");
	            }
	        }
	        if (paths.length < keys.length)
	            throw new Error('token reference is invalid');
	        // remove prefixed paths
	        paths.splice(0, paths.length - keys.length);
	        for (var i = 0; i < keys.length; i++) {
	            if (keys[i] === this.config.queryToken) {
	                query.withQuery(this.decode(paths[i]));
	            }
	            else {
	                query.withSelectedRefinements.apply(query, this.extractRefinements(paths[i], map[keys[i]]));
	            }
	        }
	        var unmappedRefinements = queryString.parse(url.query)[this.config.extraRefinementsParam];
	        if (unmappedRefinements) {
	            query.withSelectedRefinements.apply(query, this.extractUnmapped(unmappedRefinements));
	        }
	        return query;
	    };
	    UrlParser.prototype.generateRefinementMapping = function () {
	        return this.config.refinementMapping.reduce(function (map, mapping) { return Object.assign(map, mapping); }, {});
	    };
	    UrlParser.prototype.extractRefinements = function (refinementString, navigationName) {
	        var _this = this;
	        var refinementStrings = refinementString.split('~');
	        return refinementStrings.map(function (value) { return ({ navigationName: navigationName, type: 'Value', value: _this.decode(value) }); });
	    };
	    UrlParser.prototype.extractUnmapped = function (refinementString) {
	        var refinementStrings = refinementString.split('~');
	        return refinementStrings
	            .map(this.decode)
	            .map(function (refinement) {
	            var _a = refinement.split(/=|:/), navigationName = _a[0], value = _a[1];
	            if (value.indexOf('..') >= 0) {
	                var _b = value.split('..'), low = _b[0], high = _b[1];
	                return { navigationName: navigationName, low: Number(low), high: Number(high), type: 'Range' };
	            }
	            else {
	                return { navigationName: navigationName, value: value, type: 'Value' };
	            }
	        });
	    };
	    UrlParser.prototype.decode = function (value) {
	        return decodeURIComponent(value.replace('+', ' '));
	    };
	    return UrlParser;
	}());
	exports.UrlParser = UrlParser;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var oget = __webpack_require__(124);
	exports.DEFAULT_CONFIG = {
	    pageSize: 10,
	    sort: [],
	    simpleAttach: true,
	    url: {
	        queryParam: 'q',
	        searchUrl: 'search'
	    }
	};
	var Configuration = (function () {
	    function Configuration(rawConfig) {
	        var _this = this;
	        this.rawConfig = rawConfig;
	        this.handlers = {
	            bridge: function (config) {
	                if (config === void 0) { config = {}; }
	                var headers = config.headers || {};
	                if (config.skipCache) {
	                    headers['Skip-Caching'] = 'true';
	                }
	                if (config.skipSemantish) {
	                    headers['Skip-Semantish'] = 'true';
	                }
	                return Object.assign(config, { headers: headers });
	            },
	            sort: function (sort) {
	                if (!sort) {
	                    var sortItems = oget(_this.rawConfig, 'tags.sort.items');
	                    if (sortItems && sortItems.length > 0) {
	                        sort = sortItems.map(function (val) { return val.value; })[0];
	                    }
	                }
	                return Array.isArray(sort) ? sort : [sort];
	            },
	            pageSize: function (pageSize) {
	                if (!pageSize) {
	                    var pageSizes = _this.rawConfig.pageSizes;
	                    if (pageSizes && pageSizes.length > 0) {
	                        pageSize = pageSizes[0];
	                    }
	                }
	                return pageSize;
	            }
	        };
	    }
	    Configuration.prototype.apply = function () {
	        Configuration.validate(this.rawConfig);
	        var config = Configuration.applyDefaults(this.rawConfig, exports.DEFAULT_CONFIG);
	        return Configuration.transform(config, this.handlers);
	    };
	    Configuration.applyDefaults = function (config, defaults) {
	        var finalConfig = Object.assign({}, defaults);
	        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
	            var key = _a[_i];
	            if (Array.isArray(config[key]) || typeof config[key] !== 'object') {
	                finalConfig[key] = config[key];
	            }
	            else {
	                finalConfig[key] = Object.assign(finalConfig[key] || {}, config[key]);
	            }
	        }
	        return finalConfig;
	    };
	    Configuration.transform = function (config, handlers) {
	        for (var _i = 0, _a = Object.keys(handlers); _i < _a.length; _i++) {
	            var key = _a[_i];
	            config[key] = handlers[key](config[key]);
	        }
	        return config;
	    };
	    Configuration.validate = function (config) {
	        if (!config.structure) {
	            throw new Error('must provide a record structure');
	        }
	        var struct = Object.assign({}, config.structure, config.structure._variantStructure);
	        if (!(struct.title && struct.title.trim())) {
	            throw new Error('structure.title must be the path to the title field');
	        }
	        if (!(struct.price && struct.price.trim())) {
	            throw new Error('structure.price must be the path to the price field');
	        }
	    };
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var common_1 = __webpack_require__(60);
	var common_2 = __webpack_require__(60);
	var oget = __webpack_require__(124);
	exports.STYLISH_CLASS = 'gb-stylish';
	var TAG_PREFIX_REGEX = /^[a-z]*?-/;
	var TAG_WORD_BREAK_REGEX = /-([a-z])/g;
	function setTagName(tag) {
	    var htmlTagName = tag.root.tagName.toLowerCase();
	    var tagName = htmlTagName;
	    if (htmlTagName.indexOf('-') === -1) {
	        tagName = tag.root.dataset['is'];
	    }
	    if (tagName) {
	        tag._tagName = tagName;
	    }
	}
	exports.setTagName = setTagName;
	function inheritAliases(tag) {
	    var aliases = {};
	    if (tag.parent && tag.parent._aliases) {
	        Object.assign(aliases, tag.parent._aliases);
	    }
	    if (tag.opts.alias) {
	        aliases[tag.opts.alias] = tag;
	    }
	    Object.assign(tag, addDollarSigns(aliases));
	    tag._aliases = aliases;
	}
	exports.inheritAliases = inheritAliases;
	function configure(tag) {
	    var meta = {};
	    if (tag[tag_1.META]) {
	        meta = tag[tag_1.META];
	    }
	    var config = buildConfiguration(tag, meta);
	    Object.assign(tag, config);
	    if (typeof tag.setDefaults === 'function') {
	        tag.setDefaults(config);
	    }
	    return config;
	}
	exports.configure = configure;
	function buildConfiguration(tag, meta) {
	    var defaultConfig = meta.defaults || {};
	    var types = meta.types || {};
	    var services = meta.services || [];
	    var serviceConfigs = common_2.collectServiceConfigs(tag, services);
	    var globalTagConfig = tag._tagName ? oget(tag.config, "tags." + camelizeTagName(tag._tagName), {}) : {};
	    var coercedOpts = common_2.coerceAttributes(tag.opts, types);
	    return Object.assign.apply(Object, [{}, defaultConfig].concat(serviceConfigs, [globalTagConfig, tag.opts.__proto__, coercedOpts]));
	}
	exports.buildConfiguration = buildConfiguration;
	function updateDependency(tag, dependency, options) {
	    if (options === void 0) { options = {}; }
	    var parentAlias = tag.parent ? tag.parent._aliases[dependency.alias] : undefined;
	    var coercedOpts = common_2.coerceAttributes(tag.opts, options.types || {});
	    var updated = Object.assign({}, options.defaults, parentAlias, coercedOpts);
	    var transformed = dependency.transform(updated);
	    tag.expose(dependency.realias, transformed);
	    if (dependency.alias !== dependency.realias) {
	        tag.expose(dependency.alias, transformed);
	    }
	}
	exports.updateDependency = updateDependency;
	function addMeta(tag, meta) {
	    var properties = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        properties[_i - 2] = arguments[_i];
	    }
	    if (!tag[tag_1.META]) {
	        tag[tag_1.META] = {};
	    }
	    properties.forEach(function (property) {
	        if (meta[property]) {
	            tag[tag_1.META][property] = meta[property];
	        }
	    });
	}
	exports.addMeta = addMeta;
	function setStylish(tag) {
	    var stylish = tag.config.stylish;
	    if ('stylish' in tag.opts) {
	        stylish = common_1.checkBooleanAttr('stylish', tag.opts, stylish);
	    }
	    else if (tag.parent) {
	        stylish = tag.parent[tag_1.STYLISH];
	    }
	    if (stylish) {
	        tag[tag_1.STYLISH] = !!stylish;
	        tag.root.classList.add(exports.STYLISH_CLASS);
	    }
	}
	exports.setStylish = setStylish;
	function addDollarSigns(obj) {
	    return Object.keys(obj)
	        .reduce(function (renamed, key) { return Object.assign(renamed, (_a = {}, _a["$" + key] = obj[key], _a)); var _a; }, {});
	}
	exports.addDollarSigns = addDollarSigns;
	function camelizeTagName(tagName) {
	    return tagName.replace(TAG_PREFIX_REGEX, '')
	        .replace(TAG_WORD_BREAK_REGEX, function (match) { return match[1].toUpperCase(); });
	}
	exports.camelizeTagName = camelizeTagName;
	function MixinFlux(flux, config, services) {
	    return Object.assign(new tag_1.FluxTag()['__proto__'], { flux: flux, config: config, services: services });
	}
	exports.MixinFlux = MixinFlux;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(206);
	var sayt_1 = __webpack_require__(208);
	exports.META = Symbol('meta');
	exports.STYLISH = Symbol('stylish');
	var sayt = new sayt_1.Sayt();
	var FluxTag = (function () {
	    function FluxTag() {
	    }
	    FluxTag.prototype.init = function () {
	        var _this = this;
	        this._state = {};
	        tag_1.setTagName(this);
	        tag_1.inheritAliases(this);
	        this.on('before-mount', function () { return tag_1.configure(_this); });
	        this.on('mount', function () { return tag_1.setStylish(_this); });
	    };
	    FluxTag.prototype.expose = function (aliases, obj) {
	        var _this = this;
	        if (obj === void 0) { obj = this; }
	        if (!Array.isArray(aliases)) {
	            aliases = [aliases];
	        }
	        aliases.forEach(function (alias) { return _this[("$" + alias)] = _this._aliases[alias] = obj; });
	    };
	    FluxTag.prototype.unexpose = function (alias) {
	        delete this._aliases[alias];
	    };
	    FluxTag.prototype.register = function (serviceName) {
	        var _this = this;
	        this.services[serviceName].register(this);
	        this.on('unmount', function () { return _this.services[serviceName].unregister(_this); });
	    };
	    // tslint:disable-next-line:max-line-length
	    FluxTag.prototype.transform = function (alias, realias, options, transform) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (transform === void 0) { transform = function (obj) { return obj; }; }
	        var dependency = { alias: alias, realias: realias, transform: transform };
	        this.on('before-mount', function () { return tag_1.updateDependency(_this, dependency, options); });
	        this.on('update', function () { return tag_1.updateDependency(_this, dependency, options); });
	    };
	    FluxTag.prototype.inherits = function (alias, options, transform) {
	        if (transform === void 0) { transform = function (obj) { return obj; }; }
	        this.transform(alias, alias, options, transform);
	    };
	    FluxTag.prototype._mixin = function () {
	        var mixins = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            mixins[_i - 0] = arguments[_i];
	        }
	        var meta;
	        this.mixin.apply(this, mixins.map(function (mixin) {
	            meta = meta || mixin[exports.META];
	            return new mixin().__proto__;
	        }));
	        if (meta) {
	            tag_1.addMeta(this, meta, 'defaults', 'types', 'services');
	        }
	    };
	    return FluxTag;
	}());
	exports.FluxTag = FluxTag;
	var SaytTag = (function () {
	    function SaytTag() {
	    }
	    SaytTag.prototype.init = function () {
	        this.sayt = sayt;
	    };
	    return SaytTag;
	}());
	exports.SaytTag = SaytTag;


/***/ },
/* 208 */
[352, 209],
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(210);
	__export(__webpack_require__(211));


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(137).polyfill();
	__webpack_require__(136).polyfill();


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(212);
	var filterObject = __webpack_require__(71);
	var SAYT_URL = '.groupbycloud.com/api/v1/sayt/search';
	var Sayt = (function () {
	    function Sayt(config) {
	        this.config = {
	            autocomplete: {
	                numSearchTerms: 5,
	                numNavigations: 5
	            },
	            productSearch: {
	                numProducts: 4
	            }
	        };
	        this.configure(config);
	    }
	    Sayt.prototype.configure = function (config) {
	        if (config === void 0) { config = {}; }
	        Object.assign(this.config, filterObject(config, '!{autocomplete,productSearch}'));
	        Object.assign(this.config.autocomplete, config.autocomplete || {});
	        Object.assign(this.config.productSearch, config.productSearch || {});
	    };
	    Sayt.prototype.autocomplete = function (query, config, cb) {
	        if (query === void 0) { query = ''; }
	        var finalConfig = Object.assign({ collection: this.config.collection }, this.config.autocomplete, config);
	        var response = utils_1.jsonp(this.url, {
	            query: query,
	            language: finalConfig.language,
	            collection: finalConfig.collection,
	            searchItems: finalConfig.numSearchTerms,
	            navigationItems: finalConfig.numNavigations,
	            alphabetize: finalConfig.sortAlphabetically,
	            fuzzy: finalConfig.fuzzyMatch,
	            productItems: 0
	        });
	        return this.callbackOrPromise(response, cb);
	    };
	    Sayt.prototype.productSearch = function (query, config, cb) {
	        if (query === void 0) { query = ''; }
	        var finalConfig = Object.assign({ collection: this.config.collection }, this.config.productSearch, config);
	        var response = utils_1.jsonp(this.url, {
	            query: query,
	            language: finalConfig.language,
	            collection: finalConfig.collection,
	            area: finalConfig.area,
	            refinements: finalConfig.refinements,
	            productItems: finalConfig.numProducts,
	            searchItems: 0,
	            navigationItems: 0
	        });
	        return this.callbackOrPromise(response, cb);
	    };
	    Sayt.prototype.callbackOrPromise = function (promise, cb) {
	        var response = promise;
	        if (typeof cb === 'function') {
	            response = promise.then(function (res) { return cb(undefined, res); })
	                .catch(function (err) { return cb(err); });
	        }
	        return response;
	    };
	    Object.defineProperty(Sayt.prototype, "url", {
	        get: function () {
	            return (this.config.https ? 'https' : 'http') + "://" + this.config.subdomain + SAYT_URL;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Sayt;
	}());
	exports.Sayt = Sayt;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var qs = __webpack_require__(141);
	var rawJsonp = __webpack_require__(213);
	function jsonp(url, body) {
	    return new Promise(function (resolve, reject) {
	        rawJsonp(url + "?" + qs.stringify(body), function (err, data) { return err ? reject(err) : resolve(data); });
	    });
	}
	exports.jsonp = jsonp;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var debug = __webpack_require__(214)('jsonp');
	
	/**
	 * Module exports.
	 */
	
	module.exports = jsonp;
	
	/**
	 * Callback index.
	 */
	
	var count = 0;
	
	/**
	 * Noop function.
	 */
	
	function noop(){}
	
	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - prefix {String} qs parameter (`__jp`)
	 *  - name {String} qs parameter (`prefix` + incr)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */
	
	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};
	
	  var prefix = opts.prefix || '__jp';
	
	  // use the callback name that was passed if one was provided.
	  // otherwise generate a unique name by incrementing our counter.
	  var id = opts.name || (prefix + (count++));
	
	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;
	
	
	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }
	
	  function cleanup(){
	    if (script.parentNode) script.parentNode.removeChild(script);
	    window[id] = noop;
	    if (timer) clearTimeout(timer);
	  }
	
	  function cancel(){
	    if (window[id]) {
	      cleanup();
	    }
	  }
	
	  window[id] = function(data){
	    debug('jsonp got', data);
	    cleanup();
	    if (fn) fn(null, data);
	  };
	
	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');
	
	  debug('jsonp req "%s"', url);
	
	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);
	
	  return cancel;
	}


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(215);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // NB: In an Electron preload script, document will be defined but not fully
	  // initialized. Since we know we're in Chrome, we'll just detect this case
	  // explicitly
	  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
	    return true;
	  }
	
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
	    // double check webkit in userAgent just in case we are in a worker
	    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  try {
	    return JSON.stringify(v);
	  } catch (err) {
	    return '[UnexpectedJSONParseError]: ' + err.message;
	  }
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs(args) {
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return;
	
	  var c = 'color: ' + this.color;
	  args.splice(1, 0, c, 'color: inherit')
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-zA-Z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  try {
	    return exports.storage.debug;
	  } catch(e) {}
	
	  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	  if (typeof process !== 'undefined' && 'env' in process) {
	    return process.env.DEBUG;
	  }
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = createDebug.debug = createDebug.default = createDebug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(216);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 * @param {String} namespace
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor(namespace) {
	  var hash = 0, i;
	
	  for (i in namespace) {
	    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
	    hash |= 0; // Convert to 32bit integer
	  }
	
	  return exports.colors[Math.abs(hash) % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function createDebug(namespace) {
	
	  function debug() {
	    // disabled?
	    if (!debug.enabled) return;
	
	    var self = debug;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // turn the `arguments` into a proper Array
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %O
	      args.unshift('%O');
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    // apply env-specific formatting (colors, etc.)
	    exports.formatArgs.call(self, args);
	
	    var logFn = debug.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	
	  debug.namespace = namespace;
	  debug.enabled = exports.enabled(namespace);
	  debug.useColors = exports.useColors();
	  debug.color = selectColor(namespace);
	
	  // env-specific initialization logic for debug instances
	  if ('function' === typeof exports.init) {
	    exports.init(debug);
	  }
	
	  return debug;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 216 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000
	var m = s * 60
	var h = m * 60
	var d = h * 24
	var y = d * 365.25
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {}
	  var type = typeof val
	  if (type === 'string' && val.length > 0) {
	    return parse(val)
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ?
				fmtLong(val) :
				fmtShort(val)
	  }
	  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
	}
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = String(str)
	  if (str.length > 10000) {
	    return
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
	  if (!match) {
	    return
	  }
	  var n = parseFloat(match[1])
	  var type = (match[2] || 'ms').toLowerCase()
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n
	    default:
	      return undefined
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd'
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h'
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm'
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's'
	  }
	  return ms + 'ms'
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms'
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) {
	    return
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's'
	}


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["riot"] = __webpack_require__(218);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* Riot v3.0.7, @license MIT */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.riot = factory());
	}(this, (function () { 'use strict';
	
	var __TAGS_CACHE = [];
	var __TAG_IMPL = {};
	var GLOBAL_MIXIN = '__global_mixin';
	var ATTRS_PREFIX = 'riot-';
	var REF_DIRECTIVES = ['data-ref', 'ref'];
	var IS_DIRECTIVE = 'data-is';
	var CONDITIONAL_DIRECTIVE = 'if';
	var LOOP_DIRECTIVE = 'each';
	var LOOP_NO_REORDER_DIRECTIVE = 'no-reorder';
	var SHOW_DIRECTIVE = 'show';
	var HIDE_DIRECTIVE = 'hide';
	var T_STRING = 'string';
	var T_OBJECT = 'object';
	var T_UNDEF  = 'undefined';
	var T_FUNCTION = 'function';
	var XLINK_NS = 'http://www.w3.org/1999/xlink';
	var XLINK_REGEX = /^xlink:(\w+)/;
	var WIN = typeof window === T_UNDEF ? undefined : window;
	var RE_SPECIAL_TAGS = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/;
	var RE_SPECIAL_TAGS_NO_OPTION = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;
	var RE_RESERVED_NAMES = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/;
	var RE_SVG_TAGS = /^(altGlyph|animate(?:Color)?|circle|clipPath|defs|ellipse|fe(?:Blend|ColorMatrix|ComponentTransfer|Composite|ConvolveMatrix|DiffuseLighting|DisplacementMap|Flood|GaussianBlur|Image|Merge|Morphology|Offset|SpecularLighting|Tile|Turbulence)|filter|font|foreignObject|g(?:lyph)?(?:Ref)?|image|line(?:arGradient)?|ma(?:rker|sk)|missing-glyph|path|pattern|poly(?:gon|line)|radialGradient|rect|stop|svg|switch|symbol|text(?:Path)?|tref|tspan|use)$/;
	var RE_HTML_ATTRS = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
	var CASE_SENSITIVE_ATTRIBUTES = { 'viewbox': 'viewBox' };
	var RE_BOOL_ATTRS = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/;
	var IE_VERSION = (WIN && WIN.document || {}).documentMode | 0;
	
	/**
	 * Check whether a DOM node must be considered a part of an svg document
	 * @param   { String } name -
	 * @returns { Boolean } -
	 */
	function isSVGTag(name) {
	  return RE_SVG_TAGS.test(name)
	}
	
	/**
	 * Check Check if the passed argument is undefined
	 * @param   { String } value -
	 * @returns { Boolean } -
	 */
	function isBoolAttr(value) {
	  return RE_BOOL_ATTRS.test(value)
	}
	
	/**
	 * Check if passed argument is a function
	 * @param   { * } value -
	 * @returns { Boolean } -
	 */
	function isFunction(value) {
	  return typeof value === T_FUNCTION
	}
	
	/**
	 * Check if passed argument is an object, exclude null
	 * NOTE: use isObject(x) && !isArray(x) to excludes arrays.
	 * @param   { * } value -
	 * @returns { Boolean } -
	 */
	function isObject(value) {
	  return value && typeof value === T_OBJECT // typeof null is 'object'
	}
	
	/**
	 * Check if passed argument is undefined
	 * @param   { * } value -
	 * @returns { Boolean } -
	 */
	function isUndefined(value) {
	  return typeof value === T_UNDEF
	}
	
	/**
	 * Check if passed argument is a string
	 * @param   { * } value -
	 * @returns { Boolean } -
	 */
	function isString(value) {
	  return typeof value === T_STRING
	}
	
	/**
	 * Check if passed argument is empty. Different from falsy, because we dont consider 0 or false to be blank
	 * @param { * } value -
	 * @returns { Boolean } -
	 */
	function isBlank(value) {
	  return isUndefined(value) || value === null || value === ''
	}
	
	/**
	 * Check if passed argument is a kind of array
	 * @param   { * } value -
	 * @returns { Boolean } -
	 */
	function isArray(value) {
	  return Array.isArray(value) || value instanceof Array
	}
	
	/**
	 * Check whether object's property could be overridden
	 * @param   { Object }  obj - source object
	 * @param   { String }  key - object property
	 * @returns { Boolean } -
	 */
	function isWritable(obj, key) {
	  var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	  return isUndefined(obj[key]) || descriptor && descriptor.writable
	}
	
	/**
	 * Check if passed argument is a reserved name
	 * @param   { String } value -
	 * @returns { Boolean } -
	 */
	function isReservedName(value) {
	  return RE_RESERVED_NAMES.test(value)
	}
	
	var check = Object.freeze({
		isSVGTag: isSVGTag,
		isBoolAttr: isBoolAttr,
		isFunction: isFunction,
		isObject: isObject,
		isUndefined: isUndefined,
		isString: isString,
		isBlank: isBlank,
		isArray: isArray,
		isWritable: isWritable,
		isReservedName: isReservedName
	});
	
	/**
	 * Shorter and fast way to select multiple nodes in the DOM
	 * @param   { String } selector - DOM selector
	 * @param   { Object } ctx - DOM node where the targets of our search will is located
	 * @returns { Object } dom nodes found
	 */
	function $$(selector, ctx) {
	  return (ctx || document).querySelectorAll(selector)
	}
	
	/**
	 * Shorter and fast way to select a single node in the DOM
	 * @param   { String } selector - unique dom selector
	 * @param   { Object } ctx - DOM node where the target of our search will is located
	 * @returns { Object } dom node found
	 */
	function $(selector, ctx) {
	  return (ctx || document).querySelector(selector)
	}
	
	/**
	 * Create a document fragment
	 * @returns { Object } document fragment
	 */
	function createFrag() {
	  return document.createDocumentFragment()
	}
	
	/**
	 * Create a document text node
	 * @returns { Object } create a text node to use as placeholder
	 */
	function createDOMPlaceholder() {
	  return document.createTextNode('')
	}
	
	/**
	 * Create a generic DOM node
	 * @param   { String } name - name of the DOM node we want to create
	 * @param   { Boolean } isSvg - should we use a SVG as parent node?
	 * @returns { Object } DOM node just created
	 */
	function mkEl(name, isSvg) {
	  return isSvg ?
	    document.createElementNS('http://www.w3.org/2000/svg', 'svg') :
	    document.createElement(name)
	}
	
	/**
	 * Get the outer html of any DOM node SVGs included
	 * @param   { Object } el - DOM node to parse
	 * @returns { String } el.outerHTML
	 */
	function getOuterHTML(el) {
	  if (el.outerHTML)
	    { return el.outerHTML }
	  // some browsers do not support outerHTML on the SVGs tags
	  else {
	    var container = mkEl('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}
	
	/**
	 * Set the inner html of any DOM node SVGs included
	 * @param { Object } container - DOM node where we'll inject new html
	 * @param { String } html - html to inject
	 */
	function setInnerHTML(container, html) {
	  if (!isUndefined(container.innerHTML))
	    { container.innerHTML = html; }
	    // some browsers do not support innerHTML on the SVGs tags
	  else {
	    var doc = new DOMParser().parseFromString(html, 'application/xml');
	    var node = container.ownerDocument.importNode(doc.documentElement, true);
	    container.appendChild(node);
	  }
	}
	
	/**
	 * Remove any DOM attribute from a node
	 * @param   { Object } dom - DOM node we want to update
	 * @param   { String } name - name of the property we want to remove
	 */
	function remAttr(dom, name) {
	  dom.removeAttribute(name);
	}
	
	/**
	 * Get the value of any DOM attribute on a node
	 * @param   { Object } dom - DOM node we want to parse
	 * @param   { String } name - name of the attribute we want to get
	 * @returns { String | undefined } name of the node attribute whether it exists
	 */
	function getAttr(dom, name) {
	  return dom.getAttribute(name)
	}
	
	/**
	 * Set any DOM attribute
	 * @param { Object } dom - DOM node we want to update
	 * @param { String } name - name of the property we want to set
	 * @param { String } val - value of the property we want to set
	 */
	function setAttr(dom, name, val) {
	  var xlink = XLINK_REGEX.exec(name);
	  if (xlink && xlink[1])
	    { dom.setAttributeNS(XLINK_NS, xlink[1], val); }
	  else
	    { dom.setAttribute(name, val); }
	}
	
	/**
	 * Insert safely a tag to fix #1962 #1649
	 * @param   { HTMLElement } root - children container
	 * @param   { HTMLElement } curr - node to insert
	 * @param   { HTMLElement } next - node that should preceed the current node inserted
	 */
	function safeInsert(root, curr, next) {
	  root.insertBefore(curr, next.parentNode && next);
	}
	
	/**
	 * Minimize risk: only zero or one _space_ between attr & value
	 * @param   { String }   html - html string we want to parse
	 * @param   { Function } fn - callback function to apply on any attribute found
	 */
	function walkAttrs(html, fn) {
	  if (!html)
	    { return }
	  var m;
	  while (m = RE_HTML_ATTRS.exec(html))
	    { fn(m[1].toLowerCase(), m[2] || m[3] || m[4]); }
	}
	
	/**
	 * Walk down recursively all the children tags starting dom node
	 * @param   { Object }   dom - starting node where we will start the recursion
	 * @param   { Function } fn - callback to transform the child node just found
	 * @param   { Object }   context - fn can optionally return an object, which is passed to children
	 */
	function walkNodes(dom, fn, context) {
	  if (dom) {
	    var res = fn(dom, context);
	    var next;
	    // stop the recursion
	    if (res === false) { return }
	
	    dom = dom.firstChild;
	
	    while (dom) {
	      next = dom.nextSibling;
	      walkNodes(dom, fn, res);
	      dom = next;
	    }
	  }
	}
	
	var dom = Object.freeze({
		$$: $$,
		$: $,
		createFrag: createFrag,
		createDOMPlaceholder: createDOMPlaceholder,
		mkEl: mkEl,
		getOuterHTML: getOuterHTML,
		setInnerHTML: setInnerHTML,
		remAttr: remAttr,
		getAttr: getAttr,
		setAttr: setAttr,
		safeInsert: safeInsert,
		walkAttrs: walkAttrs,
		walkNodes: walkNodes
	});
	
	var styleNode;
	var cssTextProp;
	var byName = {};
	var remainder = [];
	var needsInject = false;
	
	// skip the following code on the server
	if (WIN) {
	  styleNode = (function () {
	    // create a new style element with the correct type
	    var newNode = mkEl('style');
	    setAttr(newNode, 'type', 'text/css');
	
	    // replace any user node or insert the new one into the head
	    var userNode = $('style[type=riot]');
	    if (userNode) {
	      if (userNode.id) { newNode.id = userNode.id; }
	      userNode.parentNode.replaceChild(newNode, userNode);
	    }
	    else { document.getElementsByTagName('head')[0].appendChild(newNode); }
	
	    return newNode
	  })();
	  cssTextProp = styleNode.styleSheet;
	}
	
	/**
	 * Object that will be used to inject and manage the css of every tag instance
	 */
	var styleManager = {
	  styleNode: styleNode,
	  /**
	   * Save a tag style to be later injected into DOM
	   * @param { String } css - css string
	   * @param { String } name - if it's passed we will map the css to a tagname
	   */
	  add: function add(css, name) {
	    if (name) { byName[name] = css; }
	    else { remainder.push(css); }
	    needsInject = true;
	  },
	  /**
	   * Inject all previously saved tag styles into DOM
	   * innerHTML seems slow: http://jsperf.com/riot-insert-style
	   */
	  inject: function inject() {
	    if (!WIN || !needsInject) { return }
	    needsInject = false;
	    var style = Object.keys(byName)
	      .map(function(k) { return byName[k] })
	      .concat(remainder).join('\n');
	    if (cssTextProp) { cssTextProp.cssText = style; }
	    else { styleNode.innerHTML = style; }
	  }
	};
	
	/**
	 * The riot template engine
	 * @version v3.0.1
	 */
	/**
	 * riot.util.brackets
	 *
	 * - `brackets    ` - Returns a string or regex based on its parameter
	 * - `brackets.set` - Change the current riot brackets
	 *
	 * @module
	 */
	
	/* global riot */
	
	var brackets = (function (UNDEF) {
	
	  var
	    REGLOB = 'g',
	
	    R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
	
	    R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
	
	    S_QBLOCKS = R_STRINGS.source + '|' +
	      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
	      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
	
	    UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),
	
	    NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,
	
	    FINDBRACES = {
	      '(': RegExp('([()])|'   + S_QBLOCKS, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
	      '{': RegExp('([{}])|'   + S_QBLOCKS, REGLOB)
	    },
	
	    DEFAULT = '{ }';
	
	  var _pairs = [
	    '{', '}',
	    '{', '}',
	    /{[^}]*}/,
	    /\\([{}])/g,
	    /\\({)|{/g,
	    RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB),
	    DEFAULT,
	    /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
	    /(^|[^\\]){=[\S\s]*?}/
	  ];
	
	  var
	    cachedBrackets = UNDEF,
	    _regex,
	    _cache = [],
	    _settings;
	
	  function _loopback (re) { return re }
	
	  function _rewrite (re, bp) {
	    if (!bp) { bp = _cache; }
	    return new RegExp(
	      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
	    )
	  }
	
	  function _create (pair) {
	    if (pair === DEFAULT) { return _pairs }
	
	    var arr = pair.split(' ');
	
	    if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
	      throw new Error('Unsupported brackets "' + pair + '"')
	    }
	    arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));
	
	    arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
	    arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
	    arr[6] = _rewrite(_pairs[6], arr);
	    arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
	    arr[8] = pair;
	    return arr
	  }
	
	  function _brackets (reOrIdx) {
	    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
	  }
	
	  _brackets.split = function split (str, tmpl, _bp) {
	    // istanbul ignore next: _bp is for the compiler
	    if (!_bp) { _bp = _cache; }
	
	    var
	      parts = [],
	      match,
	      isexpr,
	      start,
	      pos,
	      re = _bp[6];
	
	    isexpr = start = re.lastIndex = 0;
	
	    while ((match = re.exec(str))) {
	
	      pos = match.index;
	
	      if (isexpr) {
	
	        if (match[2]) {
	          re.lastIndex = skipBraces(str, match[2], re.lastIndex);
	          continue
	        }
	        if (!match[3]) {
	          continue
	        }
	      }
	
	      if (!match[1]) {
	        unescapeStr(str.slice(start, pos));
	        start = re.lastIndex;
	        re = _bp[6 + (isexpr ^= 1)];
	        re.lastIndex = start;
	      }
	    }
	
	    if (str && start < str.length) {
	      unescapeStr(str.slice(start));
	    }
	
	    return parts
	
	    function unescapeStr (s) {
	      if (tmpl || isexpr) {
	        parts.push(s && s.replace(_bp[5], '$1'));
	      } else {
	        parts.push(s);
	      }
	    }
	
	    function skipBraces (s, ch, ix) {
	      var
	        match,
	        recch = FINDBRACES[ch];
	
	      recch.lastIndex = ix;
	      ix = 1;
	      while ((match = recch.exec(s))) {
	        if (match[1] &&
	          !(match[1] === ch ? ++ix : --ix)) { break }
	      }
	      return ix ? s.length : recch.lastIndex
	    }
	  };
	
	  _brackets.hasExpr = function hasExpr (str) {
	    return _cache[4].test(str)
	  };
	
	  _brackets.loopKeys = function loopKeys (expr) {
	    var m = expr.match(_cache[9]);
	
	    return m
	      ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
	      : { val: expr.trim() }
	  };
	
	  _brackets.array = function array (pair) {
	    return pair ? _create(pair) : _cache
	  };
	
	  function _reset (pair) {
	    if ((pair || (pair = DEFAULT)) !== _cache[8]) {
	      _cache = _create(pair);
	      _regex = pair === DEFAULT ? _loopback : _rewrite;
	      _cache[9] = _regex(_pairs[9]);
	    }
	    cachedBrackets = pair;
	  }
	
	  function _setSettings (o) {
	    var b;
	
	    o = o || {};
	    b = o.brackets;
	    Object.defineProperty(o, 'brackets', {
	      set: _reset,
	      get: function () { return cachedBrackets },
	      enumerable: true
	    });
	    _settings = o;
	    _reset(b);
	  }
	
	  Object.defineProperty(_brackets, 'settings', {
	    set: _setSettings,
	    get: function () { return _settings }
	  });
	
	  /* istanbul ignore next: in the browser riot is always in the scope */
	  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
	  _brackets.set = _reset;
	
	  _brackets.R_STRINGS = R_STRINGS;
	  _brackets.R_MLCOMMS = R_MLCOMMS;
	  _brackets.S_QBLOCKS = S_QBLOCKS;
	
	  return _brackets
	
	})();
	
	/**
	 * @module tmpl
	 *
	 * tmpl          - Root function, returns the template value, render with data
	 * tmpl.hasExpr  - Test the existence of a expression inside a string
	 * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
	 */
	
	var tmpl = (function () {
	
	  var _cache = {};
	
	  function _tmpl (str, data) {
	    if (!str) { return str }
	
	    return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr)
	  }
	
	  _tmpl.hasExpr = brackets.hasExpr;
	
	  _tmpl.loopKeys = brackets.loopKeys;
	
	  // istanbul ignore next
	  _tmpl.clearCache = function () { _cache = {}; };
	
	  _tmpl.errorHandler = null;
	
	  function _logErr (err, ctx) {
	
	    err.riotData = {
	      tagName: ctx && ctx.root && ctx.root.tagName,
	      _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
	    };
	
	    if (_tmpl.errorHandler) { _tmpl.errorHandler(err); }
	    else if (
	      typeof console !== 'undefined' &&
	      typeof console.error === 'function'
	    ) {
	      if (err.riotData.tagName) {
	        console.error('Riot template error thrown in the <%s> tag', err.riotData.tagName.toLowerCase());
	      }
	      console.error(err);
	    }
	  }
	
	  function _create (str) {
	    var expr = _getTmpl(str);
	
	    if (expr.slice(0, 11) !== 'try{return ') { expr = 'return ' + expr; }
	
	    return new Function('E', expr + ';')    // eslint-disable-line no-new-func
	  }
	
	  var
	    CH_IDEXPR = String.fromCharCode(0x2057),
	    RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
	    RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	    RE_DQUOTE = /\u2057/g,
	    RE_QBMARK = /\u2057(\d+)~/g;
	
	  function _getTmpl (str) {
	    var
	      qstr = [],
	      expr,
	      parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
	
	    if (parts.length > 2 || parts[0]) {
	      var i, j, list = [];
	
	      for (i = j = 0; i < parts.length; ++i) {
	
	        expr = parts[i];
	
	        if (expr && (expr = i & 1
	
	            ? _parseExpr(expr, 1, qstr)
	
	            : '"' + expr
	                .replace(/\\/g, '\\\\')
	                .replace(/\r\n?|\n/g, '\\n')
	                .replace(/"/g, '\\"') +
	              '"'
	
	          )) { list[j++] = expr; }
	
	      }
	
	      expr = j < 2 ? list[0]
	           : '[' + list.join(',') + '].join("")';
	
	    } else {
	
	      expr = _parseExpr(parts[1], 0, qstr);
	    }
	
	    if (qstr[0]) {
	      expr = expr.replace(RE_QBMARK, function (_, pos) {
	        return qstr[pos]
	          .replace(/\r/g, '\\r')
	          .replace(/\n/g, '\\n')
	      });
	    }
	    return expr
	  }
	
	  var
	    RE_BREND = {
	      '(': /[()]/g,
	      '[': /[[\]]/g,
	      '{': /[{}]/g
	    };
	
	  function _parseExpr (expr, asText, qstr) {
	
	    expr = expr
	          .replace(RE_QBLOCK, function (s, div) {
	            return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s
	          })
	          .replace(/\s+/g, ' ').trim()
	          .replace(/\ ?([[\({},?\.:])\ ?/g, '$1');
	
	    if (expr) {
	      var
	        list = [],
	        cnt = 0,
	        match;
	
	      while (expr &&
	            (match = expr.match(RE_CSNAME)) &&
	            !match.index
	        ) {
	        var
	          key,
	          jsb,
	          re = /,|([[{(])|$/g;
	
	        expr = RegExp.rightContext;
	        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];
	
	        while (jsb = (match = re.exec(expr))[1]) { skipBraces(jsb, re); }
	
	        jsb  = expr.slice(0, match.index);
	        expr = RegExp.rightContext;
	
	        list[cnt++] = _wrapExpr(jsb, 1, key);
	      }
	
	      expr = !cnt ? _wrapExpr(expr, asText)
	           : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
	    }
	    return expr
	
	    function skipBraces (ch, re) {
	      var
	        mm,
	        lv = 1,
	        ir = RE_BREND[ch];
	
	      ir.lastIndex = re.lastIndex;
	      while (mm = ir.exec(expr)) {
	        if (mm[0] === ch) { ++lv; }
	        else if (!--lv) { break }
	      }
	      re.lastIndex = lv ? expr.length : ir.lastIndex;
	    }
	  }
	
	  // istanbul ignore next: not both
	  var // eslint-disable-next-line max-len
	    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
	    JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
	    JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;
	
	  function _wrapExpr (expr, asText, key) {
	    var tb;
	
	    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	      if (mvar) {
	        pos = tb ? 0 : pos + match.length;
	
	        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	          match = p + '("' + mvar + JS_CONTEXT + mvar;
	          if (pos) { tb = (s = s[pos]) === '.' || s === '(' || s === '['; }
	        } else if (pos) {
	          tb = !JS_NOPROPS.test(s.slice(pos));
	        }
	      }
	      return match
	    });
	
	    if (tb) {
	      expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
	    }
	
	    if (key) {
	
	      expr = (tb
	          ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')'
	        ) + '?"' + key + '":""';
	
	    } else if (asText) {
	
	      expr = 'function(v){' + (tb
	          ? expr.replace('return ', 'v=') : 'v=(' + expr + ')'
	        ) + ';return v||v===0?v:""}.call(this)';
	    }
	
	    return expr
	  }
	
	  _tmpl.version = brackets.version = 'v3.0.1';
	
	  return _tmpl
	
	})();
	
	var observable$1 = function(el) {
	
	  /**
	   * Extend the original object or create a new empty one
	   * @type { Object }
	   */
	
	  el = el || {};
	
	  /**
	   * Private variables
	   */
	  var callbacks = {},
	    slice = Array.prototype.slice;
	
	  /**
	   * Public Api
	   */
	
	  // extend the el object adding the observable methods
	  Object.defineProperties(el, {
	    /**
	     * Listen to the given `event` ands
	     * execute the `callback` each time an event is triggered.
	     * @param  { String } event - event id
	     * @param  { Function } fn - callback function
	     * @returns { Object } el
	     */
	    on: {
	      value: function(event, fn) {
	        if (typeof fn == 'function')
	          { (callbacks[event] = callbacks[event] || []).push(fn); }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },
	
	    /**
	     * Removes the given `event` listeners
	     * @param   { String } event - event id
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */
	    off: {
	      value: function(event, fn) {
	        if (event == '*' && !fn) { callbacks = {}; }
	        else {
	          if (fn) {
	            var arr = callbacks[event];
	            for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	              if (cb == fn) { arr.splice(i--, 1); }
	            }
	          } else { delete callbacks[event]; }
	        }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },
	
	    /**
	     * Listen to the given `event` and
	     * execute the `callback` at most once
	     * @param   { String } event - event id
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */
	    one: {
	      value: function(event, fn) {
	        function on() {
	          el.off(event, on);
	          fn.apply(el, arguments);
	        }
	        return el.on(event, on)
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },
	
	    /**
	     * Execute all callback functions that listen to
	     * the given `event`
	     * @param   { String } event - event id
	     * @returns { Object } el
	     */
	    trigger: {
	      value: function(event) {
	        var arguments$1 = arguments;
	
	
	        // getting the arguments
	        var arglen = arguments.length - 1,
	          args = new Array(arglen),
	          fns,
	          fn,
	          i;
	
	        for (i = 0; i < arglen; i++) {
	          args[i] = arguments$1[i + 1]; // skip first argument
	        }
	
	        fns = slice.call(callbacks[event] || [], 0);
	
	        for (i = 0; fn = fns[i]; ++i) {
	          fn.apply(el, args);
	        }
	
	        if (callbacks['*'] && event != '*')
	          { el.trigger.apply(el, ['*', event].concat(args)); }
	
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    }
	  });
	
	  return el
	
	};
	
	/**
	 * Specialized function for looping an array-like collection with `each={}`
	 * @param   { Array } list - collection of items
	 * @param   {Function} fn - callback function
	 * @returns { Array } the array looped
	 */
	function each(list, fn) {
	  var len = list ? list.length : 0;
	
	  for (var i = 0, el; i < len; ++i) {
	    el = list[i];
	    // return false -> current item was removed by fn during the loop
	    if (fn(el, i) === false)
	      { i--; }
	  }
	  return list
	}
	
	/**
	 * Check whether an array contains an item
	 * @param   { Array } array - target array
	 * @param   { * } item - item to test
	 * @returns { Boolean } -
	 */
	function contains(array, item) {
	  return ~array.indexOf(item)
	}
	
	/**
	 * Convert a string containing dashes to camel case
	 * @param   { String } str - input string
	 * @returns { String } my-string -> myString
	 */
	function toCamel(str) {
	  return str.replace(/-(\w)/g, function (_, c) { return c.toUpperCase(); })
	}
	
	/**
	 * Faster String startsWith alternative
	 * @param   { String } str - source string
	 * @param   { String } value - test string
	 * @returns { Boolean } -
	 */
	function startsWith(str, value) {
	  return str.slice(0, value.length) === value
	}
	
	/**
	 * Helper function to set an immutable property
	 * @param   { Object } el - object where the new property will be set
	 * @param   { String } key - object key where the new property will be stored
	 * @param   { * } value - value of the new property
	 * @param   { Object } options - set the propery overriding the default options
	 * @returns { Object } - the initial object
	 */
	function defineProperty(el, key, value, options) {
	  Object.defineProperty(el, key, extend({
	    value: value,
	    enumerable: false,
	    writable: false,
	    configurable: true
	  }, options));
	  return el
	}
	
	/**
	 * Extend any object with other properties
	 * @param   { Object } src - source object
	 * @returns { Object } the resulting extended object
	 *
	 * var obj = { foo: 'baz' }
	 * extend(obj, {bar: 'bar', foo: 'bar'})
	 * console.log(obj) => {bar: 'bar', foo: 'bar'}
	 *
	 */
	function extend(src) {
	  var obj, args = arguments;
	  for (var i = 1; i < args.length; ++i) {
	    if (obj = args[i]) {
	      for (var key in obj) {
	        // check if this property of the source object could be overridden
	        if (isWritable(src, key))
	          { src[key] = obj[key]; }
	      }
	    }
	  }
	  return src
	}
	
	var misc = Object.freeze({
		each: each,
		contains: contains,
		toCamel: toCamel,
		startsWith: startsWith,
		defineProperty: defineProperty,
		extend: extend
	});
	
	var EVENTS_PREFIX_REGEX = /^on/;
	
	/**
	 * Trigger DOM events
	 * @param   { HTMLElement } dom - dom element target of the event
	 * @param   { Function } handler - user function
	 * @param   { Object } e - event object
	 */
	function handleEvent(dom, handler, e) {
	  var ptag = this._parent,
	    item = this._item;
	
	  if (!item)
	    { while (ptag && !item) {
	      item = ptag._item;
	      ptag = ptag._parent;
	    } }
	
	  // override the event properties
	  if (isWritable(e, 'currentTarget')) { e.currentTarget = dom; }
	  if (isWritable(e, 'target')) { e.target = e.srcElement; }
	  if (isWritable(e, 'which')) { e.which = e.charCode || e.keyCode; }
	
	  e.item = item;
	
	  handler.call(this, e);
	
	  if (!e.preventUpdate) {
	    var p = getImmediateCustomParentTag(this);
	    // fixes #2083
	    if (p.isMounted) { p.update(); }
	  }
	}
	
	/**
	 * Attach an event to a DOM node
	 * @param { String } name - event name
	 * @param { Function } handler - event callback
	 * @param { Object } dom - dom node
	 * @param { Tag } tag - tag instance
	 */
	function setEventHandler(name, handler, dom, tag) {
	  var eventName,
	    cb = handleEvent.bind(tag, dom, handler);
	
	  if (!dom.addEventListener) {
	    dom[name] = cb;
	    return
	  }
	
	  // avoid to bind twice the same event
	  dom[name] = null;
	
	  // normalize event name
	  eventName = name.replace(EVENTS_PREFIX_REGEX, '');
	
	  // cache the callback directly on the DOM node
	  if (!dom._riotEvents) { dom._riotEvents = {}; }
	
	  if (dom._riotEvents[name])
	    { dom.removeEventListener(eventName, dom._riotEvents[name]); }
	
	  dom._riotEvents[name] = cb;
	  dom.addEventListener(eventName, cb, false);
	}
	
	/**
	 * Update dynamically created data-is tags with changing expressions
	 * @param { Object } expr - expression tag and expression info
	 * @param { Tag } parent - parent for tag creation
	 */
	function updateDataIs(expr, parent) {
	  var tagName = tmpl(expr.value, parent),
	    conf;
	
	  if (expr.tag && expr.tagName === tagName) {
	    expr.tag.update();
	    return
	  }
	
	  // sync _parent to accommodate changing tagnames
	  if (expr.tag) {
	    each(expr.attrs, function (a) { return setAttr(expr.tag.root, a.name, a.value); });
	    expr.tag.unmount(true);
	  }
	
	  expr.impl = __TAG_IMPL[tagName];
	  conf = {root: expr.dom, parent: parent, hasImpl: true, tagName: tagName};
	  expr.tag = initChildTag(expr.impl, conf, expr.dom.innerHTML, parent);
	  expr.tagName = tagName;
	  expr.tag.mount();
	
	  // parent is the placeholder tag, not the dynamic tag so clean up
	  parent.on('unmount', function () {
	    var delName = expr.tag.opts.dataIs,
	      tags = expr.tag.parent.tags,
	      _tags = expr.tag._parent.tags;
	    arrayishRemove(tags, delName, expr.tag);
	    arrayishRemove(_tags, delName, expr.tag);
	    expr.tag.unmount();
	  });
	}
	
	/**
	 * Update on single tag expression
	 * @this Tag
	 * @param { Object } expr - expression logic
	 * @returns { undefined }
	 */
	function updateExpression(expr) {
	  var dom = expr.dom,
	    attrName = expr.attr,
	    isToggle = contains([SHOW_DIRECTIVE, HIDE_DIRECTIVE], attrName),
	    value = tmpl(expr.expr, this),
	    isValueAttr = attrName === 'riot-value',
	    isVirtual = expr.root && expr.root.tagName === 'VIRTUAL',
	    parent = dom && (expr.parent || dom.parentNode),
	    old;
	
	  if (expr.bool)
	    { value = value ? attrName : false; }
	  else if (isUndefined(value) || value === null)
	    { value = ''; }
	
	  if (expr._riot_id) { // if it's a tag
	    if (expr.isMounted) {
	      expr.update();
	
	    // if it hasn't been mounted yet, do that now.
	    } else {
	      expr.mount();
	
	      if (isVirtual) {
	        var frag = document.createDocumentFragment();
	        makeVirtual.call(expr, frag);
	        expr.root.parentElement.replaceChild(frag, expr.root);
	      }
	    }
	    return
	  }
	
	  old = expr.value;
	  expr.value = value;
	
	  if (expr.update) {
	    expr.update();
	    return
	  }
	
	  if (expr.isRtag && value) { return updateDataIs(expr, this) }
	  if (old === value) { return }
	  // no change, so nothing more to do
	  if (isValueAttr && dom.value === value) { return }
	
	  // textarea and text nodes have no attribute name
	  if (!attrName) {
	    // about #815 w/o replace: the browser converts the value to a string,
	    // the comparison by "==" does too, but not in the server
	    value += '';
	    // test for parent avoids error with invalid assignment to nodeValue
	    if (parent) {
	      // cache the parent node because somehow it will become null on IE
	      // on the next iteration
	      expr.parent = parent;
	      if (parent.tagName === 'TEXTAREA') {
	        parent.value = value;                    // #1113
	        if (!IE_VERSION) { dom.nodeValue = value; }  // #1625 IE throws here, nodeValue
	      }                                         // will be available on 'updated'
	      else { dom.nodeValue = value; }
	    }
	    return
	  }
	
	  // remove original attribute
	  if (!expr.isAttrRemoved || !value) {
	    remAttr(dom, attrName);
	    expr.isAttrRemoved = true;
	  }
	
	  // event handler
	  if (isFunction(value)) {
	    setEventHandler(attrName, value, dom, this);
	  // show / hide
	  } else if (isToggle) {
	    if (attrName === HIDE_DIRECTIVE) { value = !value; }
	    dom.style.display = value ? '' : 'none';
	  // field value
	  } else if (isValueAttr) {
	    dom.value = value;
	  // <img src="{ expr }">
	  } else if (startsWith(attrName, ATTRS_PREFIX) && attrName !== IS_DIRECTIVE) {
	    attrName = attrName.slice(ATTRS_PREFIX.length);
	    if (CASE_SENSITIVE_ATTRIBUTES[attrName])
	      { attrName = CASE_SENSITIVE_ATTRIBUTES[attrName]; }
	    if (value != null)
	      { setAttr(dom, attrName, value); }
	  } else {
	    // <select> <option selected={true}> </select>
	    if (attrName === 'selected' && parent && /^(SELECT|OPTGROUP)$/.test(parent.tagName) && value) {
	      parent.value = dom.value;
	    } if (expr.bool) {
	      dom[attrName] = value;
	      if (!value) { return }
	    } if (value === 0 || value && typeof value !== T_OBJECT) {
	      setAttr(dom, attrName, value);
	    }
	  }
	}
	
	/**
	 * Update all the expressions in a Tag instance
	 * @this Tag
	 * @param { Array } expressions - expression that must be re evaluated
	 */
	function updateAllExpressions(expressions) {
	  each(expressions, updateExpression.bind(this));
	}
	
	var IfExpr = {
	  init: function init(dom, tag, expr) {
	    remAttr(dom, CONDITIONAL_DIRECTIVE);
	    this.tag = tag;
	    this.expr = expr;
	    this.stub = document.createTextNode('');
	    this.pristine = dom;
	
	    var p = dom.parentNode;
	    p.insertBefore(this.stub, dom);
	    p.removeChild(dom);
	
	    return this
	  },
	  update: function update() {
	    var newValue = tmpl(this.expr, this.tag);
	
	    if (newValue && !this.current) { // insert
	      this.current = this.pristine.cloneNode(true);
	      this.stub.parentNode.insertBefore(this.current, this.stub);
	
	      this.expressions = [];
	      parseExpressions.apply(this.tag, [this.current, this.expressions, true]);
	    } else if (!newValue && this.current) { // remove
	      unmountAll(this.expressions);
	      if (this.current._tag) {
	        this.current._tag.unmount();
	      } else if (this.current.parentNode)
	        { this.current.parentNode.removeChild(this.current); }
	      this.current = null;
	      this.expressions = [];
	    }
	
	    if (newValue) { updateAllExpressions.call(this.tag, this.expressions); }
	  },
	  unmount: function unmount() {
	    unmountAll(this.expressions || []);
	    delete this.pristine;
	    delete this.parentNode;
	    delete this.stub;
	  }
	};
	
	var RefExpr = {
	  init: function init(dom, parent, attrName, attrValue) {
	    this.dom = dom;
	    this.attr = attrName;
	    this.rawValue = attrValue;
	    this.parent = parent;
	    this.hasExp = tmpl.hasExpr(attrValue);
	    this.firstRun = true;
	
	    return this
	  },
	  update: function update() {
	    var value = this.rawValue;
	    if (this.hasExp)
	      { value = tmpl(this.rawValue, this.parent); }
	
	    // if nothing changed, we're done
	    if (!this.firstRun && value === this.value) { return }
	
	    var customParent = this.parent && getImmediateCustomParentTag(this.parent);
	
	    // if the referenced element is a custom tag, then we set the tag itself, rather than DOM
	    var tagOrDom = this.tag || this.dom;
	
	    // the name changed, so we need to remove it from the old key (if present)
	    if (!isBlank(this.value) && customParent)
	      { arrayishRemove(customParent.refs, this.value, tagOrDom); }
	
	    if (isBlank(value)) {
	      // if the value is blank, we remove it
	      remAttr(this.dom, this.attr);
	    } else {
	      // add it to the refs of parent tag (this behavior was changed >=3.0)
	      if (customParent) { arrayishAdd(customParent.refs, value, tagOrDom); }
	      // set the actual DOM attr
	      setAttr(this.dom, this.attr, value);
	    }
	    this.value = value;
	    this.firstRun = false;
	  },
	  unmount: function unmount() {
	    var tagOrDom = this.tag || this.dom;
	    var customParent = this.parent && getImmediateCustomParentTag(this.parent);
	    if (!isBlank(this.value) && customParent)
	      { arrayishRemove(customParent.refs, this.value, tagOrDom); }
	    delete this.dom;
	    delete this.parent;
	  }
	};
	
	/**
	 * Convert the item looped into an object used to extend the child tag properties
	 * @param   { Object } expr - object containing the keys used to extend the children tags
	 * @param   { * } key - value to assign to the new object returned
	 * @param   { * } val - value containing the position of the item in the array
	 * @param   { Object } base - prototype object for the new item
	 * @returns { Object } - new object containing the values of the original item
	 *
	 * The variables 'key' and 'val' are arbitrary.
	 * They depend on the collection type looped (Array, Object)
	 * and on the expression used on the each tag
	 *
	 */
	function mkitem(expr, key, val, base) {
	  var item = base ? Object.create(base) : {};
	  item[expr.key] = key;
	  if (expr.pos) { item[expr.pos] = val; }
	  return item
	}
	
	/**
	 * Unmount the redundant tags
	 * @param   { Array } items - array containing the current items to loop
	 * @param   { Array } tags - array containing all the children tags
	 * @param   { String } tagName - key used to identify the type of tag
	 */
	function unmountRedundant(items, tags, tagName) {
	  var i = tags.length,
	    j = items.length,
	    t;
	
	  while (i > j) {
	    t = tags[--i];
	    tags.splice(i, 1);
	    t.unmount();
	    arrayishRemove(t.parent, tagName, t, true);
	  }
	}
	
	/**
	 * Move the nested custom tags in non custom loop tags
	 * @this Tag
	 * @param   { Number } i - current position of the loop tag
	 */
	function moveNestedTags(i) {
	  var this$1 = this;
	
	  each(Object.keys(this.tags), function (tagName) {
	    var tag = this$1.tags[tagName];
	    if (isArray(tag))
	      { each(tag, function (t) {
	        moveChildTag.apply(t, [tagName, i]);
	      }); }
	    else
	      { moveChildTag.apply(tag, [tagName, i]); }
	  });
	}
	
	/**
	 * Move a child tag
	 * @this Tag
	 * @param   { HTMLElement } root - dom node containing all the loop children
	 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to move
	 * @param   { Boolean } isVirtual - is it a virtual tag?
	 */
	function move(root, nextTag, isVirtual) {
	  if (isVirtual)
	    { moveVirtual.apply(this, [root, nextTag]); }
	  else
	    { safeInsert(root, this.root, nextTag.root); }
	}
	
	/**
	 * Insert and mount a child tag
	 * @this Tag
	 * @param   { HTMLElement } root - dom node containing all the loop children
	 * @param   { Tag } nextTag - instance of the next tag preceding the one we want to insert
	 * @param   { Boolean } isVirtual - is it a virtual tag?
	 */
	function insert(root, nextTag, isVirtual) {
	  if (isVirtual)
	    { makeVirtual.apply(this, [root, nextTag]); }
	  else
	    { safeInsert(root, this.root, nextTag.root); }
	}
	
	/**
	 * Append a new tag into the DOM
	 * @this Tag
	 * @param   { HTMLElement } root - dom node containing all the loop children
	 * @param   { Boolean } isVirtual - is it a virtual tag?
	 */
	function append(root, isVirtual) {
	  if (isVirtual)
	    { makeVirtual.call(this, root); }
	  else
	    { root.appendChild(this.root); }
	}
	
	/**
	 * Manage tags having the 'each'
	 * @param   { HTMLElement } dom - DOM node we need to loop
	 * @param   { Tag } parent - parent tag instance where the dom node is contained
	 * @param   { String } expr - string contained in the 'each' attribute
	 * @returns { Object } expression object for this each loop
	 */
	function _each(dom, parent, expr) {
	
	  // remove the each property from the original tag
	  remAttr(dom, LOOP_DIRECTIVE);
	
	  var mustReorder = typeof getAttr(dom, LOOP_NO_REORDER_DIRECTIVE) !== T_STRING || remAttr(dom, LOOP_NO_REORDER_DIRECTIVE),
	    tagName = getTagName(dom),
	    impl = __TAG_IMPL[tagName] || { tmpl: getOuterHTML(dom) },
	    useRoot = RE_SPECIAL_TAGS.test(tagName),
	    parentNode = dom.parentNode,
	    ref = createDOMPlaceholder(),
	    child = getTag(dom),
	    ifExpr = getAttr(dom, CONDITIONAL_DIRECTIVE),
	    tags = [],
	    oldItems = [],
	    hasKeys,
	    isLoop = true,
	    isAnonymous = !__TAG_IMPL[tagName],
	    isVirtual = dom.tagName === 'VIRTUAL';
	
	  // parse the each expression
	  expr = tmpl.loopKeys(expr);
	  expr.isLoop = true;
	
	  if (ifExpr) { remAttr(dom, CONDITIONAL_DIRECTIVE); }
	
	  // insert a marked where the loop tags will be injected
	  parentNode.insertBefore(ref, dom);
	  parentNode.removeChild(dom);
	
	  expr.update = function updateEach() {
	
	    // get the new items collection
	    var items = tmpl(expr.val, parent),
	      frag = createFrag(),
	      isObject$$1 = !isArray(items),
	      root = ref.parentNode;
	
	    // object loop. any changes cause full redraw
	    if (isObject$$1) {
	      hasKeys = items || false;
	      items = hasKeys ?
	        Object.keys(items).map(function (key) {
	          return mkitem(expr, items[key], key)
	        }) : [];
	    } else {
	      hasKeys = false;
	    }
	
	    if (ifExpr) {
	      items = items.filter(function(item, i) {
	        if (expr.key && !isObject$$1)
	          { return !!tmpl(ifExpr, mkitem(expr, item, i, parent)) }
	
	        return !!tmpl(ifExpr, extend(Object.create(parent), item))
	      });
	    }
	
	    // loop all the new items
	    each(items, function(item, i) {
	      // reorder only if the items are objects
	      var
	        doReorder = mustReorder && typeof item === T_OBJECT && !hasKeys,
	        oldPos = oldItems.indexOf(item),
	        isNew = !~oldPos,
	        mustAppend = i <= tags.length,
	        pos = !isNew && doReorder ? oldPos : i,
	        // does a tag exist in this position?
	        tag = tags[pos];
	
	      item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;
	
	      // new tag
	      if (
	        doReorder && isNew // by default we always try to reorder the DOM elements
	        ||
	        !doReorder && !tag // with no-reorder we just update the old tags
	      ) {
	        tag = new Tag$1(impl, {
	          parent: parent,
	          isLoop: isLoop,
	          isAnonymous: isAnonymous,
	          root: useRoot ? root : dom.cloneNode(),
	          item: item
	        }, dom.innerHTML);
	
	        // mount the tag
	        tag.mount();
	
	        if (mustAppend)
	          { append.apply(tag, [frag || root, isVirtual]); }
	        else
	          { insert.apply(tag, [root, tags[i], isVirtual]); }
	
	        if (!mustAppend) { oldItems.splice(i, 0, item); }
	        tags.splice(i, 0, tag);
	        if (child) { arrayishAdd(parent.tags, tagName, tag, true); }
	        pos = i; // handled here so no move
	      } else { tag.update(item); }
	
	      // reorder the tag if it's not located in its previous position
	      if (pos !== i && doReorder) {
	        // #closes 2040
	        if (contains(items, oldItems[i])) {
	          move.apply(tag, [root, tags[i], isVirtual]);
	        }
	        // update the position attribute if it exists
	        if (expr.pos) { tag[expr.pos] = i; }
	        // move the old tag instance
	        tags.splice(i, 0, tags.splice(pos, 1)[0]);
	        // move the old item
	        oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
	        // if the loop tags are not custom
	        // we need to move all their custom tags into the right position
	        if (!child && tag.tags) { moveNestedTags.call(tag, i); }
	      }
	
	      // cache the original item to use it in the events bound to this node
	      // and its children
	      tag._item = item;
	      // cache the real parent tag internally
	      defineProperty(tag, '_parent', parent);
	    });
	
	    // remove the redundant tags
	    unmountRedundant(items, tags, tagName);
	
	    // clone the items array
	    oldItems = items.slice();
	
	    root.insertBefore(frag, ref);
	  };
	
	  expr.unmount = function() {
	    each(tags, function(t) { t.unmount(); });
	  };
	
	  return expr
	}
	
	/**
	 * Walk the tag DOM to detect the expressions to evaluate
	 * @this Tag
	 * @param   { HTMLElement } root - root tag where we will start digging the expressions
	 * @param   { Array } expressions - empty array where the expressions will be added
	 * @param   { Boolean } mustIncludeRoot - flag to decide whether the root must be parsed as well
	 * @returns { Object } an object containing the root noode and the dom tree
	 */
	function parseExpressions(root, expressions, mustIncludeRoot) {
	  var this$1 = this;
	
	  var tree = {parent: {children: expressions}};
	
	  walkNodes(root, function (dom, ctx) {
	    var type = dom.nodeType, parent = ctx.parent, attr, expr, tagImpl;
	    if (!mustIncludeRoot && dom === root) { return {parent: parent} }
	
	    // text node
	    if (type === 3 && dom.parentNode.tagName !== 'STYLE' && tmpl.hasExpr(dom.nodeValue))
	      { parent.children.push({dom: dom, expr: dom.nodeValue}); }
	
	    if (type !== 1) { return ctx } // not an element
	
	    // loop. each does it's own thing (for now)
	    if (attr = getAttr(dom, LOOP_DIRECTIVE)) {
	      parent.children.push(_each(dom, this$1, attr));
	      return false
	    }
	
	    // if-attrs become the new parent. Any following expressions (either on the current
	    // element, or below it) become children of this expression.
	    if (attr = getAttr(dom, CONDITIONAL_DIRECTIVE)) {
	      parent.children.push(Object.create(IfExpr).init(dom, this$1, attr));
	      return false
	    }
	
	    if (expr = getAttr(dom, IS_DIRECTIVE)) {
	      if (tmpl.hasExpr(expr)) {
	        parent.children.push({isRtag: true, expr: expr, dom: dom, attrs: [].slice.call(dom.attributes)});
	        return false
	      }
	    }
	
	    // if this is a tag, stop traversing here.
	    // we ignore the root, since parseExpressions is called while we're mounting that root
	    tagImpl = getTag(dom);
	    if (tagImpl && (dom !== root || mustIncludeRoot)) {
	      var conf = {root: dom, parent: this$1, hasImpl: true};
	      parent.children.push(initChildTag(tagImpl, conf, dom.innerHTML, this$1));
	      return false
	    }
	
	    // attribute expressions
	    parseAttributes.apply(this$1, [dom, dom.attributes, function(attr, expr) {
	      if (!expr) { return }
	      parent.children.push(expr);
	    }]);
	
	    // whatever the parent is, all child elements get the same parent.
	    // If this element had an if-attr, that's the parent for all child elements
	    return {parent: parent}
	  }, tree);
	
	  return { tree: tree, root: root }
	}
	
	/**
	 * Calls `fn` for every attribute on an element. If that attr has an expression,
	 * it is also passed to fn.
	 * @this Tag
	 * @param   { HTMLElement } dom - dom node to parse
	 * @param   { Array } attrs - array of attributes
	 * @param   { Function } fn - callback to exec on any iteration
	 */
	function parseAttributes(dom, attrs, fn) {
	  var this$1 = this;
	
	  each(attrs, function (attr) {
	    var name = attr.name, bool = isBoolAttr(name), expr;
	
	    if (contains(REF_DIRECTIVES, name)) {
	      expr =  Object.create(RefExpr).init(dom, this$1, name, attr.value);
	    } else if (tmpl.hasExpr(attr.value)) {
	      expr = {dom: dom, expr: attr.value, attr: attr.name, bool: bool};
	    }
	
	    fn(attr, expr);
	  });
	}
	
	/*
	  Includes hacks needed for the Internet Explorer version 9 and below
	  See: http://kangax.github.io/compat-table/es5/#ie8
	       http://codeplanet.io/dropping-ie8/
	*/
	
	var reHasYield  = /<yield\b/i;
	var reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig;
	var reYieldSrc  = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig;
	var reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
	var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' };
	var tblTags = IE_VERSION && IE_VERSION < 10 ? RE_SPECIAL_TAGS : RE_SPECIAL_TAGS_NO_OPTION;
	var GENERIC = 'div';
	
	
	/*
	  Creates the root element for table or select child elements:
	  tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
	*/
	function specialTags(el, tmpl, tagName) {
	
	  var
	    select = tagName[0] === 'o',
	    parent = select ? 'select>' : 'table>';
	
	  // trim() is important here, this ensures we don't have artifacts,
	  // so we can check if we have only one element inside the parent
	  el.innerHTML = '<' + parent + tmpl.trim() + '</' + parent;
	  parent = el.firstChild;
	
	  // returns the immediate parent if tr/th/td/col is the only element, if not
	  // returns the whole tree, as this can include additional elements
	  if (select) {
	    parent.selectedIndex = -1;  // for IE9, compatible w/current riot behavior
	  } else {
	    // avoids insertion of cointainer inside container (ex: tbody inside tbody)
	    var tname = rootEls[tagName];
	    if (tname && parent.childElementCount === 1) { parent = $(tname, parent); }
	  }
	  return parent
	}
	
	/*
	  Replace the yield tag from any tag template with the innerHTML of the
	  original tag in the page
	*/
	function replaceYield(tmpl, html) {
	  // do nothing if no yield
	  if (!reHasYield.test(tmpl)) { return tmpl }
	
	  // be careful with #1343 - string on the source having `$1`
	  var src = {};
	
	  html = html && html.replace(reYieldSrc, function (_, ref, text) {
	    src[ref] = src[ref] || text;   // preserve first definition
	    return ''
	  }).trim();
	
	  return tmpl
	    .replace(reYieldDest, function (_, ref, def) {  // yield with from - to attrs
	      return src[ref] || def || ''
	    })
	    .replace(reYieldAll, function (_, def) {        // yield without any "from"
	      return html || def || ''
	    })
	}
	
	/**
	 * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
	 * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
	 *
	 * @param   { String } tmpl  - The template coming from the custom tag definition
	 * @param   { String } html - HTML content that comes from the DOM element where you
	 *           will mount the tag, mostly the original tag in the page
	 * @param   { Boolean } checkSvg - flag needed to know if we need to force the svg rendering in case of loop nodes
	 * @returns { HTMLElement } DOM element with _tmpl_ merged through `YIELD` with the _html_.
	 */
	function mkdom(tmpl, html, checkSvg) {
	  var match   = tmpl && tmpl.match(/^\s*<([-\w]+)/),
	    tagName = match && match[1].toLowerCase(),
	    el = mkEl(GENERIC, checkSvg && isSVGTag(tagName));
	
	  // replace all the yield tags with the tag inner html
	  tmpl = replaceYield(tmpl, html);
	
	  /* istanbul ignore next */
	  if (tblTags.test(tagName))
	    { el = specialTags(el, tmpl, tagName); }
	  else
	    { setInnerHTML(el, tmpl); }
	
	  el.stub = true;
	
	  return el
	}
	
	/**
	 * Another way to create a riot tag a bit more es6 friendly
	 * @param { HTMLElement } el - tag DOM selector or DOM node/s
	 * @param { Object } opts - tag logic
	 * @returns { Tag } new riot tag instance
	 */
	function Tag$2(el, opts) {
	  // get the tag properties from the class constructor
	  var ref = this;
	  var name = ref.name;
	  var tmpl = ref.tmpl;
	  var css = ref.css;
	  var attrs = ref.attrs;
	  var onCreate = ref.onCreate;
	  // register a new tag and cache the class prototype
	  if (!__TAG_IMPL[name]) {
	    tag$1(name, tmpl, css, attrs, onCreate);
	    // cache the class constructor
	    __TAG_IMPL[name].class = this.constructor;
	  }
	
	  // mount the tag using the class instance
	  mountTo(el, name, opts, this);
	  // inject the component css
	  if (css) { styleManager.inject(); }
	
	  return this
	}
	
	/**
	 * Create a new riot tag implementation
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   tmpl - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @returns { String } name/id of the tag just created
	 */
	function tag$1(name, tmpl, css, attrs, fn) {
	  if (isFunction(attrs)) {
	    fn = attrs;
	
	    if (/^[\w\-]+\s?=/.test(css)) {
	      attrs = css;
	      css = '';
	    } else
	      { attrs = ''; }
	  }
	
	  if (css) {
	    if (isFunction(css))
	      { fn = css; }
	    else
	      { styleManager.add(css); }
	  }
	
	  name = name.toLowerCase();
	  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };
	
	  return name
	}
	
	/**
	 * Create a new riot tag implementation (for use by the compiler)
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   tmpl - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @returns { String } name/id of the tag just created
	 */
	function tag2$1(name, tmpl, css, attrs, fn) {
	  if (css)
	    { styleManager.add(css, name); }
	
	  var exists = !!__TAG_IMPL[name];
	  __TAG_IMPL[name] = { name: name, tmpl: tmpl, attrs: attrs, fn: fn };
	
	  if (exists && util.hotReloader)
	    { util.hotReloader(name); }
	
	  return name
	}
	
	/**
	 * Mount a tag using a specific tag implementation
	 * @param   { * } selector - tag DOM selector or DOM node/s
	 * @param   { String } tagName - tag implementation name
	 * @param   { Object } opts - tag logic
	 * @returns { Array } new tags instances
	 */
	function mount$2(selector, tagName, opts) {
	  var tags = [];
	
	  function pushTagsTo(root) {
	    if (root.tagName) {
	      var riotTag = getAttr(root, IS_DIRECTIVE);
	
	      // have tagName? force riot-tag to be the same
	      if (tagName && riotTag !== tagName) {
	        riotTag = tagName;
	        setAttr(root, IS_DIRECTIVE, tagName);
	      }
	
	      var tag$$1 = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);
	
	      if (tag$$1)
	        { tags.push(tag$$1); }
	    } else if (root.length)
	      { each(root, pushTagsTo); } // assume nodeList
	  }
	
	  // inject styles into DOM
	  styleManager.inject();
	
	  if (isObject(tagName)) {
	    opts = tagName;
	    tagName = 0;
	  }
	
	  var elem;
	  var allTags;
	
	  // crawl the DOM to find the tag
	  if (isString(selector)) {
	    selector = selector === '*' ?
	      // select all registered tags
	      // & tags found with the riot-tag attribute set
	      allTags = selectTags() :
	      // or just the ones named like the selector
	      selector + selectTags(selector.split(/, */));
	
	    // make sure to pass always a selector
	    // to the querySelectorAll function
	    elem = selector ? $$(selector) : [];
	  }
	  else
	    // probably you have passed already a tag or a NodeList
	    { elem = selector; }
	
	  // select all the registered and mount them inside their root elements
	  if (tagName === '*') {
	    // get all custom tags
	    tagName = allTags || selectTags();
	    // if the root els it's just a single tag
	    if (elem.tagName)
	      { elem = $$(tagName, elem); }
	    else {
	      // select all the children for all the different root elements
	      var nodeList = [];
	
	      each(elem, function (_el) { return nodeList.push($$(tagName, _el)); });
	
	      elem = nodeList;
	    }
	    // get rid of the tagName
	    tagName = 0;
	  }
	
	  pushTagsTo(elem);
	
	  return tags
	}
	
	// Create a mixin that could be globally shared across all the tags
	var mixins = {};
	var globals = mixins[GLOBAL_MIXIN] = {};
	var _id = 0;
	
	/**
	 * Create/Return a mixin by its name
	 * @param   { String }  name - mixin name (global mixin if object)
	 * @param   { Object }  mix - mixin logic
	 * @param   { Boolean } g - is global?
	 * @returns { Object }  the mixin logic
	 */
	function mixin$1(name, mix, g) {
	  // Unnamed global
	  if (isObject(name)) {
	    mixin$1(("__unnamed_" + (_id++)), name, true);
	    return
	  }
	
	  var store = g ? globals : mixins;
	
	  // Getter
	  if (!mix) {
	    if (isUndefined(store[name]))
	      { throw new Error('Unregistered mixin: ' + name) }
	
	    return store[name]
	  }
	
	  // Setter
	  store[name] = isFunction(mix) ?
	    extend(mix.prototype, store[name] || {}) && mix :
	    extend(store[name] || {}, mix);
	}
	
	/**
	 * Update all the tags instances created
	 * @returns { Array } all the tags instances
	 */
	function update$1() {
	  return each(__TAGS_CACHE, function (tag$$1) { return tag$$1.update(); })
	}
	
	function unregister$1(name) {
	  delete __TAG_IMPL[name];
	}
	
	// counter to give a unique id to all the Tag instances
	var __uid = 0;
	
	/**
	 * We need to update opts for this tag. That requires updating the expressions
	 * in any attributes on the tag, and then copying the result onto opts.
	 * @this Tag
	 * @param   {Boolean} isLoop - is it a loop tag?
	 * @param   { Tag }  parent - parent tag node
	 * @param   { Boolean }  isAnonymous - is it a tag without any impl? (a tag not registered)
	 * @param   { Object }  opts - tag options
	 * @param   { Array }  instAttrs - tag attributes array
	 */
	function updateOpts(isLoop, parent, isAnonymous, opts, instAttrs) {
	  // isAnonymous `each` tags treat `dom` and `root` differently. In this case
	  // (and only this case) we don't need to do updateOpts, because the regular parse
	  // will update those attrs. Plus, isAnonymous tags don't need opts anyway
	  if (isLoop && isAnonymous) { return }
	
	  var ctx = !isAnonymous && isLoop ? this : parent || this;
	  each(instAttrs, function (attr) {
	    if (attr.expr) { updateAllExpressions.call(ctx, [attr.expr]); }
	    opts[toCamel(attr.name)] = attr.expr ? attr.expr.value : attr.value;
	  });
	}
	
	
	/**
	 * Tag class
	 * @constructor
	 * @param { Object } impl - it contains the tag template, and logic
	 * @param { Object } conf - tag options
	 * @param { String } innerHTML - html that eventually we need to inject in the tag
	 */
	function Tag$1(impl, conf, innerHTML) {
	
	  var opts = extend({}, conf.opts),
	    parent = conf.parent,
	    isLoop = conf.isLoop,
	    isAnonymous = conf.isAnonymous,
	    item = cleanUpData(conf.item),
	    instAttrs = [], // All attributes on the Tag when it's first parsed
	    implAttrs = [], // expressions on this type of Tag
	    expressions = [],
	    root = conf.root,
	    tagName = conf.tagName || getTagName(root),
	    isVirtual = tagName === 'virtual',
	    propsInSyncWithParent = [],
	    dom;
	
	  // make this tag observable
	  observable$1(this);
	  // only call unmount if we have a valid __TAG_IMPL (has name property)
	  if (impl.name && root._tag) { root._tag.unmount(true); }
	
	  // not yet mounted
	  this.isMounted = false;
	  root.isLoop = isLoop;
	
	  defineProperty(this, '_internal', {
	    isAnonymous: isAnonymous,
	    instAttrs: instAttrs,
	    innerHTML: innerHTML,
	    // these vars will be needed only for the virtual tags
	    virts: [],
	    tail: null,
	    head: null
	  });
	
	  // create a unique id to this tag
	  // it could be handy to use it also to improve the virtual dom rendering speed
	  defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id
	
	  extend(this, { root: root, opts: opts }, item);
	  // protect the "tags" and "refs" property from being overridden
	  defineProperty(this, 'parent', parent || null);
	  defineProperty(this, 'tags', {});
	  defineProperty(this, 'refs', {});
	
	  dom = mkdom(impl.tmpl, innerHTML, isLoop);
	
	  /**
	   * Update the tag expressions and options
	   * @param   { * }  data - data we want to use to extend the tag properties
	   * @returns { Tag } the current tag instance
	   */
	  defineProperty(this, 'update', function tagUpdate(data) {
	    if (isFunction(this.shouldUpdate) && !this.shouldUpdate(data)) { return this }
	
	    // make sure the data passed will not override
	    // the component core methods
	    data = cleanUpData(data);
	
	    // inherit properties from the parent, but only for isAnonymous tags
	    if (isLoop && isAnonymous) { inheritFrom.apply(this, [this.parent, propsInSyncWithParent]); }
	    extend(this, data);
	    updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs]);
	    if (this.isMounted) { this.trigger('update', data); }
	    updateAllExpressions.call(this, expressions);
	    if (this.isMounted) { this.trigger('updated'); }
	
	    return this
	
	  }.bind(this));
	
	  /**
	   * Add a mixin to this tag
	   * @returns { Tag } the current tag instance
	   */
	  defineProperty(this, 'mixin', function tagMixin() {
	    var this$1 = this;
	
	    each(arguments, function (mix) {
	      var instance,
	        props = [],
	        obj;
	
	      mix = isString(mix) ? mixin$1(mix) : mix;
	
	      // check if the mixin is a function
	      if (isFunction(mix)) {
	        // create the new mixin instance
	        instance = new mix();
	      } else { instance = mix; }
	
	      var proto = Object.getPrototypeOf(instance);
	
	      // build multilevel prototype inheritance chain property list
	      do { props = props.concat(Object.getOwnPropertyNames(obj || instance)); }
	      while (obj = Object.getPrototypeOf(obj || instance))
	
	      // loop the keys in the function prototype or the all object keys
	      each(props, function (key) {
	        // bind methods to this
	        // allow mixins to override other properties/parent mixins
	        if (key !== 'init') {
	          // check for getters/setters
	          var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key);
	          var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);
	
	          // apply method only if it does not already exist on the instance
	          if (!this$1.hasOwnProperty(key) && hasGetterSetter) {
	            Object.defineProperty(this$1, key, descriptor);
	          } else {
	            this$1[key] = isFunction(instance[key]) ?
	              instance[key].bind(this$1) :
	              instance[key];
	          }
	        }
	      });
	
	      // init method will be called automatically
	      if (instance.init)
	        { instance.init.bind(this$1)(); }
	    });
	    return this
	  }.bind(this));
	
	  /**
	   * Mount the current tag instance
	   * @returns { Tag } the current tag instance
	   */
	  defineProperty(this, 'mount', function tagMount() {
	    var this$1 = this;
	
	    root._tag = this; // keep a reference to the tag just created
	
	    // Read all the attrs on this instance. This give us the info we need for updateOpts
	    parseAttributes.apply(parent, [root, root.attributes, function (attr, expr) {
	      if (!isAnonymous && RefExpr.isPrototypeOf(expr)) { expr.tag = this$1; }
	      attr.expr = expr;
	      instAttrs.push(attr);
	    }]);
	
	    // update the root adding custom attributes coming from the compiler
	    implAttrs = [];
	    walkAttrs(impl.attrs, function (k, v) { implAttrs.push({name: k, value: v}); });
	    parseAttributes.apply(this, [root, implAttrs, function (attr, expr) {
	      if (expr) { expressions.push(expr); }
	      else { setAttr(root, attr.name, attr.value); }
	    }]);
	
	    // children in loop should inherit from true parent
	    if (this._parent && isAnonymous) { inheritFrom.apply(this, [this._parent, propsInSyncWithParent]); }
	
	    // initialiation
	    updateOpts.apply(this, [isLoop, parent, isAnonymous, opts, instAttrs]);
	
	    // add global mixins
	    var globalMixin = mixin$1(GLOBAL_MIXIN);
	
	    if (globalMixin) {
	      for (var i in globalMixin) {
	        if (globalMixin.hasOwnProperty(i)) {
	          this$1.mixin(globalMixin[i]);
	        }
	      }
	    }
	
	    if (impl.fn) { impl.fn.call(this, opts); }
	
	    this.trigger('before-mount');
	
	    // parse layout after init. fn may calculate args for nested custom tags
	    parseExpressions.apply(this, [dom, expressions, false]);
	
	    this.update(item);
	
	    if (isLoop && isAnonymous) {
	      // update the root attribute for the looped elements
	      this.root = root = dom.firstChild;
	    } else {
	      while (dom.firstChild) { root.appendChild(dom.firstChild); }
	      if (root.stub) { root = parent.root; }
	    }
	
	    defineProperty(this, 'root', root);
	    this.isMounted = true;
	
	    // if it's not a child tag we can trigger its mount event
	    if (!this.parent || this.parent.isMounted) {
	      this.trigger('mount');
	    }
	    // otherwise we need to wait that the parent event gets triggered
	    else { this.parent.one('mount', function () {
	      this$1.trigger('mount');
	    }); }
	
	    return this
	
	  }.bind(this));
	
	  /**
	   * Unmount the tag instance
	   * @param { Boolean } mustKeepRoot - if it's true the root node will not be removed
	   * @returns { Tag } the current tag instance
	   */
	  defineProperty(this, 'unmount', function tagUnmount(mustKeepRoot) {
	    var this$1 = this;
	
	    var el = this.root,
	      p = el.parentNode,
	      ptag,
	      tagIndex = __TAGS_CACHE.indexOf(this);
	
	    this.trigger('before-unmount');
	
	    // clear all attributes coming from the mounted tag
	    walkAttrs(impl.attrs, function (name) {
	      if (startsWith(name, ATTRS_PREFIX))
	        { name = name.slice(ATTRS_PREFIX.length); }
	      remAttr(root, name);
	    });
	
	    // remove this tag instance from the global virtualDom variable
	    if (~tagIndex)
	      { __TAGS_CACHE.splice(tagIndex, 1); }
	
	    if (p) {
	      if (parent) {
	        ptag = getImmediateCustomParentTag(parent);
	
	        if (isVirtual) {
	          Object.keys(this.tags).forEach(function (tagName) {
	            arrayishRemove(ptag.tags, tagName, this$1.tags[tagName]);
	          });
	        } else {
	          arrayishRemove(ptag.tags, tagName, this);
	          if(parent !== ptag) // remove from _parent too
	            { arrayishRemove(parent.tags, tagName, this); }
	        }
	      } else {
	        while (el.firstChild) { el.removeChild(el.firstChild); }
	      }
	
	      if (!mustKeepRoot) {
	        p.removeChild(el);
	      } else {
	        // the riot-tag and the data-is attributes aren't needed anymore, remove them
	        remAttr(p, IS_DIRECTIVE);
	      }
	    }
	
	    if (this._internal.virts) {
	      each(this._internal.virts, function (v) {
	        if (v.parentNode) { v.parentNode.removeChild(v); }
	      });
	    }
	
	    // allow expressions to unmount themselves
	    unmountAll(expressions);
	    each(instAttrs, function (a) { return a.expr && a.expr.unmount && a.expr.unmount(); });
	
	    this.trigger('unmount');
	    this.off('*');
	    this.isMounted = false;
	
	    delete this.root._tag;
	
	    return this
	
	  }.bind(this));
	}
	
	/**
	 * Detect the tag implementation by a DOM node
	 * @param   { Object } dom - DOM node we need to parse to get its tag implementation
	 * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
	 */
	function getTag(dom) {
	  return dom.tagName && __TAG_IMPL[getAttr(dom, IS_DIRECTIVE) ||
	    getAttr(dom, IS_DIRECTIVE) || dom.tagName.toLowerCase()]
	}
	
	/**
	 * Inherit properties from a target tag instance
	 * @this Tag
	 * @param   { Tag } target - tag where we will inherit properties
	 * @param   { Array } propsInSyncWithParent - array of properties to sync with the target
	 */
	function inheritFrom(target, propsInSyncWithParent) {
	  var this$1 = this;
	
	  each(Object.keys(target), function (k) {
	    // some properties must be always in sync with the parent tag
	    var mustSync = !isReservedName(k) && contains(propsInSyncWithParent, k);
	
	    if (isUndefined(this$1[k]) || mustSync) {
	      // track the property to keep in sync
	      // so we can keep it updated
	      if (!mustSync) { propsInSyncWithParent.push(k); }
	      this$1[k] = target[k];
	    }
	  });
	}
	
	/**
	 * Move the position of a custom tag in its parent tag
	 * @this Tag
	 * @param   { String } tagName - key where the tag was stored
	 * @param   { Number } newPos - index where the new tag will be stored
	 */
	function moveChildTag(tagName, newPos) {
	  var parent = this.parent,
	    tags;
	  // no parent no move
	  if (!parent) { return }
	
	  tags = parent.tags[tagName];
	
	  if (isArray(tags))
	    { tags.splice(newPos, 0, tags.splice(tags.indexOf(this), 1)[0]); }
	  else { arrayishAdd(parent.tags, tagName, this); }
	}
	
	/**
	 * Create a new child tag including it correctly into its parent
	 * @param   { Object } child - child tag implementation
	 * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
	 * @param   { String } innerHTML - inner html of the child node
	 * @param   { Object } parent - instance of the parent tag including the child custom tag
	 * @returns { Object } instance of the new child tag just created
	 */
	function initChildTag(child, opts, innerHTML, parent) {
	  var tag = new Tag$1(child, opts, innerHTML),
	    tagName = opts.tagName || getTagName(opts.root, true),
	    ptag = getImmediateCustomParentTag(parent);
	  // fix for the parent attribute in the looped elements
	  defineProperty(tag, 'parent', ptag);
	  // store the real parent tag
	  // in some cases this could be different from the custom parent tag
	  // for example in nested loops
	  tag._parent = parent;
	
	  // add this tag to the custom parent tag
	  arrayishAdd(ptag.tags, tagName, tag);
	
	  // and also to the real parent tag
	  if (ptag !== parent)
	    { arrayishAdd(parent.tags, tagName, tag); }
	
	  // empty the child node once we got its template
	  // to avoid that its children get compiled multiple times
	  opts.root.innerHTML = '';
	
	  return tag
	}
	
	/**
	 * Loop backward all the parents tree to detect the first custom parent tag
	 * @param   { Object } tag - a Tag instance
	 * @returns { Object } the instance of the first custom parent tag found
	 */
	function getImmediateCustomParentTag(tag) {
	  var ptag = tag;
	  while (ptag._internal.isAnonymous) {
	    if (!ptag.parent) { break }
	    ptag = ptag.parent;
	  }
	  return ptag
	}
	
	/**
	 * Trigger the unmount method on all the expressions
	 * @param   { Array } expressions - DOM expressions
	 */
	function unmountAll(expressions) {
	  each(expressions, function(expr) {
	    if (expr instanceof Tag$1) { expr.unmount(true); }
	    else if (expr.unmount) { expr.unmount(); }
	  });
	}
	
	/**
	 * Get the tag name of any DOM node
	 * @param   { Object } dom - DOM node we want to parse
	 * @param   { Boolean } skipDataIs - hack to ignore the data-is attribute when attaching to parent
	 * @returns { String } name to identify this dom node in riot
	 */
	function getTagName(dom, skipDataIs) {
	  var child = getTag(dom),
	    namedTag = !skipDataIs && getAttr(dom, IS_DIRECTIVE);
	  return namedTag && !tmpl.hasExpr(namedTag) ?
	                namedTag :
	              child ? child.name : dom.tagName.toLowerCase()
	}
	
	/**
	 * With this function we avoid that the internal Tag methods get overridden
	 * @param   { Object } data - options we want to use to extend the tag instance
	 * @returns { Object } clean object without containing the riot internal reserved words
	 */
	function cleanUpData(data) {
	  if (!(data instanceof Tag$1) && !(data && isFunction(data.trigger)))
	    { return data }
	
	  var o = {};
	  for (var key in data) {
	    if (!RE_RESERVED_NAMES.test(key)) { o[key] = data[key]; }
	  }
	  return o
	}
	
	/**
	 * Set the property of an object for a given key. If something already
	 * exists there, then it becomes an array containing both the old and new value.
	 * @param { Object } obj - object on which to set the property
	 * @param { String } key - property name
	 * @param { Object } value - the value of the property to be set
	 * @param { Boolean } ensureArray - ensure that the property remains an array
	 */
	function arrayishAdd(obj, key, value, ensureArray) {
	  var dest = obj[key];
	  var isArr = isArray(dest);
	
	  if (dest && dest === value) { return }
	
	  // if the key was never set, set it once
	  if (!dest && ensureArray) { obj[key] = [value]; }
	  else if (!dest) { obj[key] = value; }
	  // if it was an array and not yet set
	  else if (!isArr || isArr && !contains(dest, value)) {
	    if (isArr) { dest.push(value); }
	    else { obj[key] = [dest, value]; }
	  }
	}
	
	/**
	 * Removes an item from an object at a given key. If the key points to an array,
	 * then the item is just removed from the array.
	 * @param { Object } obj - object on which to remove the property
	 * @param { String } key - property name
	 * @param { Object } value - the value of the property to be removed
	 * @param { Boolean } ensureArray - ensure that the property remains an array
	*/
	function arrayishRemove(obj, key, value, ensureArray) {
	  if (isArray(obj[key])) {
	    each(obj[key], function(item, i) {
	      if (item === value) { obj[key].splice(i, 1); }
	    });
	    if (!obj[key].length) { delete obj[key]; }
	    else if (obj[key].length === 1 && !ensureArray) { obj[key] = obj[key][0]; }
	  } else
	    { delete obj[key]; } // otherwise just delete the key
	}
	
	/**
	 * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
	 * @param   { Object }  dom - DOM node we want to parse
	 * @returns { Boolean } -
	 */
	function isInStub(dom) {
	  while (dom) {
	    if (dom.inStub)
	      { return true }
	    dom = dom.parentNode;
	  }
	  return false
	}
	
	/**
	 * Mount a tag creating new Tag instance
	 * @param   { Object } root - dom node where the tag will be mounted
	 * @param   { String } tagName - name of the riot tag we want to mount
	 * @param   { Object } opts - options to pass to the Tag instance
	 * @param   { Object } ctx - optional context that will be used to extend an existing class ( used in riot.Tag )
	 * @returns { Tag } a new Tag instance
	 */
	function mountTo(root, tagName, opts, ctx) {
	  var impl = __TAG_IMPL[tagName],
	    implClass = __TAG_IMPL[tagName].class,
	    tag = ctx || (implClass ? Object.create(implClass.prototype) : {}),
	    // cache the inner HTML to fix #855
	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
	
	  // clear the inner html
	  root.innerHTML = '';
	
	  var conf = { root: root, opts: opts };
	  if (opts && opts.parent) { conf.parent = opts.parent; }
	
	  if (impl && root) { Tag$1.apply(tag, [impl, conf, innerHTML]); }
	
	  if (tag && tag.mount) {
	    tag.mount(true);
	    // add this tag to the virtualDom variable
	    if (!contains(__TAGS_CACHE, tag)) { __TAGS_CACHE.push(tag); }
	  }
	
	  return tag
	}
	
	
	/**
	 * Adds the elements for a virtual tag
	 * @this Tag
	 * @param { Node } src - the node that will do the inserting or appending
	 * @param { Tag } target - only if inserting, insert before this tag's first child
	 */
	function makeVirtual(src, target) {
	  var this$1 = this;
	
	  var head = createDOMPlaceholder(),
	    tail = createDOMPlaceholder(),
	    frag = createFrag(),
	    sib, el;
	
	  this._internal.head = this.root.insertBefore(head, this.root.firstChild);
	  this._internal.tail = this.root.appendChild(tail);
	
	  el = this._internal.head;
	
	  while (el) {
	    sib = el.nextSibling;
	    frag.appendChild(el);
	    this$1._internal.virts.push(el); // hold for unmounting
	    el = sib;
	  }
	
	  if (target)
	    { src.insertBefore(frag, target._internal.head); }
	  else
	    { src.appendChild(frag); }
	}
	
	/**
	 * Move virtual tag and all child nodes
	 * @this Tag
	 * @param { Node } src  - the node that will do the inserting
	 * @param { Tag } target - insert before this tag's first child
	 */
	function moveVirtual(src, target) {
	  var this$1 = this;
	
	  var el = this._internal.head,
	    frag = createFrag(),
	    sib;
	
	  while (el) {
	    sib = el.nextSibling;
	    frag.appendChild(el);
	    el = sib;
	    if (el === this$1._internal.tail) {
	      frag.appendChild(el);
	      src.insertBefore(frag, target._internal.head);
	      break
	    }
	  }
	}
	
	/**
	 * Get selectors for tags
	 * @param   { Array } tags - tag names to select
	 * @returns { String } selector
	 */
	function selectTags(tags) {
	  // select all tags
	  if (!tags) {
	    var keys = Object.keys(__TAG_IMPL);
	    return keys + selectTags(keys)
	  }
	
	  return tags
	    .filter(function (t) { return !/[^-\w]/.test(t); })
	    .reduce(function (list, t) {
	      var name = t.trim().toLowerCase();
	      return list + ",[" + IS_DIRECTIVE + "=\"" + name + "\"]"
	    }, '')
	}
	
	
	var tags = Object.freeze({
		getTag: getTag,
		inheritFrom: inheritFrom,
		moveChildTag: moveChildTag,
		initChildTag: initChildTag,
		getImmediateCustomParentTag: getImmediateCustomParentTag,
		unmountAll: unmountAll,
		getTagName: getTagName,
		cleanUpData: cleanUpData,
		arrayishAdd: arrayishAdd,
		arrayishRemove: arrayishRemove,
		isInStub: isInStub,
		mountTo: mountTo,
		makeVirtual: makeVirtual,
		moveVirtual: moveVirtual,
		selectTags: selectTags
	});
	
	/**
	 * Riot public api
	 */
	var settings = Object.create(brackets.settings);
	
	var util = {
	  tmpl: tmpl,
	  brackets: brackets,
	  styleManager: styleManager,
	  vdom: __TAGS_CACHE,
	  styleNode: styleManager.styleNode,
	  // export the riot internal utils as well
	  dom: dom,
	  check: check,
	  misc: misc,
	  tags: tags
	};
	
	// export the core props/methods
	var Tag$$1 = Tag$2;
	var tag$$1 = tag$1;
	var tag2$$1 = tag2$1;
	var mount$1 = mount$2;
	var mixin$$1 = mixin$1;
	var update$$1 = update$1;
	var unregister$$1 = unregister$1;
	var observable = observable$1;
	
	var riot$1 = {
	  settings: settings,
	  util: util,
	  // core
	  Tag: Tag$$1,
	  tag: tag$$1,
	  tag2: tag2$$1,
	  mount: mount$1,
	  mixin: mixin$$1,
	  update: update$$1,
	  unregister: unregister$$1,
	  observable: observable
	};
	
	
	var riot$2 = Object.freeze({
		settings: settings,
		util: util,
		Tag: Tag$$1,
		tag: tag$$1,
		tag2: tag2$$1,
		mount: mount$1,
		mixin: mixin$$1,
		update: update$$1,
		unregister: unregister$$1,
		observable: observable,
		default: riot$1
	});
	
	/**
	 * Compiler for riot custom tags
	 * @version v3.1.1
	 */
	
	// istanbul ignore next
	function safeRegex (re) {
	  var arguments$1 = arguments;
	
	  var src = re.source;
	  var opt = re.global ? 'g' : '';
	
	  if (re.ignoreCase) { opt += 'i'; }
	  if (re.multiline)  { opt += 'm'; }
	
	  for (var i = 1; i < arguments.length; i++) {
	    src = src.replace('@', '\\' + arguments$1[i]);
	  }
	
	  return new RegExp(src, opt)
	}
	
	/**
	 * @module parsers
	 */
	var parsers$1 = (function (win) {
	
	  var _p = {};
	
	  function _r (name) {
	    var parser = win[name];
	
	    if (parser) { return parser }
	
	    throw new Error('Parser "' + name + '" not loaded.')
	  }
	
	  function _req (name) {
	    var parts = name.split('.');
	
	    if (parts.length !== 2) { throw new Error('Bad format for parsers._req') }
	
	    var parser = _p[parts[0]][parts[1]];
	    if (parser) { return parser }
	
	    throw new Error('Parser "' + name + '" not found.')
	  }
	
	  function extend (obj, props) {
	    if (props) {
	      for (var prop in props) {
	        /* istanbul ignore next */
	        if (props.hasOwnProperty(prop)) {
	          obj[prop] = props[prop];
	        }
	      }
	    }
	    return obj
	  }
	
	  function renderPug (compilerName, html, opts, url) {
	    opts = extend({
	      pretty: true,
	      filename: url,
	      doctype: 'html'
	    }, opts);
	    return _r(compilerName).render(html, opts)
	  }
	
	  _p.html = {
	    jade: function (html, opts, url) {
	      /* eslint-disable */
	      console.log('DEPRECATION WARNING: jade was renamed "pug" - The jade parser will be removed in riot@3.0.0!');
	      /* eslint-enable */
	      return renderPug('jade', html, opts, url)
	    },
	    pug: function (html, opts, url) {
	      return renderPug('pug', html, opts, url)
	    }
	  };
	  _p.css = {
	    less: function (tag, css, opts, url) {
	      var ret;
	
	      opts = extend({
	        sync: true,
	        syncImport: true,
	        filename: url
	      }, opts);
	      _r('less').render(css, opts, function (err, result) {
	        // istanbul ignore next
	        if (err) { throw err }
	        ret = result.css;
	      });
	      return ret
	    }
	  };
	  _p.js = {
	    es6: function (js, opts, url) {
	      return _r('babel').transform(js, extend({ filename: url }, opts)).code
	    },
	    buble: function (js, opts, url) {
	      opts = extend({
	        source: url,
	        modules: false
	      }, opts);
	      return _r('buble').transform(js, opts).code
	    },
	    coffee: function (js, opts) {
	      return _r('CoffeeScript').compile(js, extend({ bare: true }, opts))
	    },
	    livescript: function (js, opts) {
	      return _r('livescript').compile(js, extend({ bare: true, header: false }, opts))
	    },
	    typescript: function (js, opts) {
	      return _r('typescript')(js, opts)
	    },
	    none: function (js) {
	      return js
	    }
	  };
	  _p.js.javascript   = _p.js.none;
	  _p.js.coffeescript = _p.js.coffee;
	  _p._req  = _req;
	  _p.utils = {
	    extend: extend
	  };
	
	  return _p
	
	})(window || global);
	
	/**
	 * @module compiler
	 */
	
	var extend$1 = parsers$1.utils.extend;
	/* eslint-enable */
	
	var S_LINESTR = /"[^"\n\\]*(?:\\[\S\s][^"\n\\]*)*"|'[^'\n\\]*(?:\\[\S\s][^'\n\\]*)*'/.source;
	
	var S_STRINGS = brackets.R_STRINGS.source;
	
	var HTML_ATTRS = / *([-\w:\xA0-\xFF]+) ?(?:= ?('[^']*'|"[^"]*"|\S+))?/g;
	
	var HTML_COMMS = RegExp(/<!--(?!>)[\S\s]*?-->/.source + '|' + S_LINESTR, 'g');
	
	var HTML_TAGS = /<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^"'\/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"\/>]*)*)|\s*)(\/?)>/g;
	
	var HTML_PACK = />[ \t]+<(-?[A-Za-z]|\/[-A-Za-z])/g;
	
	var RIOT_ATTRS = ['style', 'src', 'd', 'value'];
	
	var VOID_TAGS = /^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/;
	
	var PRE_TAGS = /<pre(?:\s+(?:[^">]*|"[^"]*")*)?>([\S\s]+?)<\/pre\s*>/gi;
	
	var SPEC_TYPES = /^"(?:number|date(?:time)?|time|month|email|color)\b/i;
	
	var IMPORT_STATEMENT = /^\s*import(?:(?:\s|[^\s'"])*)['|"].*\n?/gm;
	
	var TRIM_TRAIL = /[ \t]+$/gm;
	
	var RE_HASEXPR = safeRegex(/@#\d/, 'x01');
	var RE_REPEXPR = safeRegex(/@#(\d+)/g, 'x01');
	var CH_IDEXPR  = '\x01#';
	var CH_DQCODE  = '\u2057';
	var DQ = '"';
	var SQ = "'";
	
	function cleanSource (src) {
	  var
	    mm,
	    re = HTML_COMMS;
	
	  if (~src.indexOf('\r')) {
	    src = src.replace(/\r\n?/g, '\n');
	  }
	
	  re.lastIndex = 0;
	  while ((mm = re.exec(src))) {
	    if (mm[0][0] === '<') {
	      src = RegExp.leftContext + RegExp.rightContext;
	      re.lastIndex = mm[3] + 1;
	    }
	  }
	  return src
	}
	
	function parseAttribs (str, pcex) {
	  var
	    list = [],
	    match,
	    type, vexp;
	
	  HTML_ATTRS.lastIndex = 0;
	
	  str = str.replace(/\s+/g, ' ');
	
	  while ((match = HTML_ATTRS.exec(str))) {
	    var
	      k = match[1].toLowerCase(),
	      v = match[2];
	
	    if (!v) {
	      list.push(k);
	    } else {
	
	      if (v[0] !== DQ) {
	        v = DQ + (v[0] === SQ ? v.slice(1, -1) : v) + DQ;
	      }
	
	      if (k === 'type' && SPEC_TYPES.test(v)) {
	        type = v;
	      } else {
	        if (RE_HASEXPR.test(v)) {
	
	          if (k === 'value') { vexp = 1; }
	          if (~RIOT_ATTRS.indexOf(k)) { k = 'riot-' + k; }
	        }
	
	        list.push(k + '=' + v);
	      }
	    }
	  }
	
	  if (type) {
	    if (vexp) { type = DQ + pcex._bp[0] + SQ + type.slice(1, -1) + SQ + pcex._bp[1] + DQ; }
	    list.push('type=' + type);
	  }
	  return list.join(' ')
	}
	
	function splitHtml (html, opts, pcex) {
	  var _bp = pcex._bp;
	
	  if (html && _bp[4].test(html)) {
	    var
	      jsfn = opts.expr && (opts.parser || opts.type) ? _compileJS : 0,
	      list = brackets.split(html, 0, _bp),
	      expr;
	
	    for (var i = 1; i < list.length; i += 2) {
	      expr = list[i];
	      if (expr[0] === '^') {
	        expr = expr.slice(1);
	      } else if (jsfn) {
	        expr = jsfn(expr, opts).trim();
	        if (expr.slice(-1) === ';') { expr = expr.slice(0, -1); }
	      }
	      list[i] = CH_IDEXPR + (pcex.push(expr) - 1) + _bp[1];
	    }
	    html = list.join('');
	  }
	  return html
	}
	
	function restoreExpr (html, pcex) {
	  if (pcex.length) {
	    html = html.replace(RE_REPEXPR, function (_, d) {
	
	      return pcex._bp[0] + pcex[d].trim().replace(/[\r\n]+/g, ' ').replace(/"/g, CH_DQCODE)
	    });
	  }
	  return html
	}
	
	function _compileHTML (html, opts, pcex) {
	  if (!/\S/.test(html)) { return '' }
	
	  html = splitHtml(html, opts, pcex)
	    .replace(HTML_TAGS, function (_, name, attr, ends) {
	
	      name = name.toLowerCase();
	
	      ends = ends && !VOID_TAGS.test(name) ? '></' + name : '';
	
	      if (attr) { name += ' ' + parseAttribs(attr, pcex); }
	
	      return '<' + name + ends + '>'
	    });
	
	  if (!opts.whitespace) {
	    var p = [];
	
	    if (/<pre[\s>]/.test(html)) {
	      html = html.replace(PRE_TAGS, function (q) {
	        p.push(q);
	        return '\u0002'
	      });
	    }
	
	    html = html.trim().replace(/\s+/g, ' ');
	
	    if (p.length) { html = html.replace(/\u0002/g, function () { return p.shift() }); }
	  }
	
	  if (opts.compact) { html = html.replace(HTML_PACK, '><$1'); }
	
	  return restoreExpr(html, pcex).replace(TRIM_TRAIL, '')
	}
	
	function compileHTML (html, opts, pcex) {
	
	  if (Array.isArray(opts)) {
	    pcex = opts;
	    opts = {};
	  } else {
	    if (!pcex) { pcex = []; }
	    if (!opts) { opts = {}; }
	  }
	
	  pcex._bp = brackets.array(opts.brackets);
	
	  return _compileHTML(cleanSource(html), opts, pcex)
	}
	
	var JS_ES6SIGN = /^[ \t]*([$_A-Za-z][$\w]*)\s*\([^()]*\)\s*{/m;
	
	var JS_ES6END = RegExp('[{}]|' + brackets.S_QBLOCKS, 'g');
	
	var JS_COMMS = RegExp(brackets.R_MLCOMMS.source + '|//[^\r\n]*|' + brackets.S_QBLOCKS, 'g');
	
	function riotjs (js) {
	  var
	    parts = [],
	    match,
	    toes5,
	    pos,
	    name,
	    RE = RegExp;
	
	  if (~js.indexOf('/')) { js = rmComms(js, JS_COMMS); }
	
	  while ((match = js.match(JS_ES6SIGN))) {
	
	    parts.push(RE.leftContext);
	    js  = RE.rightContext;
	    pos = skipBody(js, JS_ES6END);
	
	    name  = match[1];
	    toes5 = !/^(?:if|while|for|switch|catch|function)$/.test(name);
	    name  = toes5 ? match[0].replace(name, 'this.' + name + ' = function') : match[0];
	    parts.push(name, js.slice(0, pos));
	    js = js.slice(pos);
	
	    if (toes5 && !/^\s*.\s*bind\b/.test(js)) { parts.push('.bind(this)'); }
	  }
	
	  return parts.length ? parts.join('') + js : js
	
	  function rmComms (s, r, m) {
	    r.lastIndex = 0;
	    while ((m = r.exec(s))) {
	      if (m[0][0] === '/' && !m[1] && !m[2]) {
	        s = RE.leftContext + ' ' + RE.rightContext;
	        r.lastIndex = m[3] + 1;
	      }
	    }
	    return s
	  }
	
	  function skipBody (s, r) {
	    var m, i = 1;
	
	    r.lastIndex = 0;
	    while (i && (m = r.exec(s))) {
	      if (m[0] === '{') { ++i; }
	      else if (m[0] === '}') { --i; }
	    }
	    return i ? s.length : r.lastIndex
	  }
	}
	
	function _compileJS (js, opts, type, parserOpts, url) {
	  if (!/\S/.test(js)) { return '' }
	  if (!type) { type = opts.type; }
	
	  var parser = opts.parser || type && parsers$1._req('js.' + type, true) || riotjs;
	
	  return parser(js, parserOpts, url).replace(/\r\n?/g, '\n').replace(TRIM_TRAIL, '')
	}
	
	function compileJS (js, opts, type, userOpts) {
	  if (typeof opts === 'string') {
	    userOpts = type;
	    type = opts;
	    opts = {};
	  }
	  if (type && typeof type === 'object') {
	    userOpts = type;
	    type = '';
	  }
	  if (!userOpts) { userOpts = {}; }
	
	  return _compileJS(js, opts || {}, type, userOpts.parserOptions, userOpts.url)
	}
	
	var CSS_SELECTOR = RegExp('([{}]|^)[; ]*((?:[^@ ;{}][^{}]*)?[^@ ;{}:] ?)(?={)|' + S_LINESTR, 'g');
	
	function scopedCSS (tag, css) {
	  var scope = ':scope';
	
	  return css.replace(CSS_SELECTOR, function (m, p1, p2) {
	
	    if (!p2) { return m }
	
	    p2 = p2.replace(/[^,]+/g, function (sel) {
	      var s = sel.trim();
	
	      if (s.indexOf(tag) === 0) {
	        return sel
	      }
	
	      if (!s || s === 'from' || s === 'to' || s.slice(-1) === '%') {
	        return sel
	      }
	
	      if (s.indexOf(scope) < 0) {
	        s = tag + ' ' + s + ',[data-is="' + tag + '"] ' + s;
	      } else {
	        s = s.replace(scope, tag) + ',' +
	            s.replace(scope, '[data-is="' + tag + '"]');
	      }
	      return s
	    });
	
	    return p1 ? p1 + ' ' + p2 : p2
	  })
	}
	
	function _compileCSS (css, tag, type, opts) {
	  opts = opts || {};
	
	  if (type) {
	    if (type !== 'css') {
	
	      var parser = parsers$1._req('css.' + type, true);
	      css = parser(tag, css, opts.parserOpts || {}, opts.url);
	    }
	  }
	
	  css = css.replace(brackets.R_MLCOMMS, '').replace(/\s+/g, ' ').trim();
	  if (tag) { css = scopedCSS(tag, css); }
	
	  return css
	}
	
	function compileCSS (css, type, opts) {
	  if (type && typeof type === 'object') {
	    opts = type;
	    type = '';
	  } else if (!opts) { opts = {}; }
	
	  return _compileCSS(css, opts.tagName, type, opts)
	}
	
	var TYPE_ATTR = /\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i;
	
	var MISC_ATTR = '\\s*=\\s*(' + S_STRINGS + '|{[^}]+}|\\S+)';
	
	var END_TAGS = /\/>\n|^<(?:\/?-?[A-Za-z][-\w\xA0-\xFF]*\s*|-?[A-Za-z][-\w\xA0-\xFF]*\s+[-\w:\xA0-\xFF][\S\s]*?)>\n/;
	
	function _q (s, r) {
	  if (!s) { return "''" }
	  s = SQ + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + SQ;
	  return r && ~s.indexOf('\n') ? s.replace(/\n/g, '\\n') : s
	}
	
	function mktag (name, html, css, attr, js, imports, opts) {
	  var
	    c = opts.debug ? ',\n  ' : ', ',
	    s = '});';
	
	  if (js && js.slice(-1) !== '\n') { s = '\n' + s; }
	
	  return imports + 'riot.tag2(\'' + name + SQ +
	    c + _q(html, 1) +
	    c + _q(css) +
	    c + _q(attr) + ', function(opts) {\n' + js + s
	}
	
	function splitBlocks (str) {
	  if (/<[-\w]/.test(str)) {
	    var
	      m,
	      k = str.lastIndexOf('<'),
	      n = str.length;
	
	    while (~k) {
	      m = str.slice(k, n).match(END_TAGS);
	      if (m) {
	        k += m.index + m[0].length;
	        m = str.slice(0, k);
	        if (m.slice(-5) === '<-/>\n') { m = m.slice(0, -5); }
	        return [m, str.slice(k)]
	      }
	      n = k;
	      k = str.lastIndexOf('<', k - 1);
	    }
	  }
	  return ['', str]
	}
	
	function getType (attribs) {
	  if (attribs) {
	    var match = attribs.match(TYPE_ATTR);
	
	    match = match && (match[2] || match[3]);
	    if (match) {
	      return match.replace('text/', '')
	    }
	  }
	  return ''
	}
	
	function getAttrib (attribs, name) {
	  if (attribs) {
	    var match = attribs.match(RegExp('\\s' + name + MISC_ATTR, 'i'));
	
	    match = match && match[1];
	    if (match) {
	      return (/^['"]/).test(match) ? match.slice(1, -1) : match
	    }
	  }
	  return ''
	}
	
	function unescapeHTML (str) {
	  return str
	          .replace(/&amp;/g, '&')
	          .replace(/&lt;/g, '<')
	          .replace(/&gt;/g, '>')
	          .replace(/&quot;/g, '"')
	          .replace(/&#039;/g, '\'')
	}
	
	function getParserOptions (attribs) {
	  var opts = unescapeHTML(getAttrib(attribs, 'options'));
	
	  return opts ? JSON.parse(opts) : null
	}
	
	function getCode (code, opts, attribs, base) {
	  var
	    type = getType(attribs),
	    src  = getAttrib(attribs, 'src'),
	    jsParserOptions = extend$1({}, opts.parserOptions.js);
	
	  if (src) { return false }
	
	  return _compileJS(
	          code,
	          opts,
	          type,
	          extend$1(jsParserOptions, getParserOptions(attribs)),
	          base
	        )
	}
	
	function cssCode (code, opts, attribs, url, tag) {
	  var
	    parserStyleOptions = extend$1({}, opts.parserOptions.style),
	    extraOpts = {
	      parserOpts: extend$1(parserStyleOptions, getParserOptions(attribs)),
	      url: url
	    };
	
	  return _compileCSS(code, tag, getType(attribs) || opts.style, extraOpts)
	}
	
	function compileTemplate (html, url, lang, opts) {
	
	  var parser = parsers$1._req('html.' + lang, true);
	  return parser(html, opts, url)
	}
	
	var CUST_TAG = RegExp(/^([ \t]*)<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^'"\/>]+(?:(?:@|\/[^>])[^'"\/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\S\s]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/
	    .source.replace('@', S_STRINGS), 'gim');
	var SCRIPTS = /<script(\s+[^>]*)?>\n?([\S\s]*?)<\/script\s*>/gi;
	var STYLES = /<style(\s+[^>]*)?>\n?([\S\s]*?)<\/style\s*>/gi;
	
	function compile$1 (src, opts, url) {
	  var
	    parts = [],
	    included,
	    defaultParserptions = {
	
	      template: {},
	      js: {},
	      style: {}
	    };
	
	  if (!opts) { opts = {}; }
	
	  opts.parserOptions = extend$1(defaultParserptions, opts.parserOptions || {});
	
	  included = opts.exclude
	    ? function (s) { return opts.exclude.indexOf(s) < 0 } : function () { return 1 };
	
	  if (!url) { url = ''; }
	
	  var _bp = brackets.array(opts.brackets);
	
	  if (opts.template) {
	    src = compileTemplate(src, url, opts.template, opts.parserOptions.template);
	  }
	
	  src = cleanSource(src)
	    .replace(CUST_TAG, function (_, indent, tagName, attribs, body, body2) {
	      var
	        jscode = '',
	        styles = '',
	        html = '',
	        imports = '',
	        pcex = [];
	
	      pcex._bp = _bp;
	
	      tagName = tagName.toLowerCase();
	
	      attribs = attribs && included('attribs')
	        ? restoreExpr(
	            parseAttribs(
	              splitHtml(attribs, opts, pcex),
	            pcex),
	          pcex) : '';
	
	      if ((body || (body = body2)) && /\S/.test(body)) {
	
	        if (body2) {
	
	          if (included('html')) { html = _compileHTML(body2, opts, pcex); }
	        } else {
	
	          body = body.replace(RegExp('^' + indent, 'gm'), '');
	
	          body = body.replace(STYLES, function (_m, _attrs, _style) {
	            if (included('css')) {
	              styles += (styles ? ' ' : '') + cssCode(_style, opts, _attrs, url, tagName);
	            }
	            return ''
	          });
	
	          body = body.replace(SCRIPTS, function (_m, _attrs, _script) {
	            if (included('js')) {
	              var code = getCode(_script, opts, _attrs, url);
	
	              if (code) { jscode += (jscode ? '\n' : '') + code; }
	            }
	            return ''
	          });
	
	          var blocks = splitBlocks(body.replace(TRIM_TRAIL, ''));
	
	          if (included('html')) {
	            html = _compileHTML(blocks[0], opts, pcex);
	          }
	
	          if (included('js')) {
	            body = _compileJS(blocks[1], opts, null, null, url);
	            if (body) { jscode += (jscode ? '\n' : '') + body; }
	            jscode = jscode.replace(IMPORT_STATEMENT, function (s) {
	              imports += s.trim() + '\n';
	              return ''
	            });
	          }
	        }
	      }
	
	      jscode = /\S/.test(jscode) ? jscode.replace(/\n{3,}/g, '\n\n') : '';
	
	      if (opts.entities) {
	        parts.push({
	          tagName: tagName,
	          html: html,
	          css: styles,
	          attribs: attribs,
	          js: jscode,
	          imports: imports
	        });
	        return ''
	      }
	
	      return mktag(tagName, html, styles, attribs, jscode, imports, opts)
	    });
	
	  if (opts.entities) { return parts }
	
	  return src
	}
	
	var version = 'v3.1.1';
	
	var compiler = {
	  compile: compile$1,
	  compileHTML: compileHTML,
	  compileCSS: compileCSS,
	  compileJS: compileJS,
	  parsers: parsers$1,
	  version: version
	};
	
	var promise;
	var ready;       // all the scripts were compiled?
	
	// gets the source of an external tag with an async call
	function GET (url, fn, opts) {
	  var req = new XMLHttpRequest();
	
	  req.onreadystatechange = function () {
	    if (req.readyState === 4 &&
	       (req.status === 200 || !req.status && req.responseText.length)) {
	      fn(req.responseText, opts, url);
	    }
	  };
	  req.open('GET', url, true);
	  req.send('');
	}
	
	// evaluates a compiled tag within the global context
	function globalEval (js, url) {
	  if (typeof js === T_STRING) {
	    var
	      node = mkEl('script'),
	      root = document.documentElement;
	
	    // make the source available in the "(no domain)" tab
	    // of Chrome DevTools, with a .js extension
	    if (url) { js += '\n//# sourceURL=' + url + '.js'; }
	
	    node.text = js;
	    root.appendChild(node);
	    root.removeChild(node);
	  }
	}
	
	// compiles all the internal and external tags on the page
	function compileScripts (fn, xopt) {
	  var
	    scripts = $$('script[type="riot/tag"]'),
	    scriptsAmount = scripts.length;
	
	  function done() {
	    promise.trigger('ready');
	    ready = true;
	    if (fn) { fn(); }
	  }
	
	  function compileTag (src, opts, url) {
	    var code = compiler.compile(src, opts, url);
	
	    globalEval(code, url);
	    if (!--scriptsAmount) { done(); }
	  }
	
	  if (!scriptsAmount) { done(); }
	  else {
	    for (var i = 0; i < scripts.length; ++i) {
	      var
	        script = scripts[i],
	        opts = extend({template: getAttr(script, 'template')}, xopt),
	        url = getAttr(script, 'src') || getAttr(script, 'data-src');
	
	      url ? GET(url, compileTag, opts) : compileTag(script.innerHTML, opts);
	    }
	  }
	}
	
	var parsers = compiler.parsers;
	
	/*
	  Compilation for the browser
	*/
	var compile = function (arg, fn, opts) {
	
	  if (typeof arg === T_STRING) {
	
	    // 2nd parameter is optional, but can be null
	    if (isObject(fn)) {
	      opts = fn;
	      fn = false;
	    }
	
	    // `riot.compile(tag [, callback | true][, options])`
	    if (/^\s*</m.test(arg)) {
	      var js = compiler.compile(arg, opts);
	      if (fn !== true) { globalEval(js); }
	      if (isFunction(fn)) { fn(js, arg, opts); }
	      return js
	    }
	
	    // `riot.compile(url [, callback][, options])`
	    GET(arg, function (str, opts, url) {
	      var js = compiler.compile(str, opts, url);
	      globalEval(js, url);
	      if (fn) { fn(js, str, opts); }
	    }, opts);
	
	  } else if (isArray(arg)) {
	    var i = arg.length;
	    // `riot.compile([urlsList] [, callback][, options])`
	    arg.forEach(function(str) {
	      GET(str, function (str, opts, url) {
	        var js = compiler.compile(str, opts, url);
	        globalEval(js, url);
	        i --;
	        if (!i && fn) { fn(js, str, opts); }
	      }, opts);
	    });
	  } else {
	
	    // `riot.compile([callback][, options])`
	    if (isFunction(arg)) {
	      opts = fn;
	      fn = arg;
	    } else {
	      opts = arg;
	      fn = undefined;
	    }
	
	    if (ready) {
	      return fn && fn()
	    }
	
	    if (promise) {
	      if (fn) { promise.on('ready', fn); }
	
	    } else {
	      promise = observable$1();
	      compileScripts(fn, opts);
	    }
	  }
	
	};
	
	function mount$$1() {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];
	
	  var ret;
	  compile(function () { ret = mount$1.apply(riot$2, args); });
	  return ret
	}
	
	var riot_compiler = extend({}, riot$2, {
	  mount: mount$$1,
	  compile: compile,
	  parsers: parsers
	});
	
	return riot_compiler;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(220);
	__webpack_require__(222);
	// import './carousel';
	// import './category-menu';
	__webpack_require__(228);
	__webpack_require__(238);
	__webpack_require__(241);
	__webpack_require__(244);
	__webpack_require__(247);
	__webpack_require__(250);
	__webpack_require__(254);
	__webpack_require__(257);
	__webpack_require__(259);
	__webpack_require__(263);
	__webpack_require__(272);
	__webpack_require__(275);
	__webpack_require__(285);
	__webpack_require__(291);
	__webpack_require__(296);
	__webpack_require__(299);
	__webpack_require__(302);
	__webpack_require__(305);
	__webpack_require__(308);
	__webpack_require__(311);
	__webpack_require__(324);
	__webpack_require__(331);
	__webpack_require__(334);
	__webpack_require__(337);
	__webpack_require__(340);
	__webpack_require__(348);


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(221);


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-badge', '<span><yield></yield></span>', 'gb-badge.gb-stylish > span,[data-is="gb-badge"].gb-stylish > span{ display: inline-block; min-width: 10px; max-height: 20px; padding: 4px 7px; border-radius: 10px; font-size: 12px; font-weight: bold; line-height: 1; color: #fff; background-color: #ccc; text-align: center; white-space: nowrap; vertical-align: middle; }', '', function (opts) {});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(223);
	__webpack_require__(226);
	__webpack_require__(227);


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbBreadcrumbs = __webpack_require__(224);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-breadcrumbs', '<yield> <div class="gb-breadcrumbs"> <gb-query-crumb if="{!$breadcrumbs.hideQuery}"></gb-query-crumb> <gb-list if="{!$breadcrumbs.hideRefinements}" item-alias="navigation"> <gb-list class="gb-navigation-crumb" items="{$navigation.refinements}" item-alias="refinement" inline> <gb-refinement-crumb></gb-refinement-crumb> </gb-list> </gb-list> </div> </yield>', 'gb-breadcrumbs.gb-stylish > .gb-breadcrumbs,[data-is="gb-breadcrumbs"].gb-stylish > .gb-breadcrumbs{ display: flex; justify-content: flex-start; align-items: baseline; }', '', function (opts) {
	    this._mixin(_gbBreadcrumbs.Breadcrumbs);
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	exports.META = {
	    defaults: {
	        labels: true,
	        resultsLabel: 'Results for:',
	        noResultsLabel: 'No results for:',
	        correctedResultsLabel: 'Showing results for:'
	    },
	    types: {
	        hideQuery: 'boolean',
	        hideRefinements: 'boolean',
	        labels: 'boolean'
	    }
	};
	var Breadcrumbs = (function (_super) {
	    __extends(Breadcrumbs, _super);
	    function Breadcrumbs() {
	        _super.apply(this, arguments);
	    }
	    Breadcrumbs.prototype.init = function () {
	        this.expose(['breadcrumbs', 'listable']);
	        this.mixin({ toView: common_1.displayRefinement });
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateQueryState);
	        this.flux.on(groupby_api_1.Events.RESET, this.clearRefinements);
	    };
	    Breadcrumbs.prototype.clearRefinements = function () {
	        this.update({ items: [] });
	    };
	    Breadcrumbs.prototype.updateQueryState = function (_a) {
	        var items = _a.selectedNavigation, originalQuery = _a.originalQuery, correctedQuery = _a.correctedQuery;
	        this.update({ items: items, originalQuery: originalQuery, correctedQuery: correctedQuery });
	    };
	    Breadcrumbs.prototype.remove = function (refinement, navigation) {
	        this.flux.unrefine(common_1.toRefinement(refinement, navigation));
	    };
	    Breadcrumbs = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Breadcrumbs);
	    return Breadcrumbs;
	}(tag_1.FluxTag));
	exports.Breadcrumbs = Breadcrumbs;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	function meta(meta) {
	    return function (tagClass) {
	        tagClass[tag_1.META] = meta;
	    };
	}
	exports.meta = meta;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-query-crumb', '<div if="{$breadcrumbs.originalQuery}"> <span if="{!$breadcrumbs.correctedQuery && $breadcrumbs.labels}" class="gb-query-label">{$breadcrumbs.resultsLabel}</span> <span if="{$breadcrumbs.correctedQuery && $breadcrumbs.labels}" class="gb-query-label">{$breadcrumbs.noResultsLabel}</span> <span class="gb-original-query">{$breadcrumbs.originalQuery}</span> </div> <div if="{$breadcrumbs.correctedQuery}"> <span if="{$breadcrumbs.labels}" class="gb-query-label">{$breadcrumbs.correctedResultsLabel}</span> <span class="gb-corrected-query">{$breadcrumbs.correctedQuery}</span> </div>', '', '', function (opts) {});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-refinement-crumb', '<a onclick="{remove}">&times;</a> <b>{$navigation.displayName}: {$breadcrumbs.toView($refinement)}</b>', '', '', function (opts) {
	    var _this = this;
	
	    this.remove = function () {
	        return _this.$breadcrumbs.remove(_this.$refinement, _this.$navigation);
	    };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(229);
	__webpack_require__(231);
	__webpack_require__(232);


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbCollectionDropdownItem = __webpack_require__(230);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-collection-dropdown-item', '<a class="gb-collection" onclick="{selectDropdown}"> <span class="gb-collection__name">{$item.label || $item}</span> <gb-badge>{$collections.counts[$item.value || $item]}</gb-badge> </a>', 'gb-collection-dropdown-item.gb-stylish > a,[data-is="gb-collection-dropdown-item"].gb-stylish > a{ white-space: nowrap; }', '', function (opts) {
	    this._mixin(_gbCollectionDropdownItem.CollectionDropdownItem);
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var CollectionDropdownItem = (function (_super) {
	    __extends(CollectionDropdownItem, _super);
	    function CollectionDropdownItem() {
	        _super.apply(this, arguments);
	    }
	    CollectionDropdownItem.prototype.selectDropdown = function () {
	        this.$select.selectCustom({
	            label: this.$item.label || this.$item,
	            value: this.$item.value || this.$item
	        });
	    };
	    return CollectionDropdownItem;
	}(tag_1.FluxTag));
	exports.CollectionDropdownItem = CollectionDropdownItem;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-collection-item', '<a class="gb-collection" data-collection="{$item.value || $item}" onclick="{$collections.switchCollection}"> <span class="gb-collection__name">{$item.label || $item}</span> <gb-badge if="{$collections.showCounts}">{$collections.counts[$item.value || $item]}</gb-badge> </a>', '', '', function (opts) {});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbCollections = __webpack_require__(233);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-collections', '<yield> <gb-list class="gb-collections" if="{!$collections.dropdown}" inline> <gb-collection-item></gb-collection-item> </gb-list> <gb-select if="{$collections.dropdown}"> <gb-custom-select> <gb-collection-dropdown-item></gb-collection-dropdown-item> </gb-custom-select> </gb-select> </yield>', 'gb-collections.gb-stylish gb-custom-select gb-list > ul > li,[data-is="gb-collections"].gb-stylish gb-custom-select gb-list > ul > li{ padding: 4px 10px; }', '', function (opts) {
	    this._mixin(_gbCollections.Collections);
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(59);
	var decorators_1 = __webpack_require__(225);
	var gb_select_1 = __webpack_require__(234);
	exports.META = {
	    defaults: {
	        items: [],
	        showCounts: true
	    },
	    types: {
	        showCounts: 'boolean',
	        dropdown: 'boolean'
	    },
	    services: ['collections']
	};
	var Collections = (function (_super) {
	    __extends(Collections, _super);
	    function Collections() {
	        _super.apply(this, arguments);
	    }
	    Collections.prototype.init = function () {
	        this.expose(['collections', 'listable', 'selectable']);
	        this.flux.on(collections_1.COLLECTIONS_UPDATED_EVENT, this.updateCounts);
	    };
	    Collections.prototype.setDefaults = function () {
	        this.counts = {};
	    };
	    Collections.prototype.updateCounts = function (counts) {
	        this.update({ counts: counts });
	    };
	    Collections.prototype.switchCollection = function (_a) {
	        var currentTarget = _a.currentTarget;
	        this.onSelect(currentTarget.dataset['collection']);
	    };
	    Collections.prototype.onSelect = function (collection) {
	        this.flux.switchCollection(collection);
	    };
	    Collections = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Collections);
	    return Collections;
	}(gb_select_1.SelectTag));
	exports.Collections = Collections;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gb_link_list_1 = __webpack_require__(235);
	var tag_1 = __webpack_require__(207);
	var SelectTag = (function (_super) {
	    __extends(SelectTag, _super);
	    function SelectTag() {
	        _super.apply(this, arguments);
	    }
	    return SelectTag;
	}(gb_link_list_1.LinkTag));
	exports.SelectTag = SelectTag;
	exports.DEFAULTS = {
	    items: [],
	    iconUrl: __webpack_require__(237),
	    label: 'Select'
	};
	exports.TYPES = {
	    hover: 'boolean',
	    native: 'boolean'
	};
	var Select = (function (_super) {
	    __extends(Select, _super);
	    function Select() {
	        _super.apply(this, arguments);
	    }
	    Select.prototype.init = function () {
	        this.expose('select');
	        this.transform('selectable', ['linkable', 'listable'], { defaults: exports.DEFAULTS, types: exports.TYPES });
	        this.on('update', this.setClearItem);
	    };
	    Select.prototype.setDefaults = function () {
	        this.clearItem = { label: this.$selectable.clear || 'Unselect', clear: true };
	        this.default = !this.$selectable.clear;
	        if (this.default) {
	            var items = this.$selectable.items;
	            this.selectedItem = typeof items[0] === 'object' ? items[0].label : items[0];
	        }
	    };
	    Select.prototype.setClearItem = function () {
	        if (!this.default && !this.$selectable.items.includes(this.clearItem)) {
	            this.$selectable.items.unshift(this.clearItem);
	        }
	    };
	    Select.prototype.selectLabel = function () {
	        return this.selectedItem || (this.selected ? this.clearItem : this.$selectable.label);
	    };
	    Select.prototype.prepFocus = function () {
	        return this.focused = false;
	    };
	    Select.prototype.selectButton = function () {
	        return this.tags['gb-custom-select'].tags['gb-select-button'].root;
	    };
	    Select.prototype.nativeSelect = function () {
	        if (this.tags['gb-native-select']) {
	            return this.tags['gb-native-select'].refs.selector;
	        }
	        else {
	            return this.root.querySelector('select');
	        }
	    };
	    Select.prototype.focusElement = function (e) {
	        e.preventUpdate = true;
	        this.selectButton().focus();
	    };
	    Select.prototype.unfocus = function () {
	        this.focused = this.$selectable.hover || !this.focused;
	        if (!this.focused) {
	            this.selectButton().blur();
	        }
	    };
	    Select.prototype.selectItem = function (selectedItem, value) {
	        this.update({ selectedItem: selectedItem });
	        if (this.$selectable.onSelect) {
	            try {
	                this.$selectable.onSelect(JSON.parse(value));
	            }
	            catch (e) {
	                this.$selectable.onSelect(value || '*');
	            }
	        }
	    };
	    Select.prototype.selectNative = function (_a) {
	        var target = _a.target;
	        var item = Array.from(target.selectedOptions)[0];
	        var selected = item.value;
	        this.nativeSelect().options[0].disabled = !selected;
	        this.update({ selected: selected });
	        this.selectItem(item.text, selected);
	    };
	    Select.prototype.selectCustom = function (_a) {
	        var value = _a.value, label = _a.label;
	        this.selectButton().blur();
	        this.selectItem(label, value);
	    };
	    Select.prototype.clearSelection = function () {
	        return this.selectItem(undefined, '*');
	    };
	    Select.prototype.itemValue = function (item) {
	        return typeof item === 'object' ? JSON.stringify(item.value) : item;
	    };
	    Select.prototype.itemLabel = function (item) {
	        return typeof item === 'object' ? item.label : item;
	    };
	    Select.prototype.shouldRender = function (item) {
	        return !item.clear || this.selectedItem;
	    };
	    return Select;
	}(tag_1.FluxTag));
	exports.Select = Select;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gb_list_1 = __webpack_require__(236);
	var tag_1 = __webpack_require__(207);
	var LinkTag = (function (_super) {
	    __extends(LinkTag, _super);
	    function LinkTag() {
	        _super.apply(this, arguments);
	    }
	    return LinkTag;
	}(gb_list_1.ListTag));
	exports.LinkTag = LinkTag;
	var LinkList = (function (_super) {
	    __extends(LinkList, _super);
	    function LinkList() {
	        _super.apply(this, arguments);
	    }
	    LinkList.prototype.init = function () {
	        this.transform('linkable', ['listable']);
	    };
	    return LinkList;
	}(tag_1.FluxTag));
	exports.LinkList = LinkList;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var ListTag = (function (_super) {
	    __extends(ListTag, _super);
	    function ListTag() {
	        _super.apply(this, arguments);
	    }
	    return ListTag;
	}(tag_1.FluxTag));
	exports.ListTag = ListTag;
	exports.DEFAULTS = {
	    itemAlias: 'item',
	    indexAlias: 'i'
	};
	exports.TYPES = {
	    inline: 'boolean'
	};
	var List = (function (_super) {
	    __extends(List, _super);
	    function List() {
	        _super.apply(this, arguments);
	    }
	    List.prototype.init = function () {
	        this.expose('list');
	        this.inherits('listable', { defaults: exports.DEFAULTS, types: exports.TYPES });
	    };
	    List.prototype.isActive = function (index) {
	        return this.$listable.activation && this.$listable.activation(index);
	    };
	    List.prototype.shouldRender = function (option) {
	        return !this.$listable.shouldRender || this.$listable.shouldRender(option);
	    };
	    return List;
	}(tag_1.FluxTag));
	exports.List = List;


/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQLyYwAAAAE3RSTlMADQ46Ozw9SElKS0y5x+zz9Pj5WslQRAAAAQdJREFUeJztzlcOwkAQBFFyxjbM/e9KFsbrNGK3V6Cq/1a/yYSIiIiIiIiIiIiIfqRp8kF/q2LtG+yLedT/yk4uwf5sZUTBsjJzCa7/FlFw//cI7v/xBMvSzCV4/scSLF7/ZueN6z+OoPY/TlD7jyI4mLkEH/9mh68Bs6NL0Pg/zr4G+AQJ/l2CJP8OQaL/ULAV/48UJPwfJUj6P0KQ+H9QkPx/QCD4DwU78X+PQPTfKZD9dwiE/60C6X+LQPwfCtT/gUD+3yfQ/HcLVP9dAt1/u0D53ybQ/ocC9X9ToP//FOT4rwvy/L8Fuf5fgnz/D0HO/5sg7/9VkPmfiIiIiIiIiIiIiP6gC0vzP5P1npi3AAAAAElFTkSuQmCC"

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(239);


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbDetails = __webpack_require__(240);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-details', '<div class="gb-details"> <gb-product> <yield></yield> </gb-product> </div>', '', '', function (opts) {
	    this._mixin(_gbDetails.Details);
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var product_transformer_1 = __webpack_require__(174);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	exports.META = {
	    defaults: { idParam: 'id' }
	};
	var Details = (function (_super) {
	    __extends(Details, _super);
	    function Details() {
	        _super.apply(this, arguments);
	    }
	    Details.prototype.init = function () {
	        this.flux.on(groupby_api_1.Events.DETAILS, this.updateRecord);
	    };
	    Details.prototype.setDefaults = function (config) {
	        this.structure = config.structure || this.config.structure;
	        this.transformer = new product_transformer_1.ProductTransformer(this.structure);
	        this.requestDetails();
	    };
	    Details.prototype.requestDetails = function () {
	        var query = common_1.getParam(this.idParam);
	        if (query) {
	            this.flux.details(query, this.transformer.idField);
	        }
	    };
	    Details.prototype.updateRecord = function (_a) {
	        var allMeta = _a.allMeta;
	        this.tags['gb-product'].updateRecord(allMeta);
	        this.tags['gb-product'].update();
	    };
	    Details = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Details);
	    return Details;
	}(tag_1.FluxTag));
	exports.Details = Details;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(242);


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbDidYouMean = __webpack_require__(243);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-did-you-mean', '<yield> <gb-link-list inline></gb-link-list> </yield>', '', '', function (opts) {
	    this._mixin(_gbDidYouMean.DidYouMean);
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gb_link_list_1 = __webpack_require__(235);
	var groupby_api_1 = __webpack_require__(125);
	var DidYouMean = (function (_super) {
	    __extends(DidYouMean, _super);
	    function DidYouMean() {
	        _super.apply(this, arguments);
	    }
	    DidYouMean.prototype.init = function () {
	        this.expose('linkable');
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateDidYouMean);
	    };
	    DidYouMean.prototype.onSelect = function (event) {
	        var _this = this;
	        return this.flux.rewrite(event.target.text)
	            .then(function () { return _this.services.tracker && _this.services.tracker.didYouMean(); });
	    };
	    DidYouMean.prototype.updateDidYouMean = function (_a) {
	        var items = _a.didYouMean;
	        this.update({ items: items });
	    };
	    return DidYouMean;
	}(gb_link_list_1.LinkTag));
	exports.DidYouMean = DidYouMean;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(245);


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbFilter = __webpack_require__(246);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-filter', '<yield> <gb-select></gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbFilter.Filter);
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var filter_1 = __webpack_require__(171);
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var gb_select_1 = __webpack_require__(234);
	exports.META = {
	    defaults: {
	        label: 'Filter',
	        clear: 'Unfiltered'
	    }
	};
	var Filter = (function (_super) {
	    __extends(Filter, _super);
	    function Filter() {
	        _super.apply(this, arguments);
	    }
	    Filter.prototype.init = function () {
	        this.expose('selectable');
	        this.flux.on(filter_1.FILTER_UPDATED_EVENT, this.updateValues);
	        this.register('filter');
	    };
	    Filter.prototype.convertRefinements = function (navigations) {
	        var _this = this;
	        var found = navigations.find(function (_a) {
	            var name = _a.name;
	            return _this.services.filter.isTargetNav(name);
	        });
	        return found ? found.refinements.map(function (ref) { return ({ label: ref.value, value: ref }); }) : [];
	    };
	    Filter.prototype.updateValues = function (res) {
	        this.update({ items: this.convertRefinements(res.availableNavigation) });
	    };
	    Filter.prototype.onSelect = function (value) {
	        if (this.selected) {
	            this.flux.unrefine(this.selected, { skipSearch: true });
	        }
	        if (value === '*') {
	            this.flux.reset();
	        }
	        else {
	            this.flux.refine(this.selected = common_1.toRefinement(value, { name: this.field }));
	        }
	    };
	    Filter = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Filter);
	    return Filter;
	}(gb_select_1.SelectTag));
	exports.Filter = Filter;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(248);


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbIcon = __webpack_require__(249);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-icon', '<i if="{classes}" class="{classes}"></i> <img if="{url}" riot-src="{url}"></img>', '', '', function (opts) {
	    this._mixin(_gbIcon.Icon);
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	exports.IMAGE_PATTERN = /.*\..*/;
	exports.DATA_URL_PREFIX = 'data:image/';
	var Icon = (function (_super) {
	    __extends(Icon, _super);
	    function Icon() {
	        _super.apply(this, arguments);
	    }
	    Icon.prototype.init = function () {
	        this.on('update', this.setImage);
	    };
	    Icon.prototype.setDefaults = function () {
	        this.setImage();
	    };
	    Icon.prototype.setImage = function () {
	        if (this.isImage(this.opts.img)) {
	            this.url = this.opts.img;
	            delete this.classes;
	        }
	        else {
	            this.classes = this.opts.img;
	            delete this.url;
	        }
	    };
	    Icon.prototype.isImage = function (img) {
	        var matches = img.match(exports.IMAGE_PATTERN);
	        return (matches && matches.length > 0) || img.startsWith(exports.DATA_URL_PREFIX);
	    };
	    return Icon;
	}(tag_1.FluxTag));
	exports.Icon = Icon;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(251);


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbInfiniteScroll = __webpack_require__(252);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-infinite-scroll', '<ul ref="scroller" class="gb-scroller"> <div ref="runway" class="gb-runway"></div> </ul>', 'gb-infinite-scroll .gb-scroller,[data-is="gb-infinite-scroll"] .gb-scroller{ margin: 0; padding: 0; overflow-x: hidden; overflow-y: scroll; -webkit-overflow-scrolling: touch; width: 100%; height: 100%; position: absolute; box-sizing: border-box; contain: layout; will-change: transform; } gb-infinite-scroll .gb-runway,[data-is="gb-infinite-scroll"] .gb-runway{ position: absolute; height: 1px; width: 1px; transition: transform 0.2s; }', '', function (opts) {
	    this._mixin(_gbInfiniteScroll.InfiniteScroll);
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var renderer_1 = __webpack_require__(253);
	var groupby_api_1 = __webpack_require__(125);
	exports.MIN_REQUEST_SIZE = 25;
	exports.MAX_REQUEST_SIZE = 120;
	exports.META = {
	    defaults: {
	        maxRecords: 500
	    }
	};
	var InfiniteScroll = (function (_super) {
	    __extends(InfiniteScroll, _super);
	    function InfiniteScroll() {
	        _super.apply(this, arguments);
	    }
	    InfiniteScroll.prototype.init = function () {
	        common_1.WINDOW.addEventListener('resize', this.onResize);
	        this.flux.on(groupby_api_1.Events.QUERY_CHANGED, this.reset);
	        this.flux.on(groupby_api_1.Events.REFINEMENTS_CHANGED, this.reset);
	        this.flux.on(groupby_api_1.Events.SORT, this.reset);
	        this.flux.on(groupby_api_1.Events.COLLECTION_CHANGED, this.reset);
	        this.on('mount', this.onMount);
	    };
	    InfiniteScroll.prototype.setDefaults = function () {
	        this.items = [];
	        this.loadedItems = 0;
	        this.runwayEnd = 0;
	    };
	    InfiniteScroll.prototype.onMount = function () {
	        this.refs.scroller.addEventListener('scroll', this.onScroll);
	        this.onResize();
	    };
	    InfiniteScroll.prototype.reset = function () {
	        this.items = [];
	        this.loadedItems = 0;
	        this.runwayEnd = 0;
	        this.anchorScrollTop = 0;
	        this.oldScroll = 0;
	        while (this.refs.scroller.hasChildNodes()) {
	            this.refs.scroller.removeChild(this.refs.scroller.lastChild);
	        }
	        this.attachRenderer();
	    };
	    InfiniteScroll.prototype.onScroll = function () {
	        if (this.oldScroll !== this.refs.scroller.scrollTop) {
	            this.attachRenderer();
	        }
	        this.oldScroll = this.refs.scroller.scrollTop;
	    };
	    InfiniteScroll.prototype.attachRenderer = function () {
	        new renderer_1.Renderer(this).attachToView();
	    };
	    InfiniteScroll.prototype.onResize = function () {
	        var tombstone = renderer_1.Renderer.createTombstone(this.config.structure);
	        this.refs.scroller.appendChild(tombstone);
	        this.tombstoneLayout = {
	            height: tombstone.offsetHeight,
	            width: tombstone.offsetWidth
	        };
	        tombstone._tag.unmount();
	        this.items.forEach(function (item) { return item.height = item.width = 0; });
	        this.attachRenderer();
	    };
	    InfiniteScroll.prototype.capRecords = function (items) {
	        if (this.flux.results) {
	            return Math.min(items, this.flux.results.totalRecordCount);
	        }
	        else {
	            return items;
	        }
	    };
	    InfiniteScroll.prototype.maybeRequestContent = function (renderer) {
	        var _this = this;
	        var itemsNeeded = this.capRecords(renderer.lastItem) - this.loadedItems;
	        if (itemsNeeded <= 0) {
	            return;
	        }
	        if (this.updating) {
	            return;
	        }
	        this.updating = true;
	        this.fetch(itemsNeeded)
	            .then(function (records) { return _this.updateItems(records, renderer); });
	    };
	    InfiniteScroll.prototype.fetch = function (count) {
	        var request = this.flux.query.build();
	        request.pageSize = Math.min(exports.MAX_REQUEST_SIZE, Math.max(exports.MIN_REQUEST_SIZE, count));
	        request.skip = this.loadedItems;
	        return this.flux.bridge.search(request)
	            .then(function (res) { return res.records; });
	    };
	    InfiniteScroll.prototype.updateItems = function (records, renderer) {
	        var _this = this;
	        records.forEach(function (record) {
	            if (_this.items.length <= _this.loadedItems) {
	                _this.addBlankItem();
	            }
	            _this.items[_this.loadedItems++].data = record;
	        });
	        this.updating = false;
	        renderer.attachToView();
	    };
	    InfiniteScroll.prototype.addBlankItem = function () {
	        this.items.push({
	            data: null,
	            node: null,
	            height: 0,
	            width: 0,
	            top: 0,
	        });
	    };
	    InfiniteScroll = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], InfiniteScroll);
	    return InfiniteScroll;
	}(tag_1.FluxTag));
	exports.InfiniteScroll = InfiniteScroll;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var riot = __webpack_require__(217);
	exports.ANIMATION_DURATION_MS = 200;
	exports.RUNWAY_ITEMS_ABOVE = 10;
	exports.RUNWAY_ITEMS_BELOW = 50;
	exports.RUNWAY_LENGTH = 2000;
	var Renderer = (function () {
	    function Renderer(tag) {
	        this.tag = tag;
	        this.tombstones = [];
	        this.unusedNodes = [];
	        this.tombstoneHeight = tag.tombstoneLayout.height;
	        this.tombstoneWidth = tag.tombstoneLayout.width;
	        var delta = this.tag.refs.scroller.scrollTop - this.tag.anchorScrollTop;
	        this.initAnchorScrollTop(delta);
	        this.calculateVisibleItems(delta);
	    }
	    Renderer.prototype.initAnchorScrollTop = function (delta) {
	        if (this.tag.refs.scroller.scrollTop === 0) {
	            this.tag.anchor = { index: 0, offset: 0 };
	        }
	        else {
	            this.tag.anchor = this.getAnchoredItem(this.tag.anchor, delta);
	        }
	        this.tag.anchorScrollTop = this.tag.refs.scroller.scrollTop;
	    };
	    Renderer.prototype.calculateVisibleItems = function (delta) {
	        var lastScreenItem = this.getAnchoredItem(this.tag.anchor, this.tag.refs.scroller.offsetHeight);
	        var firstItem;
	        if (delta < 0) {
	            firstItem = this.tag.anchor.index - exports.RUNWAY_ITEMS_BELOW;
	            this.lastItem = this.tag.capRecords(lastScreenItem.index + exports.RUNWAY_ITEMS_ABOVE);
	        }
	        else {
	            firstItem = this.tag.anchor.index - exports.RUNWAY_ITEMS_ABOVE;
	            this.lastItem = this.tag.capRecords(lastScreenItem.index + exports.RUNWAY_ITEMS_BELOW);
	        }
	        this.firstItem = Math.max(0, firstItem);
	    };
	    Renderer.prototype.getAnchoredItem = function (anchor, delta) {
	        if (delta === 0) {
	            return anchor;
	        }
	        var items = this.tag.items;
	        var index = anchor.index;
	        var tombstones = 0;
	        delta += anchor.offset;
	        if (delta < 0) {
	            while (delta < 0 && index > 0 && items[index - 1].height) {
	                delta += items[index - 1].height;
	                index--;
	            }
	            tombstones = Math.max(-index, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
	        }
	        else {
	            while (delta > 0 && index < items.length && items[index].height && items[index].height < delta) {
	                delta -= items[index].height;
	                index++;
	            }
	            if (index >= items.length || !items[index].height) {
	                tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
	            }
	        }
	        index += tombstones;
	        delta -= tombstones * this.tombstoneHeight;
	        return { index: index, offset: delta };
	    };
	    Renderer.prototype.attachToView = function () {
	        this.findUnusedNodes();
	        var animations = this.generateNodes();
	        this.dropUnusedNodes();
	        this.measureNodes();
	        this.calculateScrollTop();
	        this.calculateCurrentPosition();
	        this.preAnimateNodes(animations);
	        this.animateNodes(animations);
	        this.animateScroller();
	        this.collectTombstones(animations);
	        this.tag.maybeRequestContent(this);
	    };
	    Renderer.prototype.findUnusedNodes = function () {
	        var items = this.tag.items;
	        for (var i = 0; i < items.length; i++) {
	            if (i === this.firstItem) {
	                i = this.lastItem - 1;
	                continue;
	            }
	            if (items[i].node) {
	                this.sortNode(items[i].node);
	            }
	            items[i].node = null;
	        }
	    };
	    Renderer.prototype.dropUnusedNodes = function () {
	        while (this.unusedNodes.length) {
	            this.tag.refs.scroller.removeChild(this.unusedNodes.pop());
	        }
	    };
	    Renderer.prototype.sortNode = function (node) {
	        if (node.classList.contains('tombstone')) {
	            this.tombstones.push(node);
	            this.tombstones[this.tombstones.length - 1].classList.add('invisible');
	        }
	        else {
	            this.unusedNodes.push(node);
	        }
	    };
	    Renderer.prototype.measureNodes = function () {
	        this.tag.items.slice(this.firstItem, this.lastItem)
	            .filter(function (item) { return item.data && !item.height; })
	            .forEach(function (item) {
	            item.height = item.node.offsetHeight;
	            item.width = item.node.offsetWidth;
	        });
	    };
	    Renderer.prototype.calculateScrollTop = function () {
	        var _this = this;
	        this.tag.anchorScrollTop = 0;
	        this.tag.items.slice(0, this.tag.anchor.index)
	            .forEach(function (item) { return _this.tag.anchorScrollTop += item.height || _this.tombstoneHeight; });
	        this.tag.anchorScrollTop += this.tag.anchor.offset;
	    };
	    Renderer.prototype.calculateCurrentPosition = function () {
	        var currentPosition = this.tag.anchorScrollTop - this.tag.anchor.offset;
	        var index = this.tag.anchor.index;
	        while (index > this.firstItem) {
	            currentPosition -= this.tag.items[--index].height || this.tombstoneHeight;
	        }
	        while (index < this.firstItem) {
	            currentPosition += this.tag.items[index++].height || this.tombstoneHeight;
	        }
	        this.currentPosition = currentPosition;
	    };
	    Renderer.prototype.preAnimateNodes = function (animations) {
	        for (var _i = 0, _a = Object.keys(animations); _i < _a.length; _i++) {
	            var key = _a[_i];
	            var _b = animations[key], node = _b.node, delta = _b.delta;
	            var item = this.tag.items[key];
	            item.node.style.transform = "translateY(" + (this.tag.anchorScrollTop + delta) + "px) scale(" + this.tombstoneWidth / item.width + ", " + this.tombstoneHeight / item.height + ")"; // tslint:disable-line:max-line-length
	            item.node.offsetTop; // tslint:disable-line:no-unused-expression
	            node.offsetTop; // tslint:disable-line:no-unused-expression
	            item.node.style.transition = "transform " + exports.ANIMATION_DURATION_MS + "ms";
	        }
	    };
	    Renderer.prototype.animateNodes = function (animations) {
	        for (var i = this.firstItem; i < this.lastItem; i++) {
	            var item = this.tag.items[i];
	            var anim = animations[i];
	            if (anim) {
	                anim.node.style.transition = "transform " + exports.ANIMATION_DURATION_MS + "ms, opacity " + exports.ANIMATION_DURATION_MS + "ms";
	                anim.node.style.transform = "translateY(" + this.currentPosition + "px) scale(" + item.width / this.tombstoneWidth + ", " + item.height / this.tombstoneHeight + ")"; // tslint:disable-line:max-line-length
	                anim.node.style.opacity = '0';
	            }
	            if (this.currentPosition !== item.top) {
	                if (!anim) {
	                    item.node.style.transition = '';
	                }
	                item.node.style.transform = "translateY(" + this.currentPosition + "px)";
	            }
	            item.top = this.currentPosition;
	            this.currentPosition += item.height || this.tombstoneHeight;
	        }
	    };
	    Renderer.prototype.animateScroller = function () {
	        this.tag.runwayEnd = Math.max(this.tag.runwayEnd, this.currentPosition + exports.RUNWAY_LENGTH);
	        this.tag.refs.runway.style.transform = "translate(0, " + this.tag.runwayEnd + "px)";
	        this.tag.refs.scroller.scrollTop = this.tag.anchorScrollTop;
	    };
	    Renderer.prototype.collectTombstones = function (animations) {
	        var _this = this;
	        setTimeout(function () {
	            for (var _i = 0, _a = Object.keys(animations); _i < _a.length; _i++) {
	                var key = _a[_i];
	                var node = animations[key].node;
	                node.classList.add('invisible');
	                _this.tombstones.push(node);
	            }
	        }, exports.ANIMATION_DURATION_MS);
	    };
	    Renderer.prototype.generateNodes = function () {
	        var animations = {};
	        for (var i = this.firstItem; i < this.lastItem; i++) {
	            while (this.tag.items.length <= i) {
	                this.tag.addBlankItem();
	            }
	            var item = this.tag.items[i];
	            if (item.node) {
	                if (item.node.classList.contains('tombstone') && item.data) {
	                    item.node.style.zIndex = '1';
	                    animations[i] = {
	                        node: item.node,
	                        delta: item.top - this.tag.anchorScrollTop
	                    };
	                    item.node = null;
	                }
	                else {
	                    continue;
	                }
	            }
	            var node = void 0;
	            if (item.data) {
	                node = this.render(item.data, this.unusedNodes.pop());
	            }
	            else {
	                node = this.getTombstone();
	            }
	            node.style.position = 'absolute';
	            item.top = -1;
	            this.tag.refs.scroller.appendChild(node);
	            item.node = node;
	        }
	        return animations;
	    };
	    Renderer.prototype.getTombstone = function () {
	        var tombstone = this.tombstones.pop();
	        if (tombstone) {
	            tombstone.classList.remove('invisible');
	            tombstone.style.transform = '';
	            tombstone.style.transition = '';
	            return tombstone;
	        }
	        else {
	            return Renderer.createTombstone(this.tag.config.structure);
	        }
	    };
	    Renderer.prototype.render = function (data, elem) {
	        if (!elem) {
	            elem = Renderer.createTombstone(this.tag.config.structure);
	            elem.classList.remove('tombstone');
	        }
	        var tag = elem._tag;
	        tag.opts.allMeta = data.allMeta;
	        tag.update();
	        return elem;
	    };
	    Renderer.createTombstone = function (structure) {
	        var node = document.createElement('li');
	        riot.mount(node, 'gb-product', {
	            structure: structure,
	            infinite: true,
	            tombstone: true
	        });
	        return node;
	    };
	    return Renderer;
	}());
	exports.Renderer = Renderer;


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(255);


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbLazyImage = __webpack_require__(256);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-lazy-image', '<img class="gb-lazy-image" ref="lazyImage" src="//placehold.it/300x300">', 'gb-lazy-image img.gb-lazy-image,[data-is="gb-lazy-image"] img.gb-lazy-image{ width: 300px; height: 300px; }', '', function (opts) {
	    this._mixin(_gbLazyImage.LazyImage);
	});

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var tag_1 = __webpack_require__(207);
	var LazyImage = (function (_super) {
	    __extends(LazyImage, _super);
	    function LazyImage() {
	        _super.apply(this, arguments);
	    }
	    LazyImage.prototype.init = function () {
	        this.on('mount', this.maybeLoadImage);
	        this.on('update', this.maybeLoadImage);
	    };
	    LazyImage.prototype.maybeLoadImage = function () {
	        var imageUrl = this.$product.imageLink();
	        if (imageUrl && this.refs.lazyImage.src !== imageUrl) {
	            this.lazyLoad(imageUrl);
	        }
	    };
	    LazyImage.prototype.lazyLoad = function (imageUrl) {
	        return new Promise(function (resolve, reject) {
	            var image = common_1.WINDOW.Image();
	            image.src = imageUrl;
	            image.addEventListener('load', function () { return resolve(image); });
	            image.addEventListener('error', function () { return resolve(''); });
	        }).then(this.processImage);
	    };
	    LazyImage.prototype.processImage = function (image) {
	        if (this.refs.lazyImage) {
	            this.refs.lazyImage.src = image.src;
	            this.refs.lazyImage.height = image.height;
	            this.refs.lazyImage.width = image.width;
	        }
	    };
	    return LazyImage;
	}(tag_1.FluxTag));
	exports.LazyImage = LazyImage;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(258);


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbLinkList = __webpack_require__(235);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-link-list', '<gb-list> <a onclick="{$linkable.onSelect}">{$item}</a> </gb-list>', '', '', function (opts) {
	    this._mixin(_gbLinkList.LinkList);
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(260);
	__webpack_require__(262);


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbListItem = __webpack_require__(261);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-list-item', '<yield></yield>', '', '', function (opts) {
	    this._mixin(_gbListItem.ListItem);
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var ListItem = (function (_super) {
	    __extends(ListItem, _super);
	    function ListItem() {
	        _super.apply(this, arguments);
	    }
	    ListItem.prototype.init = function () {
	        this.expose(this.$listable.itemAlias, this.item);
	        this.expose(this.$listable.indexAlias, this.i);
	        if (this.$list.isActive(this.i)) {
	            this.root.classList.add('active');
	        }
	        this.unexpose('list');
	    };
	    return ListItem;
	}(tag_1.FluxTag));
	exports.ListItem = ListItem;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbList = __webpack_require__(236);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-list', '<ul class="{inline: $listable.inline}"> <li data-is="gb-list-item" each="{item, i in $listable.items}" if="{$list.shouldRender(item)}"> <yield></yield> </li> </ul>', 'gb-list.gb-stylish > ul,[data-is="gb-list"].gb-stylish > ul{ list-style: none; margin: 0; padding: 0; } gb-list.gb-stylish > ul > li,[data-is="gb-list"].gb-stylish > ul > li{ margin: 0 10px; } gb-list.gb-stylish > ul.inline > li,[data-is="gb-list"].gb-stylish > ul.inline > li{ display: inline-block; } gb-list.gb-stylish > ul a,[data-is="gb-list"].gb-stylish > ul a{ color: #888; cursor: pointer; } gb-list.gb-stylish > ul a:hover,[data-is="gb-list"].gb-stylish > ul a:hover{ color: black; }', '', function (opts) {
	    this._mixin(_gbList.List);
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(264);
	__webpack_require__(266);
	__webpack_require__(268);
	__webpack_require__(270);


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbMoreRefinements = __webpack_require__(265);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-more-refinements', '<yield> <a onclick="{loadMore}">More</a> </yield>', 'gb-more-refinements.gb-stylish a,[data-is="gb-more-refinements"].gb-stylish a{ cursor: pointer; color: #777; text-decoration: underline; } gb-more-refinements.gb-stylish a:hover,[data-is="gb-more-refinements"].gb-stylish a:hover{ color: black; }', '', function (opts) {
	    this._mixin(_gbMoreRefinements.MoreRefinements);
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var MoreRefinements = (function (_super) {
	    __extends(MoreRefinements, _super);
	    function MoreRefinements() {
	        _super.apply(this, arguments);
	    }
	    MoreRefinements.prototype.loadMore = function () {
	        this.flux.refinements(this.$navigation.name);
	        this.$navigation.moreRefinements = false;
	    };
	    return MoreRefinements;
	}(tag_1.FluxTag));
	exports.MoreRefinements = MoreRefinements;


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbNavigation = __webpack_require__(267);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-navigation', '<yield> <ul class="gb-side-nav"> <li data-is="gb-refinement-list" each="{navigation in $navigable.processed}"></li> </ul> </yield>', 'gb-navigation.gb-stylish > ul,[data-is="gb-navigation"].gb-stylish > ul{ padding: 12px; list-style: none; }', '', function (opts) {
	    this._mixin(_gbNavigation.Navigation);
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	exports.META = {
	    defaults: {
	        badge: true,
	        showSelected: true,
	        hoistSelected: true
	    },
	    types: {
	        badge: 'boolean',
	        showSelected: 'boolean',
	        hoistSelected: 'boolean'
	    }
	};
	var Navigation = (function (_super) {
	    __extends(Navigation, _super);
	    function Navigation() {
	        _super.apply(this, arguments);
	    }
	    Navigation.prototype.init = function () {
	        this.expose('navigable');
	        this.mixin({ toView: common_1.displayRefinement });
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateNavigations);
	        this.flux.on(groupby_api_1.Events.REFINEMENT_RESULTS, this.updateRefinements);
	    };
	    Navigation.prototype.updateNavigations = function (res) {
	        this.update({ processed: this.processNavigations(res) });
	    };
	    Navigation.prototype.updateRefinements = function (res) {
	        this.update({ processed: this.replaceRefinements(res) });
	    };
	    Navigation.prototype.replaceRefinements = function (res) {
	        var found = this.processed.find(function (nav) { return nav.name === res.navigation.name; });
	        if (found) {
	            found.refinements = res.navigation.refinements;
	            var selected = this.flux.results.selectedNavigation.find(function (nav) { return nav.name === res.navigation.name; });
	            if (selected) {
	                this.mergeRefinements(found, selected);
	            }
	        }
	        return this.processed;
	    };
	    Navigation.prototype.processNavigations = function (_a) {
	        var _this = this;
	        var available = _a.availableNavigation, selected = _a.selectedNavigation;
	        var processed = common_1.clone(available);
	        selected.forEach(function (selectedNav) {
	            var availableNav = processed.find(function (nav) { return nav.name === selectedNav.name; });
	            if (availableNav) {
	                _this.mergeRefinements(availableNav, selectedNav);
	            }
	            else {
	                selectedNav.refinements.forEach(function (refinement) { return refinement['selected'] = true; });
	                processed.unshift(selectedNav);
	            }
	        });
	        return processed;
	    };
	    Navigation.prototype.mergeRefinements = function (availableNavigation, selectedNavigation) {
	        selectedNavigation.refinements.forEach(function (refinement) {
	            var availableRefinement = availableNavigation.refinements
	                .find(function (availableRef) { return common_1.refinementMatches(availableRef, refinement); });
	            if (availableRefinement) {
	                availableRefinement['selected'] = true;
	            }
	            else {
	                availableNavigation.refinements.unshift(Object.assign(refinement, { selected: true }));
	            }
	        });
	        if (this.hoistSelected) {
	            availableNavigation.refinements = availableNavigation.refinements.sort(this.sortRefinements);
	        }
	    };
	    Navigation.prototype.sortRefinements = function (lhs, rhs) {
	        if (!lhs.selected && !rhs.selected) {
	            return 1;
	        }
	        else if (lhs.selected === rhs.selected) {
	            return lhs.value.localeCompare(rhs.value);
	        }
	        else {
	            return lhs.selected ? -1 : 1;
	        }
	    };
	    Navigation.prototype.send = function (refinement, navigation) {
	        return this.flux.refine(common_1.toRefinement(refinement, navigation));
	    };
	    Navigation.prototype.remove = function (refinement, navigation) {
	        return this.flux.unrefine(common_1.toRefinement(refinement, navigation));
	    };
	    Navigation = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Navigation);
	    return Navigation;
	}(tag_1.FluxTag));
	exports.Navigation = Navigation;


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRefinementList = __webpack_require__(269);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-refinement-list', '<yield> <div id="{$navigation.name}"> <h4 class="gb-navigation-title">{$navigation.displayName}</h4> <ul> <li data-is="gb-refinement" if="{!refinement.selected || $navigable.showSelected}" each="{refinement in $navigation.refinements}" class="{gb-selected: refinement.selected}"></li> </ul> <gb-more-refinements if="{$navigation.moreRefinements}"></gb-more-refinements> </div> </yield>', 'gb-refinement-list.gb-stylish .gb-navigation-title,[data-is="gb-refinement-list"].gb-stylish .gb-navigation-title{ font-size: 18px; margin: 10px 0; } gb-refinement-list.gb-stylish ul,[data-is="gb-refinement-list"].gb-stylish ul{ margin: 0; padding-left: 8px; list-style: none; }', '', function (opts) {
	    this._mixin(_gbRefinementList.RefinementList);
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var RefinementList = (function (_super) {
	    __extends(RefinementList, _super);
	    function RefinementList() {
	        _super.apply(this, arguments);
	    }
	    RefinementList.prototype.init = function () {
	        this.expose('navigation', this.navigation);
	    };
	    return RefinementList;
	}(tag_1.FluxTag));
	exports.RefinementList = RefinementList;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRefinement = __webpack_require__(271);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-refinement', '<yield> <label class="gb-ref" onclick="{$refinement.selected ? remove : send}"> <span class="gb-remove-ref" if="{!$navigation.or && $refinement.selected}">&times;</span> <input class="{gb-ref-button: !$navigation.or}" type="{$navigation.or ? \'checkbox\' : \'button\'}" checked="{!!$refinement.selected}"> <span class="gb-ref__title">{$navigable.toView($refinement)}</span> <gb-badge if="{$navigable.badge && !$refinement.selected}">{$refinement.count}</gb-badge> </label> </yield>', 'gb-refinement.gb-stylish > .gb-ref,[data-is="gb-refinement"].gb-stylish > .gb-ref{ position: relative; display: flex; padding: 4px 6px; border-radius: 4px; color: black; font-size: 14px; align-items: flex-end; cursor: pointer; } gb-refinement.gb-stylish > .gb-ref:hover,[data-is="gb-refinement"].gb-stylish > .gb-ref:hover{ background-color: #ddd; } gb-refinement.gb-stylish .gb-remove-ref,[data-is="gb-refinement"].gb-stylish .gb-remove-ref{ position: absolute; left: -10px; top: 3px; } gb-refinement.gb-stylish .gb-ref:hover .gb-remove-ref,[data-is="gb-refinement"].gb-stylish .gb-ref:hover .gb-remove-ref{ color: #be0000; font-weight: bold; } gb-refinement .gb-ref-button,[data-is="gb-refinement"] .gb-ref-button{ display: none; } gb-refinement.gb-stylish .gb-ref__title,[data-is="gb-refinement"].gb-stylish .gb-ref__title{ padding-left: 6px; flex-grow: 1; }', '', function (opts) {
	    this._mixin(_gbRefinement.Refinement);
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var Refinement = (function (_super) {
	    __extends(Refinement, _super);
	    function Refinement() {
	        _super.apply(this, arguments);
	    }
	    Refinement.prototype.init = function () {
	        this.expose('refinement', this.refinement);
	    };
	    Refinement.prototype.send = function () {
	        return this.$navigable.send(this.refinement, this.$navigation);
	    };
	    Refinement.prototype.remove = function () {
	        return this.$navigable.remove(this.refinement, this.$navigation);
	    };
	    return Refinement;
	}(tag_1.FluxTag));
	exports.Refinement = Refinement;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(273);


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbPageSize = __webpack_require__(274);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-page-size', '<yield> <gb-select></gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbPageSize.PageSize);
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var decorators_1 = __webpack_require__(225);
	var gb_select_1 = __webpack_require__(234);
	exports.META = {
	    types: {
	        resetOffset: 'boolean'
	    }
	};
	exports.DEFAULT_PAGE_SIZES = [10, 25, 50, 100];
	var PageSize = (function (_super) {
	    __extends(PageSize, _super);
	    function PageSize() {
	        _super.apply(this, arguments);
	    }
	    PageSize.prototype.init = function () {
	        this.expose('selectable');
	    };
	    PageSize.prototype.setDefaults = function () {
	        // TODO: this should come from service config dependency
	        this.items = this.config.pageSizes || exports.DEFAULT_PAGE_SIZES;
	    };
	    PageSize.prototype.onSelect = function (value) {
	        var _this = this;
	        return this.flux.resize(value, this.resetOffset)
	            .then(function () { return _this.services.tracker && _this.services.tracker.search(); });
	    };
	    PageSize = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], PageSize);
	    return PageSize;
	}(gb_select_1.SelectTag));
	exports.PageSize = PageSize;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(284);


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-pager', '<div class="gb-pager"> <a class="gb-pager__link prev {disabled: $paging.backDisabled}" onclick="{$paging.prevPage}"> <gb-icon if="{$paging.icons}" img="{$paging.prevIcon}"></gb-icon> <span if="{$paging.labels}">{$paging.prevLabel}</span> </a> <yield></yield> <a class="gb-pager__link next {disabled: $paging.forwardDisabled}" onclick="{$paging.nextPage}"> <span if="{$paging.labels}">{$paging.nextLabel}</span> <gb-icon if="{$paging.icons}" img="{$paging.nextIcon}"></gb-icon> </a> </div>', 'gb-pager.gb-stylish a,[data-is="gb-pager"].gb-stylish a{ cursor: pointer; } gb-pager.gb-stylish > .gb-pager,[data-is="gb-pager"].gb-stylish > .gb-pager{ display: flex; } gb-pager.gb-stylish .gb-pager__link,[data-is="gb-pager"].gb-stylish .gb-pager__link{ display: flex; text-decoration: none; color: #888; padding: 5px 14px; } gb-pager.gb-stylish .gb-pager__link:hover,[data-is="gb-pager"].gb-stylish .gb-pager__link:hover{ color: black; } gb-pager.gb-stylish .gb-pager__link.disabled,[data-is="gb-pager"].gb-stylish .gb-pager__link.disabled{ color: #ddd; cursor: not-allowed; } gb-pager.gb-stylish gb-pages,[data-is="gb-pager"].gb-stylish gb-pages{ flex: 1; } gb-pager.gb-stylish gb-icon img,[data-is="gb-pager"].gb-stylish gb-icon img{ width: 20px; }', '', function (opts) {});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-pages', '<ul class="gb-pages" if="{$paging.pages}"> <span class="gb-pages__ellipsis" if="{$paging.lowOverflow}">&hellip;</span> <li each="{pageNumber in $paging.pageNumbers}"> <a class="gb-pages__page {selected: $paging.currentPage === pageNumber}" onclick="{$paging.switchPage}">{pageNumber}</a> </li> <span class="gb-pages__ellipsis" if="{$paging.highOverflow}">&hellip;</span> </ul>', 'gb-pages.gb-stylish a,[data-is="gb-pages"].gb-stylish a{ cursor: pointer; } gb-pages.gb-stylish > .gb-pages,[data-is="gb-pages"].gb-stylish > .gb-pages{ margin: 0; padding: 0; list-style: none; display: flex; align-items: center; justify-content: center; height: 100%; } gb-pages.gb-stylish > .gb-pages > li,[data-is="gb-pages"].gb-stylish > .gb-pages > li{ display: inline; } gb-pages.gb-stylish .gb-pages__page,[data-is="gb-pages"].gb-stylish .gb-pages__page,gb-pages.gb-stylish .gb-pages__ellipsis,[data-is="gb-pages"].gb-stylish .gb-pages__ellipsis{ text-decoration: none; color: #888; } gb-pages.gb-stylish .gb-pages__page,[data-is="gb-pages"].gb-stylish .gb-pages__page{ padding: 0 4px; } gb-pages.gb-stylish .gb-pages__page:hover,[data-is="gb-pages"].gb-stylish .gb-pages__page:hover,gb-pages.gb-stylish .gb-pages__page.selected,[data-is="gb-pages"].gb-stylish .gb-pages__page.selected{ color: black; }', '', function (opts) {});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbPaging = __webpack_require__(279);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-paging', '<yield> <gb-terminal-pager> <gb-pager> <gb-pages></gb-pages> </gb-pager> </gb-terminal-pager> </yield>', '', '', function (opts) {
	    this._mixin(_gbPaging.Paging);
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	exports.META = {
	    defaults: {
	        limit: 5,
	        terminals: true,
	        labels: true,
	        icons: true,
	        firstLabel: 'First',
	        nextLabel: 'Next',
	        prevLabel: 'Prev',
	        lastLabel: 'Last',
	        firstIcon: __webpack_require__(280),
	        nextIcon: __webpack_require__(281),
	        prevIcon: __webpack_require__(282),
	        lastIcon: __webpack_require__(283)
	    },
	    types: {
	        pages: 'boolean',
	        numeric: 'boolean',
	        terminals: 'boolean',
	        labels: 'boolean',
	        icons: 'boolean'
	    }
	};
	var Paging = (function (_super) {
	    __extends(Paging, _super);
	    function Paging() {
	        _super.apply(this, arguments);
	    }
	    Paging.prototype.init = function () {
	        this.expose('paging');
	        this.flux.on(groupby_api_1.Events.PAGE_CHANGED, this.updateCurrentPage);
	        this.flux.on(groupby_api_1.Events.RESULTS, this.pageInfo);
	    };
	    Paging.prototype.setDefaults = function () {
	        this.backDisabled = true;
	        this.currentPage = 1;
	    };
	    Paging.prototype.pageInfo = function () {
	        var pageNumbers = this.flux.page.pageNumbers(this.limit);
	        var finalPage = this.flux.page.finalPage;
	        var currentPage = this.flux.page.currentPage;
	        this.updatePageInfo(pageNumbers, currentPage, finalPage);
	    };
	    Paging.prototype.updatePageInfo = function (pageNumbers, currentPage, finalPage) {
	        this.update({
	            pageNumbers: pageNumbers,
	            currentPage: currentPage,
	            finalPage: finalPage,
	            lowOverflow: pageNumbers[0] !== 1,
	            highOverflow: pageNumbers[pageNumbers.length - 1] !== finalPage,
	            backDisabled: currentPage === 1,
	            forwardDisabled: currentPage === finalPage
	        });
	    };
	    Paging.prototype.updateCurrentPage = function (_a) {
	        var pageNumber = _a.pageNumber;
	        this.update({ currentPage: pageNumber });
	    };
	    Paging.prototype.firstPage = function () {
	        if (!this.backDisabled) {
	            this.flux.page.reset().then(this.emitEvent);
	        }
	    };
	    Paging.prototype.prevPage = function () {
	        if (!this.backDisabled) {
	            this.flux.page.prev().then(this.emitEvent);
	        }
	    };
	    Paging.prototype.nextPage = function () {
	        if (!this.forwardDisabled) {
	            this.flux.page.next().then(this.emitEvent);
	        }
	    };
	    Paging.prototype.lastPage = function () {
	        if (!this.forwardDisabled) {
	            this.flux.page.last().then(this.emitEvent);
	        }
	    };
	    Paging.prototype.switchPage = function (_a) {
	        var target = _a.target;
	        this.flux.page.switchPage(Number(target.text)).then(this.emitEvent);
	    };
	    Paging.prototype.emitEvent = function () {
	        if (this.services.tracker) {
	            this.services.tracker.search();
	        }
	    };
	    Paging = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Paging);
	    return Paging;
	}(tag_1.FluxTag));
	exports.Paging = Paging;


/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABYmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz60J7anAAABhWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz8TxeADCwNaWKQQBYmiUYJ2miA+CEGigq8mOfMQcslxd0HE0sI2hYUPbBSxsdZO/AcEQVArEWzFQsFG5JxNhIiYWXb329/OzO7Ogmshq+lWbT/oOduMTYR8C4tLvvonPLThpRt/XLOMsZmZCFXt444aNd/2qlzV/f61xtWkpUGNR3hUM0xbeFI4um4bineFvVomvip8Juw35YLCD0pPlPlFcbrELpXTa87FwsJeYV/6Fyd+sZYxdeEh4U49W9B+7qNe0pTMzc8qXXoHFjEmCOFjinHCBBlgRMYgvQTokxVV4gOl+Ch5idVkNNjAZI00GWz8ohYke1LmlOhJaVnxEFN/8Le2VmowUD6haRrqnh3nvQfqD+Br23E+jxzn6xjcUpernUp8fgeGX0UvVrTOQ2jZgvPLipY4gYsitD8acTNektzSXakUvJ1C8yK03kDDcrluP/sc38PcJkSuYW8fusS/ZeUbWh5nYM1tRxkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGBSURBVHic7d0xblNhEIXRS3qyoCT0QLJhVpDNpDMFVFBZspBj8vxmnm3NOdJrR5a+6/pPAAAAAAAAAAAAAAAAAAAAAK7TfZIfSR5v5C6F7pO8JvmTZJe6WF13KXQYaf/tkjxd6V0KHYtUEavrLoVORdp/P7M8VtddCn0k0mGsLxe+S6ElkZbE6rpLoXMi7b+3JJ83vkuhNZF+Jfm68V0KiT+Y+IOJP9iaSL/TE//UXQqtjfRt47sUEn8w8QcTfzDxBxN/MPEHWxvp+8Z3KST+YOIPJv5g4g8m/mBrIz1vfJdC4g8m/mDiDyb+YOJfgbtL/4AVPt3YXY5Y+2992fguDYwAI8AIiBEQIyBGQIyAGAExAmIExAiIERAjIEZAjIAYATECYgTECIgRECMgRkA8GEHOi7VL8nChuzRYEmtJpK67NPhIrHMidd2lwf8eeDw3UtddGrz3xOvaSF13afDvI89Vkbru0mD/zHt1pK67AAAAAAAAAAAAAAAAAAAAwGB/AYR4hXFo7p5xAAAAAElFTkSuQmCC"

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACtklEQVR4Ae3dQW7UQBAF0Ch7OFCAPQQunBNwGXawgBUpLywhFEFc3Ym7ym8kK5uU3f3+z8QjZTI3Nx4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdcTuItLPcTx9vUu6UqrCGzhf4/jdxxf41CCQLjK48/wtwIowVWSj30+Fb4SXKQA/wpfCZqX4DnhK0HTEhwJXwmaleBN7OdbHHuwR756ddCkDF9iH7+UoEmayW0oQRKu05gSdEozuRclSMJ1GlOCTmkm96IESbhOY0rQKc3kXpQgCddpTAk6pZncixIk4TqNKUGnNJN7UYIkXKcxJeiUZnIvSpCE6zSmBJ3STO5FCZJwncaUoFOayb0oQRKu05gSdEozuRclSMJ1GlOCTmkm96IESbhOY0rQKc3kXi5XgtskVNex7Y0mHhcV+Bz79oYT4R9+25m3nBUvjZ/84gGOLF/4I3rFZ4VfPMCR5d/HsBu+EcHCs8IvHN7o0oU/Klh4XviFwxtduvBHBQvPC79weKNL/xQncLc/qlh0XvhFg5uxbOHPUCx6DuEXDW7GsoU/Q7HoOYRfNLgZyxb+DMWi5/gY6/ZSr2h4o8vewv8Zx5F/Gr1/r7/kGdU/eV74Jwdw5uWFf6b+ydcW/skBnHl5Hxhxpv4i1/4Q6/gRx34z95yvbvgWCW/WMo6UQPiz1Bc7z/tYz/+eCYS/WGizl7OVYP/I2L9/FQh/tvai53uqBMJfNKyXWta7OPH+TCD8l1Je/LxbCR7i8MnhiwdleQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAxgUc/cUO5Y0FtKQAAAABJRU5ErkJggg=="

/***/ },
/* 282 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACrklEQVR4Ae3dvXLTQBQF4IQeHihAD0leOE+Ql0kHBVSwKjzjIj9er65GZ/V5RpXlq7vfOeOk882NFwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgLoEv7ThP7fo617Gc5hKBJfzndv1r1692KUFDOMrrPPylAKcSfDsKwJHP+Vr4SnCQRrwX/qkEv5uFb4IJC3FJ+Ocl+D6hwWGP1BO+EkxWk2vCP5XgpVl8nszjUMcZCf9Pk/pxKK3JDiv8yQLtOY7we7Qmu1f4kwXac5yR8P+2B/mb36O9s3tHw/+5s/NYp0NA+B1Ys90q/NkS7TiP8DuwZrtV+LMl2nEe4XdgzXar8GdLtOM8o+HfdzzLrTsTEP7OAtlyHeFvqb2zZwl/Z4FsuY7wt9Te2bOEv7NAtlxnNPyHLZf1rHUFhL+uZ9Q04UfFte6ywl/XM2qa8KPiWndZ4a/o+WnFWSmjblMWtefbAqPfAo9vj/ZOioASpCRVuKcSFOKmjFaClKQK91SCQtyU0UqQklThnkpQiJsyWglSkircUwkKcVNGK0FKUoV7KkEhbspoJUhJqnBPJSjETRmtBClJFe6pBIW4KaOVICWpwj2VoBA3ZbQSpCRVuKcSFOKmjFaClKQK91SCQtyU0UqQklThnkpQiJsyeqQEfjAiJeUP9rymBMtvCd59MNfbQQI9JRB+ULA9q15SAuH3iAbe+14JhB8Y6DUrv1YC4V8jGfyZ8xIIPzjIkdWXEiw/H++//RFFnyVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgS6BP4DIgpCusyEaeEAAAAASUVORK5CYII="

/***/ },
/* 283 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABeWlDQ1BJQ0MgUHJvZmlsZQAAKJF9kE0rRGEUx38GkZcoioXFLZOkMY1REztM8tIsNChvmzvXvKh5ud25QjbKwtbCBtmQ+ARsJF9AKYWFpOwtKBvpOs8MzaCcOs/5Pec5599zDrg8umkmy3yQSttWeGhAm5qe0SoeqaSJetpp0Y2s2T82FkLsO/60txtKVLzuVFp/3/+16vlo1oCSSuE+w7Rs4WHh1iXbVKz0Gi35lPCa4nietxRH8nycq5kIB4XPhDUjoc8L3wt7jISVApfSd0eKauJFnEouGl//UZPURNOT46pevIUsYYYYQGOEQYIE6KJXzgCd+PHKDTu6bKvmYMZcsRbiCVvrl01EtZG04fVofl9XANRef++rkMvIPD3PULpZyEUO4XQTmh8KOfce1K3DybmpW3ouVSruisXg5Qhqp6HhCqpms7Fuf36imlEof3Kc1w6o2IWPDcd533ecjwNpvoOLrfyOvrQ4uIWJVQhdwvYOtIl23dwnRy1nc9Cu3rAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAM6SURBVHgB7d1LalRRGEZRsa8D8tH3NeGMwMnY04a29JRwQCSUqeRsEP4VuNyO7NyzviJWGkmePfNBgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEDgn8Gql7tb18lzyd6nqHn7M2bnLSF/X9XNdn9d16kVQddcj+jgl8OdIlxfAqRdB1T11bp0lcN9IJ14EVddoBwWujfSUF0HVPXh0qYeM9JgXQdW12EGBW0a65UVQdQ8eXerFIviyrj3sLfdr3x1UXYsFAp9W80fwIqi6AYFkNVbVtVggUI1VdQMCyWqsqmuxQKAaq+oGBJLVWFXXYoFANVbVDQgkq7GqrsUCgWqsqhsQSFZjVV2LBQLVWFU3IJCsxqq6FgsEqrGqbkAgWY1VdS0WCFRjVd2AQLIaq+paLBCoxqq6AYFkNVbVtVggUI1VdQMCyWqsqmuxQKAaq+oGBJLVWFXXYoFANVbVDQgkq7Gqbr7Y8/wz/F+f4PKDJsVH1S2edWzz4zp58QMnVXfsUMXBq5GqbmEwtlmNVHXHDlUcvBqp6hYGY5vVSFV37FDFwT+saPGGr+oWBmOb1UhVd+xQxcGrkapuYTC2WY1UdccOVRy8GqnqFgZjm9VIVXfsUMXB369o8W6/6hYGY5vVSFV37FDFwauRqm5hMLZZjVR1xw5VHLwaqeoWBmOb1UhVd+xQxcGrkapuYTC2+W6dvPhWr+qOHao4+GWk7+u65ZdG73977ZdHV93CYGyzGqnqjh2qOHg1UtUtDMY2q5Gq7tihioNXf9ih6hYG45tvl8C3de03cw+5X3vDt0Gr7u67HxS4ZayHjL8freruvvtBgTer9a+vBLeMvx+t6u6++0GBy1j7T8b+/V/BY8bfj1Z1d9/9oMB9Yz1l/P1oVXf33Q8KvF6t/ZXgxPj70aru7rsfFLiMdbeuU385fD9a1d19dwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAkwR+ASRah2/USAPfAAAAAElFTkSuQmCC"

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-terminal-pager', '<div class="gb-terminal-pager"> <a class="gb-terminal__link first {disabled: $paging.backDisabled}" if="{$paging.terminals}" onclick="{$paging.firstPage}"> <gb-icon if="{$paging.icons}" img="{$paging.firstIcon}"></gb-icon> <span if="{$paging.labels}">{$paging.numeric ? 1 : $paging.firstLabel}</span> </a> <yield></yield> <a class="gb-terminal__link last {disabled: $paging.forwardDisabled}" if="{$paging.terminals}" onclick="{$paging.lastPage}"> <span if="{$paging.labels}">{$paging.numeric ? $paging.finalPage : $paging.lastLabel}</span> <gb-icon if="{$paging.icons}" img="{$paging.lastIcon}"></gb-icon> </a> </div>', 'gb-terminal-pager.gb-stylish a,[data-is="gb-terminal-pager"].gb-stylish a{ cursor: pointer; } gb-terminal-pager.gb-stylish > .gb-terminal-pager,[data-is="gb-terminal-pager"].gb-stylish > .gb-terminal-pager{ display: flex; width: 100%; } gb-terminal-pager.gb-stylish .gb-terminal__link,[data-is="gb-terminal-pager"].gb-stylish .gb-terminal__link{ display: flex; text-decoration: none; color: #888; padding: 5px 14px; } gb-terminal-pager.gb-stylish .gb-terminal__link:hover,[data-is="gb-terminal-pager"].gb-stylish .gb-terminal__link:hover{ color: black; } gb-terminal-pager.gb-stylish .gb-terminal__link.disabled,[data-is="gb-terminal-pager"].gb-stylish .gb-terminal__link.disabled{ color: #ddd; cursor: not-allowed; } gb-terminal-pager.gb-stylish gb-pager,[data-is="gb-terminal-pager"].gb-stylish gb-pager{ flex: 1; } gb-terminal-pager.gb-stylish gb-icon img,[data-is="gb-terminal-pager"].gb-stylish gb-icon img{ width: 20px; }', '', function (opts) {});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(290);


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-product-image', '<a class="gb-product-image" href="{$product.link()}"> <gb-lazy-image if="{$productable.lazy}" riot-src="{$product.imageLink()}"></gb-lazy-image> <img if="{!$productable.lazy}" riot-src="{$product.imageLink()}" alt=""> </a>', '', '', function (opts) {});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-product-info', '<a href="{$product.link()}"> <p class="gb-product__title">{$product.variant().title}</p> <p class="gb-product__price">{$product.variant().price}</p> </a>', '', '', function (opts) {});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbProduct = __webpack_require__(289);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-product', '<yield> <gb-product-image></gb-product-image> <gb-product-info></gb-product-info> <gb-variant-switcher></gb-variant-switcher> </yield>', 'gb-product.gb-infinite,[data-is="gb-product"].gb-infinite{ position: absolute; opacity: 1; } gb-product.gb-infinite.tombstone.invisible,[data-is="gb-product"].gb-infinite.tombstone.invisible{ opacity: 0; }', '', function (opts) {
	    this._mixin(_gbProduct.Product);
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var product_transformer_1 = __webpack_require__(174);
	var tag_1 = __webpack_require__(207);
	var oget = __webpack_require__(124);
	exports.DEFAULTS = {
	    lazy: true
	};
	exports.TYPES = {
	    lazy: 'boolean',
	    infinite: 'boolean',
	    tombstone: 'boolean'
	};
	var Product = (function (_super) {
	    __extends(Product, _super);
	    function Product() {
	        _super.apply(this, arguments);
	    }
	    Product.prototype.init = function () {
	        this.expose('product');
	        this.inherits('productable', { defaults: exports.DEFAULTS, types: exports.TYPES }, this.transformProductable);
	        this.structure = Object.assign({}, this.config.structure, (this.$productable || {}).structure);
	        this.transformer = new product_transformer_1.ProductTransformer(this.structure);
	        this.on('before-mount', this.styleProduct);
	    };
	    Product.prototype.setDefaults = function () {
	        this.variantIndex = 0;
	        // TODO: this should come from service config dependency
	        this.detailsUrl = oget(this.services, 'url.urlConfig.detailsUrl', 'details.html');
	    };
	    Product.prototype.transformProductable = function (productable) {
	        this.updateRecord(productable.allMeta);
	        return productable;
	    };
	    Product.prototype.updateRecord = function (allMeta) {
	        var variants = this.transformRecord(allMeta);
	        this.variants = variants;
	        this.metadata = variants[0];
	    };
	    Product.prototype.transformRecord = function (record) {
	        return this.transformer.transform(common_1.clone(record, false));
	    };
	    Product.prototype.styleProduct = function () {
	        if (this.$productable.infinite) {
	            this.root.classList.add('gb-infinite');
	        }
	        if (this.$productable.tombstone) {
	            this.root.classList.add('tombstone');
	        }
	    };
	    Product.prototype.variant = function () {
	        if (this.variants && this.variants.length > this.variantIndex) {
	            return this.variants[this.variantIndex];
	        }
	        else {
	            return this.metadata || {};
	        }
	    };
	    Product.prototype.link = function () {
	        return this.variant().url || this.detailsUrl + "?id=" + this.variant().id;
	    };
	    Product.prototype.imageLink = function () {
	        var image = this.variant().image;
	        return Array.isArray(image) ? image[0] : image;
	    };
	    Product.prototype.switchVariant = function (_a) {
	        var target = _a.target;
	        var variantIndex = target.dataset['index'];
	        this.update({ variantIndex: variantIndex });
	    };
	    return Product;
	}(tag_1.FluxTag));
	exports.Product = Product;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-variant-switcher', '<a if="{$product.variants.length > 1}" each="{variant, i in $product.variants}" class="gb-product__variant-link" onclick="{$product.switchVariant}" data-index="{i}"> {i} </a>', 'gb-variant-switcher a,[data-is="gb-variant-switcher"] a{ cursor: pointer; }', '', function (opts) {});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(292);
	__webpack_require__(295);


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbQuery = __webpack_require__(293);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-query', '<yield> <div class="gb-query"> <gb-search-box></gb-search-box> <gb-submit></gb-submit> <gb-reset></gb-reset> <gb-sayt if="{sayt}"></gb-sayt> </div> </yield>', 'gb-query.gb-stylish .gb-query,[data-is="gb-query"].gb-stylish .gb-query{ position: relative; display: flex; align-items: baseline; } gb-query.gb-stylish .gb-query gb-sayt,[data-is="gb-query"].gb-stylish .gb-query gb-sayt{ top: 31px; left: 0; z-index: 10; position: absolute; min-width: 175px; background-color: #fff; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }', '', function (opts) {
	    this._mixin(_gbQuery.Query);
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var autocomplete_1 = __webpack_require__(294);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	var KEY_ENTER = 13;
	exports.META = {
	    defaults: {
	        sayt: true,
	        autoSearch: true
	    },
	    types: {
	        sayt: 'boolean',
	        autoSearch: 'boolean',
	        staticSearch: 'boolean'
	    }
	};
	var Query = (function (_super) {
	    __extends(Query, _super);
	    function Query() {
	        _super.apply(this, arguments);
	    }
	    Query.prototype.init = function () {
	        this.on('mount', this.attachListeners);
	        this.flux.on(groupby_api_1.Events.REWRITE_QUERY, this.rewriteQuery);
	    };
	    Query.prototype.setDefaults = function () {
	        this.enterKeyHandlers = [];
	    };
	    Query.prototype.attachListeners = function () {
	        this.searchBox = this.findSearchBox();
	        this.searchBox.addEventListener('keydown', this.keydownListener);
	        if (this.sayt) {
	            this.tags['gb-sayt'].listenForInput(this);
	        }
	        if (this.autoSearch) {
	            this.listenForInput();
	        }
	        else if (this.staticSearch) {
	            this.listenForStaticSearch();
	        }
	        else {
	            this.listenForSubmit();
	        }
	    };
	    Query.prototype.rewriteQuery = function (query) {
	        this.searchBox.value = query;
	    };
	    Query.prototype.listenForInput = function () {
	        this.searchBox.addEventListener('input', this.resetToInputValue);
	    };
	    Query.prototype.listenForSubmit = function () {
	        this.enterKeyHandlers.push(this.resetToInputValue);
	    };
	    Query.prototype.resetToInputValue = function () {
	        var _this = this;
	        return this.flux.reset(this.inputValue())
	            .then(function () { return _this.services.tracker && _this.services.tracker.search(); });
	    };
	    Query.prototype.listenForStaticSearch = function () {
	        this.enterKeyHandlers.push(this.setLocation);
	    };
	    Query.prototype.keydownListener = function (event) {
	        var sayt = common_1.findTag('gb-sayt');
	        if (sayt) {
	            var autocomplete = sayt._tag.autocomplete;
	            autocomplete.keyboardListener(event, this.onSubmit);
	        }
	        else if (event.keyCode === KEY_ENTER) {
	            this.onSubmit();
	        }
	    };
	    Query.prototype.onSubmit = function () {
	        this.enterKeyHandlers.forEach(function (f) { return f(); });
	        this.flux.emit(autocomplete_1.AUTOCOMPLETE_HIDE_EVENT);
	    };
	    Query.prototype.findSearchBox = function () {
	        if (this.tags['gb-search-box']) {
	            return this.tags['gb-search-box'].refs.searchBox;
	        }
	        else {
	            return this.root.querySelector('input');
	        }
	    };
	    Query.prototype.setLocation = function () {
	        if (this.services.url.isActive()) {
	            this.services.url.update(this.flux.query.withQuery(this.inputValue())
	                .withConfiguration({ refinements: [] }));
	        }
	        else {
	            this.flux.reset(this.inputValue());
	        }
	    };
	    Query.prototype.inputValue = function () {
	        return this.searchBox.value;
	    };
	    Query = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Query);
	    return Query;
	}(tag_1.FluxTag));
	exports.Query = Query;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var KEY_UP = 38;
	var KEY_DOWN = 40;
	var KEY_ENTER = 13;
	var KEY_ESCAPE = 27;
	var ACTIVE = 'active';
	exports.AUTOCOMPLETE_HIDE_EVENT = 'autocomplete:hide';
	var Autocomplete = (function () {
	    function Autocomplete(tag) {
	        this.tag = tag;
	        this.selected = this.searchInput = common_1.findSearchBox();
	    }
	    Autocomplete.prototype.indexOfSelected = function () {
	        return this.links().indexOf(this.selected);
	    };
	    Autocomplete.prototype.selectLink = function (link) {
	        if (link)
	            this.selected = this.swapAttributes(link);
	    };
	    Autocomplete.prototype.linkAbove = function () {
	        return this.links()[this.indexOfSelected() - 1];
	    };
	    Autocomplete.prototype.linkBelow = function () {
	        return this.links()[this.indexOfSelected() + 1];
	    };
	    Autocomplete.prototype.links = function () {
	        return Array.from(this.tag.root.querySelectorAll('gb-sayt-autocomplete gb-sayt-link'));
	    };
	    Autocomplete.prototype.isSelectedInAutocomplete = function () {
	        return this.links().indexOf(this.selected) !== -1;
	    };
	    Autocomplete.prototype.swapAttributes = function (next) {
	        this.removeActiveClass();
	        next.classList.add(ACTIVE);
	        var value = next.dataset['value'];
	        var refinement = next.dataset['refinement'];
	        var field = next.dataset['field'];
	        if (value || refinement)
	            this.tag.notifier(value, refinement, field);
	        return next;
	    };
	    Autocomplete.prototype.resetSelected = function () {
	        this.selected = this.searchInput;
	    };
	    Autocomplete.prototype.removeActiveClass = function () {
	        this.links().forEach(function (element) { return element.classList.remove(ACTIVE); });
	    };
	    Autocomplete.prototype.reset = function () {
	        this.removeActiveClass();
	        this.resetSelected();
	    };
	    Autocomplete.prototype.keyboardListener = function (event, submitDefault) {
	        switch (event.keyCode) {
	            case KEY_UP:
	                // prevent cursor from moving to front of text box
	                event.preventDefault();
	                if (this.isSelectedInAutocomplete()) {
	                    var linkAbove = this.linkAbove();
	                    if (linkAbove) {
	                        this.selectLink(linkAbove);
	                    }
	                    else {
	                        this.searchInput.value = this.preautocompleteValue;
	                        this.reset();
	                    }
	                }
	                else {
	                    this.tag.flux.emit(exports.AUTOCOMPLETE_HIDE_EVENT);
	                }
	                break;
	            case KEY_DOWN:
	                if (!this.isSelectedInAutocomplete()) {
	                    this.preautocompleteValue = this.searchInput.value;
	                }
	                this.selectLink(this.linkBelow());
	                break;
	            case KEY_ENTER:
	                if (this.isSelectedInAutocomplete()) {
	                    this.selected.querySelector('a').click();
	                    this.reset();
	                }
	                else {
	                    submitDefault();
	                }
	                break;
	            case KEY_ESCAPE:
	                this.tag.flux.emit(exports.AUTOCOMPLETE_HIDE_EVENT);
	                break;
	        }
	    };
	    return Autocomplete;
	}());
	exports.Autocomplete = Autocomplete;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-search-box', '<input ref="searchBox" type="text" placeholder="Search..." autofocus>', 'gb-search-box.gb-stylish > input,[data-is="gb-search-box"].gb-stylish > input{ padding: 6px 12px; font-size: 14px; }', '', function (opts) {});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(297);


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRaw = __webpack_require__(298);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-raw', '<span></span>', '', '', function (opts) {
	    this._mixin(_gbRaw.Raw);
	});

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var Raw = (function (_super) {
	    __extends(Raw, _super);
	    function Raw() {
	        _super.apply(this, arguments);
	    }
	    Raw.prototype.init = function () {
	        this.on('update', this.updateContent);
	        this.on('mount', this.updateContent);
	    };
	    Raw.prototype.updateContent = function () {
	        this.root.innerHTML = this.opts.content;
	    };
	    return Raw;
	}(tag_1.FluxTag));
	exports.Raw = Raw;


/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(300);


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRecordCount = __webpack_require__(301);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-record-count', '<yield> <h2>{first} - {last} of {total} Products</h2> </yield>', '', '', function (opts) {
	    this._mixin(_gbRecordCount.RecordCount);
	});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	var RecordCount = (function (_super) {
	    __extends(RecordCount, _super);
	    function RecordCount() {
	        _super.apply(this, arguments);
	    }
	    RecordCount.prototype.init = function () {
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updatePageInfo);
	    };
	    RecordCount.prototype.updatePageInfo = function (_a) {
	        var pageInfo = _a.pageInfo, totalRecordCount = _a.totalRecordCount;
	        this.update({
	            first: pageInfo.recordStart,
	            last: pageInfo.recordEnd,
	            total: totalRecordCount
	        });
	    };
	    return RecordCount;
	}(tag_1.FluxTag));
	exports.RecordCount = RecordCount;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(303);


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRelatedQueries = __webpack_require__(304);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-related-queries', '<yield> <gb-link-list inline></gb-link-list> </yield>', '', '', function (opts) {
	    this._mixin(_gbRelatedQueries.RelatedQueries);
	});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var gb_link_list_1 = __webpack_require__(235);
	var groupby_api_1 = __webpack_require__(125);
	var RelatedQueries = (function (_super) {
	    __extends(RelatedQueries, _super);
	    function RelatedQueries() {
	        _super.apply(this, arguments);
	    }
	    RelatedQueries.prototype.init = function () {
	        this.expose('linkable');
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updatedRelatedQueries);
	    };
	    RelatedQueries.prototype.updatedRelatedQueries = function (_a) {
	        var items = _a.relatedQueries;
	        this.update({ items: items });
	    };
	    RelatedQueries.prototype.onSelect = function (_a) {
	        var target = _a.target;
	        return this.flux.rewrite(target.text);
	    };
	    return RelatedQueries;
	}(gb_link_list_1.LinkTag));
	exports.RelatedQueries = RelatedQueries;


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(306);


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbReset = __webpack_require__(307);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-reset', '<yield> <a class="gb-reset">&times;</a> </yield>', 'gb-reset.gb-stylish a,[data-is="gb-reset"].gb-stylish a{ color: #888; padding: 4px; } gb-reset.gb-stylish a:hover,[data-is="gb-reset"].gb-stylish a:hover{ color: black; cursor: pointer; }', '', function (opts) {
	    this._mixin(_gbReset.Reset);
	});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var tag_1 = __webpack_require__(207);
	var Reset = (function (_super) {
	    __extends(Reset, _super);
	    function Reset() {
	        _super.apply(this, arguments);
	    }
	    Reset.prototype.init = function () {
	        this.on('mount', this.setSearchBox);
	        this.root.addEventListener('click', this.clearQuery);
	    };
	    Reset.prototype.setSearchBox = function () {
	        this.searchBox = common_1.findSearchBox();
	    };
	    Reset.prototype.clearQuery = function () {
	        var _this = this;
	        return this.flux.reset(this.searchBox.value = '')
	            .then(function () { return _this.services.tracker && _this.services.tracker.search(); });
	    };
	    return Reset;
	}(tag_1.FluxTag));
	exports.Reset = Reset;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(309);


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbResults = __webpack_require__(310);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-results', '<yield> <gb-list items="{$productable.records}" item-alias="product"> <gb-product all-meta="{$product.allMeta}" lazy="{$product.lazy}"></gb-product> </gb-list> </yield>', 'gb-results.gb-stylish gb-list,[data-is="gb-results"].gb-stylish gb-list{ padding: 0; list-style: none; display: flex; flex-wrap: wrap; justify-content: space-around; } gb-results.gb-stylish gb-product,[data-is="gb-results"].gb-stylish gb-product{ display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }', '', function (opts) {
	    this._mixin(_gbResults.Results);
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	exports.META = {
	    types: {
	        lazy: 'boolean'
	    }
	};
	var Results = (function (_super) {
	    __extends(Results, _super);
	    function Results() {
	        _super.apply(this, arguments);
	    }
	    Results.prototype.init = function () {
	        this.expose('productable');
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateRecords);
	    };
	    Results.prototype.setDefaults = function (config) {
	        this.structure = config.structure || this.config.structure;
	    };
	    Results.prototype.updateRecords = function (_a) {
	        var records = _a.records;
	        this.update({ records: records, collection: this.flux.query.raw.collection });
	    };
	    Results.prototype.userStyle = function (key) {
	        return this.opts.css ? this.opts.css[key] : '';
	    };
	    Results = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Results);
	    return Results;
	}(tag_1.FluxTag));
	exports.Results = Results;


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(314);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(320);
	__webpack_require__(321);


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-sayt-autocomplete', '<yield> <gb-sayt-categories></gb-sayt-categories> <gb-sayt-divider></gb-sayt-divider> <gb-sayt-search-terms></gb-sayt-search-terms> <gb-sayt-divider></gb-sayt-divider> <gb-sayt-refinements each="{navigation in $sayt.navigations}"></gb-sayt-refinements> </yield>', 'gb-sayt-autocomplete.gb-stylish,[data-is="gb-sayt-autocomplete"].gb-stylish{ min-width: 210px; }', '', function (opts) {});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-sayt-categories', '<gb-list items="{$sayt.categoryResults}"> <gb-sayt-link send="{$sayt.searchCategory}" data-value="{$item.value}" data-refinement="{$item.category}" data-field="{$sayt.categoryField}" data-norefine="{$item.noRefine}"> <yield> <gb-raw content="{$sayt.highlightCurrentQuery($item.value, \'<b>$&</b>\')}"></gb-raw> in <span class="gb-category-query">{$item.category}</span> </yield> </gb-sayt-link> </gb-list>', 'gb-sayt-categories.gb-stylish .gb-category-query,[data-is="gb-sayt-categories"].gb-stylish .gb-category-query{ font-weight: bold; color: darkorange; }', '', function (opts) {});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSaytDivider = __webpack_require__(315);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-sayt-divider', '<div if="{isVisible()}"></div>', 'gb-sayt-divider.gb-stylish > div,[data-is="gb-sayt-divider"].gb-stylish > div{ display: block; margin: 3px 10%; border-top: 1px solid #777; }', '', function (opts) {
	    this._mixin(_gbSaytDivider.SaytDivider);
	});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var SaytDivider = (function (_super) {
	    __extends(SaytDivider, _super);
	    function SaytDivider() {
	        _super.apply(this, arguments);
	    }
	    SaytDivider.prototype.isVisible = function () {
	        return this.root.nextElementSibling &&
	            this.root.nextElementSibling.querySelector('li') &&
	            this.root.previousElementSibling &&
	            this.root.previousElementSibling.querySelector('li');
	    };
	    return SaytDivider;
	}(tag_1.FluxTag));
	exports.SaytDivider = SaytDivider;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-sayt-link', '<a onclick="{opts.send}"> <yield></yield> </a>', 'gb-sayt-link.gb-stylish > a,[data-is="gb-sayt-link"].gb-stylish > a{ padding: 5px 15px; text-decoration: none; display: block; }', '', function (opts) {});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-sayt-products', '<gb-list items="{$sayt.products}"> <yield> <gb-product all-meta="{$item.allMeta}"> <gb-product-image thumbnail></gb-product-image> </gb-product> </yield> </gb-list>', 'gb-sayt-products.gb-stylish,[data-is="gb-sayt-products"].gb-stylish{ min-width: 300px; } gb-sayt-products.gb-stylish ul,[data-is="gb-sayt-products"].gb-stylish ul{ display: flex; flex-wrap: wrap; align-items: center; width: calc(86px * 4); align-content: flex-start; } gb-sayt-products.gb-stylish gb-product-image img,[data-is="gb-sayt-products"].gb-stylish gb-product-image img{ vertical-align: bottom; } gb-sayt-products.gb-stylish gb-product-image img:hover,[data-is="gb-sayt-products"].gb-stylish gb-product-image img:hover{ box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }', '', function (opts) {});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSaytRefinements = __webpack_require__(319);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-sayt-refinements', '<h4>{$navigation.displayName}</h4> <gb-list items="{$navigation.values}"> <gb-sayt-link send="{$sayt.searchRefinement}" data-value="{$navigation.displayName}: {$item}" data-refinement="{$item}" data-field="{$navigation.name}"> <yield> <gb-raw content="{$sayt.highlightCurrentQuery($item, \'<b>$&</b>\')}"></gb-raw> </yield> </gb-sayt-link> </gb-list>', 'gb-sayt-refinements.gb-stylish > h4,[data-is="gb-sayt-refinements"].gb-stylish > h4{ margin: 4px; }', '', function (opts) {
	    this._mixin(_gbSaytRefinements.SaytRefinements);
	});

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var SaytRefinements = (function (_super) {
	    __extends(SaytRefinements, _super);
	    function SaytRefinements() {
	        _super.apply(this, arguments);
	    }
	    SaytRefinements.prototype.init = function () {
	        this.expose('navigation', this.navigation);
	    };
	    return SaytRefinements;
	}(tag_1.FluxTag));
	exports.SaytRefinements = SaytRefinements;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-sayt-search-terms', '<gb-list items="{$sayt.queries}"> <gb-sayt-link send="{$sayt.search}" data-value="{$item.value}"> <yield> <gb-raw content="{$sayt.highlightCurrentQuery($item.value, \'<b>$&</b>\')}"></gb-raw> </yield> </gb-sayt-link> </gb-list>', '', '', function (opts) {});

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSayt = __webpack_require__(322);
	
	var _tag = __webpack_require__(207);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-sayt', '<yield> <div if="{($sayt.queries && $sayt.queries.length) || ($sayt.navigations && $sayt.navigations.length)}"> <gb-sayt-autocomplete></gb-sayt-autocomplete> <gb-sayt-products if="{$sayt.showProducts}"></gb-sayt-products> </div> </yield>', 'gb-sayt.gb-stylish > div,[data-is="gb-sayt"].gb-stylish > div{ display: flex; } gb-sayt.gb-stylish ul,[data-is="gb-sayt"].gb-stylish ul{ list-style: none; margin: 0; padding: 0; } gb-sayt.gb-stylish gb-sayt-link:hover,[data-is="gb-sayt"].gb-stylish gb-sayt-link:hover,gb-sayt.gb-stylish gb-sayt-link.active,[data-is="gb-sayt"].gb-stylish gb-sayt-link.active{ background-color: #f1f1f1; display: block; } gb-sayt.gb-stylish gb-list li,[data-is="gb-sayt"].gb-stylish gb-list li{ margin: 0px; }', '', function (opts) {
	    this._mixin(_tag.SaytTag, _gbSayt.Sayt);
	});

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	var autocomplete_1 = __webpack_require__(294);
	var groupby_api_1 = __webpack_require__(125);
	var escapeStringRegexp = __webpack_require__(323);
	exports.MIN_DELAY = 100;
	exports.META = {
	    defaults: {
	        allCategoriesLabel: 'All Departments',
	        highlight: true,
	        autoSearch: true,
	        delay: 100,
	        minimumCharacters: 1,
	        navigationNames: {},
	        allowedNavigations: [],
	        productCount: 4,
	        queryCount: 5
	    },
	    types: {
	        highlight: 'boolean',
	        autoSearch: 'boolean',
	        staticSearch: 'boolean',
	        https: 'boolean'
	    }
	};
	var Sayt = (function (_super) {
	    __extends(Sayt, _super);
	    function Sayt() {
	        _super.apply(this, arguments);
	    }
	    Sayt.prototype.init = function () {
	        this.expose(['sayt', 'productable']);
	        this.on('mount', this.initializeAutocomplete);
	        this.flux.on(autocomplete_1.AUTOCOMPLETE_HIDE_EVENT, this.reset);
	    };
	    Sayt.prototype.setDefaults = function (config) {
	        this.showProducts = config.productCount > 0;
	        // TODO: should use service configuraiton dependency
	        this.area = config.area || this.config.area;
	        this.collection = config.collection || this.config.collection;
	        this.language = config.language || this.config.language;
	        this.structure = config.structure || this.config.structure;
	        this.sayt.configure(this.generateSaytConfig());
	    };
	    Sayt.prototype.initializeAutocomplete = function () {
	        this.autocomplete = new autocomplete_1.Autocomplete(this);
	    };
	    Sayt.prototype.generateSaytConfig = function () {
	        return {
	            subdomain: this.config.customerId,
	            collection: this.collection,
	            autocomplete: {
	                numSearchTerms: this.queryCount,
	                language: this.language
	            },
	            productSearch: {
	                area: this.area,
	                numProducts: this.productCount,
	                language: this.language
	            },
	            https: this.https
	        };
	    };
	    Sayt.prototype.reset = function () {
	        this.autocomplete.reset();
	        this.update({ queries: null, navigations: null, products: null });
	    };
	    Sayt.prototype.fetchSuggestions = function (originalQuery) {
	        this.sayt.autocomplete(originalQuery)
	            .then(function (_a) {
	            var result = _a.result;
	            return ({ result: result, originalQuery: originalQuery });
	        })
	            .then(this.handleSuggestions)
	            .catch(function (err) { return console.error(err); });
	    };
	    Sayt.prototype.handleSuggestions = function (_a) {
	        var result = _a.result, originalQuery = _a.originalQuery;
	        this.update({ originalQuery: originalQuery });
	        this.processResults(result);
	        if (this.queries && this.showProducts) {
	            var query = this.matchesInput ? originalQuery : this.queries[0].value;
	            this.searchProducts(query);
	        }
	    };
	    Sayt.prototype.searchProducts = function (query, refinements) {
	        var _this = this;
	        if (query === void 0) { query = ''; }
	        if (this.showProducts) {
	            this.sayt.productSearch(query, { refinements: refinements })
	                .then(function (res) { return _this.update({ products: res.result.products }); });
	        }
	    };
	    Sayt.prototype.rewriteQuery = function (query) {
	        this.flux.emit(groupby_api_1.Events.REWRITE_QUERY, query);
	    };
	    Sayt.prototype.notifier = function (query, refinement, field) {
	        var isRefinement = refinement && refinement !== this.allCategoriesLabel;
	        var refinementString = "~" + (field || this.categoryField) + "=" + refinement;
	        if (this.autoSearch) {
	            this.searchProducts(field ? '' : query, isRefinement ? refinementString : undefined);
	        }
	        this.rewriteQuery(query);
	    };
	    Sayt.prototype.processResults = function (result) {
	        var _this = this;
	        var categoryResults = [];
	        this.matchesInput = result.searchTerms
	            && result.searchTerms[0].value.toLowerCase() === this.originalQuery.toLowerCase();
	        if (this.matchesInput) {
	            var categoryQuery = result.searchTerms.splice(0, 1)[0];
	            categoryResults = this.extractCategoryResults(categoryQuery);
	        }
	        var navigations = result.navigations ? result.navigations
	            .map(function (nav) { return Object.assign(nav, { displayName: _this.navigationNames[nav.name] || nav.name }); })
	            .filter(function (_a) {
	            var name = _a.name;
	            return _this.allowedNavigations.includes(name);
	        }) : [];
	        this.update({
	            results: result,
	            navigations: navigations,
	            queries: result.searchTerms,
	            categoryResults: categoryResults
	        });
	    };
	    Sayt.prototype.extractCategoryResults = function (_a) {
	        var additionalInfo = _a.additionalInfo, value = _a.value;
	        var categoryResults = [];
	        var categoryField = this.categoryField;
	        if (additionalInfo && categoryField && categoryField in additionalInfo) {
	            categoryResults = additionalInfo[categoryField]
	                .map(function (category) { return ({ category: category, value: value }); })
	                .slice(0, 3);
	            categoryResults.unshift({ category: this.allCategoriesLabel, value: value, noRefine: true });
	        }
	        return categoryResults;
	    };
	    Sayt.prototype.searchRefinement = function (event) {
	        this.flux.resetRecall();
	        this.refine(event.target, '');
	    };
	    Sayt.prototype.searchCategory = function (event) {
	        this.flux.resetRecall();
	        this.refine(event.target, this.originalQuery);
	    };
	    Sayt.prototype.highlightCurrentQuery = function (value, regexReplacement) {
	        return this.highlight
	            ? value.replace(new RegExp(escapeStringRegexp(this.originalQuery), 'i'), regexReplacement)
	            : value;
	    };
	    Sayt.prototype.enhanceCategoryQuery = function (query) {
	        return "<b>" + query.value + "</b> in <span class=\"gb-category-query\">" + query.category + "</span>";
	    };
	    Sayt.prototype.refine = function (node, queryString) {
	        while (node.tagName !== 'GB-SAYT-LINK')
	            node = node.parentElement;
	        var doRefinement = !node.dataset['norefine'];
	        var refinement = {
	            navigationName: node.dataset['field'] || this.categoryField,
	            value: node.dataset['refinement'],
	            type: 'Value'
	        };
	        if (this.staticSearch && this.services.url.isActive()) {
	            return Promise.resolve(this.services.url.update(this.flux.query.withQuery(queryString)
	                .withConfiguration({ refinements: doRefinement ? [refinement] : [] })));
	        }
	        else if (doRefinement) {
	            this.flux.rewrite(queryString, { skipSearch: true });
	            return this.flux.refine(refinement)
	                .then(this.emitEvent);
	        }
	        else {
	            return this.flux.reset(queryString)
	                .then(this.emitEvent);
	        }
	    };
	    Sayt.prototype.search = function (event) {
	        var node = event.target;
	        while (node.tagName !== 'GB-SAYT-LINK')
	            node = node.parentElement;
	        var query = node.dataset['value'];
	        if (this.staticSearch && this.services.url.isActive()) {
	            return Promise.resolve(this.services.url.update(this.flux.query
	                .withConfiguration({ query: query, refinements: [] })));
	        }
	        else {
	            this.rewriteQuery(query);
	            return this.flux.reset(query)
	                .then(this.emitEvent);
	        }
	    };
	    Sayt.prototype.listenForInput = function (tag) {
	        var input = tag.searchBox;
	        input.autocomplete = 'off';
	        var debouncedSearch = common_1.debounce(this.debouncedSearch(input), Math.max(this.delay, exports.MIN_DELAY));
	        input.addEventListener('input', debouncedSearch);
	        document.addEventListener('click', this.reset);
	    };
	    Sayt.prototype.debouncedSearch = function (input) {
	        var _this = this;
	        return function () {
	            if (input.value.length >= _this.minimumCharacters) {
	                _this.fetchSuggestions(input.value);
	            }
	            else {
	                _this.reset();
	            }
	        };
	    };
	    Sayt.prototype.emitEvent = function () {
	        if (this.services.tracker) {
	            this.services.tracker.sayt();
	        }
	    };
	    Sayt = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Sayt);
	    return Sayt;
	}(tag_1.SaytTag));
	exports.Sayt = Sayt;


/***/ },
/* 323 */
/***/ function(module, exports) {

	'use strict';
	
	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
	
	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}
	
		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(329);
	__webpack_require__(330);


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-custom-select', '<div class="gb-select {$selectable.hover ? \'hoverable\' : \'clickable\'}"> <button data-is="gb-select-button" type="button" onclick="{$select.focusElement}"></button> <gb-list should-render="{$select.shouldRender}"> <yield> <gb-option></gb-option> </yield> </gb-list> </div>', 'gb-custom-select .gb-select,[data-is="gb-custom-select"] .gb-select{ position: relative; display: inline-block; } gb-custom-select gb-list,[data-is="gb-custom-select"] gb-list{ display: none; z-index: 100; position: absolute; min-width: 160px; background-color: #f6f6f6; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); max-height: 300px; overflow-y: scroll; } gb-custom-select gb-list ul,[data-is="gb-custom-select"] gb-list ul{ margin: 0; padding: 0; list-style: none; } gb-custom-select gb-list ul:hover,[data-is="gb-custom-select"] gb-list ul:hover{ display: block; } gb-custom-select .gb-select.hoverable:hover gb-list,[data-is="gb-custom-select"] .gb-select.hoverable:hover gb-list,gb-custom-select .gb-select.clickable button:focus + gb-list,[data-is="gb-custom-select"] .gb-select.clickable button:focus + gb-list,gb-custom-select gb-list:hover,[data-is="gb-custom-select"] gb-list:hover{ display: block; } gb-custom-select.gb-stylish > .gb-select:hover button,[data-is="gb-custom-select"].gb-stylish > .gb-select:hover button,gb-custom-select.gb-stylish > .gb-select button:focus,[data-is="gb-custom-select"].gb-stylish > .gb-select button:focus{ border-color: #aaa; } gb-custom-select.gb-stylish gb-list > ul > li,[data-is="gb-custom-select"].gb-stylish gb-list > ul > li{ margin: 0; } gb-custom-select button,[data-is="gb-custom-select"] button{ overflow-x: hidden; display: flex; align-items: center; font-size: 14px; border: none; cursor: pointer; padding: 8px 16px; width: 100%; background-color: #eee; border: 2px solid #ddd; border-radius: 4px; white-space: nowrap; } gb-custom-select scope:.gb-stylish button:focus,[data-is="gb-custom-select"] scope:.gb-stylish button:focus{ outline: none; }', '', function (opts) {
	    this.inherits('listable');
	});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-native-select', '<select ref="selector" onchange="{$select.selectNative}"> <option if="{!$select.default}" value="" selected disabled>{$select.selectLabel()}</option> <option each="{item in $selectable.items}" if="{!item.clear}" riot-value="{$select.itemValue(item)}">{$select.itemLabel(item)}</option> </select>', '', '', function (opts) {});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbOption = __webpack_require__(328);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-option', '<a onclick="{onSelect}">{label}</a>', 'gb-option a,[data-is="gb-option"] a{ cursor: pointer; display: block; text-decoration: none; color: black; padding: 10px 12px; } gb-option a:hover,[data-is="gb-option"] a:hover{ background-color: #eee; }', '', function (opts) {
	    this._mixin(_gbOption.Option);
	});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var Option = (function (_super) {
	    __extends(Option, _super);
	    function Option() {
	        _super.apply(this, arguments);
	    }
	    Option.prototype.init = function () {
	        if (this.$item.clear) {
	            this.root.classList.add('clear');
	        }
	        this.label = this.$select.itemLabel(this.$item);
	        this.value = this.$select.itemValue(this.$item);
	    };
	    Option.prototype.onSelect = function () {
	        if (this.$item.clear) {
	            this.$select.clearSelection();
	        }
	        else {
	            this.$select.selectCustom(this);
	        }
	    };
	    return Option;
	}(tag_1.FluxTag));
	exports.Option = Option;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-select-button', '<yield> <span class="gb-button__label">{$select.selectLabel()}</span> <img riot-src="{$selectable.iconUrl}" alt=""> </yield>', 'gb-select-button img,[data-is="gb-select-button"] img{ margin-left: 10px; margin-top: 2px; height: 24px; }', '', function (opts) {
	    this.root.addEventListener('focus', this.$select.prepFocus);
	    this.root.addEventListener('click', this.$select.unFocus);
	});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSelect = __webpack_require__(234);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-select', '<yield> <gb-native-select if="{$selectable.native}"></gb-native-select> <gb-custom-select if="{!$selectable.native}"></gb-custom-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbSelect.Select);
	});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(332);


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSnippet = __webpack_require__(333);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-snippet', '<div class="gb-snippet"> {responseText} </div>', '', '', function (opts) {
	    this._mixin(_gbSnippet.Snippet);
	});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	exports.META = {
	    types: {
	        raw: 'boolean'
	    }
	};
	var Snippet = (function (_super) {
	    __extends(Snippet, _super);
	    function Snippet() {
	        _super.apply(this, arguments);
	    }
	    Snippet.prototype.init = function () {
	        this.on('mount', this.loadFile);
	    };
	    Snippet.prototype.loadFile = function () {
	        var _this = this;
	        return new Promise(function (resolve) {
	            var req = new XMLHttpRequest();
	            req.onerror = function (err) { return console.error("unable to load " + _this.url, err); };
	            req.onload = function () {
	                var responseText = req.responseText;
	                if (_this.raw) {
	                    _this.root.innerHTML = responseText;
	                }
	                else {
	                    _this.update({ responseText: responseText });
	                }
	                resolve(responseText);
	            };
	            req.open('get', _this.url, true);
	            req.send();
	        });
	    };
	    Snippet = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Snippet);
	    return Snippet;
	}(tag_1.FluxTag));
	exports.Snippet = Snippet;


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(335);


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSort = __webpack_require__(336);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-sort', '<yield> <gb-select></gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbSort.Sort);
	});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var decorators_1 = __webpack_require__(225);
	var gb_select_1 = __webpack_require__(234);
	exports.META = {
	    defaults: {
	        items: [
	            { label: 'Name Descending', value: { field: 'title', order: 'Descending' } },
	            { label: 'Name Ascending', value: { field: 'title', order: 'Ascending' } }
	        ]
	    }
	};
	var Sort = (function (_super) {
	    __extends(Sort, _super);
	    function Sort() {
	        _super.apply(this, arguments);
	    }
	    Sort.prototype.init = function () {
	        this.expose('selectable');
	    };
	    Sort.prototype.sortValues = function () {
	        return this.items.map(function (item) { return item.value; });
	    };
	    Sort.prototype.onSelect = function (value) {
	        return this.flux.sort(value, this.sortValues());
	    };
	    Sort = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Sort);
	    return Sort;
	}(gb_select_1.SelectTag));
	exports.Sort = Sort;


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(338);


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSubmit = __webpack_require__(339);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-submit', '<yield> <a class="gb-submit">&#128269;</a> </yield>', 'gb-submit.gb-stylish a,[data-is="gb-submit"].gb-stylish a{ padding: 4px; } gb-submit.gb-stylish a:hover,[data-is="gb-submit"].gb-stylish a:hover{ cursor: pointer; }', '', function (opts) {
	    this._mixin(_gbSubmit.Submit);
	});

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var decorators_1 = __webpack_require__(225);
	var tag_1 = __webpack_require__(207);
	exports.META = {
	    defaults: {
	        label: 'Search'
	    },
	    types: {
	        staticSearch: 'boolean'
	    }
	};
	var Submit = (function (_super) {
	    __extends(Submit, _super);
	    function Submit() {
	        _super.apply(this, arguments);
	    }
	    Submit.prototype.init = function () {
	        this.on('mount', this.setSearchBox);
	        this.root.addEventListener('click', this.submitQuery);
	    };
	    Submit.prototype.setDefaults = function () {
	        if (this.root.tagName === 'INPUT') {
	            this.root.value = this.label;
	        }
	    };
	    Submit.prototype.setSearchBox = function () {
	        this.searchBox = common_1.findSearchBox();
	    };
	    Submit.prototype.submitQuery = function () {
	        var _this = this;
	        var inputValue = this.searchBox.value;
	        if (this.staticSearch && this.services.url.isActive()) {
	            var query = this.flux.query.withQuery(inputValue)
	                .withConfiguration({ refinements: [] });
	            return Promise.resolve(this.services.url.update(query));
	        }
	        else {
	            return this.flux.reset(inputValue)
	                .then(function () { return _this.services.tracker && _this.services.tracker.search(); });
	        }
	    };
	    Submit = __decorate([
	        decorators_1.meta(exports.META), 
	        __metadata('design:paramtypes', [])
	    ], Submit);
	    return Submit;
	}(tag_1.FluxTag));
	exports.Submit = Submit;


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(341);
	__webpack_require__(342);
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(346);


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-content-zone', '<span>{$zone.content}</span>', '', '', function (opts) {});

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-record-zone', '<gb-list items="{$zone.records}"> <gb-product all_meta="{item.allMeta}"></gb-product> </gb-list>', '', '', function (opts) {});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var riot = __webpack_require__(217);
	riot.tag2('gb-rich-content-zone', '<gb-raw content="{$zone.richContent}"></gb-raw>', '', '', function (opts) {});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbTemplate = __webpack_require__(345);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-template', '<div if="{isActive}"> <yield> <gb-zone each="{zone in $template.zones}"></gb-zone> </yield> </div>', '', '', function (opts) {
	    this._mixin(_gbTemplate.Template);
	});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var groupby_api_1 = __webpack_require__(125);
	var Template = (function (_super) {
	    __extends(Template, _super);
	    function Template() {
	        _super.apply(this, arguments);
	    }
	    Template.prototype.init = function () {
	        this.expose('template');
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateActive);
	    };
	    Template.prototype.updateActive = function (_a) {
	        var template = _a.template;
	        this.update({
	            isActive: template.name === this.target,
	            zoneMap: template.zones,
	            zones: this.sortZones(template.zones)
	        });
	    };
	    Template.prototype.sortZones = function (zones) {
	        return Object.keys(zones).map(function (key) { return zones[key]; })
	            .reduce(function (list, zone) {
	            if (zone.type === 'Record') {
	                list.push(zone);
	            }
	            else {
	                list.unshift(zone);
	            }
	            return list;
	        }, []);
	    };
	    return Template;
	}(tag_1.FluxTag));
	exports.Template = Template;


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbZone = __webpack_require__(347);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-zone', '<gb-content-zone if="{$zone.type === \'Content\'}"></gb-content-zone> <gb-rich-content-zone if="{$zone.type === \'Rich_Content\'}"></gb-rich-content-zone> <gb-record-zone if="{$zone.type === \'Record\'}"></gb-record-zone>', '', '', function (opts) {
	    this._mixin(_gbZone.Zone);
	});

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tag_1 = __webpack_require__(207);
	var Zone = (function (_super) {
	    __extends(Zone, _super);
	    function Zone() {
	        _super.apply(this, arguments);
	    }
	    Zone.prototype.init = function () {
	        this.expose('zone', this.zone);
	        this.root.classList.add("gb-zone-" + this.zone.name);
	    };
	    return Zone;
	}(tag_1.FluxTag));
	exports.Zone = Zone;


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(349);


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbToggle = __webpack_require__(350);
	
	var riot = __webpack_require__(217);
	
	riot.tag2('gb-toggle', '<label> <input ref="input" type="checkbox" onclick="{onClick}"> <div><span></span></div> </label>', 'gb-toggle label,[data-is="gb-toggle"] label{ position: relative; display: inline-block; } gb-toggle input,[data-is="gb-toggle"] input{ display: none; } gb-toggle div,[data-is="gb-toggle"] div{ position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; } gb-toggle span,[data-is="gb-toggle"] span{ position: absolute; }', '', function (opts) {
	    this._mixin(_gbToggle.Toggle);
	});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(60);
	var tag_1 = __webpack_require__(207);
	exports.DEFAULTS = {
	    height: 30,
	    switchHeight: 22,
	    animationSpeed: 0.4
	};
	exports.TYPES = {
	    checked: 'boolean'
	};
	var ToggleTag = (function (_super) {
	    __extends(ToggleTag, _super);
	    function ToggleTag() {
	        _super.apply(this, arguments);
	    }
	    return ToggleTag;
	}(tag_1.FluxTag));
	exports.ToggleTag = ToggleTag;
	var Toggle = (function (_super) {
	    __extends(Toggle, _super);
	    function Toggle() {
	        _super.apply(this, arguments);
	    }
	    Toggle.prototype.init = function () {
	        this.inherits('toggleable', { defaults: exports.DEFAULTS, types: exports.TYPES });
	        this.on('before-mount', this.addStyleTag);
	        this.on('mount', this.onMount);
	    };
	    Toggle.prototype.onMount = function () {
	        this.refs.input.checked = this.$toggleable.checked;
	    };
	    Toggle.prototype.onClick = function () {
	        if (this.$toggleable.onToggle) {
	            this.$toggleable.onToggle(this.refs.input.checked);
	        }
	    };
	    Toggle.prototype.calculateSwitchHeight = function (toggleHeight) {
	        var heightDifference = toggleHeight - this.$toggleable.switchHeight;
	        var switchHeight = Math.min(this.$toggleable.switchHeight, toggleHeight);
	        return switchHeight - heightDifference % 2;
	    };
	    Toggle.prototype.addStyleTag = function () {
	        var switchHeight = this.calculateSwitchHeight(this.$toggleable.height);
	        var padding = (this.$toggleable.height - switchHeight) / 2;
	        var speed = this.$toggleable.animationSpeed;
	        var node = document.createElement('style');
	        node.textContent = "\n      " + common_1.scopeCss('gb-toggle', 'label') + " {\n        height: " + this.$toggleable.height + "px;\n        width: " + this.$toggleable.height * 2 + "px;\n      }\n\n      " + common_1.scopeCss('gb-toggle', 'div') + " {\n        transition: " + speed + "s;\n      }\n\n      " + common_1.scopeCss('gb-toggle', 'span') + " {\n        height: " + switchHeight + "px;\n        width: " + switchHeight + "px;\n        left: " + padding + "px;\n        bottom: " + padding + "px;\n        transition: " + speed + "s;\n      }\n\n      " + common_1.scopeCss('gb-toggle', 'input:checked + div > span') + " {\n        transform: translateX(" + (switchHeight + padding * 2) + "px);\n      }\n    ";
	        this.root.appendChild(node);
	    };
	    return Toggle;
	}(tag_1.FluxTag));
	exports.Toggle = Toggle;


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	/*!
	 * is-number <https://github.com/jonschlinkert/is-number>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var typeOf = __webpack_require__(__webpack_module_template_argument_0__);
	
	module.exports = function isNumber(num) {
	  var type = typeOf(num);
	  if (type !== 'number' && type !== 'string') {
	    return false;
	  }
	  var n = +num;
	  return (n - n + 1) >= 0 && num !== '';
	};


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = __webpack_require__(__webpack_module_template_argument_0__);


/***/ }
/******/ ])));