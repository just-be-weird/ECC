import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUpPage from './pages/auth/auth';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //if user exists get their ref else set it null as firebase returns null if user not exists
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //now check whether location is been updated with any new data if then set it on state
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //if user state changes then clean the firebase state
  }

  render() {
    //we are passing current user to Header so that header is aware of the login state
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route
            exact
            path='/signIn'
            render={() => (this.props.currentUser ? <Redirect to='/'/> : <SignInSignUpPage/>)}
          />
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
/*	//rdx10 mapDispatchToProps is a function receives the dispatch property
		which dispatches the passed actionDispatcher action
*/
const mapDispatchToProps = (dispatch) => ({setCurrentUser: (user) => dispatch(setCurrentUser(user))}); //or use following method
//rdx11 setup proptype
App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};
//rdx12 plug it with redux using connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
