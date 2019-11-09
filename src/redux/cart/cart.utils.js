const findItemInCart = (cartItems, cartItemToUpdate) =>
	cartItems.find((cartItem) => cartItem.id === cartItemToUpdate.id);

export const addItemToCart = (cartItems, cartItemToAdd) => {
	//check if items already is in cart
	const existingCartItem = findItemInCart(cartItems, cartItemToAdd);
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = findItemInCart(cartItems, cartItemToRemove);
	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToRemove.id && cartItemToRemove.quantity !== 1
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
		);
	}
};
