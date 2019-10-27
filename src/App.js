import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUpPage from './pages/auth/auth';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css';
import { auth } from './firebase/firebase.utils';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => this.setState({ currentUser: user }));
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth(); //if user state changes then clean the firebase state
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}/>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/signIn' component={SignInSignUpPage} />
					<Route exact path='/shop' component={ShopPage} />
				</Switch>
			</div>
		);
	}
}
