import {applyMiddleware, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
//rdx5 create and export the main reducer's return object as @store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
