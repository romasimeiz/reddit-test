import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import feed from './feed';
/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
    auth,
    feed,
});