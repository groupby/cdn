let _instance;
let _listeners = [];
const subscribe = (callback) => {
  _listeners.push(callback);
  return () => {
    _listeners = _listeners.filter((listener) => listener !== callback);
  };
};
const handleLocationChange = (source) => {
  const location = window.location;
  _listeners.forEach((listener) => {
    listener(location, source);
  });
};
const init$1 = () => {
  window.addEventListener("popstate", () => handleLocationChange("popstate"));
  window.history.pushState = new Proxy(window.history.pushState, {
    apply: function(target, thisArg, args) {
      handleLocationChange("pushState");
      return Reflect.apply(target, thisArg, args);
    }
  });
  _instance = {
    subscribe
  };
};
const registerLocationObserver = () => {
  if (!_instance) {
    init$1();
  }
  return _instance;
};
const send = async (event, options) => {
  const { customerId, url } = options;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ customer: customerId, event })
  });
  return response.json();
};
let _tracker;
let _customerId;
let _url;
let _listenToPushState;
const init = (options) => {
  const { customerId, listenToPushState, overrideUrl } = options;
  _customerId = customerId;
  _listenToPushState = listenToPushState ?? false;
  _url = overrideUrl ?? "https://www.gbi-not-defined.com";
  const trackEvent = (event) => {
    console.log("customerId:", _customerId);
    console.log("listenToPushState:", _listenToPushState);
    console.log("url:", _url);
    console.log("eventType:", (event == null ? void 0 : event.type) ?? "-");
    console.log("metadata:", (event == null ? void 0 : event.metadata) ? "metadata exists" : "-");
    void send(
      {
        type: (event == null ? void 0 : event.type) ?? "other",
        metadata: (event == null ? void 0 : event.metadata) ?? {
          message: `Sending an event... for "${_customerId}" customer`
        }
      },
      { customerId: _customerId, url: _url }
    );
  };
  _tracker = {
    trackEvent
  };
  if (listenToPushState) {
    registerLocationObserver().subscribe((location, source) => {
      _tracker == null ? void 0 : _tracker.trackEvent({
        type: "location-changed",
        metadata: { location, source }
      });
    });
  }
};
const register = (options) => {
  if (!_tracker) {
    init(options);
  }
  return _tracker;
};
const index = {
  registerGBIUniversalEventTracker: register
};
export {
  index as default
};
