//base reducer object which represent complete state of the object
import { combineReducers } from 'redux';
//rdx4 Add the slice of reducer on main root reducer
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart' ]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
