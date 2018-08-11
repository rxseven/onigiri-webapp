// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';
import type { ScrollerMeta, ScrollerQueryMode } from 'types/features/scroller';
import type { Mode, QueryList } from '../../types';

// Action types
export const SURVEYS_CANCEL = 'Surveys/data/SURVEYS_CANCEL';
export const SURVEYS_CANCEL_FAILURE = 'Surveys/data/SURVEYS_CANCEL_FAILURE';
export const SURVEYS_CANCEL_REQUEST = 'Surveys/data/SURVEYS_CANCEL_REQUEST';
export const SURVEYS_CANCEL_SUCCESS = 'Surveys/data/SURVEYS_CANCEL_SUCCESS';

export const SURVEYS_GET = 'Surveys/data/SURVEYS_GET';
export const SURVEYS_GET_FAILURE = 'Surveys/data/SURVEYS_GET_FAILURE';
export const SURVEYS_GET_REQUEST = 'Surveys/data/SURVEYS_GET_REQUEST';
export const SURVEYS_GET_SUCCESS = 'Surveys/data/SURVEYS_GET_SUCCESS';

export const SURVEYS_RESET_DATA = 'Surveys/data/SURVEYS_RESET_DATA';
export const SURVEYS_SELECT_MODE = 'Surveys/data/SURVEYS_SELECT_MODE';

// Static types
export type Item = {
  dateSent: string,
  locked?: boolean,
  no: number,
  subject: string,
  title: string,
  yes: number,
  _id: string
};

export type Empty = {||};
export type List = { [id: string]: Item };
export type Meta = ?ScrollerMeta;

export type QueryMode = {
  mode: Mode,
  query: ScrollerQueryMode
};

export type Action =
  | { type: typeof SURVEYS_CANCEL }
  | { type: typeof SURVEYS_CANCEL_FAILURE }
  | { type: typeof SURVEYS_CANCEL_REQUEST }
  | { type: typeof SURVEYS_CANCEL_SUCCESS }
  | { type: typeof SURVEYS_GET, callback: Callback, payload: { query: QueryList } }
  | { type: typeof SURVEYS_GET_FAILURE, payload: Error }
  | { type: typeof SURVEYS_GET_REQUEST }
  | { type: typeof SURVEYS_GET_SUCCESS, payload: Data }
  | { type: typeof SURVEYS_RESET_DATA }
  | { type: typeof SURVEYS_SELECT_MODE, payload: QueryMode };
