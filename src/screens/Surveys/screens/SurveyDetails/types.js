// @flow
// Module dependencies
import type { Asynchronous } from 'types/common/state';

// Asynchronous
export type Async = {
  delete: {
    survey: Asynchronous
  },
  get: {
    recipients: Asynchronous,
    survey: Asynchronous
  },
  patch: {
    survey: Asynchronous
  }
};
