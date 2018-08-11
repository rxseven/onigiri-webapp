// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action and static types
import {
  SURVEY_CREATE,
  SURVEY_CREATE_FAILURE,
  SURVEY_CREATE_REQUEST,
  SURVEY_CREATE_SUCCESS,
  SURVEY_RESET_UI,
  type Action,
  type Form
} from './types';

// Create survey : Start
export const createSurvey = (values: Form, callback: Callback): Action => ({
  callback,
  payload: { values },
  type: SURVEY_CREATE
});

// Create survey : Failure
export const createSurveyFailure = (error: Error): Action => ({
  payload: error,
  type: SURVEY_CREATE_FAILURE
});

// Create survey : Request
export const createSurveyRequest = (): Action => ({
  type: SURVEY_CREATE_REQUEST
});

// Create survey : Success
export const createSurveySuccess = (data: Data): Action => ({
  payload: data,
  type: SURVEY_CREATE_SUCCESS
});

// Reset UI state
export const resetUI = (): Action => ({
  type: SURVEY_RESET_UI
});
