import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
		<div className='total'>Total: ₹ {total}</div>
		<div className="test-warning">
			Please don't use real credit cards, use below credit card to make *payments<br/>
			4242 4242 4242 4242  -  Exp: 01/20  -  CVV: 123
		</div>
		<StripeCheckoutButton />
	</div>
);
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

Checkout.propTypes = {
	cartItems: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(Checkout);
