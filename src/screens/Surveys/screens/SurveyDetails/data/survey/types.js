// @flow
// Module dependencies
import type { Data, Error, ID } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action types
export const RECIPIENTS_GET = 'Survey/data/RECIPIENTS_GET';
export const RECIPIENTS_GET_FAILURE = 'Survey/data/RECIPIENTS_GET_FAILURE';
export const RECIPIENTS_GET_REQUEST = 'Survey/data/RECIPIENTS_GET_REQUEST';
export const RECIPIENTS_GET_SUCCESS = 'Survey/data/RECIPIENTS_GET_SUCCESS';

export const SURVEY_GET = 'Survey/data/SURVEY_GET';
export const SURVEY_GET_FAILURE = 'Survey/data/SURVEY_GET_FAILURE';
export const SURVEY_GET_REQUEST = 'Survey/data/SURVEY_GET_REQUEST';
export const SURVEY_GET_SUCCESS = 'Survey/data/SURVEY_GET_SUCCESS';

export const SURVEY_RESET_DATA = 'Survey/data/SURVEY_RESET_DATA';

export const SURVEY_UPDATE = 'Survey/SURVEY_UPDATE';
export const SURVEY_UPDATE_FAILURE = 'Survey/SURVEY_UPDATE_FAILURE';
export const SURVEY_UPDATE_REQUEST = 'Survey/SURVEY_UPDATE_REQUEST';
export const SURVEY_UPDATE_SUCCESS = 'Survey/SURVEY_UPDATE_SUCCESS';

// Static types
export type Recipient = {
  [id: number]: {
    _id: string,
    responded: boolean,
    email: string
  }
};

export type Survey = {
  archived: boolean,
  body: string,
  completed: boolean,
  dateSent: string,
  from: string,
  landing?: string,
  lastResponded?: string,
  locked?: boolean,
  no: number,
  recipients?: Recipient,
  sender: string,
  subject: string,
  title: string,
  yes: number,
  _id: string
};

export type Update = {
  [mode: string]: boolean
};

export type Action =
  | { type: typeof RECIPIENTS_GET, payload: ID }
  | { type: typeof RECIPIENTS_GET_FAILURE, payload: Error }
  | { type: typeof RECIPIENTS_GET_REQUEST }
  | { type: typeof RECIPIENTS_GET_SUCCESS, payload: Data }
  | { type: typeof SURVEY_GET, callback: Callback, payload: { id: ID } }
  | { type: typeof SURVEY_GET_FAILURE, payload: Error }
  | { type: typeof SURVEY_GET_REQUEST }
  | { type: typeof SURVEY_GET_SUCCESS, payload: Data }
  | { type: typeof SURVEY_RESET_DATA }
  | { type: typeof SURVEY_UPDATE, payload: { id: ID, values: {} } }
  | { type: typeof SURVEY_UPDATE_FAILURE, payload: Error }
  | { type: typeof SURVEY_UPDATE_REQUEST }
  | { type: typeof SURVEY_UPDATE_SUCCESS, payload: Data };
