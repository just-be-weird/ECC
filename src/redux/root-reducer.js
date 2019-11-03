//base reducer object which represent complete state of the object
import { combineReducers } from 'redux';
//rdx4 Add the slice of reducer on main root reducer
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});
