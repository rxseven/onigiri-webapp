// @flow
// Module dependencies
import type { Callback } from 'types/common/utilities';

// Interface helpers
export default {
  FOUC: (callback: Callback): void => {
    setTimeout((): void => {
      callback();
    }, 200);
  }
};
