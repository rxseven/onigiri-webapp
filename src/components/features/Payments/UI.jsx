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
  actions: {
    payments: {
      checkout: (CheckoutToken, Callback) => void
    }
  },
  callback: Callback,
  state: {
    ui: {
      asynchronous: {
        post: Asynchronous
      }
    }
  }
};

type Return = React.Element<typeof StripeCheckout>;

// Component
const UI = ({ actions, callback, state }: Props): Return => (
  <StripeCheckout
    amount={500}
    currency="USD"
    description="$5.00 for 5 survey credits"
    name="Onigiri"
    panelLabel="Add Credits"
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
    token={token => actions.payments.checkout(token, callback)}
  >
    <Button button="outline-primary" disabled={state.ui.asynchronous.post.loading} size="small">
      Add Credits
    </Button>
  </StripeCheckout>
);

// Module exports
export default UI;
