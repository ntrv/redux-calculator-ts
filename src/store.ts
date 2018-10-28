import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const logger = createLogger({
    level: 'log',
    diff: true,
    collapsed: true,
});

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['calculatorReducer'],
};

const store = createStore(
    persistReducer(persistConfig, reducers),
    applyMiddleware(logger),
);

export const persistor = persistStore(store);
export default store;