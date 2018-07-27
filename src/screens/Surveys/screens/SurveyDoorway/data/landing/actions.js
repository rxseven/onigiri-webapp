// Action types
import { LANDING_GET, LANDING_GET_FAILURE, LANDING_GET_SUCCESS, LANDING_RESET_DATA } from './types';

// Get landing page URI : Start
export const getLanding = id => ({
  payload: { id },
  type: LANDING_GET
});

// Get landing page URI : Failure
export const getLandingFailure = error => ({
  payload: error,
  type: LANDING_GET_FAILURE
});

// Get landing page URI : Success
export const getLandingSuccess = data => ({
  payload: data,
  type: LANDING_GET_SUCCESS
});

// Reset state
export const resetData = () => ({
  type: LANDING_RESET_DATA
});
