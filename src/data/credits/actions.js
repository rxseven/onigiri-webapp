// Module dependencies
import paymentsService from '../../services/payments';
import * as usersService from '../../services/users';

// Actions
export const CHECKOUT = 'data/credits/CHECKOUT';
export const CHECKOUT_FAILURE = 'data/credits/CHECKOUT_FAILURE';
export const CHECKOUT_SUCCESS = 'data/credits/CHECKOUT_SUCCESS';

export const CREDITS_GET = 'data/credits/CREDITS_GET';
export const CREDITS_GET_FAILURE = 'data/credits/CREDITS_GET_FAILURE';
export const CREDITS_GET_SUCCESS = 'data/credits/CREDITS_GET_SUCCESS';

// Checkout : Success
const checkoutSuccess = data => ({
  type: CHECKOUT_SUCCESS,
  payload: data
});

// Checkout : Failure
const checkoutFailure = error => ({
  type: CHECKOUT_FAILURE,
  payload: error.response.data.error
});

// Checkout : Start (loading)
export const checkout = (token, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: CHECKOUT });

    // 2. Forward Stripe Checkout token to the API
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await paymentsService.checkout(token);

    // 4. Inform a reducer that the request finished successfully
    dispatch(checkoutSuccess(data));

    // 5. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(checkoutFailure(error));
  }
};

// Get credits : Success
const getCreditsSuccess = data => ({
  type: CREDITS_GET_SUCCESS,
  payload: data
});

// Get credits : Failure
const getCreditsFailure = error => ({
  type: CREDITS_GET_FAILURE,
  payload: error.response.data.error
});

// Get credits : Start (loading)
export const getCredits = () => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: CREDITS_GET });

    // 2. Get credits
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.getCredits();

    // 4. Inform a reducer that the request finished successfully
    dispatch(getCreditsSuccess(data));
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getCreditsFailure(error));
  }
};
