// @flow
/* eslint-disable import/prefer-default-export */
import { getDomain } from 'selectors';

// Non-memoized utility selectors
export const getNode = (state: any): any => getDomain(state, ['data']);
