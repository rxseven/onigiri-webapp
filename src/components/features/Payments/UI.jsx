// @flow
// Module dependencies
import * as React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Components and HOCs
import { Button } from 'components/common/Buttons';

// Types
import type { Asynchronous } from 'types/common/state';
import type { Callback } from 'types/common/utilities';
import type { CheckoutToken } from 'types/features/payments';

// Static types
type Props = {
  asynchronous: {
    post: Asynchronous
  },
  callback: Callback,
  checkout: (CheckoutToken, Callback) => void
};

type Return = React.Element<typeof StripeCheckout>;

// Component
const UI = ({ asynchronous, callback, checkout }: Props): Return => {
  // Variables
  const { loading: isLoading } = asynchronous.post;

  // Configuration
  const config = {
    amount: 500,
    currency: 'USD',
    description: '$5.00 for 5 survey credits',
    name: 'Onigiri',
    panelLabel: 'Add Credits',
    stripeKey: process.env.REACT_APP_STRIPE_KEY,
    token: token => checkout(token, callback)
  };

  // View
  return (
    <StripeCheckout {...config}>
      <Button button="outline-primary" disabled={isLoading} size="small">
        Add Credits
      </Button>
    </StripeCheckout>
  );
};

// Module exports
export default UI;
