import SHOP_DATA from './shop.data';

const initialState = {
	collections: SHOP_DATA
};
//shopReducer
export default (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
};
