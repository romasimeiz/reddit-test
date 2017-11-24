function createRequestTypes (base){
    return  {
        REQUEST: base + "_REQUEST",
        SUCCESS: base + "_SUCCESS",
        FAILURE: base + "_FAILURE",
    };
}

export const LOGIN               = createRequestTypes('LOGIN');
export const LOGOUT              = createRequestTypes('LOGOUT');
export const USERS               = createRequestTypes('USERS');
export const PROJECTS            = createRequestTypes('PROJECTS');
export const FILES               = createRequestTypes('FILES');
export const PROJECT_EDIT        = createRequestTypes('PROJECT_EDIT');
export const PROJECT_DELETE      = createRequestTypes('PROJECT_DELETE');
export const PROJECT_EDIT_SUBMIT = createRequestTypes('PROJECT_EDIT_SUBMIT');
export const NOTIFICATION_SHOW   = 'NOTIFICATION_SHOW';
export const NOTIFICATION_HIDE   = 'NOTIFICATION_HIDE';

export const login = {
    // Notify the intent to fetch recipes
    request: request => ({type: LOGIN.REQUEST, request}),
    // Send the response
    success: response => ({type: LOGIN.SUCCESS, response}),
    // Send the error
    error: error => ({type: LOGIN.FAILURE, error})
};

export const logout = {
    // Notify the intent to fetch recipes
    request: request => ({type: LOGOUT.REQUEST, request}),
    // Send the response
    success: response => ({type: LOGOUT.SUCCESS, response}),
    // Send the error
    error: error => ({type: LOGOUT.FAILURE, error})
};

export const users = {
    // Notify the intent to fetch recipes
    request: request => ({type: USERS.REQUEST, request}),
    // Send the response
    success: response => ({type: USERS.SUCCESS, response}),
    // Send the error
    error: error => ({type: USERS.FAILURE, error})
};

export const projects = {
    // Notify the intent to fetch recipes
    request: request => ({type: PROJECTS.REQUEST, request}),
    // Send the response
    success: response => ({type: PROJECTS.SUCCESS, response}),
    // Send the error
    error: error => ({type: PROJECTS.FAILURE, error})
};

export const files = {
    // Notify the intent to fetch recipes
    request: request => ({type: FILES.REQUEST, request}),
    // Send the response
    success: response => ({type: FILES.SUCCESS, response}),
    // Send the error
    error: error => ({type: FILES.FAILURE, error})
};

export const projectEdit = {
    // Notify the intent to fetch recipes
    request: request => ({type: PROJECT_EDIT.REQUEST, request}),
    // Send the response
    success: response => ({type: PROJECT_EDIT.SUCCESS, response }),
    // Send the error
    error: error => ({type: PROJECT_EDIT.FAILURE, error})
};

export const projectsDelete = {
    // Notify the intent to fetch recipes
    request: request => ({type: PROJECT_DELETE.REQUEST, request}),
    // Send the response
    success: response => ({type: PROJECT_DELETE.SUCCESS, response }),
    // Send the error
    error: error => ({type: PROJECT_DELETE.FAILURE, error})
};

export const projectEditSubmit = {
    // Notify the intent to fetch recipes
    request: request => ({type: PROJECT_EDIT_SUBMIT.REQUEST, request}),
    // Send the response
    success: response => ({type: PROJECT_EDIT_SUBMIT.SUCCESS, response }),
    // Send the error
    error: error => ({type: PROJECT_EDIT_SUBMIT.FAILURE, error})
};

export const notification = {
    show: response => ({type: NOTIFICATION_SHOW, response}),
    hide: response => ({type: NOTIFICATION_HIDE, response}),
};