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

        case actions.FEED.MORE_SUCCESS:
            return {
                ...state,
                news: state.news.concat(action.response.children),
                after: action.response.after,
                isFetching: false
            };

        case actions.FEED.FAILURE:
        case actions.FEED.MORE_FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };

        case actions.FEED.REQUEST:
        case actions.FEED.MORE_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        default:
            return state
    }
};

export default feed;