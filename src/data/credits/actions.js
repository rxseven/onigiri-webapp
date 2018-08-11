// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';
import type { CheckoutToken } from 'types/features/payments';

// Action and static types
import {
  CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CREDITS_GET,
  CREDITS_GET_FAILURE,
  CREDITS_GET_REQUEST,
  CREDITS_GET_SUCCESS,
  CREDITS_UPDATE,
  type Action
} from './types';

// Checkout : Start
export const checkout = (token: CheckoutToken, callback: Callback): Action => ({
  callback,
  payload: { token },
  type: CHECKOUT
});

// Checkout : Failure
export const checkoutFailure = (error: Error): Action => ({
  payload: error,
  type: CHECKOUT_FAILURE
});

// Checkout : Request
export const checkoutRequest = (): Action => ({
  type: CHECKOUT_REQUEST
});

// Checkout : Success
export const checkoutSuccess = (data: Data): Action => ({
  payload: data,
  type: CHECKOUT_SUCCESS
});

// Get credits : Start
export const getCredits = (): Action => ({
  type: CREDITS_GET
});

// Get credits : Failure
export const getCreditsFailure = (error: Error): Action => ({
  payload: error,
  type: CREDITS_GET_FAILURE
});

// Get credits : Request
export const getCreditsRequest = (): Action => ({
  type: CREDITS_GET_REQUEST
});

// Get credits : Success
export const getCreditsSuccess = (data: Data): Action => ({
  payload: data,
  type: CREDITS_GET_SUCCESS
});

// Update credits
export const updateCredits = (data: Data): Action => ({
  payload: data,
  type: CREDITS_UPDATE
});
