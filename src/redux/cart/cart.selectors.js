import { createSelector } from 'reselect';

//input selectors
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([ selectCart ], (cart) => cart.cartItems);
//output selectors
export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
);
