// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action and static types
import {
  SURVEY_DELETE,
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  SURVEY_REMOVE,
  SURVEY_SELECTED_ADD,
  SURVEY_SELECTED_REMOVE,
  type Action
} from './types';

// Add selected survey
export const addSelectedSurvey = (id: ID): Action => ({
  payload: id,
  type: SURVEY_SELECTED_ADD
});

// Remove selected survey
export const removeSelectedSurvey = (): Action => ({
  type: SURVEY_SELECTED_REMOVE
});

// Delete survey : Start
export const deleteSurvey = (id: ID, callback: Callback): Action => ({
  callback,
  payload: { id },
  type: SURVEY_DELETE
});

// Delete survey : Failure
export const deleteSurveyFailure = (error: Error): Action => ({
  payload: error,
  type: SURVEY_DELETE_FAILURE
});

// Delete survey : Request
export const deleteSurveyRequest = (): Action => ({
  type: SURVEY_DELETE_REQUEST
});

// Delete survey : Success
export const deleteSurveySuccess = (data: Data): Action => ({
  payload: data,
  type: SURVEY_DELETE_SUCCESS
});

// Remove survey from its list
export const removeSurvey = (id: ID): Action => ({
  payload: id,
  type: SURVEY_REMOVE
});
