import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
		</div>
	);
};
//rdx9 define mapStateToProps | which gets the state object (combined rootReducer)
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});
//rdx8 define proptype for props that we're receiving from the redux store
Header.propTypes = {
	currentUser: PropTypes.object
};
//rdx7 use connect to get the slice of required state from the redux store
export default connect(mapStateToProps)(Header);
