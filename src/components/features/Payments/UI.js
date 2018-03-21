// Module dependencies
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Component
const UI = ({ actions, callback, state }) => (
  <StripeCheckout
    amount={500}
    currency="USD"
    description="$5.00 for 5 survey credits"
    name="Onigiri"
    panelLabel="Add Credits"
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    token={token => actions.payments.checkout(token, callback)}
  />
);

// Module exports
export default UI;
