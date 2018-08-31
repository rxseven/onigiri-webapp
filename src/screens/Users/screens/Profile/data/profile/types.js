// @flow
// Module dependencies
import type { Data, Error } from 'types/common/state';

// Action types
export const PROFILE_GET = 'Profile/data/PROFILE_GET';
export const PROFILE_GET_FAILURE = 'Profile/data/PROFILE_GET_FAILURE';
export const PROFILE_GET_REQUEST = 'Profile/data/PROFILE_GET_REQUEST';
export const PROFILE_GET_SUCCESS = 'Profile/data/PROFILE_GET_SUCCESS';
export const UNKNOWN = 'UNKNOWN';

// Static types
export type Profile = {
  creationDate: string,
  email: string,
  gender: ?string,
  id: string,
  language: string,
  name: {
    firstName: string,
    lastName: string
  },
  photo: {
    url: string
  },
  provider: string,
  role: string,
  verified: boolean
};

export type Action =
  | { type: typeof PROFILE_GET }
  | { type: typeof PROFILE_GET_FAILURE, payload: Error }
  | { type: typeof PROFILE_GET_REQUEST }
  | { type: typeof PROFILE_GET_SUCCESS, payload: Data };
