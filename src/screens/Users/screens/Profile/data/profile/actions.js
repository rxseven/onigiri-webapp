// Action types
import {
  PROFILE_GET,
  PROFILE_GET_FAILURE,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS
} from './types';

// Get user profile : Start
export const getProfile = () => ({
  type: PROFILE_GET
});

// Get user profile : Failure
export const getProfileFailure = error => ({
  payload: error,
  type: PROFILE_GET_FAILURE
});

// Get user profile : Request
export const getProfileRequest = () => ({
  type: PROFILE_GET_REQUEST
});

// Get user profile : Success
export const getProfileSuccess = data => ({
  payload: data,
  type: PROFILE_GET_SUCCESS
});
