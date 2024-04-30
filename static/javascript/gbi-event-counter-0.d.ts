declare const _default: {
    registerGBIUniversalEventTracker: (options: GBIUniversalEventTrackerOptions) => GBIUniversalEventTracker;
};
export default _default;

declare type EventType = 'location-changed' | 'other';

export declare interface GBITrackerEvent {
    /** Optional string to denote what type of event fired */
    type?: EventType;
    /** Optional key value pairs to include in the request */
    metadata?: {
        [key: string]: unknown;
    };
}

export declare interface GBIUniversalEventTracker {
    trackEvent: (event?: GBITrackerEvent) => void;
}

export declare interface GBIUniversalEventTrackerOptions {
    customerId: string;
    /** if false, the tracker will not add the listener to the history state and track for SPAs */
    listenToPushState?: boolean;
    /** optionally override the url this posts to. Default endpoint TBD */
    overrideUrl?: string;
}

export { }
