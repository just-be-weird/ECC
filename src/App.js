import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUpPage from './pages/auth/auth';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			//if user exists get ther ref else set it null as firebase returns null if user not exists
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				//now check whether location is been updated with any new data if then set it on state
				userRef.onSnapshot((snapshot) =>
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					})
				);
			} else {
				this.setState({
					currentUser: userAuth
				});
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
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/signIn' component={SignInSignUpPage} />
					<Route exact path='/shop' component={ShopPage} />
				</Switch>
			</div>
		);
	}
}
