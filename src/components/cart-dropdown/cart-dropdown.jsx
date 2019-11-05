import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>{cartItems.map((cartItem) => <CartItem item={cartItem} />)}</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

CartDropdown.propTypes = {
	cartItems: PropTypes.object
};
const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);
