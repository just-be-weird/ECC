import { createSelector } from 'reselect';

//input selectors - which gets whole state and returns just slice of it
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([ selectCart ], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([ selectCart ], (cart) => cart.hidden);

//output selectors
/* !!important after defining the selector always make sure that its been added 
	to OUTPUT SELECTOR else setState won't be called and component will not be rendered.
*/
export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accQty, cartItem) => accQty + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accTotal, cartItem) => accTotal + cartItem.quantity * cartItem.price, 0)
);
