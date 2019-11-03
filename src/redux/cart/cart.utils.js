export const addItemToCart = (cartItems, cartItemToAdd) => {
	//check if items already is in cart
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
	//if item exists in cart then find the item and increase its quantiy
	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}
	//if item is not present inside the cart then tack on base quantity then add it to cart
	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};
