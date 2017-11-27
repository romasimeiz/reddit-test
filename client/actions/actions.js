function createRequestTypes (base){
    return  {
        REQUEST: base + "_REQUEST",
        SUCCESS: base + "_SUCCESS",
        FAILURE: base + "_FAILURE",
    };
}

export const LOGIN = createRequestTypes('LOGIN');
export const AUTH  = createRequestTypes('AUTH');

export const FEED  = {
    REQUEST: "FEED_REQUEST",
    MORE_REQUEST: "MORE_FEED_REQUEST",
    SUCCESS: "FEED_SUCCESS",
    MORE_SUCCESS: "MORE_FEED_SUCCESS",
    FAILURE: "FEED_FAILURE",
    MORE_FAILURE: "MORE_FEED_FAILURE",
};

export const login = {
    request: request  => ({type: LOGIN.REQUEST, request}),
    success: response => ({type: LOGIN.SUCCESS, response}),
    error:   error    => ({type: LOGIN.FAILURE, error})
};

export const feed = {
    request: request  => ({type: FEED.REQUEST, request}),
    success: response => ({type: FEED.SUCCESS, response}),
    error:   error    => ({type: FEED.FAILURE, error}),
    more_request: request  => ({type: FEED.MORE_REQUEST, request}),
    more_success: response  => ({type: FEED.MORE_SUCCESS, response}),
    more_failure: error  => ({type: FEED.MORE_SUCCESS, error}),
};

export const auth = {
    request: request  => ({type: AUTH.REQUEST, request}),
    success: response => ({type: AUTH.SUCCESS, response}),
    error:   error    => ({type: AUTH.FAILURE, error})
};