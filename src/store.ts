import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const logger = createLogger({
    level: 'log',
    diff: true,
    collapsed: true,
});

const store = createStore(
    reducers,
    applyMiddleware(logger),
);

export default store;