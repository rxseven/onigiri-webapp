// @flow
// Module dependencies
import ajax from 'helpers/ajax';
import type { CheckoutToken } from 'types/features/payments';

// Constants
import API from 'config/api';

// Static types
type Return = Promise<any>;

// Checkout
const checkout = (token: CheckoutToken): Return =>
  ajax({
    data: token,
    method: 'post',
    url: API.endpoints.payments.checkout
  });

// Module exports
export default { checkout };
