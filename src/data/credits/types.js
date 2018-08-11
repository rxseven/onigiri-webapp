// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';
import type { CheckoutToken } from 'types/features/payments';

// Action types
export const CHECKOUT = 'data/credits/CHECKOUT';
export const CHECKOUT_FAILURE = 'data/credits/CHECKOUT_FAILURE';
export const CHECKOUT_REQUEST = 'data/credits/CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'data/credits/CHECKOUT_SUCCESS';

export const CREDITS_GET = 'data/credits/CREDITS_GET';
export const CREDITS_GET_FAILURE = 'data/credits/CREDITS_GET_FAILURE';
export const CREDITS_GET_REQUEST = 'data/credits/CREDITS_GET_REQUEST';
export const CREDITS_GET_SUCCESS = 'data/credits/CREDITS_GET_SUCCESS';

export const CREDITS_UPDATE = 'data/credits/CREDITS_UPDATE';

// Static types
export type Balance = number;

export type Credits = {
  balance: ?number,
  lastCheckout: ?string
};

export type Action =
  | { type: typeof CHECKOUT, callback: Callback, payload: { token: CheckoutToken } }
  | { type: typeof CHECKOUT_FAILURE, payload: Error }
  | { type: typeof CHECKOUT_REQUEST }
  | { type: typeof CHECKOUT_SUCCESS, payload: Data }
  | { type: typeof CREDITS_GET }
  | { type: typeof CREDITS_GET_FAILURE, payload: Error }
  | { type: typeof CREDITS_GET_REQUEST }
  | { type: typeof CREDITS_GET_SUCCESS, payload: Data }
  | { type: typeof CREDITS_UPDATE, payload: Data };
