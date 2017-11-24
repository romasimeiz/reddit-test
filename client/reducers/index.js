import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import projects from './projects';
import projectEdit from './project-edit';
/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
});