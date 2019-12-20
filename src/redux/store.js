import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}
//rdx5 create and export the main reducer's return object as @store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//sagaMiddleware.run();
export const persistor = persistStore(store);
