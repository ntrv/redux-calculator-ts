import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// tslint:disable-next-line
import immutableTransform from 'redux-persist-transform-immutable';

import reducers, { State } from './reducers';

const logger = createLogger({
    level: 'log',
    diff: true,
    collapsed: true,
    stateTransformer: (state: State) => state.calculatorReducer.toJS(),
});

const persistConfig: PersistConfig = {
    transforms: [immutableTransform()],
    key: 'root',
    storage,
//    whitelist: ['calculatorReducer'],
    blacklist: ['calculatorReducer'],
};

const store = createStore(
    persistReducer(persistConfig, reducers),
    applyMiddleware(logger),
);

export const persistor = persistStore(
    store,
);
export default store;