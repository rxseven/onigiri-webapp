// Module dependencies
import ajax from 'helpers/ajax';

// Constants
import API from 'config/api';

// Checkout
const checkout = token =>
  ajax({
    data: token,
    method: 'post',
    url: API.endpoints.payments.checkout
  });

// Module exports
export default { checkout };
