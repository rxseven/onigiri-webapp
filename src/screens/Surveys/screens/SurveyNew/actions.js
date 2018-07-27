// Action types
import {
  SURVEY_CREATE,
  SURVEY_CREATE_FAILURE,
  SURVEY_CREATE_REQUEST,
  SURVEY_CREATE_SUCCESS,
  SURVEY_RESET_UI
} from './types';

// Create survey : Start
export const createSurvey = (values, callback) => ({
  callback,
  payload: { values },
  type: SURVEY_CREATE
});

// Create survey : Failure
export const createSurveyFailure = error => ({
  payload: error,
  type: SURVEY_CREATE_FAILURE
});

// Create survey : Request
export const createSurveyRequest = () => ({
  type: SURVEY_CREATE_REQUEST
});

// Create survey : Success
export const createSurveySuccess = data => ({
  payload: data,
  type: SURVEY_CREATE_SUCCESS
});

// Reset UI state
export const resetUI = () => ({
  type: SURVEY_RESET_UI
});
