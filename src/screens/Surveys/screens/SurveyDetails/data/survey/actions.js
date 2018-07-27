// Action types
import {
  RECIPIENTS_GET,
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_REQUEST,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET,
  SURVEY_GET_FAILURE,
  SURVEY_GET_REQUEST,
  SURVEY_GET_SUCCESS,
  SURVEY_RESET_DATA,
  SURVEY_UPDATE,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_REQUEST,
  SURVEY_UPDATE_SUCCESS
} from './types';

// Get survey : Start
export const getSurvey = (id, callback) => ({
  callback,
  payload: { id },
  type: SURVEY_GET
});

// Get survey : Failure
export const getSurveyFailure = error => ({
  payload: error,
  type: SURVEY_GET_FAILURE
});

// Get survey : Request
export const getSurveyRequest = () => ({
  type: SURVEY_GET_REQUEST
});

// Get survey : Success
export const getSurveySuccess = data => ({
  payload: data,
  type: SURVEY_GET_SUCCESS
});

// Get recipients : Start
export const getRecipients = id => ({
  payload: { id },
  type: RECIPIENTS_GET
});

// Get recipients : Failure
export const getRecipientsFailure = error => ({
  payload: error,
  type: RECIPIENTS_GET_FAILURE
});

// Get recipients : Request
export const getRecipientsRequest = () => ({
  type: RECIPIENTS_GET_REQUEST
});

// Get recipients : Success
export const getRecipientsSuccess = data => ({
  payload: data,
  type: RECIPIENTS_GET_SUCCESS
});

// Reset data
export const resetData = () => ({
  type: SURVEY_RESET_DATA
});

// Update survey : Start
export const updateSurvey = (id, values) => ({
  payload: {
    id,
    values
  },
  type: SURVEY_UPDATE
});

// Update survey : Failure
export const updateSurveyFailure = error => ({
  payload: error,
  type: SURVEY_UPDATE_FAILURE
});

// Update survey : Request
export const updateSurveyRequest = () => ({
  type: SURVEY_UPDATE_REQUEST
});

// Update survey : Success
export const updateSurveySuccess = data => ({
  payload: data,
  type: SURVEY_UPDATE_SUCCESS
});
