import * as actions from "../actions/actions";

const initialState = {
    news : []
};

const feed = (state = initialState, action) => {
    switch (action.type) {
        case actions.FEED.SUCCESS:
            return {
                ...state,
                news: action.response,
                isFetching: false
            };
        case actions.FEED.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.FEED.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }
};

export default feed;