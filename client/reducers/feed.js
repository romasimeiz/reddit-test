import * as actions from "../actions/actions";

const initialState = {
    news : [],
    after: '',
};

const feed = (state = initialState, action) => {
    switch (action.type) {
        case actions.FEED.SUCCESS:
            return {
                ...state,
                news: action.response.children,
                after: action.response.after,
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