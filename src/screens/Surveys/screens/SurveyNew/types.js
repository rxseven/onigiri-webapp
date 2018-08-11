// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action types
export const SURVEY_CREATE = 'SurveyNew/SURVEY_CREATE';
export const SURVEY_CREATE_FAILURE = 'SurveyNew/SURVEY_CREATE_FAILURE';
export const SURVEY_CREATE_REQUEST = 'SurveyNew/SURVEY_CREATE_REQUEST';
export const SURVEY_CREATE_SUCCESS = 'SurveyNew/SURVEY_CREATE_SUCCESS';

export const SURVEY_RESET_UI = 'SurveyNew/SURVEY_RESET_UI';

// Static types
export type Form = {
  body: string,
  from: string,
  landing?: string,
  recipients: string,
  sender: string,
  subject: string,
  title: string
};

export type Action =
  | { type: typeof SURVEY_CREATE, callback: Callback, payload: { values: Form } }
  | { type: typeof SURVEY_CREATE_FAILURE, payload: Error }
  | { type: typeof SURVEY_CREATE_REQUEST }
  | { type: typeof SURVEY_CREATE_SUCCESS, payload: Data }
  | { type: typeof SURVEY_RESET_UI };
