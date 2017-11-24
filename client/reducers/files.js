import * as actions from "../actions/actions";

const initialState = {
    files : [],
    filesGrid: [
        {
            name: 'ID',
            className: '',
            mapping: 'id'
        },
        {
            name: 'Path',
            className: '',
            mapping: 'path'
        },
        {
            name: 'Hash first',
            className: '',
            mapping: 'hash_first'
        },
        {
            name: 'Hash last',
            className: '',
            mapping: 'hash_last'
        },
    ],
};

const files = (state = initialState, action) => {
    switch (action.type) {
        case actions.FILES.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case actions.FILES.SUCCESS:
            return {
                ...state,
                files: action.response.data,
                isFetching: false
            };
        case actions.FILES.FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
                isFetching: false
            });
        default:
            return state
    }
};

export default files;