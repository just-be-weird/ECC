import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [ logger ];
//rdx5 create and export the main reducer's return object as @store
export default createStore(rootReducer, applyMiddleware(...middlewares));
