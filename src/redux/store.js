import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [ logger ];
//rdx5 create and export the main reducer's return object as @store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
