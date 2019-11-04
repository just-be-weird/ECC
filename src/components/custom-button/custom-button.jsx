import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...rest }) => {
	return (
		<button
			className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default CustomButton;
