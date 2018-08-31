// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Reducers and state
import reducer, { initialState, setLoading, setUser, stateShape } from '../reducers';

// Action types
import {
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_REQUEST,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_REQUEST,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS
} from '../types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Source data
const source = {
  state: {
    initial: initialState,
    user: fromJS(mock.data.source.users.info)
  }
};

// Expected results
const expected = {
  state: {
    initial: initialState,
    loading: {
      signin: {
        active: fromJS({
          ...stateShape,
          loading: {
            ...stateShape.loading,
            signin: true
          }
        }),
        inactive: fromJS({
          ...stateShape,
          loading: {
            ...stateShape.loading,
            signin: false
          }
        })
      },
      verify: {
        active: fromJS({
          ...stateShape,
          authorization: true,
          loading: {
            ...stateShape.loading,
            verify: true
          }
        })
      }
    },
    user: fromJS({
      ...stateShape,
      authorization: true,
      user: mock.data.source.users.info
    })
  }
};

// Unit tests
describe('data/session/reducers', () => {
  describe('Set user state', () => {
    describe('setUser', () => {
      it('should return the correct user state', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.user;
        const result = expected.state.user;

        // Assertions
        expect(setUser(state, payload)).toEqual(result);
      });
    });
  });

  describe('Set loading state', () => {
    describe('setLoading', () => {
      it('should handle default "status" parameter and return the correct loading state', () => {
        // Mock data
        const state = source.state.initial;
        const result = expected.state.loading.signin.active;

        // Assertions
        expect(setLoading(state, 'signin')).toEqual(result);
      });

      it('should accept "status" parameter and return the correct loading state', () => {
        // Mock data
        const state = source.state.initial;
        const result = expected.state.loading.signin.active;

        // Assertions
        expect(setLoading(state, 'signin', true)).toEqual(result);
      });
    });
  });

  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Mock data
      const result = expected.state.initial;

      // Assertions
      expect(reducer()).toEqual(result);
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };
      const result = expected.state.initial;

      // Assertions
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('Update state', () => {
    describe('OAuth', () => {
      describe('Common', () => {
        it('should handle OAUTH_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_REQUEST };
          const result = expected.state.loading.signin.active;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_FAILURE };
          const result = expected.state.loading.signin.inactive;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });
      });

      describe('Facebook', () => {
        it('should handle OAUTH_FACEBOOK_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_FACEBOOK_REQUEST };
          const result = expected.state.loading.signin.active;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_FACEBOOK_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_FACEBOOK_FAILURE };
          const result = expected.state.loading.signin.inactive;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_FACEBOOK_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.user;
          const action = { type: OAUTH_FACEBOOK_SUCCESS, payload };
          const result = expected.state.user;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });
      });

      describe('Google', () => {
        it('should handle OAUTH_GOOGLE_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_GOOGLE_REQUEST };
          const result = expected.state.loading.signin.active;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_GOOGLE_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: OAUTH_GOOGLE_FAILURE };
          const result = expected.state.loading.signin.inactive;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_GOOGLE_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.user;
          const action = { type: OAUTH_GOOGLE_SUCCESS, payload };
          const result = expected.state.user;

          // Assertions
          expect(reducer(state, action)).toEqual(result);
        });
      });
    });

    describe('Sign-in', () => {
      it('should handle SIGNIN_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNIN_REQUEST };
        const result = expected.state.loading.signin.active;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNIN_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNIN_FAILURE };
        const result = expected.state.loading.signin.inactive;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNIN_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.user;
        const action = { type: SIGNIN_SUCCESS, payload };
        const result = expected.state.user;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Sign-up', () => {
      it('should handle SIGNUP_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNUP_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNUP_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNUP_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNUP_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.user;
        const action = { type: SIGNUP_SUCCESS, payload };
        const result = expected.state.user;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Sign-out', () => {
      it('should handle SIGNOUT_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNOUT_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNOUT_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNOUT_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SIGNOUT_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SIGNOUT_SUCCESS };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Delete user account', () => {
      it('should handle USER_DELETE_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_DELETE_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_DELETE_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_DELETE_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_DELETE_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_DELETE_SUCCESS };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Get user info', () => {
      it('should handle USER_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_GET_REQUEST };
        const result = expected.state.loading.verify.active;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_GET_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.user;
        const action = { type: USER_GET_SUCCESS, payload };
        const result = expected.state.user;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});
