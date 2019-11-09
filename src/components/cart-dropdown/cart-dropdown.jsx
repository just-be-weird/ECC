import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
const CartDropdown = ({ cartItems, dispatch, history }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span className='empty-message'>Your cart is empty.</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

CartDropdown.propTypes = {
	cartItems: PropTypes.array
};
const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
