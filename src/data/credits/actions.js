// Action types
import {
  CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  CREDITS_GET,
  CREDITS_GET_FAILURE,
  CREDITS_GET_SUCCESS,
  CREDITS_UPDATE
} from './types';

// Checkout : Start
export const checkout = (token, callback) => ({
  callback,
  payload: { token },
  type: CHECKOUT
});

// Checkout : Failure
export const checkoutFailure = error => ({
  payload: error,
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
  payload: error,
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
