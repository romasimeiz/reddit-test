import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
));

sagaMiddleware.run(rootSaga);

export default store;