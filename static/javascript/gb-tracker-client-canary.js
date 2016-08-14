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
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function(w){
	  w._GbTracker = __webpack_require__(2);
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var uuid                 = __webpack_require__(3);
	var diff                 = __webpack_require__(5).diff;
	var inspector            = __webpack_require__(6);

	var SCHEMAS = {
	  addToBasket: {
	    validation:   __webpack_require__(11),
	    sanitization: __webpack_require__(12)
	  },
	  navigation: {
	    validation:   __webpack_require__(13),
	    sanitization: __webpack_require__(14)
	  },
	  order: {
	    validation:   __webpack_require__(15),
	    sanitization: __webpack_require__(16)
	  },
	  search: {
	    validation:   __webpack_require__(17),
	    sanitization: __webpack_require__(18)
	  },
	  sessionChange: {
	    validation:   __webpack_require__(19),
	    sanitization: __webpack_require__(20)
	  },
	  viewProduct: {
	    validation:   __webpack_require__(21),
	    sanitization: __webpack_require__(22)
	  }
	};

	// Info on path length limitations: http://stackoverflow.com/a/812962
	var MAX_IE_PATH_LENGTH    = 2048; // Thanks IE
	var MAX_OTHER_PATH_LENGTH = 80000; // Thanks Microsoft Edge
	var MAX_PATHNAME_LENGTH   = 100; // '/v2/pixel/?random=0.5405421565044588&m=' plus extra for luck
	var MAX_SEGMENT_COUNT     = 100;

	var overridenPixelPath = null;

	var Tracker = function (customerId, area) {
	  var self                 = this;
	  var customer             = {};
	  var visit                = {customerData: {}};
	  var invalidEventCallback = null;

	  var MAX_PATH_LENGTH         = (getInternetExplorerVersion() > -1) ? MAX_IE_PATH_LENGTH : MAX_OTHER_PATH_LENGTH;
	  var MAX_QUERY_STRING_LENGTH = MAX_PATH_LENGTH - MAX_PATHNAME_LENGTH;

	  if (typeof customerId !== 'string' || customerId.length === 0) {
	    throw new Error('customerId must be a string with length');
	  } else {
	    customer.id = customerId;
	  }

	  if (typeof area === 'string' && area.length > 0) {
	    customer.area = area;
	  }

	  /**
	   * Update visitor and session id's during login/logout
	   * @param visitorId
	   * @param sessionId
	   */
	  self.setVisitor = function (visitorId, sessionId) {
	    visitorId = (visitorId && typeof visitorId === 'number') ? (visitorId + '') : visitorId;
	    sessionId = (sessionId && typeof sessionId === 'number') ? (sessionId + '') : sessionId;

	    if (typeof visitorId !== 'string') {
	      throw new Error('visitorId must be a string with length');
	    }

	    if (typeof sessionId !== 'string') {
	      throw new Error('sessionId must be a string with length');
	    }

	    var prevVisitorId = visit.customerData.visitorId;
	    var prevSessionId = visit.customerData.sessionId;

	    visit.customerData.visitorId = visitorId;
	    visit.customerData.sessionId = sessionId;

	    if (prevVisitorId !== visitorId || prevSessionId !== sessionId) {
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

	  /**
	   * Append eventType, customer, and visit to event
	   * @param event
	   * @param type
	   */
	  var prepareEvent = function (event, type) {
	    if (!visit.customerData.sessionId || !visit.customerData.visitorId) {
	      throw new Error('visitorId and sessionId must be set using setVisitor() before an event is sent');
	    }

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
	   * Validate and send addToBasket event
	   * @param event
	   */
	  self.sendAddToBasketEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'addToBasket');
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
	    self.__private.prepareAndSendEvent(event, 'search');
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
	  self.__private.prepareAndSendEvent = function(event, eventType) {
	    event = prepareEvent(event, eventType);
	    var validatedEvent = self.__private.validateEvent(event, SCHEMAS[eventType]);
	    if (validatedEvent) {
	      self.__private.sendEvent(validatedEvent, self.__private.sendSegment);
	    } else {
	      invalidEventCallback && invalidEventCallback(event);
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
	   * Attach navigation listeners for page enter/leave and hash changes
	   */
	  self.__private.attachNavigationListeners = function () {
	    if (!window || !document) {
	      console.warn('no window or document object found, cannot attach navigation listeners');
	      return;
	    }

	    // Mozilla, Opera, Webkit
	    if (document.addEventListener) {
	      document.addEventListener('DOMContentLoaded', function () {
	        document.removeEventListener('DOMContentLoaded', arguments.callee, false);
	        self.__private.sendNavigationEvent({
	          navigation: {
	            type:       'enter',
	            exactEvent: 'DOMContentLoaded'
	          }
	        });
	      }, false);

	      // If IE event model is used
	    } else if (document.attachEvent) {
	      // ensure firing before onload
	      document.attachEvent('onreadystatechange', function () {
	        if (document.readyState === 'complete') {
	          document.detachEvent('onreadystatechange', arguments.callee);
	          self.__private.sendNavigationEvent({
	            navigation: {
	              type:       'enter',
	              exactEvent: 'onreadystatechange'
	            }
	          });
	        }
	      });
	    }

	    // exit if the browser implements that event
	    if (window.addEventListener) {
	      window.addEventListener('hashchange', function () {
	        self.__private.sendNavigationEvent({
	          navigation: {
	            type:       'hashchange',
	            exactEvent: 'hashchange'
	          }
	        });
	      });
	    }
	  };

	  self.__private.attachNavigationListeners();

	  /**
	   * Validate and send navigation event
	   * @param event
	   */
	  self.__private.sendNavigationEvent = function (event) {
	    self.__private.prepareAndSendEvent(event, 'navigation');
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
	   * @returns {null}
	   */
	  self.__private.validateEvent = function (event, schemas) {
	    var sanitizedEvent = deepCopy(event);
	    inspector.sanitize(schemas.sanitization, sanitizedEvent);
	    var result = inspector.validate(schemas.validation, sanitizedEvent);

	    if (!result.valid) {
	      console.error('error while processing event: ' + result.format());
	      return null;
	    }

	    if (!sanitizedEvent.visit) {
	      sanitizedEvent.visit = {};
	    }

	    if (!sanitizedEvent.visit.generated) {
	      sanitizedEvent.visit.generated = {};
	    }

	    var removedFields = self.__private.getRemovedFields(sanitizedEvent, event);

	    if (removedFields.length > 0) {
	      for (var i = 0; i < removedFields.length; i++) {
	        console.warn('unexpected field: ' + removedFields[i] + ' is being dropped from eventType: ' + sanitizedEvent.eventType);
	      }
	    }

	    sanitizedEvent.visit.generated.uri = (typeof window !== 'undefined' && window.location) ? window.location.href : '';
	    sanitizedEvent.visit.generated.timezoneOffset = new Date().getTimezoneOffset();
	    sanitizedEvent.visit.generated.localTime = new Date().toISOString();

	    return sanitizedEvent;
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
	      if (allDifferences[i].kind === 'N') {
	        removedFields.push(allDifferences[i].path.join('.'));
	      }
	    }

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
	      uuid:     uuidString,
	      id:       MAX_SEGMENT_COUNT,
	      total:    MAX_SEGMENT_COUNT,
	      customer: event.customer
	    };

	    var SEGMENT_WRAPPER_OVERHEAD = encodeURIComponent(JSON.stringify(segmentTemplate)).length;
	    var eventStringSegments      = chunkString(encodeURIComponent(eventString), MAX_QUERY_STRING_LENGTH - SEGMENT_WRAPPER_OVERHEAD);

	    if (eventStringSegments.length > MAX_SEGMENT_COUNT) {
	      console.error('cannot send: ' + eventStringSegments + ' event segments, as that exceeds the max of: ' + MAX_SEGMENT_COUNT);
	      return;
	    }

	    for (var i = 0; i < eventStringSegments.length; i++) {
	      sendSegment({
	        uuid:     uuidString,
	        segment:  decodeURIComponent(eventStringSegments[i]), // To prevent double-encoding, it'll be re-encoded before sending
	        id:       i,
	        total:    eventStringSegments.length,
	        customer: event.customer
	      });
	    }
	  };

	  /**
	   * Use pixel endpoint to upload string to event-tracker
	   * @param segment
	   */
	  self.__private.sendSegment = function (segment) {
	    var protocol = 'https:' == document.location.protocol ? 'https://tracker-secure' : 'http://tracker';
	    var host     = protocol + '.groupbycloud.com';
	    var params   = '?random\x3d' + Math.random(); // To bust the cache
	    params += '&m=' + encodeURIComponent(JSON.stringify(segment));

	    var path = '/v2/pixel/' + params;

	    if (path.length > MAX_PATH_LENGTH) {
	      console.error('cannot send request with path exceeding max length of: ' + MAX_PATH_LENGTH + ' path is: ' + path.length);
	      return;
	    }

	    var im = new Image();
	    if (!overridenPixelPath) {
	      im.src = host + path;
	    } else {
	      im.src = overridenPixelPath + params;
	    }
	  };

	};

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
	var getInternetExplorerVersion = function () {
	  var rv = -1; // Return value assumes failure.
	  if (navigator.appName == 'Microsoft Internet Explorer') {
	    var ua = navigator.userAgent;
	    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
	    if (re.exec(ua) != null)
	      rv = parseFloat(RegExp.$1);
	  }
	  return rv;
	};

	Tracker.__overridePixelPath = function (path) {
	  overridenPixelPath = path;
	};

	module.exports = Tracker;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(4);

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
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	if (global.crypto && crypto.getRandomValues) {
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * This module is intended to be executed both on client side and server side.
	 * No error should be thrown. (soft error handling)
	 */

	(function () {
		var root = {};
		// Dependencies --------------------------------------------------------------
		root.async = ( true) ? __webpack_require__(8) : window.async;
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
				return _stack.map(function (i) {return i.replace(/^\[/g, '\033\034\035\036');})
				.join('.').replace(/\.\033\034\035\036/g, '[');
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
					this.report('is missing and not optional');
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
					this.report('must be ' + types.join(' or ') + ', but is ' + _realType(candidate));
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
						this.report('has value [' + candidate[i] + '] more than once at indexes [' + indexes.join(', ') + ']');
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
					self.report('must match [' + regexs.join(' or ') + '], but is equal to "' + candidate + '"');
				}
			},
			validDate: function (schema, candidate) {
				if (String(schema.validDate) === 'true' && candidate instanceof Date && isNaN(candidate.getTime())) {
					this.report('must be a valid date');
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
					this.report('must be longer than ' + minLength + ' elements, but it has ' + candidate.length);
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
					this.report('must be shorter than ' + maxLength + ' elements, but it has ' + candidate.length);
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
					this.report('must have exactly ' + exactLength + ' elements, but it have ' + candidate.length);
				}
			},
			lt: function (schema, candidate) {
				var limit = Number(schema.lt);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate >= limit) {
					this.report('must be less than ' + limit + ', but is equal to "' + candidate + '"');
				}
			},
			lte: function (schema, candidate) {
				var limit = Number(schema.lte);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate > limit) {
					this.report('must be less than or equal to ' + limit + ', but is equal to "' + candidate + '"');
				}
			},
			gt: function (schema, candidate) {
				var limit = Number(schema.gt);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate <= limit) {
					this.report('must be greater than ' + limit + ', but is equal to "' + candidate + '"');
				}
			},
			gte: function (schema, candidate) {
				var limit = Number(schema.gte);
				if (typeof candidate !== 'number' || isNaN(limit)) {
					return;
				}
				if (candidate < limit) {
					this.report('must be greater than or equal to ' + limit + ', but is equal to "' + candidate + '"');
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
					}).join(' or ') + '], but is equal to "' + candidate + '"');
				}
				else {
					if (candidate !== limit) {
						this.report('must be equal to "' + limit + '", but is equal to "' + candidate + '"');
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
							this.report('must not be equal to "' + limit[i] + '"');
							return;
						}
					}
				}
				else {
					if (candidate === limit) {
						this.report('must not be equal to "' + limit + '"');
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
					}).join(' or '));
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
						self.report(msg);
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

			this.report = function (message, code) {
				var newErr = {
					code: code || this.userCode || null,
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
/* 8 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(9).setImmediate, __webpack_require__(10)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(10).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

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

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate, __webpack_require__(9).clearImmediate))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
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
/* 11 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"product": {
				"type": "object",
				"properties": {
					"category": {
						"type": "string"
					},
					"collection": {
						"type": "string",
						"optional": false
					},
					"title": {
						"type": "string"
					},
					"sku": {
						"type": "string",
						"optional": true
					},
					"id": {
						"type": "string"
					},
					"parentId": {
						"type": "string",
						"optional": true
					},
					"margin": {
						"type": "number",
						"optional": true
					},
					"price": {
						"type": "number"
					},
					"qty": {
						"type": "integer"
					}
				},
				"strict": true
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			}
		},
		"strict": true
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"product": {
				"properties": {
					"category": {},
					"collection": {
						"optional": false,
						"def": "Production"
					},
					"title": {},
					"sku": {
						"optional": true
					},
					"id": {},
					"parentId": {
						"optional": true
					},
					"margin": {
						"type": "number",
						"optional": true
					},
					"price": {
						"type": "number"
					},
					"qty": {
						"type": "integer"
					}
				},
				"strict": true
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			}
		},
		"strict": true
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"navigation": {
				"type": "object",
				"properties": {
					"type": {
						"type": "string"
					},
					"exactEvent": {
						"type": "string"
					}
				},
				"strict": true
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			}
		},
		"strict": true
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"navigation": {
				"properties": {
					"type": {},
					"exactEvent": {}
				},
				"strict": true
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			}
		},
		"strict": true
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"products": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"category": {
							"type": "string"
						},
						"collection": {
							"type": "string",
							"optional": false
						},
						"title": {
							"type": "string"
						},
						"sku": {
							"type": "string",
							"optional": true
						},
						"id": {
							"type": "string"
						},
						"parentId": {
							"type": "string",
							"optional": true
						},
						"margin": {
							"type": "number",
							"optional": true
						},
						"price": {
							"type": "number"
						},
						"qty": {
							"type": "integer"
						}
					},
					"strict": true
				}
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			}
		},
		"strict": true
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"products": {
				"type": "array",
				"items": {
					"type": "object",
					"properties": {
						"category": {},
						"collection": {
							"optional": false,
							"def": "Production"
						},
						"title": {},
						"sku": {
							"optional": true
						},
						"id": {},
						"parentId": {
							"optional": true
						},
						"margin": {
							"type": "number",
							"optional": true
						},
						"price": {
							"type": "number"
						},
						"qty": {
							"type": "integer"
						}
					},
					"strict": true
				}
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			}
		},
		"strict": true
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"search": {
				"type": "object",
				"properties": {
					"searchUuid": {
						"type": "string"
					},
					"totalRecordCount": {
						"type": "integer"
					},
					"pageInfo": {
						"type": "object",
						"properties": {
							"recordStart": {
								"type": "integer"
							},
							"recordEnd": {
								"type": "integer"
							}
						},
						"strict": true
					},
					"origin": {
						"type": "object",
						"properties": {
							"sayt": {
								"type": "boolean",
								"optional": false
							},
							"dym": {
								"type": "boolean",
								"optional": false
							},
							"search": {
								"type": "boolean",
								"optional": false
							},
							"wisdom": {
								"type": "boolean",
								"optional": false
							}
						},
						"strict": true
					},
					"selectedRefinements": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"type": "string",
									"optional": true
								},
								"displayName": {
									"type": "string"
								},
								"range": {
									"type": "boolean",
									"optional": true
								},
								"or": {
									"type": "boolean",
									"optional": false
								},
								"refinements": {
									"type": "array",
									"items": {
										"type": "object",
										"properties": {
											"value": {
												"type": "string",
												"optional": true
											},
											"count": {
												"type": "integer"
											},
											"type": {
												"type": "string"
											},
											"low": {
												"type": "number",
												"optional": true
											},
											"high": {
												"type": "number",
												"optional": true
											}
										},
										"strict": true
									}
								}
							},
							"strict": true
						}
					},
					"searchTerm": {
						"type": "string"
					},
					"rawSearchResults": {
						"type": "object",
						"properties": {
							"totalRecordCount": {
								"type": "integer"
							},
							"area": {
								"type": "string"
							},
							"biasingProfile": {
								"type": "string"
							},
							"query": {
								"type": "string"
							},
							"originalQuery": {
								"type": "string"
							},
							"template": {
								"type": "object",
								"properties": {
									"name": {
										"type": "string"
									}
								},
								"strict": true
							},
							"pageInfo": {
								"type": "object",
								"properties": {
									"recordStart": {
										"type": "integer"
									},
									"recordEnd": {
										"type": "integer"
									}
								},
								"strict": true
							},
							"matchStrategy": {
								"type": "object",
								"properties": {
									"rules": {
										"type": "object",
										"properties": {
											"termsGreaterThan": {
												"type": "integer"
											},
											"mustMatch": {
												"type": "integer"
											},
											"percentage": {
												"type": "boolean"
											}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"availableNavigation": {
								"type": "object",
								"properties": {
									"name": {
										"type": "string"
									},
									"displayName": {
										"type": "string"
									},
									"range": {
										"type": "boolean"
									},
									"or": {
										"type": "boolean"
									},
									"metadata": {
										"type": "object",
										"properties": {
											"key": {
												"type": "string"
											},
											"name": {
												"type": "string"
											}
										},
										"strict": true
									},
									"refinements": {
										"type": "object",
										"properties": {
											"type": {
												"type": "string"
											},
											"count": {
												"type": "integer"
											},
											"value": {
												"type": "string"
											},
											"high": {
												"type": "string"
											},
											"low": {
												"type": "string"
											}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"selectedNavigation": {
								"type": "object",
								"properties": {
									"name": {
										"type": "string"
									},
									"displayName": {
										"type": "string"
									},
									"range": {
										"type": "boolean"
									},
									"or": {
										"type": "boolean"
									},
									"metadata": {
										"type": "object",
										"properties": {
											"key": {
												"type": "string"
											},
											"name": {
												"type": "string"
											}
										},
										"strict": true
									},
									"refinements": {
										"type": "object",
										"properties": {
											"name": {
												"type": "string"
											},
											"count": {
												"type": "integer"
											},
											"value": {
												"type": "string"
											}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"records": {
								"type": "object",
								"properties": {
									"allMeta": {
										"type": "object"
									},
									"_id": {
										"type": "string"
									},
									"_u": {
										"type": "string"
									},
									"_t": {
										"type": "string"
									}
								},
								"strict": true
							},
							"didYouMean": {
								"type": "string"
							}
						},
						"strict": true,
						"optional": true
					}
				},
				"strict": true
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			},
			"rawSearchResults": {
				"type": "object",
				"properties": {
					"totalRecordCount": {
						"type": "integer",
						"optional": true
					},
					"area": {
						"type": "string",
						"optional": true
					},
					"biasingProfile": {
						"type": "string",
						"optional": true
					},
					"query": {
						"type": "string",
						"optional": true
					},
					"originalQuery": {
						"type": "string",
						"optional": true
					},
					"template": {
						"type": "object",
						"properties": {
							"name": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true,
						"optional": true
					},
					"pageInfo": {
						"type": "object",
						"properties": {
							"recordStart": {
								"type": "integer",
								"optional": true
							},
							"recordEnd": {
								"type": "integer",
								"optional": true
							}
						},
						"strict": true,
						"optional": true
					},
					"matchStrategy": {
						"type": "object",
						"properties": {
							"rules": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"termsGreaterThan": {
											"type": "integer",
											"optional": true
										},
										"mustMatch": {
											"type": "integer",
											"optional": true
										},
										"percentage": {
											"type": "boolean",
											"optional": true
										}
									},
									"strict": true
								},
								"optional": true
							}
						},
						"strict": true,
						"optional": true
					},
					"availableNavigation": {
						"type": "object",
						"properties": {
							"name": {
								"type": "string",
								"optional": true
							},
							"displayName": {
								"type": "string",
								"optional": true
							},
							"range": {
								"type": "boolean",
								"optional": true
							},
							"or": {
								"type": "boolean",
								"optional": true
							},
							"metadata": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"key": {
											"type": "string",
											"optional": true
										},
										"name": {
											"type": "string",
											"optional": true
										}
									},
									"strict": true
								},
								"optional": true
							},
							"refinements": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"type": {
											"type": "string",
											"optional": true
										},
										"count": {
											"type": "integer",
											"optional": true
										},
										"value": {
											"type": "string",
											"optional": true
										},
										"high": {
											"type": "string",
											"optional": true
										},
										"low": {
											"type": "string",
											"optional": true
										}
									},
									"strict": true
								},
								"optional": true
							}
						},
						"strict": true,
						"optional": true
					},
					"selectedNavigation": {
						"type": "object",
						"properties": {
							"name": {
								"type": "string",
								"optional": true
							},
							"displayName": {
								"type": "string",
								"optional": true
							},
							"range": {
								"type": "boolean",
								"optional": true
							},
							"or": {
								"type": "boolean",
								"optional": true
							},
							"metadata": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"key": {
											"type": "string",
											"optional": true
										},
										"name": {
											"type": "string",
											"optional": true
										}
									},
									"strict": true
								},
								"optional": true
							},
							"refinements": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"name": {
											"type": "string",
											"optional": true
										},
										"count": {
											"type": "integer",
											"optional": true
										},
										"value": {
											"type": "string",
											"optional": true
										}
									},
									"strict": true
								},
								"optional": true
							}
						},
						"strict": true,
						"optional": true
					},
					"records": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"allMeta": {
									"type": "object",
									"optional": true,
									"strict": false
								},
								"_id": {
									"type": "string",
									"optional": true
								},
								"_u": {
									"type": "string",
									"optional": true
								},
								"_t": {
									"type": "string",
									"optional": true
								}
							},
							"strict": true
						},
						"optional": true
					},
					"didYouMean": {
						"type": "string",
						"optional": true
					}
				},
				"strict": true,
				"optional": true
			}
		},
		"strict": true
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"search": {
				"properties": {
					"searchUuid": {},
					"totalRecordCount": {
						"type": "integer"
					},
					"pageInfo": {
						"properties": {
							"recordStart": {
								"type": "integer"
							},
							"recordEnd": {
								"type": "integer"
							}
						},
						"strict": true
					},
					"origin": {
						"properties": {
							"sayt": {
								"optional": false,
								"def": false
							},
							"dym": {
								"optional": false,
								"def": false
							},
							"search": {
								"optional": false,
								"def": false
							},
							"wisdom": {
								"optional": false,
								"def": false
							}
						},
						"strict": true
					},
					"selectedRefinements": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"name": {
									"optional": true
								},
								"displayName": {},
								"range": {
									"optional": true
								},
								"or": {
									"optional": false,
									"def": false
								},
								"refinements": {
									"type": "array",
									"items": {
										"type": "object",
										"properties": {
											"value": {
												"optional": true
											},
											"count": {
												"type": "integer"
											},
											"type": {},
											"low": {
												"type": "number",
												"optional": true
											},
											"high": {
												"type": "number",
												"optional": true
											}
										},
										"strict": true
									}
								}
							},
							"strict": true
						}
					},
					"searchTerm": {},
					"rawSearchResults": {
						"properties": {
							"totalRecordCount": {
								"type": "integer"
							},
							"area": {},
							"biasingProfile": {},
							"query": {},
							"originalQuery": {},
							"template": {
								"properties": {
									"name": {}
								},
								"strict": true
							},
							"pageInfo": {
								"properties": {
									"recordStart": {
										"type": "integer"
									},
									"recordEnd": {
										"type": "integer"
									}
								},
								"strict": true
							},
							"matchStrategy": {
								"properties": {
									"rules": {
										"properties": {
											"termsGreaterThan": {
												"type": "integer"
											},
											"mustMatch": {
												"type": "integer"
											},
											"percentage": {}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"availableNavigation": {
								"properties": {
									"name": {},
									"displayName": {},
									"range": {},
									"or": {},
									"metadata": {
										"properties": {
											"key": {},
											"name": {}
										},
										"strict": true
									},
									"refinements": {
										"properties": {
											"type": {},
											"count": {
												"type": "integer"
											},
											"value": {},
											"high": {},
											"low": {}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"selectedNavigation": {
								"properties": {
									"name": {},
									"displayName": {},
									"range": {},
									"or": {},
									"metadata": {
										"properties": {
											"key": {},
											"name": {}
										},
										"strict": true
									},
									"refinements": {
										"properties": {
											"name": {},
											"count": {
												"type": "integer"
											},
											"value": {}
										},
										"strict": true
									}
								},
								"strict": true
							},
							"records": {
								"properties": {
									"allMeta": {},
									"_id": {},
									"_u": {},
									"_t": {}
								},
								"strict": true
							},
							"didYouMean": {}
						},
						"strict": true,
						"optional": true
					}
				},
				"strict": true
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			},
			"rawSearchResults": {
				"properties": {
					"totalRecordCount": {
						"type": "integer"
					},
					"area": {},
					"biasingProfile": {},
					"query": {},
					"originalQuery": {},
					"template": {
						"properties": {
							"name": {}
						},
						"strict": true
					},
					"pageInfo": {
						"properties": {
							"recordStart": {
								"type": "integer"
							},
							"recordEnd": {
								"type": "integer"
							}
						},
						"strict": true
					},
					"matchStrategy": {
						"properties": {
							"rules": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"termsGreaterThan": {
											"type": "integer"
										},
										"mustMatch": {
											"type": "integer"
										},
										"percentage": {}
									},
									"strict": true
								}
							}
						},
						"strict": true
					},
					"availableNavigation": {
						"properties": {
							"name": {},
							"displayName": {},
							"range": {},
							"or": {},
							"metadata": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"key": {},
										"name": {}
									},
									"strict": true
								}
							},
							"refinements": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"type": {},
										"count": {
											"type": "integer"
										},
										"value": {},
										"high": {},
										"low": {}
									},
									"strict": true
								}
							}
						},
						"strict": true
					},
					"selectedNavigation": {
						"properties": {
							"name": {},
							"displayName": {},
							"range": {},
							"or": {},
							"metadata": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"key": {},
										"name": {}
									},
									"strict": true
								}
							},
							"refinements": {
								"type": "array",
								"items": {
									"type": "object",
									"properties": {
										"name": {},
										"count": {
											"type": "integer"
										},
										"value": {}
									},
									"strict": true
								}
							}
						},
						"strict": true
					},
					"records": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"allMeta": {
									"strict": false
								},
								"_id": {},
								"_u": {},
								"_t": {}
							},
							"strict": true
						}
					},
					"didYouMean": {}
				},
				"strict": true
			}
		},
		"strict": true
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"session": {
				"type": "object",
				"properties": {
					"previousSessionId": {
						"type": "string",
						"optional": true
					},
					"newSessionId": {
						"type": "string"
					},
					"previousVisitorId": {
						"type": "string",
						"optional": true
					},
					"newVisitorId": {
						"type": "string"
					}
				},
				"strict": true
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			}
		},
		"strict": true
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"session": {
				"properties": {
					"previousSessionId": {
						"optional": true
					},
					"newSessionId": {},
					"previousVisitorId": {
						"optional": true
					},
					"newVisitorId": {}
				},
				"strict": true
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			}
		},
		"strict": true
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"type": "object",
		"properties": {
			"eventType": {
				"type": "string"
			},
			"customer": {
				"type": "object",
				"properties": {
					"id": {
						"type": "string"
					},
					"area": {
						"type": "string",
						"optional": false
					}
				},
				"strict": true
			},
			"product": {
				"type": "object",
				"properties": {
					"category": {
						"type": "string"
					},
					"collection": {
						"type": "string",
						"optional": false
					},
					"title": {
						"type": "string"
					},
					"sku": {
						"type": "string",
						"optional": true
					},
					"id": {
						"type": "string"
					},
					"parentId": {
						"type": "string",
						"optional": true
					},
					"margin": {
						"type": "number",
						"optional": true
					},
					"price": {
						"type": "number"
					}
				},
				"strict": true
			},
			"visit": {
				"type": "object",
				"properties": {
					"customerData": {
						"type": "object",
						"properties": {
							"visitorId": {
								"type": "string",
								"optional": true
							},
							"sessionId": {
								"type": "string",
								"optional": true
							}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true,
				"strict": true,
				"properties": {
					"*": {
						"type": "string"
					}
				}
			}
		},
		"strict": true
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
		"properties": {
			"eventType": {},
			"customer": {
				"properties": {
					"id": {},
					"area": {
						"optional": false,
						"def": "default"
					}
				},
				"strict": true
			},
			"product": {
				"properties": {
					"category": {},
					"collection": {
						"optional": false,
						"def": "Production"
					},
					"title": {},
					"sku": {
						"optional": true
					},
					"id": {},
					"parentId": {
						"optional": true
					},
					"margin": {
						"type": "number",
						"optional": true
					},
					"price": {
						"type": "number"
					}
				},
				"strict": true
			},
			"visit": {
				"properties": {
					"customerData": {
						"properties": {
							"visitorId": {},
							"sessionId": {}
						},
						"strict": true
					}
				},
				"strict": true
			},
			"additionalMetadata": {
				"optional": true
			}
		},
		"strict": true
	};

/***/ }
/******/ ]);