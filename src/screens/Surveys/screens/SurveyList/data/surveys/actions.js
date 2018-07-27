// Action types
import {
  SURVEYS_CANCEL,
  SURVEYS_CANCEL_FAILURE,
  SURVEYS_CANCEL_SUCCESS,
  SURVEYS_GET,
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_SUCCESS,
  SURVEYS_RESET_DATA,
  SURVEYS_SELECT_MODE
} from './types';

// Cancel getting surveys : Start
export const cancelSurveys = () => ({
  type: SURVEYS_CANCEL
});

// Cancel getting surveys : Failure
export const cancelSurveysFailure = () => ({
  type: SURVEYS_CANCEL_FAILURE
});

// Cancel getting surveys : Success
export const cancelSurveysSuccess = () => ({
  type: SURVEYS_CANCEL_SUCCESS
});

// Get a list of surveys : Start
export const getSurveys = (query, callback) => ({
  callback,
  payload: { query },
  type: SURVEYS_GET
});

// Get a list of surveys : Failure
export const getSurveysFailure = error => ({
  payload: error,
  type: SURVEYS_GET_FAILURE
});

// Get a list of surveys : Success
export const getSurveysSuccess = data => ({
  payload: data,
  type: SURVEYS_GET_SUCCESS
});

// Reset surveys data
export const resetData = () => ({
  type: SURVEYS_RESET_DATA
});

// Select list view mode
export const selectMode = query => ({
  payload: query,
  type: SURVEYS_SELECT_MODE
});
