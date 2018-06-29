// Action types
export const CHECKOUT = 'data/credits/CHECKOUT';
export const CHECKOUT_FAILURE = 'data/credits/CHECKOUT_FAILURE';
export const CHECKOUT_SUCCESS = 'data/credits/CHECKOUT_SUCCESS';

export const CREDITS_GET = 'data/credits/CREDITS_GET';
export const CREDITS_GET_FAILURE = 'data/credits/CREDITS_GET_FAILURE';
export const CREDITS_GET_SUCCESS = 'data/credits/CREDITS_GET_SUCCESS';

export const CREDITS_UPDATE = 'data/credits/CREDITS_UPDATE';

// Checkout : Start
export const checkout = (token, callback) => ({
  callback,
  payload: { token },
  type: CHECKOUT
});

// Checkout : Failure
export const checkoutFailure = error => ({
  payload: error.response.data.error,
  type: CHECKOUT_FAILURE
});

// Checkout : Success
export const checkoutSuccess = data => ({
  payload: data,
  type: CHECKOUT_SUCCESS
});

// Get credits : Start
export const getCredits = () => ({
  type: CREDITS_GET
});

// Get credits : Failure
export const getCreditsFailure = error => ({
  payload: error.response.data.error,
  type: CREDITS_GET_FAILURE
});

// Get credits : Success
export const getCreditsSuccess = data => ({
  payload: data,
  type: CREDITS_GET_SUCCESS
});

// Update credits
export const updateCredits = data => ({
  payload: data,
  type: CREDITS_UPDATE
});
