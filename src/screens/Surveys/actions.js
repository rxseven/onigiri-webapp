// Action types
import {
  SURVEY_DELETE,
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  SURVEY_REMOVE,
  SURVEY_SELECTED_ADD,
  SURVEY_SELECTED_REMOVE
} from './types';

// Add selected survey
export const addSelectedSurvey = id => ({
  payload: id,
  type: SURVEY_SELECTED_ADD
});

// Remove selected survey
export const removeSelectedSurvey = () => ({
  type: SURVEY_SELECTED_REMOVE
});

// Delete survey : Start
export const deleteSurvey = (id, callback) => ({
  callback,
  payload: { id },
  type: SURVEY_DELETE
});

// Delete survey : Failure
export const deleteSurveyFailure = error => ({
  payload: error,
  type: SURVEY_DELETE_FAILURE
});

// Delete survey : Request
export const deleteSurveyRequest = () => ({
  type: SURVEY_DELETE_REQUEST
});

// Delete survey : Success
export const deleteSurveySuccess = data => ({
  payload: data,
  type: SURVEY_DELETE_SUCCESS
});

// Remove survey from its list
export const removeSurvey = id => ({
  payload: id,
  type: SURVEY_REMOVE
});
