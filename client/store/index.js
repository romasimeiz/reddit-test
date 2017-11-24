import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
    // other store enhancers if any
));

sagaMiddleware.run(rootSaga);

export default store;