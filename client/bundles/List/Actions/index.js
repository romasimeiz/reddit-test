export const FEED  = {
    REQUEST: "FEED_REQUEST",
    MORE_REQUEST: "MORE_FEED_REQUEST",
    SUCCESS: "FEED_SUCCESS",
    MORE_SUCCESS: "MORE_FEED_SUCCESS",
    FAILURE: "FEED_FAILURE",
    MORE_FAILURE: "MORE_FEED_FAILURE",
};

export const feedActions = {
    request: request  => ({type: FEED.REQUEST, request}),
    success: response => ({type: FEED.SUCCESS, response}),
    error:   error    => ({type: FEED.FAILURE, error}),
    more_request: request  => ({type: FEED.MORE_REQUEST, request}),
    more_success: response  => ({type: FEED.MORE_SUCCESS, response}),
    more_failure: error  => ({type: FEED.MORE_SUCCESS, error}),
};