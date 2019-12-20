import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 70;
  const publishableKey = 'pk_test_DKmoeNEeAAZZrScuJlibo3n100QF10HLtT';
  const onToken = token => {
    console.log('Token: ', token);
    alert('Payment successful :)');
  };
  return (
    <StripeCheckout
      label={'Pay Now'}
      name={'ECC Avenue'}
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is ₹ ${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
