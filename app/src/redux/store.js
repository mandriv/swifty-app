import { createStore, applyMiddleware, compose } from 'redux';
import Config from 'react-native-config';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducer';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const persistConfig = {
  key: Config.PERSIST_KEY || 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
