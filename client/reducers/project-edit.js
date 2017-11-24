import * as actions from "../actions/actions";

const initialState = {
    project : {},
};

const projectEdit = (state = initialState, action) => {
    switch (action.type) {
        case actions.PROJECT_EDIT.SUCCESS:
            return {
                ...state,
                project: action.response.project,
                users: action.response.users,
                isFetching: false
            };
        case actions.PROJECT_EDIT.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };

        case actions.PROJECT_EDIT.REQUEST:
            return {
                ...state,
                isFetching: false
            };

        default:
            return state
    }
};

export default projectEdit;