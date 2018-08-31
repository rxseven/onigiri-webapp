// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CREDITS_GET_FAILURE,
  CREDITS_GET_REQUEST,
  CREDITS_GET_SUCCESS
} from 'data/credits/types';
import {
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_RESET
} from 'data/session/types';
import {
  PROFILE_GET_FAILURE,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS
} from '../data/profile/types';

// Reducers and state
import combineReducers, {
  asynchronous as asyncReducer,
  initialState,
  stateShape
} from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Create store
const store = createStore(combineReducers);

// Source data
const source = {
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: initialState
  },
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    asynchronous: {
      delete: {
        profile: {
          error: fromJS({
            ...stateShape,
            delete: {
              ...stateShape.delete,
              profile: {
                ...stateShape.delete.profile,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            delete: {
              ...stateShape.delete,
              profile: {
                ...stateShape.delete.profile,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      },
      get: {
        credits: {
          error: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              credits: {
                ...stateShape.get.credits,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              credits: {
                ...stateShape.get.credits,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        },
        profile: {
          error: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              profile: {
                ...stateShape.get.profile,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              profile: {
                ...stateShape.get.profile,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      },
      post: {
        checkout: {
          error: fromJS({
            ...stateShape,
            post: {
              ...stateShape.post,
              checkout: {
                ...stateShape.post.checkout,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            post: {
              ...stateShape.post,
              checkout: {
                ...stateShape.post.checkout,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      }
    },
    domain: mock.data.initial.getIn(['screens', 'users', 'profile']),
    initial: initialState
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/users/profile/reducers', () => {
  describe('Asynchronous', () => {
    describe('Initial state', () => {
      it('should return the initial state', () => {
        // Mock data
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer()).toEqual(result);
      });

      it('should not affect the current state', () => {
        // Mock data
        const state = undefined;
        const action = { type: UNKNOWN };
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });

    describe('Update state', () => {
      describe('Delete user account', () => {
        it('should handle USER_DELETE_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: USER_DELETE_REQUEST };
          const result = expected.state.asynchronous.delete.profile.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle USER_DELETE_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: USER_DELETE_FAILURE, payload };
          const result = expected.state.asynchronous.delete.profile.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle USER_DELETE_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: USER_DELETE_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Get user profile', () => {
        it('should handle PROFILE_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: PROFILE_GET_REQUEST };
          const result = expected.state.asynchronous.get.profile.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle PROFILE_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: PROFILE_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.profile.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle PROFILE_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: PROFILE_GET_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Checkout', () => {
        it('should handle CHECKOUT_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: CHECKOUT_REQUEST };
          const result = expected.state.asynchronous.post.checkout.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle CHECKOUT_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: CHECKOUT_FAILURE, payload };
          const result = expected.state.asynchronous.post.checkout.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle CHECKOUT_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: CHECKOUT_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Get credits', () => {
        it('should handle CREDITS_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: CREDITS_GET_REQUEST };
          const result = expected.state.asynchronous.get.credits.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle CREDITS_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: CREDITS_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.credits.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle CREDITS_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: CREDITS_GET_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle USER_RESET action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: USER_RESET };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('combineReducers', () => {
    it('should have "data" domain', () => {
      // Mock data
      const { state, result } = genMock(['data']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "ui" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "ui.asynchronous" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui', 'asynchronous']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});
