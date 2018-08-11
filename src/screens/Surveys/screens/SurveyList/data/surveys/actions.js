// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action and static types
import {
  SURVEYS_CANCEL,
  SURVEYS_CANCEL_FAILURE,
  SURVEYS_CANCEL_REQUEST,
  SURVEYS_CANCEL_SUCCESS,
  SURVEYS_GET,
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_REQUEST,
  SURVEYS_GET_SUCCESS,
  SURVEYS_RESET_DATA,
  SURVEYS_SELECT_MODE,
  type Action,
  type QueryMode
} from './types';
import type { QueryList } from '../../types';

// Cancel getting surveys : Start
export const cancelSurveys = (): Action => ({
  type: SURVEYS_CANCEL
});

// Cancel getting surveys : Failure
export const cancelSurveysFailure = (): Action => ({
  type: SURVEYS_CANCEL_FAILURE
});

// Cancel getting surveys : Request
export const cancelSurveysRequest = (): Action => ({
  type: SURVEYS_CANCEL_REQUEST
});

// Cancel getting surveys : Success
export const cancelSurveysSuccess = (): Action => ({
  type: SURVEYS_CANCEL_SUCCESS
});

// Get a list of surveys : Start
export const getSurveys = (query: QueryList, callback: Callback): Action => ({
  callback,
  payload: { query },
  type: SURVEYS_GET
});

// Get a list of surveys : Failure
export const getSurveysFailure = (error: Error): Action => ({
  payload: error,
  type: SURVEYS_GET_FAILURE
});

// Get a list of surveys : Request
export const getSurveysRequest = (): Action => ({
  type: SURVEYS_GET_REQUEST
});

// Get a list of surveys : Success
export const getSurveysSuccess = (data: Data): Action => ({
  payload: data,
  type: SURVEYS_GET_SUCCESS
});

// Reset surveys data
export const resetData = (): Action => ({
  type: SURVEYS_RESET_DATA
});

// Select list view mode
export const selectMode = (query: QueryMode): Action => ({
  payload: query,
  type: SURVEYS_SELECT_MODE
});
