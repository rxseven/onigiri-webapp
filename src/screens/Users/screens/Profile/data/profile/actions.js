// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';

// Action and static types
import {
  PROFILE_GET,
  PROFILE_GET_FAILURE,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  type Action
} from './types';

// Get user profile : Start
export const getProfile = (): Action => ({
  type: PROFILE_GET
});

// Get user profile : Failure
export const getProfileFailure = (error: Error): Action => ({
  payload: error,
  type: PROFILE_GET_FAILURE
});

// Get user profile : Request
export const getProfileRequest = (): Action => ({
  type: PROFILE_GET_REQUEST
});

// Get user profile : Success
export const getProfileSuccess = (data: Data): Action => ({
  payload: data,
  type: PROFILE_GET_SUCCESS
});
