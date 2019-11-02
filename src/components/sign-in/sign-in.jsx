import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	submitHandler = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	changeHandler = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h2>I already have an account.</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.submitHandler}>
					<FormInput
						type='email'
						name='email'
						value={email}
						label='Email'
						handleChange={this.changeHandler}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						label='Password'
						handleChange={this.changeHandler}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}