// Module dependencies
import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { Button } from '../../../components/shared/base/Buttons';

// Declare prop types
const propTypes = {
  callback: PropTypes.func.isRequired
};

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
  >
    <Button button="outline-primary" size="small">
      Add Credits
    </Button>
  </StripeCheckout>
);

// Specify prop types
UI.propTypes = propTypes;

// Module exports
export default UI;
