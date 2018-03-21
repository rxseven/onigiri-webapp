// Module dependencies
import ajax from '../helpers/ajax';

// Constants
import API from '../config/api';

// Checkout
export default {
  checkout: token =>
    ajax({
      data: token,
      method: 'post',
      url: API.endpoints.payments.checkout
    })
};
