import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

CartIcon.propTypes = {
	toggleCartHidden: PropTypes.func.isRequired,
	itemCount: PropTypes.number.isRequired
};
const mapStateToProps = (state) => ({
	//selector-as it pulls of small slice of state
	itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
