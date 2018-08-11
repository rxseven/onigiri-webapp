// @flow
// Module dependencies
import type { Asynchronous, ID } from 'types/common/state';
import type { ScrollerMode, ScrollerPagination } from 'types/features/scroller';

// Action types
export const SURVEYS_RESET_VIEW = 'Surveys/SURVEYS_RESET_VIEW';
export const SURVEYS_SAVE_PAGINATION = 'Surveys/SURVEYS_SAVE_PAGINATION';

// Static types
export type Async = {
  get: {
    ...Asynchronous,
    loaded: boolean
  }
};

export type Mode = ScrollerMode;
export type Pagination = ?ScrollerPagination;
export type QueryList = ?{};
export type Screen = number;

export type View = {
  mode: Mode,
  pagination: Pagination,
  query: QueryList,
  selected: ?ID
};

export type Action =
  | { type: typeof SURVEYS_RESET_VIEW }
  | { type: typeof SURVEYS_SAVE_PAGINATION, payload: Pagination };
