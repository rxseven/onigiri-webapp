// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';

// Action and static types
import {
  LANDING_GET,
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA,
  type Action
} from './types';

// Get landing page URI : Start
export const getLanding = (id: ID): Action => ({
  payload: { id },
  type: LANDING_GET
});

// Get landing page URI : Failure
export const getLandingFailure = (error: Error): Action => ({
  payload: error,
  type: LANDING_GET_FAILURE
});

// Get landing page URI : Request
export const getLandingRequest = (): Action => ({
  type: LANDING_GET_REQUEST
});

// Get landing page URI : Success
export const getLandingSuccess = (data: Data): Action => ({
  payload: data,
  type: LANDING_GET_SUCCESS
});

// Reset state
export const resetData = (): Action => ({
  type: LANDING_RESET_DATA
});
