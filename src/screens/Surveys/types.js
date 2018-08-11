// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action types
export const SURVEY_DELETE = 'Survey/SURVEY_DELETE';
export const SURVEY_DELETE_FAILURE = 'Survey/SURVEY_DELETE_FAILURE';
export const SURVEY_DELETE_REQUEST = 'Survey/SURVEY_DELETE_REQUEST';
export const SURVEY_DELETE_SUCCESS = 'Survey/SURVEY_DELETE_SUCCESS';

export const SURVEY_REMOVE = 'Survey/SURVEY_REMOVE';

export const SURVEY_SELECTED_ADD = 'Survey/SURVEY_SELECTED_ADD';
export const SURVEY_SELECTED_REMOVE = 'Survey/SURVEY_SELECTED_REMOVE';

// Static types
export type Action =
  | { type: typeof SURVEY_DELETE, callback: Callback, payload: { id: ID } }
  | { type: typeof SURVEY_DELETE_FAILURE, payload: Error }
  | { type: typeof SURVEY_DELETE_REQUEST }
  | { type: typeof SURVEY_DELETE_SUCCESS, payload: Data }
  | { type: typeof SURVEY_REMOVE, payload: ID }
  | { type: typeof SURVEY_SELECTED_ADD, payload: ID }
  | { type: typeof SURVEY_SELECTED_REMOVE };
