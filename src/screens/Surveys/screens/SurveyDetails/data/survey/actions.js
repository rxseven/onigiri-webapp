// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action and static types
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
  SURVEY_UPDATE_SUCCESS,
  type Action
} from './types';

// Get survey : Start
export const getSurvey = (id: ID, callback: Callback): Action => ({
  callback,
  payload: { id },
  type: SURVEY_GET
});

// Get survey : Failure
export const getSurveyFailure = (error: Error): Action => ({
  payload: error,
  type: SURVEY_GET_FAILURE
});

// Get survey : Request
export const getSurveyRequest = (): Action => ({
  type: SURVEY_GET_REQUEST
});

// Get survey : Success
export const getSurveySuccess = (data: Data): Action => ({
  payload: data,
  type: SURVEY_GET_SUCCESS
});

// Get recipients : Start
export const getRecipients = (id: ID): Action => ({
  payload: { id },
  type: RECIPIENTS_GET
});

// Get recipients : Failure
export const getRecipientsFailure = (error: Error): Action => ({
  payload: error,
  type: RECIPIENTS_GET_FAILURE
});

// Get recipients : Request
export const getRecipientsRequest = (): Action => ({
  type: RECIPIENTS_GET_REQUEST
});

// Get recipients : Success
export const getRecipientsSuccess = (data: Data): Action => ({
  payload: data,
  type: RECIPIENTS_GET_SUCCESS
});

// Reset data
export const resetData = (): Action => ({
  type: SURVEY_RESET_DATA
});

// Update survey : Start
export const updateSurvey = (id: ID, values: {}): Action => ({
  payload: { id, values },
  type: SURVEY_UPDATE
});

// Update survey : Failure
export const updateSurveyFailure = (error: Error): Action => ({
  payload: error,
  type: SURVEY_UPDATE_FAILURE
});

// Update survey : Request
export const updateSurveyRequest = (): Action => ({
  type: SURVEY_UPDATE_REQUEST
});

// Update survey : Success
export const updateSurveySuccess = (data: Data): Action => ({
  payload: data,
  type: SURVEY_UPDATE_SUCCESS
});
