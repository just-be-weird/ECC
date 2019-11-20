import { SET_CURRENT_USER } from '../actionTypes';
//rdx2 Define the action dispatcher function
export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user
});
