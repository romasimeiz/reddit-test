import * as actions from "../actions/actions";

const initialState = {

};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actions.AUTH.SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case actions.AUTH.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.AUTH.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }
};

export default auth;