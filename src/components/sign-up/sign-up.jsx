import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}
	submitHandler = async (e) => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Password don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
		} catch (error) {
			console.log(error);
		}
	};

	changeHandler = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2>I don't have an account.</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.submitHandler}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						label='Display Name'
						handleChange={this.changeHandler}
						required
					/>
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
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						label='Confirm Password'
						handleChange={this.changeHandler}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign Up</CustomButton>
						{/* <CustomButton onClick={signInWithGoogle} isGoogleSignUp>
							Sign in with Google
						</CustomButton> */}
					</div>
				</form>
			</div>
		);
	}
}
