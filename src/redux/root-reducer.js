//base reducer object which represent complete state of the object
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
//rdx4 Add the slice of reducer on main root reducer
export default combineReducers({
	user: userReducer
});
