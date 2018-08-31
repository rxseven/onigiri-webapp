// @flow
/* eslint-disable import/prefer-default-export */

// Non-memoized utility selectors
export const getDomain = (state: any, node: Array<string>): any => state.getIn(node);
