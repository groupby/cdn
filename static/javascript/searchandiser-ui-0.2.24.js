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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var searchandiser_1 = __webpack_require__(8);
	exports.Searchandiser = searchandiser_1.Searchandiser;
	__webpack_require__(31);
	var utils = __webpack_require__(11);
	exports.utils = utils;
	var groupby_api_1 = __webpack_require__(16);
	exports.BrowserBridge = groupby_api_1.BrowserBridge;
	exports.CloudBridge = groupby_api_1.CloudBridge;
	exports.FluxCapacitor = groupby_api_1.FluxCapacitor;
	exports.Query = groupby_api_1.Query;
	var sayt_1 = __webpack_require__(29);
	exports.Sayt = sayt_1.Sayt;
	var searchandiser = searchandiser_1.initSearchandiser();
	exports.searchandiser = searchandiser;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(2);
	__webpack_require__(3).shim();
	__webpack_require__(4).shim();
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("array.of");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("array.from");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("array-includes");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("string.prototype.repeat");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("string.prototype.startswith");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("ts-helpers");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var init_1 = __webpack_require__(9);
	var tag_1 = __webpack_require__(28);
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
	var riot = __webpack_require__(30);
	exports.CONFIGURATION_MASK = '{collection,area,language,pageSize,sort,fields,customUrlParams,pruneRefinements,disableAutocorrection}'; // tslint:disable:max-line-length
	exports.DEFAULT_CONFIG = { initialSearch: true };
	exports.DEFAULT_URL_CONFIG = { queryParam: 'q', searchUrl: 'search' };
	function initSearchandiser() {
	    return function configure(rawConfig) {
	        if (rawConfig === void 0) { rawConfig = {}; }
	        var config = applyDefaultConfig(rawConfig);
	        validateConfig(config);
	        var flux = Object.assign(initCapacitor(config), groupby_api_1.Events);
	        var services = init_1.initServices(flux, config);
	        riot.mixin(tag_1.MixinFlux(flux, config, services));
	        Object.assign(configure, { flux: flux, services: services, config: config }, new Searchandiser()['__proto__']);
	    };
	}
	exports.initSearchandiser = initSearchandiser;
	function initCapacitor(config) {
	    var finalConfig = transformConfig(config);
	    return new groupby_api_1.FluxCapacitor(finalConfig.customerId, finalConfig, exports.CONFIGURATION_MASK);
	}
	exports.initCapacitor = initCapacitor;
	function applyDefaultConfig(rawConfig) {
	    var config = Object.assign({}, exports.DEFAULT_CONFIG, rawConfig);
	    config.url = Object.assign(exports.DEFAULT_URL_CONFIG, config.url);
	    return config;
	}
	exports.applyDefaultConfig = applyDefaultConfig;
	function validateConfig(config) {
	    if (!config.structure) {
	        throw new Error('must provide a record structure');
	    }
	    var struct = Object.assign(config.structure, config.structure._variantStructure);
	    if (!(struct.title && struct.title.trim())) {
	        throw new Error('structure.title must be the path to the title field');
	    }
	    if (!(struct.price && struct.price.trim())) {
	        throw new Error('structure.price must be the path to the price field');
	    }
	}
	exports.validateConfig = validateConfig;
	function transformConfig(config) {
	    var finalConfig = config;
	    if (config.pageSizes)
	        finalConfig.pageSize = config.pageSizes[0];
	    if (config.bridge) {
	        var bridgeConfig = {};
	        var headers = config.bridge.headers || {};
	        if (config.bridge.skipCache)
	            headers['Skip-Caching'] = 'true';
	        if (config.bridge.skipSemantish)
	            headers['Skip-Semantish'] = 'true';
	        bridgeConfig.headers = headers;
	        Object.assign(finalConfig.bridge, bridgeConfig);
	    }
	    if (common_1.checkNested(config, 'tags', 'sort', 'options')) {
	        finalConfig.sort = [config.tags.sort.options.map(function (val) { return val.value; })[0]];
	    }
	    return finalConfig;
	}
	exports.transformConfig = transformConfig;
	var Searchandiser = (function () {
	    function Searchandiser() {
	    }
	    Searchandiser.prototype.init = function () {
	        if (this.config.initialSearch)
	            this.search();
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
	        return tagName.startsWith('gb-') ? tagName : "gb-" + tagName;
	    };
	    return Searchandiser;
	}());
	exports.Searchandiser = Searchandiser;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(10);
	var filter_1 = __webpack_require__(17);
	var redirect_1 = __webpack_require__(18);
	var tracker_1 = __webpack_require__(19);
	var url_1 = __webpack_require__(24);
	function initServices(flux, config) {
	    var services = {};
	    services.collections = new collections_1.Collections(flux, config);
	    services.filter = new filter_1.Filter(flux, config);
	    services.redirect = new redirect_1.Redirect(flux);
	    services.tracker = new tracker_1.Tracker(flux, config);
	    services.url = new url_1.Url(flux, config, services);
	    startServices(services);
	    return services;
	}
	exports.initServices = initServices;
	function startServices(services) {
	    for (var service in services) {
	        if (services.hasOwnProperty(service)) {
	            services[service].init();
	        }
	    }
	}
	exports.startServices = startServices;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
	exports.COLLECTIONS_UPDATED_EVENT = 'collections_updated';
	var Collections = (function () {
	    function Collections(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        this.counts = {};
	        this.collectionsConfig = common_1.getPath(config, 'tags.collections') || {};
	        this.fetchCounts = common_1.unless(this.collectionsConfig.counts, true);
	        this.options = this.collectionsConfig.options || [];
	        this.isLabeled = this.options.length !== 0
	            && typeof this.options[0] === 'object';
	        this.collections = this.isLabeled
	            ? this.options.map(function (collection) { return collection.value; })
	            : this.options;
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
	            promises_1.then(this.extractCounts)
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var debounce = __webpack_require__(12);
	exports.debounce = debounce;
	var queryString = __webpack_require__(13);
	var filterObject = __webpack_require__(14);
	var oget = __webpack_require__(15);
	exports.LOCATION = {
	    href: function () { return window.location.href; },
	    setSearch: function (search) { return window.location.search = search; },
	    getSearch: function () { return window.location.search; },
	    pathname: function () { return window.location.pathname; },
	    replace: function (url) { return window.location.replace(url); },
	    assign: function (url) { return window.location.assign(url); }
	};
	function findSearchBox() {
	    return oget(findTag('gb-query'), '_tag.searchBox');
	}
	exports.findSearchBox = findSearchBox;
	function findTag(tagName) {
	    return document.querySelector(tagName)
	        || document.querySelector("[data-is=\"" + tagName + "\"]")
	        || document.querySelector("[riot-tag=\"" + tagName + "\"]");
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
	function checkBooleanAttr(attribute, opts) {
	    return typeof opts === 'object'
	        && attribute in opts
	        && opts[attribute] != 'false' // tslint:disable-line:triple-equals
	        && opts[attribute] !== false;
	}
	exports.checkBooleanAttr = checkBooleanAttr;


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("debounce");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("query-string");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("filter-object");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("oget");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("groupby-api");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(8);
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
	exports.FILTER_UPDATED_EVENT = 'filter_updated';
	var Filter = (function () {
	    function Filter(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        this.fluxClone = this.clone();
	        this.filterConfig = common_1.getPath(config, 'tags.filter') || {};
	    }
	    Filter.prototype.init = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.RESULTS, function () { return _this.updateFluxClone(); });
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
	        this.fluxClone.search(searchRequest.query)
	            .then(function (res) { return _this.flux.emit(exports.FILTER_UPDATED_EVENT, res); });
	        var _a;
	    };
	    Filter.prototype.isTargetNav = function (navName) {
	        return navName === this.filterConfig.field;
	    };
	    Filter.prototype.clone = function () {
	        return searchandiser_1.initCapacitor(this.config);
	    };
	    return Filter;
	}());
	exports.Filter = Filter;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var product_transformer_1 = __webpack_require__(20);
	var GbTracker = __webpack_require__(21);
	var groupby_api_1 = __webpack_require__(16);
	var Cookies = __webpack_require__(22);
	var uuid = __webpack_require__(23);
	exports.MAX_COOKIE_AGE = 365; // days
	exports.VISITOR_COOKIE_KEY = 'visitor';
	exports.SESSION_COOKIE_KEY = 'session';
	var Tracker = (function () {
	    function Tracker(flux, config) {
	        this.flux = flux;
	        this.config = config;
	        this._config = this.config.tracker || {};
	        this.tracker = new GbTracker(this.config.customerId, this.config.area);
	        this.transformer = new product_transformer_1.ProductTransformer(this.config.structure || {});
	    }
	    Tracker.prototype.init = function () {
	        this.setVisitorInfo();
	        this.listenForViewProduct();
	    };
	    Tracker.prototype.setVisitorInfo = function () {
	        var visitorId = this._config.visitorId
	            || Cookies.get(exports.VISITOR_COOKIE_KEY)
	            || uuid.v1();
	        var sessionId = this._config.sessionId
	            || Cookies.get(exports.SESSION_COOKIE_KEY)
	            || uuid.v1();
	        this.setVisitor(visitorId, sessionId);
	    };
	    Tracker.prototype.listenForViewProduct = function () {
	        var _this = this;
	        this.flux.on(groupby_api_1.Events.DETAILS, function (_a) {
	            var allMeta = _a.allMeta;
	            var productMeta = _this.transformer.transform(allMeta);
	            _this.tracker.sendViewProductEvent({
	                product: {
	                    productId: productMeta().id,
	                    title: productMeta().title,
	                    price: productMeta().price,
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
	    Tracker.prototype.sendSearchEvent = function (origin) {
	        if (origin === void 0) { origin = 'search'; }
	        this.tracker.sendSearchEvent({
	            search: Object.assign({
	                origin: (_a = {}, _a[origin] = true, _a),
	                query: this.flux.results.originalQuery || ''
	            }, this.flux.results)
	        });
	        var _a;
	    };
	    return Tracker;
	}());
	exports.Tracker = Tracker;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var filterObject = __webpack_require__(14);
	var DEFAULT_STRUCTURE = {
	    id: 'id'
	};
	var ProductTransformer = (function () {
	    function ProductTransformer(struct) {
	        this.struct = Object.assign({}, DEFAULT_STRUCTURE, struct);
	        this.setTransform();
	        this.hasVariants = 'variants' in struct;
	        this.variantStruct = this.struct._variantStructure || this.struct;
	        this.idField = this.extractIdField();
	    }
	    ProductTransformer.prototype.transform = function (allMeta) {
	        var transformedMeta = this.productTransform(allMeta);
	        var variants = this.unpackVariants(transformedMeta);
	        var productMeta = function (variant) {
	            if (variant === void 0) { variant = 0; }
	            if (variant >= variants.length) {
	                throw new Error("cannot access the variant at index " + variant);
	            }
	            else {
	                return variants[variant];
	            }
	        };
	        productMeta.variants = variants;
	        productMeta.transformedMeta = transformedMeta;
	        return productMeta;
	    };
	    ProductTransformer.prototype.unpackVariants = function (allMeta) {
	        var struct = filterObject(this.struct, '!_*');
	        var variantStruct = filterObject(this.variantStruct, '!_*');
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
	        return function (variant) {
	            var remappedVariant = common_1.remap(variant, variantStruct);
	            return filterObject(Object.assign({}, remappedMeta, remappedVariant), '!variants');
	        };
	    };
	    ProductTransformer.prototype.extractIdField = function () {
	        // ensure we actually want the nested id
	        if (this.hasVariants && this.struct._variantStructure && this.variantStruct.id) {
	            return this.struct.variants + "." + this.variantStruct.id;
	        }
	        else {
	            return this.struct.id;
	        }
	    };
	    ProductTransformer.prototype.setTransform = function () {
	        if (typeof this.struct._transform === 'function') {
	            this.productTransform = this.struct._transform;
	        }
	        else {
	            this.productTransform = this.defaultTransform;
	        }
	    };
	    ProductTransformer.prototype.defaultTransform = function (allMeta) {
	        return allMeta;
	    };
	    return ProductTransformer;
	}());
	exports.ProductTransformer = ProductTransformer;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("gb-tracker-client");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("js-cookie");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("node-uuid");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var simple_beautifier_1 = __webpack_require__(25);
	var url_beautifier_1 = __webpack_require__(27);
	var groupby_api_1 = __webpack_require__(16);
	var parseUri = __webpack_require__(26);
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
	            if (query) {
	                this.flux.query = query;
	                this.flux.search(query.raw.query)
	                    .then(function () { return _this.services.tracker.search(); });
	            }
	        }
	    };
	    Url.prototype.active = function () {
	        return common_1.LOCATION.pathname() !== this.urlConfig.searchUrl;
	    };
	    // TODO: better way to do this is with browser history rewrites
	    Url.prototype.update = function (query, refinements) {
	        if (refinements === void 0) { refinements = this.flux.query.raw.refinements; }
	        var queryObj = (_a = new groupby_api_1.Query(query)).withSelectedRefinements.apply(_a, refinements);
	        var url;
	        if (this.beautify) {
	            url = this.beautifier.build(queryObj);
	        }
	        else {
	            url = this.simple.build(queryObj);
	        }
	        Url.setLocation(url, this.urlConfig);
	        var _a;
	    };
	    Url.parseUrl = function (simple) {
	        return simple.parse(common_1.LOCATION.href());
	    };
	    Url.parseBeautifiedUrl = function (beautifier) {
	        return beautifier.parse(common_1.LOCATION.href());
	    };
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(8);
	var groupby_api_1 = __webpack_require__(16);
	var parseUri = __webpack_require__(26);
	var queryString = __webpack_require__(13);
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("parseUri");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var searchandiser_1 = __webpack_require__(8);
	var groupby_api_1 = __webpack_require__(16);
	var parseUri = __webpack_require__(26);
	var queryString = __webpack_require__(13);
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
	        if (unmappedRefinements)
	            query.withSelectedRefinements.apply(query, this.extractUnmapped(unmappedRefinements));
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var sayt_1 = __webpack_require__(29);
	var sayt = new sayt_1.Sayt();
	var FluxTag = (function () {
	    function FluxTag() {
	    }
	    FluxTag.prototype.init = function () {
	        this._style = this.config.stylish ? 'gb-stylish' : '';
	        setTagName(this);
	        setParents(this);
	        setScope(this);
	    };
	    FluxTag.prototype._mixin = function () {
	        var mixins = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            mixins[_i - 0] = arguments[_i];
	        }
	        this.mixin.apply(this, mixins.map(function (mixin) { return new mixin().__proto__; }));
	    };
	    FluxTag.prototype._scopeTo = function (scope) {
	        this._scope = this._parents[scope];
	    };
	    FluxTag.prototype.findParent = function (tag, name) {
	        var parentTag = tag;
	        while (parentTag.root.localName !== name && parentTag.parent) {
	            parentTag = parentTag.parent;
	        }
	        return parentTag;
	    };
	    FluxTag.prototype.configure = function (defaultConfig) {
	        if (defaultConfig === void 0) { defaultConfig = {}; }
	        var rawConfig = Object.assign({}, defaultConfig, common_1.getPath(this.config, "tags." + this._camelTagName), this.opts.__proto__, this.opts);
	        for (var _i = 0, _a = Object.keys(rawConfig); _i < _a.length; _i++) {
	            var key = _a[_i];
	            if (typeof defaultConfig[key] === 'boolean'
	                || rawConfig[key] == true // tslint:disable-line:triple-equals
	                || rawConfig[key] == false) {
	                rawConfig[key] = common_1.checkBooleanAttr(key, rawConfig);
	            }
	        }
	        this._config = rawConfig;
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
	function setTagName(tag) {
	    var htmlTagName = tag.root.tagName.toLowerCase();
	    var tagName = htmlTagName.startsWith('gb-') ?
	        htmlTagName :
	        tag.root.dataset['is'] || tag.root.getAttribute('riot-tag');
	    if (tagName) {
	        tag._tagName = tagName;
	        tag._simpleTagName = tag._tagName.replace(/^gb-/, '');
	        tag._camelTagName = tag._simpleTagName.replace(/-([a-z])/g, function (match) { return match[1].toUpperCase(); });
	    }
	}
	exports.setTagName = setTagName;
	function setParents(tag) {
	    tag._parents = tag.parent ? Object.assign({}, tag.parent['_parents']) : {};
	    if (tag._tagName) {
	        tag._parents[tag._tagName] = tag;
	    }
	    tag._parentsList = [];
	    var currTag = tag;
	    while (currTag = currTag.parent)
	        tag._parentsList.push(currTag);
	}
	exports.setParents = setParents;
	// somehow this function isn't working for the gb-select inside gb-sort
	function setScope(tag) {
	    if (tag._parents && tag._parents[tag.opts.scope]) {
	        tag._scope = tag._parents[tag.opts.scope];
	    }
	    else if (tag.parent && tag.parent._scope) {
	        tag._scope = tag.parent._scope;
	    }
	    else {
	        var parent_1 = tag;
	        while (parent_1.parent)
	            tag._scope = parent_1 = parent_1.parent;
	        tag._top = tag._scope;
	    }
	}
	exports.setScope = setScope;
	function MixinFlux(flux, config, services) {
	    return Object.assign(new FluxTag()['__proto__'], { flux: flux, config: config, services: services });
	}
	exports.MixinFlux = MixinFlux;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("sayt");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("riot");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(32);
	__webpack_require__(37);
	__webpack_require__(39);
	__webpack_require__(42);
	__webpack_require__(55);
	__webpack_require__(58);
	__webpack_require__(60);
	__webpack_require__(62);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(84);
	__webpack_require__(94);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(88);
	__webpack_require__(113);
	__webpack_require__(90);
	__webpack_require__(46);
	__webpack_require__(115);
	__webpack_require__(117);
	__webpack_require__(86);
	__webpack_require__(119);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(33);
	
	__webpack_require__(34);
	
	__webpack_require__(35);
	
	var _gbBreadcrumbs = __webpack_require__(36);
	
	riot.tag2('gb-breadcrumbs', '<yield> <div class="gb-breadcrumbs {_style}"> <gb-query-crumb if="{!_config.hideQuery}"></gb-query-crumb> <gb-list items="{selected}" if="{!_config.hideRefinements}" scope="gb-breadcrumbs"> <gb-list class="gb-navigation-crumb" items="{item.refinements}" inline> <gb-refinement-crumb nav="{parent.item}" ref="{item}"></gb-refinement-crumb> </gb-list> </gb-list> </div> </yield>', 'gb-breadcrumbs .gb-stylish.gb-breadcrumbs,[riot-tag="gb-breadcrumbs"] .gb-stylish.gb-breadcrumbs,[data-is="gb-breadcrumbs"] .gb-stylish.gb-breadcrumbs{ display: flex; justify-content: flex-start; align-items: baseline; }', '', function (opts) {
	    this._mixin(_gbBreadcrumbs.Breadcrumbs);
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-query-crumb', '<div if="{originalQuery}"> <span if="{!_scope.correctedQuery && _scope._config.labels}" class="gb-query-label">{_scope._config.resultsLabel}</span> <span if="{_scope.correctedQuery && _scope._config.labels}" class="gb-query-label">{_scope._config.noResultsLabel}</span> <span class="gb-original-query">{originalQuery}</span> </div> <div if="{correctedQuery}"> <span if="{_scope._config.labels}" class="gb-query-label">{_scope._config.correctedResultsLabel}</span> <span class="gb-corrected-query">{correctedQuery}</span> </div>', '', '', function (opts) {
	    this._scopeTo('gb-breadcrumbs');
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-list', '<ul class="{_style} {inline: \'inline\' in opts}"> <li each="{item, i in opts.items}" class="{active: isActive(i)}"> <yield></yield> </li> </ul>', 'gb-list > ul.gb-stylish { list-style: none; margin: 0; padding: 0; } gb-list > ul.gb-stylish > li { margin: 0 10px; } gb-list > ul.gb-stylish.inline > li { display: inline-block; } gb-list > ul.gb-stylish a { color: #888; cursor: pointer; } gb-list > ul.gb-stylish a:hover { color: black; }', '', function (opts) {
	    this.isActive = opts.activation;
	});

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-refinement-crumb', '<a onclick="{remove}">&times;</a> <b>{nav.displayName}: {_scope.toView(ref)}</b>', '', '', function (opts) {
	    var _this = this;
	
	    this.remove = function () {
	        return _this._scope.remove(opts.ref, opts.nav);
	    };
	    this.nav = opts.nav;
	    this.ref = opts.ref;
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
	exports.DEFAULT_CONFIG = {
	    hideQuery: false,
	    hideRefinements: false,
	    labels: true,
	    resultsLabel: 'Results for:',
	    noResultsLabel: 'No results for:',
	    correctedResultsLabel: 'Showing results for:'
	};
	var Breadcrumbs = (function () {
	    function Breadcrumbs() {
	    }
	    Breadcrumbs.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.toView = common_1.displayRefinement;
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateQueryState);
	        this.flux.on(groupby_api_1.Events.RESET, this.clearRefinements);
	    };
	    Breadcrumbs.prototype.clearRefinements = function () {
	        this.update({ selected: [] });
	    };
	    Breadcrumbs.prototype.updateQueryState = function (_a) {
	        var originalQuery = _a.originalQuery, selectedNavigation = _a.selectedNavigation, correctedQuery = _a.correctedQuery;
	        this.update({ originalQuery: originalQuery, selected: selectedNavigation, correctedQuery: correctedQuery });
	    };
	    Breadcrumbs.prototype.remove = function (ref, nav) {
	        this.flux.unrefine(common_1.toRefinement(ref, nav));
	    };
	    return Breadcrumbs;
	}());
	exports.Breadcrumbs = Breadcrumbs;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	var _gbCarousel = __webpack_require__(38);
	
	riot.tag2('gb-carousel', '<a class="gb-carousel__previous-link" onclick="{prev}">Prev</a> <gb-list items="{options}" activation="{isSelected}"> <yield></yield> </gb-list> <a class="gb-carousel__next-link" onclick="{next}">Next</a>', 'gb-carousel gb-list > ul > li:not(.active),[riot-tag="gb-carousel"] gb-list > ul > li:not(.active),[data-is="gb-carousel"] gb-list > ul > li:not(.active){ display: none; }', '', function (opts) {
	    this._mixin(_gbCarousel.Carousel);
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var Carousel = (function () {
	    function Carousel() {
	    }
	    Carousel.prototype.init = function () {
	        this.configure();
	        this.currentIndex = 0;
	        this.options = common_1.unless(this._config.options, this._scope.options, []);
	    };
	    Carousel.prototype.isSelected = function (index) {
	        return this.currentIndex === index;
	    };
	    Carousel.prototype.next = function () {
	        this.update({ currentIndex: Math.min(this.currentIndex + 1, this.options.length - 1) });
	    };
	    Carousel.prototype.prev = function () {
	        this.update({ currentIndex: Math.max(this.currentIndex - 1, 0) });
	    };
	    return Carousel;
	}());
	exports.Carousel = Carousel;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(40);
	
	__webpack_require__(41);
	
	riot.tag2('gb-category-menu', '<div class="gb-menu {_style}"> <div class="gb-menu__item" each="{opts.sections}"> <gb-category-dropdown class="gb-category-dropdown"></gb-category-dropdown> </div> </div>', 'gb-category-menu .gb-stylish.gb-menu,[riot-tag="gb-category-menu"] .gb-stylish.gb-menu,[data-is="gb-category-menu"] .gb-stylish.gb-menu{ display: flex; flex-direction: row; justify-content: center; }', '', function (opts) {});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	riot.tag2('gb-category-dropdown', '<div class="gb-dropdown {_style}"> <button type="button" class="gb-dropdown__button">{name}</button> <div class="gb-dropdown__content"> <gb-category-section if="{items}"></gb-category-section> <gb-category-section each="{subsections}" named="{true}"></gb-category-section> </div> <div class="gb-dropdown__images"> <img src="" each="{results.images}"> </div> </div>', 'gb-category-dropdown .gb-dropdown,[riot-tag="gb-category-dropdown"] .gb-dropdown,[data-is="gb-category-dropdown"] .gb-dropdown{ position: relative; display: inline-block; } gb-category-dropdown .gb-dropdown__content,[riot-tag="gb-category-dropdown"] .gb-dropdown__content,[data-is="gb-category-dropdown"] .gb-dropdown__content{ display: none; position: absolute; min-width: 160px; background-color: #fff; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); } gb-category-dropdown .gb-dropdown:hover .gb-dropdown__content,[riot-tag="gb-category-dropdown"] .gb-dropdown:hover .gb-dropdown__content,[data-is="gb-category-dropdown"] .gb-dropdown:hover .gb-dropdown__content{ display: block; } gb-category-dropdown .gb-stylish .gb-dropdown__button,[riot-tag="gb-category-dropdown"] .gb-stylish .gb-dropdown__button,[data-is="gb-category-dropdown"] .gb-stylish .gb-dropdown__button{ border: none; cursor: pointer; padding: 16px; width: 100%; } gb-category-dropdown .gb-stylish .gb-dropdown__content,[riot-tag="gb-category-dropdown"] .gb-stylish .gb-dropdown__content,[data-is="gb-category-dropdown"] .gb-stylish .gb-dropdown__content{ flex-wrap: wrap; background-color: #f9f9f9; min-width: 272px; } gb-category-dropdown .gb-stylish.gb-dropdown:hover .gb-dropdown__content,[riot-tag="gb-category-dropdown"] .gb-stylish.gb-dropdown:hover .gb-dropdown__content,[data-is="gb-category-dropdown"] .gb-stylish.gb-dropdown:hover .gb-dropdown__content{ display: flex; }', '', function (opts) {
	  var sayt = __webpack_require__(29);
	  this.parentOpts = this.parent.opts;
	  var saytConfig = Object.assign({ products: 4 }, this.parentOpts.config.sayt);
	
	  sayt.configure({
	    subdomain: this.parentOpts.config.customerId,
	    collection: this.parentOpts.config.collection,
	    autocomplete: {},
	    productSearch: { area: this.parentOpts.config.area, numProducts: saytConfig.products }
	  });
	
	  this.updateSectionImages = function (event) {
	    return console.dir(event.target);
	  };
	  this.updateCategoryImages = function (event) {
	    return console.dir(event.target);
	  };
	});

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-category-section', '<div class="gb-category-section {_style}"> <a if="{opts.named}" class="gb-category-section__header" onmouseover="{updateSectionImages}" data-try="{name}">{name}</a> <a each="{item in items}" class="gb-category-section__link" onmouseover="{updateCategoryImages}">{item}</a> </div>', 'gb-category-section .gb-stylish.gb-category-section,[riot-tag="gb-category-section"] .gb-stylish.gb-category-section,[data-is="gb-category-section"] .gb-stylish.gb-category-section{ min-width: 120px; flex-wrap: wrap; padding: 6px 8px; } gb-category-section .gb-stylish .gb-category-section__header,[riot-tag="gb-category-section"] .gb-stylish .gb-category-section__header,[data-is="gb-category-section"] .gb-stylish .gb-category-section__header{ padding: 6px 4px; margin: 0; font-size: 1.1em; font-weight: bold; } gb-category-section .gb-stylish a,[riot-tag="gb-category-section"] .gb-stylish a,[data-is="gb-category-section"] .gb-stylish a{ padding: 3px 4px; text-decoration: none; display: block; } gb-category-section .gb-stylish a:hover,[riot-tag="gb-category-section"] .gb-stylish a:hover,[data-is="gb-category-section"] .gb-stylish a:hover{ background-color: #f1f1f1; }', '', function (opts) {
	    this.parentOpts = this.parent.parent.opts;
	    this.updateSectionImages = this.parent.parent.updateSectionImages;
	    this.updateCategoryImages = this.parent.parent.updateCategoryImages;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(43);
	
	__webpack_require__(45);
	
	__webpack_require__(44);
	
	__webpack_require__(34);
	
	__webpack_require__(46);
	
	var _gbCollections = __webpack_require__(54);
	
	riot.tag2('gb-collections', '<yield> <gb-list class="gb-collections {_style}" items="{collections}" if="{!_config.dropdown}" scope="gb-collections" inline> <gb-collection-item></gb-collection-item> </gb-list> <gb-select if="{_config.dropdown}" scope="gb-collections"> <gb-custom-select> <gb-collection-dropdown-item></gb-collection-dropdown-item> </gb-custom-select> </gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbCollections.Collections);
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(44);
	
	riot.tag2('gb-collection-item', '<a class="gb-collection" data-collection="{item}" onclick="{_scope.switchCollection}"> <span class="gb-collection__name">{_scope.labels[item] || item}</span> <gb-badge if="{_scope._config.counts}">{_scope.counts[item]}</gb-badge> </a>', '', '', function (opts) {});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-badge', '<span class="{_style}"><yield></yield></span>', 'gb-badge .gb-stylish,[riot-tag="gb-badge"] .gb-stylish,[data-is="gb-badge"] .gb-stylish{ display: inline-block; min-width: 10px; max-height: 20px; padding: 4px 7px; border-radius: 10px; font-size: 12px; font-weight: bold; line-height: 1; color: #fff; background-color: #ccc; text-align: center; white-space: nowrap; vertical-align: middle; }', '', function (opts) {});

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	riot.tag2('gb-collection-dropdown-item', '<a class="gb-collection" onclick="{selectDropdown}"> <span class="gb-collection__name">{option.label || option}</span> <gb-badge>{_scope.counts[option.value || option]}</gb-badge> </a>', '', '', function (opts) {
	  var _this = this;
	
	  this.selectDropdown = function () {
	    if (_typeof(_this.option) === 'object') {
	      _this._scope.selectCustom(_this.option);
	    } else {
	      _this._scope.selectCustom({
	        label: _this.option,
	        value: _this.option
	      });
	    }
	  };
	});

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(47);
	
	__webpack_require__(50);
	
	var _gbSelect = __webpack_require__(48);
	
	riot.tag2('gb-select', '<yield> <gb-native-select if="{_config.native}"></gb-native-select> <gb-custom-select if="{!_config.native}"></gb-custom-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbSelect.Select);
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSelect = __webpack_require__(48);
	
	riot.tag2('gb-native-select', '<select name="selector" onchange="{_scope.selectNative}"> <option if="{!_scope.default}" value="" selected disabled>{_scope.selectLabel()}</option> <option each="{option in _scope.options}" if="{!option.clear}" value="{optionValue(option)}">{optionLabel(option)}</option> </select>', '', '', function (opts) {
	    this.optionLabel = _gbSelect.Select.optionLabel;
	    this.optionValue = _gbSelect.Select.optionValue;
	    this._scopeTo('gb-select');
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Select = (function () {
	    function Select() {
	    }
	    Select.prototype.init = function () {
	        this._config = this._scope._config;
	        this.iconUrl = __webpack_require__(49);
	        this.label = this._config.label || 'Select';
	        this.clearOption = { label: this._config.clear || 'Unselect', clear: true };
	        this.options = this._scope.options || [];
	        this.callback = this._scope.onselect;
	        this.default = !('clear' in this._config);
	        if (this.default) {
	            this.selectedOption = typeof this.options[0] === 'object' ? this.options[0].label : this.options[0];
	        }
	    };
	    Select.prototype.updateOptions = function (options) {
	        this.update({ options: this.default ? options : [this.clearOption].concat(options) });
	    };
	    Select.prototype.selectLabel = function () {
	        return this.selectedOption || (this.selected ? this.clearOption : this.label);
	    };
	    Select.prototype.prepFocus = function () {
	        return this.focused = false;
	    };
	    Select.prototype.selectButton = function () {
	        return this.tags['gb-custom-select'].tags['gb-select-button'].root;
	    };
	    Select.prototype.nativeSelect = function () {
	        if (this.tags['gb-native-select']) {
	            return this.tags['gb-native-select'].selector;
	        }
	        else {
	            return this.root.querySelector('select');
	        }
	    };
	    Select.prototype.unfocus = function () {
	        this.focused = this._config.hover || !this.focused;
	        if (!this.focused)
	            this.selectButton().blur();
	    };
	    Select.prototype.selectOption = function (selectedOption, value) {
	        this.update({ selectedOption: selectedOption });
	        if (this.callback) {
	            try {
	                this.callback(JSON.parse(value));
	            }
	            catch (e) {
	                this.callback(value || '*');
	            }
	        }
	    };
	    Select.prototype.selectNative = function (event) {
	        var option = Array.from(event.target.selectedOptions)[0];
	        var selected = option.value;
	        this.nativeSelect().options[0].disabled = !selected;
	        this.update({ selected: selected });
	        this.selectOption(option.text, selected);
	    };
	    Select.prototype.selectCustom = function (_a) {
	        var value = _a.value, label = _a.label;
	        this.selectButton().blur();
	        this.selectOption(label, value);
	    };
	    Select.prototype.clearSelection = function () {
	        return this.selectOption(undefined, '*');
	    };
	    Select.optionValue = function (option) {
	        return typeof option === 'object' ? JSON.stringify(option.value) : option;
	    };
	    Select.optionLabel = function (option) {
	        return typeof option === 'object' ? option.label : option;
	    };
	    return Select;
	}());
	exports.Select = Select;


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQLyYwAAAAE3RSTlMADQ46Ozw9SElKS0y5x+zz9Pj5WslQRAAAAQdJREFUeJztzlcOwkAQBFFyxjbM/e9KFsbrNGK3V6Cq/1a/yYSIiIiIiIiIiIiIfqRp8kF/q2LtG+yLedT/yk4uwf5sZUTBsjJzCa7/FlFw//cI7v/xBMvSzCV4/scSLF7/ZueN6z+OoPY/TlD7jyI4mLkEH/9mh68Bs6NL0Pg/zr4G+AQJ/l2CJP8OQaL/ULAV/48UJPwfJUj6P0KQ+H9QkPx/QCD4DwU78X+PQPTfKZD9dwiE/60C6X+LQPwfCtT/gUD+3yfQ/HcLVP9dAt1/u0D53ybQ/ocC9X9ToP//FOT4rwvy/L8Fuf5fgnz/D0HO/5sg7/9VkPmfiIiIiIiIiIiIiP6gC0vzP5P1npi3AAAAAElFTkSuQmCC"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(51);
	
	__webpack_require__(52);
	
	__webpack_require__(53);
	
	riot.tag2('gb-custom-select', '<div class="gb-select {_scope._config.hover ? \'hoverable\' : \'clickable\'} {_style}"> <button data-is="gb-select-button" type="button"></button> <gb-option-list> <yield> <gb-option option="{option}" send="{option.clear ? _scope.clearSelection : _scope.selectCustom}"></gb-option> </yield> </gb-option-list> </div>', 'gb-custom-select .gb-select,[riot-tag="gb-custom-select"] .gb-select,[data-is="gb-custom-select"] .gb-select{ position: relative; display: inline-block; } gb-custom-select gb-option-list,[riot-tag="gb-custom-select"] gb-option-list,[data-is="gb-custom-select"] gb-option-list{ display: none; z-index: 100; position: absolute; min-width: 160px; background-color: #f6f6f6; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); max-height: 300px; overflow-y: scroll; } gb-custom-select .gb-select.hoverable:hover gb-option-list,[riot-tag="gb-custom-select"] .gb-select.hoverable:hover gb-option-list,[data-is="gb-custom-select"] .gb-select.hoverable:hover gb-option-list,gb-custom-select .gb-select.clickable button:focus + gb-option-list,[riot-tag="gb-custom-select"] .gb-select.clickable button:focus + gb-option-list,[data-is="gb-custom-select"] .gb-select.clickable button:focus + gb-option-list,gb-custom-select gb-option-list:hover,[riot-tag="gb-custom-select"] gb-option-list:hover,[data-is="gb-custom-select"] gb-option-list:hover{ display: block; } gb-custom-select .gb-stylish.gb-select:hover button,[riot-tag="gb-custom-select"] .gb-stylish.gb-select:hover button,[data-is="gb-custom-select"] .gb-stylish.gb-select:hover button,gb-custom-select .gb-stylish.gb-select button:focus,[riot-tag="gb-custom-select"] .gb-stylish.gb-select button:focus,[data-is="gb-custom-select"] .gb-stylish.gb-select button:focus{ border-color: #aaa; } gb-custom-select button,[riot-tag="gb-custom-select"] button,[data-is="gb-custom-select"] button{ overflow-x: hidden; display: flex; align-items: center; font-size: 14px; border: none; cursor: pointer; padding: 8px 16px; width: 100%; background-color: #eee; border: 2px solid #ddd; border-radius: 4px; white-space: nowrap; } gb-custom-select .gb-stylish button:focus,[riot-tag="gb-custom-select"] .gb-stylish button:focus,[data-is="gb-custom-select"] .gb-stylish button:focus{ outline: none; }', '', function (opts) {
	    this._scopeTo('gb-select');
	});

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-select-button', '<yield> <span class="gb-button__label">{_scope.selectLabel()}</span> <img riot-src="{_scope.iconUrl}" alt=""> </yield>', 'gb-select-button img,[riot-tag="gb-select-button"] img,[data-is="gb-select-button"] img{ margin-left: 10px; margin-top: 2px; height: 24px; }', '', function (opts) {
	    this.root.addEventListener('focus', this._scope.prepFocus);
	    this.root.addEventListener('click', this._scope.unFocus);
	});

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-option-list', '<ul> <li each="{option in _scope.options}" class="gb-select__option {clear: option.clear}" if="{option.clear ? _scope.selectedOption : true}"> <yield></yield> </li> </ul>', 'gb-option-list ul,[riot-tag="gb-option-list"] ul,[data-is="gb-option-list"] ul{ margin: 0; padding: 0; list-style: none; } gb-option-list ul:hover,[riot-tag="gb-option-list"] ul:hover,[data-is="gb-option-list"] ul:hover{ display: block; } gb-option-list a,[riot-tag="gb-option-list"] a,[data-is="gb-option-list"] a{ cursor: pointer; display: block; text-decoration: none; color: black; padding: 10px 12px; } gb-option-list a:hover,[riot-tag="gb-option-list"] a:hover,[data-is="gb-option-list"] a:hover{ background-color: #eee; }', '', function (opts) {});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSelect = __webpack_require__(48);
	
	riot.tag2('gb-option', '<a onclick="{send}">{label}</a>', '', '', function (opts) {
	    var _this = this;
	
	    this.label = _gbSelect.Select.optionLabel(opts.option);
	    this.value = _gbSelect.Select.optionValue(opts.option);
	    this.send = function () {
	        return opts.send(_this);
	    };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(10);
	exports.DEFAULT_CONFIG = {
	    options: [],
	    counts: true,
	    dropdown: false
	};
	var Collections = (function () {
	    function Collections() {
	    }
	    Collections.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.options = this._config.options;
	        var collectionsService = this.services.collections;
	        this.collections = collectionsService.collections;
	        this.labels = collectionsService.isLabeled
	            ? this._config.options.reduce(this.extractLabels, {})
	            : {};
	        this.flux.on(collections_1.COLLECTIONS_UPDATED_EVENT, this.updateCounts);
	    };
	    Collections.prototype.updateCounts = function (counts) {
	        this.update({ counts: counts });
	    };
	    Collections.prototype.switchCollection = function (event) {
	        var element = event.target;
	        while (element.tagName !== 'A')
	            element = element.parentElement;
	        this.onselect(element.dataset['collection']);
	    };
	    Collections.prototype.onselect = function (collection) {
	        this.flux.switchCollection(collection);
	    };
	    Collections.prototype.extractLabels = function (labels, collection) {
	        return Object.assign(labels, (_a = {}, _a[collection.value] = collection.label, _a));
	        var _a;
	    };
	    return Collections;
	}());
	exports.Collections = Collections;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbDetails = __webpack_require__(56);
	
	riot.tag2('gb-details', '<div class="gb-details"> <yield></yield> </div>', '', '', function (opts) {
	    this._mixin(_gbDetails.Details);
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var product_transformer_1 = __webpack_require__(20);
	var clone = __webpack_require__(57);
	var groupby_api_1 = __webpack_require__(16);
	exports.DEFAULT_CONFIG = {
	    idParam: 'id'
	};
	var Details = (function () {
	    function Details() {
	    }
	    Details.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.query = common_1.getParam(this._config.idParam);
	        this.struct = this.config.structure || {};
	        this.transformer = new product_transformer_1.ProductTransformer(this.struct);
	        this.flux.on(groupby_api_1.Events.DETAILS, this.updateRecord);
	        if (this.query)
	            this.flux.details(this.query, this.transformer.idField);
	    };
	    Details.prototype.updateRecord = function (_a) {
	        var allMeta = _a.allMeta;
	        var productMeta = this.transformer.transform(clone(allMeta, false));
	        this.update({ productMeta: productMeta, allMeta: productMeta() });
	    };
	    return Details;
	}());
	exports.Details = Details;


/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("clone");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	var _gbDidYouMean = __webpack_require__(59);
	
	riot.tag2('gb-did-you-mean', '<yield> <gb-list class="{_style}" items="{didYouMean}" scope="gb-did-you-mean" inline> <a onclick="{_scope.send}">{item}</a> </gb-list> </yield>', '', '', function (opts) {
	    this._mixin(_gbDidYouMean.DidYouMean);
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var groupby_api_1 = __webpack_require__(16);
	var DidYouMean = (function () {
	    function DidYouMean() {
	    }
	    DidYouMean.prototype.init = function () {
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateDidYouMean);
	    };
	    DidYouMean.prototype.send = function (event) {
	        var _this = this;
	        this.flux.rewrite(event.target.text)
	            .then(function () { return _this.services.tracker.didYouMean(); });
	    };
	    DidYouMean.prototype.updateDidYouMean = function (_a) {
	        var didYouMean = _a.didYouMean;
	        this.update({ didYouMean: didYouMean });
	    };
	    return DidYouMean;
	}());
	exports.DidYouMean = DidYouMean;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(46);
	
	var _gbFilter = __webpack_require__(61);
	
	riot.tag2('gb-filter', '<yield> <gb-select scope="gb-filter"> </gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbFilter.Filter);
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var filter_1 = __webpack_require__(17);
	var common_1 = __webpack_require__(11);
	exports.DEFAULT_CONFIG = {
	    field: undefined,
	    label: 'Filter',
	    clear: 'Unfiltered'
	};
	var Filter = (function () {
	    function Filter() {
	    }
	    Filter.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.flux.on(filter_1.FILTER_UPDATED_EVENT, this.updateValues);
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
	        var converted = this.convertRefinements(res.availableNavigation);
	        if (this.tags['gb-select']) {
	            this.tags['gb-select'].updateOptions(converted);
	        }
	        else {
	            this.update({ options: converted });
	        }
	    };
	    Filter.prototype.onselect = function (value) {
	        if (this.selected)
	            this.flux.unrefine(this.selected, { skipSearch: true });
	        if (value === '*') {
	            this.flux.reset();
	        }
	        else {
	            this.flux.refine(this.selected = common_1.toRefinement(value, { name: this._config.field }));
	        }
	    };
	    return Filter;
	}());
	exports.Filter = Filter;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(63);
	
	__webpack_require__(64);
	
	__webpack_require__(66);
	
	var _gbNavigation = __webpack_require__(67);
	
	riot.tag2('gb-navigation', '<yield> <div class="gb-side-nav {_style}"> <gb-refinement-list each="{nav in processed}"></gb-refinement-list> </div> </yield>', 'gb-navigation .gb-stylish.gb-side-nav,[riot-tag="gb-navigation"] .gb-stylish.gb-side-nav,[data-is="gb-navigation"] .gb-stylish.gb-side-nav{ padding: 12px; }', '', function (opts) {
	    this._mixin(_gbNavigation.Navigation);
	});

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-refinement-list', '<div id="{nav.name}" class="{_style}"> <h4 class="gb-navigation-title">{nav.displayName}</h4> <ul> <gb-selected-refinement if="{_config.showSelected}" each="{ref in nav.selected}"></gb-selected-refinement> <gb-available-refinement each="{ref in nav.refinements}"></gb-available-refinement> <li class="gb-more-refinements" if="{nav.moreRefinements}"> <a href="#" onclick="{moreRefinements}">More</a> </li> </ul> </div>', 'gb-refinement-list .gb-stylish.gb-refinement-list .gb-navigation-title,[riot-tag="gb-refinement-list"] .gb-stylish.gb-refinement-list .gb-navigation-title,[data-is="gb-refinement-list"] .gb-stylish.gb-refinement-list .gb-navigation-title{ font-size: 18px; margin: 10px 0; } gb-refinement-list .gb-stylish.gb-refinement-list ul,[riot-tag="gb-refinement-list"] .gb-stylish.gb-refinement-list ul,[data-is="gb-refinement-list"] .gb-stylish.gb-refinement-list ul{ margin: 0; padding-left: 8px; }', '', function (opts) {
	  var _this = this;
	
	  this.moreRefinements = function () {
	    _this.flux.refinements(_this.nav.name);
	    _this.nav.moreRefinements = false;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(44);
	
	var _gbRefinement = __webpack_require__(65);
	
	riot.tag2('gb-available-refinement', '<li class="gb-ref {_style}"> <a class="gb-ref__link" onclick="{send}"> <span class="gb-ref__title">{toView(ref)}</span> <span class="gb-filler"></span> <gb-badge if="{_config.badge}">{ref.count}</gb-badge> </a> </li>', 'gb-available-refinement .gb-stylish,[riot-tag="gb-available-refinement"] .gb-stylish,[data-is="gb-available-refinement"] .gb-stylish{ list-style: none; } gb-available-refinement .gb-stylish .gb-filler,[riot-tag="gb-available-refinement"] .gb-stylish .gb-filler,[data-is="gb-available-refinement"] .gb-stylish .gb-filler{ flex-grow: 1; } gb-available-refinement .gb-stylish .gb-ref__link,[riot-tag="gb-available-refinement"] .gb-stylish .gb-ref__link,[data-is="gb-available-refinement"] .gb-stylish .gb-ref__link{ cursor: pointer; display: flex; padding: 4px 6px; border-radius: 4px; color: black; font-size: 14px; text-decoration: none; align-items: baseline; } gb-available-refinement .gb-stylish .gb-ref__link:hover,[riot-tag="gb-available-refinement"] .gb-stylish .gb-ref__link:hover,[data-is="gb-available-refinement"] .gb-stylish .gb-ref__link:hover{ background-color: #ddd; }', '', function (opts) {
	    this._mixin(_gbRefinement.AvailableRefinement);
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var Refinement = (function () {
	    function Refinement() {
	    }
	    Refinement.prototype.init = function () {
	        this._scopeTo('gb-navigation');
	        this.toView = common_1.displayRefinement;
	    };
	    return Refinement;
	}());
	exports.Refinement = Refinement;
	var AvailableRefinement = (function (_super) {
	    __extends(AvailableRefinement, _super);
	    function AvailableRefinement() {
	        _super.apply(this, arguments);
	    }
	    AvailableRefinement.prototype.send = function () {
	        return this._scope.send(this.ref, this.nav);
	    };
	    return AvailableRefinement;
	}(Refinement));
	exports.AvailableRefinement = AvailableRefinement;
	var SelectedRefinement = (function (_super) {
	    __extends(SelectedRefinement, _super);
	    function SelectedRefinement() {
	        _super.apply(this, arguments);
	    }
	    SelectedRefinement.prototype.remove = function () {
	        return this._scope.remove(this.ref, this.nav);
	    };
	    return SelectedRefinement;
	}(Refinement));
	exports.SelectedRefinement = SelectedRefinement;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRefinement = __webpack_require__(65);
	
	riot.tag2('gb-selected-refinement', '<li class="gb-ref {_style}"> <a class="gb-ref__link" onclick="{remove}">&times;</a> <span class="gb-ref__value">{toView(ref)}</span> </li>', 'gb-selected-refinement .gb-stylish,[riot-tag="gb-selected-refinement"] .gb-stylish,[data-is="gb-selected-refinement"] .gb-stylish{ position: relative; list-style: none; padding: 4px 6px; font-size: 14px; } gb-selected-refinement .gb-stylish .gb-ref__link,[riot-tag="gb-selected-refinement"] .gb-stylish .gb-ref__link,[data-is="gb-selected-refinement"] .gb-stylish .gb-ref__link{ cursor: pointer; left: -8px; position: absolute; color: black; text-decoration: none; } gb-selected-refinement .gb-stylish .gb-ref__link:hover,[riot-tag="gb-selected-refinement"] .gb-stylish .gb-ref__link:hover,[data-is="gb-selected-refinement"] .gb-stylish .gb-ref__link:hover{ color: red; font-weight: bold; }', '', function (opts) {
	    this._mixin(_gbRefinement.SelectedRefinement);
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var clone = __webpack_require__(57);
	var groupby_api_1 = __webpack_require__(16);
	exports.DEFAULT_CONFIG = {
	    badge: true,
	    showSelected: true
	};
	var Navigation = (function () {
	    function Navigation() {
	    }
	    Navigation.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
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
	        }
	        return this.processed;
	    };
	    Navigation.prototype.processNavigations = function (_a) {
	        var selectedNavigation = _a.selectedNavigation, availableNavigation = _a.availableNavigation;
	        var processed = clone(availableNavigation);
	        selectedNavigation.forEach(function (selNav) {
	            var availNav = processed.find(function (nav) { return nav.name === selNav.name; });
	            if (availNav) {
	                availNav.selected = selNav.refinements;
	            }
	            else {
	                processed.unshift(Object.assign({}, selNav, { selected: selNav.refinements, refinements: [] }));
	            }
	        });
	        return processed;
	    };
	    Navigation.prototype.send = function (ref, nav) {
	        return this.flux.refine(common_1.toRefinement(ref, nav));
	    };
	    Navigation.prototype.remove = function (ref, nav) {
	        return this.flux.unrefine(common_1.toRefinement(ref, nav));
	    };
	    return Navigation;
	}());
	exports.Navigation = Navigation;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(46);
	
	var _gbPageSize = __webpack_require__(69);
	
	riot.tag2('gb-page-size', '<yield> <gb-select scope="gb-page-size"> </gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbPageSize.PageSize);
	});

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	exports.DEFAULT_CONFIG = {
	    resetOffset: false
	};
	var PageSize = (function () {
	    function PageSize() {
	    }
	    PageSize.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.options = this.config.pageSizes || [10, 25, 50, 100];
	    };
	    PageSize.prototype.onselect = function (value) {
	        var _this = this;
	        this.flux.resize(value, this._config.resetOffset)
	            .then(function () { return _this.services.tracker.search(); });
	    };
	    return PageSize;
	}());
	exports.PageSize = PageSize;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);
	
	var _gbPager = __webpack_require__(73);
	
	riot.tag2('gb-pager', '<div class="gb-pager {_style}"> <a class="gb-pager__link prev {disabled: _scope.backDisabled}" onclick="{_scope.pager.prev}"> <gb-icon if="{_config.icons}" value="{_config.prev_icon}"></gb-icon> <span if="{_config.labels}">{_config.prev_label}</span> </a> <yield></yield> <a class="gb-pager__link next {disabled: _scope.forwardDisabled}" onclick="{_scope.pager.next}"> <span if="{_config.labels}">{_config.next_label}</span> <gb-icon if="{_config.icons}" value="{_config.next_icon}"></gb-icon> </a> </div>', 'gb-pager .gb-stylish a,[riot-tag="gb-pager"] .gb-stylish a,[data-is="gb-pager"] .gb-stylish a{ cursor: pointer; } gb-pager .gb-stylish.gb-pager,[riot-tag="gb-pager"] .gb-stylish.gb-pager,[data-is="gb-pager"] .gb-stylish.gb-pager{ display: flex; } gb-pager .gb-stylish .gb-pager__link,[riot-tag="gb-pager"] .gb-stylish .gb-pager__link,[data-is="gb-pager"] .gb-stylish .gb-pager__link{ display: flex; text-decoration: none; color: #888; padding: 5px 14px; } gb-pager .gb-stylish .gb-pager__link:hover,[riot-tag="gb-pager"] .gb-stylish .gb-pager__link:hover,[data-is="gb-pager"] .gb-stylish .gb-pager__link:hover{ color: black; } gb-pager .gb-stylish .gb-pager__link.disabled,[riot-tag="gb-pager"] .gb-stylish .gb-pager__link.disabled,[data-is="gb-pager"] .gb-stylish .gb-pager__link.disabled{ color: #ddd; cursor: not-allowed; } gb-pager .gb-stylish gb-pages,[riot-tag="gb-pager"] .gb-stylish gb-pages,[data-is="gb-pager"] .gb-stylish gb-pages{ flex: 1; } gb-pager .gb-stylish gb-icon img,[riot-tag="gb-pager"] .gb-stylish gb-icon img,[data-is="gb-pager"] .gb-stylish gb-icon img{ width: 20px; }', '', function (opts) {
	    this._mixin(_gbPager.Pager);
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbIcon = __webpack_require__(72);
	
	riot.tag2('gb-icon', '<i if="{classes}" class="{classes}"></i> <img if="{url}" riot-src="{url}"></img>', '', '', function (opts) {
	    this._mixin(_gbIcon.Icon);
	});

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	exports.IMAGE_PATTERN = /.*\..*/;
	exports.DATA_URL_PREFIX = 'data:image/';
	var Icon = (function () {
	    function Icon() {
	    }
	    Icon.prototype.init = function () {
	        this.configure();
	        if (this.isImage(this._config.value)) {
	            this.url = this._config.value;
	        }
	        else {
	            this.classes = this._config.value;
	        }
	    };
	    Icon.prototype.isImage = function (value) {
	        var matches = value.match(exports.IMAGE_PATTERN);
	        return (matches && matches.length > 0) || value.startsWith(exports.DATA_URL_PREFIX);
	    };
	    return Icon;
	}());
	exports.Icon = Icon;


/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	var Pager = (function () {
	    function Pager() {
	    }
	    Pager.prototype.init = function () {
	        this._scopeTo('gb-paging');
	        this._config = this._scope._config;
	    };
	    return Pager;
	}());
	exports.Pager = Pager;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbPages = __webpack_require__(75);
	
	riot.tag2('gb-pages', '<ul class="gb-pages {_style}" if="{_config.pages}"> <span class="gb-pages__ellipsis" if="{_scope.lowOverflow}">&hellip;</span> <li each="{pageNumber in _scope.pageNumbers}"> <a class="gb-pages__page {selected: _scope.currentPage === pageNumber}" onclick="{jumpTo}">{pageNumber}</a> </li> <span class="gb-pages__ellipsis" if="{_scope.highOverflow}">&hellip;</span> </ul>', 'gb-pages .gb-stylish a,[riot-tag="gb-pages"] .gb-stylish a,[data-is="gb-pages"] .gb-stylish a{ cursor: pointer; } gb-pages .gb-stylish.gb-pages,[riot-tag="gb-pages"] .gb-stylish.gb-pages,[data-is="gb-pages"] .gb-stylish.gb-pages{ margin: 0; padding: 0; list-style: none; display: flex; align-items: center; justify-content: center; height: 100%; } gb-pages .gb-stylish.gb-pages li,[riot-tag="gb-pages"] .gb-stylish.gb-pages li,[data-is="gb-pages"] .gb-stylish.gb-pages li{ display: inline; } gb-pages .gb-stylish .gb-pages__page,[riot-tag="gb-pages"] .gb-stylish .gb-pages__page,[data-is="gb-pages"] .gb-stylish .gb-pages__page,gb-pages .gb-stylish .gb-pages__ellipsis,[riot-tag="gb-pages"] .gb-stylish .gb-pages__ellipsis,[data-is="gb-pages"] .gb-stylish .gb-pages__ellipsis{ text-decoration: none; color: #888; } gb-pages .gb-stylish .gb-pages__page,[riot-tag="gb-pages"] .gb-stylish .gb-pages__page,[data-is="gb-pages"] .gb-stylish .gb-pages__page{ padding: 0 4px; } gb-pages .gb-stylish .gb-pages__page:hover,[riot-tag="gb-pages"] .gb-stylish .gb-pages__page:hover,[data-is="gb-pages"] .gb-stylish .gb-pages__page:hover,gb-pages .gb-stylish .gb-pages__page.selected,[riot-tag="gb-pages"] .gb-stylish .gb-pages__page.selected,[data-is="gb-pages"] .gb-stylish .gb-pages__page.selected{ color: black; }', '', function (opts) {
	    this._mixin(_gbPages.Pages);
	});

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	var Pages = (function () {
	    function Pages() {
	    }
	    Pages.prototype.init = function () {
	        this._scopeTo('gb-paging');
	        this._config = this._scope._config;
	    };
	    Pages.prototype.jumpTo = function (_a) {
	        var target = _a.target;
	        this._scope.pager.switchPage(Number(target.text));
	    };
	    return Pages;
	}());
	exports.Pages = Pages;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(77);
	
	__webpack_require__(70);
	
	__webpack_require__(74);
	
	var _gbPaging = __webpack_require__(79);
	
	riot.tag2('gb-paging', '<yield> <gb-terminal-pager> <gb-pager> <gb-pages></gb-pages> </gb-pager> </gb-terminal-pager> </yield>', '', '', function (opts) {
	    this._mixin(_gbPaging.Paging);
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);
	
	var _gbTerminalPager = __webpack_require__(78);
	
	riot.tag2('gb-terminal-pager', '<div class="gb-terminal-pager {_style}"> <a class="gb-terminal__link first {disabled: _scope.backDisabled}" if="{_scope._config.terminals}" onclick="{_scope.pager.first}"> <gb-icon if="{_config.icons}" value="{_config.first_icon}"></gb-icon> <span if="{_config.labels}">{_config.numeric ? 1 : _config.first_label}</span> </a> <yield></yield> <a class="gb-terminal__link last {disabled: _scope.forwardDisabled}" if="{_config.terminals}" onclick="{_scope.pager.last}"> <span if="{_config.labels}">{_config.numeric ? _scope.lastPage : _config.last_label}</span> <gb-icon if="{_config.icons}" value="{_config.last_icon}"></gb-icon> </a> </div>', 'gb-terminal-pager .gb-stylish a,[riot-tag="gb-terminal-pager"] .gb-stylish a,[data-is="gb-terminal-pager"] .gb-stylish a{ cursor: pointer; } gb-terminal-pager .gb-stylish.gb-terminal-pager,[riot-tag="gb-terminal-pager"] .gb-stylish.gb-terminal-pager,[data-is="gb-terminal-pager"] .gb-stylish.gb-terminal-pager{ display: flex; width: 100%; } gb-terminal-pager .gb-stylish .gb-terminal__link,[riot-tag="gb-terminal-pager"] .gb-stylish .gb-terminal__link,[data-is="gb-terminal-pager"] .gb-stylish .gb-terminal__link{ display: flex; text-decoration: none; color: #888; padding: 5px 14px; } gb-terminal-pager .gb-stylish .gb-terminal__link:hover,[riot-tag="gb-terminal-pager"] .gb-stylish .gb-terminal__link:hover,[data-is="gb-terminal-pager"] .gb-stylish .gb-terminal__link:hover{ color: black; } gb-terminal-pager .gb-stylish .gb-terminal__link.disabled,[riot-tag="gb-terminal-pager"] .gb-stylish .gb-terminal__link.disabled,[data-is="gb-terminal-pager"] .gb-stylish .gb-terminal__link.disabled{ color: #ddd; cursor: not-allowed; } gb-terminal-pager .gb-stylish gb-pager,[riot-tag="gb-terminal-pager"] .gb-stylish gb-pager,[data-is="gb-terminal-pager"] .gb-stylish gb-pager{ flex: 1; } gb-terminal-pager .gb-stylish gb-icon img,[riot-tag="gb-terminal-pager"] .gb-stylish gb-icon img,[data-is="gb-terminal-pager"] .gb-stylish gb-icon img{ width: 20px; }', '', function (opts) {
	    this._mixin(_gbTerminalPager.TerminalPager);
	});

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";
	var TerminalPager = (function () {
	    function TerminalPager() {
	    }
	    TerminalPager.prototype.init = function () {
	        this._scopeTo('gb-paging');
	        this._config = this._scope._config;
	    };
	    return TerminalPager;
	}());
	exports.TerminalPager = TerminalPager;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var groupby_api_1 = __webpack_require__(16);
	exports.DEFAULT_CONFIG = {
	    limit: 5,
	    pages: false,
	    numeric: false,
	    terminals: true,
	    labels: true,
	    icons: true,
	    first_label: 'First',
	    prev_label: 'Prev',
	    next_label: 'Next',
	    last_label: 'Last',
	    first_icon: __webpack_require__(80),
	    prev_icon: __webpack_require__(81),
	    next_icon: __webpack_require__(82),
	    last_icon: __webpack_require__(83)
	};
	var Paging = (function () {
	    function Paging() {
	    }
	    Paging.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        // default initial state
	        this.backDisabled = true;
	        this.currentPage = 1;
	        this.pager = this.wrapPager(this.flux.page);
	        this.flux.on(groupby_api_1.Events.PAGE_CHANGED, this.updateCurrentPage);
	        this.flux.on(groupby_api_1.Events.RESULTS, this.pageInfo);
	    };
	    Paging.prototype.pageInfo = function () {
	        var pageNumbers = this.flux.page.pageNumbers(this._config.limit);
	        var lastPage = this.flux.page.finalPage;
	        var currentPage = this.flux.page.currentPage;
	        this.updatePageInfo(pageNumbers, currentPage, lastPage);
	    };
	    Paging.prototype.updatePageInfo = function (pageNumbers, currentPage, lastPage) {
	        this.update({
	            pageNumbers: pageNumbers,
	            currentPage: currentPage,
	            lastPage: lastPage,
	            lowOverflow: pageNumbers[0] !== 1,
	            highOverflow: pageNumbers[pageNumbers.length - 1] !== lastPage,
	            backDisabled: currentPage === 1,
	            forwardDisabled: currentPage === lastPage
	        });
	    };
	    Paging.prototype.updateCurrentPage = function (_a) {
	        var pageNumber = _a.pageNumber;
	        this.update({ currentPage: pageNumber });
	    };
	    Paging.prototype.wrapPager = function (pager) {
	        var _this = this;
	        return {
	            first: function () { return !_this.backDisabled && pager.reset().then(_this.emitEvent); },
	            prev: function () { return !_this.backDisabled && pager.prev().then(_this.emitEvent); },
	            next: function () { return !_this.forwardDisabled && pager.next().then(_this.emitEvent); },
	            last: function () { return !_this.forwardDisabled && pager.last().then(_this.emitEvent); },
	            switchPage: function (page) { return pager.switchPage(page).then(_this.emitEvent); }
	        };
	    };
	    Paging.prototype.emitEvent = function () {
	        this.services.tracker.search();
	    };
	    return Paging;
	}());
	exports.Paging = Paging;


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABYmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz60J7anAAABhWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz8TxeADCwNaWKQQBYmiUYJ2miA+CEGigq8mOfMQcslxd0HE0sI2hYUPbBSxsdZO/AcEQVArEWzFQsFG5JxNhIiYWXb329/OzO7Ogmshq+lWbT/oOduMTYR8C4tLvvonPLThpRt/XLOMsZmZCFXt444aNd/2qlzV/f61xtWkpUGNR3hUM0xbeFI4um4bineFvVomvip8Juw35YLCD0pPlPlFcbrELpXTa87FwsJeYV/6Fyd+sZYxdeEh4U49W9B+7qNe0pTMzc8qXXoHFjEmCOFjinHCBBlgRMYgvQTokxVV4gOl+Ch5idVkNNjAZI00GWz8ohYke1LmlOhJaVnxEFN/8Le2VmowUD6haRrqnh3nvQfqD+Br23E+jxzn6xjcUpernUp8fgeGX0UvVrTOQ2jZgvPLipY4gYsitD8acTNektzSXakUvJ1C8yK03kDDcrluP/sc38PcJkSuYW8fusS/ZeUbWh5nYM1tRxkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAGBSURBVHic7d0xblNhEIXRS3qyoCT0QLJhVpDNpDMFVFBZspBj8vxmnm3NOdJrR5a+6/pPAAAAAAAAAAAAAAAAAAAAAK7TfZIfSR5v5C6F7pO8JvmTZJe6WF13KXQYaf/tkjxd6V0KHYtUEavrLoVORdp/P7M8VtddCn0k0mGsLxe+S6ElkZbE6rpLoXMi7b+3JJ83vkuhNZF+Jfm68V0KiT+Y+IOJP9iaSL/TE//UXQqtjfRt47sUEn8w8QcTfzDxBxN/MPEHWxvp+8Z3KST+YOIPJv5g4g8m/mBrIz1vfJdC4g8m/mDiDyb+YOJfgbtL/4AVPt3YXY5Y+2992fguDYwAI8AIiBEQIyBGQIyAGAExAmIExAiIERAjIEZAjIAYATECYgTECIgRECMgRkA8GEHOi7VL8nChuzRYEmtJpK67NPhIrHMidd2lwf8eeDw3UtddGrz3xOvaSF13afDvI89Vkbru0mD/zHt1pK67AAAAAAAAAAAAAAAAAAAAwGB/AYR4hXFo7p5xAAAAAElFTkSuQmCC"

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACrklEQVR4Ae3dvXLTQBQF4IQeHihAD0leOE+Ql0kHBVSwKjzjIj9er65GZ/V5RpXlq7vfOeOk882NFwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgLoEv7ThP7fo617Gc5hKBJfzndv1r1692KUFDOMrrPPylAKcSfDsKwJHP+Vr4SnCQRrwX/qkEv5uFb4IJC3FJ+Ocl+D6hwWGP1BO+EkxWk2vCP5XgpVl8nszjUMcZCf9Pk/pxKK3JDiv8yQLtOY7we7Qmu1f4kwXac5yR8P+2B/mb36O9s3tHw/+5s/NYp0NA+B1Ys90q/NkS7TiP8DuwZrtV+LMl2nEe4XdgzXar8GdLtOM8o+HfdzzLrTsTEP7OAtlyHeFvqb2zZwl/Z4FsuY7wt9Te2bOEv7NAtlxnNPyHLZf1rHUFhL+uZ9Q04UfFte6ywl/XM2qa8KPiWndZ4a/o+WnFWSmjblMWtefbAqPfAo9vj/ZOioASpCRVuKcSFOKmjFaClKQK91SCQtyU0UqQklThnkpQiJsyWglSkircUwkKcVNGK0FKUoV7KkEhbspoJUhJqnBPJSjETRmtBClJFe6pBIW4KaOVICWpwj2VoBA3ZbQSpCRVuKcSFOKmjFaClKQK91SCQtyU0UqQklThnkpQiJsyeqQEfjAiJeUP9rymBMtvCd59MNfbQQI9JRB+ULA9q15SAuH3iAbe+14JhB8Y6DUrv1YC4V8jGfyZ8xIIPzjIkdWXEiw/H++//RFFnyVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgS6BP4DIgpCusyEaeEAAAAASUVORK5CYII="

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACtklEQVR4Ae3dQW7UQBAF0Ch7OFCAPQQunBNwGXawgBUpLywhFEFc3Ym7ym8kK5uU3f3+z8QjZTI3Nx4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgdcTuItLPcTx9vUu6UqrCGzhf4/jdxxf41CCQLjK48/wtwIowVWSj30+Fb4SXKQA/wpfCZqX4DnhK0HTEhwJXwmaleBN7OdbHHuwR756ddCkDF9iH7+UoEmayW0oQRKu05gSdEozuRclSMJ1GlOCTmkm96IESbhOY0rQKc3kXpQgCddpTAk6pZncixIk4TqNKUGnNJN7UYIkXKcxJeiUZnIvSpCE6zSmBJ3STO5FCZJwncaUoFOayb0oQRKu05gSdEozuRclSMJ1GlOCTmkm96IESbhOY0rQKc3kXi5XgtskVNex7Y0mHhcV+Bz79oYT4R9+25m3nBUvjZ/84gGOLF/4I3rFZ4VfPMCR5d/HsBu+EcHCs8IvHN7o0oU/Klh4XviFwxtduvBHBQvPC79weKNL/xQncLc/qlh0XvhFg5uxbOHPUCx6DuEXDW7GsoU/Q7HoOYRfNLgZyxb+DMWi5/gY6/ZSr2h4o8vewv8Zx5F/Gr1/r7/kGdU/eV74Jwdw5uWFf6b+ydcW/skBnHl5Hxhxpv4i1/4Q6/gRx34z95yvbvgWCW/WMo6UQPiz1Bc7z/tYz/+eCYS/WGizl7OVYP/I2L9/FQh/tvai53uqBMJfNKyXWta7OPH+TCD8l1Je/LxbCR7i8MnhiwdleQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMAxgUc/cUO5Y0FtKQAAAABJRU5ErkJggg=="

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABeWlDQ1BJQ0MgUHJvZmlsZQAAKJF9kE0rRGEUx38GkZcoioXFLZOkMY1REztM8tIsNChvmzvXvKh5ud25QjbKwtbCBtmQ+ARsJF9AKYWFpOwtKBvpOs8MzaCcOs/5Pec5599zDrg8umkmy3yQSttWeGhAm5qe0SoeqaSJetpp0Y2s2T82FkLsO/60txtKVLzuVFp/3/+16vlo1oCSSuE+w7Rs4WHh1iXbVKz0Gi35lPCa4nietxRH8nycq5kIB4XPhDUjoc8L3wt7jISVApfSd0eKauJFnEouGl//UZPURNOT46pevIUsYYYYQGOEQYIE6KJXzgCd+PHKDTu6bKvmYMZcsRbiCVvrl01EtZG04fVofl9XANRef++rkMvIPD3PULpZyEUO4XQTmh8KOfce1K3DybmpW3ouVSruisXg5Qhqp6HhCqpms7Fuf36imlEof3Kc1w6o2IWPDcd533ecjwNpvoOLrfyOvrQ4uIWJVQhdwvYOtIl23dwnRy1nc9Cu3rAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAM6SURBVHgB7d1LalRRGEZRsa8D8tH3NeGMwMnY04a29JRwQCSUqeRsEP4VuNyO7NyzviJWGkmePfNBgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEDgn8Gql7tb18lzyd6nqHn7M2bnLSF/X9XNdn9d16kVQddcj+jgl8OdIlxfAqRdB1T11bp0lcN9IJ14EVddoBwWujfSUF0HVPXh0qYeM9JgXQdW12EGBW0a65UVQdQ8eXerFIviyrj3sLfdr3x1UXYsFAp9W80fwIqi6AYFkNVbVtVggUI1VdQMCyWqsqmuxQKAaq+oGBJLVWFXXYoFANVbVDQgkq7GqrsUCgWqsqhsQSFZjVV2LBQLVWFU3IJCsxqq6FgsEqrGqbkAgWY1VdS0WCFRjVd2AQLIaq+paLBCoxqq6AYFkNVbVtVggUI1VdQMCyWqsqmuxQKAaq+oGBJLVWFXXYoFANVbVDQgkq7Gqbr7Y8/wz/F+f4PKDJsVH1S2edWzz4zp58QMnVXfsUMXBq5GqbmEwtlmNVHXHDlUcvBqp6hYGY5vVSFV37FDFwT+saPGGr+oWBmOb1UhVd+xQxcGrkapuYTC2WY1UdccOVRy8GqnqFgZjm9VIVXfsUMXB369o8W6/6hYGY5vVSFV37FDFwauRqm5hMLZZjVR1xw5VHLwaqeoWBmOb1UhVd+xQxcGrkapuYTC2+W6dvPhWr+qOHao4+GWk7+u65ZdG73977ZdHV93CYGyzGqnqjh2qOHg1UtUtDMY2q5Gq7tihioNXf9ih6hYG45tvl8C3de03cw+5X3vDt0Gr7u67HxS4ZayHjL8freruvvtBgTer9a+vBLeMvx+t6u6++0GBy1j7T8b+/V/BY8bfj1Z1d9/9oMB9Yz1l/P1oVXf33Q8KvF6t/ZXgxPj70aru7rsfFLiMdbeuU385fD9a1d19dwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAkwR+ASRah2/USAPfAAAAAElFTkSuQmCC"

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(85);
	
	__webpack_require__(86);
	
	__webpack_require__(88);
	
	__webpack_require__(90);
	
	var _gbQuery = __webpack_require__(108);
	
	riot.tag2('gb-query', '<yield> <div class="gb-query {_style}"> <gb-search-box></gb-search-box> <gb-submit></gb-submit> <gb-reset></gb-reset> <gb-sayt if="{_config.sayt}"></gb-sayt> </div> </yield>', 'gb-query .gb-stylish.gb-query,[riot-tag="gb-query"] .gb-stylish.gb-query,[data-is="gb-query"] .gb-stylish.gb-query{ position: relative; display: flex; align-items: baseline; } gb-query .gb-stylish.gb-query gb-sayt,[riot-tag="gb-query"] .gb-stylish.gb-query gb-sayt,[data-is="gb-query"] .gb-stylish.gb-query gb-sayt{ top: 31px; left: 0; z-index: 10; position: absolute; min-width: 175px; background-color: #fff; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }', '', function (opts) {
	    this._mixin(_gbQuery.Query);
	});

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-search-box', '<input name="searchBox" class="{_style}" type="text" placeholder="Search..." autofocus>', 'gb-search-box input.gb-stylish,[riot-tag="gb-search-box"] input.gb-stylish,[data-is="gb-search-box"] input.gb-stylish{ padding: 6px 12px; font-size: 14px; }', '', function (opts) {});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSubmit = __webpack_require__(87);
	
	riot.tag2('gb-submit', '<yield> <a class="gb-submit {_style}">&#128269;</a> </yield>', 'gb-submit .gb-stylish.gb-submit,[riot-tag="gb-submit"] .gb-stylish.gb-submit,[data-is="gb-submit"] .gb-stylish.gb-submit{ padding: 4px; } gb-submit .gb-stylish.gb-submit:hover,[riot-tag="gb-submit"] .gb-stylish.gb-submit:hover,[data-is="gb-submit"] .gb-stylish.gb-submit:hover{ cursor: pointer; }', '', function (opts) {
	    this._mixin(_gbSubmit.Submit);
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	exports.DEFAULT_CONFIG = {
	    label: 'Search',
	    staticSearch: false
	};
	var Submit = (function () {
	    function Submit() {
	    }
	    Submit.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        if (this.root.tagName === 'INPUT') {
	            this.root.value = this._config.label;
	        }
	        this.on('mount', this.setSearchBox);
	        this.root.addEventListener('click', this.submitQuery);
	    };
	    Submit.prototype.setSearchBox = function () {
	        this.searchBox = common_1.findSearchBox();
	    };
	    Submit.prototype.submitQuery = function () {
	        var _this = this;
	        var inputValue = this.searchBox.value;
	        if (this._config.staticSearch && this.services.url.active()) {
	            this.services.url.update(inputValue, []);
	        }
	        else {
	            this.flux.reset(inputValue)
	                .then(function () { return _this.services.tracker.search(); });
	        }
	    };
	    return Submit;
	}());
	exports.Submit = Submit;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbReset = __webpack_require__(89);
	
	riot.tag2('gb-reset', '<yield> <a class="gb-reset {_style}">&times;</a> </yield>', 'gb-reset .gb-stylish.gb-reset,[riot-tag="gb-reset"] .gb-stylish.gb-reset,[data-is="gb-reset"] .gb-stylish.gb-reset{ color: #888; padding: 4px; } gb-reset .gb-stylish.gb-reset:hover,[riot-tag="gb-reset"] .gb-stylish.gb-reset:hover,[data-is="gb-reset"] .gb-stylish.gb-reset:hover{ color: black; cursor: pointer; }', '', function (opts) {
	    this._mixin(_gbReset.Reset);
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var Reset = (function () {
	    function Reset() {
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
	        this.flux.reset(this.searchBox.value = '')
	            .then(function () { return _this.services.tracker.search(); });
	    };
	    return Reset;
	}());
	exports.Reset = Reset;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(91);
	
	__webpack_require__(99);
	
	var _gbSayt = __webpack_require__(105);
	
	var _tag = __webpack_require__(28);
	
	riot.tag2('gb-sayt', '<yield> <div class="{_style}" if="{(queries && queries.length) || (navigations && navigations.length)}"> <gb-sayt-autocomplete></gb-sayt-autocomplete> <gb-sayt-products if="{showProducts}"></gb-sayt-products> </div> </yield>', 'gb-sayt div.gb-stylish,[riot-tag="gb-sayt"] div.gb-stylish,[data-is="gb-sayt"] div.gb-stylish{ display: flex; } gb-sayt .gb-stylish ul,[riot-tag="gb-sayt"] .gb-stylish ul,[data-is="gb-sayt"] .gb-stylish ul{ list-style: none; margin: 0; padding: 0; } gb-sayt .gb-stylish gb-sayt-link:hover,[riot-tag="gb-sayt"] .gb-stylish gb-sayt-link:hover,[data-is="gb-sayt"] .gb-stylish gb-sayt-link:hover,gb-sayt .gb-stylish gb-sayt-link.active,[riot-tag="gb-sayt"] .gb-stylish gb-sayt-link.active,[data-is="gb-sayt"] .gb-stylish gb-sayt-link.active{ background-color: #f1f1f1; display: block; } gb-sayt .gb-stylish gb-list li,[riot-tag="gb-sayt"] .gb-stylish gb-list li,[data-is="gb-sayt"] .gb-stylish gb-list li{ margin: 0px; }', '', function (opts) {
	    this._mixin(_tag.SaytTag, _gbSayt.Sayt);
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(92);
	
	__webpack_require__(96);
	
	__webpack_require__(97);
	
	__webpack_require__(98);
	
	riot.tag2('gb-sayt-autocomplete', '<yield> <gb-sayt-categories></gb-sayt-categories> <gb-sayt-divider></gb-sayt-divider> <gb-sayt-search-terms></gb-sayt-search-terms> <gb-sayt-divider></gb-sayt-divider> <gb-sayt-refinements each="{navigations}"></gb-sayt-refinements> </yield>', '.gb-stylish gb-sayt-autocomplete,.gb-stylish [riot-tag="gb-sayt-autocomplete"],.gb-stylish [data-is="gb-sayt-autocomplete"]{ min-width: 210px; }', '', function (opts) {});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	__webpack_require__(93);
	
	__webpack_require__(94);
	
	riot.tag2('gb-sayt-categories', '<gb-list items="{categoryResults}"> <gb-sayt-link send="{_scope.searchCategory}" data-value="{item.value}" data-refinement="{item.category}" data-field="{_scope.categoryField}" data-norefine="{item.noRefine}"> <yield> <gb-raw content="{_scope.highlightCurrentQuery(item.value, \'<b>$&</b>\')}"></gb-raw> in <span class="gb-category-query">{item.category}</span> </yield> </gb-sayt-link> </gb-list>', '.gb-stylish gb-sayt-categories .gb-category-query,.gb-stylish [riot-tag="gb-sayt-categories"] .gb-category-query,.gb-stylish [data-is="gb-sayt-categories"] .gb-category-query{ font-weight: bold; color: darkorange; }', '', function (opts) {
	
	    this._scopeTo('gb-sayt');
	});

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-sayt-link', '<a onclick="{opts.send}"> <yield></yield> </a>', '.gb-stylish gb-sayt-link a,.gb-stylish [riot-tag="gb-sayt-link"] a,.gb-stylish [data-is="gb-sayt-link"] a{ padding: 5px 15px; text-decoration: none; display: block; }', '', function (opts) {});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRaw = __webpack_require__(95);
	
	riot.tag2('gb-raw', '<span></span>', '', '', function (opts) {
	    this._mixin(_gbRaw.Raw);
	});

/***/ },
/* 95 */
/***/ function(module, exports) {

	"use strict";
	var Raw = (function () {
	    function Raw() {
	    }
	    Raw.prototype.init = function () {
	        this.configure();
	        this.on('update', this.updateContent);
	        this.on('mount', this.updateContent);
	    };
	    Raw.prototype.updateContent = function () {
	        this.root.innerHTML = this._config.content;
	    };
	    return Raw;
	}());
	exports.Raw = Raw;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	__webpack_require__(93);
	
	__webpack_require__(94);
	
	riot.tag2('gb-sayt-search-terms', '<gb-list items="{_scope.queries}"> <gb-sayt-link send="{_scope.search}" data-value="{item.value}"> <yield> <gb-raw content="{_scope.highlightCurrentQuery(item.value, \'<b>$&</b>\')}"></gb-raw> </yield> </gb-sayt-link> </gb-list>', '', '', function (opts) {
	
	    this._scopeTo('gb-sayt');
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	__webpack_require__(93);
	
	__webpack_require__(94);
	
	riot.tag2('gb-sayt-refinements', '<h4>{displayName}</h4> <gb-list items="{values}"> <gb-sayt-link send="{_scope.searchRefinement}" data-value="{displayName}: {item}" data-refinement="{item}" data-field="{name}"> <yield> <gb-raw content="{_scope.highlightCurrentQuery(item, \'<b>$&</b>\')}"></gb-raw> </yield> </gb-sayt-link> </gb-list>', '.gb-stylish gb-sayt-refinements h4,.gb-stylish [riot-tag="gb-sayt-refinements"] h4,.gb-stylish [data-is="gb-sayt-refinements"] h4{ margin: 4px; }', '', function (opts) {
	
	    this._scopeTo('gb-sayt');
	});

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-sayt-divider', '<div if="{isVisible()}"></div>', '.gb-stylish gb-sayt-divider div,.gb-stylish [riot-tag="gb-sayt-divider"] div,.gb-stylish [data-is="gb-sayt-divider"] div{ display: block; margin: 3px 10%; border-top: 1px solid #777; }', '', function (opts) {
	  var _this = this;
	
	  this.isVisible = function () {
	    return _this.root.nextElementSibling && _this.root.nextElementSibling.querySelector('li') && _this.root.previousElementSibling && _this.root.previousElementSibling.querySelector('li');
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(100);
	
	__webpack_require__(101);
	
	riot.tag2('gb-sayt-products', '<ul class="{_style}"> <li class="gb-sayt-product" each="{products}"> <yield> <gb-product all_meta="{allMeta}"> <gb-product-image thumbnail></gb-product-image> </gb-product> </yield> </li> </ul>', '.gb-stylish gb-sayt-products,.gb-stylish [riot-tag="gb-sayt-products"],.gb-stylish [data-is="gb-sayt-products"]{ min-width: 300px; } gb-sayt-products ul.gb-stylish,[riot-tag="gb-sayt-products"] ul.gb-stylish,[data-is="gb-sayt-products"] ul.gb-stylish{ display: flex; flex-wrap: wrap; align-items: center; width: calc(86px * 4); align-content: flex-start; } gb-sayt-products .gb-stylish gb-product-image img,[riot-tag="gb-sayt-products"] .gb-stylish gb-product-image img,[data-is="gb-sayt-products"] .gb-stylish gb-product-image img{ vertical-align: bottom; margin: 3px; } gb-sayt-products .gb-stylish gb-product-image img:hover,[riot-tag="gb-sayt-products"] .gb-stylish gb-product-image img:hover,[data-is="gb-sayt-products"] .gb-stylish gb-product-image img:hover{ box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); }', '', function (opts) {
	    this._scopeTo('gb-sayt');
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(101);
	
	__webpack_require__(102);
	
	__webpack_require__(103);
	
	var _gbProduct = __webpack_require__(104);
	
	riot.tag2('gb-product', '<yield> <gb-product-image></gb-product-image> <gb-product-info></gb-product-info> <gb-variant-switcher></gb-variant-switcher> </yield>', '', '', function (opts) {
	    this._mixin(_gbProduct.Product);
	});

/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-product-image', '<a class="gb-product-image {_style}" href="{_scope.link()}"> <img class="{thumbnail: opts.thumbnail !== undefined}" riot-src="{imageLink()}" alt=""> </a>', 'gb-product-image .gb-product-image.gb-stylish img,[riot-tag="gb-product-image"] .gb-product-image.gb-stylish img,[data-is="gb-product-image"] .gb-product-image.gb-stylish img{ width: 380px; } gb-product-image .gb-product-image.gb-stylish img.thumbnail,[riot-tag="gb-product-image"] .gb-product-image.gb-stylish img.thumbnail,[data-is="gb-product-image"] .gb-product-image.gb-stylish img.thumbnail{ width: 80px; }', '', function (opts) {
	    this._scopeTo('gb-product');
	    var _scope = this._scope;
	    this.imageLink = function () {
	        return _scope.image(_scope.productMeta().image);
	    };
	});

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-product-info', '<a href="{_scope.link()}"> <p class="gb-product__title">{_scope.productMeta().title}</p> <p class="gb-product__price">{_scope.productMeta().price}</p> </a>', '', '', function (opts) {
	    this._scopeTo('gb-product');
	});

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-variant-switcher', '<a if="{_scope.variants.length > 1}" each="{variant, i in _scope.variants}" class="gb-product__variant-link" onclick="{_scope.switchVariant}" data-index="{i}"> {i} </a>', '', '', function (opts) {
	    this._scopeTo('gb-product');
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var product_transformer_1 = __webpack_require__(20);
	var clone = __webpack_require__(57);
	var oget = __webpack_require__(15);
	var Product = (function () {
	    function Product() {
	    }
	    Product.prototype.init = function () {
	        this.variantIndex = 0;
	        this.detailsUrl = oget(this.services, 'url.urlConfig.detailsUrl', 'details.html');
	        this.struct = this._scope.struct || this.config.structure || {};
	        this.transformer = new product_transformer_1.ProductTransformer(this.struct);
	        this.transformRecord(this.opts.all_meta);
	    };
	    Product.prototype.transformRecord = function (allMeta) {
	        var _this = this;
	        var productMeta = this.transformer.transform(clone(allMeta, false));
	        this.update({
	            productMeta: function () { return productMeta(_this.variantIndex); },
	            variants: productMeta.variants || [],
	            allMeta: productMeta.transformedMeta
	        });
	    };
	    Product.prototype.link = function () {
	        return this.productMeta().url || this.detailsUrl + "?id=" + this.productMeta().id;
	    };
	    Product.prototype.image = function (imageObj) {
	        return Array.isArray(imageObj) ? imageObj[0] : imageObj;
	    };
	    Product.prototype.switchVariant = function (event) {
	        var variantIndex = event.target.dataset['index'];
	        this.update({ variantIndex: variantIndex });
	    };
	    return Product;
	}());
	exports.Product = Product;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var autocomplete_1 = __webpack_require__(106);
	var groupby_api_1 = __webpack_require__(16);
	var escapeStringRegexp = __webpack_require__(107);
	exports.DEFAULT_CONFIG = {
	    allCategoriesLabel: 'All Departments',
	    products: 4,
	    queries: 5,
	    minimumCharacters: 1,
	    delay: 100,
	    autoSearch: true,
	    staticSearch: false,
	    highlight: true,
	    https: false,
	    navigationNames: {},
	    allowedNavigations: []
	};
	exports.MIN_DELAY = 100;
	var Sayt = (function () {
	    function Sayt() {
	    }
	    Sayt.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.struct = Object.assign({}, this.config.structure, this._config.structure);
	        this.showProducts = this._config.products > 0;
	        this.sayt.configure(this.generateSaytConfig());
	        this.on('mount', this.initializeAutocomplete);
	        this.flux.on(autocomplete_1.AUTOCOMPLETE_HIDE_EVENT, this.reset);
	    };
	    Sayt.prototype.initializeAutocomplete = function () {
	        this.autocomplete = new autocomplete_1.Autocomplete(this);
	    };
	    Sayt.prototype.generateSaytConfig = function () {
	        return {
	            subdomain: this.config.customerId,
	            collection: this._config.collection || this.config.collection,
	            autocomplete: {
	                numSearchTerms: this._config.queries,
	                language: this._config.language
	            },
	            productSearch: {
	                area: this._config.area || this.config.area,
	                numProducts: this._config.products,
	                language: this._config.language
	            },
	            https: this._config.https
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
	        var isRefinement = refinement && refinement !== this._config.allCategoriesLabel;
	        var refinementString = "~" + (field || this._config.categoryField) + "=" + refinement;
	        if (this._config.autoSearch)
	            this.searchProducts(field ? '' : query, isRefinement ? refinementString : undefined);
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
	            .map(function (nav) { return Object.assign(nav, { displayName: _this._config.navigationNames[nav.name] || nav.name }); })
	            .filter(function (_a) {
	            var name = _a.name;
	            return _this._config.allowedNavigations.includes(name);
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
	        var categoryField = this._config.categoryField;
	        if (additionalInfo && categoryField && categoryField in additionalInfo) {
	            categoryResults = additionalInfo[categoryField]
	                .map(function (category) { return ({ category: category, value: value }); })
	                .slice(0, 3);
	            categoryResults.unshift({ category: this._config.allCategoriesLabel, value: value, noRefine: true });
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
	        return this._config.highlight
	            ? value.replace(new RegExp(escapeStringRegexp(this.originalQuery), 'i'), regexReplacement)
	            : value;
	    };
	    Sayt.prototype.enhanceCategoryQuery = function (query) {
	        return "<b>" + query.value + "</b> in <span class=\"gb-category-query\">" + query.category + "</span>";
	    };
	    Sayt.prototype.refine = function (node, query) {
	        var _this = this;
	        while (node.tagName !== 'GB-SAYT-LINK')
	            node = node.parentElement;
	        var doRefinement = !node.dataset['norefine'];
	        var refinement = {
	            navigationName: node.dataset['field'] || this._config.categoryField,
	            value: node.dataset['refinement'],
	            type: 'Value'
	        };
	        if (this._config.staticSearch && this.services.url.active()) {
	            this.services.url.update(query, doRefinement ? [refinement] : []);
	        }
	        else if (doRefinement) {
	            this.flux.rewrite(query, { skipSearch: true });
	            this.flux.refine(refinement)
	                .then(function () { return _this.services.tracker.sayt(); });
	        }
	        else {
	            this.flux.reset(query)
	                .then(function () { return _this.services.tracker.sayt(); });
	        }
	    };
	    Sayt.prototype.search = function (event) {
	        var _this = this;
	        var node = event.target;
	        while (node.tagName !== 'GB-SAYT-LINK')
	            node = node.parentElement;
	        var query = node.dataset['value'];
	        if (this._config.staticSearch && this.services.url.active()) {
	            this.services.url.update(query, []);
	        }
	        else {
	            this.rewriteQuery(query);
	            this.flux.reset(query)
	                .then(function () { return _this.services.tracker.sayt(); });
	        }
	    };
	    Sayt.prototype.listenForInput = function (tag) {
	        var input = tag.searchBox;
	        input.autocomplete = 'off';
	        var debouncedSearch = common_1.debounce(this.debouncedSearch(input), Math.max(this._config.delay, exports.MIN_DELAY));
	        input.addEventListener('input', debouncedSearch);
	        document.addEventListener('click', this.reset);
	    };
	    Sayt.prototype.debouncedSearch = function (input) {
	        var _this = this;
	        return function () {
	            if (input.value.length >= _this._config.minimumCharacters) {
	                _this.fetchSuggestions(input.value);
	            }
	            else {
	                _this.reset();
	            }
	        };
	    };
	    return Sayt;
	}());
	exports.Sayt = Sayt;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
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
/* 107 */
/***/ function(module, exports) {

	module.exports = require("escape-string-regexp");

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var autocomplete_1 = __webpack_require__(106);
	__webpack_require__(90);
	var groupby_api_1 = __webpack_require__(16);
	var KEY_ENTER = 13;
	exports.DEFAULT_CONFIG = {
	    sayt: true,
	    autoSearch: true,
	    staticSearch: false
	};
	var Query = (function () {
	    function Query() {
	    }
	    Query.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.enterKeyHandlers = [];
	        this.on('mount', this.attachListeners);
	        this.flux.on(groupby_api_1.Events.REWRITE_QUERY, this.rewriteQuery);
	    };
	    Query.prototype.attachListeners = function () {
	        this.searchBox = this.findSearchBox();
	        this.searchBox.addEventListener('keydown', this.keydownListener);
	        if (this._config.sayt)
	            this.tags['gb-sayt'].listenForInput(this);
	        if (this._config.autoSearch) {
	            this.listenForInput();
	        }
	        else if (this._config.staticSearch) {
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
	        this.flux.reset(this.inputValue())
	            .then(function () { return _this.services.tracker.search(); });
	    };
	    Query.prototype.listenForStaticSearch = function () {
	        this.enterKeyHandlers.push(this.setLocation);
	    };
	    Query.prototype.keydownListener = function (event) {
	        var sayt = common_1.findTag('gb-sayt');
	        if (sayt) {
	            var autocomplete = sayt['_tag'].autocomplete;
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
	            return this.tags['gb-search-box'].searchBox;
	        }
	        else {
	            return this.root.querySelector('input');
	        }
	    };
	    Query.prototype.setLocation = function () {
	        if (this.services.url.active()) {
	            this.services.url.update(this.inputValue());
	        }
	        else {
	            this.flux.reset(this.inputValue());
	        }
	    };
	    Query.prototype.inputValue = function () {
	        return this.searchBox.value;
	    };
	    return Query;
	}());
	exports.Query = Query;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbRecordCount = __webpack_require__(110);
	
	riot.tag2('gb-record-count', '<yield> <h2>{first} - {last} of {total} Products</h2> </yield>', '', '', function (opts) {
	    this._mixin(_gbRecordCount.RecordCount);
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var groupby_api_1 = __webpack_require__(16);
	var RecordCount = (function () {
	    function RecordCount() {
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
	}());
	exports.RecordCount = RecordCount;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	var _gbRelatedQueries = __webpack_require__(112);
	
	riot.tag2('gb-related-queries', '<yield> <gb-list class="{_style}" items="{relatedQueries}" scope="gb-related-queries" inline> <a onclick="{_scope.send}">{item}</a> </gb-list> </yield>', '', '', function (opts) {
	    this._mixin(_gbRelatedQueries.RelatedQueries);
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var groupby_api_1 = __webpack_require__(16);
	var RelatedQueries = (function () {
	    function RelatedQueries() {
	    }
	    RelatedQueries.prototype.init = function () {
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updatedRelatedQueries);
	    };
	    RelatedQueries.prototype.updatedRelatedQueries = function (_a) {
	        var relatedQueries = _a.relatedQueries;
	        this.update({ relatedQueries: relatedQueries });
	    };
	    RelatedQueries.prototype.send = function (event) {
	        return this.flux.rewrite(event.target.text);
	    };
	    return RelatedQueries;
	}());
	exports.RelatedQueries = RelatedQueries;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	__webpack_require__(100);
	
	var _gbResults = __webpack_require__(114);
	
	riot.tag2('gb-results', '<yield> <gb-list items="{records}"> <gb-product all_meta="{item.allMeta}"></gb-product> </gb-list> </yield>', 'gb-results .gb-stylish gb-list,[riot-tag="gb-results"] .gb-stylish gb-list,[data-is="gb-results"] .gb-stylish gb-list{ padding: 0; list-style: none; display: flex; flex-wrap: wrap; justify-content: space-around; } gb-results .gb-stylish gb-product,[riot-tag="gb-results"] .gb-stylish gb-product,[data-is="gb-results"] .gb-stylish gb-product{ display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }', '', function (opts) {
	    this._mixin(_gbResults.Results);
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(11);
	var groupby_api_1 = __webpack_require__(16);
	var Results = (function () {
	    function Results() {
	    }
	    Results.prototype.init = function () {
	        this.struct = this.config.structure;
	        this.variantStruct = common_1.unless(this.struct._variantStructure, this.struct);
	        this.getPath = common_1.getPath;
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateRecords);
	    };
	    Results.prototype.updateRecords = function (_a) {
	        var records = _a.records;
	        this.update({ records: records, collection: this.flux.query.raw.collection });
	    };
	    Results.prototype.userStyle = function (key) {
	        return this.opts.css ? this.opts.css[key] : '';
	    };
	    return Results;
	}());
	exports.Results = Results;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _gbSnippet = __webpack_require__(116);
	
	riot.tag2('gb-snippet', '<div class="gb-snippet"> {responseText} </div>', '', '', function (opts) {
	    this._mixin(_gbSnippet.Snippet);
	});

/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";
	exports.DEFAULT_CONFIG = {
	    raw: false
	};
	var Snippet = (function () {
	    function Snippet() {
	    }
	    Snippet.prototype.init = function () {
	        this.configure(exports.DEFAULT_CONFIG);
	        this.on('mount', this.loadFile);
	    };
	    Snippet.prototype.loadFile = function () {
	        var _this = this;
	        var req = new XMLHttpRequest();
	        req.onload = function () {
	            var responseText = req.responseText;
	            if (_this._config.raw) {
	                _this.root.innerHTML = responseText;
	            }
	            else {
	                _this.update({ responseText: responseText });
	            }
	        };
	        req.open('get', this._config.url, true);
	        req.send();
	    };
	    return Snippet;
	}());
	exports.Snippet = Snippet;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(46);
	
	var _gbSort = __webpack_require__(118);
	
	riot.tag2('gb-sort', '<yield> <gb-select scope="gb-sort"> </gb-select> </yield>', '', '', function (opts) {
	    this._mixin(_gbSort.Sort);
	});

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";
	exports.DEFAULT_SORTS = [
	    { label: 'Name Descending', value: { field: 'title', order: 'Descending' } },
	    { label: 'Name Ascending', value: { field: 'title', order: 'Ascending' } }
	];
	var Sort = (function () {
	    function Sort() {
	    }
	    Sort.prototype.init = function () {
	        this.configure();
	        this.options = this._config.options || exports.DEFAULT_SORTS;
	    };
	    Sort.prototype.sortValues = function () {
	        return this.options.map(function (option) { return option.value; });
	    };
	    Sort.prototype.onselect = function (value) {
	        return this.flux.sort(value, this.sortValues());
	    };
	    return Sort;
	}());
	exports.Sort = Sort;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(120);
	
	__webpack_require__(121);
	
	__webpack_require__(122);
	
	var _gbTemplate = __webpack_require__(123);
	
	riot.tag2('gb-template', '<div if="{isActive}"> <yield> <div each="{zone in zones}" class="gb-zone-{zone.name}"> <gb-content-zone if="{zone.type === \'Content\'}"></gb-content-zone> <gb-rich-content-zone if="{zone.type === \'Rich_Content\'}"></gb-rich-content-zone> <gb-record-zone if="{zone.type === \'Record\'}"></gb-record-zone> </div> </yield> </div>', '', '', function (opts) {
	    this._mixin(_gbTemplate.Template);
	});

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	riot.tag2('gb-content-zone', '<span>{zone.content}</span>', '', '', function (opts) {});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(94);
	
	riot.tag2('gb-rich-content-zone', '<gb-raw content="{zone.richContent}"></gb-raw>', '', '', function (opts) {});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(34);
	
	riot.tag2('gb-record-zone', '<gb-list items="{zone.records}"> <gb-product all_meta="{item.allMeta}"></gb-product> </gb-list>', '', '', function (opts) {});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var groupby_api_1 = __webpack_require__(16);
	var Template = (function () {
	    function Template() {
	    }
	    Template.prototype.init = function () {
	        this.configure();
	        this.flux.on(groupby_api_1.Events.RESULTS, this.updateActive);
	    };
	    Template.prototype.updateActive = function (_a) {
	        var template = _a.template;
	        this.update({
	            isActive: template.name === this._config.target,
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
	}());
	exports.Template = Template;


/***/ }
/******/ ]);