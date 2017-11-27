import * as feedActions from  '../Actions';

const initialState = {
    news : [],
    after: '',
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case feedActions.FEED.SUCCESS:
            return {
                ...state,
                news: action.response.children,
                after: action.response.after,
                isFetching: false
            };

        case feedActions.FEED.MORE_SUCCESS:
            return {
                ...state,
                news: state.news.concat(action.response.children),
                after: action.response.after,
                isFetching: false
            };

        case feedActions.FEED.FAILURE:
        case feedActions.FEED.MORE_FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };

        case feedActions.FEED.REQUEST:
        case feedActions.FEED.MORE_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        default:
            return state
    }
};

export default feedReducer;