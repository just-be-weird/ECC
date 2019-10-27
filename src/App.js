import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUpPage from './pages/auth/auth';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/signIn' component={SignInSignUpPage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
