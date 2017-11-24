import * as actions from "../actions/actions";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    errorMessage: false,
    isFetching: false,
    sideBar: [
        {
            name: 'Home',
            className: 'fa fa-home'
        },
        {
            name: 'Users',
            className: 'fa fa-user-o'
        },
        {
            name: 'Projects',
            className: 'fa fa-desktop',
            childrens: [
                {
                    name: 'test1',
                    className: 'fa fa-tasks',
                },
                {
                    name: 'test2',
                    className: 'fa fa-tasks',
                },
            ]
        }
    ],
    clientsGrid: [
        {
            name: 'Name',
            className: 'table-name',
            mapping: 'name'
        },
        {
            name: 'Email',
            className: '',
            mapping: 'ClientEmail'
        },
        {
            name: 'Phone',
            className: '',
            mapping: 'phone'
        }
    ],
};

/**
 * Kirill Bashtenko
 * authorization and registration reducer
 * @param state
 * @param action
 * @returns {*}
 */

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN.SUCCESS:
            localStorage.setItem('access_token', action.response.data.token);
            localStorage.setItem('user', JSON.stringify(action.response.data.user));
            return {
                ...state,
                user: action.response.data.user,
                isFetching: false
            };
        case actions.LOGIN.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.LOGIN.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case actions.LOGOUT.SUCCESS:
            localStorage.clear();
            return {
                ...state,
                user: {
                    name: 'guest',
                },
                isFetching: false
            };
        case actions.LOGOUT.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.LOGOUT.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }
};

export default auth;
