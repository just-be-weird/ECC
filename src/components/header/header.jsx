import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.styles';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo'/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          /*here we are using as attribute to tell styled comp,
					what type of link do we want. need to pass to, to resolve proptypes warning */
          <OptionLink as={'div'} to={''} onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
  );
};
//rdx9 define mapStateToProps | which gets the state object (combined rootReducer)
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
// 	currentUser,
// 	hidden
// });//v2
// const mapStateToProps = state => ({
// 	currentUser: selectCurrentUser(state),
// 	hidden: selectCartHidden(state)
// });without using createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
//rdx8 define proptypes for props that we're receiving from the redux store
Header.propTypes = {
  currentUser: PropTypes.object
};
//rdx7 use connect to get the slice of required state from the redux store
export default connect(mapStateToProps)(Header);
