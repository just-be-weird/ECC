import { TOGGLE_CART_HIDDEN } from '../actionTypes';

const initialState = {
	hidden: true
};

const cartReducer = (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};

		default:
			return state;
	}
};

export default cartReducer;
