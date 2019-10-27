import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

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
		const { value, name } = e;
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account.</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.submitHandler}>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						label='email'
						handleChange={this.changeHandler}
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={this.state.password}
						label='password'
						handleChange={this.changeHandler}
						required
					/>
					<CustomButton type='submit'>Sign In</CustomButton>
				</form>
			</div>
		);
	}
}
