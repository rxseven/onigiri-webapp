// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';

// Action types
export const LANDING_GET = 'Landing/data/LANDING_GET';
export const LANDING_GET_FAILURE = 'Landing/data/LANDING_GET_FAILURE';
export const LANDING_GET_REQUEST = 'Landing/data/LANDING_GET_REQUEST';
export const LANDING_GET_SUCCESS = 'Landing/data/LANDING_GET_SUCCESS';
export const LANDING_RESET_DATA = 'Landing/data/LANDING_RESET_DATA';

// Static types
export type URI = { URI: string };

export type Action =
  | { type: typeof LANDING_GET, payload: { id: ID } }
  | { type: typeof LANDING_GET_FAILURE, payload: Error }
  | { type: typeof LANDING_GET_REQUEST }
  | { type: typeof LANDING_GET_SUCCESS, payload: Data }
  | { type: typeof LANDING_RESET_DATA };
