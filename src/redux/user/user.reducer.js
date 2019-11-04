import { SET_CURRENT_USER } from '../actionTypes';
//rdx3 define the state logic using reducer
const initialState = {
	currentUser: null
};
//if state is recieved as null that value will be still used instead of initialStat
//userReducer
export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload
			};

		default:
			return state;
	}
};
