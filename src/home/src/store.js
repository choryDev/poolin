import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'dev') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middleware = [...middleware, logger];
}

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;