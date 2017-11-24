function createRequestTypes (base){
    return  {
        REQUEST: base + "_REQUEST",
        SUCCESS: base + "_SUCCESS",
        FAILURE: base + "_FAILURE",
    };
}

export const LOGIN = createRequestTypes('LOGIN');
export const FEED = createRequestTypes('FEED');
export const AUTH = createRequestTypes('AUTH');

export const login = {
    request: request  => ({type: LOGIN.REQUEST, request}),
    success: response => ({type: LOGIN.SUCCESS, response}),
    error:   error    => ({type: LOGIN.FAILURE, error})
};

export const feed = {
    request: request  => ({type: FEED.REQUEST, request}),
    success: response => ({type: FEED.SUCCESS, response}),
    error:   error    => ({type: FEED.FAILURE, error})
};

export const auth = {
    request: request  => ({type: AUTH.REQUEST, request}),
    success: response => ({type: AUTH.SUCCESS, response}),
    error:   error    => ({type: AUTH.FAILURE, error})
};